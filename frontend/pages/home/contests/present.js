import Present from '../../../components/Home/Contests/Present';
import LoggedLayout from "../../../components/LoggedLayout";

export default function login(){
	return (
		<LoggedLayout children={Present}/>
	)
}