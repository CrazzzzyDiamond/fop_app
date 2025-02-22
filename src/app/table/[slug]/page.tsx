'use client'

import { useParams } from 'next/navigation';

import Paper from '@/components/Paper';
import TotalTable from '@/components/TotalTable';
import IncomesTable from '@/components/IncomesTable';

import IncomesTopBar from './IncomesTopBar';

export default function Page() {
  const params = useParams<{ slug: string }>();

  console.log(params.slug)

  return (
    <div>
      <div className="mb-5 sticky">
        <IncomesTopBar />
      </div>
      <div className="flex">
        <div className="mr-5">
          <div 
            className="sticky z-10"
            style={{ top: '90px'}}
          >
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