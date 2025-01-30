"use client";

import Link from 'next/link';

import TextInut from '@/components/TextInut';
import Button from '@/components/Button';

const LoginPage = () => {
    return (
        <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl text-center font-semibold mt-6 mb-8">
                Sign In
            </h1>
            <TextInut
                placeholder="Email"
            />
            <TextInut
                placeholder="Password"
                type="password"
            />
            <Button
                label="Sign In"
                onClick={() => console.log('Sign In')}
                fullWidth
            />
            <div className="
                text-center mt-4 text-blue-500 cursor-pointer hover:underline
                display: block
            ">
                <Link href="/sign-up">Sign Up</Link>
            </div>
        </div>
    )
}

export default LoginPage;