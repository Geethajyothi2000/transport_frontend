import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './components/Update'
import Transport from './components/Transport'
import Transportbtn from './components/Transportbtn'
import Report from './components/Report'
import Aboutus from './components/Aboutus'
import Contacts from './components/Contacts'
import Vehicles from './components/Vehicles'
import AddData from './components/AddData'
// import EmployeReport from './components/EmployeReport'


const App = () => {
  return (
    <>
        <BrowserRouter>
<Routes>
<Route path= "/" element={ <Transportbtn/>} />
    <Route path= "/Report" element={ <Report />} />
    <Route path= "/Transport" element={ <Transport />} />
    <Route path= "/AddData" element={ < AddData/>} />
    <Route path= "/Update/:id" element={ <Update />} />
    <Route path= "/Aboutus" element={ <Aboutus />} />
    <Route path= "/Contacts" element={ <Contacts />} />
    <Route path= "/Vehicles" element={ <Vehicles />} />

    
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App