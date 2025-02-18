import cn from '@/utils/cn';

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
            className={cn(`
                p-6 bg-white shadow-md rounded-md
            `, variant === 'densed' && 'pt-4 pb-4', className)}
        >
            {children}
        </div>
    )
}

export default Paper;