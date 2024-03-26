import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EmployeeReport from './components/EmployeeReport'
import EmpaddData from './components/EmpaddData'
import EmpUpdate from './components/EmpUpdate'



const AppEmp = () => {
  return (
    <>
        <BrowserRouter>
<Routes>
    <Route path= "/EmployeeReport" element={ <EmployeeReport />} />
    <Route path= "/EmpaddData" element={ <EmpaddData />} />
    <Route path= "/EmpUpdate/:id" element={ <EmpUpdate />} />
    
</Routes>
    </BrowserRouter>
    </>
  )
}

export default AppEmp






