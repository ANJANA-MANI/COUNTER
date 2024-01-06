import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div><MDBNavbar style={{backgroundColor:'#D6EAF8'}}>
    <MDBContainer>
      <MDBNavbarBrand href='/'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/6357/6357834.png'
          height='70'
          width='70'
          alt=''
          loading='lazy'
        /><h3>Counter App</h3>
      </MDBNavbarBrand>
    </MDBContainer>
  </MDBNavbar>

    </div>
  )
}

export default Header