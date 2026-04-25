const mongoose = require('mongoose');

// The Schema defines the structure, data types, and rules for the collection.
const userSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true, // Ensures no two documents have the same value for this field
        lowercase: true 
    },
    password: { 
        type: String, 
        required: false // Optional, because Google login doesn't need a password
    },
    googleId: {
        type: String,
        required: false,
        unique: true,
        sparse: true // Allows multiple users without googleId, but keeps those with it unique
    },
    avatar: {
        type: String, // Store profile picture URL
        default: ""
    },
    program: { 
        type: String, // e.g., "B.Tech", "BBA"
    },
    year: { 
        type: Number 
    },
    about: { 
        type: String, 
        default: "Hey there! I'm ready to collaborate on ConnectCU." // Assigns a default value if none is provided
    },
    skills: [{ 
        type: String // An array of strings, e.g., ["Python", "Java", "Node.js"]
    }],
    interests: [{ 
        type: String // e.g., ["Backend Development", "DBMS"]
    }],
    // This is how we build the "Network". It stores an array of unique IDs referencing other users to create relationships.
    connections: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    }]
}, { 
    timestamps: true // Automatically adds mongoose-managed createdAt and updatedAt fields
});

// A Model is a compiled version of the schema that gives us methods to interact with the database collection.
module.exports = mongoose.model('User', userSchema);