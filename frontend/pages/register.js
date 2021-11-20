import Register from '../components/Register'
import {getSession, signIn, signOut} from "next-auth/client";
import NavbarUnlogged from "../components/BasicNavbar";
import Footer from "../components/BasicFooter";
import {useRouter} from "next/router";

export default function register() {
	return (
		<>
			<NavbarUnlogged/>
			<main style={{paddingTop: "4.5rem"}}>
				<Register/>
			</main>
		</>
	)
}