'use client'
import AreaItemShop from "@/components/shop/AreaItemShop";
import EmptyShop from "@/components/shop/EmptyShop";
import TotalShop from "@/components/shop/TotalShop";
import Page from "@/components/template/Page";
import useStore from "@/data/hooks/useStore";

export default function ShopPage() {
    const { itens, added, deleteItem } = useStore();
    
    return (
        <Page className="flex flex-col gap-10">
            {itens.length === 0 ? (
                <EmptyShop />
            ) : (
                <>
                    <div className="flex flex-col gap-5">
                        {itens.map((item) => (
                            <AreaItemShop 
                                key={item.product.id} 
                                item={item} 
                                added={(item) => added(item.product)}
                                deleteItem={(item) => deleteItem(item.product)} 
                            />
                        ))}
                    </div>
                    <TotalShop itens={itens} />
                </>
            )}
        </Page>
    )
}