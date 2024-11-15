import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteEmployeeAPI, getEmployeeAPI } from '../services/allAPI';

const Home = () => {
  const [empDetails, setEmpDetails] = useState([]);

  const getEmp = async () => {
    try {
      const result = await getEmployeeAPI();
      if (result.status >= 200 && result.status < 300) {
        console.log(result.data);
        setEmpDetails(result.data);
      } else {
        console.log("ERROR IN FETCHING DATA!!");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteEmp = async (id) => {
    try {
      await deleteEmployeeAPI(id);
      getEmp();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getEmp();
  }, []);

  return (
    <>
      <div style={{ paddingTop: '100px' }}>
        <div className="container">
          <table className="table border rounded-4">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {empDetails.map((emp) => (
                <tr key={emp.id}>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.status}</td>
                  <td>
                    <div className="d-flex space-x-2 align-content-center">
                      <i
                        onClick={() => deleteEmp(emp.id)}
                        className="fa-solid fa-trash me-4 text-danger"
                        style={{ cursor: 'pointer' }}
                      ></i>
                      <Link to={`/edit/${emp.id}`}>
                        <i className="fa-solid fa-pen-to-square text-primary"></i>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Home;
