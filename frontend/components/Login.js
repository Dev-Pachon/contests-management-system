import Link from "next/Link";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";


export default function Login(signIn) {
	const {register, handleSubmit} = useForm();
	const[content, setContent] = useState()
	const onSubmit = async data => {
		const res = await fetch('http://localhost:3000/api/authenticate',
			{
				method: "POST",
				body: JSON.stringify({data}),
				headers: {
					"Content-Type": "application/json"
				},
			})
		if (res.ok) {
			const data = await res.json()

			//console.log(data)
		useEffect(()=>{
			const fetch = async ()=>{
				const res = await fetch('http://localhost:3000/home/feed',
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
							"user": data.user,
							"token": data.token,
							"refresh-token": data.refreshToken,
						},
					})
				const data = res.json()
				if(data){
					setContent(data)
				}
			}
			fetch()
		},[session])

		} else {
			alert("Your email or password is incorrect")
		}
	};

	return (
		<div>
			<div className="card shadow w-50 m-auto p-3">

				<h1 className="py-1 text-center">Sign in</h1>

				<form className="w-50 mx-auto p-2"
					  onSubmit={handleSubmit(onSubmit)}>

					<div className="form-group">

						<label htmlFor="email">Email:</label><br/>

						<input type="email" id="email" className="form-control"
							   placeholder="Email" name="email" autoComplete="off"
							   {...register("email", {
								   required: "Email required",
							   })}/><br/>

						<label htmlFor="password">Password:</label><br/>

						<input type="password" id="password" className="form-control"
							   placeholder="Password" name="password"
							   {...register("password", {
								   required: "Password required.",
							   })}/><br/>

						<input type="submit" className="btn btn-primary m-auto" value="Login"/>
					</div>

				</form>

				<button className="btn btn-dark" onClick={signIn}>
					Sign in with GitHub
				</button>


			</div>
			<br/>

			<h1 className="py-1 text-center">Sign up</h1>

			<br/>

			<Link as="/register" href="/register">

				<center><a className="btn btn-primary">Create new account</a></center>

			</Link>

			<Link href="/home/2">
				<a className="btn btn-primary" role="button">asd</a>
			</Link>

			<br/><br/>

		</div>
	)
}