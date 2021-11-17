import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {

	render() {
		return (
			<Html>
				<Head>
					<meta charSet="UTF-8" />

					<meta httpEquiv="X-UA-Compatible" content="IE=edge" />

					<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossOrigin="anonymous" />

					<link rel="icon" href="/logo.ico" />
				</Head>
				<body>
				<Main />
				<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument