import Link from "next/link";

export default function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className=" container container-fluid">
                    <a className="navbar-brand" href="#">SISTEMA</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link href={'/'} className="nav-link active">
                                    Início
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href={'/pacientes'} className="nav-link active">
                                    Pacientes
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}
