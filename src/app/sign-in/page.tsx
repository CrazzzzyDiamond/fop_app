"use client";

import Paper from '@/components/Paper';
import { CredentialSignIn, OAuthButtonGroup } from '@stackframe/stack';

const LoginPage = () => {
    return (
        <Paper className="authWrapper">
            <h1 className='title'>Sign In</h1>
            <OAuthButtonGroup type="sign-in" />
            <CredentialSignIn />
        </Paper>
    )
}

export default LoginPage;