import { Link } from "react-router-dom";

 function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-950 text-white shadow-lg h-20">
        <div className="h-15 w-15 ml-10 ">
          {/* Logo */}
          <img          
          className="rounded-3xl w-full h-full" 
          src="/logo.png" 
          alt="Logo" />
                
        </div>
        <div className="px-4 sm:px-6 lg:px-8 w-full justify-between flex">
                  
          {/* Links centrais */}
          <div className="flex flex-1 justify-center items-center text-xl gap-8">
            <Link to={'/'} className="hover:text-blue-400 hover:underline transition">Home</Link>
            <Link to={'/categorias'} className="hover:text-blue-400 hover:underline transition">Categorias</Link>
            <Link to={'/produtos'} className="hover:text-blue-400 hover:underline transition">Seguros</Link>
            <Link to={'/sobrenos'} className="hover:text-blue-400 hover:underline transition" >Sobre Nós</Link>
            <Link to={'/faleconosco'} className="hover:text-blue-400 hover:underline transition">Fale Conosco</Link>            
          </div>

          {/* Busca + botão */}
          <div className="flex gap-4">
            {/*put
              type="text"
              placeholder="Buscar serviços e categorias"
              className="hidden sm:block px-4 py-2 rounded-full bg-white/20 text-white placeholder:text-white/70 focus:outline-none focus:bg-white/30 w-64"
            />*/}
            <button className="bg-blue-400 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-950 hover:border-white hover:border hover:text-blue-300 transition">
              Portal do Corretor
            </button>
            <button className="bg-white text-blue-950 px-5 py-2 rounded-full font-medium hover:bg-blue-950 hover:border-white hover:border hover:text-blue-300 transition">
              Portal do Cliente
            </button>
            
          </div>          
        </div>     
    </nav>
  );
}
export default Navbar;