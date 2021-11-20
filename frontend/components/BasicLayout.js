import Footer from './BasicFooter'
import NavbarUnlogged from "./BasicNavbar";

export default function Layout({children, signIn}) {
	return (
		<>
			<div >
				{children}
			</div>
		</>
	)
}