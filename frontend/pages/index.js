import {useSession} from "next-auth/client";
import {useRouter} from "next/router";

export default function Home() {
	const [session, loading] = useSession()
	const router = useRouter()

	const func = async (e)=>{
		if(session){
			await router.push("/home/feed")
		}else{
			await router.push("/login")
		}
	}

	return (
		<main onLoad={func()}/>
	)
}