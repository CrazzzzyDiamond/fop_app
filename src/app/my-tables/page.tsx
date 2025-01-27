import Paper from '@/components/Paper';

const TABLES_MOCK_DATA = [
    {
        name: 'Table 1',
        created: '2021-01-01',
        updated: '2021-01-01',
    },
    {
        name: 'Table 2',
        created: '2021-01-01',
        updated: '2021-01-01',
    },
    {
        name: 'Table 3',
        created: '2021-01-01',
        updated: '2021-01-01',
    },
    {
        name: 'Table 4',
        created: '2021-01-01',
        updated: '2021-01-01',
    },
]

const MyTablesPage = () => {
    return (
        <Paper>
            <h1 className="text-2xl font-bold">My Tables</h1>
            <div className="mt-4">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Created</th>
                            <th>Updated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {TABLES_MOCK_DATA.map((table, index) => (
                            <tr key={index}>
                                <td>{table.name}</td>
                                <td>{table.created}</td>
                                <td>{table.updated}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Paper>
    )
}

export default MyTablesPage;