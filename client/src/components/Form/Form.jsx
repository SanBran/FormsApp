
function Form({jsonForm}) {
    const inputs = jsonForm.items
    console.log(inputs);
  return (
    <form className=" border shadow-md rounded-lg flex flex-col justify-end  p-10"  >
        {inputs.map((i,index) => {
           if (i.options) {
            console.log(i.options)
            return (
                <div className="flex flex-col mb-3 ">
                    <label htmlFor={i.name}>{i.label}</label>
                    <select
                    className="border rounded-md p-1"
                    type={i.type}
                    name={i.name}
                    required={i.required}
                    key={index}>
                        {i.options.map((option,index) => {
                            console.log(option.label);
                            return (<option value={option.value} key={index}>{option.label}</option>)
                        })}
                    </select>
                </div>
            )
           } else if(i.type !== "submit" && i.type !== "checkbox"){
            return (
              <div className="flex flex-col mb-3">
                
                  <label htmlFor={i.name}>{i.label}</label>
                  <input
                  className="border rounded-md p-2"
                  placeholder={i.label}
                  type={i.type}
                  label={i.label}
                  name={i.name}
                  required={i.required}
                  key={index} />
              </div>
                )
           } else if(i.type === "checkbox" ){
            return (
              <div className="flex border rounded-md mb-3 justify-evenly p-2 mt-3 shadow-sm ">
                
                  <label className=" w-4/5" htmlFor={i.name}>{i.label}</label>
                  <input
                  className="border"
                  placeholder={i.label}
                  type={i.type}
                  label={i.label}
                  name={i.name}
                  required={i.required}
                  key={index} />
              </div>
                )
           }
           
        })}
        <button className="border rounded-lg xl:w-2/5 p-3 mx-auto mt-3 bg-lime-400 text-zinc-50 font-bold shadow-inner ">Submit</button>
    </form>
  )
}


export default Form