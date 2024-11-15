import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addEmployeeAPI } from "../services/allAPI";

const Add = () => {
    const [empDetails, setEmpDetails] = useState({
        id: "",
        name: "",
        email: "",
        status: "active",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addEmployeeAPI(empDetails);
            alert("Employee added successfully");

            setEmpDetails({
                id: "",
                name: "",
                email: "",
                status: "active",
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <div style={{ paddingTop: "100px" }}>
                <div className="container border rounded-5 p-5 fw-bold">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="EmpID">
                            <Form.Label>Employee ID:</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter the Employee ID"
                                name="id"
                                value={empDetails.id}
                                onChange={handleChange}
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
                            Add Employee
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default Add;
