function About() {

    return (

        <div className="min-h-screen bg-gray-100 py-12 px-6">

            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">

                <h1 className="text-5xl font-bold text-center text-red-500 mb-8">
                    About Pizza Palace
                </h1>

                <p className="text-lg text-gray-700 leading-8 ">
                    Welcome to Pizza Palace! We are passionate about serving
                    fresh, delicious, and high-quality pizzas made with the
                    finest ingredients. Our goal is to bring great taste and
                    happiness to every customer.
                </p>

                <div className="mt-10">

                    <h2 className="text-3xl font-bold text-red-500 mb-4">
                        Our Mission
                    </h2>

                    <p className="text-gray-700 text-lg leading-8">
                        To provide tasty food, excellent service, and a memorable
                        dining experience for everyone. We believe that great food
                        brings people together.
                    </p>

                </div>

                <div className="mt-10">

                    <h2 className="text-3xl font-bold text-red-500 mb-4">
                        Why Choose Us?
                    </h2>

                    <ul className="text-gray-700 text-lg space-y-3">
                        <li>🍕 Freshly prepared pizzas</li>
                        <li>🥗 Quality ingredients</li>
                        <li>🚚 Fast delivery service</li>
                        <li>😊 Customer satisfaction</li>
                        <li>💰 Affordable prices</li>
                    </ul>

                </div>

            </div>

        </div>

    );

}

export default About;