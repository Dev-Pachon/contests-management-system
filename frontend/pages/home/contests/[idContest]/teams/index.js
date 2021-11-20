import Teams from '../../../../../components/Home/Contests/Teams';
import LoggedLayout from "../../../../../components/LoggedLayout";

export default function login(){
	return (
		<LoggedLayout children={Teams}/>
	)
}