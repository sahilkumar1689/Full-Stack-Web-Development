import React, { useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { updateFaculty } from './addData';

function UpdateFaculty() {
    const location = useLocation();
    const {dbId,empID,empName,empPhone} = location.state;

    let EmployeeID = useRef();
    let [empNameValue,setEmpName] = useState(empName);
    let [empPhoneValue,setEmpPhone] = useState(empPhone);

  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    let empData = {
      empID: EmployeeID.current.value,
      empName: empNameValue,
      empPhone: empPhoneValue,
    };
    EmployeeID.current.value = "";
    setEmpName("");
    setEmpPhone("");

    // console.log(empData);

    updateFaculty(dbId,empData)
    .then(res=>navigate("/dashboard/allFaculty"))
    .catch(res=>console.log(res.message));

  };
    return (
        <div>
            <form>
                <label htmlFor="EmployeeID">
                    Enter EmployeeID:
                    <input
                        type="number"
                        id="EmployeeID"
                        placeholder="EmployeeID"
                        value={empID}
                        ref={EmployeeID}
                        disabled
                        required
                    />
                </label>
                <br />
                <br />
                <label htmlFor="empName">
                    Enter Employee Name:
                    <input
                        type="text"
                        id="empName"
                        placeholder="empName"
                        value={empNameValue}
                        onChange={(e)=>{setEmpName(e.target.value)}}
                        required
                    />
                </label>
                <br />
                <br />
                <label htmlFor="empPhone">
                    Enter Employee PhoneNo:
                    <input
                        type="number"
                        id="empPhone"
                        placeholder="empPhone"
                        min={10}
                        value={empPhoneValue}
                        onChange={(e)=>{setEmpPhone(e.target.value)}}
                        required
                    />
                </label>
                <br />
                <br />
                <button onClick={handleForm}>UPDATE</button>
            </form>
        </div>
    )
}

export default UpdateFaculty