import { useMemo, useState } from "react";
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
import cabocladasaguas from "../assets/cabocladasaguas.png";
import caboclocobracoral from "../assets/caboclo-cobracoral.png";
import caboclocobracoral2 from "../assets/caboclo-cobracoral2.png";
import caboclo from "../assets/caboclo.png";
import exuorixa from "../assets/exu-orixa.png";
import exupombogira from "../assets/exu-pombogira.png";
import exu1 from "../assets/exu1.png";
import exu2 from "../assets/exu2.png";
import exu3 from "../assets/exu3.png";
import exu4 from "../assets/exu4.png";
import exu5 from "../assets/exu5.png";
import exu6 from "../assets/exu6.png";
import exu7 from "../assets/exu7.png";
import iemanja2 from "../assets/iemanja2.png";
import iemanja3 from "../assets/iemanja3.png";
import iemanja4 from "../assets/iemanja4.png";
import iemanja5 from "../assets/iemanja5.png";
import iemanja6 from "../assets/iemanja6.png";
import iemanja7 from "../assets/iemanja7.png";
import iemanja8 from "../assets/iemanja8.png";
import oba1 from "../assets/oba1.png";
import oba2 from "../assets/oba2.png";
import ogum1 from "../assets/ogum1.png";
import ogum2 from "../assets/ogum2.png";
import ogum3 from "../assets/ogum3.png";
import ogum4 from "../assets/ogum4.png";
import oxala1 from "../assets/oxala1.png";
import oxala2 from "../assets/oxala2.png";
import oxala3 from "../assets/oxala3.png";
import oxala4 from "../assets/oxala4.png";
import oxala5 from "../assets/oxala5.png";
import oxossicaboclo from "../assets/oxossi-caboclo.png";
import oxossicaboclo2 from "../assets/oxossi-caboclo2.png";
import oxossicaboclo3  from "../assets/oxossi-caboclo3.png";
import oxossi2 from "../assets/oxossi2.png";
import oxum2 from "../assets/oxum2.png";
import oxum3 from "../assets/oxum3.png";
import oya2 from "../assets/oya2.png";
import oya3 from "../assets/oya3.png";
import oya4 from "../assets/oya4.png";
import pombogira3 from "../assets/pombogira3.png";
import pombogira4 from "../assets/pombogira4.png";
import pombogira5 from "../assets/pombogira5.png";
import pombogira6 from "../assets/pombogira6.png";
import pombogira7 from "../assets/pombogira7.png";
import pombogira8 from "../assets/pombogira8.png";
import pombogira9 from "../assets/pombogira9.png";
import pombogira10 from "../assets/pombogira10.png";
import pombogiracigana from "../assets/pombogiracigana.png";
import pombogiracigana2 from "../assets/pombogiracigana2.png";
import xango3 from "../assets/xango3.png";
import xango4 from "../assets/xango4.png";
import xango5 from "../assets/xango5.png";

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
  { id: "p1", category: "guias", name: "Guia de Xangô", price: 35.0, image: xangoImg },
  { id: "p2", category: "guias", name: "Guia de Maria Padilha", price: 130.0, image: padilhaImg },
  { id: "p3", category: "guias", name: "Guia de Iemanjá", price: 55.0, image: iemanjaImg },
  { id: "p4", category: "guias", name: "Guia de Maria Mulambo", price: 100.0, image: mulamboImg },
];

