<<<<<<< HEAD

import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './page/home/Home'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
=======
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaSeguros from './components/seguro/listaseguros/ListaSeguros'
import FormSeguro from './components/seguro/formseguro/FormSeguro'
import DeletarSeguro from './components/seguro/deletarseguro/DeletarSeguro'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'

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
>>>>>>> 30ee3c68556531732bfb3398e8db25824af69ca2
}

export default App