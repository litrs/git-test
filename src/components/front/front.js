import React, { Component } from 'react'
import NavBarHeader from './NavbarHeader'
import NavBarBody from './NavBarBody'

class Navbar extends Component {
    render() {
        return (
            
            <section class="hero is-info is-medium is-bold">
                 <NavBarHeader/>
                 {/* <NavBarBody/> */}
            </section>
            
        )
    }
}

export default Navbar


