"use client";

import Link from 'next/link';

import TextInut from '@/components/TextInut';
import Button from '@/components/Button';

const RegisterPage = () => {
    return (
        <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl text-center font-semibold mt-6 mb-8">
                Sign Up
            </h1>
            <TextInut
                placeholder="Email"
            />
            <TextInut
                placeholder="Password"
                type="password"
            />
            <TextInut
                placeholder="Repeat Password"
                type="password"
            />
            <Button
                label="Sign Up"
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

export default RegisterPage;