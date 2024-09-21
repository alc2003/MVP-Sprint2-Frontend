import {Paciente} from "@/types/paciente.types";
import axios from 'axios';

const getPacientes = () => {
    return axios.get('http://127.0.0.1:5000/busca_pacientes')   
}

const getPacienteById = (id: number) => {
    return axios.get('http://127.0.0.1:5000/busca_paciente_id?id=' + id)
}

const getViaCep = (cep: string) => {
    const url = '//viacep.com.br/ws/'+cep+'/json/';
    return axios.get(url);
;}

const adicionarPaciente = (paciente: Paciente) => {
    var form_data = new FormData();
    for ( var key in paciente ) {
        form_data.append(key, paciente[key]);
    }
    return axios.post('http://127.0.0.1:5000/adiciona_paciente', form_data, {
        headers: {
          'accept': 'application/json',
          'Content-Type': 'multipart/form-data'
        }
      })
}

const alterarPaciente = (paciente: Paciente) => {
    var form_data = new FormData();
    for ( var key in paciente ) {
        form_data.append(key, paciente[key]);
    }
    return axios.post('http://127.0.0.1:5000/alterar_paciente', form_data, {
        headers: {
            'accept': 'application/json',
            'Content-Type': 'multipart/form-data'
        }
    })
}

const excluirPaciente = (id: number) => {
    return axios.delete('http://127.0.0.1:5000/remove_paciente?id=' + id)   
}

export {
    getPacientes, getPacienteById, adicionarPaciente, alterarPaciente, excluirPaciente, getViaCep
};
