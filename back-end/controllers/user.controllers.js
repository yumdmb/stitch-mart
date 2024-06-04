export const test = (req, res) => {
    res.json({ message: 'API is working!' });
};

// Now, we can import the test function in the user.controllers.js file and use it as a controller 
// for the /api/users route.