import { signIn } from "@/auth";

type Provider = "github" | "google";

interface SignInProps {
    provider: Provider;
}

export function SignIn({ provider }: SignInProps) {
    const providerName = provider.charAt(0).toUpperCase() + provider.slice(1);

    return (
        <form
            action={async () => {
                "use server"
                await signIn(provider)
            }}
        >
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                Sign in with {providerName}
            </button>
        </form>
    );
}