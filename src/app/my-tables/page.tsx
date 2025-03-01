'use client'

import { useState } from 'react';
import { useUser } from '@stackframe/stack';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
    SortingState,
  } from '@tanstack/react-table';
  import { useRouter } from 'next/navigation'
import Paper from '@/components/Paper';
import Button from '@/components/Button';
import { Table, TableCell, TableHeadCell } from '@/components/Table';
import NewTableDialog from './NewTableDialog';
import s from './myTables.module.css'

type TableId = string;

type MyTable = {
    name: string;
    created: string;
    updated: string;
    id: TableId;
}

const columnHelper = createColumnHelper<MyTable>()

const TABLES_MOCK_DATA: MyTable[] = [
    {
        name: 'Table 1',
        created: '2021-01-01',
        updated: '2021-01-01',
        id: '1',
    },
    {
        name: 'Table 2',
        created: '2022-01-01',
        updated: '2021-01-01',
        id: '2',
    },
    {
        name: 'Table 3',
        created: '2023-01-01',
        updated: '2021-01-01',
        id: '3',
    },
    {
        name: 'Table 4',
        created: '2024-01-01',
        updated: '2021-01-01',
        id: '4',
    },
]

const createColumnsWithEditHandler = (handleTableCellClick: (rowId: string) => void) => {
    return [
        columnHelper.accessor('name', {
            header: 'Name',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('created', {
            header: 'Created',
            cell: info => info.getValue(),
        }),
        columnHelper.accessor('updated', {
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
                    <Button variant="secondary">
                        Remove
                    </Button>
                </div>
            )
        }),
    ]
}

const MyTablesPage = () => {
    const [myTables] = useState(TABLES_MOCK_DATA);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [newTableDialogOpen, setNewTableDialogOpen] = useState(false);
    const router = useRouter();
    useUser({ or: 'redirect' });

    const handleTableCellClick = (tableId: TableId) => {
        router.push(`/table/${tableId}`);
    }

    const table = useReactTable<MyTable>({
        data: myTables,
        columns: createColumnsWithEditHandler(handleTableCellClick),
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
          },
    })

    return (
        <Paper className={s.tablesPaper}>
            <div className={s.tablesButtons}>
                <h1 className="title">My Tables</h1>
                <Button onClick={() => setNewTableDialogOpen(true)} >
                    Create Table
                </Button>
            </div>
            <Table>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <TableHeadCell 
                                    key={header.id}
                                    onClick={header.column.getToggleSortingHandler()}
                                    canSort={header.column.getCanSort()}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                        )}
                                        {{
                                        asc: ' ⏶',
                                        desc: ' ⏷',
                                    }[header.column.getIsSorted() as string] ?? null}
                                </TableHeadCell>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map(cell => (
                            <TableCell 
                                key={cell.id}
                                className={s.noWrapTableCell}
                            >
                                {flexRender(cell.column.columnDef.cell, {
                                    ...cell.getContext(),
                                    row,
                                })}
                            </TableCell>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </Table>

            {newTableDialogOpen && (
                <NewTableDialog onClose={() => setNewTableDialogOpen(false)} />
            )}
        </Paper>
    )
}

export default MyTablesPage;