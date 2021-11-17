import Link from "next/Link";

export default function Login() {

	return (
		<div>
			<div className="card shadow w-50 m-auto p-3">

				<h1 className="py-1 text-center">Sign in</h1>

				<form className="w-50 mx-auto p-2" method="POST" action="http://localhost:8080/authenticate">

					<div className="form-group">

						<label htmlFor="email">Email:</label><br/>

						<input type="email" id="email" name="email"
							   className="form-control" placeholder="Email" required/><br/>

						<label htmlFor="password">Password:</label><br/>

						<input type="password" id="password" className="form-control"
							   name="password" placeholder="Password" required/><br/>

						<input type="submit" className="btn btn-primary m-auto " value="Login"/>
					</div>

				</form>


			</div>
			<br/>

			<h1 className="py-1 text-center">Sign up</h1>

			<br/>

			<Link as="/register" href="/register">

				<center><a className="btn btn-primary">Create new account</a></center>

			</Link>

			<Link href="/home/1">
				<a className="btn btn-primary" role="button">asd</a>
			</Link>

			<br/><br/>

		</div>
	)
}