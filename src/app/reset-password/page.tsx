"use client";

import Link from 'next/link';

import TextInut from '@/components/TextInut';
import Button from '@/components/Button';

const LoginPage = () => {
    return (
        <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl text-center font-semibold mt-6 mb-4">
                Reset Password
            </h1>
            <p className="text-center text-md text-gray-500 mb-4">
                Enter the email address associated with your account, and we’ll email you a link to reset your password.
            </p>
            <TextInut
                placeholder="Email"
            />
            <Button
                label="Reset"
                onClick={() => console.log('Sign In')}
            />
            <div className="
                text-center mt-4 text-blue-500 cursor-pointer hover:underline
                display: block
            ">
                <Link href="/sign-in">Sign In</Link>
            </div>
        </div>
    )
}

export default LoginPage;