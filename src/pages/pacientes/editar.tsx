import {Layout} from "@/layout/layout";
import React, {useEffect, useState} from "react";
import {useRouter} from 'next/router'
import {Paciente} from "@/types/paciente.types";
import {getPacienteById} from "@/services/api";
import 'bootstrap/dist/css/bootstrap.css';
import {Card, CardBody, CardText, CardTitle} from "react-bootstrap";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import PacienteForm from "@/components/pacienteForm";

export default function EditarPaciente() {
    const router = useRouter();
    const [paciente, setPaciente] = useState({} as Paciente);

    useEffect(() => {
        if (router.isReady) {
            const strId = router.query['id'];
            const id = Number(strId);
            getPacienteById(id)
                .then((response) => {
                    console.log(response.data);
                    const paciente = response.data as Paciente;//response.data;
                    setPaciente(paciente);
                })
        }
    }, [router.isReady]);

    return (
        <Layout>
            <Card>
                <CardBody>
                    <CardTitle>Paciente #{paciente.id}</CardTitle>
                    <CardText>Edite informações do paciente</CardText>
                    <PacienteForm paciente={paciente}></PacienteForm>
                </CardBody>
            </Card>
            <ToastContainer/>
        </Layout>
    );
}
