function Header({ search, setSearch, cartCount, onOpenCart }) {
    return (
      <header className="sticky top-0 z-20 px-6 pt-4 pb-4">
        <div className="max-w-md mx-auto">
          {/* Linha superior */}
          <div className="flex items-center justify-between">
            <div className="leading-tight">
              <div className="text-sm text-green-700">Ateliê da</div>
              <div className="text-xl font-semibold text-green-900">
                Cabocla 🌿
              </div>
            </div>
  
            {/* Ícone do carrinho */}
            <button
              onClick={onOpenCart}
              className="relative rounded-2xl bg-white/80 backdrop-blur-md border border-green-100 shadow-sm px-3 py-2 text-green-900 hover:bg-white transition"
              type="button"
            >
              <span className="text-lg">🛒</span>
  
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-emerald-600 text-white text-xs font-bold grid place-items-center shadow">
                  {cartCount}
                </span>
              )}
              
            </button>
          </div>
  
          {/* Barra de busca */}
          <div className="mt-4">
            <div className="flex items-center gap-2 rounded-2xl bg-white/80 backdrop-blur-md border border-green-100 shadow-sm px-4 py-3">
              <span className="text-green-700 text-lg">🔎</span>
  
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar guias, brajas..."
                className="w-full 
                bg-transparent outline-none text-sm text-green-900 placeholder:text-green-600/70"
              /> 
  
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-green-700 text-sm"
                  type="button"
                >
                  ✕
                </button>
              )}
            </div>
  
            <p className="mt-2 text-xs text-green-700/80">
              Ex: guia de boiadeiro, brajá de pombogira…
            </p>
          </div>
        </div>
      </header>
    );
  }
  
  export default Header;
  