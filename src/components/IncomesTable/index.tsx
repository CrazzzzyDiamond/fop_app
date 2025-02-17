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
import Button from '@/components/Button';
import { Table, TableCell, TableHeadCell } from '@/components/Table';
import { INCOME_TABLE_DATA } from '@/constants/mock'

type IncomesTableColumns = {
    date: string;
    sum: number;
    currency: string;
    rate: string;
    uahSum: number;
}

const columnHelper = createColumnHelper<IncomesTableColumns>()

const IncomesTable = () => {
    const [incomesTableState] = useState(INCOME_TABLE_DATA);
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable<IncomesTableColumns>({
            data: incomesTableState,
            columns: [
                columnHelper.accessor('date', {
                    header: 'Date',
                    cell: info => info.getValue(),
                }),
                columnHelper.accessor('sum', {
                    header: 'Sum',
                    cell: info => info.getValue(),
                }),
                columnHelper.accessor('currency', {
                    header: 'Currency',
                    cell: info => info.getValue(),
                }),
                columnHelper.accessor('rate', {
                    header: 'Rate',
                    cell: info => info.getValue(),
                    enableSorting: false,
                },),
                columnHelper.accessor('uahSum', {
                    header: 'UAH Sum',
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
            ],
            getCoreRowModel: getCoreRowModel(),
            getSortedRowModel: getSortedRowModel(),
            onSortingChange: setSorting,
            state: {
                sorting,
              },
        })

    return (
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
                                className="whitespace-nowrap"
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
    )
}

export default IncomesTable;