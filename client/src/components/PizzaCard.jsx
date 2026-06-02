function PizzaCard(props) {

    return (
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:scale-105 transition duration-300">

            {/* Image */}
            <img
                src={props.image}
                alt={props.name}
                className="w-full h-52 object-cover"
            />

            {/* Content */}
            <div className="p-4">

                <h2 className="text-2xl font-bold mb-2">
                    {props.name}
                </h2>

                <p className="text-gray-600 mb-3">
                    Delicious hot pizza with fresh toppings.
                </p>

                <div className="flex justify-between items-center">

                    <h3 className="text-xl font-semibold text-red-500">
                        ₹{props.price}
                    </h3>

                    {/* ADD TO CART BUTTON */}
                    <button
                        onClick={() => props.onAdd({
                            name: props.name,
                            price: props.price,
                            image: props.image
                        })}
                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                    >
                        Add to Cart
                    </button>

                </div>

            </div>

        </div>
    );

}

export default PizzaCard;