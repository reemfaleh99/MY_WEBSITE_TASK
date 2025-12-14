import ArrowDown from "./ArrowDown";
import Title from "./Title";
import { AiOutlineMessage } from "react-icons/ai";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Overlay from "./Overlay";

import React, { useRef } from "react";
import { sendForm } from "@emailjs/browser";
const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".contact", {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      scrollTrigger: {
        trigger: ".contact",
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    sendForm(
      "service_wpffnrg", // من EmailJS
      "template_gl3kgy7", // من EmailJS
      form.current,
      "Jb6zncwAFM-ewEtO6" // من EmailJS
    )
      .then((result) => {
        console.log(result.text);
        alert("تم إرسال الرسالة!");
        form.current.reset(); // لمسح الحقول بعد الإرسال
      })
      .catch((error) => {
        console.log(error.text);
        alert("حدث خطأ، حاول مرة أخرى" + JSON.stringify(error));
      });
  };
  return (
    <div className="w-full h-screen relative font-poppins text-white">
      <Overlay />
      {/* mouse and arrow */}
      <div className="hidden xl:block">
        <ArrowDown />
      </div>
      <div className="absolute top-[40%] xl:top-[55%] transform -translate-y-[40%] left-0 w-full h-full flex flex-col items-center justify-center">
        <Title title="contact" desc="I'm currently available for work" />
        <h4 className="mt-10 text-3xl border-4 capitalize text-second border-second py-3 px-10 rounded-tl-4xl rounded-br-4xl mb-6">
          Send me a message
        </h4>
        <div className="my-10 w-full md:w-2/3">
          {/* form for message */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className=" w-full p-6 rounded-xl flex flex-col items-center gap-6"
          >
            {/* forms for name and e-mail */}
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="flex flex-col w-full contact">
                <label htmlFor="name" className="text-sm text-second mb-1">
                  Your Name*
                </label>
                <input
                  required
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className="focus:outline-0 border-b-2 border-second w-full p-2 placeholder:text-white text-white focus:bg-transparent"
                />
              </div>
              {/* email */}
              <div className="flex flex-col w-full contact">
                <label htmlFor="email" className="text-sm text-second mb-1">
                  Your Email*
                </label>
                <input
                  required
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="focus:outline-0 border-b-2 border-second w-full p-2  placeholder:text-white text-white focus:bg-transparent"
                />
              </div>
            </div>
            {/* message */}
            <div className="flex flex-col w-full contact">
              <label htmlFor="message" className="text-sm text-second mb-1">
                Message*
              </label>
              <input
                required
                id="message"
                name="message"
                placeholder="Write your message..."
                className="focus:outline-0 border-b-2 border-second w-full p-3 text-white focus:bg-transparent placeholder:text-white"
              />
            </div>
            {/* button */}
            <button
              type="submit"
              className="contact flex items-center gap-3 w-fit bg-second text-black py-3 px-6 rounded-full cursor-pointer"
            >
              Send Message <AiOutlineMessage className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  // return (
  //   <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
  //     <input
  //       type="text"
  //       name="name"
  //       placeholder="الاسم"
  //       className="relative z-10 p-2 border rounded w-full"
  //     />{" "}
  //     <input
  //       type="text"
  //       name="email"
  //       placeholder="email"
  //       className="relative z-10 p-2 border rounded w-full"
  //     />{" "}
  //     <textarea name="message" placeholder="الرسالة" required />
  //     <button type="submit">إرسال</button>
  //   </form>
  // );
};

export default Contact;
