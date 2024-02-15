//import logo from './logo.svg';
import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { useState,useEffect,useReducer} from 'react'
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

function App() {

  //const Logo =()=> <img src={logo} className="App-logo" alt="logo"/>
  const Title =()=> <h1 style={{color:"red", textAlign:"center", fontSize:'1.5rem'}}>Change Management System</h1>
  // 1. init Array Data
  const initData =[
    // {id:1,title:"ค่ารักษาพยาบาล" ,amount:-2000},
    // {id:2,title:"ค่าน้ำมัน" ,amount:-2000},
    // {id:3,title:"ค่าเช่าบ้าน" ,amount:-2000},
    // {id:4,title:"เงินเดือน" ,amount:70000},

    {id:1,chgnumber:"CHG1243590",assignedto:"Chaiyaporn SRISOI",assignmentgroup:"Application Support_L1_KAL",businessservice:"VDI",acceleratedchange:"FALSE",shortdescription:"VDI Storage Refreshment at NTT",type:"Normal",state:"Work in Progress",plannedstartdate:"2024-02-09 22:00:00"},
    {id:2,chgnumber:"CHG1246118",assignedto:"Vatchapol JITTIPATTANAKULCHAI",assignmentgroup:"BPMS Support_L3_KAL",businessservice:"BPMS",acceleratedchange:"TRUE",shortdescription:"Enable dynatrace",type:"Normal",state:"Accepted",plannedstartdate:"2024-02-09 20:00:00"},
    {id:3,chgnumber:"CHG1238426",assignedto:"Kannatthawat WATTANAAMORN",assignmentgroup:"Application Support_L2_KAL",businessservice:"iDoc",acceleratedchange:"FALSE",shortdescription:"[iDocument] : MRTA E-Policy",type:"Normal",state:"Closed Skipped",plannedstartdate:"2024-02-09 20:00:00"},
    {id:4,chgnumber:"CHG1240600",assignedto:"Vatchapol JITTIPATTANAKULCHAI",assignmentgroup:"BPMS Support_L3_KAL",businessservice:"BPMS",acceleratedchange:"FALSE",shortdescription:"Start - Stop All Services in sequences Jenkins jobs",type:"Normal",state:"Work in Progress",plannedstartdate:"2024-02-08 22:00:00"}
  ]

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  // 2. stageItem by useState
  const [items,setItems] = useState(initData)
  // const [items,setItems] = useState([])
  
  // useEffect(()=>{
  //   const amounts = items.map(items=>items.amount)
  //   const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
  //   const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1

  //   console.log("รายได้ = ", income.toFixed(2));
  //   console.log("รายจ่าย = ", expense.toFixed(2));

  //   setReportIncome(income)
  //   setReportExpense(expense)
  // },[items,reportIncome,reportExpense])

  // 2. AddNewItem stageItem 
  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
    })
  }

  return (
    <DataContext.Provider value={{ income : reportIncome,expense : reportExpense }}>
      <div className='container'>
        {/* <Logo/> */}
        <Title/>
        <Router>
            <div>
              <ul className="horizontal-menu">
                <li> <Link to="/">ข้อมูลบัญชี</Link> </li>
                <li> <Link to="/insert">บันทึกข้อมูล</Link> </li>
              </ul>
              <Routes>
                  <Route path="/insert" element={<> <FormComponent onAddItem={onAddNewItem}/> 
                                                      {/* <Transaction items={items}/> */}
                                                 </>} />
                  <Route path="/" element={<ReportComponent/>} />
              </Routes>
            </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
