'use client'

import { useRouter } from 'next/navigation';
import { authClient } from "@/lib/auth-client";

async function signInWithGoogle() {
    await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
        errorCallbackURL: "/",
        newUserCallbackURL: "/",
        disableRedirect: false,
    });
}

export function LoginLogoutButton({ initialSession }: { initialSession: any }) {
    const router = useRouter();

    async function handleSignOut() {
        await authClient.signOut();
        router.refresh(); // re-renders the server Navbar with the cleared cookie
    }

    if (!initialSession) {
        return <p className="px-6 hover:text-yellow-400 transition cursor-pointer" onClick={signInWithGoogle}>Login</p>
    }

    return <p className="px-6 hover:text-yellow-400 transition cursor-pointer" onClick={handleSignOut}>Logout</p>
}
