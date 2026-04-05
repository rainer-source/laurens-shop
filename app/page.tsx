export default function Home() {
  const products = [
    { id: 1, name: "Kate", price: "Rp 150.000", category: "Mini Dress" },
    { id: 2, name: "Meghan", price: "Rp 320.000", category: "Midi Dress" },
    { id: 3, name: "Anya", price: "Rp 450.000", category: "Maxi Dress" },
    { id: 4, name: "Alexandra", price: "Rp 280.000", category: "Party Dress" },
    { id: 5, name: "Emily", price: "Rp 380.000", category: "Casual Dress" },
    { id: 6, name: "Tokyo", price: "Rp 420.000", category: "Midi Dress" },
    { id: 7, name: "Kyoto", price: "Rp 550.000", category: "Maxi Dress" },
  ];

  const colors = [
    { name: "Maroon", hex: "#800000" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#000000" },
  ];

  return (
    <main className="min-h-screen font-sans" style={{ backgroundColor: "#FFF5F7" }}>

      {/* Navbar */}
      <nav style={{ backgroundColor: "#FFE4EC", borderBottom: "1px solid #FFBDD0" }} className="sticky top-0 z-50 px-8 py-4 flex items-center justify-between">
        <h1 style={{ color: "#9B4F6A" }} className="text-xl font-bold tracking-widest uppercase">Laurens Clothes</h1>
        <div className="flex items-center gap-8 text-sm font-medium" style={{ color: "#9B4F6A" }}>
          <a href="#" className="hover:opacity-70 transition">Home</a>
          <a href="#" className="hover:opacity-70 transition">Products</a>
          <a href="#" className="hover:opacity-70 transition">About</a>
          <a href="#" className="relative hover:opacity-70 transition">
            🛒 Cart
            <span style={{ backgroundColor: "#9B4F6A" }} className="absolute -top-2 -right-3 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: "#FFD6E7" }} className="px-8 py-40 flex flex-col items-center justify-center text-center">
        <p style={{ color: "#C4768E" }} className="text-sm uppercase tracking-widest mb-4">New Collection 2026</p>
        <h2 style={{ color: "#7A3050" }} className="text-6xl font-bold mb-6 leading-tight">Dress to<br/>Impress.</h2>
        <p style={{ color: "#B07A90" }} className="text-lg mb-10 max-w-md">Premium everyday clothing. Minimal design, maximum comfort.</p>
        <div className="flex gap-4 justify-center">
          <a href="#products" style={{ backgroundColor: "#9B4F6A", color: "white" }} className="px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
            Shop Now
          </a>
          <a href="#" style={{ border: "2px solid #9B4F6A", color: "#9B4F6A" }} className="px-8 py-3 rounded-full font-medium hover:opacity-70 transition">
            Our Story
          </a>
        </div>
      </section>

      {/* Categories */}
      <section style={{ backgroundColor: "#FFF0F5" }} className="px-8 py-10">
        <div className="flex gap-4 justify-center flex-wrap">
          {["All", "Mini Dress", "Midi Dress", "Maxi Dress", "Party Dress", "Casual Dress"].map((cat) => (
            <button
              key={cat}
              style={{ border: "1px solid #FFBDD0", color: "#9B4F6A", backgroundColor: "white" }}
              className="px-6 py-2 rounded-full text-sm font-medium hover:opacity-80 transition"
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" className="px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <h3 style={{ color: "#7A3050" }} className="text-2xl font-bold">Featured Products</h3>
          <a href="#" style={{ color: "#9B4F6A" }} className="text-sm underline hover:opacity-70">View all →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer bg-white rounded-2xl p-4" style={{ border: "1px solid #FFBDD0" }}>
              <div style={{ backgroundColor: "#FFE4EC" }} className="rounded-xl h-56 mb-4 overflow-hidden relative">
                <span style={{ backgroundColor: "white", color: "#9B4F6A" }} className="absolute top-3 left-3 text-xs font-medium px-2 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <h4 style={{ color: "#7A3050" }} className="font-semibold">{product.name}</h4>
              <p style={{ color: "#B07A90" }} className="text-sm mt-1">{product.price}</p>

              {/* Color Options */}
              <div className="flex gap-2 mt-3 items-center">
                <span style={{ color: "#B07A90" }} className="text-xs">Color:</span>
                {colors.map((color) => (
                  <button
                    key={color.name}
                    title={color.name}
                    style={{
                      backgroundColor: color.hex,
                      border: "1.5px solid #FFBDD0",
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%"
                    }}
                    className="hover:scale-110 transition"
                  />
                ))}
              </div>

              <button
                style={{ backgroundColor: "#9B4F6A", color: "white" }}
                className="mt-4 w-full py-2.5 rounded-xl text-sm font-medium hover:opacity-90 active:scale-95 transition"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Banner */}
      <section style={{ backgroundColor: "#FFD6E7" }} className="mx-8 mb-16 rounded-2xl px-12 py-16 flex flex-col items-center text-center">
        <p style={{ color: "#C4768E" }} className="text-sm uppercase tracking-widest mb-3">Limited Time</p>
        <h3 style={{ color: "#7A3050" }} className="text-4xl font-bold mb-4">Get 20% Off<br/>Your First Order</h3>
        <p style={{ color: "#B07A90" }} className="mb-8">Use code <span style={{ color: "#7A3050" }} className="font-bold">LAURENS20</span> at checkout</p>
        <a href="#" style={{ backgroundColor: "#9B4F6A", color: "white" }} className="px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
          Claim Discount
        </a>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #FFBDD0", backgroundColor: "#FFE4EC", color: "#9B4F6A" }} className="px-8 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h5 style={{ color: "#7A3050" }} className="font-bold mb-4 uppercase tracking-widest">Laurens Clothes</h5>
          <p style={{ color: "#B07A90" }} className="leading-relaxed">Premium everyday dresses for everyone.</p>
        </div>
        <div>
          <h5 style={{ color: "#7A3050" }} className="font-semibold mb-4">Shop</h5>
          <ul className="space-y-2" style={{ color: "#B07A90" }}>
            <li><a href="#" className="hover:opacity-70">New Arrivals</a></li>
            <li><a href="#" className="hover:opacity-70">Best Sellers</a></li>
            <li><a href="#" className="hover:opacity-70">Sale</a></li>
          </ul>
        </div>
        <div>
          <h5 style={{ color: "#7A3050" }} className="font-semibold mb-4">Help</h5>
          <ul className="space-y-2" style={{ color: "#B07A90" }}>
            <li><a href="#" className="hover:opacity-70">FAQ</a></li>
            <li><a href="#" className="hover:opacity-70">Shipping</a></li>
            <li><a href="#" className="hover:opacity-70">Returns</a></li>
          </ul>
        </div>
        <div>
          <h5 style={{ color: "#7A3050" }} className="font-semibold mb-4">Follow Us</h5>
          <ul className="space-y-2" style={{ color: "#B07A90" }}>
            <li><a href="#" className="hover:opacity-70">Instagram</a></li>
            <li><a href="#" className="hover:opacity-70">TikTok</a></li>
            <li><a href="#" className="hover:opacity-70">WhatsApp</a></li>
          </ul>
        </div>
      </footer>
      <div style={{ backgroundColor: "#FFE4EC", color: "#B07A90", borderTop: "1px solid #FFBDD0" }} className="text-center py-4 text-xs">
        © 2026 Laurens Clothes. All rights reserved.
      </div>

    </main>
  );
}