import useStore from "@/data/hooks/useStore"
import Product from "@/data/model/Product"
import Image from "next/image"

export interface CardProductProps {
    product: Product
}

export default function CardProduct(props: CardProductProps) {
    const { added } = useStore();
    const { name, description, price, image } = props.product

    return (
        <div className="flex flex-col w-72 bg-zinc-900">
            <div className="relative w-72 h-52">
                <Image src={image} alt={name} fill className="object-cover" />
            </div>
            <div className="flex-1 flex flex-col gap-4 p-5">
                <h2 className="text-xl text-white font-bold"  >{name}</h2>
                <p className="flex-1 text-sm text-zinc-400">{description}</p>
                <div className="flex justify-between items-center text-white">
                    <span className="text-lg font-semibold mt-2">R${price.toFixed(2)}</span>
                    <button 
                        onClick={() => added(props.product)} 
                        className="border rounded-full px-5 py-1 text-sm"
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}