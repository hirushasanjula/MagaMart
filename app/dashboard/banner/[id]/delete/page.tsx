import { deleteBanner } from '@/app/action'
import SubmitButton from '@/app/components/SubmitButton'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import React from 'react'

export default function DeleteBannerRoute({params}: {params: {id: string}}) {
  return (
    <div className='h-[80vh] w-full flex items-center justify-center'>
       <Card className='max-w-xl'>
        <CardHeader>
            <CardTitle>Are you sure?</CardTitle>
            <CardDescription>
                This action cannot be undone. This will permanently delete the banner.
            </CardDescription>
        </CardHeader>
        <CardFooter className='w-full flex justify-between'>
            <Button variant="secondary" asChild>
                <Link href="/dashboard/banner">Cancel</Link>
            </Button>
            <form action={deleteBanner}>
                <input type="hidden" name="bannerId" value={params.id}/>
                <SubmitButton variant="destructive" text='Delete Product'/>
            </form>
        </CardFooter>
       </Card>
    </div>
  )
}
