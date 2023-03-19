import React, { useEffect, useState } from 'react';
import '../StateData/statedata.css'

const Statedata = () => {
  const [data,setData]=useState([]);
  const getCovidData = async () => {
    const res = await fetch('https://api.rootnet.in/covid19-in/stats/latest');
    const resultData = await res.json()
    console.log(resultData.data.regional);
    setData(resultData.data.regional);
  }

  useEffect(() => {
      getCovidData();
  }, []);


  return (
    <>
      <div className='container-fluid mt-5'>
        <div className='main-heading'>
          <h1 className='mb-5 text-center'> <span className="fw-bold font-monospace">INDIA </span>COVID-19 REPORT</h1>
        </div>

      <div className='table-responsive'>
        <table className='table table-hover'>
          <thead className='table-dark'>
            <tr>
              <th>STATE</th>
              <th>CONFIRMED (INDIAN)</th>
              <th>CONFIRMED (FOREIGN)</th>
              <th>DISCHARGED</th>
              <th>DEATHS</th>
              <th>TOTAL</th>
            </tr>
          </thead>
          <tbody>
          {
            data.map((currentElement,index)=>{
              return(
                <tr key={index}>
              <th>{currentElement.loc}</th>
              <td>{currentElement.confirmedCasesIndian}</td>
              <td>{currentElement.confirmedCasesForeign}</td>
              <td>{currentElement.discharged}</td>
              <td>{currentElement.deaths}</td>
              <td>{currentElement.totalConfirmed}</td>
            </tr>     
            )
            })
          }
          </tbody>
        </table>
      </div>

      </div>
    </>
  )
}

export default Statedata