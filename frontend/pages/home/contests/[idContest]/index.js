import Contest from '../../../../components/Home/Contests/Contest';
import LoggedLayout from "../../../../components/LoggedLayout";

export default function login(){
	return (
		<LoggedLayout children={Contest}/>
	)
}