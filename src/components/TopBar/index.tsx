import Link from 'next/link';

import Button from '@/components/Button';

const TopBar = () => {
    return (
        <div className="bg-white p-4 shadow-md fixed top-0 left-0 w-full z-10">
            <div className="container mx-auto flex justify-between items-center">
                <Link 
                    href="/"
                    className="text-2xl font-bold font-mono"
                >
                    FOP-CALC
                </Link>

                <div className="grid grid-cols-2 gap-4">
                    <Button>
                        <Link href="/sign-in">
                            Login
                        </Link>
                    </Button>
                    <Button variant="secondary">
                        <Link href="/sign-up">
                            Sign Up
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TopBar;