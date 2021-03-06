import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet" />
					{/* <link href="https://fonts.googleapis.com/css2?family=Merriweather&family=Righteous&family=Rubik:wght@500&display=swap" rel="stylesheet" /> */}
					{/* <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&family=Righteous&family=Rubik:wght@500&display=swap" rel="stylesheet" /> */}
					{/* <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Montserrat+Subrayada&display=swap" rel="stylesheet" /> */}

					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

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
