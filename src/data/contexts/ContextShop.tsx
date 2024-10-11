import { createContext, useEffect, useState } from "react";
import ItemShop from "../model/ItemShop";
import Product from "../model/Product";
import useLocalStorage from "../hooks/useLocalStorage";

interface ContextShopProps {
    itens: ItemShop[]
    quantityItens: number
    added: (item: Product) => void
    deleteItem: (item: Product) => void
}

const ContextShop = createContext<ContextShopProps>({} as any);

export function ShopProvider(props: any) {
    const [itens, setItens] = useState<ItemShop[]>([])
    const { set, get } = useLocalStorage()

    useEffect(() => {
        const shop = get('shop')
        if (shop) {
            setItens(shop)
        }

    }, [get])

    function added(product: Product) {
        const index = itens.findIndex((i) => i.product.id === product.id)

        if (index === -1) {
            updateItens([...itens, {product, quantity: 1}])
        } else {
            const newItens = [...itens]
            newItens[index].quantity++
            updateItens(newItens)
        }
    }

    function deleteItem(product: Product) {
        const newItens = itens
            .map((i) => {
                if (i.product.id === product.id) {
                    i.quantity--
                }
                return i
            })
            .filter((i) => i.quantity > 0)
        updateItens(newItens)
    }

    function updateItens(newItens: ItemShop[]) {
        setItens(newItens)
        set('shop', newItens)
    }

    return (
        <ContextShop.Provider 
            value={{
                itens,
                added,
                deleteItem,
                get quantityItens() {
                    return itens.reduce((total, item) => total + item.quantity, 0)
                }
            }}
        >
            {props.children}
        </ContextShop.Provider>
    )
}

export default ContextShop