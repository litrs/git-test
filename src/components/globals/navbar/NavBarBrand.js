import React, { Component } from 'react'
// import NavBarBrand from './NavBarBrand'
import { Link } from 'gatsby'

export default class NavBarBrand extends Component {
  render() {
   
    return (
        <div class="navbar-brand">
        <Link class="navbar-item" to="/">
          <h1>Hellomw world</h1>
        </Link>
       
        <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </div>
    )
  }
}


