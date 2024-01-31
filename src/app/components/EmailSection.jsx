"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className=" my-12 md:my-12 py-24 gap-4 relative w-full"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg top-1/2 -left-4 transform -translate-x-1/2 -translate-1/2 absolute"></div>
      <div className="z-10 w-full">
        <h5 className="text-xl font-bold text-white my-2 text-center">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 w-full text-center">
          {" "}
          I&apos;m actively exploring new opportunities and welcome any inquiries. 
          Whether you have questions or just want to connect, feel free to reach out,
          I&apos;ll try my best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2 justify-center">
          <Link href="https://github.com/ncyapa">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/navodh-chathuranga-38a467213/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="mailto:navodhchathuranga@gmail.com?cc=ncyapa119@gmail.com">
            <Image src={EmailIcon} alt="Email Icon" />
          </Link>
        </div>
      </div>

    </section>
  );
};

export default EmailSection;
