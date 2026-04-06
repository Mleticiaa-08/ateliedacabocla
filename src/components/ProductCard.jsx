function ProductCard({ produto }) {
    return (
      <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition">
        <h3 className="text-xl font-semibold mb-2">
          {produto.nome}
        </h3>
        <p className="text-gray-600 mb-4">
          R$ {produto.preco}
        </p>
        <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
  
  export default ProductCard;  