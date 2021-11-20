import Login from "../components/Login";
import BasicLayout from "../components/BasicLayout"
import {signIn, signOut, useSession} from "next-auth/client";
import {useRouter} from "next/router";

export default function Home() {
	const [session, loading] = useSession()
	const router = useRouter()
	return (
		<main style={{paddingTop: "4.5rem"}}>
			<BasicLayout children={Login(signIn)} session={session} signIn={()=>router.push("/")}signOut={signOut}/>
		</main>
	)
}