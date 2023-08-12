import React, { useContext } from "react";
import StoreData from "./Store";
import { Link, useNavigate } from "react-router-dom";


const Student =()=>{

    const contextData=useContext(StoreData)
    // console.log(contextData.Studata)
    // console.log(typeof(contextData.Studata))
    const Navi = useNavigate()

    return(
        <>
        <div className="heading1">
        <h1>Student Data</h1>
        <button onClick={()=>Navi('/Addstudent')}>Add New Student</button>
        </div>
        <table>

           <thead>
        
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Edit</th>
            
        
           </thead>

          <tbody>
          {
                contextData.Studata && contextData.Studata.map((item,index)=>{

                    return(
                        
                        <tr key={index}>
                            <td>{item.Name}</td>
                            <td>{item.Age}</td>
                            <td>{item.Course}</td>
                            <td>{item.Batch}</td>
                            <td> <Link to={'/Editstudent'}>Edit</Link> </td>
                        </tr>
                    )
                })
               }
            
          </tbody>
        </table> 
        </>
    )
}
export default Student;