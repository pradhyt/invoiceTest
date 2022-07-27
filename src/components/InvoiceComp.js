import React, { useState } from 'react'
import "./../styles/invoiceComp.css"
import InputComp from './InputComp'
import TableComp from './TableComp'
import "./../assets/image001.png"

function InvoiceComp() {
    const [dataCompArr, setdataCompArr] = useState([<InputComp />])
    const [isOpen, setisOpen] = useState(true)
    const [totalValue, settotalValue] = useState(0)
    const [invoiceArr, setinvoiceArr] = useState([])
    // const [splitNo, setsplitNo] = useState(1)
    const [isShowTable, setisShowTable] = useState(false)

    let addRow = () => {
        let dataCompArrCopy = [...dataCompArr]
        dataCompArrCopy.push(<InputComp />)
        setdataCompArr(dataCompArrCopy)
        // setsplitNo(splitNo + 1)
    }

    let sum = 0
    let getDataFromInputComp = (dataObj) => {
        console.log("getDataFromInputComp >>", dataObj)
        sum = totalValue + parseInt(dataObj.val)
        // console.log("sum>>", sum)
        settotalValue(sum)

        let invoiceArrCopy = [...invoiceArr]
        invoiceArrCopy.push(dataObj)
        setinvoiceArr(invoiceArrCopy)
    }

    let sendDataToTable = () => {
        setisOpen(false)
        setisShowTable(true)
    }

    return (
        <div>
            {isOpen && <div className='invoice__card'>
                {/* header starts  */}
                <div className='invoice__header'>
                    <p className='invoice__header--company'>123456789 (Testyantra)</p>
                    <p className='invoice__header--invoice'>Invoice NO.</p>
                    <button className='invoice__header--close' onClick={() => setisOpen(false)}>❌</button>
                </div>
                {/* header ends  */}

                {/* invoice content header starts */}
                <div className='invoice__contentHeader'>
                    <p>Value</p>
                    <p>Date</p>
                    <p>UMRN</p>
                </div>
                {/* invoice content header ends */}

                {/* invoice input data starts */}
                {dataCompArr.map((val, idx) => {
                    return <div className='invoice__contentRow'>
                        {/* <p>Split {splitNo}</p> */}
                        <p>Split {idx + 1}</p>
                        <InputComp className="invoice__contentField" getDataFromInputComp={getDataFromInputComp} />
                        <button
                            className="invoice__AddBtn"
                            onClick={() => addRow()}
                        >
                            ➕
                        </button>
                    </div>
                })}
                {/* invoice input data ends */}

                {/* invoice reason textarea starts */}
                <div className='invoice__reason'>
                    <p>Reason</p>
                    <textarea />
                </div>
                {/* invoice reason textarea ends */}

                {/* total value starts */}
                <div className='invoice__totalValue'>
                    <p>Total value :</p>
                    <p style={{ fontWeight: "bold", fontSize: "26px", marginLeft: "1%", position: "relative", bottom: "16px" }}>
                        {/* 10000/- */}
                        {totalValue}/-
                    </p>
                </div>
                {/* total value ends */}

                {/* submit btn starts */}
                <div className='invoice__submit'>
                    <button className='invoice__resetBtn'>Reset</button>
                    <button
                        className='invoice__submitBtn'
                        onClick={() => sendDataToTable()}
                    >Submit</button>
                </div>
                {/* submit btn ends */}
            </div>}
            {isShowTable && <TableComp invoiceArr={invoiceArr} />}
        </div>
    )
}

export default InvoiceComp