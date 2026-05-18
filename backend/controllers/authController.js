const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret_key';

// Helper function to issue JWT
const signToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, { expiresIn: '7d' });
};

exports.signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({ message: "A student with this email already exists!" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            name: name,
            email: email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        const token = signToken(savedUser._id);

        res.status(201).json({ 
            message: "Account created successfully!",
            token,
            user: { id: savedUser._id, name: savedUser.name, email: savedUser.email, avatar: savedUser.avatar }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error during sign up" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        if (!user.password) {
            return res.status(400).json({ message: "This email is registered through Google. Please use Google Login." });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = signToken(user._id);

        res.json({
            message: "Logged in successfully!",
            token,
            user: { id: user._id, name: user.name, email: user.email, avatar: user.avatar }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error during login" });
    }
};

exports.googleLogin = async (req, res) => {
    try {
        const { credential } = req.body;
        
        // Verify Google token
        const ticket = await client.verifyIdToken({
            idToken: credential,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        
        const payload = ticket.getPayload();
        const { sub, email, name, picture } = payload;
        
        // Check if user exists
        let user = await User.findOne({ email });
        
        if (user) {
            // User exists, but might not have googleId (they signed up with email originally)
            if (!user.googleId) {
                user.googleId = sub;
                // Update avatar if not exists
                if (!user.avatar) user.avatar = picture;
                await user.save();
            }
        } else {
            // Create brand new user
            user = new User({
                email,
                name,
                googleId: sub,
                avatar: picture,
                // Note: password is not provided because they auth via Google!
            });
            await user.save();
        }
        
        const token = signToken(user._id);
        
        res.json({
            message: "Google login successful",
            token,
            user: { id: user._id, name: user.name, email: user.email, avatar: user.avatar }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Google authentication failed" });
    }
};
