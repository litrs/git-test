import React, { Component } from 'react'
// import { Link } from 'gatsby'
// import logo from '../../../images/logo.svg'
// import { FaAlignRight } from 'react-icons/fa'
// import styled from 'styled-components'
// import { styles } from '../../../utils'
import NavBarBrand from './NavBarBrand'
import NavBarMenu from './NavBarMenu'

export default class NavbarHeader extends Component {
  render() {
   
    return (
      <div class="hero-head">
      <nav class="navbar is-fixed-top is-link">
    <div class="container">
      <NavBarBrand />
      <NavBarMenu />
    </div>
  </nav>
    </div>
    )
  }
}


