import { Link } from "react-router-dom";


const ListEmployees = () => {

    const employeesListArray = [
        {id : 1, name : "Ankit", email : "ankit@gmail.com"},
        {id : 2, name : "Rahul", email : "rahul@gmail.com"},
        {id : 3, name : "Sachin", email : "sachin@gmail.com"},
        {id : 4, name : "Sunil", email : "sunil@gmail.com"}
    ]

    return (
        <div>
            <Link to="/addemployee">Add Employee</Link>
        <div align="center">            
            <div>Page for List Employees</div>
            <table border={1}>
                <thead>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Email</td>
                </thead>
                <tbody>
            {   employeesListArray.length > 0 &&
                employeesListArray.map((emp, index) => 
                    <tr key={index}>
                        <td>{emp.id}</td>    
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                    </tr>
                )
            }
            {
                employeesListArray.length === 0 &&
                <tr><td colSpan={3}>No Rows Found</td></tr>
            }
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default ListEmployees;