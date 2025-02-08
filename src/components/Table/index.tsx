import cn from '@/utils/cn';

interface TableProps {
    children: React.ReactNode;
}

export const Table = ({ children } : TableProps) => {
    return (
        <div className="block max-w-full overflow-x-scroll overflow-y-hidden">
            <table 
                className="w-full border"
            >
                {children}
            </table>
        </div>
    )
}

interface TableHeadProps {
    children: React.ReactNode;
    onClick?: (event: unknown) => void;
    canSort?: boolean;
}

export const TableHeadCell = ({ 
    children, 
    onClick,
    canSort,
} : TableHeadProps) => {
    return (
        <th 
            className={cn(`
                    text-left px-4 py-2 border-b transition
                `, 
                canSort && `cursor-pointer hover:bg-gray-100`
            )}
            onClick={onClick}
        >
            {children}
        </th>
    )
}

interface TableCellProps {
    children: React.ReactNode;
    onClick?: (event: unknown) => void;
    className?: string;
}

export const TableCell = ({ 
    children,
    onClick,
    className,
} : TableCellProps) => {
    return (
        <td 
            className={cn(`
                border-b px-4 py-2
                `, onClick && `cursor-pointer hover:bg-gray-100`,
                className
            )}
            onClick={onClick}
        >
            {children}
        </td>
    )
}