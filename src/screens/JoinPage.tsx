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
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleApply = () => {
    console.log("Redirect to application");
  };

  const handleSubscribe = async (event: any) => {
    setUserDetails(intialFormData);
    event.preventDefault();

    setIsSubscribed(true);

    // Clear the form fields
    setUserDetails({ firstName: "", lastName: "", Email: "" });

    // Create the data payload
    const formData = new FormData();
    formData.append("u", "8db3fa0f566f9edea113259df");
    formData.append("id", "b74b5fd33d");
    formData.append("MERGE1", userDetails.firstName);
    formData.append("MERGE2", userDetails.lastName);
    formData.append("MERGE0", userDetails.Email);

    try {
      // Make the POST request
      const response = await fetch(
        "https://hoohacks.us17.list-manage.com/subscribe/post",
        {
          method: "POST",
          body: formData,
        }
      );

      // Check if the request was successful
      if (response.ok) {
        console.log("Subscription successful!");
        // You can handle the success response here if needed
      } else {
        console.error("Subscription failed");
        // Handle the error response here if needed
      }
    } catch (error) {
      console.error("Error during subscription:", error);
      // Handle the error here if needed
    }
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
        <div className="mb-7 font">Fall Recruitment</div>
        <div className="w-2/3 text-center mb-8 text-sm">
          Our recruitment begins in September and is typically open until for
          two weeks until interviews begin. No prior experience is required to
          apply
        </div>
        <div className="mb-20">
          <button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            onClick={handleApply}
          >
            Apply!
          </button>
        </div>
        <div className="text-xl mb-2">Subscribe to our Newsletter!</div>
        <div className="text-xs mb-10">
          Stay updated with everything HooHacks
        </div>
        <form className="w-full max-w-sm" onSubmit={handleSubscribe}>
          <div className="flex flex-col mb-6 items-center">
            <div className="mr-auto">
              <label
                className="block text-gray-500 font-bold text-right mb-1 mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                First Name
              </label>
            </div>
            <div className="w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                name="firstName"
                value={userDetails.firstName}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-col items-center mb-6">
            <div className="mr-auto">
              <label
                className="block text-gray-500 font-bold text-right mb-1 mb-0 pr-4"
                htmlFor="inline-last-name"
              >
                Last Name
              </label>
            </div>
            <div className="w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-last-name"
                type="text"
                name="lastName"
                value={userDetails.lastName}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex flex-col items-center mb-10">
            <div className="mr-auto">
              <label
                className="block text-gray-500 font-bold text-right mb-1 mb-0 pr-4"
                htmlFor="inline-email"
              >
                Email
              </label>
            </div>
            <div className="w-full">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-email"
                type="email"
                name="Email"
                value={userDetails.Email}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
              type="submit"
              disabled={isSubscribed}
            >
              {isSubscribed ? (
                <span style={{ color: "white" }}>
                  {userDetails.Email} Added to Listserv ✔️
                </span>
              ) : (
                "Subscribe"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinPage;
