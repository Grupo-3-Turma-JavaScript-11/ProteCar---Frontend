import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias';
import FormCategoria from './components/categoria/formcategoria/FormCategoria';
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria';
//import Footer from './components/footer/Footer'
//import Navbar from './components/navbar/Navbar'

function App() {
	return (
		<>
				<BrowserRouter>
					{/* <Navbar /> */}
					<div className="min-h-[80vh]">
						<Routes>
							<Route path="/" element={<Home />} />
							{/* <Route path="/cadastro"	element={<Cadastro />}/> */}
							<Route path="/categorias" element={<ListaCategorias/>} />
							<Route path="/cadastrarcategoria" element={<FormCategoria />} />
							<Route path="/editarcategoria/:id" element={<FormCategoria />} />
							<Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
						</Routes>
					</div>
					{/* <Footer /> */}
				</BrowserRouter>
			
		</>
	)
}

export default App;
