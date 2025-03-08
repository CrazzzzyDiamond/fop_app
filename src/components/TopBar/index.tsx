import Link from 'next/link';
import Button from '@/components/Button';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

import s from './topBar.module.css';

const TopBar = async () => {
    
    return (
        <div className={s.topBar}>
            <div className={s.topBarContainer}>
                <Link 
                    href="/"
                    className={s.topBarLogo}
                >
                    FOP-CALC
                </Link>

                <div className={s.topBarButtons}>
                    <SignedOut>
                        <SignInButton mode='modal'>
                            <Button variant="secondary">
                                Увійти
                            </Button>
                        </SignInButton>
                        <SignUpButton mode='modal'>
                            <Button variant="secondary">
                                Реєстрація
                            </Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                    <UserButton />
                    </SignedIn>
                    {/* <SignInButton /> */}
                    {/* 
                     */}
                </div>
            </div>
        </div>
    )
}

export default TopBar;