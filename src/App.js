import AddEmployee from './components/AddEmployee';
import ListEmployees from './components/ListEmployees';
import { BrowserRouter,Routes, Route } from 'react-router-dom'; 
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div>
        <HeaderComponent/>
        
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ListEmployees/>}></Route>
                <Route path='/addemployee' element={<AddEmployee/>}></Route>            
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
