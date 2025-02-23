"use client";

import Paper from '@/components/Paper';
import TextInut from '@/components/TextInut';
import Button from '@/components/Button';

const LoginPage = () => {
    return (
        <Paper className="authWrapper">
            <h1 className="authTitle">
                Create new password
            </h1>
            <p className="authHelpText">
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
        </Paper>
    )
}

export default LoginPage;