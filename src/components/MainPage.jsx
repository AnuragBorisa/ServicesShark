import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const MainPage = () => {
  const formRef = useRef();
  const navigate = useNavigate();

  const formSubmissionHandler = async (event) => {

    
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fullName = formData.get("name");
    const email = formData.get("email");
    const phoneNumber = formData.get("phone");
    const services=true;  

    axios
      .post("https://sharklandingpagedemo.onrender.com/saveSpreadsheet/spreadsheet", {
        fullName,
        email,
        phoneNumber,
        services,
      })
      .then((res) => {
        console.log(res.data.message);
        formRef.current.reset();
        navigate("/thankyou");
      })
      .catch((err) => {
        console.log(err.response.data);
      });

    formData.append("access_key", "62c30cae-907e-47dd-ac59-81f8bc312d58");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
     
      formRef.current.reset();
        navigate("/thankyou");
      console.log("Success", res);
    }
  };
  return (
    <>
    <section className="flex  px-16  h-7   justify-center bg-black">
          <img src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1710221519/images/qrdk8umaz8zlcvnjw58t.png" className=" h-28"></img>
    </section>
      <section className="  flex xl:flex-row flex-col px-16 py-16 justify-center   min-h-screen gap-16 xl:bg-[url('https://res.cloudinary.com/dhuagtzvw/image/upload/v1709987212/images/ce53tmj4eukpb1dpzpjh.jpg')] bg-[url('https://res.cloudinary.com/dhuagtzvw/image/upload/v1709988167/images/vv71e0wn0wxb7ueq0g2x.jpg')] text-slate-200">
        <div className=" relative  xl:w-2/3 flex flex-col justify-center items-start p-4 gap-8">
          <h1 className="xl:text-4xl text-4xl text-center ">We detect We protect</h1>
          <h1 className="xl:text-6xl text-4xl  max-sm:text-center">
            Securing your network infrastructure
          </h1>
          <p className="xl:text-3xl text-2xl text-center">As per your organization needs</p>
        </div>
        <div className="xl:w-2/5 flex justify-center items-center">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">Fortify Your Network - Initiate a Cyber Audit Now</h1>

      <p class="mt-4 text-gray-500">
        Embrace the shield of cybersecurity; your peace of mind, our command.
      </p>
    </div>

    <form
      action="#"
      onSubmit={formSubmissionHandler}
      method="POST"
      class="mx-auto mb-0 mt-8 max-w-md space-y-4"
      ref={formRef}
    >
      <div>
        <label for="name" class="sr-only">
          Name
        </label>

        <div class="relative">
          <input
            type="text"
            id="name"
            class="w-full rounded-lg text-black p-4 pe-12 text-sm shadow-sm"
            name="name"
            placeholder="Enter Name"
            required
          />
        </div>
      </div>

      <div>
        <label for="phone" class="sr-only">
          Phone Number
        </label>

        <div class="relative">
          <input
            type="tel"
            id="phone"
            class="w-full rounded-lg text-black p-4 pe-12 text-sm shadow-sm"
            name="phone"
            placeholder="Enter Phone Number"
            required
          />
        </div>
      </div>

      <div>
        <label for="email" class="sr-only">
          Email
        </label>

        <div class="relative">
          <input
            type="email"
            id="email"
            class="w-full rounded-lg text-black p-4 pe-12 text-sm shadow-sm"
            name="email"
            placeholder="Enter Email"
            required
          />
        </div>
      </div>

      <div class="flex items-center justify-center">
        <button
          type="submit"
          class="inline-block rounded-lg w-full bg-blue-500 px-20 py-3 text-sm font-medium text-white"
        >
          Sign in
        </button>
      </div>
    </form>
  </div>
</div>

      </section>
      <section className="flex  xl:flex-row flex-col px-16 py-16  pb-32 items-center  justify-between bg-blue-100 gap-16">
        <div className="">
          <img
           className="w-96"
            src="https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/services/gtpl-logo.png"
            alt=""
          />
        </div>
        <div className="flex flex-col text-center">
          <h1>
            “Network Audit was done in a single day.The team provided a strong
            back end support for implementing possible solutions”
          </h1>
          <p>– GTPL</p>
        </div>
      </section>
     
      <section className=" flex  flex-col px-16 py-16 justify-center min-h-screen gap-16 ">
      <h1 className="xl:text-6xl text-5xl text-center ">Why Choose Us?</h1>
      <p className="text-2xl text-center ">
      Cybersecurity Excellence in Every Byte
          </p>
        <div className="w-full grid xl:grid-cols-3 xl:grid-rows-2 grid-cols-1 grid-rows-1 p-4 gap-4 place-content-center place-items-center ">
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <img
              src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1709989815/images/gtbc92w1ziclsdncqrxe.png"
              className="h-52"
              alt=""
            />
            <h1 className="text-3xl text-center">Comprehensive System Checkup</h1>
            <p className="text-sm text-center">
            From web and mobile platforms to network infrastructure and source code, we conduct thorough assessments to ensure no vulnerability goes unnoticed.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <img
              src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1709989996/images/gcms5zrosiohvos8h7qz.png"
              className=" h-52"
              alt=""
            />
            <h1 className="text-3xl text-center">Risk Rating Scale</h1>
            <p className="text-sm text-center">
            Understand the severity of vulnerabilities with our reports featuring a clear risk rating scale, enabling informed decision-making for risk mitigation strategies.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <img
              src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1709989996/images/ferw1n4cz88jyllaqwts.png"
              className=" h-52"
              alt=""
            />
            <h1 className="text-3xl text-center">Post-Test Consultation</h1>
            <p className="text-sm text-center">
            Receive personalized consultation post-assessment, where our experts guide you through actionable steps for mitigating risks and strengthening your security posture.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <img
              src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1709989997/images/lndgmszsyciheiqjxn24.png"
              className=" h-52"
              alt=""
            />
            <h1 className="text-3xl text-center">Leading Security Experts</h1>
            <p className="text-sm text-center">
            Recognized as the premier firm in Ahmedabad's security landscape, we bring unmatched expertise to the table, ensuring your digital assets remain protected.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <img
              src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1710230411/images/s4erjmupypniukgwnrlg.png"
              className=" h-52"
              alt=""
            />
            <h1 className="text-3xl text-center">Proven Track Record</h1>
            <p className="text-sm text-center">
            With an outstanding history of delivering defensive cybersecurity solutions, we instill confidence in our ability to safeguard your business against threat
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center text-center">
            <img
              src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1710230411/images/brwf3azwf2b3z8r7c14x.png"
              className=" h-52"
              alt=""
            />
            <h1 className="text-3xl text-center">Specialized Penetration Testing</h1>
            <p className="text-sm text-center">
            Our team comprises penetration testers with specialized expertise in navigating the complex cyber threat landscape, offering tailored solutions for your unique challenges.
            </p>
          </div>
        </div>
      </section>
      <section className="flex  flex-col px-16 py-16 justify-center  gap-16  bg-blue-950 text-slate-100">
        {/* <h1 className="text-6xl text-center ">Tools Used </h1> */}
        <div class="flex overflow-hidden space-x-16 group">
          <div class="flex space-x-16 animate-loop-scroll group-hover:paused">
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1709188762/images/k2qpmgzdfh4xu430jw9c.png"
              class=" max-w-none h-20 sm:h-16"
              alt="Image 1"
            />
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1709188703/images/uigiurcab48n5tpiii9f.png"
              class="max-w-none h-20 sm:h-16"
              alt="Image 2"
            />
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1709188703/images/vawyva0ibnfnwkigngsb.png"
              class="max-w-none  h-20 sm:h-16"
              alt="Image 3"
            />
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1709188703/images/cufioqvg1jmuknnyycdu.png"
              class="max-w-none h-20 sm:h-16"
              alt="Image 4"
            />
            
            {/* <img
              loading="lazy"
              src="https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/5.png"
              class="max-w-none"
              alt="Image 5"
            />
            <img
              loading="lazy"
              src="https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/6.png"
              class="max-w-none"
              alt="Image 6"
            />
            <img
              loading="lazy"
              src="https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/7.png"
              class="max-w-none"
              alt="Image 7"
            />
            <img
              loading="lazy"
              src="https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/8.png"
              class="max-w-none"
              alt="Image 8"
            />
            <img
              loading="lazy"
              src="https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/9.png"
              class="max-w-none"
              alt="Image 9"
            />
            <img
              loading="lazy"
              src="https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/10.png"
              class="max-w-none"
              alt="Image 10"
            />
           
            <img
              loading="lazy"
              src=" https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/11.png"
              class="max-w-none"
              alt="Image 11"
            />
          
            <img
              loading="lazy"
              src="   https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/12.png"
              class="max-w-none"
              alt="Image 12"
            /> */}
           
          </div>
          <div
            class="flex xl:space-x-16 animate-loop-scroll group-hover:paused"
            aria-hidden="true"
          >
          <img
              loading="lazy"
              src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1709188762/images/k2qpmgzdfh4xu430jw9c.png"
              class="max-w-none h-20 sm:h-16"
              alt="Image 1"
            />
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1709188703/images/uigiurcab48n5tpiii9f.png"
              class="max-w-none h-20 sm:h-16" 
              alt="Image 2"
            />
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1709188703/images/vawyva0ibnfnwkigngsb.png"
              class="max-w-none  h-20 sm:h-16"
              alt="Image 3"
            />
            <img
              loading="lazy"
              src="https://res.cloudinary.com/dhuagtzvw/image/upload/v1709188703/images/cufioqvg1jmuknnyycdu.png"
              class="max-w-none h-20 sm:h-16"
              alt="Image 4"
            />
            
            {/* <img
              loading="lazy"
              src="https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/5.png"
              class="max-w-none"
              alt="Image 5"
            />
            <img
              loading="lazy"
              src="https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/6.png"
              class="max-w-none"
              alt="Image 6"
            />
            <img
              loading="lazy"
              src="https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/7.png"
              class="max-w-none"
              alt="Image 7"
            />
            <img
              loading="lazy"
              src="https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/8.png"
              class="max-w-none"
              alt="Image 8"
            />
            <img
              loading="lazy"
              src="https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/9.png"
              class="max-w-none"
              alt="Image 9"
            />
            <img
              loading="lazy"
              src="https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/10.png"
              class="max-w-none"
              alt="Image 10"
            />
           
            <img
              loading="lazy"
              src=" https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/11.png"
              class="max-w-none"
              alt="Image 11"
            />
          
            <img
              loading="lazy"
              src="   https://www.sharkcybertech.com/wp-content/themes/sharkcybertech/assets/images/partners/12.png"
              class="max-w-none"
              alt="Image 12"
            /> */}
          </div>
        </div>
      </section>
      <section className="flex flex-col px-16 py-16 justify-center items-center gap-16 w-full bg-black text-blue-50">
        <h1 className="text-4xl text-center">Gartners reviews</h1>
        <div className="flex xl:flex-row flex-col gap-8 xl:flex-wrap justify-center items-center">
          <div className="flex flex-col gap-2  xl:w-1/3 border-lime-600 border-2">
            <h1 className="text-3xl text-center text-nowrap">
            Increased Spending on Security:
            </h1>
            <p className="text-sm text-center">
            End-user spending on security and risk management in India is forecast to grow by 8.3% in 2023, reaching a total of $2.65 billion. This growth is attributed to the rise in digitalization, cloud applications, and remote work, which expose organizations to greater security risks
            </p>
          </div>
          <div className="flex  flex-col gap-2 xl:w-1/3  border-lime-600 border-2">
            <h1 className="text-3xl text-center">
            Security Services Priority:
            </h1>
            <p className="text-sm text-center">
            Security services are expected to represent 40% of the overall end-user spending on security and risk management products and services in 2023. Many organizations in India engage security consulting and IT outsourcing companies due to a lack of in-house security capabilitie
            </p>
          </div>
          <div className="flex flex-col gap-2 xl:w-1/3 border-lime-600 border-2">
            <h1 className="text-3xl text-center text-wrap">
            Infrastructure Protection and Cloud Security:
            </h1>
            <p className="text-sm text-center">
            Spending on infrastructure protection will surpass that on network security equipment due to the increase in remote workforce and cloud applications adoption. Cloud security end-user spending in India is forecasted to experience the highest growth rate among all segments in 2023,
            </p>
          </div>
          <div className="flex flex-col gap-2 xl:w-1/3 border-lime-600 border-2">
            <h1 className="text-3xl text-center">
            Challenging Security Myths:
            </h1>
            <p className="text-sm text-center">
            Cybersecurity can generate significant value for enterprises, but security leaders need to challenge the myths that obscure its true value. Gartner suggests adopting a “Minimum Effective” mindset to maximize the impact of cybersecurity for the business.
            </p>
          </div>
        </div>
      </section>
      <section className="flex  flex-col px-16 py-16 justify-center items-center gap-8">
        <h1 className="text-4xl text-center">Get In Touch With Us Right Now!</h1>
        <a href="https://wa.me/+919909156984" target="_blank">
          <button
            type="button"
            class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2  "
          >
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
            <h1 className="p-1">Message Us On Whatsapp</h1>
          </button>
        </a>
        <h2 className="text-3xl">Shark Cybertech</h2>
        <p className="text-center">
          {" "}
          B Wing , 4007 - 4008, The Retail Park, TRP Mall
          Rajyansh City, On Main BRTS Road, Ambli - Bopal Rd, Central Bopal,
          Bopal, Ahmedabad, Gujarat 380058
        </p>
        <a href="mailto:leadssharkcybertech@gmail.com" target="_blank">
          <button
            type="button"
            class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
          >
            <svg
              className=""
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
            </svg>
            <h1 className="p-1">Email US</h1>
          </button>
        </a>
      </section>
      <div class="fixed bottom-8 right-8 text-emerald-800 bg-lime-100">
        <a href="https://wa.me/+919909156984" target="_blank">
          <svg
            className=" "
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
          </svg>
        </a>
      </div>
    </>
  );
};

export default MainPage;
