'use client';
import { useEffect, useState } from 'react';

// Define a TypeScript interface for a user
interface User {
    _id: string;
    name: string;
    email: string;
    password: string; // Be cautious with displaying passwords
}

// Define the component function
export default function Users() {
    // State to store users with type `User[]` (array of User)
    const [users, setUsers] = useState<User[]>([]);

    // Function to fetch users
    async function getAllUsers() {
        try {
            const res = await fetch('/api/users');
            const data = await res.json();
            console.log('Fetched data:', data);

            // Adjust according to the actual response format
            if (Array.isArray(data.users)) {
                setUsers(data.users);
            } else {
                console.error('Unexpected data format:', data);
            }
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    }

    // Fetch users on component mount
    useEffect(() => {
        getAllUsers();
    }, []);

    return (
        <div className="p-6  min-h-screen">
            <h1 className="text-3xl text-blue-950 font-extrabold mb-4 text-center">Users List</h1>
            {users.length > 0 ? (
                <ul className="space-y-4">
                    {users.map((user) => (
                        <li key={user._id} className="bg-gray-500/40 p-4 rounded shadow-md">
                            <p className="text-lg text-blue-800 font-semibold">{user.name}</p>
                            <p className="text-sm text-black">Email: {user.email}</p>
                          
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-blue-900">Loading....</p>
            )}
        </div>
    );
}
