
export default function handler(req,res,{data}) {
	console.log(data)
	console.log(req)
	console.log(res)

	return <h1>Why?</h1>
}

export async function getServerSideProps(context) {

	const response = await fetch('http://localhost:8080/authenticate',{
		method: "POST",
		body: context.body,
		headers: {
			"Content-Type": "application/json"
		}
	})

	const data = await response.json()

	if (!data) {
		return {
			notFound: true,
		}
	}

	return {
		props: {data: data}
	}
}