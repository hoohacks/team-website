import { useState } from "react";

const JoinPage = () => {
  const intialFormData = {
    firstName: "",
    lastName: "",
    Email: "",
  };

  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    Email: "",
  });

  const handleApply = () => {
    console.log("Varizzy and Parizzy sitting in a tree KI-SS-ING");
  };

  const handleSubscribe = () => {
    setUserDetails(intialFormData);
    console.log("Subscribe to Eddie's OnlyFans!");
  };

  const handleInput = (event: any) => {
    const { name, value } = event.target;
    setUserDetails((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      <div className="container mx-auto flex flex-col h-screen items-center">
        <div className="mb-7 font" style={{ color: "#2848BA", fontSize:"24px", fontWeight:"bold"}}>Fall Recruitment</div>
        <div className="w-2/3 text-center mb-10 text-sm" style={{fontSize:"16px"}}>
          Our recruitment begins in September and is typically open until for
          two weeks until interviews begin. No prior experience is required to
          apply!
        </div>
        <div className="mb-20">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-14 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={handleApply} style={{backgroundColor: "#2848BA"}}
          >
            Apply!
          </button>
        </div>
        <div className="text-xl mb-2" style={{ color: "#2848BA", fontSize:"24px", fontWeight:"bold"}}>Subscribe to our Newsletter!</div>
        <div className="text-xs mb-10" style={{fontSize:"16px"}}>
          Stay updated with everything HooHacks
        </div>
        <form className="w-full max-w-sm">
          <div className="flex flex-col mb-6 items-center">
            <div className="mr-auto">
              <label
                className="block font-bold text-right mb-1 mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                First Name
              </label>
            </div>
            <div className="w-full">
              <input
                className="bg-gray-200 border-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                name="firstName"
                value={userDetails.firstName}
                onChange={handleInput}
                style={{ opacity: 1, backgroundColor: "#FFFFFF"}}
              />
            </div>
          </div>
          <div className="flex flex-col items-center mb-6">
            <div className="mr-auto">
              <label
                className="block font-bold text-right mb-1 mb-0 pr-4"
                htmlFor="inline-last-name"
              >
                Last Name
              </label>
            </div>
            <div className="w-full">
              <input
                className="bg-gray-200 border-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-last-name"
                type="text"
                name="lastName"
                value={userDetails.lastName}
                onChange={handleInput}
                style={{ opacity: 100, backgroundColor: "#FFFFFF"}}
              />
            </div>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="mr-auto">
              <label
                className="block font-bold text-right mb-1 mb-0 pr-4"
                htmlFor="inline-email"
              >
                Email
              </label>
            </div>
            <div className="w-full">
              <input
                className="bg-gray-200 border-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-email"
                type="email"
                name="Email"
                value={userDetails.Email}
                onChange={handleInput}
                style={{ opacity: 100, backgroundColor: "#FFFFFF"}}
              />
            </div>
          </div>
        </form>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-10 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={handleSubscribe} style={{backgroundColor: "#2848BA"}}
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinPage;
