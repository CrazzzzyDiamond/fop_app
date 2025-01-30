"use client";

import TextInut from '@/components/TextInut';
import Button from '@/components/Button';

const LoginPage = () => {
    return (
        <div className="w-96 bg-white p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl text-center font-semibold mt-6 mb-4">
                Create new password
            </h1>
            <p className="text-center text-md text-gray-500 mb-4">
                Enter the new password for your account.                    
            </p>
            <TextInut
                placeholder="New Password"
                type="password"
            />
            <TextInut
                placeholder="Repeat New Password"
                type="password"
            />
            <Button
                label="Confirm"
                onClick={() => console.log('Sign In')}
                fullWidth
            />
        </div>
    )
}

export default LoginPage;