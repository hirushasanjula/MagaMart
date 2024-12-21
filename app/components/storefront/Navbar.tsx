import Link from "next/link";
import NavbarLinks from "./NavbarLinks";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { LucideShoppingCart } from "lucide-react";
import UserDropdown from "./UserDropdown";
import { Button } from "@/components/ui/button";
import {LoginLink, RegisterLink} from '@kinde-oss/kinde-auth-nextjs/components'
import { redis } from "@/lib/redis";
import { Cart } from "@/lib/interfaces";


export async function Navbar() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    const cart: Cart | null = await redis.get(`cart-${user.id}`)

    const total = cart?.items.reduce((Sum, item) => Sum + item.quantity, 0) || 0;

    return (
        <nav className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center">
                <Link href="/">
                    <h1 className="text-black font-bold text-xl lg:text-3xl">
                        Maga<span className="text-primary">Mart</span>
                    </h1>
                </Link>
                <NavbarLinks />
            </div>

            <div className="flex items-center">
                {user ? (
                    <>
                    <Link href='/cart' className="group p-2 flex items-center mr-2">
                        <LucideShoppingCart className="h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                        <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                            {total}
                        </span>
                    </Link>

                    <UserDropdown
                     email={user.email as string}
                      name={user.given_name as string}
                      userImage={user.picture ?? `https://avatar.vercel.sh/${user.given_name}`}
                    />
                    </>
                ): (
                    <div className="hidden md:flex md:flex-1 md:items-center md:justify-end md:space-x-2">
                     <Button variant="ghost" asChild>
                        <LoginLink>Login</LoginLink> 
                    </Button>  
                    <span className="h-6 w-px bg-gray-200"></span>  
                    <Button variant="ghost" asChild>
                        <RegisterLink>Create Account</RegisterLink>
                    </Button>
                    </div>
                )}
            </div>
        </nav>
    )
}