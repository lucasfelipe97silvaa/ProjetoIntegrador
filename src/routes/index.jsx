import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Cadastrar from "../pages/Cadastrar"
import NotFound from "../pages/NotFound"
import Home from '../pages/Home'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Detalhes from '../pages/Det-produtos'
import Produto from '../pages/ProdutoNilda'
import Finalizacao from '../pages/Finalização';

const Root = () => {
    return(
        <Router>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/produto" element={<Produto/>}/>                    
                    <Route path="administrar/cadastrar" element={<Cadastrar/>}/>  
                    <Route path="produto/detalhes_produtos/:id" element={<Detalhes/>}/>  
                    <Route path="produto/finalizar" element={<Finalizacao/>}/>  
                    <Route path="*" element={<NotFound/>}/> 
                </Routes>
            <Footer/>
        </Router>
    )
}

export default Root;