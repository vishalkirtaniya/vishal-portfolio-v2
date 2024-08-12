import FormInput from "@/src/components/formInput";
import { useState } from "react";

const Section05 = () => {
  const [formStatus, setFormStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "4b6b57d7-513f-43a6-980c-2596c8439842",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      setFormStatus("Thank you for your message!");
    } else {
      setFormStatus("Oops! Something went wrong.");
    }
  }
  return (
    <section className="section h-[90vh] w-full bg-bgblack  flex justify-start items-center montserratFont text-bgwhite  ">
      <div className="h-[600px] w-full  flex justify-center gap-3 ">
        <div className="h-full xxs:w-full lg:w-[550px]  flex flex-col justify-center items-center gap-3">
          <h1 className="xxs:text-md md:text-lg lg:text-2xl font-bold text-center">
            Interested in working together?
          </h1>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center"
          >
            <div className="formContainer h-[200px] w-full  gap-3 flex flex-col justify-center items-center ">
              <div className="form01 w-full flex xxs:flex-col sm:flex-row xxs:items-center sm:justify-center gap-3">
                <FormInput
                  inputType="text"
                  labelText="Name"
                  width="100%"
                  height="60px"
                />
                <FormInput
                  inputType="email"
                  labelText="Email"
                  width="100%"
                  height="60px"
                />
              </div>
              <div className="form02 w-full flex justify-center gap-3 ">
                <FormInput
                  inputType="text"
                  labelText="Message"
                  width="100%"
                  height="60px"
                />
              </div>
            </div>
            <div className="sendButton">
              <input
                type="submit"
                value={"send request"}
                className="font-bold uppercase text-base h-[35px] hover:cursor-pointer w-[250px] bg-bgblue flex justify-center items-center"
              />
            </div>
            {formStatus && <p className="mt-4 text-center">{formStatus}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section05;
