export default function Footer({children}) {
	return (
		<footer className="bg-dark fixed-bottom">
			<div className="container py-3 pb-lg-1">
				<div className="row clearfix">
					<div className="small">
						<p className="text-white">2013-2021 © <strong>Red de Programación Competitiva - RPC</strong>.
							Todos
							los derechos reservados.</p>
					</div>
					<div className="clearfix text-right">
						<a href="https://es-la.facebook.com/RedProgramacionCompetitiva/" title="Síguenos en Facebook"
						   target="_blank"><img src="/facebook-white.png" alt="RPC Facebook"/></a> &nbsp;
						<a href="https://twitter.com/redprogramacion" title="Síguenos en Twitter" target="_blank"><img
							src="/twitter-white.png" alt="RPC Twitter"/></a> &nbsp;
					</div>
				</div>
			</div>
		</footer>
	)
}