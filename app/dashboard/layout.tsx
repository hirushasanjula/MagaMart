import React from 'react'
import DashboardNav from '../components/dashboard/DashboardNav'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { CircleUser, MenuIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { DialogTitle } from '@radix-ui/react-dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { redirect } from 'next/navigation'
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";


export default async function DashboardLayout({children}: {children: React.ReactNode}) {
  const {getUser} = getKindeServerSession()
  const user = await getUser()

  if(!user || user.email !== "hsanjula518@gmail.com") {
    return redirect('/');
  }

  return (
    <div className="flex w-full flex-col max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
      <header className='sticky top-0 flex h-16 items-center justify-between gap-4 border-b
       bg-white'>
        <nav className='hidden font-semibold md:flex md:flex-row md:items-center md:gap-5
         md:text-sm lg:gap-6'>
        <DashboardNav />
        </nav>

        <Sheet>
          <SheetTrigger asChild>
            <Button className='shrink-0 md:hidden' variant="outline" size="icon">
              <MenuIcon className='h-5 w-5' />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <VisuallyHidden>
              <DialogTitle>Navigation Menu</DialogTitle>
            </VisuallyHidden>
            <nav className='flex flex-col gap-6 text-sm font-medium mt-5'>
              <DashboardNav />
            </nav>
          </SheetContent>
        </Sheet>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className='rounded-full'>
              <CircleUser style={{ height: '25px', width: '25px' }}  />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent  align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <LogoutLink>Logout</LogoutLink>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className='my-5'>
        {children}
      </main>
    </div>
  )
}
