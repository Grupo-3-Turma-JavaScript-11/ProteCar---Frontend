import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaCategorias from './assets/components/categoria/listacategorias/ListaCategorias';
import DeletarCategoria from './assets/components/categoria/deletarcategoria/DeletarCategoria';
import FormCategoria from './assets/components/categoria/formcategoria/FormCategoria';
//import Footer from './components/footer/Footer'
//import Navbar from './components/navbar/Navbar'

function App() {
	return (
		<>
				<BrowserRouter>
					{/* <Navbar /> */}
					<div className="min-h-[80vh]">
						<Routes>
							{/* <Route path="/home" element={<Home />} /> */}
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
