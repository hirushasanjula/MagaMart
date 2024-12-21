import { addItem } from "@/app/action";
import FeaturedProducts from "@/app/components/storefront/FeaturedProducts";
import { ImageSlider } from "@/app/components/storefront/ImageSlider";
import { ShoppingCartButton } from "@/app/components/SubmitButton";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db"
import { ShoppingCartIcon, StarIcon } from "lucide-react";
import { notFound } from "next/navigation"

async function getData(productId: string) {
    const data = await prisma.product.findUnique({
        where: {
            id: productId
        },
        select: {
            price: true,
            images: true,
            description: true,
            name: true,
            id: true,
        }
    })

    if(!data) {
        return notFound()
    }

    return data;
}

export default async function PorductIdRoute({params}: {params: {id: string}}) {
    const data = await getData(params.id)
    const addProducttoShoppingCart = addItem.bind(null, data.id)
  return (
    <>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start lg:gap-x-24 py-6">
        <ImageSlider images={data.images}/>
        <div>
            <h1 className="text-3xl font-extrabold tracking-tight">
                {data.name}
            </h1>
            <p className="text-3xl mt-2 text-gray-900">${data.price}</p>
            <div className="mt-3 flex items-center gap-1">
                <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500"/>
                <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500"/>
                <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500"/>
                <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500"/>
                <StarIcon className="h-4 w-4 text-yellow-500 fill-yellow-500"/>
            </div>
            <p className="text-base text-gray-700 mt-6">{data.description}</p>

            <form action={addProducttoShoppingCart}>
                <ShoppingCartButton/>
            </form>
        </div>
     </div>

     <div className="mt-16">
        <FeaturedProducts/>
     </div>
    </>
  )
}