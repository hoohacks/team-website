import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const JoinPage = () => {

    const intialFormData = {
        firstName: "",
        lastName: "",
        Email: ""
    }

    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        Email: "",
    })

    const handleApply = () => {
        console.log("Varizzy and Parizzy sitting in a tree KI-SS-ING")
    }

    const handleSubscribe = () =>{
        setUserDetails(intialFormData)
        console.log("Subscribe to Eddie's OnlyFans!")
    }

    const handleInput = (event: any) => {
        const {name, value} = event.target
        setUserDetails( (prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))
    }

    return (
        <div>
            <Navbar/>
            <div className="container mx-auto flex flex-col h-screen items-center">
                <div className="mb-7 font">Fall Recruitment</div>
                <div className="w-2/3 text-center mb-8 text-sm">Our recruitment begins in September and is typically open until for two weeks until interviews begin. No prior experience is required to apply</div>
                <div className="mb-20">
                    <button className= "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" onClick={handleApply}>
                        Apply!
                    </button>
                </div>
                <div className="text-xl mb-2">Subscribe to our Newsletter!</div>
                <div className="text-xs mb-10">Stay updated with everything HooHacks</div>
                <form className="w-full max-w-sm">
                    <div className="flex flex-col mb-6 items-center">
                        <div className="mr-auto">
                            <label className="block text-gray-500 font-bold text-right mb-1 mb-0 pr-4" htmlFor="inline-full-name">
                                First Name
                            </label>
                        </div>
                        <div className="w-full">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name"
                             type="text" 
                             name = "firstName"
                             value={userDetails.firstName}
                             onChange={handleInput}
                             />
                        </div>
                    </div>
                    <div className ='flex flex-col items-center mb-6'>
                        <div className="mr-auto">
                            <label className="block text-gray-500 font-bold text-right mb-1 mb-0 pr-4" htmlFor="inline-last-name">
                                Last Name
                            </label>
                        </div>
                        <div className="w-full">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-last-name"
                             type="text"
                             name = "lastName" 
                             value={userDetails.lastName}
                             onChange={handleInput}
                             />
                        </div>
                    </div>
                    <div className = 'flex flex-col items-center mb-10'>
                        <div className="mr-auto">
                            <label className="block text-gray-500 font-bold text-right mb-1 mb-0 pr-4" htmlFor="inline-email">
                                Email
                            </label>
                        </div>
                        <div className="w-full">
                            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-email" 
                            type="email"
                            name="Email"
                            value={userDetails.Email}
                            onChange={handleInput}
                            />
                        </div>
                    </div>
                </form>
                <div>
                    <button className= "bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                        onClick={handleSubscribe}>
                        Subscribe
                    </button>
                </div>
                
            </div>
            <Footer/>
            
        </div>
    )
}

export default JoinPage