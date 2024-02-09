import Item from "./Item";
import './Transaction.css'
// import DataContext from "../data/DataContext";
// import { useContext } from 'react'

const Transaction =(props)=> {
    //Array Data
    const {items} = props 
    /* solution 2 Global context */
    // const name = useContext(DataContext)
    return(
      <div>
        <ul className="item-list">
            {/* Array Map */}
            {items.map((element)=>{
                return <Item title={element.title} amount={element.amount} key = {element.id}/>
            })}

          {/* <Item title={data[0].title} amount={data[0].amount}/>
          <Item title={data[1].title} amount={data[1].amount}/>
          <Item title={data[2].title} amount={data[2].amount}/>
          <Item title={data[3].title} amount={data[3].amount}/>
          <Item title={data[4].title} amount={data[4].amount}/> */}
        </ul>

        {/* solution 1 Global context */}
        {/* <DataContext.Consumer>
            {value=><p>{value}</p>}
        </DataContext.Consumer> */}

        {/* solution 2 Global context by useContext */}
        {/* {name} */}

      </div>
    )
}

export default Transaction