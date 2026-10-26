import React, { useRef } from "react";
// import { addNewStudent } from "./addData";
import { useNavigate } from "react-router-dom";
import { addFaculty } from "./addData";


function AddFaculty() {

    let EmployeeID = useRef();
  let empNameValue = useRef();
  let empPhoneValue = useRef();
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    let empData = {
      empID: EmployeeID.current.value,
      empName: empNameValue.current.value,
      empPhone: empPhoneValue.current.value,
    };
    EmployeeID.current.value = "";
    empNameValue.current.value = "";
    empPhoneValue.current.value = "";

    console.log(empData);

    // Adding faculty in the fireStore:
    addFaculty(empData)
    .then(res=>navigate("/dashboard/allFaculty"))
    .catch(err=>console.log(err.message));

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
                        ref={EmployeeID}
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
                        ref={empNameValue}
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
                        ref={empPhoneValue}
                        required
                    />
                </label>
                <br />
                <br />
                <button onClick={handleForm}>ADD</button>
            </form>
        </div>
    )
}

export default AddFaculty