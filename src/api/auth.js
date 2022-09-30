import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = (credentials) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/sign-up/',
		data: {
			credentials: {
                first_name: credentials.firstName,
				last_name: credentials.lastName,
				email: credentials.email,
				password: credentials.password,
				password_confirmation: credentials.passwordConfirmation
			},
		},
	})
}

export const signIn = (credentials) => {
	return axios({
		url: apiUrl + '/sign-in/',
		method: 'POST',
		data: {
			credentials: {
				email: credentials.email,
				password: credentials.password,
			},
		},
	})
}