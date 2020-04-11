import React from 'react'
import './css/footer.css'

function footer () {
  return (
    <div>
      <footer class='site-footer'>
        <div class='container'>
          <div class='row'>
            <div class='col-sm-12 col-md-6'>
              <h6>About</h6>
              <p class='text-justify'>This website is created in public interest to keep a track of COVID19 patients in India which symbolises and spreads a message across all communities to stay safe at home</p>
            </div>

            <div class='col-xs-6 col-md-3'>
              <h6>Categories</h6>
              <ul class='footer-links'>
                <li><a>State Wise</a></li>
                <li><a>Precautions</a></li>
                <li><a>Arogya Setu</a></li>
                <li><a>World Wise</a></li>
                <li><a>News on COVID-19</a></li>
              </ul>
            </div>

            <div class='col-xs-6 col-md-3'>
              <h6>Quick Links</h6>
              <ul class='footer-links'>
                <li><a href='https://github.com/ShelterCom'>About Us</a></li>
                <li><a>Contact Us?(Drop a mail at doconline234@gmail.com)</a></li>
                <li><a href='https://github.com/ShelterCom/covi'>Contribute</a></li>
              </ul>
            </div>
          </div>
          <div>
            <div class='container'>
              <div class='row'>
                <div class='col-md-8 col-sm-6 col-xs-12'>
                  <p class='copyright-text'>Copyright &copy; 2020 All Rights Reserved by
                    <a href='#'> ShelterCom</a>.
                  </p>
                </div>
                <a href='https://github.com/ShelterCom'><img class='foot-logo' src='images/github.png' border='0' /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default footer
