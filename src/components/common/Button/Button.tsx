import clsx from "clsx";
import style from "./Button.module.css";

interface Props {
  text: string;
  color: string;
  size?: string;
}

export default function Button({ text, color, size }: Props) {
  return (
    <button
      className={clsx(
        style.button,
        color === "white" && style.whiteBtn,
        color === "black" && style.blackBtn,
        size === "big" && style.bigBtn,
        size === "small" && style.smallBtn
      )}
    >
      {text}
    </button>
  );
}
