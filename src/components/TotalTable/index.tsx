import { TOTAL_TABLE_DATA } from '@/constants/mock'
import { Table, TableCell, TableHeadCell } from '@/components/Table';

const TotalTable = () => {
    return (
        <Table>
            <thead>
                <tr>
                    <TableHeadCell>Quarter</TableHeadCell>
                    <TableHeadCell>Sum</TableHeadCell>
                    <TableHeadCell>3%</TableHeadCell>
                    <TableHeadCell>5%</TableHeadCell>
                </tr>
            </thead>
            <tbody>
                {Object.entries(TOTAL_TABLE_DATA.quarter).map(([quarter, { sum, percentage3, percentage5 }]) => (
                    <tr key={quarter}>
                        <TableCell>{quarter}</TableCell>
                        <TableCell>{sum}</TableCell>
                        <TableCell>{percentage3}</TableCell>
                        <TableCell>{percentage5}</TableCell>
                    </tr>
                ))}
                {Object.entries(TOTAL_TABLE_DATA.half).map(([half, { sum, percentage3, percentage5 }]) => (
                    <tr key={half}>
                        <TableCell>{half}</TableCell>
                        <TableCell>{sum}</TableCell>
                        <TableCell>{percentage3}</TableCell>
                        <TableCell>{percentage5}</TableCell>
                    </tr>
                ))}
                <tr>
                    <TableCell>Year</TableCell>
                    <TableCell>{TOTAL_TABLE_DATA.year.sum}</TableCell>
                    <TableCell>{TOTAL_TABLE_DATA.year.percentage3}</TableCell>
                    <TableCell>{TOTAL_TABLE_DATA.year.percentage5}</TableCell>
                </tr>
            </tbody>
        </Table>
    )
}

export default TotalTable;