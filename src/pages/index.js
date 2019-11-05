import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import seeyou from "../images/seeyou.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Farewell</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <img src={seeyou} alt="Don't let me see you again " />
    </div>
    <a href="http://www.baidu.com">Click here and you will get the right answer!</a>
    <Link to="/page-2/">
      <p>
        Click here to get something new~
      </p>
    </Link>
  </Layout>
)

export default IndexPage
