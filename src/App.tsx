import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import ListaSeguros from './components/seguro/listaseguros/ListaSeguros';

import DeletarSeguro from './components/seguro/deletarseguro/DeletarSeguro';
import FormSeguro from './components/seguro/formseguro/FormSeguro';
import SobreNos from './pages/sobrenos/SobreNos';

//import Footer from './components/footer/Footer'
//import Navbar from './components/navbar/Navbar'

function App() {
	return (
		<>
			{/* <AuthProvider> */}
				<BrowserRouter>
					<Navbar /> 
					<div className="min-h-[80vh]">
						<Routes>
							<Route path="/" element={<Home />} />
							{/* <Route path="/cadastro"	element={<Cadastro />}/> */}
              				<Route path="/" element={<ListaCategorias />} />
							<Route path="/categorias" element={<ListaCategorias/>} />
							<Route path="/cadastrarcategoria" element={<FormCategoria />} />
							<Route path="/editarcategoria/:id" element={<FormCategoria />} />
							<Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
							<Route path="/produtos" element={<ListaSeguros />} />
              				<Route path="/cadastrarproduto" element={<FormSeguro />} />
              				<Route path="/editarproduto/:id" element={<FormSeguro />} />
              				<Route path="/deletarproduto/:id" element={<DeletarSeguro />} />
							<Route path="/sobrenos" element={<SobreNos />} />
						</Routes>
					</div>
					<Footer />
				</BrowserRouter>
			{/* </AuthProvider> */}
		</>
	)
}

export default App