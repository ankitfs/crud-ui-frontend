import AddEmployee from './components/AddEmployee';
import ListEmployees from './components/ListEmployees';
import { BrowserRouter,Routes, Route } from 'react-router-dom'; 
import HeaderComponent from './components/HeaderComponent';

function App() {

  const employees = [];

  const updateEmployeeHandler = (newEmployee) => {
    console.log('new employee->'+newEmployee);
    employees.push(newEmployee);
  }

  return (
    <div>
        <HeaderComponent/>
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ListEmployees employeeArray={employees}/>}></Route>
                <Route path='/addemployee' element={<AddEmployee empData={updateEmployeeHandler}/>}></Route>            
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
