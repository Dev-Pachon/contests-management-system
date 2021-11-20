import {useRouter} from "next/router";
import {useEffect} from "react";

export default function (){

}

export async function getServerSideProps(context) {
	const res = await fetch('http://localhost:3000/api/authenticate',
		{
			method: "POST",
			body: JSON.stringify({data}),
			headers: {
				"Content-Type": "application/json"
			},
		})
	if (res.ok) {
		const router = useRouter()
		useEffect(() => {
			router.push("/register")
		})

		return <p>Redirect</p>
	} else {
		alert("Your email or password is incorrect")
	}
}
