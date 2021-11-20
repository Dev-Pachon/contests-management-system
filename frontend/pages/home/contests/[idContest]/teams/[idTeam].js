import Team from '../../../../../components/Home/Contests/Team';
import LoggedLayout from "../../../../../components/LoggedLayout";

export default function login(){
	return (
		<LoggedLayout children={Team}/>
	)
}