import axios from '../utils/axios'


export const postNewForm = async (data) => {
     
        try {
          const response = await axios.post(`/newForm`, data);
         
          return response.data
        } catch (error) {
          console.log(error);
          throw Error(error.message);
        }
      
}

export const getForms = async ({email}) => {
   
        try {
          const userData = {
            email: email,
           
          };
          const response = await axios.post(`/forms`, userData);
          return response.data
        } catch (error) {
          console.log(error);
          throw Error(error.message);
        }
      
}

export const getFormbyID = async (id) => {
    
        try {
          const data = {
            _id: id,
           
          };
          const response = await axios.post(`/oneForm`, data);
     
          return response.data
        } catch (error) {
          throw Error(error.message);
        }
      
}
export const getFilledFormbyID = async (id) => {
        try {
          const data = {
            _id: id,
           
          };
          const response = await axios.post(`/oneFilledForm`, data);
          return response.data
        } catch (error) {
          throw Error(error.message);
        }
      
}

export const sendForm = async (data) => {
  
        try {
          const response = await axios.post(`/sendForm`, data);
        
          return response.data
        } catch (error) {
          throw Error(error.message);
        }
      
}

export const putForm = async ({_id,form}) => {
    
        try {
          const data = {
            _id: _id,
            form: form
           
          };
          const response = await axios.put(`/oneForm`, data);
      
          return response.data
        } catch (error) {
          throw Error(error.message);
        }
      
}