import axios from 'axios';

const URL = 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation'

const options = {
   
    params: {query: 'berlin'},
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_TA_KEY,
      'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
    }
  };

 export const getPlacesData = async () => {
    try{
        const {data: { data }} = await axios.get(URL, options);
        return data
    }
    catch(error){
        console.log('error getting info', error)
    }
}

