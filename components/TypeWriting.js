import React, { useState, useEffect } from "react";
const words = [
  "Mistry Pavan Kumar",
  "Dantu Sai Kamal",
  "We are Developers.",
];

const TypeWriting = () => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (index === words.length) return;

    if (
      subIndex === words[index].length + 1 &&
      index !== words.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, 200);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);

    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <h1 className="text-2xl md:text-3xl mb-4 text-white font-semibold">
        {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
      </h1>
    </>
  );
};

export default TypeWriting;
