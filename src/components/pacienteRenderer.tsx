import React from "react";
import Link from "next/link";

export default function PacienteRenderer({paciente, excluir}) {
    return (
        <>
            <td>
                {paciente.cns}
            </td>
            <td>
                {paciente.id}
            </td>
            <td>
                <div className="d-flex align-items-center">
                    <img
                        src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg"
                        alt="John Michael"
                        className="rounded-circle paciente-foto me-3"/>
                    <div className="flex flex-col">
                        <p className="mb-0 fw-bold">
                            {paciente.nome}
                        </p>
                        <p className="mb-0">
                        {paciente.telefone}
                        </p>
                    </div>
                </div>
            </td>
            <td>
                <Link href={{
                    pathname: '/pacientes/editar',
                    query: {id: paciente.id.toString()}
                }}
                      className="btn btn-primary me-3">
                    Editar
                </Link>

                <button className="btn btn-outline-danger" onClick={() => excluir(paciente)}>
                    Excluir
                </button>
            </td>
        </>
    )
}
