import React, { useRef } from "react";

const EmployeeForm = (props) => {

    const inputEmpIdRef = useRef();//props.empData.id;
    const inputNameRef = useRef();//props.empData.name;
    const inputEmailRef = useRef();//props.empData.email;
    const inputDepartmentRef = useRef();//props.empData.department;
    const inputSalaryRef = useRef();//props.empData.salary;

    const employeeData = props.empData;
    const eventData = props.event;

    const submitHandler = (event) => {
        event.preventDefault();
        console.log('form submitted');

        // employeeData = { id : inputEmpIdRef.current.value, name : inputNameRef.current.value, email : inputEmailRef.current.value, department : inputDepartmentRef.current.value, salary : inputSalaryRef.current.value};

        employeeData.id = inputEmpIdRef.current.value;
        employeeData.name = inputNameRef.current.value;
        employeeData.email = inputEmailRef.current.value;
        employeeData.department = inputDepartmentRef.current.value;
        employeeData.salary = inputSalaryRef.current.value;

        //calling the parent component handler function to add employee
        if (eventData === 'add') {
            props.addEmployeeData(employeeData);
            console.log(employeeData);
        }
        
    }

    return(
        <div>
            <form class="employee-form" onSubmit={submitHandler}>
                <div className="form-input-div">
                    <label>ID *:</label>
                    <input type="text" ref={inputEmpIdRef}/>
                </div>
                <div className="form-input-div">
                    <label>Name *:</label>
                    <input type="text" ref={inputNameRef}/>
                </div>
                <div className="form-input-div">
                    <label>Email *:</label>
                    <input type="text" ref={inputEmailRef}/>
                </div>
                <div className="form-input-div">
                    <label>Department *:</label>
                    <select name="department" ref={inputDepartmentRef}>
                        <option value="0">Select</option>
                        <option value="1">Admin</option>
                        <option value="2">Finance</option>
                        <option value="3">HR</option>
                        <option value="4">IT</option>
                        <option value="5">Marketing</option>                    
                        <option value="6">Sales</option>
                    </select>
                </div>
                <div className="form-input-div">
                    <label>Salary *: </label>
                    <input type="text" name="salary" ref={inputSalaryRef}/>
                </div>
                <div className="form-submit-div">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EmployeeForm;