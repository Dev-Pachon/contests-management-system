
export default async function handler(req, res) {

	const r = await fetch('http://localhost:8080/authenticate', {
		method: "POST",
		body: JSON.stringify(req.body.data),
		headers: {
			"Content-Type": "application/json"
		}
	})

	const data = await r.json()

	res.status(200).json(data)
}
