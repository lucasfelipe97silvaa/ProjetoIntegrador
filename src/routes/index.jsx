import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Cadastrar from "../pages/Cadastrar";
import NotFound from "../pages/NotFound";
import Home from '../pages/Home';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Detalhes from '../pages/Det-produtos';
import Produto from '../pages/ProdutoNilda';
import Finalizacao from '../pages/Finalização';
import Pneus from '../pages/ProdutoNilda/Pneus/pneus';
import Freios from '../pages/ProdutoNilda/Freios/freios';
import Baterias from '../pages/ProdutoNilda/Baterias/baterias';
import Oleo from '../pages/ProdutoNilda/Oleo/oleo';
import Ofertas from '../pages/ProdutoNilda/Ofertas/ofertas';
import CompraFinalizar from '../pages/CompraFinalizada';
const Root = () => {
    return(
        <Router>
            <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/produtos" element={<Produto/>}/>                    
                    <Route path="/pneus" element={<Pneus/>}/>                
                    <Route path="/freios" element={<Freios/>}/>                
                    <Route path="/baterias" element={<Baterias/>}/>                
                    <Route path="/oleo" element={<Oleo/>}/>                
                    <Route path="/ofertas" element={<Ofertas/>}/>                
                    <Route path="administrar/cadastrar" element={<Cadastrar/>}/>  
                    <Route path="produto/detalhes_produtos/:id" element={<Detalhes/>}/>  
                    <Route path="produto/finalizar/:id" element={<Finalizacao/>}/>  
                    <Route path="/finalizar" element={<CompraFinalizar/>}/>  
                    <Route path="*" element={<NotFound/>}/> 
                </Routes>
            <Footer/>
        </Router>
    )
}

export default Root;