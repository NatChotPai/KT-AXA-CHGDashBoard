import './FormComponent.css'
import { useState,useEffect} from 'react'
import {v4 as uuidv4} from 'uuid';

const FormComponent = (props)=>{
    // console.log("Render Form component")

    //const [title,setTitle]  = useState('')
    //const [amount,setAmount]  = useState(0)
    
    const [chgnumber,setChgNumber]  = useState("")
    const [assignedto,setAssignedto]  = useState("")
    const [assignmentgroup,setAssignmentgroup]  = useState("")
    const [businessservice,setBusinessservice]  = useState("")
    const [acceleratedchange,setAcceleratedchange]  = useState("")
    const [shortdescription,setShortdescription]  = useState("")
    const [type,setType]  = useState("")
    const [state,setStage]  = useState("")
    const [plannedstartdate,setPlannedstartdate]  = useState("")


    //const [fromValid,setFromValid]  = useState(false)

    // const inputTitle =(event)=>{
    //     console.log(event.target.value)
    //     setTitle(event.target.value)
    // }

    // const inputAmount =(event)=>{
    //     console.log(event.target.value)
    //     setAmount(event.target.value)
    // }

    const saveItem =(event)=>{
        event.preventDefault()
        const itemData = {
            id: uuidv4(),
            chgnumber:chgnumber,
            assignedto:assignedto,
            assignmentgroup:assignmentgroup,
            businessservice:businessservice,
            acceleratedchange:acceleratedchange,
            shortdescription:shortdescription,
            type:type,
            state:state,
            plannedstartdate:plannedstartdate
        }
        props.onAddItem(itemData)

        setChgNumber("")
        setAssignedto("")
        setAssignmentgroup("")
        setBusinessservice("")
        setAcceleratedchange("")
        setShortdescription("")
        setType("")
        setStage("")
        setPlannedstartdate("")
    }

    // useEffect(()=>{
    //     console.log("Call useEffect")
    //     const checkData = title.trim().length > 0 && amount !== 0
    //     setFromValid(checkData)

    // },[title,amount])

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>Number</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" value={chgnumber}/>
                </div>
                <div className="form-control">
                    <label>Assigned to</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" value={assignedto}/>
                </div>
                <div className="form-control">
                    <label>Assignment group</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" value={assignmentgroup}/>
                </div>
                <div className="form-control">
                    <label>Business service</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" value={businessservice}/>
                </div>
                <div className="form-control">
                    <label>Accelerated Change</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" value={acceleratedchange}/>
                </div>
                <div className="form-control">
                    <label>Short description</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" value={shortdescription}/>
                </div>
                <div className="form-control">
                    <label>Type</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" value={type}/>
                </div>
                <div className="form-control">
                    <label>State</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" value={state}/>
                </div>
                <div className="form-control">
                    <label>Planned start date</label>
                    <input type="text" placeholder="ระบุชื่อรายการของคุณ" value={plannedstartdate}/>
                </div>
                <div>
                    <button type="submit" className='btn'>เพิ่มข้อมูล</button>
                    {/* disabled={!fromValid} */}
                </div>
            </form>
        </div>
    )
}

export default FormComponent