const MORE_PRODUCTS = [
  { id: "g1", category: "guias", name: "Guia Xangô", price: 35.0, image: guiaXango2 },
  { id: "g2", category: "guias", name: "Guia de Pombogira", price: 80.0, image: guiaQuiteria },
  { id: "g3", category: "guias", name: "Guia de Preto Velho", price: 35.0, image: guiaPretoVelho },
  { id: "g4", category: "guias", name: "Guia Iansã", price: 40.0, image: guiaOya },
  { id: "g5", category: "guias", name: "Guia Oxum", price: 97.0, image: guiaOxum },
  { id: "g6", category: "guias", name: "Guia Oxóssi", price: 70.0, image: guiaOxossi },
  { id: "g7", category: "guias", name: "Guia Oxaguiã", price: 97.0, image: guiaOxaguian },
  { id: "g8", category: "guias", name: "Guia Exu Mirim", price: 120.0, image: guiaMirim },
  { id: "g9", category: "guias", name: "Guia de Exu", price: 65.0, image: guiaExuDoLodo },
  { id: "g10", category: "guias", name: "Guia de Erê", price: 80.0, image: guiaEre },
  { id: "g11", category: "guias", name: "Guia de Erê 2", price: 80.0, image: guiaEre2 },
  { id: "g12", category: "guias", name: "Guia de Cabocla das Águas", price: 77.0, image: cabocladasaguas },
  { id: "g13", category: "guias", name: "Guia de Caboclo Cobra Coral", price: 70.0, image: caboclocobracoral },
  { id: "g14", category: "guias", name: "Guia de Caboclo Cobra Coral 2", price: 35.0, image: caboclocobracoral2 },
  { id: "g15", category: "guias", name: "Guia de Caboclo", price: 60.0, image: caboclo },
  { id: "g16", category: "guias", name: "Guia de Exu Orixá", price: 180.0, image: exuorixa },
  { id: "g17", category: "guias", name: "Guia de Exu e/ou Pombogira", price: 35.0, image: exupombogira },
  { id: "g18", category: "guias", name: "Guia de Exu 1", price: 35.0, image: exu1 },
  { id: "g19", category: "guias", name: "Guia de Exu 2", price: 35.0, image: exu2 },
  { id: "g20", category: "guias", name: "Guia de Exu 3", price: 35.0, image: exu3 },
  { id: "g21", category: "guias", name: "Guia de Exu 4", price: 35.0, image: exu4 },
  { id: "g22", category: "guias", name: "Guia de Exu 5", price: 35.0, image: exu5 },
  { id: "g23", category: "guias", name: "Guia de Exu 6", price: 35.0, image: exu6 },
  { id: "g24", category: "guias", name: "Guia de Exu 7", price: 35.0, image: exu7 },
  { id: "g25", category: "guias", name: "Guia de Iemanjá 2", price: 35.0, image: iemanja2 },
  { id: "g26", category: "guias", name: "Guia de Iemanjá 3", price: 35.0, image: iemanja3 },
  { id: "g27", category: "guias", name: "Guia de Iemanjá 4", price: 35.0, image: iemanja4 },
  { id: "g28", category: "guias", name: "Guia de Iemanjá 5", price: 35.0, image: iemanja5 },
  { id: "g29", category: "guias", name: "Guia de Iemanjá 6", price: 35.0, image: iemanja6 },
  { id: "g30", category: "guias", name: "Guia de Iemanjá 7", price: 35.0, image: iemanja7 },
  { id: "g31", category: "guias", name: "Guia de Iemanjá 8", price: 35.0, image: iemanja8 },
  { id: "g32", category: "guias", name: "Guia de Obá 1", price: 35.0, image: oba1 },
  { id: "g33", category: "guias", name: "Guia de Obá 2", price: 35.0, image: oba2 },
  { id: "g34", category: "guias", name: "Guia de Ogum 1", price: 35.0, image: ogum1 },
  { id: "g35", category: "guias", name: "Guia de Ogum 2", price: 35.0, image: ogum2 },
  { id: "g36", category: "guias", name: "Guia de Ogum 3", price: 35.0, image: ogum3 },
  { id: "g37", category: "guias", name: "Guia de Ogum 4", price: 35.0, image: ogum4 },
  { id: "g38", category: "guias", name: "Guia de Oxalá 1", price: 35.0, image: oxala1 },
  { id: "g39", category: "guias", name: "Guia de Oxalá 2", price: 35.0, image: oxala2 },
  { id: "g40", category: "guias", name: "Guia de Oxalá 3", price: 35.0, image: oxala3 },
  { id: "g41", category: "guias", name: "Guia de Oxalá 4", price: 35.0, image: oxala4 },
  { id: "g42", category: "guias", name: "Guia de Oxalá 5", price: 35.0, image: oxala5 },
  { id: "g43", category: "guias", name: "Guia de Oxossi/Caboclo", price: 35.0, image: oxossicaboclo },
  { id: "g44", category: "guias", name: "Guia de Oxossi/Caboclo 2", price: 35.0, image: oxossicaboclo2 },
  { id: "g45", category: "guias", name: "Guia de Oxossi/Caboclo 3", price: 35.0, image: oxossicaboclo3 },
  { id: "g46", category: "guias", name: "Guia de Oxossi 2", price: 35.0, image: oxossi2 },
  { id: "g47", category: "guias", name: "Guia de Oxum 2", price: 35.0, image: oxum2 },
  { id: "g48", category: "guias", name: "Guia de Oxum 3", price: 35.0, image: oxum3},
  { id: "g49", category: "guias", name: "Guia de Iansã 2", price: 35.0, image: oya2 },
  { id: "g50", category: "guias", name: "Guia de Iansã 3", price: 35.0, image: oya3 },
  { id: "g51", category: "guias", name: "Guia de Iansã 4", price: 35.0, image: oya4 },
  { id: "g52", category: "guias", name: "Guia de Pombogira 3", price: 35.0, image: pombogira3 },
  { id: "g53", category: "guias", name: "Guia de Pombogira 4", price: 35.0, image: pombogira4 },
  { id: "g54", category: "guias", name: "Guia de Pombogira 5", price: 35.0, image: pombogira5 },
  { id: "g55", category: "guias", name: "Guia de Pombogira 6", price: 35.0, image: pombogira6 },
  { id: "g56", category: "guias", name: "Guia de Pombogira 7", price: 35.0, image: pombogira7 },
  { id: "g57", category: "guias", name: "Guia de Pombogira 8", price: 35.0, image: pombogira8 },
  { id: "g58", category: "guias", name: "Guia de Pombogira 9", price: 35.0, image: pombogira9 },
  { id: "g59", category: "guias", name: "Guia de Pombogira 10", price: 35.0, image: pombogira10 },
  { id: "g60", category: "guias", name: "Guia de Pombogira Cigana", price: 35.0, image: pombogiracigana },
  { id: "g61", category: "guias", name: "Guia de Pombogira Cigana 2", price: 35.0, image: pombogiracigana2 },
  { id: "g62", category: "guias", name: "Guia de Pombogira Xangô 3", price: 35.0, image: xango3 },
  { id: "g63", category: "guias", name: "Guia de Pombogira Xangô 4", price: 35.0, image: xango4 },
  { id: "g64", category: "guias", name: "Guia de Pombogira Xangô 5", price: 35.0, image: xango5 },

  { id: "b1", category: "brajas", name: "Brajá Pombogira", price: 250.0, image: brajaPombogira },
  { id: "b2", category: "brajas", name: "Brajá Malandro", price: 280.0, image: brajaMalandro },
  { id: "b3", category: "brajas", name: "Brajá Iemanjá", price: 230.0, image: brajaIemanja },
  { id: "b4", category: "brajas", name: "Brajá Exu", price: 370.0, image: brajaExu },
  { id: "b5", category: "brajas", name: "Brajá Dama da Noite", price: 280.0, image: brajaDamaNoite },
  { id: "b6", category: "brajas", name: "Brajá Caveira", price: 350.0, image: brajaCaveira },
  { id: "b7", category: "brajas", name: "Brajá Caveira 2", price: 270.0, image: brajaCaveira2 },

  { id: "br1", category: "brincos", name: "Brinco Esquerda", price: 25.0, image: brincoEsquerda },
  { id: "br2", category: "brincos", name: "Brinco Exu Caveira", price: 25.0, image: brincoExuCaveira },
  { id: "br3", category: "brincos", name: "Brinco Iemanjá", price: 25.0, image: brincoIemanja },
  { id: "br4", category: "brincos", name: "Brinco Pombogira", price: 30.0, image: brincoPombogira },
  { id: "br5", category: "brincos", name: "Brinco Povo Cigano", price: 35.0, image: brincoPovoCigano },

  { id: "pu1", category: "pulseiras", name: "Pulseira Ogum", price: 39.9, image: pulseiraOgum },
  { id: "pu2", category: "pulseiras", name: "Pulseira Oxalá", price: 42.9, image: pulseiraOxala },
  { id: "pu3", category: "pulseiras", name: "Pulseira Exu", price: 38.9, image: pulseiraExu },
  { id: "pu4", category: "pulseiras", name: "Pulseira Cobra Coral", price: 44.9, image: pulseiraCobraCoral },

  { id: "pe1", category: "personalizados", name: "Chapéu de Exu", price: 100.0, image: personalizadoChapeuExu },
  { id: "pe2", category: "personalizados", name: "Copo de Exu", price: 45.9, image: personalizadoCopoExu },
  { id: "pe3", category: "personalizados", name: "Taça de Pombogira", price: 77.0, image: personalizadoTacaPombogira },
];

