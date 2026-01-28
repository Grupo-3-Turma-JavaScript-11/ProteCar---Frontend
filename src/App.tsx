import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaSeguros from './components/seguro/listaseguros/ListaSeguros'
import FormSeguro from './components/seguro/formseguro/FormSeguro'
import DeletarSeguro from './components/seguro/deletarseguro/DeletarSeguro'
import ListaCategorias from './assets/components/categoria/listacategorias/ListaCategorias'
import FormCategoria from './assets/components/categoria/formcategoria/FormCategoria'
import DeletarCategoria from './assets/components/categoria/deletarcategoria/DeletarCategoria'

function App() {
	return (
		<>
			{/* <AuthProvider> */}
				<BrowserRouter>
					{/* <Navbar /> */}
					<div className="min-h-[80vh]">
						<Routes>
							{/* <Route path="/" element={<Login />} /> */}
              {/* <Route path="/home" element={<Home />} /> */}
							{/* <Route path="/cadastro"	element={<Cadastro />}/> */}
              <Route path="/" element={<ListaSeguros />} />
							<Route path="/categorias" element={<ListaCategorias/>} />
							<Route path="/cadastrarcategoria" element={<FormCategoria />} />
							<Route path="/editarcategoria/:id" element={<FormCategoria />} />
							<Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
							<Route path="/produtos" element={<ListaSeguros />} />
              <Route path="/cadastrarproduto" element={<FormSeguro />} />
              <Route path="/editarproduto/:id" element={<FormSeguro />} />
              <Route path="/deletarproduto/:id" element={<DeletarSeguro />} />
						</Routes>
					</div>
					{/* <Footer /> */}
				</BrowserRouter>
			{/* </AuthProvider> */}
		</>
	)
}

export default App