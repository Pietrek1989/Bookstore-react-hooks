import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = (props) => {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
        </div>

        <div>
          <a href="https://facebook.com" className='me-4 text-reset'>
          <i class="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="https://google.com" className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href="https://instagram.com" className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="https://linkedin.com" className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="https://github.com" className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section classhref="#">
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                {props.name}
              </h6>
              <p>
                Magical Bookstore is a project made using React and has no real shop use case
              </p>
            </MDBCol>



            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Alpach, Tirol, Austria
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                rodzyn1989@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright: 
        <a className='text-reset fw-bold' href='https://github.com'>
           Piotr Rodzen             <MDBIcon fab icon="github" />
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;