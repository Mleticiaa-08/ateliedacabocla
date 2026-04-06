import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard.jsx";

function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        fetch("/api/produtos")
            .then(res => res.json())
            .then(data => setProdutos(data));
    }, []);

    return (
        <div className="p-10 grid-cols-1 md:grid-cols-3 gap-6">
            {produtos.map(produto => (
                <ProductCard key={produto.id} produto={produto} />
            ))}
        </div>
    );
}

export default Produtos;