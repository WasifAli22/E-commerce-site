"use client"
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export default function UserInfo() {
  const { isLoaded } = useUser();

  return (
    <>
      <div className="">
        {
          isLoaded ? (
            <Link href={`/sign-in`} className="w-full mx-auto lg:w-auto text-center inline-flex items-center hbtn bg-[#212121] font-[600] transition-all delay-150 duration-100 px-4 py-2 rounded-md text-white">
              SignIn
            </Link>

          ) : (
            <UserButton afterSignOutUrl="/" />
          )
        }

      </div>
    </>
  )
}
{/* <UserButton afterSignOutUrl="/"/>   */ }