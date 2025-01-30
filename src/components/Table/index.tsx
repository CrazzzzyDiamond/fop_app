import cn from '@/utils/cn';

interface TableProps {
    children: React.ReactNode;
}

export const Table = ({ children } : TableProps) => {
    return <table className="w-full border border-r">{children}</table>
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
            `, canSort && `cursor-pointer hover:bg-gray-100`)}
            onClick={onClick}
        >
            {children}
        </th>
    )
}

export const TableCell = ({ children } : TableProps) => {
    return (
        <td className="border-b px-4 py-2">
            {children}
        </td>
    )
}