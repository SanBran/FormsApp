import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from "../../components/Forms/Form"
import { getFormbyID } from "../../services/Services"

function FillForm() {

    const {_id} = useParams()
    const [id,setId] = useState(_id)
    const [jsonForm,setjsonForm] = useState()
    
    useEffect(() => {
      async function fetchData() {
        try {
          const response = await getFormbyID(id);
          setjsonForm(response)
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, [_id]);
  
    console.log(jsonForm);
  return (
    <div className="pt-28">
        {jsonForm ? (
      <Form jsonForm={jsonForm} />
    ) : (
      <p>Loading...</p>
    )}
    </div>
  )
}

export default FillForm