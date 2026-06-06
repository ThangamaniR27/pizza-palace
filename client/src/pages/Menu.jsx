import PizzaCard from "../components/PizzaCard";

function Menu({ addToCart }) {

    return (

        <div>

            <h1 className="text-5xl font-bold text-center mt-10">
                Our Menu 🍕
            </h1>

            <div className="flex flex-wrap justify-center gap-8 mt-12">

                <PizzaCard
                    image="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
                    name="Veg Pizza"
                    price={299}
                    onAdd={() =>
                        addToCart({
                            name: "Veg Pizza",
                            price: 299,
                            image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
                        })
                    }
                />

                <PizzaCard
                    image="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500"
                    name="Cheese Pizza"
                    price={399}
                    onAdd={() =>
                        addToCart({
                            name: "Cheese Pizza",
                            price: 399,
                            image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=500"
                        })
                    }
                />

                <PizzaCard
                    image="https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500"
                    name="Chicken Pizza"
                    price={499}
                    onAdd={() =>
                        addToCart({
                            name: "Chicken Pizza",
                            price: 499,
                            image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=500"
                        })
                    }
                />

                

                <PizzaCard
                    image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
                    name="Burger"
                    price={199}
                    onAdd={() =>
                        addToCart({
                            name: "Burger",
                            price: 199,
                            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500"
                        })
                    }
                />

                <PizzaCard
                    image="https://images.unsplash.com/photo-1550547660-d9450f859349?w=500"
                    name="Chicken Burger"
                    price={249}
                    onAdd={() =>
                        addToCart({
                            name: "Chicken Burger",
                            price: 249,
                            image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500"
                        })
                    }
                />

                <PizzaCard
                    image="https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500"
                    name="French Fries"
                    price={149}
                    onAdd={() =>
                        addToCart({
                            name: "French Fries",
                            price: 149,
                            image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500"
                        })
                    }
                />

                <PizzaCard
                    image="https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500"
                    name="Pasta"
                    price={229}
                    onAdd={() =>
                        addToCart({
                            name: "Pasta",
                            price: 229,
                            image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=500"
                        })
                    }
                />
                <PizzaCard
    image="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500"
    name="Margherita Pizza"
    price={279}
    onAdd={() =>
        addToCart({
            name: "Margherita Pizza",
            price: 279,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500"
        })
    }
/>

<PizzaCard
    image="https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=500"
    name="Farmhouse Pizza"
    price={399}
    onAdd={() =>
        addToCart({
            name: "Farmhouse Pizza",
            price: 399,
            image: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?w=500"
        })
    }
/>

<PizzaCard
    image="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500"
    name="Veg Supreme Pizza"
    price={449}
    onAdd={() =>
        addToCart({
            name: "Veg Supreme Pizza",
            price: 449,
            image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500"
        })
    }
/>

<PizzaCard
    image="https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500"
    name="Chicken Wings"
    price={299}
    onAdd={() =>
        addToCart({
            name: "Chicken Wings",
            price: 299,
            image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=500"
        })
    }
/>

<PizzaCard
    image="https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500"
    name="Mojito"
    price={99}
    onAdd={() =>
        addToCart({
            name: "Mojito",
            price: 99,
            image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500"
        })
    }
/>

<PizzaCard
    image="https://images.unsplash.com/photo-1464306076886-da185f6a9d05?w=500"
    name="Cold Coffee"
    price={129}
    onAdd={() =>
        addToCart({
            name: "Cold Coffee",
            price: 129,
            image: "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?w=500"
        })
    }
/>

<PizzaCard
    image="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500"
    name="Brownie"
    price={179}
    onAdd={() =>
        addToCart({
            name: "Brownie",
            price: 179,
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500"
        })
    }
/>

<PizzaCard
    image="https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=500"
    name="Chocolate Lava Cake"
    price={199}
    onAdd={() =>
        addToCart({
            name: "Chocolate Lava Cake",
            price: 199,
            image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=500"
        })
    }
/>

                <PizzaCard
                    image="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500"
                    name="Garlic Bread"
                    price={179}
                    onAdd={() =>
                        addToCart({
                            name: "Garlic Bread",
                            price: 179,
                            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500"
                        })
                    }
                />

                <PizzaCard
                    image="https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500"
                    name="Taco"
                    price={189}
                    onAdd={() =>
                        addToCart({
                            name: "Taco",
                            price: 189,
                            image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?w=500"
                        })
                    }
                />

                <PizzaCard
                    image="https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500"
                    name="Noodles"
                    price={219}
                    onAdd={() =>
                        addToCart({
                            name: "Noodles",
                            price: 219,
                            image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=500"
                        })
                    }
                />

                <PizzaCard
                    image="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"
                    name="Chocolate Cake"
                    price={299}
                    onAdd={() =>
                        addToCart({
                            name: "Chocolate Cake",
                            price: 299,
                            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"
                        })
                    }
                />

                <PizzaCard
                    image="https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500"
                    name="Sandwich"
                    price={159}
                    onAdd={() =>
                        addToCart({
                            name: "Sandwich",
                            price: 159,
                            image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=500"
                        })
                    }
                />

                <PizzaCard
                    image="https://images.unsplash.com/photo-1547592180-85f173990554?w=500"
                    name="Ice Cream"
                    price={149}
                    onAdd={() =>
                        addToCart({
                            name: "Ice Cream",
                            price: 149,
                            image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500"
                        })
                    }
                />

                <PizzaCard
                    image="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500"
                    name="Pepperoni Pizza"
                    price={549}
                    onAdd={() =>
                        addToCart({
                            name: "Pepperoni Pizza",
                            price: 549,
                            image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500"
                        })
                    }
                />

            </div>

        </div>

    );

}

export default Menu;