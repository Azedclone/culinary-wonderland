"use client";
import Image from "next/image";
import "./login.css";
import Link from "next/link";
import { FormEvent, useState } from "react";
import axios from "axios";
import { error } from "console";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    axios
      .post("")
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.success);
        } else {
          console.log("error");
        }
      })
      .catch((error) => console.log(error));
  };

  const handleChange = (event: any) => {
    setEmail(event.target.value);
  };

  return (
    <div className="relative">
      <a href="/" className="close-btn absolute">
        X
      </a>
      <main
        className="flex flex-col items-center justify-center h-screen"
        id="login"
      >
        <Image src="/images/Logo.png" width={180} height={187} alt="logo" />
        <div>
          <span className="text-2xl font-bold">
            Welcome to Culinary Wonderland
          </span>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              className="block w-full"
              onChange={handleChange}
            />
            <button type="submit">Continue</button>
          </form>
          <p className="policy">
            By continuing, you agree to the Terms of Service and acknowledge our
            Privacy Policy.
          </p>
        </div>
        <div className="social">
          <p>Or, Continue with</p>
          <ul className="social-btn">
            <li>
              <Image
                src="/images/social/google.png"
                width={48}
                height={48}
                alt="social-btn"
              />
            </li>
            <li>
              <Image
                src="/images/social/apple.png"
                width={48}
                height={48}
                alt="social-btn"
              />
            </li>
            <li>
              <Image
                src="/images/social/fb.png"
                width={48}
                height={48}
                alt="social-btn"
              />
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
