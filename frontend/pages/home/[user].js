import {useRouter} from 'next/router'
import Link from 'next/Link'

export default function home({users}) {
	const router = useRouter()
	let nickname = router.query.user

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

	const response = await fetch('http://localhost:8080/users')
	const users = await response.json()
	return {
		props: {users: users},
	}
}