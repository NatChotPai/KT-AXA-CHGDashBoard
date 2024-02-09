import DataContext from "../data/DataContext"
import { useContext } from "react"
import './ReportComponent.css'

const ReportComponent=()=>{
    // const name = useContext(DataContext)
    const {income,expense} = useContext(DataContext)
    return (
        <div>
            <h4 style={{textAlign:"center"}}>ยอดคงเหลือ (บาท) </h4>
            <h1 style={{textAlign:"center",color:"blue"}}>{income-expense}฿</h1>
            <div className="report-container">
                <div>
                    <h4>รายได้ทั้งหมด</h4>
                    <p className="report plus">{income}</p>
                </div>
                <div>
                    <h4>รายจ่ายทั้งหมด</h4>
                    <p className="report minus">{expense} </p> 
                </div>
            </div>

            {/* สวัสดี : {name} */}

            {/* solution 1 DataContext.Consume
            <DataContext.Consumer>
                {context=> <p> รายรับ :{context.income} รายจ่าย :{context.expense} </p> }
            </DataContext.Consumer> */}
            
            {/* solution 2 DataContext by useContext */}
            {/* {income} */}
        </div>
    )
}

export default ReportComponent


