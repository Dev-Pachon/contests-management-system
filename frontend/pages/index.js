import Login from "../components/Login";
import BasicLayout from "../components/BasicLayout"

export default Login

Login.getLayout = function getLayout(page) {
	return (
		<BasicLayout>
			{page}
		</BasicLayout>
	)
}