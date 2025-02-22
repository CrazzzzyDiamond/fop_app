import { clsx } from 'clsx';
import s from './paper.module.css';

interface PaperProps {
    children: React.ReactNode;
    className?: string;
    variant?: 'densed';
}

const Paper = ({
    children,
    className,
    variant,
}: PaperProps) => {
    return (
        <div 
            className={clsx(
                s.paper,
                variant === 'densed' && s.paperDensed,
                className,
            )}
        >
            {children}
        </div>
    )
}

export default Paper;