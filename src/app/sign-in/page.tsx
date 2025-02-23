"use client";

import Link from 'next/link';
import TextInut from '@/components/TextInut';
import Paper from '@/components/Paper';
import Button from '@/components/Button';

const LoginPage = () => {
    return (
        <Paper className="authWrapper">
            <h1 className="authTitle">
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
            <div className="authLink">
                <Link href="/sign-up">Sign Up</Link>
            </div>
        </Paper>
    )
}

export default LoginPage;