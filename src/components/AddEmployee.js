import { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import { useNavigate } from "react-router-dom";
import '../css/employee-form.css';


const AddEmployee = (props) => {

    const[employee, setEmployeeData] = useState({id : '', name : '', email : '', department : '', salary : ''});

    const navigate = useNavigate();


    const addEmployeeHandler = (formValues) => {
        console.log('add employee form values->'+formValues.toString());    
        setEmployeeData(formValues);
        console.log(employee.email);

        props.empData(employee);
        navigate("/");
    } 

    return (
        <div className="add-employee">
            <h2>Add Employee Form</h2>
            <EmployeeForm addEmployeeData={addEmployeeHandler} empData={employee} event="add"/>
        </div>
    )
}

export default AddEmployee;