"use client";

import Link from 'next/link';
import Paper from '@/components/Paper';
import TextInut from '@/components/TextInut';
import Button from '@/components/Button';

const RegisterPage = () => {
    return (
        <Paper className="authWrapper">
            <h1 className="authTitle">
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
                fullWidth
            />
            <div className="authLink">
                <Link href="/sign-in">Sign In</Link>
            </div>
        </Paper>
    )
}

export default RegisterPage;