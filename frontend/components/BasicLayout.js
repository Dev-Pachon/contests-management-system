import Footer from './BasicFooter'
import NavbarLogged from "./LoggedNavbar";
import {signIn, signOut} from "next-auth/client";
import NavbarUnlogged from "./BasicNavbar";

export default function Layout({children, session, signIn, signOut}) {
	return (
		<>
			<main>
				{session && (
					<>
						<NavbarLogged session={session} signOut={signOut}/>
					</>
				)}
				{!session && (
					<>
						<NavbarUnlogged signIn={signIn}/>
					</>
				)}
				{children}
			</main>
			<Footer/>

		</>
	)
}