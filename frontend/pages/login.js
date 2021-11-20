import Login from '../components/Login';
import BasicLayout from "../components/BasicLayout";
import {useSession} from "next-auth/client";
import {useRouter} from "next/router";
import NavbarUnlogged from "../components/BasicNavbar";
import {useEffect} from "react";


export default function login() {

	const [session, loading] = useSession()
	const router = useRouter()
	useEffect(()=>{
		const func = async (e)=>{
			if(session){
				await router.push("/home/feed")
			}else{
				await router.push("/login")
			}
		}
		func()

	},[session])

	if (typeof window !== "undefined" && loading) return null

	return (<>
			<NavbarUnlogged/>
			<main style={{paddingTop: "4.5rem"}}>
				<Login/>
			</main>
		</>
	)
}