import Proptypes from 'prop-types';
import './Item.css'
// import DataContext from '../data/DataContext';

const Item =(props)=> {
    const {title,amount} = props
    const status = amount < 0 ? "expense":"income"
    const symbro = amount < 0 ? "-":"+"
    return(
        <li className={status}> {title}  <span>{symbro}{Math.abs(amount)}</span> 
        
        {/* solution 1 Global context */}
        {/* <DataContext.Consumer>
            {value=><p>{value}</p>}
        </DataContext.Consumer> */}
        </li>
        
    )
} 

Item.propTypes={
    title:Proptypes.string.isRequired,
    amount:Proptypes.number
}

export default Item