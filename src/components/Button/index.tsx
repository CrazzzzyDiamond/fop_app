import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type ButtonPropsBase = {
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
};

type ButtonWithLabel = ButtonPropsBase & {
    label: string;
    children?: never;
};

type ButtonWithChildren = ButtonPropsBase & {
    children: React.ReactNode;
    label?: never;
};

type ButtonProps = ButtonWithLabel | ButtonWithChildren;

const Button = ({ 
    onClick, 
    label,
    children,
    variant = 'primary'
 }: ButtonProps) => {
    return (
        <button
            className={twMerge(clsx(`
                w-full px-3 py-2 border border-gray-300 
                rounded-md focus:outline-none focus:border-blue-500 
                bg-blue-500 text-white hover:bg-blue-600
                transition duration-200 ease-in-out min-w-28
            `, variant === 'secondary' && `
                bg-white text-gray-900 border-gray-300
                hover:bg-gray-100
            `))}
            onClick={onClick}
        >
            {label || children}
        </button>
    );
};

export default Button;