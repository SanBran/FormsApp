import axios from '../utils/axios'


export const postNewForm = async (data) => {
      console.log(data);
        try {
          const response = await axios.post(`/newForm`, data);
          console.log(response.data);
          return response.data
        } catch (error) {
          throw Error(error.message);
        }
      
}

export const getForms = async ({email}) => {
    console.log(email);
        try {
          const userData = {
            email: email,
           
          };
          const response = await axios.post(`/forms`, userData);
          return response.data
        } catch (error) {
          throw Error(error.message);
        }
      
}

export const getFormbyID = async (id) => {
    console.log(id);
        try {
          const data = {
            _id: id,
           
          };
          const response = await axios.post(`/oneForm`, data);
          console.log(response.data);
          return response.data
        } catch (error) {
          throw Error(error.message);
        }
      
}