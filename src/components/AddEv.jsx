import axios from 'axios'
import React, { useState } from 'react'

const AddEv = () => {
    const [input, changeInput] = useState(
        {
            bookingID: "",
            ownerName: "",
            email: "",
            phone: "",
            regNum: "",
            brand: "",
            model: "",
            batteryCapacity: "",
            connectorType: "",
            chargingDate: "",
            time: "",
            units: "",
            bayNum: ""
        }
    )
    const inputHandler = (event) => {
        changeInput({ ...input, [event.target.name]: event.target.value })
         }

    const readValue = () => {
        console.log(input)
        axios.post("http://localhost:3000/add-ev", input).then(

            (response) => {
                alert("station added successfully")
            }

        ).catch(
            (error) => {
                console.error("error adding charging station", error)
                alert("failed to add station")
            }
        )
    }
  return (
    <div>

<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">bookingID</label>
                                <input type="text" className="form-control" name="bookingID" value={input.bookingID} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">ownerName</label>
                                <input type="text" className="form-control" name="ownerName" value={input.ownerName} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">email</label>
                                <input type="text" className="form-control" name="email" value={input.email} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">phone</label>
                                <input type="text" className="form-control" name="phone" value={input.phone} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">regNum</label>
                                <input type="text" className="form-control" name="regNum" value={input.regNum} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">brand</label>
                                <input type="text" className="form-control" name="brand" value={input.brand} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">model</label>
                                <input type="text" className="form-control" name="model" value={input.model} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">batteryCapacity</label>
                                <input type="text" className="form-control" name="batteryCapacity" value={input.batteryCapacity} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">connectorType</label>
                                <input type="text" className="form-control" name="connectorType" value={input.connectorType} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">chargingDate</label>
                                <input type="date" className="form-control" name="chargingDate" value={input.chargingDate} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">time</label>
                                <input type="text" className="form-control" name="time" value={input.time} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">units</label>
                                <input type="text" className="form-control" name="units" value={input.units} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">bayNum</label>
                                <input type="text" className="form-control" name="bayNum" value={input.bayNum} onChange={inputHandler} />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={readValue}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default AddEv