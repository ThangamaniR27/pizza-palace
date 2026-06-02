function Contact() {

    return (

        <div className="text-center mt-10 min-h-screen py-10 bg-orange-200">

            <h1 className="text-5xl font-bold text-red-600">

                Contact Us

            </h1>

            <p className="mt-5 text-xl  text-gray-800">

                🍕 Pizza Palace

            </p>

            <p className="mt-3  text-gray-800">

                Chennai, Tamil Nadu

            </p>

            <p className="mt-3 text-gray-800">

                📞 9876543210

            </p>

            <p className="mt-3 text-gray-800">

                ✉️ pizzapalace@gmail.com

            </p>

            <form className="mt-10 flex flex-col gap-5 items-center bg-white p-6 rounded-lg shadow-md w-fit mx-auto">

                <input
                    type="text"
                    placeholder="Enter your name"
                    className="border  border-gray-300 p-3 w-80 rounded-lg"
                />

                <input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-gray-300 p-3 w-80 rounded-lg"
                />

                <textarea
                    placeholder="Enter your message"
                    className="border  border-gray-300 p-3 w-80 rounded-lg h-32"
                >

                </textarea>

                <button className="bg-red-500 nover:bg-red-600 text-white px-6 py-3 rounded-lg">

                    Send Message

                </button>

            </form>

        </div>

    )

}

export default Contact;