import { useMemo, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedBackground from "../components/AnimatedBackground";
import Header from "../components/Header";

// Destaques
import xangoImg from "../assets/xango.png";
import padilhaImg from "../assets/padilha.png";
import iemanjaImg from "../assets/iemanja.png";
import mulamboImg from "../assets/mulambo.png";

// Guias
import guiaXango2 from "../assets/guia-xango.png";
import guiaQuiteria from "../assets/guia-quiteria.png";
import guiaPretoVelho from "../assets/guia-pretovelho.png";
import guiaOya from "../assets/guia-oya.png";
import guiaOxum from "../assets/guia-oxum.png";
import guiaOxossi from "../assets/guia-oxossi.png";
import guiaOxaguian from "../assets/guia-oxaguian.png";
import guiaMirim from "../assets/guia-mirim.png";
import guiaExuDoLodo from "../assets/guia-exudolodo.png";
import guiaEre from "../assets/guia-ere.png";
import guiaEre2 from "../assets/guia-ere2.png";

// Brajás
import brajaPombogira from "../assets/braja-pombogira.png";
import brajaMalandro from "../assets/braja-malandro.png";
import brajaIemanja from "../assets/braja-iemanja.png";
import brajaExu from "../assets/braja-exu.png";
import brajaDamaNoite from "../assets/braja-damadanoite.png";
import brajaCaveira from "../assets/braja-caveira.png";
import brajaCaveira2 from "../assets/braja-caveira2.png";
import brajaCaveira3 from "../assets/braja-caveira3.png";

// Brincos
import brincoEsquerda from "../assets/brinco-esquerda.png";
import brincoExuCaveira from "../assets/brinco-exucaveira.png";
import brincoIemanja from "../assets/brinco-iemanja.png";
import brincoPombogira from "../assets/brinco-pombogira.png";
import brincoPovoCigano from "../assets/brinco-povocigano.png";

// Pulseiras
import pulseiraOgum from "../assets/pulseira-ogum.png";
import pulseiraOxala from "../assets/pulseira-oxala.png";
import pulseiraExu from "../assets/pulseira-exu.png";
import pulseiraCobraCoral from "../assets/pulseira-conjuntocobracoral.png";

// Personalizados
import personalizadoChapeuExu from "../assets/personalizado-chapeuexu.png";
import personalizadoCopoExu from "../assets/personalizado-copodeexu.png";
import personalizadoTacaPombogira from "../assets/personalizado-tacapombogira.png";

const CATEGORIES = [
  { key: "todos", label: "Todos" },
  { key: "guias", label: "Guias" },
  { key: "brajas", label: "Brajás" },
  { key: "pulseiras", label: "Pulseiras" },
  { key: "brincos", label: "Brincos" },
  { key: "personalizados", label: "Personalizados" },
];

const PRODUCTS = [
  { id: "p1", category: "guias", name: "Guia de Xangô", price: 89.9, image: xangoImg },
  { id: "p2", category: "guias", name: "Guia de Maria Padilha", price: 64.9, image: padilhaImg },
  { id: "p3", category: "guias", name: "Guia de Iemanjá", price: 99.9, image: iemanjaImg },
  { id: "p4", category: "guias", name: "Guia de Maria Mulambo", price: 74.9, image: mulamboImg },
];

const MORE_PRODUCTS = [
  // GUIAS
  { id: "g1", category: "guias", name: "Guia Xangô", price: 59.9, image: guiaXango2 },
  { id: "g2", category: "guias", name: "Guia de Pombogira", price: 62.9, image: guiaQuiteria },
  { id: "g3", category: "guias", name: "Guia de Preto Velho", price: 65.9, image: guiaPretoVelho },
  { id: "g4", category: "guias", name: "Guia Oyá", price: 68.9, image: guiaOya },
  { id: "g5", category: "guias", name: "Guia Oxum", price: 70.9, image: guiaOxum },
  { id: "g6", category: "guias", name: "Guia Oxóssi", price: 72.9, image: guiaOxossi },
  { id: "g7", category: "guias", name: "Guia Oxaguiã", price: 75.9, image: guiaOxaguian },
  { id: "g8", category: "guias", name: "Guia Exu Mirim", price: 58.9, image: guiaMirim },
  { id: "g9", category: "guias", name: "Guia de Exu", price: 66.9, image: guiaExuDoLodo },
  { id: "g10", category: "guias", name: "Guia de Erê", price: 54.9, image: guiaEre },
  { id: "g11", category: "guias", name: "Guia de Erê 2", price: 54.9, image: guiaEre2 },

  // BRAJÁS
  { id: "b1", category: "brajas", name: "Brajá Pombogira", price: 79.9, image: brajaPombogira },
  { id: "b2", category: "brajas", name: "Brajá Malandro", price: 75.9, image: brajaMalandro },
  { id: "b3", category: "brajas", name: "Brajá Iemanjá", price: 82.9, image: brajaIemanja },
  { id: "b4", category: "brajas", name: "Brajá Exu", price: 78.9, image: brajaExu },
  { id: "b5", category: "brajas", name: "Brajá Dama da Noite", price: 80.9, image: brajaDamaNoite },
  { id: "b6", category: "brajas", name: "Brajá Caveira", price: 83.9, image: brajaCaveira },
  { id: "b7", category: "brajas", name: "Brajá Caveira 2", price: 85.9, image: brajaCaveira2 },
  { id: "b8", category: "brajas", name: "Brajá Caveira 3", price: 87.9, image: brajaCaveira3 },

  // BRINCOS
  { id: "br1", category: "brincos", name: "Brinco Esquerda", price: 29.9, image: brincoEsquerda },
  { id: "br2", category: "brincos", name: "Brinco Exu Caveira", price: 32.9, image: brincoExuCaveira },
  { id: "br3", category: "brincos", name: "Brinco Iemanjá", price: 34.9, image: brincoIemanja },
  { id: "br4", category: "brincos", name: "Brinco Pombogira", price: 31.9, image: brincoPombogira },
  { id: "br5", category: "brincos", name: "Brinco Povo Cigano", price: 33.9, image: brincoPovoCigano },

  // PULSEIRAS
  { id: "pu1", category: "pulseiras", name: "Pulseira Ogum", price: 39.9, image: pulseiraOgum },
  { id: "pu2", category: "pulseiras", name: "Pulseira Oxalá", price: 42.9, image: pulseiraOxala },
  { id: "pu3", category: "pulseiras", name: "Pulseira Exu", price: 38.9, image: pulseiraExu },
  { id: "pu4", category: "pulseiras", name: "Pulseira Cobra Coral", price: 44.9, image: pulseiraCobraCoral },

  // PERSONALIZADOS
  { id: "pe1", category: "personalizados", name: "Chapéu de Exu", price: 49.9, image: personalizadoChapeuExu },
  { id: "pe2", category: "personalizados", name: "Copo de Exu", price: 45.9, image: personalizadoCopoExu },
  { id: "pe3", category: "personalizados", name: "Taça de Pombogira", price: 52.9, image: personalizadoTacaPombogira },
];

const ALL_PRODUCTS = [...PRODUCTS, ...MORE_PRODUCTS];

function formatBRL(value) {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("todos");
  const [cartIds, setCartIds] = useState(new Set());
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS;
    if (activeCategory !== "todos") {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    if (search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filtered;
  }, [search, activeCategory]);

  const filteredMore = useMemo(() => {
    let filtered = MORE_PRODUCTS;
    if (activeCategory !== "todos") {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    if (search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    return filtered;
  }, [search, activeCategory]);

  const cartItems = ALL_PRODUCTS.filter(p => cartIds.has(p.id));
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  function addToCart(id) {
    setCartIds(prev => new Set(prev).add(id));
    setCartOpen(true);
  }

  function removeFromCart(id) {
    setCartIds(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  }

  return (
    <div className="relative min-h-screen text-green-900">
      <div className="fixed inset-0 bg-green-50 z-[-1]" />
      <AnimatedBackground />

      <Header
        search={search}
        setSearch={setSearch}
        cartCount={cartIds.size}
        onOpenCart={() => setCartOpen(true)}
      />

      {/* MODAL IMAGEM */}
      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div className="fixed inset-0 bg-black/70 z-50" onClick={() => setSelectedImage(null)} />
            <motion.img src={selectedImage} className="fixed z-50 top-1/2 left-1/2 max-w-[90%] max-h-[80%] -translate-x-1/2 -translate-y-1/2 rounded-2xl" />
          </>
        )}
      </AnimatePresence>

      {/* CARRINHO */}
      <AnimatePresence>
        {cartOpen && (
          <>
            <motion.div className="fixed inset-0 bg-black/30 z-40" onClick={() => setCartOpen(false)} />
            <motion.div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white z-50 flex flex-col">
              <div className="p-6 flex justify-between">
                <h2>Seu Carrinho 🛒</h2>
                <button onClick={() => setCartOpen(false)}>✕</button>
              </div>

              <div className="flex-1 overflow-auto p-6 space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex gap-3">
                    <img src={item.image} className="w-16 h-16 rounded-lg" />
                    <div>
                      <p>{item.name}</p>
                      <p>{formatBRL(item.price)}</p>
                      <button onClick={() => removeFromCart(item.id)}>Remover</button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6">
                <p>Total: {formatBRL(total)}</p>
                <button className="w-full bg-emerald-600 text-white py-2 rounded-xl">
                  Finalizar compra
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className="px-6 max-w-md mx-auto space-y-8 pb-16">

        {/* CATEGORIAS */}
        <div className="flex gap-2 overflow-x-auto">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-full text-sm ${
                activeCategory === cat.key
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-green-800"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* DESTAQUES */}
        {activeCategory === "todos" && (
          <div>
            <h2 className="font-semibold mb-3">Destaques 🔥</h2>
            <div className="flex gap-4 overflow-x-auto">
              {filteredProducts.map(p => (
                <div key={p.id} className="min-w-[200px] bg-white p-4 rounded-2xl">
                  <img src={p.image} onClick={() => setSelectedImage(p.image)} className="h-32 w-full rounded-xl cursor-pointer" />
                  <p>{p.name}</p>
                  <p>{formatBRL(p.price)}</p>
                  <button onClick={() => addToCart(p.id)} className="w-full bg-emerald-600 text-white py-2 rounded-xl">
                    Adicionar
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PRODUTOS */}
        <div className="grid grid-cols-2 gap-4">
          {filteredMore.map(item => (
            <div key={item.id} className="bg-white p-3 rounded-2xl">
              <img src={item.image} onClick={() => setSelectedImage(item.image)} className="h-40 w-full rounded-xl cursor-pointer" />
              <p>{item.name}</p>
              <p>{formatBRL(item.price)}</p>
              <button onClick={() => addToCart(item.id)} className="w-full bg-emerald-600 text-white py-2 rounded-xl">
                Adicionar
              </button>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
