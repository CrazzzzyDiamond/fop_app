import Paper from '@/components/Paper';
import TotalTable from '@/components/TotalTable';
import IncomesTable from '@/components/IncomesTable';

import IncomesTopBar from './IncomesTopBar';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  console.log(slug)

  return (
    <div>
      <div className="mb-5">
        <IncomesTopBar />
      </div>
      <div className="flex">
        <div className="mr-5">
          <div 
            className="sticky z-10"
            style={{
              top: '90px',
            }}
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