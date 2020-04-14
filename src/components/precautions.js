import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function precautions () {
  return (
    <div>
      <br />
      <br />
      <Container fluid>
        <Row>
          <Col sm>       
            <h3>Wash Hands</h3>
            <br />
            <iframe title='wash' src='https://giphy.com/embed/l4EoN7SOIXm7l3Og0' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen />
            <br />
            <br />
          </Col>
          <Col sm>
            <h3>Maintain Distance</h3>
            <br />
            <iframe title='dist' src='https://giphy.com/embed/ZazvVSkRzwyponrIA2' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen />
            <br /><br />
          </Col>
          <Col sm>
            <h3>Avoid touching face</h3>
            <br />
            <iframe title='avoid' src='https://giphy.com/embed/VG24hSmLxgsDD0tV6k' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen />
            <br /><br />
          </Col>
        </Row>
        <br /><br />
        <Row>
        <br />
          <Col>
            <h3>Cover mouth while sneezing or coughing</h3>
            <br />
            <iframe title='cover' src='https://giphy.com/embed/3ohzdXbMCXJ1haViSI' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen />
            <br /><br />
          </Col>
          <Col>
            <h3>Refrain from smoking</h3>
            <br /><br />
            <iframe title='refrain' src='https://giphy.com/embed/ZJyxqrIKA3GqA' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen />
            <br /><br />
          </Col>
          <Col>
            <h3>Do physical activities</h3>
            <br />
            <iframe title='active' src='https://giphy.com/embed/UqZ4imFIoljlr5O2sM' width='480' height='360' frameBorder='0' class='giphy-embed' allowFullScreen />
            <br /><br />
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  )
}

export default precautions
