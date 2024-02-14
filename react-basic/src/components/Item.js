import Proptypes from 'prop-types';
import './Item.css'

const Item =(props)=> {
    const {chgnumber,assignedto,assignmentgroup,businessservice,acceleratedchange,shortdescription,type,state,plannedstartdate} = props
    
    // const status = amount < 0 ? "expense":"income"
    // const symbro = amount < 0 ? "-":"+"

    //ฟังก์ชั่นแปลงรูปแบบตัวเลข
    // const formatNumber=(num)=> {
    //     return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    // }

    return(
        // <li className={status}> {title}  <span>{symbro}{ formatNumber(Math.abs(amount).toFixed(2)) }</span> </li>

        
        <div>
            <li> {chgnumber} | {assignedto} | {assignmentgroup} | {businessservice} | {acceleratedchange} | {shortdescription} | {type} | {state} | {plannedstartdate}</li>
        
            
                {/* <tr>
                    <td>{chgnumber}</td>
                    <td>{assignedto}</td>
                    <td>{assignmentgroup}</td>
                    <td>{businessservice} </td>
                    <td>{acceleratedchange}</td>
                    <td>{shortdescription}</td>
                    <td>{type}</td>
                    <td>{state}</td>
                    <td>{plannedstartdate}</td>
                </tr> */}
        </div>
    )
} 

Item.propTypes={
    chgnumber:Proptypes.string,
    assignedto:Proptypes.string,
    assignmentgroup:Proptypes.string,
    businessservice:Proptypes.string,
    acceleratedchange:Proptypes.string,
    shortdescription:Proptypes.string,
    type:Proptypes.string,
    state:Proptypes.string,
    plannedstartdate:Proptypes.string,
}

export default Item
