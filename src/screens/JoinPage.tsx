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
    window.open("https://forms.office.com/r/HpE1Lm4wCj", "_blank");
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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-sans text-[#121A6A]">
      <div className="container mx-auto max-w-xl px-4 flex flex-col items-center">
        <div className="mb-7 text-center font-chakra-petch text-2xl font-bold pt-10">
          Fall Recruitment
        </div>
        <div className="text-center mb-8 text-sm pt-10">

        We seek passionate and creative individuals who are eager to learn, grow, and make a meaningful contribution to our team. We value diverse backgrounds and perspectives and encourage all students to apply, regardless of major or prior experience.
          
        </div>
        <div className="text-center mb-8 text-sm pb-6">
          <b>
            Our Fall 2024 application is now open and will close on <u>September 6th</u>.
          </b>
        </div>
        <div className="mb-10">
          <button
            className="bg-[#121A6A] hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-md"
            onClick={handleApply}
          >
            Apply!
          </button>
        </div>
        <div className="text-2xl mb-2 font-chakra-petch font-bold pt-10 pb-6">
          Subscribe to our Newsletter!
        </div>
        <div className="text-s mb-10">
          Stay updated with everything HooHacks
        </div>
        <form className="w-full max-w-xs pb-20" onSubmit={handleSubscribe}>
          <div className="flex flex-col mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="inline-full-name"
            >
              First Name
            </label>
            <input
              className="bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inline-full-name"
              type="text"
              name="firstName"
              value={userDetails.firstName}
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="inline-last-name"
            >
              Last Name
            </label>
            <input
              className="bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inline-last-name"
              type="text"
              name="lastName"
              value={userDetails.lastName}
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col mb-6">
            <label
              className="block text-sm font-bold mb-2"
              htmlFor="inline-email"
            >
              Email
            </label>
            <input
              className="bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="inline-email"
              type="email"
              name="Email"
              value={userDetails.Email}
              onChange={handleInput}
            />
          </div>
          <div className="flex justify-center pb-10">
            <button
              className={`bg-[#121A6A] hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg shadow-md ${
                isSubscribed ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={isSubscribed}
            >
              {isSubscribed ? (
                <span style={{ color: "white" }}>
                  Added to Listserv ✔️
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