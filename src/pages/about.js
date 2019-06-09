import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const AboutPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="About us" />
    <h1>About us</h1>
    <p>something about us</p>
  </Layout>
)

export default AboutPage
