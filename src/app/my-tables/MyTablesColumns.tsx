import { createColumnHelper } from '@tanstack/react-table';
import Button from '@/components/Button';
import s from './myTables.module.css';

export type MyTable = {
    name: string;
    createdAt: string;
    updatedAt: string;
    id: string;
    year: string;
}

const columnHelper = createColumnHelper<MyTable>();

export const createColumnsWithEditHandler = (
    handleTableCellClick: (rowId: string) => void, 
    handleDeleteTable: (rowId: string) => void,
) => {
    return [
        columnHelper.accessor('name', {
            header: 'Name',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('year', {
            header: 'Year',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('createdAt', {
            header: 'Created',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('updatedAt', {
            header: 'Updated',
            cell: info => info.getValue(),
        }),
        columnHelper.display( {
            id: 'actions',
            cell: ({row}) => (
                <div className={s.tableControlButtons}>
                    <Button 
                        variant="secondary"
                        onClick={() => handleTableCellClick(row.original.id)}
                    >
                        View
                    </Button>
                    <Button 
                        variant="secondary"
                        onClick={() => handleDeleteTable(row.original.id)}
                    >
                        Remove
                    </Button>
                </div>
            )
        }),
    ]
}