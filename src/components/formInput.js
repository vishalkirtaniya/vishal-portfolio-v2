"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const formInput = ({
  // formType = "",
  labelText = "",
  inputType = "text",
  width = "200px",
  height = "60px",
}) => {
  const [label, setLabel] = useState(labelText);
  const [type, setType] = useState(inputType);
  // const [form, setForm] = useState(formType);

  const inputRef = useRef(null);
  const labelRef = useRef(null);
  const formRef = useRef(null);
  useEffect(() => {
    const input = inputRef.current;
    const labelElement = labelRef.current;

    const handleFocus = () => {
      gsap.to(labelElement, {
        y: -25,
        x: -6,
        scale: 0.7,
        duration: 0.2,
        ease: "power1.in",
      });
    };
    const handleBlur = () => {
      if (input.value === "") {
        gsap.to(labelElement, {
          y: 0,
          x: 0,
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    input.addEventListener("focus", handleFocus);
    input.addEventListener("blur", handleBlur);

    return () => {
      input.removeEventListener("focus", handleFocus);
      input.removeEventListener("blur", handleBlur);
    };
  }, []);

  return (
    <div className="relative " style={{ width, height }}>
      <label ref={labelRef} className="h-full flex items-center absolute ">
        {label}
      </label>
      <input
        ref={inputRef}
        className="absolute h-full w-full outline-none border-b-2 border-b-bgwhite bg-transparent z-10"
        type={type}
        spellCheck="false"
      />
    </div>
  );
};

export default formInput;
