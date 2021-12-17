import axios from 'axios'



const Satelital = axios.create({
        baseURL: 'https://api.nasa.gov',
        params: {
            api_key:'9SeJAnzjxX5SfJx9uNrwjwivEb9b8bh5qexvggT7',
            date: '2021-01-01',
            lon:'-70.915085',
            lat:'-33.855953'
        }
    
    });
    

export default Satelital