export default async function callback(req, res) {
	try {
		await auth0.handleCallback(req, res, {});
	} catch (error) {
		console.error(error);
		res.status(error.status || 500).end(error.mesages);
	}
}
