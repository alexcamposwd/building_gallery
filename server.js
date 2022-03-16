const jsonServer = ('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const PORT = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
	console.log(`Server is running ${PORT}`)
});