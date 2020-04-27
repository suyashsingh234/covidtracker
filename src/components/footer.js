import React from 'react'
import Git from './images/github.png'
import { Link } from 'react-router-dom'
import './css/footer.css'

function footer () {
  return (
    <div>
      <footer className='site-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-12 col-md-6'>
              <h6>About</h6>
              <p className='text-justify'>This website is created in public interest to keep a track of COVID19 patients in India which symbolises and spreads a message across all communities to stay safe at home</p>
            </div>

            <div className='col-xs-6 col-md-3'>
              <h6>Categories</h6>
              <ul className='footer-links'>
                <li><Link style={{ textDecoration: 'inherit', color: 'inherit' }} className='lessblue' to='/precaution'>Precautions</Link></li>
                <li><Link style={{ textDecoration: 'inherit', color: 'inherit' }} className='lessblue' to='/symptoms'>Symptoms</Link></li>
                <li><Link style={{ textDecoration: 'inherit', color: 'inherit' }} className='lessblue' to='/app'>Aarogya Setu</Link></li>
                <li><Link style={{ textDecoration: 'inherit', color: 'inherit' }} className='lessblue' to='/country'>World Map</Link></li>
                <li><Link style={{ textDecoration: 'inherit', color: 'inherit' }} className='lessblue' to='/countryStats'>World Stats</Link></li>
                <li><Link style={{ textDecoration: 'inherit', color: 'inherit' }} className='lessblue' to='/news'>News</Link></li>
              </ul>
            </div>

            <div className='col-xs-6 col-md-3'>
              <h6>Quick Links</h6>
              <ul className='footer-links'>
                <li><a href='https://github.com/ShelterCom'>About Us</a></li>
                <li>Contact Us?(Drop a mail at doconline234@gmail.com)</li>
                <li><a href='https://github.com/ShelterCom/covi'>Contribute</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div className='container'>
              <div className='row'>
                <div className='col-md-8 col-sm-6 col-xs-12'>
                  <p className='copyright-text'>Copyright &copy; 2020 All Rights Reserved by
                    <a href='https://github.com/ShelterCom'> ShelterCom</a>.
                  </p>
                </div>
                <a href='https://github.com/ShelterCom'><img className='foot-logo' src={Git} border='0' alt='Github' /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default footer
