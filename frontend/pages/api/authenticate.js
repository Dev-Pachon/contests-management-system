import {useRouter} from "next/router";

export default async function handler(req, res) {

	const r = await fetch('http://localhost:8080/login', {
		method: "POST",
		body: JSON.stringify(req.body.data),
		headers: {
			"Content-Type": "application/json"
		}
	})

	//console.log(r)

	if(r.ok){
		const data = await r.json()
		//console.log(data)
		res.status(200).send(data)
	}

	res.status(401).send()
}
