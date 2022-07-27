import React, { useState } from 'react'
// import "./../styles/inputComp.css"
import "./../styles/invoiceComp.css"

function InputComp({
    className = "",
    getDataFromInputComp = () => { }
}) {
    const [invoiceData, setinvoiceData] = useState(
        {
            val: "",
            date: "",
            umrn: ""
        }
    )
    // console.log("invoiceData >>", invoiceData)
    // console.log("className", className)
    return (
        <div>
            <div className={className}>
                <input
                    type="number"
                    style={{ height: "34px", border: "1px solid #DBE5FF", borderRadius: "8px", marginLeft: "3%" }}
                    placeholder='Enter Value'
                    value={invoiceData.val}
                    name={invoiceData.val}
                    onChange={(e) => setinvoiceData({ ...invoiceData, val: e.target.value })}
                />
                <input
                    type="date"
                    style={{ height: "34px", width: "180px", border: "1px solid #DBE5FF", borderRadius: "8px" }}
                    value={invoiceData.date}
                    name={invoiceData.date}
                    onChange={(e) => setinvoiceData({ ...invoiceData, date: e.target.value })}
                />
                <select
                    style={{ height: "38px", width: "180px", border: "1px solid #DBE5FF", borderRadius: "8px", marginRight: "-9%" }}
                    value={invoiceData.umrn}
                    name={invoiceData.umrn}
                    onChange={(e) => setinvoiceData({ ...invoiceData, umrn: e.target.value })}
                >
                    <option></option>
                    <option>xyz123456789</option>
                    <option>abc123456789</option>
                    <option>pqr123456789</option>
                    <option>mno123456789</option>
                </select>
                <button
                    style={{ borderLeft: "18px solid grey" }}
                    onClick={() => getDataFromInputComp(invoiceData)}>
                </button>
            </div>
        </div>
    )
}

export default InputComp