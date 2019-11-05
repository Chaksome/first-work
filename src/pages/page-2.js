import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>???</h1>
    <Link to="/"> Click here to get something new~</Link>
  </Layout>
)

export default SecondPage
