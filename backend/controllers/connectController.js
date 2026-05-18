const ConnectionRequest = require('../models/ConnectionRequest');

exports.submitConnectionRequest = async (req, res) => {
    try {
        const { name, email, program, year, interests, goal, message } = req.body;
        
        const newRequest = new ConnectionRequest({
            name,
            email,
            program,
            year,
            interests,
            goal,
            message
        });

        await newRequest.save();

        res.status(201).json({ message: 'Connection request submitted successfully', data: newRequest });
    } catch (error) {
        console.error('Error submitting connection request:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
