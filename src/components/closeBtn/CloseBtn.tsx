import clsx from "clsx";
import style from "./CloseBtn.module.css";

export default function CloseBtn({ paragraph }: { paragraph?: string }) {
  return (
    <button
      className={clsx(
        style.defaultButton,
        !paragraph && style.newPositionButton
      )}
    >
      X
    </button>
  );
}
