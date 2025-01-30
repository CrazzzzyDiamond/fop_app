'use client'

import { useState } from 'react';
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
    SortingState,
  } from '@tanstack/react-table'

import Paper from '@/components/Paper';
import Button from '@/components/Button';
import { Table, TableCell, TableHeadCell } from '@/components/Table';
import Dialog from '@/components/Dialog';

type MyTable = {
    name: string;
    created: string;
    updated: string;
}

const columnHelper = createColumnHelper<MyTable>()

const TABLES_MOCK_DATA: MyTable[] = [
    {
        name: 'Table 1',
        created: '2021-01-01',
        updated: '2021-01-01',
    },
    {
        name: 'Table 2',
        created: '2022-01-01',
        updated: '2021-01-01',
    },
    {
        name: 'Table 3',
        created: '2023-01-01',
        updated: '2021-01-01',
    },
    {
        name: 'Table 4',
        created: '2024-01-01',
        updated: '2021-01-01',
    },
]

const columns = [
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
        cell: () => (
            <div>
                <Button variant="secondary">
                    Remove
                </Button>
            </div>
        )
    }),
]

const MyTablesPage = () => {
    const [myTables] = useState(TABLES_MOCK_DATA);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [newTableDialogOpen, setNewTableDialogOpen] = useState(false);

    const table = useReactTable<MyTable>({
        data: myTables,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
          },
    })

    console.log(table.getState().sorting)

    return (
        <Paper>
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Tables</h1>
                <Button
                    onClick={() => setNewTableDialogOpen(true)}
                >
                    Create Table
                </Button>
            </div>
            <div className="mt-4">
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
                                <TableCell key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </TableCell>
                            ))}
                        </tr>
                        ))}
                    </tbody>
                </Table>
            </div>

            {newTableDialogOpen && (
                <Dialog
                    onClose={() => setNewTableDialogOpen(false)}
                    onConfirm={() => {}}
                />
            )}
        </Paper>
    )
}

export default MyTablesPage;