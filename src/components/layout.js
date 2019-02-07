import React from "react"
import PropTypes from "prop-types"
// import { StaticQuery, graphql } from "gatsby"
import Navbar from '../components/globals/navbar/Navbar'



// import Header from "./header"
import "./style.css"

const Layout = ({ children }) => (
  <div>
      <Navbar />
      {children}
    <h1>Hello from Layout</h1>
      </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
