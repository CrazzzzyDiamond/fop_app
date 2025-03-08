'use client'

import { useState, useEffect, useCallback } from 'react';
import {
    flexRender,
    getCoreRowModel,
    useReactTable,
    getSortedRowModel,
    SortingState,
} from '@tanstack/react-table';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/clerk-react';
import { redirect } from 'next/navigation';
import Paper from '@/components/Paper';
import Button from '@/components/Button';
import { Table, TableCell, TableHeadCell } from '@/components/Table';
import Loader from '@/components/Loader';
import { SORT_ICONS } from '@/constants/table';

import NewTableDialog from './NewTableDialog';
import s from './myTables.module.css';
import { createColumnsWithEditHandler, MyTable } from './MyTablesColumns';

const MyTablesPage = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [myTables, setMyTables] = useState<MyTable[]>([]);
    const [sorting, setSorting] = useState<SortingState>([]);
    const [newTableDialogOpen, setNewTableDialogOpen] = useState(false);
    const router = useRouter();
    const { isSignedIn, isLoaded, user } = useUser();

    const fetchMyTables = useCallback(async () => {
        setIsLoading(true);
        const res = await fetch('/api/tables?userId=' + user?.id)

        if (!res.ok) {
            console.error('Failed to fetch tables');
            return;
        }

        const data = await res.json();

        setMyTables(data);
        setIsLoading(false);
    }, [user])

    useEffect(() => {
        if (isSignedIn && isLoaded) {
            fetchMyTables()
        }
    }, [fetchMyTables, isLoaded, isSignedIn, user])

    

    const handleTableCellClick = (tableId: string) => {
        router.push(`/table/${tableId}`);
    }

    const handleDeleteTable = async (tableId: string) => {
        setIsLoading(true);
        try {
            const response = await fetch('/api/tables', {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id: tableId}),
            });
    
            if (!response.ok) {
                throw new Error('Failed to create table');
            }

            fetchMyTables();
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const table = useReactTable<MyTable>({
        data: myTables,
        columns: createColumnsWithEditHandler(handleTableCellClick, handleDeleteTable),
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
          },
    })

    if (!isSignedIn && isLoaded) {
        redirect('/');
        return null;
    }

    return (
        <Paper className={s.tablesPaper}>
            <div className={s.tablesButtons}>
                <h1 className="title">My Tables</h1>
                <Button 
                    onClick={() => setNewTableDialogOpen(true)} 
                    disabled={myTables.length >= 3}
                >
                    Create Table
                </Button>
            </div>

            {isLoading && <Loader />}

            {!isLoading && (
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
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {{...SORT_ICONS}[header.column.getIsSorted() as string] ?? null}
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
            )}

            {newTableDialogOpen && (
                <NewTableDialog 
                    onClose={() => setNewTableDialogOpen(false)}
                    onSuccess={fetchMyTables}
                />
            )}
        </Paper>
    )
}

export default MyTablesPage;