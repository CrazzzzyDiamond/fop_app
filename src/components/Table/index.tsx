import { clsx } from 'clsx';
import s from './table.module.css';

interface TableProps {
    children: React.ReactNode;
}

export const Table = ({ children } : TableProps) => {
    return (
        <div className={s.tableWrapper}>
            <table 
                className={s.table}
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
            className={clsx(
                s.tableHeadCell,
                canSort && s.tableHeadCellWithSort,
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
            className={clsx(s.tableCell, className)}
            onClick={onClick}
        >
            {children}
        </td>
    )
}