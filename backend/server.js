const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const User = require("./models/User");
const Cart = require("./models/Cart");

const app = express();

// =========================
// MIDDLEWARE
// =========================
app.use(cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true
}));

app.use(express.json());

// =========================
// TEST ROUTE
// =========================
app.get("/", (req, res) => {
    res.send("Pizza Backend Running 🍕");
});

// =========================
// CONNECT MONGODB
// =========================
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log("MongoDB Error:", err.message);
});

// =========================
// REGISTER
// =========================
app.post("/register", async (req, res) => {

    try {

        const { name, email, password } = req.body;

        // Check existing user
        const exists = await User.findOne({ email });

        if (exists) {
            return res.json({
                success: false,
                message: "Already registered. Please login."
            });
        }

        // Create new user
        const newUser = new User({
            name,
            email,
            password
        });

        await newUser.save();

        res.json({
            success: true,
            message: "Registration successful"
        });

    } catch (err) {

        console.log(err);

        res.json({
            success: false,
            message: "Server error"
        });
    }
});

// =========================
// LOGIN
// =========================
app.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        // Find user
        const user = await User.findOne({ email });

        // User not found
        if (!user) {
            return res.json({
                success: false,
                message: "Please register first"
            });
        }

        // Wrong password
        if (user.password !== password) {
            return res.json({
                success: false,
                message: "Incorrect password"
            });
        }

        // Success
        res.json({
            success: true,
            message: "Login successful",
            user
        });

    } catch (err) {

        console.log(err);

        res.json({
            success: false,
            message: "Server error"
        });
    }
});

// =========================
// CART - ADD
// =========================
app.post("/cart", async (req, res) => {

    try {

        const item = new Cart(req.body);

        await item.save();

        res.json({
            success: true,
            message: "Added to cart"
        });

    } catch (err) {

        console.log(err);

        res.json({
            success: false,
            message: "Error adding cart"
        });
    }
});

// =========================
// CART - GET
// =========================
app.get("/cart", async (req, res) => {

    try {

        const items = await Cart.find();

        res.json(items);

    } catch (err) {

        console.log(err);

        res.json([]);
    }
});

// =========================
// CART - DELETE
// =========================
app.delete("/cart/:id", async (req, res) => {

    try {

        await Cart.findByIdAndDelete(req.params.id);

        res.json({
            success: true,
            message: "Item removed"
        });

    } catch (err) {

        console.log(err);

        res.json({
            success: false,
            message: "Delete failed"
        });
    }
});

// =========================
// START SERVER
// =========================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});