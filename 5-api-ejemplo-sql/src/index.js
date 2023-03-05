import app from "./app"

/**
 * It starts the server on the port specified in the app.set("port") function.
 */
const main = ()=>{
    app.listen(app.get("port"));
    console.log("Server on port:", app.get("port"))
};

main();