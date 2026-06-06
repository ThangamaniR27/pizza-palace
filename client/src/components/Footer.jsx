function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold text-yellow-400">
          Pizza Palace
        </h2>

        <p className="mt-3 text-gray-300">
          🍕 Fresh Pizza • 🚚 Fast Delivery • 😋 Best Taste
        </p>

        <p className="mt-2 text-gray-400">
          Enjoy hot, cheesy, and delicious pizzas made with fresh ingredients and delivered right to your doorstep.
        </p>

        <div className="mt-6">
          <p>📍 Chennai, Tamil Nadu</p>
          <p>📞 +91 98765 43210</p>
          <p>✉️ pizzapalace@gmail.com</p>
        </div>

        

        <hr className="my-6 border-gray-700" />

        <p className="text-gray-400 text-sm">
          © 2026 Pizza Palace. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;