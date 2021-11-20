import Footer from './BasicFooter'
import NavbarLogged from "./LoggedNavbar";

export default function Layout({children}) {

	return (
		<>
			<main><NavbarLogged/>{children}</main>
			<Footer/>
		</>
	)
}