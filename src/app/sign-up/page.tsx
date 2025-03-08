"use client";

import Paper from '@/components/Paper';
import { CredentialSignUp, OAuthButtonGroup } from '@stackframe/stack';

const RegisterPage = () => {
    return (
        <Paper className="authWrapper">
            <h1 className='title'>Sign Up</h1>
            
            <OAuthButtonGroup type="sign-up" />
            <CredentialSignUp />
        </Paper>
    )
}

export default RegisterPage;