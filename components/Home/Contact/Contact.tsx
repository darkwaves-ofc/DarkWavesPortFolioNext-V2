import React from "react";
import InputElement from "@/components/Home/common/InputElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faAddressCard,
  faEnvelope,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section className="min-h-[770px] grid grid-cols-1 grid-rows-1">
      <div className="container mx-auto grid grid-cols-1 grid-rows-1">
        <div className="left max-w-[80rem] mx-auto py-[65px] px-[1.5rem] grid grid-cols-2 gap-4 items-center relative z-30">
          <div className="form-wrapper w-full">
            <div className="contact-heading mb-5">
              <h1 className="font-bold text-4xl leading-none mb-5">
                Let&apos;s work together<span className="text-primary">.</span>
              </h1>
            </div>
            <form className="contact-form grid grid-cols-2 gap-x-8 gap-y-4 mt-10">
              <InputElement id={"fName"} rows={1} name={"FirstName"}>
                <FontAwesomeIcon className="icon absolute right-4 top-1/2 transform -translate-y-1/2" icon={faAddressCard} />
              </InputElement>
              <InputElement id={"lName"} rows={1} name={"LastName"}>
                <FontAwesomeIcon className="icon absolute right-4 top-1/2 transform -translate-y-1/2" icon={faAddressBook} />
              </InputElement>
              <InputElement id={"email"} rows={1} name={"Email"}>
                <FontAwesomeIcon className="icon absolute right-4 top-1/2 transform -translate-y-1/2" icon={faEnvelope} />
              </InputElement>
              <InputElement id={"message"} rows={4} name={"Message"}>
                <FontAwesomeIcon className="icon absolute right-4 top-1/2 transform -translate-y-1/2" icon={faMessage} />
              </InputElement>
              <div className="contact-buttons col-span-2 grid grid-cols-2 gap-4 mt-4">
                <button type="submit" className="btn upload bg-inputBg relative">
                  <span className="text-lightTextColor">
                    <i className="fa-solid fa-paperclip"></i> Add attachment
                  </span>
                  <input type="file" name="attachment" className="absolute w-full h-full top-0 left-0 bg-transparent cursor-pointer opacity-0" />
                </button>
                <input type="submit" value="Send message" className="btn bg-inputBg" />
              </div>
            </form>
          </div>
        </div>
        <div className="right hidden"></div>
      </div>
    </section>
  );
}
