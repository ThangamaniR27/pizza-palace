import PizzaCard from "../components/PizzaCard";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    return (

        <div>

            {/* Hero Section */}

            <div
                className="h-[500px] bg-cover bg-center flex flex-col justify-center items-center text-white"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200')"
                }}
            >

                <div className="bg-black bg-opacity-60 p-8 rounded-xl text-center">

                    <h1 className="text-6xl font-bold">
                        Pizza Palace
                    </h1>

                    <p className="mt-4 text-2xl">
                        Hot, Fresh & Delicious Pizza
                    </p>

                    {/* 🟢 FIXED BUTTON */}
                    <button
                        onClick={() => navigate("/menu")}
                        className="mt-6 bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg text-lg font-bold"
                    >
                        Order Now
                    </button>

                </div>

            </div>

            {/* Featured Pizzas */}

            <h2 className="text-5xl font-bold text-center mt-12 text-red-500">
                Featured Pizzas
            </h2>

            <div className="flex flex-wrap justify-center gap-8 mt-12">

                <PizzaCard
                    image="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
                    name="Veg Pizza"
                    price="299"
                />

                <PizzaCard
                    image="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500"
                    name="Cheese Pizza"
                    price="399"
                />

                <PizzaCard
                    image="https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500"
                    name="Chicken Pizza"
                    price="499"
                />

            </div>

            {/* Why Choose Us */}

            <div className="flex flex-wrap justify-center gap-8 mt-16 mb-16">

                <div className="bg-white shadow-lg p-6 rounded-xl w-72 text-center">
                    <h2 className="text-4xl">🍕</h2>
                    <h3 className="text-2xl font-bold mt-3">
                        Fresh Pizza
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Made with fresh ingredients every day.
                    </p>
                </div>

                <div className="bg-white shadow-lg p-6 rounded-xl w-72 text-center">
                    <h2 className="text-4xl">🚚</h2>
                    <h3 className="text-2xl font-bold mt-3">
                        Fast Delivery
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Delivered hot and fresh to your doorstep.
                    </p>
                </div>

                <div className="bg-white shadow-lg p-6 rounded-xl w-72 text-center">
                    <h2 className="text-4xl">⭐</h2>
                    <h3 className="text-2xl font-bold mt-3">
                        Best Taste
                    </h3>
                    <p className="mt-2 text-gray-600">
                        Loved by thousands of happy customers.
                    </p>
                </div>

            </div>

        </div>

    );

}

export default Home;