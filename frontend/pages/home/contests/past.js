import Past from '../../../components/Home/Contests/Past';
import LoggedLayout from "../../../components/LoggedLayout";
import {useSession} from "next-auth/client";
import {useRouter} from "next/router";

export default function login(){
	const [session, loading] = useSession()
	const router = useRouter()

	const func = async (e)=>{
		if(session){
			await router.push("/home/feed")
		}else{
			await router.push("/login")
		}
	}

	if(typeof window !== "undefined" && loading) return null

	return (
		<main onLoad={func}>
			<LoggedLayout children={Past}/>
		</main>
	)
}