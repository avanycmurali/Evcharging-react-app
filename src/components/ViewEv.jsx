import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewEv = () => {
       const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:3000/view-ev").then(
            (response)=>{
                changeData(response.data)
            }

        ).catch(
            (error)=>{
                console.log(error)
            }
        )
    }
    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
    <div>

<table class="table">
                <thead>
                    <tr>
                        <th scope="col">bookingID</th>
                        <th scope="col">ownerName</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">regNum</th>
                        <th scope="col">brand</th>
                        <th scope="col">model</th>
                        <th scope="col">batteryCapacity</th>
                        <th scope="col">connectorType</th>
                        <th scope="col">chargingDate</th>
                        <th scope="col">time</th>
                        <th scope="col">units</th>
                        <th scope="col">bayNum</th>
                    </tr>
                </thead>
                <tbody>

                {data.map(
                    (value,index)=>{
                        return(
                            <tr>
                                    <th scope="row">{value.bookingID}</th>

                                    
                                    <td>{value.ownerName}</td>
                                    <td>{value.email}</td>
                                    <td>{value.phone}</td>
                                    <td>{value.regNum}</td>
                                    <td>{value.brand}</td>                                    
                                    <td>{value.model}</td>                                
                                    <td>{value.batteryCapacity}</td>                                
                                    <td>{value.connectorType}</td>                                
                                    <td>{value.chargingDate}</td>                                
                                    <td>{value.time}</td>                                
                                    <td>{value.units}</td>  
                                    <td>{value.bayNum}</td>                              

                                </tr>
                        )
                    }
                )}
                 </tbody>
            </table>

    </div>
  )
}

export default ViewEv