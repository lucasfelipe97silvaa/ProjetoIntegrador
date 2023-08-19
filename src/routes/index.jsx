import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Cadastrar from "../pages/Cadastrar"
import NotFound from "../pages/NotFound"

const Root = () => {
    return(
        <Router>
            <Routes>
                <Route path="/cadastrar" element={<Cadastrar/>}/>  
                <Route path="*" element={<NotFound/>}/> 
            </Routes>
        </Router>
    )
}

export default Root;