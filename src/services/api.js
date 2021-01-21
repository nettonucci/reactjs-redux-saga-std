import axios from 'axios';
const api = axios.create({
	baseURL: 'suaBaseURL',
	headers: {
		chave: 'Sua autenticaçao se tiver',
	},
});

export default api;
