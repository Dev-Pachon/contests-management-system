export default function Footer({children}) {
	return (
		<footer className="text-center text-lg-start bg-light text-muted">
			<section
				className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
			>
				<div className="me-5 d-none d-lg-block">
					<span>Get connected with us on social networks:</span>
				</div>

				<div>
					<a href="https://es-la.facebook.com/RedProgramacionCompetitiva/" className="me-4 text-reset">
						<i className="fab fa-facebook-f"></i>
					</a>
					<a href="https://twitter.com/redprogramacion" className="me-4 text-reset">
						<i className="fab fa-twitter"></i>
					</a>
				</div>
			</section>

			<div className="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}>
				© 2021 Copyright:
				<a className="text-reset fw-bold" href="https://redprogramacioncompetitiva.com/">  RPC :: Red de Programación Competitiva</a>
			</div>
		</footer>
	)
}