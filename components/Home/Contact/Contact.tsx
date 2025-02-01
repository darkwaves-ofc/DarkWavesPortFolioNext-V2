'use client'

import React from "react";
import InputElement from "@/components/Home/common/InputElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faAddressBook,
  faEnvelope,
  faMessage,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="contact-heading mb-8">
            <h1 className="font-bold text-3xl md:text-4xl leading-tight text-gray-800">
              Let&apos;s work together<span className="text-primary">.</span>
            </h1>
          </div>
          <form className="contact-form space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputElement id="fName" name="First Name" icon={faAddressCard} />
              <InputElement id="lName" name="Last Name" icon={faAddressBook} />
            </div>
            <InputElement id="email" name="Email" icon={faEnvelope} />
            <InputElement id="message" name="Message" icon={faMessage} rows={4} />
            <div className="flex flex-col sm:flex-row gap-4">
              <button type="button" className="btn upload bg-gray-200 hover:bg-gray-300 text-gray-700 flex-1 py-3 px-6 rounded-lg transition-colors duration-300 relative overflow-hidden">
                <FontAwesomeIcon icon={faPaperclip} className="mr-2" />
                <span>Add attachment</span>
                <input type="file" name="attachment" className="absolute inset-0 opacity-0 cursor-pointer" />
              </button>
              <button type="submit" className="btn bg-primary hover:bg-primary-dark text-white flex-1 py-3 px-6 rounded-lg transition-colors duration-300">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
