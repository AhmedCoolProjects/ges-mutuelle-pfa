import axios from 'axios';

export default axios.create({
	baseURL: 'https://get-mutuelle-api.herokuapp.com',
	headers: {
		accept: 'application/json',
		'Content-Type': 'application/json'
	}
});
