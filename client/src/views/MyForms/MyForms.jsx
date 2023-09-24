import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getForms } from "../../services/Services";
import FormPreview from "../../components/Forms/FormPreview";

function MyForms() {
  const {email} = useParams()
  const [request, setRequest] = useState({
    email:email
  })
  const [forms, setForms] = useState([])
  
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getForms(request);
        setForms(response)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [request]);

  console.log(forms);
 
  return (
    <div className=" flex flex-col justify-center pt-28 p-10">
      <h1 className="text-center text-5xl">Forms associate to {email}</h1>
      <div className=" z-0 border mt-20 grid grid-cols-3 gap-5 px-20 pb-10 pt-8 top-20 items-center shadow-xl">
      {forms?.map((form,index) => {
        return (
          <Link to={`/fillForm/${form._id}`}>
            <FormPreview jsonForm={form.items} />
          </Link>
        )
      })}
      </div>
    </div>
  )
}

export default MyForms