import {Layout} from "@/layout/layout";
import React, {useEffect, useState} from "react";
import PacienteRenderer from "@/components/pacienteRenderer";
import {Paciente} from "@/types/paciente.types";
import HeaderTabelaRenderer from "@/components/headerTabelaRenderer";
import {excluirPaciente, getPacientes} from "@/services/api";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {confirmAlert} from "react-confirm-alert";
import Link from "next/link";

export default function Pacientes() {

    const [pacientes, setPacientes] = useState([] as Paciente[]);

    useEffect(() => {
        getPacientes()
            .then((response:any) => {
                //const result = response.data //response.data
                console.log(response.data)
                setPacientes(response.data.pacientes as Paciente[]);
            })
    }, []);

    const confirmarExcluir = (paciente: Paciente)=>{
        confirmAlert({
            title: 'Atenção!',
            message: 'Deseja mesmo excluir '+paciente.nome,
            buttons: [
                {
                    label: 'Sim',
                    onClick: () => {
                        toast.loading('Aguarde...', {theme: 'dark', position: "bottom-center"})
                        excluir(paciente);
                    }
                },
                {
                    label: 'Não',
                    onClick: () =>{}
                }
            ]
        });
    }

    const excluir = (paciente: Paciente) =>{
        excluirPaciente(paciente.id).then(()=>{
            toast.dismiss()
            confirmAlert({
                title: 'Tudo certo!',
                message: 'O paciente foi excluído. ',
                buttons: [
                    {
                        label: 'Fechar',
                        onClick: () => {
                            var index = pacientes.map(x => {
                                return x.id;
                            }).indexOf(paciente.id);

                            pacientes.splice(index, 1)

                            const pacientesCopia =  [...pacientes];
                            setPacientes(pacientesCopia);
                        }
                    }
                ]
            })
        })
    }

    return (
        <Layout>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between">
                        <h5 className="card-title">
                            Pacientes
                        </h5>
                        <Link href="/pacientes/novo" className="btn btn-primary">
                            Cadastrar Novo
                        </Link>
                    </div>

                    <p className="card-text">Veja aqui informações sobre seus pacientes</p>

                    {pacientes && pacientes.length > 0 &&
                        <table className="table table-hover borderless">
                            <thead>
                            <tr>
                                <HeaderTabelaRenderer colunas={Object.keys(pacientes[0])}/>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                pacientes.map((paciente) => (
                                    <tr key={paciente.id}>
                                        <PacienteRenderer excluir={confirmarExcluir} paciente={paciente}></PacienteRenderer>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
            <ToastContainer/>
        </Layout>
    );
}
