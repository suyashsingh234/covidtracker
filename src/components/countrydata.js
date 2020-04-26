import React, { Component } from 'react'
import data from './json/worlddata.json'
import './css/countrydata.css'

class countrydata extends Component {
  render () {
    return (
      <div className='data'>
        <table className='content-table'>
          <tr>
            <th>Serial No.</th>
            <th>Country</th>
            <th>Cases</th>
            <th>Dead</th>
            <th>Recovered</th>
          </tr>
          {
            data.map((worldData, i) => {
              return (
                <tr key={worldData.i}>
                  <td>{worldData.index}</td>
                  <td>{worldData.country}</td>
                  <td>{worldData.cases}</td>
                  <td>{worldData.death}</td>
                  <td>{worldData.cured}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    )
  }
}

export default countrydata
