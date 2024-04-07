"use client"
import React, { useEffect } from "react";

interface InputElementProps {
  id: string;
  value?: string;
  handleInputChange?: (id: string, value: string) => void;
  rows?: number;
  name: string;
  children: React.ReactNode;
}

export default function InputElement({
  id,
  value,
  handleInputChange,
  rows = 1,
  name,
  children,
}: InputElementProps) {
  useEffect(() => {
    const element = document.querySelector<HTMLElement>(`#${id}-input-wrap`);
    const inputElement = document.querySelector<HTMLInputElement>(
      `#${id}-input-wrap-input`
    );
    if (element && value) element.classList.add("not-empty");
    if (inputElement && !(document.activeElement === inputElement) && !value)
      element?.classList.remove("not-empty");
  }, [value, id]);

  return (
    <div id={`${id}-input-wrap`} className="input-wrap grid grid-cols-2 gap-2 relative">
      {rows === 1 ? (
        <input
          id={`${id}-input-wrap-input`}
          type="text"
          className="contact-input col-span-2 w-11/12 p-4 bg-input-bg border border-transparent rounded-lg outline-none transition-colors focus:bg-bg-color focus:border-light-main-color focus:ring-2 focus:ring-light-main-color relative"
          value={value}
          onChange={(e) => handleInputChange ? handleInputChange(id, e.target.value) : ""}
          onFocus={(e) => {
            const parent = e.target.parentNode as HTMLElement;
            parent.classList.add("focus", "not-empty");
          }}
          onBlur={(e) => {
            const parent = e.target.parentNode as HTMLElement;
            parent.classList.remove("focus");
            if (!value) parent.classList.remove("not-empty");
          }}
        />
      ) : (
        <textarea
          id={`${id}-input-wrap`}
          className="contact-input col-span-2 w-11/12 p-4 bg-input-bg border border-transparent rounded-lg outline-none resize-none transition-colors focus:bg-bg-color focus:border-light-main-color focus:ring-2 focus:ring-light-main-color relative"
          rows={rows}
          value={value}
          onChange={(e) => handleInputChange ? handleInputChange(id, e.target.value) : ""}
          onFocus={(e) => {
            const parent = e.target.parentNode as HTMLElement;
            parent.classList.add("focus", "not-empty");
          }}
          onBlur={(e) => {
            const parent = e.target.parentNode as HTMLElement;
            parent.classList.remove("focus");
            if (!value) parent.classList.remove("not-empty");
          }}
        />
      )}
      <label
        htmlFor={`${id}-input-wrap-input`}
        className="col-start-1 col-span-2 absolute top-1/2 transform -translate-y-1/2 left-4 text-light-text-color pointer-events-none transition-transform"
      >
        {name}
      </label>
      {children}
    </div>
  );
}
