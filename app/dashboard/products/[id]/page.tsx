import prisma from "@/lib/db"
import { notFound } from "next/navigation"
import { EditForm } from "@/app/components/dashboard/EditForm"

async function getData(productId: string) {
    const data = await prisma.product.findUnique({
        where: {
            id: productId, 
        }
    })
    if(!data) {
        return notFound()
    }

    return data
}

export default async function EditRoute({params}: {params: {id: string}}) {
    const data = await getData(params.id)
  return (
    <div>
        <EditForm data={data}/>
    </div>
  )
}
