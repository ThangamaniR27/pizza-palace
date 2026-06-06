import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <nav className="bg-black text-white p-4">

            <div className="flex justify-between items-center">

                {/* Logo */}

                <h1 className="text-3xl font-bold text-red-500">
                    Pizza Palace
                </h1>

                {/* Desktop Menu */}

                <ul className="hidden md:flex gap-6 text-lg">

                    <li>
                        <Link to="/" className="hover:text-red-500">
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link to="/menu" className="hover:text-red-500">
                            Menu
                        </Link>
                    </li>

                    <li>
                        <Link to="/cart" className="hover:text-red-500">
                            Cart
                        </Link>
                    </li>

                    <li>
                        <Link to="/contact" className="hover:text-red-500">
                            Contact
                        </Link>
                    </li>

                    <li>
                        <Link to="/about" className="hover:text-red-500">
                            About
                        </Link>
                    </li>

                </ul>

                {/* Hamburger Button */}

                <button
                    className="md:hidden text-3xl"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    ☰
                </button>

            </div>

            {/* Mobile Menu */}

            {
                menuOpen && (

                    <ul className="md:hidden flex flex-col gap-4 mt-4 bg-gray-900 p-4 rounded-lg">

                        <li>
                            <Link to="/" onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link to="/menu" onClick={() => setMenuOpen(false)}>
                                Menu
                            </Link>
                        </li>

                        <li>
                            <Link to="/cart" onClick={() => setMenuOpen(false)}>
                                Cart
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact" onClick={() => setMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>

                        <li>
                            <Link to="/about" onClick={() => setMenuOpen(false)}>
                                About
                            </Link>
                        </li>

                    </ul>

                )
            }

        </nav>

    );

}

export default Navbar;