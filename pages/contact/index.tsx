import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import WorkSlider from "../../components/WorkSlider";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import { FaArrowRight } from "react-icons/fa";
import { fadeIn } from "@/utils";
import { FormEvent, useRef, useState } from "react";
import { ResponseData } from "@/types";
import EmailSubmission from "@/components/EmailSubmission";

const Contact = () => {
  // Live Form Handling
  const [userName, setUserName] = useState("");
  const [email, seteMail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();
  const formRef: any = useRef(null);

  const [errors, setErrors]: any = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
    submit: false,
  });

  //email modal state
  const [isOpen, setIsOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState("");

  //declare the REGEX object
  const regex: any = {
    name: /^\d*[a-zA-Z][a-zA-Z0-9\s]*$/,
    email: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/,
    subject: /^\d*[a-zA-Z][a-zA-Z0-9\s]*$/,
    message: /(.*)/,
  };

  const handleBlur = (e: any) => {
    //clone the previuos error state
    const newErrors = { ...errors };
    //extract the name and value
    const { name, value } = e;
    //show error messages & disable submit
    newErrors[name] = !value.match(regex[name]);
    newErrors.submit = !isFormValid();
    setErrors(newErrors);
  };

  const isFormValid = () => {
    //check for regex
    const formData = new FormData(formRef.current);
    const formValues = Object.keys(errors)
      .filter((key) => key != "submit")
      .map((key) => {
        let value = formData.get(key);

        if (value?.toString().match(regex[key])) return value;
      });
    let isUndefined = formValues.includes(undefined);
    return !isUndefined;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = isFormValid();
    if (!isValid) return;
    const formData = new FormData(e.currentTarget);
    const formValues = Object.keys(errors)
      .filter((key) => key != "submit")
      .map((key) => formData.get(key));

    //send Email
    const [name, email, subject, message] = formValues;
    const mailResult: ResponseData = await sendMail(
      name?.toString(),
      email?.toString(),
      subject?.toString(),
      message?.toString()
    );
    // console.log(mailResult);
    if (mailResult.statusMessage == "success") {
      setModalStatus("success");
      sendAutoreply(name?.toString(), email?.toString());
    } else {
      setModalStatus("failed");
    }
    setIsOpen(true);
  };

  const sendMail = async (
    name?: string,
    email?: string,
    subject?: string,
    message?: string
  ): Promise<ResponseData> => {
    const emailParams = { name, email, subject, message };
    const result = await fetch("api/send-mail", {
      method: "POST",
      body: JSON.stringify(emailParams),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result.json() as Promise<ResponseData>;
  };

  const sendAutoreply = async (
    name?: string,
    email?: string
  ): Promise<ResponseData> => {
    const emailParams = { name, email };
    const result = await fetch("api/send-autoreply", {
      method: "POST",
      body: JSON.stringify(emailParams),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return result.json() as Promise<ResponseData>;
  };

  return (
    <section className="w-full h-full">
      <motion.div
        className="flex flex-col justify-start items-center w-full h-[calc(100vh-120px-70px)] mt-[130px] mx-auto px-10 lg:px-2 lg:max-w-[50%] overflow-scroll sm:overflow-auto  py-5"
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        {/* Text */}
        <div className="font-bold text-[32px] ">
          <h1>
            Let&apos;s <span className="text-accent">connect.</span>
          </h1>
        </div>

        {/* form */}
        <form
          ref={formRef}
          action=""
          autoComplete="off"
          className="flex flex-col bg-transparent gap-6 w-full mt-5 z-10 "
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex gap-x-6">
            <div className="flex flex-col flex-1">
              <input
                type="text"
                name="name"
                id="name"
                //onFocus={() => this.removeAttribute('readonly')}
                className={`input`}
                placeholder="name"
                // autoComplete="off"
                autoComplete="new-password"
                onBlur={(e) => handleBlur(e.currentTarget)}
              />
              {errors.name && (
                <span className="text-red-500">
                  name is required and should be only letters, spaces and
                  numbers
                </span>
              )}
            </div>
            <div className="flex flex-col xb flex-1">
              <input
                // type="email"
                name="email"
                // id="email"
                className="input"
                // autoComplete="new-password"
                placeholder="email"
                onBlur={(e) => handleBlur(e.currentTarget)}
              />
              {errors.email && (
                <span className="text-red-500">
                  please enter a valid email address
                </span>
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <input
              type="text"
              name="subject"
              id="subject"
              autoComplete="off"
              className="input"
              placeholder="subject"
              onBlur={(e) => handleBlur(e.currentTarget)}
            />
            {errors.subject && (
              <span className="text-red-500">
                subject is required and should be only letters, spaces and
                numbers
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <textarea
              name="message"
              id="message"
              className="textarea"
              autoComplete="off"
              placeholder="message"
              onBlur={(e) => handleBlur(e.currentTarget)}
            ></textarea>
            {errors.message && (
              <span className="text-red-500">Error in message format</span>
            )}
          </div>
          <button
            type="submit"
            className={`rounded-full w-[150px] h-[40px] border flex justify-center items-center group transition duration-300 overflow-hidden hover:border-accent ${
              errors.submit && " bg-gray-500 pointer-events-none "
            }`}
            disabled={errors.submit}
          >
            <span
              className={`group-hover:-translate-y-[120%] group-hover:opacity-0 transition duration-300 `}
            >
              Let&apos;s talk
            </span>
            <FaArrowRight
              className={`-translate-y-[120%] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-300 absolute `}
            />
          </button>
        </form>
      </motion.div>
      {isOpen && (
        <EmailSubmission
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          status={modalStatus}
        />
      )}
    </section>
  );
};

export default Contact;
