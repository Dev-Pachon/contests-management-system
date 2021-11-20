import {useRouter} from 'next/router'
import Link from 'next/Link'
import {useEffect} from "react";
import {getSession} from "next-auth/client";

export default function home({users, status}) {

	const router = useRouter()

	//console.log(router)

	if(status === 401){
		useEffect(()=>{
			router.push("/")
		})

		return <p>Redirect</p>
	}

	return (
		<div className="container">
			<div className="py-1 text-center">
				<Link as="/" href="../">
					<a className="btn btn-primary" role="button">Logout</a>
				</Link>
			</div>

			<table className="table table-hover table-striped text-center">
				<thead>
				<tr>
					<th>
						Email
					</th>
					<th>
						Nickname
					</th>
					<th>
						First name
					</th>
					<th>
						Last Name
					</th>
					<th>
						Country
					</th>
				</tr>
				</thead>
				<tbody>
				{users.map(e => (
					<tr>
						<td>
							{e.email}
						</td>
						<td>
							{e.nickname}
						</td>
						<td>
							{e.firstName}
						</td>
						<td>
							{e.lastName}
						</td>
						<td>
							{e.country}
						</td>
					</tr>
				))}

				</tbody>

			</table>

		</div>
	)
}

export async function getServerSideProps(context) {


	const dataContext = context.req["headers"]

	console.log(dataContext)


	const user = dataContext["user"]
	const token = dataContext['token']

	//console.log(user + token)

	const res = await fetch('http://localhost:8080/auth/home',
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"user": user,
				"token": token,
				"refresh-token": dataContext.refreshToken,
			},
		})
	if (res.ok) {
		const response = await fetch('http://localhost:8080/users')
		const users = await response.json()
		return {props:{users: users, status: 200}}
	} else {
		return {props: {users: null, status: 401}}
	}
}