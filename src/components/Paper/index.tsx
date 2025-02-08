import cn from '@/utils/cn';

interface PaperProps {
    children: React.ReactNode;
    className?: string;
}

const Paper = ({
    children,
    className,
}: PaperProps) => {
    return (
        <div 
            className={cn(`
                p-4 bg-white shadow-md rounded-md
            `, className)}
        >
            {children}
        </div>
    )
}

export default Paper;