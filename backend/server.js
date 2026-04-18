import coonectToDB from "./config/database.js";
import seed from "./initialization/intialize.js";
import app from "./src/app.js";

coonectToDB()
// seed() //Run when you want to initialise backend
app.listen(3000, () => {
    console.log("Server is running on port 3000");
})