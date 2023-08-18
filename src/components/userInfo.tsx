// Import required dependencies and modules
import { UserButton, SignInButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs/app-beta/client";
import { usePathname } from "next/navigation";

// Component to manage user information and authentication status
function UserInfo() {
  // Get the current pathname using the usePathname hook
  const path = usePathname();

  return (
    <div>
      {/* Render the UserButton when the user is signed in */}
      <SignedIn>
        <UserButton afterSignOutUrl="/" />
      </SignedIn>
      {/* Render the SignInButton when the user is signed out */}
      <SignedOut>
        <SignInButton mode="modal" afterSignInUrl={`${path}#`}>
          {/* Custom styled button for sign-in */}
          <button className="w-full mx-auto lg:w-auto text-center inline-flex items-center hbtn bg-[#212121] font-[600] transition-all delay-150 duration-100 px-4 py-2 rounded-md text-white">
            SignIn
          </button>
        </SignInButton>
      </SignedOut>
    </div>
  );
}

// Export the UserInfo component
export default UserInfo;
