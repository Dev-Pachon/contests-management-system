import Document, {Html, Head, Main, NextScript} from 'next/document'
import Footer from "../components/BasicFooter";

class MyDocument extends Document {

	render() {
		return (
			<Html>
				<Head>
					<meta charSet="UTF-8"/>

					<meta httpEquiv="X-UA-Compatible" content="IE=edge"/>

					<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
						  rel="stylesheet"
						  integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
						  crossOrigin="anonymous"/>

					<link rel="icon" href="/logo.ico"/>
				</Head>
				<body>
				<Main/>
				<NextScript/>
				<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
						integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
						crossOrigin="anonymous"/>

				<Footer/>
				</body>
			</Html>
		)
	}
}

export default MyDocument