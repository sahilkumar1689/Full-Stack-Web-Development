import React, { useEffect, useState } from 'react'
import { deleteFaculty, getFaculty } from './addData';
import { useNavigate } from 'react-router-dom';

function AllFaculty() {
    const [empData,setEmpData] = useState(null);
    const [refresh,setRefresh] = useState(0);
    const navigate = useNavigate();

    useEffect(()=>{
        getFaculty()
        .then(res=>{
            if(res.length !== 0) res.reverse();
            setEmpData(res);
        })
        .catch(err=>console.log(err.message));
    },[refresh])

    const deleteEmp = (dbId)=>{
        deleteFaculty(dbId)
        .then(res=>setRefresh(prev=>prev?0:1))
        .catch(res=>console.log(res.message));
    }


    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>EmpID</th>
                        <th>EmpName</th>
                        <th>EmpPhone</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {empData === null ? (
                        <tr>
                            <td colSpan={5}>
                                <p>No Empolyee To Show</p>
                            </td>
                        </tr>
                    ) : (
                        empData.map((elem, idx) => {
                            return (
                                <tr key={elem.dbId}>
                                    <td>{elem.empID}</td>
                                    <td>{elem.empName}</td>
                                    <td>{elem.empPhone}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                navigate("/dashboard/updateFaculty", { state:elem })
                                            }
                                        >
                                            Update
                                        </button>
                                    </td>
                                    <td>
                                        <button onClick={() =>{deleteEmp(elem.dbId)}}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AllFaculty