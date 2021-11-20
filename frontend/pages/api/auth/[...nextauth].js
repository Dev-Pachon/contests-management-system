import NextAuth from "next-auth";
import Providers from "next-auth/providers";
const {PrismaClient} = require('@prisma/client')
import Adapters from "next-auth/adapters";

const prisma = new PrismaClient()

const opts = {
	providers: [
		Providers.Email({
			server: {
				host: process.env.SMTP_HOST,
				port: Number(process.env.SMTP_PORT),
				auth:{
					user:process.env.SMTP_USER,
					pass:process.env.SMTP_PASSWORD,
				}
			},
			from:process.env.EMAIL_FROM,
		}),
		// Providers.Google({
		// 	clientId:process.env.GOOGLE_ID,
		// 	clientSecret:process.env.GOOGLE_SECRET
		// }),
		Providers.GitHub({
			clientId:process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
		]
	,
	adaptor: Adapters.Prisma.Adapter({prisma}),
	secret: process.env.SECRET
}

export default (req,res)=> NextAuth(req,res,opts)