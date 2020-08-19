const express = require('express');
const notFound = require('./routers/404');
const repos = require('./routers/repos'); // Fetch the languages route

const app = express();
app.use(express.json());

// Note: We can do everything in our simple program
// without the need of using express,
// but it's much simpler and faster to use it.

// Get the port number from the command line
// or assing 3002 if it's not provided.
const port = process.env.PORT || 3002;


app.use(repos);

// In case no route is specified
app.use(notFound);


// Running the app on http://localhost:{port}
app.listen(port, () => {
    console.log(`Gemography server is running on prot ${port}`)
})


