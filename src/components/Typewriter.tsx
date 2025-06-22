import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";

interface TypewriterProps {
  text: string;
  speed?: number;
  onChange?: (displayed: string) => void;
  onDone?: () => void;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 25, onChange, onDone }) => {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    let cancelled = false;

    const type = () => {
      if (cancelled || i >= text.length) {
        if (onDone) onDone();
        return;
      }

      const next = text.slice(0, i + 1);
      setDisplayed(next);
      if (onChange) onChange(next);
      i++;
      setTimeout(type, speed);
    };

    setDisplayed("");
    type();

    return () => {
      cancelled = true;
    };
  }, [text, speed, onChange, onDone]);

  return <Markdown>{displayed}</Markdown>;
};

export default Typewriter;
