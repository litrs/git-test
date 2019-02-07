import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"



const NicePage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page Nice</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>

)


export default NicePage 
