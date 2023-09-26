import CreateButton from "../Buttons/CreateButton"
import Search from "../Search/Search"
import SearchId from "../Search/IDSearch"

function Landing() {
  return (
    <div className=' flex flex-col mt-10 items-center lg:gap-10 gap-5'>
        <h1 className='mx-auto lg:text-6xl text-3xl font-semibold '>Make forms as you want <br/> when you want</h1>
        <p className=' lg:text-xl text-xs'>Here you can easily upload your forms without complications</p>
        <section className='rounded-3xl overflow-hidden flex bg-green-500 lg:w-3/5 w-4/5 h-[600px] shadow-md mb-10'>
            <div className='flex flex-col w-1/2 justify-center items-center '>
                <h1 className=' lg:text-6xl text-3xl font-semibold lg:mb-7 mb-3'>Let's begin!</h1>
                <CreateButton/>
            </div>
            <img src="./woman-work.jpg" alt="form" className='w-1/2 ' />
        </section>

        <h1 className=' mx-16 lg:text-6xl text-3xl font-semibold '>Do you already have a form with us?</h1>
        <section className='rounded-3xl overflow-hidden bg-white flex border lg:w-3/5 w-4/5 h-[600px] shadow-md mb-10'>
            <img src="./form2.jpg" alt="form2" className='lg:w-1/2 w-0 ' />
            <div className='flex flex-col lg:w-1/2 w-full justify-center items-center '>
                <h1 className=' lg:text-3xl text-2xl text-center font-semibold lg:mb-7 mb-3'>Search your forms with your email</h1>
                <Search/>
            </div>
        </section>
        <h1 className=' mx-16 lg:text-6xl text-3xl font-semibold '>Do you want update your filled form?</h1>
        <section className='rounded-3xl overflow-hidden bg-white flex border lg:w-3/5 w-4/5 h-[600px] shadow-md'>
            <div className='flex flex-col lg:w-1/2 w-full justify-center items-center '>
                <h1 className=' lg:text-3xl text-2xl text-center font-semibold lg: mx-20 lg:mb-7 mb-3'>Search your filled forms with your id form</h1>
                <SearchId/>
            </div>
            <img src="./form2.jpg" alt="form2" className='lg:w-1/2 w-0 ' />
        </section>
       
    </div>
  )
}

export default Landing