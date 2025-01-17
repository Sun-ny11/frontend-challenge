import { ComponentPropsWithoutRef } from "react";
import s from "./Card.module.css";
import clsx from "clsx";

export const Card = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"img">) => {
  return (
    <div className={s.main}>
      <img {...rest} className={clsx(s.img, className)} />
    </div>
  );
};
