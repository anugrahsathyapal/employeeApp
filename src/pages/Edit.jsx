import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { editEmployeeAPI, getEmployeeByIdAPI } from '../services/allAPI';

const Edit = () => {
    const { id } = useParams();
    const [empDetails, setEmpDetails] = useState({
        id: '',
        name: '',
        email: '',
        status: 'active'
    });

    useEffect(() => {
        fetchEmployee();
    }, [id]);

    const fetchEmployee = async () => {
        try {
            const result = await getEmployeeByIdAPI(id);
            console.log(result);
            if (result.status >= 200 && result.status < 300) {
                setEmpDetails(result.data);
            } else {
                console.error('Employee not found');
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpDetails((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editEmployeeAPI(id, empDetails);
            alert("Employee updated successfully");
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
            <div style={{ paddingTop: '100px' }}>
                <div className="container border rounded-5 p-5 fw-bold">
                    <h3>Edit Employee</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="EmpID">
                            <Form.Label>Employee ID:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter the Employee ID"
                                name="id"
                                value={empDetails.id}
                                onChange={handleChange}
                                readOnly
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="EmpName">
                            <Form.Label>Employee Name:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter the Employee Name"
                                name="name"
                                value={empDetails.name}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="EmpEmail">
                            <Form.Label>Employee Email:</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter the Employee Email"
                                name="email"
                                value={empDetails.email}
                                onChange={handleChange}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="EmpStatus">
                            <Form.Label>Employee Status:</Form.Label>
                            <Form.Control
                                as="select"
                                name="status"
                                value={empDetails.status}
                                onChange={handleChange}
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Edit;
