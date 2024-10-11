'use client'

import { ShopProvider } from "@/data/contexts/ContextShop"

export default function Layout(props: any) {
    return (
        <ShopProvider>
            {props.children}
        </ShopProvider>
        
    )
}