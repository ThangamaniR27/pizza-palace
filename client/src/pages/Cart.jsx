import { useEffect, useState } from "react";
import API from "../api";

function Cart() {

    const [cart, setCart] = useState([]);

    // 🟢 LOAD CART FROM BACKEND
    useEffect(() => {
        fetchCart();
    }, []);

    const fetchCart = async () => {
        try {
            const res = await API.get("/cart");
            setCart(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    // 🗑 REMOVE ITEM (by id/index fallback)
    const removeItem = async (id) => {
        try {
            await API.delete(`/cart/${id}`);
            fetchCart(); // refresh cart
        } catch (err) {
            console.log(err);
        }
    };

    // 🟢 ORDER FUNCTION
  const handleOrder = () => {
    alert("Order placed successfully 🎉");

};

    return (

        <div className="text-center mt-10 bg-gray-100 min-h-screen p-5">

            <h1 className="text-5xl font-bold text-red-500">
                Your Cart 🛒
            </h1>

            {/* EMPTY CART */}
            {
                cart.length === 0 ? (
                    <h2 className="text-2xl mt-10">
                        Cart is Empty 😢
                    </h2>
                ) : (

                    <>
                        <div className="flex flex-wrap justify-center gap-8 mt-10">

                            {
                                cart.map((food, index) => (

                                    <div
                                        key={food._id || index}
                                        className="bg-white shadow-lg w-80 p-5 rounded-xl"
                                    >

                                        <img
                                            src={food.image}
                                            alt="food"
                                            className="w-full h-52 object-cover rounded-lg"
                                        />

                                        <h2 className="text-2xl font-bold mt-4">
                                            {food.name}
                                        </h2>

                                        <p className="mt-2 text-lg text-gray-700">
                                            ₹{food.price}
                                        </p>

                                        {/* REMOVE BUTTON */}
                                        <button
                                            onClick={() => removeItem(food._id || index)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mt-3"
                                        >
                                            Remove
                                        </button>

                                    </div>

                                ))
                            }

                        </div>

                        {/* PLACE ORDER BUTTON */}
                        <button
                            onClick={handleOrder}
                            className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg mt-10 text-lg"
                        >
                            Place Order
                        </button>

                    </>
                )
            }

        </div>

    );
}

export default Cart;