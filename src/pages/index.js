import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hello from "../images/Hello.png"

import axios from "axios";
import style from "/Users/charles/gatsby-site/first-work/fun/src/components/index.module.css"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hello~Chick~</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    <img src={Hello} alt="Don't let me see you again " />
    </div>
    <a class="css-1052yfl"href="https://www.bilibili.com/video/av66962757/">Something interesting~</a>
    <Link to="/page-2/">
      <p>
        What's more?
      </p>
    </Link>
    <button onClick={handleClick}>Send!</button>
  </Layout>
)

function handleClick() {
  axios({
    url: 'http://localhost:9000/',
    method: 'POST',
    headers: { "Access-Control-Allow-Origin": "*" },
    data: 'hello'
  })
}
axios('http://localhost:9000/');

export default IndexPage
