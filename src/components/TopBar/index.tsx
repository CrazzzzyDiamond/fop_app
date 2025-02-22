import Link from 'next/link';
import Button from '@/components/Button';

import s from './topBar.module.css';

const TopBar = () => {
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
                    <Button linkTo="/sign-in" variant="secondary">
                        Login
                    </Button>
                    <Button linkTo="/sign-up" variant="secondary">
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TopBar;