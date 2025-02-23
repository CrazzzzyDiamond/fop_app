"use client";

import Link from 'next/link';
import Paper from '@/components/Paper';
import TextInut from '@/components/TextInut';
import Button from '@/components/Button';

const LoginPage = () => {
    return (
        <Paper className="authWrapper">
            <h1 className="authTitle">
                Reset Password
            </h1>
            <p className="authHelpText">
                Enter the email address associated with your account, and we’ll email you a link to reset your password.
            </p>
            <TextInut
                placeholder="Email"
            />
            <Button
                label="Reset"
                onClick={() => console.log('Sign In')}
                fullWidth
            />
            <div className="
                text-center mt-4 text-blue-500 cursor-pointer hover:underline
                display: block
            ">
                <Link href="/sign-in">Sign In</Link>
            </div>
        </Paper>
    )
}

export default LoginPage;