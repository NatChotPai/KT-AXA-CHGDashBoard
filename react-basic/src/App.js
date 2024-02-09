import logo from './logo.svg';
import './App.css';
import Transaction from './components/Transaction';
import FormComponent from './components/FormComponent';
import { useState,useEffect,useReducer} from 'react'
import DataContext from './data/DataContext';
import ReportComponent from './components/ReportComponent';
//import { element } from 'prop-types';

function App() {

  const Logo =()=> <img src={logo} className="App-logo" alt="logo"/>
  const Title =()=> <h1 style={{color:"red", textAlign:"center", fontSize:'1.5rem'}}>โปรแกรมบัญชีรายรับ - รายจ่าย</h1>
  // 1. init Array Data
  const initData =[
    {id:1,title:"ค่ารักษาพยาบาล" ,amount:-2000},
    {id:2,title:"ค่าน้ำมัน" ,amount:-2000},
    {id:3,title:"ค่าเช่าบ้าน" ,amount:-2000},
    {id:4,title:"เงินเดือน" ,amount:70000} 
  ]

  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)

  // 2. stageItem by useState
  const [items,setItems] = useState(initData)
  // const [items,setItems] = useState([])
  
  useEffect(()=>{
    const amounts = items.map(items=>items.amount)
    const income = amounts.filter(element=>element>0).reduce((total,element)=>total+=element,0)
    const expense = (amounts.filter(element=>element<0).reduce((total,element)=>total+=element,0))*-1

    console.log("รายได้ = ", income);
    console.log("รายจ่าย = ", expense);

    setReportIncome(income)
    setReportExpense(expense)
  },[items,reportIncome,reportExpense])

  // 2. AddNewItem stageItem 
  const onAddNewItem = (newItem)=>{
    setItems((prevItem)=>{
      return [newItem,...prevItem]
      // return [...prevItem,newItem]
    })
  }

  //useReducer
  const [showReport,setShowReport] = useState(false)
  //การเงื่อนไข useReducer
  const reducer = (state,action)=>{
      switch(action.type){
        case  "SHOW" :
          return setShowReport(true)
        case  "HIDE" :
          return setShowReport(false)
        // case  "ADD" :
        //   return state+action.payload
        // case  "SUB" :
        //   return state-action.payload
      }
  }
  //การเรียกใช้ useReducer
  const [result,dispatch] = useReducer(reducer,showReport)

  return (
    <DataContext.Provider value={
      {
        income : reportIncome,
        expense : reportExpense 
      }}>
      <div className='container'>
        <Logo/>
        <Title/>
        <FormComponent onAddItem={onAddNewItem}/>
        <Transaction items ={items}/>
        {showReport && <ReportComponent/>}
        {/* <ReportComponent/> */}
        <h1>{result}</h1>
        {/* <button onClick={()=>dispatch({type:"ADD",payload:10})}>แสดง</button>
        <button onClick={()=>dispatch({type:"SUB",payload:5})}>ซ่อน</button> */}
        <button onClick={()=>dispatch({type:"SHOW"})}>แสดง</button>
        <button onClick={()=>dispatch({type:"HIDE"})}>ซ่อน</button>
      </div>
    </DataContext.Provider>
  );
}

export default App;
