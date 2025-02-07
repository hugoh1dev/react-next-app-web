import { IconShoppingCartOff } from "@tabler/icons-react";
import Link from "next/link";

export default function EmptyShop() {
    return (
        <div className="flex flex-col items-center gap-4 text-zinc-500">
            <IconShoppingCartOff size={150} stroke={0.5} />
            <div>
                <h2 className="text-3xl">Your cart is empty</h2>
                <p>Add products by clicking the button below!</p>
            </div>
            <Link href="/" className="bg-green-500 text-white rounded-sm px-4">
                See Products
            </Link>
        </div>
    )
}