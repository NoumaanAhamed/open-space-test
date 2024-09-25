import { auth } from "@/auth";
import { SignIn } from '@/components/sign-in';
import { SignOut } from '@/components/sign-out';
import { ModeToggle } from "@/components/toggle-theme";
import { UserProfile, User } from '@/components/user-profile';

export default async function Home() {
  const session = await auth();

  return (
    <div className="max-w-md mx-auto mt-10 space-y-8">
      <ModeToggle />
      {session?.user ? (
        <>
          <UserProfile user={session.user as User} />
          <div className="flex justify-center">
            <SignOut />
          </div>
        </>
      ) : (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">Sign In</h2>
          <div className="flex justify-center space-x-4">
            <SignIn provider="github" />
            <SignIn provider="google" />
          </div>
        </div>
      )}
    </div>
  );
}