import Image from "next/image";

export interface User {
    name?: string;
    email?: string;
    image?: string;
    [key: string]: any; // This allows for additional properties
}

interface UserProfileProps {
    user: User | null;
}

export function UserProfile({ user }: UserProfileProps) {
    if (!user) return null;

    return (
        <div className="w-full border border-gray-200 rounded-lg p-4">
            <div className="mb-4">
                <h2 className="text-xl font-bold">User Profile</h2>
            </div>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-300 flex-shrink-0">
                    {user.image ? (
                        <Image
                            src={user.image}
                            alt={user.name ?? "User"}
                            width={48}
                            height={48}
                            className="object-cover rounded-full"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-xl text-white">
                            {user.name?.charAt(0) ?? "U"}
                        </div>
                    )}
                </div>
                <div>
                    <p className="text-lg font-medium">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                </div>
            </div>
            <div className="mt-4">
                <h3 className="font-semibold">User Details:</h3>
                <pre className="mt-2 w-full rounded-lg bg-gray-800 p-4 text-white overflow-auto text-xs">
                    <code>{JSON.stringify(user, null, 2)}</code>
                </pre>
            </div>
        </div>
    );
}