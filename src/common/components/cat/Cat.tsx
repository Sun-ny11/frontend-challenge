import { ComponentPropsWithoutRef } from "react";
import s from "./Cat.module.css";

export const Cat = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"img">) => {
  return (
    <div className={s.main}>
      <img {...rest} className={s.img + " " + className} />
    </div>
  );
};
