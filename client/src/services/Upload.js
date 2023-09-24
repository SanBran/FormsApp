import axios from '../utils/axios'


export const postNewForm = async (data) => {
    
        console.log('sep');
        try {
          const response = await axios.post(`/newForm`, data);
          console.log(response.data);
          return response.data
        } catch (error) {
          throw Error(error.message);
        }
      
}