import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Enquire = () => {
  const form = useRef();
  const { id } = useParams();
  const [name, setName] = useState(id);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  document.title = "Enquire | Contact";

  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    setName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm("service_d0pi0mb", "template_gcjdhte", form.current, {
        publicKey: "GMFCMlefK3Tekxj9A",
      })
      .then(
        () => {
          toast.success("Message Sent!");
        },
        (error) => {
          toast.warning("Error message not sent!");
        }
      );
  };

  return (
    <div className="text-gray-800 flex flex-col justify-between sm:block h-screen w-full bg-gradient-to-br from-white to-gray-100 overflow-y-auto">
      <ToastContainer />
      <nav className="w-full h-[8vh] flex items-center justify-between mt-4 sm:px-5 pt-2">
        <div className="flex items-center gap-1 sm:gap-3">
          <span title="Back">
            <svg
              onClick={() => navigate(-1)}
              className="h-10 w-10 cursor-pointer text-gray-700 hover:text-[#6556CD]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
          </span>
          <Link title="Home" to="/">
            <svg
              className="h-6 w-6 cursor-pointer text-gray-700 hover:text-[#6556CD]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z"></path>
            </svg>
          </Link>
        </div>
      </nav>

      <div className="px-[15vw] sm:px-[7vw]">
        <h1 className="text-[8vw] mt-[8vw] sm:mt-0 sm:text-[3vw] font-bold text-[#6556CD] tracking-wider">
          Enquire Now
        </h1>
        <p className="text-[3vw] sm:text-[1.2vw] font-semibold sm:uppercase text-gray-700 w-full sm:w-[82%] sm:leading-[1.5vw]">
          Let's connect! We’re here to help and would love to hear from you.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row mt-[2vw]">
        <div className="sm:w-[50%] mt-[5vw] sm:mt-0 w-full flex flex-col">
          

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex mx-auto flex-col w-[70%] gap-[5vw] sm:gap-[2vw]"
          >
            {[
              { label: "Product : id", value: name, onChange: setName, name: "from_name", type: "text" , dis : true},
              { label: "Email", value: email, onChange: setEmail, name: "from_email", type: "email", dis : false },
            ].map(({ label, value, onChange, name, type, dis }) => (
              <div key={name} className="relative">
                <label className="absolute px-2 bg-white -top-[1.8vw] sm:-top-[0.8vw] left-[5vw] sm:left-[2vw] block text-gray-600 text-[3.5vw] sm:text-[1.2vw]">
                  {label}
                </label>
                <input 
                  disabled={dis}
                  type={type}
                  name={name}
                  value={value}
                  onChange={(e) => onChange(e.target.value)}
                  className="h-[10vw] sm:h-[3vw] w-full border-2 rounded-lg border-gray-400 pt-3 pb-2 bg-transparent outline-none text-gray-800 px-[1.5vw]"
                />
              </div>
            ))}

            <div className="relative">
              <label className="absolute px-2 bg-white -top-[1.8vw] sm:-top-[0.8vw] left-[5vw] sm:left-[2vw] block text-gray-600 text-[3.7vw] sm:text-[1.2vw]">
                Message
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="min-h-[30vw] sm:min-h-[10vw] w-full border-2 rounded-lg border-gray-400 pt-3 pb-1 bg-transparent outline-none text-gray-800 px-[1.5vw]"
              />
            </div>

            <div className="w-full -mt-[3vw] sm:-mt-[1.5vw] flex justify-end">
              <input
                type="submit"
                value="Send"
                className="bg-[#6556CD] hover:bg-white hover:text-[#6556CD] border border-[#6556CD] sm:text-[1.3vw] duration-300 h-[9vw] w-[22vw] sm:h-[3vw] sm:w-[15vw] text-white rounded font-semibold tracking-wider cursor-pointer"
              />
            </div>
          </form>
        </div>

        <div className="w-[90%] mx-auto mt-[8vw] sm:mt-21 sm:mx-0 h-[55vw] sm:h-[35vw] flex items-end overflow-hidden sm:w-[50%] h-full">
          <img
            className="sm:h-[33vw] sm:mt-[5vw] sm:w-[45vw]"
            src="/contact.png"
            alt="Contact"
          />
        </div>
      </div>
    </div>
  );
};

export default Enquire;
