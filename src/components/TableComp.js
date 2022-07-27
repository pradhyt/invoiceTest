import React from 'react'

function TableComp({
    invoiceArr = []
}) {
    console.log("invoiceArr >>", invoiceArr)
    return (
        <div>
            <h1 style={{ color: "#2748A1" }}>Invoice Data</h1>
            <table cellPadding="10px" border="true" style={{ width: "100%", backgroundColor: "white" }}>
                <thead style={{ color: "#2748A1" }}>
                    <th>Value</th>
                    <th>Date</th>
                    <th>UMRN</th>
                </thead>
                <tbody>
                    {invoiceArr.map((obj, idx) => {
                        return <tr key={idx}>
                            <td>{obj.val}</td>
                            <td>{obj.date}</td>
                            <td>{obj.umrn}</td>
                        </tr>
                    })}
                </tbody>

            </table>
        </div>
    )
}

export default TableComp