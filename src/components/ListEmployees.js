import { Link } from "react-router-dom";
import '../css/common.css';


const ListEmployees = (props) => {

    

    const employeesListArray = props.employeeArray;

    return (
        <div className="employee-list">
            <h3><Link to="/addemployee">Add Employee</Link></h3>
            <div className="emp-container">            
                <div className="table-header">
                    <div className="row">ID</div>
                    <div className="row">Name</div>
                    <div className="row">Email</div>
                    <div className="row">Department</div>
                    <div className="row">Salary</div>
                </div>
                
            {   employeesListArray.length > 0 &&
                employeesListArray.map((emp, index) => 
                    <div className="column" key={index}>
                        <div className="row">{emp.id}</div>    
                        <div className="row">{emp.name}</div>
                        <div className="row">{emp.email}</div>
                        <div className="row">{emp.department}</div>
                        <div className="row">{emp.salary}</div>
                    </div>
                )
            }
            {
                employeesListArray.length === 0 &&
                <div className="column"><div className="row">No Rows Found</div></div>
            }
                
            </div>
        </div>
    )
}

export default ListEmployees;