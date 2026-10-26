import React, { useEffect, useState } from "react";
import { deleteStd, getStudents } from "./addData";
import { useNavigate } from "react-router-dom";

function StudentData() {
  const [stdData, setStdData] = useState(null);
  const [temp, setTemp] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    getStudents()
      .then((res) => setStdData(res))
      .catch((err) => console.log(err));
  }, [temp]);

  const handleDelete = (deleteId) => {
    deleteStd(deleteId).then((res) => setTemp((prev) => (prev ? 0 : 1)));
  };

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>RollNo</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {stdData === null ? (
            <tr>
              <td colSpan={5}>
                <p>No Student To Show</p>
              </td>
            </tr>
          ) : (
            Object.keys(stdData)?.map((elem, idx) => {
              return (
                <tr key={stdData[elem].rollNo}>
                  <td>{stdData[elem].rollNo}</td>
                  <td>{stdData[elem].stdName}</td>
                  <td>{stdData[elem].stdPhone}</td>
                  <td>
                    <button
                      onClick={() =>
                        navigate("/dashboard/updateStudent", { state: stdData[elem] })
                      }
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(stdData[elem].stdName)}>
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
  );
}

export default StudentData;
