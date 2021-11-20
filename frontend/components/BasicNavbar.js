import Link from "next/Link"

export default function Navbar() {
	return (
		<nav className="navbar fixed-top navbar-expand-sm navbar-dark" style={{backgroundColor: "#001A33"}}>
			<div className="container ms-5">
				<a href="https://redprogramacioncompetitiva.com/"
				   className="navbar-brand mb-0 h1">
					<img src="https://pbs.twimg.com/profile_images/493847405670850561/qslkfHlq_400x400.jpeg"
						 className="d-inline-block align-top"
						 width="30" height="30" alt="Logo"/>
					RPC
				</a>

				<button className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"/>
				</button>

				<div className="collapse navbar-collapse"
					 id="navbarNav">
					<ul className="navbar-nav text-center">
						<li className="nav-item active">
							<Link as="/" href="/">
								<a className="nav-link active">
									Home
								</a>
							</Link>
						</li>
						<li className="nav-item active">
							<Link as="/" href="/">
								<a className="nav-link">
									Services
								</a>
							</Link>
						</li>
						<li className="nav-item active">
							<Link as="/" href="/">
								<a className="nav-link">
									Our Team
								</a>
							</Link>
						</li>
						<li className="nav-item active">
							<Link as="/" href="/">
								<a className="nav-link">
									Initiatives
								</a>
							</Link>
						</li>
						<li className="nav-item active">
							<Link as="/" href="/">
								<a className="nav-link">
									Contact Us
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="me-4">
				<Link href="/">
					<a className="btn btn-light"
					   style={{borderRadius: "10px"}}>
						Sign In
					</a>
				</Link>
			</div>
		</nav>
	)
}
