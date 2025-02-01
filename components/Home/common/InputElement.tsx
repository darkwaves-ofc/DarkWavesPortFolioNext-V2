"use client"

import type React from "react"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core"

interface InputElementProps {
  id: string
  name: string
  icon: IconDefinition
  rows?: number
}

export default function InputElement({ id, name, icon, rows = 1 }: InputElementProps) {
  const [value, setValue] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValue(e.target.value)
  }

  const InputComponent = rows === 1 ? "input" : "textarea"

  return (
    <div className="relative">
      <InputComponent
        id={id}
        name={id}
        value={value}
        onChange={handleInputChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`w-full bg-gray-100 border-2 rounded-lg py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary transition-colors duration-300 ${
          isFocused || value ? "border-primary" : "border-gray-300"
        }`}
        placeholder={name}
        rows={rows}
      />
      <FontAwesomeIcon
        icon={icon}
        className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 ${
          isFocused || value ? "text-primary" : ""
        }`}
      />
    </div>
  )
}

