import { db } from '@/db'
import { sites } from '@/db/schema'
import SiteTable from '@/modules/sites/components/site-table'

export const metadata = {
  title: 'Customer Search'
}

export default async function Sites() {
  // const { searchText } = await searchParams

  const data = await db.select().from(sites)

  // if (!searchText) return <CustomerSearch />

  // const results = await getCustomerSearchResults(searchText)

  return (
    <>
      {data.length ? (
        <SiteTable data={data} />
      ) : (
        <p className='mt-4'>No results found</p>
      )}
    </>
  )
}
