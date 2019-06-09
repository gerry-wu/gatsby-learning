import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Listing from '../components/listing'

const IndexPage = ({ location }) => (
  <>
    <SEO title="Home" />
    <Layout location={location}>
      <Listing />
    </Layout>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </>
)

export default IndexPage
