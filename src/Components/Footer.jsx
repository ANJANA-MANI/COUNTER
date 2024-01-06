import React from 'react'
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div style={{marginTop:"9%"}}><MDBFooter className='bg-light text-center text-white'>
    <MDBContainer className='p-4 pb-0'>
      <section className='mb-4'>
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#3b5998' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#55acee' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#dd4b39' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='google' />
        </MDBBtn>
        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#ac2bac' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#0082ca' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn
          floating
          className='m-1'
          style={{ backgroundColor: '#333333' }}
          href='#!'
          role='button'
        >
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center text-light p-4' style={{ backgroundColor: '#A3EE4F'}}>
      © 2024 Copyright:
      <a className='text-light' href='https://mdbootstrap.com/'>
        CounterAPP.com
      </a>
    </div>
    </MDBFooter>
    </div>
  )
}

export default Footer