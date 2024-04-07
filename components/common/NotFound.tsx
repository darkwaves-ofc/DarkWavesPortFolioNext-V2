import React from "react";
import Image from "next/image";
import errorimage from "./404/404.svg";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="not-found-container max-w-2xl flex items-center justify-center mx-auto flex-row">
      <div className="flex flex-col justify-center items-center p-5">
        <h1 className="text-xl font-bold text-center">404 - Not Found</h1>
        <p className="mb-4 text-center">Oops! The page you are looking for does not exist.</p>
        <Link href={"/"}>Return Home</Link>
      </div>
      <div className="flex flex-col justify-center items-center p-5">
        <Image alt="notfound" src={errorimage} width={500} height={500} />
      </div>
    </div>
  );
}
