import "reflect-metadata";
import database from "./config/database";
import server from "./app";
const puerto = process.env.PORT;

database
	.initialize()
	.then(() => {
		console.log("DB connect");
	})
	.catch(console.error);

server.listen(puerto, () => {
	console.log("Running on port " + puerto);
});
