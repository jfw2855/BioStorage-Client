let apiUrl

//sets apiURL if in production or dev env
const apiUrls = {
	production: '',
	development: 'http://localhost:8000',
}

if (window.location.hostname === 'localhost') {
	apiUrl = apiUrls.development
} else {
	apiUrl = apiUrls.production
}

export default apiUrl
