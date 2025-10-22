'use client'

import {authClient} from "@/lib/auth-client";

async function signInWithGoogle() {
    await authClient.signIn.social({
        /**
         * The social provider ID
         * @example "GitHub", "google", "apple"
         */
        provider: "google",
        /**
         * A URL to redirect after the user authenticates with the provider
         * @default "/"
         */
        callbackURL: "/",
        /**
         * A URL to redirect if an error occurs during the sign in process
         */
        errorCallbackURL: "/",
        /**
         * A URL to redirect if the user is newly registered
         */
        newUserCallbackURL: "/",
        /**
         * disable the automatic redirect to the provider.
         * @default false
         */
        disableRedirect: false,
    });
}

async function handleSignOut() {
    await authClient.signOut();
}

export function LoginLogoutButton() {
    const {
        data: session,
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()

    if (!session) {
        return <p className="hover:text-yellow-400 transition" onClick={signInWithGoogle}>Login</p>
    }
    else {
        return <p className="hover:text-yellow-400 transition" onClick={handleSignOut}>Logout</p>
    }
}