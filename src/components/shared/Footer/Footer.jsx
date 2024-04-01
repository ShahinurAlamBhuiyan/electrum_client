import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit'
import './Footer.css'

export default function Footer () {
  return (
    <MDBFooter className='footer-container text-center text-lg-start text-muted'>
      <section
        style={{ backgroundColor: 'transparent' }}
        className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'
      >
        <div
          style={{ backgroundColor: 'transparent' }}
          className='me-5 d-none d-lg-block'
        >
          <span style={{ backgroundColor: 'transparent' }}>
            Get connected with us on social networks:
          </span>
        </div>

        <div style={{ backgroundColor: 'transparent' }}>
          <a
            style={{ backgroundColor: 'transparent' }}
            href=''
            className='me-4 text-reset'
          >
            <MDBIcon fab icon='facebook-f' />
          </a>
          <a
            style={{ backgroundColor: 'transparent' }}
            href=''
            className='me-4 text-reset'
          >
            <MDBIcon fab icon='twitter' />
          </a>
          <a
            style={{ backgroundColor: 'transparent' }}
            href=''
            className='me-4 text-reset'
          >
            <MDBIcon fab icon='google' />
          </a>
          <a
            style={{ backgroundColor: 'transparent' }}
            href=''
            className='me-4 text-reset'
          >
            <MDBIcon fab icon='instagram' />
          </a>
          <a
            style={{ backgroundColor: 'transparent' }}
            href=''
            className='me-4 text-reset'
          >
            <MDBIcon fab icon='linkedin' />
          </a>
          <a
            style={{ backgroundColor: 'transparent' }}
            href=''
            className='me-4 text-reset'
          >
            <MDBIcon fab icon='github' />
          </a>
        </div>
      </section>

      <section style={{ backgroundColor: 'transparent' }} className=''>
        <MDBContainer
          style={{ backgroundColor: 'transparent' }}
          className='text-center text-md-start mt-5'
        >
          <MDBRow style={{ backgroundColor: 'transparent' }} className='mt-3'>
            <MDBCol
              style={{ backgroundColor: 'transparent' }}
              md='3'
              lg='4'
              xl='3'
              className='mx-auto mb-4'
            >
              <h6
                style={{ backgroundColor: 'transparent' }}
                className='text-uppercase fw-bold mb-4'
              >
                <MDBIcon icon='gem' className='me-3' />
                Electrum
              </h6>
              <p style={{ backgroundColor: 'transparent' }}>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </MDBCol>

            <MDBCol
              style={{ backgroundColor: 'transparent' }}
              md='2'
              lg='2'
              xl='2'
              className='mx-auto mb-4'
            >
              <h6
                style={{ backgroundColor: 'transparent' }}
                className='text-uppercase fw-bold mb-4'
              >
                Tech
              </h6>
              <p style={{ backgroundColor: 'transparent' }}>
                <a
                  style={{ backgroundColor: 'transparent' }}
                  href='#!'
                  className='text-reset'
                >
                  Angular
                </a>
              </p>
              <p style={{ backgroundColor: 'transparent' }}>
                <a
                  style={{ backgroundColor: 'transparent' }}
                  href='#!'
                  className='text-reset'
                >
                  React
                </a>
              </p>
              <p style={{ backgroundColor: 'transparent' }}>
                <a
                  style={{ backgroundColor: 'transparent' }}
                  href='#!'
                  className='text-reset'
                >
                  Vue
                </a>
              </p>
              <p style={{ backgroundColor: 'transparent' }}>
                <a
                  style={{ backgroundColor: 'transparent' }}
                  href='#!'
                  className='text-reset'
                >
                  Laravel
                </a>
              </p>
            </MDBCol>

            <MDBCol
              style={{ backgroundColor: 'transparent' }}
              md='3'
              lg='2'
              xl='2'
              className='mx-auto mb-4'
            >
              <h6
                style={{ backgroundColor: 'transparent' }}
                className='text-uppercase fw-bold mb-4'
              >
                Quick Menu
              </h6>
              <p style={{ backgroundColor: 'transparent' }}>
                <a
                  style={{ backgroundColor: 'transparent' }}
                  href='/qna'
                  className='text-reset'
                >
                  QnA
                </a>
              </p>
              <p style={{ backgroundColor: 'transparent' }}>
                <a
                  style={{ backgroundColor: 'transparent' }}
                  href='/docs'
                  className='text-reset'
                >
                  Documents
                </a>
              </p>
              <p style={{ backgroundColor: 'transparent' }}>
                <a
                  style={{ backgroundColor: 'transparent' }}
                  href='/job-hunting'
                  className='text-reset'
                >
                  Job Hunting
                </a>
              </p>
              <p style={{ backgroundColor: 'transparent' }}>
                <a
                  style={{ backgroundColor: 'transparent' }}
                  href='/courses'
                  className='text-reset'
                >
                  Courses
                </a>
              </p>
            </MDBCol>

            <MDBCol
              style={{ backgroundColor: 'transparent' }}
              md='4'
              lg='3'
              xl='3'
              className='mx-auto mb-md-0 mb-4'
            >
              <h6
                style={{ backgroundColor: 'transparent' }}
                className='text-uppercase fw-bold mb-4'
              >
                Contact
              </h6>
              <p style={{ backgroundColor: 'transparent' }}>
                <MDBIcon icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p style={{ backgroundColor: 'transparent' }}>
                <MDBIcon icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p style={{ backgroundColor: 'transparent' }}>
                <MDBIcon icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p style={{ backgroundColor: 'transparent' }}>
                <MDBIcon icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className='text-center p-4'
        style={{ backgroundColor: 'transparent' }}
      >
        © 2024 Copyright: Electrum
      </div>
    </MDBFooter>
  )
}
