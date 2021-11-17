import Register from '../components/Register'
import BasicLayout from "../components/BasicLayout";

export default Register

Register.getLayout = function getLayout(page) {
	return (
		<BasicLayout>
			{page}
		</BasicLayout>
	)
}