import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


  export const fetchApi = async (url) => {
      const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'c4f478ad21msh042189f978c793dp1d2b03jsnae96d38a15e5'
          }
      });

      return data;
  }