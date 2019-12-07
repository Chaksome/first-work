import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import seeyou from "../images/seeyou.png"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Bye~</h1>
    <img src={seeyou} alt="Don't let me see you again " />
    <p>
    <Link to="/"> Back to the homepage</Link>
    </p>
  </Layout>
)
export default SecondPage
