import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const opts = {
	providers: [
		// Providers.Email({
		// 	server: {
		// 		host: "",
		// 		port: "",
		// 		auth:{
		// 			user:"",
		// 			password:""
		// 		}
		// 	},
		// 	form:"",
		// }),
		// Providers.Google({
		// 	clientId:process.env.GOOGLE_ID,
		// 	clientSecret:process.env.GOOGLE_SECRET
		// }),
		Providers.GitHub({
			clientId:process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET
		})
	]
}

export default (req,res)=> NextAuth(req,res,opts)