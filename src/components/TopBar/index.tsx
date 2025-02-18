import Link from 'next/link';

import Button from '@/components/Button';

const TopBar = () => {
    return (
        <div className="bg-white p-4 shadow-md fixed top-0 left-0 w-full z-20">
            <div className="container mx-auto flex justify-between items-center">
                <Link 
                    href="/"
                    className="text-2xl font-bold font-mono"
                >
                    FOP-CALC
                </Link>

                <div className="grid grid-cols-2 gap-4">
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