const ALL_PRODUCTS = [...PRODUCTS, ...MORE_PRODUCTS];

function formatBRL(value) {
  return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", });}

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
      filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase()) );
    }
    return filtered;
  }, [search, activeCategory]);

  const filteredMore = useMemo(() => {
    let filtered = MORE_PRODUCTS;
    if (activeCategory !== "todos") {
      filtered = filtered.filter(p => p.category === activeCategory);
    }
    if (search) {
      filtered = filtered.filter(p => p.name.toLowerCase().includes(search.toLowerCase())
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
    setCartIds(prev => {const next = new Set(prev); next.delete(id); return next; }); }

  return (
    <div className="relative min-h-screen text-green-900">
      <div className="fixed inset-0 bg-green-50 z-[-1]" />
      <AnimatedBackground />

      <Header search={search} setSearch={setSearch} cartCount={cartIds.size} onOpenCart={() => setCartOpen(true)}/>

      <AnimatePresence>
        {selectedImage && (
          <>
            <motion.div className="fixed inset-0 bg-black/70 z-50" onClick={() => setSelectedImage(null)}/>
            <motion.img src={selectedImage} className="fixed z-50 top-1/2 left-1/2 max-w-[90%] max-h-[80%] -translate-x-1/2 -translate-y-1/2 rounded-2xl"/>
          </>
        )}
      </AnimatePresence>

      <main className="px-6 max-w-md mx-auto space-y-8 pb-16">

        <div className="flex gap-2 overflow-x-auto">
          {CATEGORIES.map(cat => ( <button key={cat.key} onClick={() => setActiveCategory(cat.key)} className={`px-4 py-2 rounded-full text-sm ${ activeCategory === cat.key ? "bg-emerald-600 text-white" : "bg-white text-green-800" }`} > {cat.label} </button>))}
        </div>

        {activeCategory === "todos" && (
          <div>
            <h2 className="font-semibold mb-3">Destaques 🔥</h2>
            <div className="flex gap-4 overflow-x-auto">
              {filteredProducts.map(p => (
                <div key={p.id} className="min-w-[200px] bg-white p-4 rounded-2xl">
                  <img src={p.image} onClick={() => setSelectedImage(p.image)} className="h-32 w-full rounded-xl cursor-pointer" />
                  <p>{p.name}</p>
                  <p>{formatBRL(p.price)}</p>
                  <button onClick={() => addToCart(p.id)} className="w-full bg-emerald-600 text-white py-2 rounded-xl"> Adicionar </button>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          {filteredMore.map(item => (
            <div key={item.id} className="bg-white p-3 rounded-2xl">
              <img src={item.image} onClick={() => setSelectedImage(item.image)} className="h-40 w-full rounded-xl cursor-pointer"/>
              <p>{item.name}</p>
              <p>{formatBRL(item.price)}</p>
              <button onClick={() => addToCart(item.id)} className="w-full bg-emerald-600 text-white py-2 rounded-xl"> Adicionar </button>
            </div>
          ))}
        </div>

      </main>

      <a
         href="https://wa.me/5511986440315?text=Ol%C3%A1%2C%20vim%20pelo%20site!%20Gostaria%20de%20fazer%20um%20pedido." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 shadow-lg hover:scale-110 transition">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" className="w-7 h-7">
       <path d="M16.002 2.667c-7.364 0-13.335 5.971-13.335 13.335 0 2.353.617 4.648 1.79 6.677L2.667 29.333l6.826-1.762a13.29 13.29 0 006.509 1.666h.006c7.364 0 13.335-5.971 13.335-13.335 0-3.566-1.389-6.92-3.911-9.441C22.922 4.056 19.568 2.667 16.002 2.667z"/>
      </svg>
    </a>

    </div>
  );
}
