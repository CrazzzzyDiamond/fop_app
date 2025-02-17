import Paper from '@/components/Paper';
import TotalTable from '@/components/TotalTable';
import IncomesTable from '@/components/IncomesTable';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  console.log(slug)

  return (
    <div>
      <div className="flex">
        <div className="sticky mr-5">
          <Paper>
            <TotalTable />
          </Paper>
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