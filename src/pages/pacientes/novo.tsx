import {Layout} from "@/layout/layout";
import React, {useState} from "react";
import {Paciente} from "@/types/paciente.types";
import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardBody, CardText, CardTitle} from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css';
import PacienteForm from "@/components/pacienteForm";

export default function NovoPaciente() {
    const [paciente, setPaciente] = useState({} as Paciente);
    return (
        <Layout>
            <Card>
                <CardBody>
                    <CardTitle>Novo paciente</CardTitle>
                    <CardText>Cadastre as informações do paciente</CardText>
                    <PacienteForm paciente={paciente}></PacienteForm>
                </CardBody>
            </Card>
        </Layout>
    );
}
