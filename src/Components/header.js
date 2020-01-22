import React, { Component } from "react";
import {MDBNavbar, MDBNavbarBrand} from "mdbreact";

class NavbarPage extends Component {

    render() {
      return (

<MDBNavbar color="indigo" dark expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Jest Demo</strong>
        </MDBNavbarBrand> 
      
      </MDBNavbar>
      
      )}
    }
    export default NavbarPage;