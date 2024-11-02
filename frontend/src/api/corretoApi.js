import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080'
});


export async function loginCorretor(email, senha) {
    
    const response = await api.post('/loginCorretor', {
        email: email,
        senha: senha
        
    });

    return response.data;

}