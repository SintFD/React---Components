import clsx from "clsx";
import style from "./Button.module.css";

interface Props {
  text: string;
  color: string;
}

export default function Button({ text, color }: Props) {
  return (
    <button
      className={clsx(
        style.button,
        color === "white" && style.whiteBtn,
        color === "black" && style.blackBtn
      )}
    >
      {text}
    </button>
  );
}
