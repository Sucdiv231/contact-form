import React, { useEffect, useState } from "react";

export default function ContactForm() {
  const [isGeneralEnquiry, setIsGeneralEnquiry] = useState(false);
  const [isSupportRequest, setIsSupportRequest] = useState(false);

  // Inputs
  const [isConsent, setiSConsent] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setmessage] = useState("");
  const [query, setQuery] = useState("");

  //Handle Error
  const [errormessage, setErrorMessage] = useState("");
  const [isFirstName, setIsFirstName] = useState(false);
  const [isLastName, setIsLastName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isQuery, setIsQuery] = useState(false);
  const [isMessage, setIsMessage] = useState(false);

  const [readyToSubmit, setReadyToSubmit] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    // Validate inputs
    const errors = {
      firstName: !firstName,
      lastName: !lastName,
      email: !email,
      query: query === "",
      message: !message,
      consent: !isConsent,
    };

    // Update error states
    setIsFirstName(errors.firstName);
    setIsLastName(errors.lastName);
    setIsEmail(errors.email);
    setIsQuery(errors.query);
    setIsMessage(errors.message);
    setErrorMessage(errors.consent ? "Click Consent" : "");

    // Check if any errors exist
    const hasErrors = Object.values(errors).some((error) => error);
    if (hasErrors) {
      setReadyToSubmit(false);
      return;
    }

    // Submit logic here
    setReadyToSubmit(true);
  }

  //Handling input change
  function handleInputs(e, setter) {
    setter(e.target.value);
  }

  function selectingQuery(query) {
    switch (query) {
      case "General Enquiry":
        setIsGeneralEnquiry(true);
        setQuery("General Enquiry");
        setIsSupportRequest(false);
        break;
      case "Support Request":
        setIsSupportRequest(true);
        setQuery("Support Request");
        setIsGeneralEnquiry(false);
        break;
      default:
        setIsGeneralEnquiry(false);
        setIsSupportRequest(false);
    }
  }

  return (
    <main>
      {!readyToSubmit && (
        <div className="bg-white w-full lg:w-1/2 text-green-900 p-6 rounded-xl shadow-lg">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 lg:mb-10">
            Contact Us
          </h1>
          <form onSubmit={(e) => handleSubmit(e)} className="bg-white">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-20  items-center justify-between">
              <div className="flex flex-col items-start justify-center w-full ">
                <label htmlFor="firstName">
                  First Name{" "}
                  <span
                    className={`${
                      isFirstName === true ? "text-red-500" : "text-green-600"
                    }`}
                  >
                    *
                  </span>
                </label>
                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => handleInputs(e, setFirstName)}
                  className="border border-green-600 px-2 py-2 w-full rounded-xl outline-none focus:ring-1 focus:ring-green-600"
                />
                <p className="text-red-500">
                  {isFirstName ? "Enter first name" : ""}
                </p>
              </div>
              <div className="flex flex-col items-start justify-center w-full">
                <label htmlFor="LastName">
                  Last Name{" "}
                  <span
                    className={`${
                      isLastName === true ? "text-red-500" : "text-green-600"
                    }`}
                  >
                    *
                  </span>
                </label>
                <input
                  id="LastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => handleInputs(e, setLastName)}
                  className="border border-green-600 px-2 py-2 w-full rounded-xl outline-none focus:ring-1 focus:ring-green-600"
                />
                <p className="text-red-500">
                  {isLastName && "Enter last name"}
                </p>
              </div>
            </div>
            {/* Email */}
            <div className="my-6">
              <label htmlFor="email">
                Email Address
                <span
                  className={`${
                    isEmail === true ? "text-red-500" : "text-green-600"
                  }`}
                >
                  *
                </span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => handleInputs(e, setEmail)}
                className="border border-green-600 px-2 py-2 w-full rounded-xl outline-none focus:ring-1 focus:ring-green-600"
              />
              <p className="text-red-500">{isEmail && "Enter email"}</p>
            </div>

            {/* Query Type */}
            <div>
              <div>
                Query Type
                <span
                  className={`${
                    isQuery === true ? "text-red-500" : "text-green-600"
                  }`}
                >
                  *
                </span>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-20 items-center justify-between">
                <div
                  onClick={() => selectingQuery("General Enquiry")}
                  className={`flex flex-col items-start justify-center w-full ${
                    isGeneralEnquiry === true ? "bg-green-50" : " "
                  } `}
                >
                  <div
                    id="GeneralEnquiry"
                    type="text"
                    className="flex items-center gap-2 border border-green-600 px-2 py-2 w-full rounded-xl outline-none focus:ring-1 focus:ring-green-600"
                  >
                    <div className="w-4 h-4 rounded-full border border-green-600">
                      {isGeneralEnquiry && (
                        <img
                          className="w-full"
                          src="/assets/images/icon-radio-selected.svg"
                        />
                      )}
                    </div>
                    General Enquiry
                  </div>
                </div>
                <div
                  onClick={() => selectingQuery("Support Request")}
                  className={`flex flex-col items-start justify-center w-full ${
                    isSupportRequest === true ? "bg-green-50" : " "
                  }`}
                >
                  <div
                    id="SupportRequest"
                    type="text"
                    className="flex items-center gap-2  border border-green-600 px-2 py-2 w-full rounded-xl outline-none focus:ring-1 focus:ring-green-600"
                  >
                    <div className="w-4 h-4 rounded-full border border-green-600">
                      {isSupportRequest && (
                        <img
                          className="w-full"
                          src="/assets/images/icon-radio-selected.svg"
                        />
                      )}
                    </div>
                    Support Request
                  </div>
                </div>
              </div>
              <p className="text-red-500">{isQuery && "select a query type"}</p>
            </div>

            {/* Message */}
            <div className="my-6">
              <label htmlFor="message">
                Message{" "}
                <span
                  className={`${
                    isMessage === true ? "text-red-500" : "text-green-600"
                  }`}
                >
                  *
                </span>
              </label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(e) => handleInputs(e, setmessage)}
                className="border border-green-600 px-2 py-2 w-full rounded-xl outline-none resize-none focus:ring-1 focus:ring-green-600"
              ></textarea>
              <p className="text-red-500">{isMessage && "Leave a message"}</p>
            </div>

            {/* Consent check*/}

            <div onClick={() => setiSConsent((prev) => !prev)}>
              <div className="flex items-center gap-2  w-full rounded-xl">
                <div className="w-4 h-4 rounded-sm border border-green-600">
                  {isConsent && (
                    <img
                      className="w-full"
                      src="/assets/images/icon-checkbox-check.svg"
                    />
                  )}
                </div>
                I consent to being contacted by the team
              </div>
              <p className="text-red-500">{errormessage}</p>
            </div>

            <button className="w-full my-6 bg-green-900 text-white font-[600] py-2 text-center rounded-xl cursor-pointer hover:opacity-60 transition-all duration-500">
              Submit
            </button>
          </form>
        </div>
      )}

      {readyToSubmit && (
        <div className="bg-white p-6 text-green-600 font-[600] h-auto">
          <p className="">Successfully Submitted!!!</p>
        </div>
      )}
    </main>
  );
}
