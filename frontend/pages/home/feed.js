import Feed from '../../components/Home/Feed';
import LoggedNavbar from "../../components/LoggedNavbar";
import {useSession} from "next-auth/client";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Login from "../../components/Login";

export default function feed() {
	const [session, loading] = useSession()
	const router = useRouter()

	useEffect(() => {
		const func = async (e) => {
			if (!session) {
				await router.push("/login")
			}
		}
		func()

	}, [session])

	if (typeof window !== "undefined" && loading) return null

	return (<>
			<LoggedNavbar/>
			<main style={{paddingTop: "4.5rem"}}>
				<Feed/>
			</main>
		</>
	)
}