import { BackButton } from '@/components/dashboard/back-button'
import { getSite } from '@/lib/queries/getSite'
import { SiteForm } from '@/modules/sites/components/site-form'

import React from 'react'

export async function generateMetadata({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) {
  const { siteId } = await searchParams

  if (!siteId) return { title: 'New Site' }

  return { title: `Edit Site #${siteId}` }
}

const SitesPage = async ({
  searchParams
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>
}) => {
  try {
    const { siteId } = await searchParams

    // Edit site form
    if (siteId) {
      const site = await getSite(parseInt(siteId))

      if (!site) {
        return (
          <>
            <h2 className='mb-2 text-2xl'>Site ID #{siteId} not found</h2>
            <BackButton title='Go Back' variant='default' />
          </>
        )
      }
      console.log(site)
      // put site dialog/form component
      return <SiteForm site={site} />
    } else {
      // new site dialog/form component
      return <SiteForm />
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e
    }
  }
}

export default SitesPage
