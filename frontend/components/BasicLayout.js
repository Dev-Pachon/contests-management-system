import Navbar from './BasicNavbar'
import Footer from './BasicFooter'

export default function Layout({children}) {
	return (
		<>
			<Navbar/>
			<main style={{paddingTop: "4.5rem", paddingBottom:"5rem"}}>{children}</main>
			<Footer/>
		</>
	)
}