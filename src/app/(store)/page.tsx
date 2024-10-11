'use client'
import CardProduct from "@/components/product/CardProduct";
import Page from "@/components/template/Page";
import products from "@/data/constants/products"

export default function Home() {
  return (
    <Page>
      <div className="flex gap-5 justify-center flex-wrap" >
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </Page>
  );
}
