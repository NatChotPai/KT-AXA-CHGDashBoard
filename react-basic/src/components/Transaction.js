import * as React from "react";
import { useTable } from "react-table";
import Item from "./Item";
import './Transaction.css'
import fakeData from "./MOCK_DATA.json";


const Transaction =(props)=> {

  const data = React.useMemo(() => fakeData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "First Name",
        accessor: "first_name",
      },
      {
        Header: "Last Name",
        accessor: "last_name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "University",
        accessor: "university",
      },
    ],
    []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

    return (
      <div className="App">
        <div className="tablecontainer">
          <table {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );

    //Array Data
    // const {items} = props 
    // return(
    //   <div>
    //     <ul className="item-list">
    //         {/* Array Map */}
    //         {items.map((element)=>{
    //             return <Item key = {element.id}
    //                          chgnumber={element.chgnumber} 
    //                          assignedto={element.assignedto} 
    //                          assignmentgroup = {element.assignmentgroup} 
    //                          businessservice = {element.businessservice} 
    //                          acceleratedchange = {element.acceleratedchange} 
    //                          shortdescription = {element.shortdescription} 
    //                          type = {element.type} 
    //                          state = {element.state} 
    //                          plannedstartdate = {element.plannedstartdate} 
    //                     />
    //         })}
    //     </ul>
    //   </div>
    // )
}

export default Transaction

