import { UserButton, SignInButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";
import { usePathname } from "next/navigation";
function UserInfo() {
  const path = usePathname();

  return (
    <div>
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal" afterSignInUrl={`${path}#`}>
          <button className="w-full mx-auto lg:w-auto text-center inline-flex items-center hbtn bg-[#212121] font-[600] transition-all delay-150 duration-100 px-4 py-2 rounded-md text-white">
            SignIn
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  )
}
{/* <UserButton afterSignOutUrl="/"/>   */ }
export default UserInfo