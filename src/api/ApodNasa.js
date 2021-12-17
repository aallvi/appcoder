import axios from 'axios'


const ApodNasa = axios.create({
    baseURL: 'https://api.nasa.gov',
    params: {
        api_key:'9SeJAnzjxX5SfJx9uNrwjwivEb9b8bh5qexvggT7',
        date: '2021-12-16'
    }

});

export default ApodNasa