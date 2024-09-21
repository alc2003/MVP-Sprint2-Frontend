import { Button, Form, InputGroup } from "react-bootstrap";
import React, { useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { Paciente } from "@/types/paciente.types";
import { useForm } from "react-hook-form";
import { confirmAlert } from "react-confirm-alert";
import { useRouter } from "next/router";
import { adicionarPaciente, alterarPaciente } from "@/services/api";
import { getViaCep } from "@/services/api";

export default function PacienteForm({ paciente }) {
    const router = useRouter();
    const { register, handleSubmit, reset, setValue, getValues } = useForm();

    // effect runs when user state is updated
    useEffect(() => {
        reset(paciente);
        setTimeout(() => {
            buscarCEP();
        }, 500)

    }, [paciente]);

    const onSubmit = (data) => {

        toast.loading('Aguarde...', { theme: 'dark', position: "bottom-center" })

        const paciente = data as Paciente;
        if (paciente.id) {
            alterarPaciente(data as Paciente).then((data) => {
                toast.dismiss()

                confirmAlert({
                    title: 'Tudo certo!',
                    message: 'As alterações foram salvas. ',
                    buttons: [
                        {
                            label: 'Fechar',
                            onClick: () => {
                                router.back();
                            }
                        }
                    ]
                })
            })
        } else {
            adicionarPaciente(data as Paciente).then((data) => {
                toast.dismiss()

                confirmAlert({
                    title: 'Tudo certo!',
                    message: 'As alterações foram salvas. ',
                    buttons: [
                        {
                            label: 'Fechar',
                            onClick: () => {
                                router.back();
                            }
                        }
                    ]
                })
            })
        }

        return false;
    }

    const buscarCEP = () => {
        const cep = getValues('cep');
        console.log('buscando cep...', cep);

        getViaCep(cep).then((response) => {
            const data = response.data;
            setValue('logradouro', data['logradouro']);
            setValue('bairro', data['bairro']);
            setValue('localidade', data['localidade']);
            setValue('estado', data['uf']); // 'uf' é o campo que representa o estado na resposta do ViaCep
            console.log(data);
        }).catch((error) => {
            console.error('Erro ao buscar o CEP:', error);
        });
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" readOnly  {...register("id")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>CNS</Form.Label>
                    <Form.Control type="text"   {...register("cns")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome</Form.Label>
                    <Form.Control type="text"
                        {...register("nome")}
                        placeholder="Digite o nome" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control type="text"
                        {...register("telefone")}
                        placeholder="Digite o telefone" />
                </Form.Group>
                <InputGroup className="mb-3">
                    <Form.Control
                        {...register("cep")}
                        placeholder="Digite o cep"
                    />
                    <Button variant="outline-secondary" id="button-addon1" onClick={buscarCEP}>
                        Buscar
                    </Button>
                </InputGroup>

                <div className="row">
                    <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formBasicLogradouro">
                            <Form.Label>Logradouro</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("logradouro")}
                                disabled
                            />
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formBasicBairro">
                            <Form.Label>Bairro</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("bairro")}
                                disabled
                            />
                        </Form.Group>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formBasicLocalidade">
                            <Form.Label>Localidade</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("localidade")}
                                disabled
                            />
                        </Form.Group>
                    </div>
                    <div className="col-md-6">
                        <Form.Group className="mb-3" controlId="formBasicEstado">
                            <Form.Label>Estado</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("estado")}
                                disabled
                            />
                        </Form.Group>
                    </div>

                </div>

                <div className="d-flex justify-content-between mt-4">
                    <Link href='/pacientes' className="btn btn-outline-dark">
                        Voltar
                    </Link>
                    <Button variant="primary" type="submit">
                        Salvar
                    </Button>
                </div>
            </Form>
        </>

    )
}
