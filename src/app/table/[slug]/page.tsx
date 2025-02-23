'use client'

import { useParams } from 'next/navigation';
import Paper from '@/components/Paper';
import TotalTable from '@/components/TotalTable';
import IncomesTable from '@/components/IncomesTable';
import IncomesTopBar from './IncomesTopBar';
import s from './incomeTable.module.css';

export default function Page() {
  const params = useParams<{ slug: string }>();

  console.log(params.slug)

  return (
    <div>
      <div className={s.topBarWrapper}>
        <IncomesTopBar />
      </div>
      <div className={s.tablesWrapper}>
        <div className={s.totalTableWrapper}>
          <div className={s.totalTableSticky}>
            <Paper>
              <TotalTable />
            </Paper>
          </div>
        </div>
        <div>
          <Paper>
            <IncomesTable />
          </Paper>
        </div>
      </div>
    </div>
  )
}