import { ReactNode, useEffect, useRef } from "react";
import { Header } from "../header/Header";
import s from "./Layout.module.css";
import clsx from "clsx";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      const scrollbarWidth = ref.current.offsetWidth - ref.current.clientWidth;
      ref.current.style.paddingLeft = `${scrollbarWidth}px`;
    }
  });

  return (
    <>
      <Header />
      <main ref={ref} className={s.scroll}>
        <div className={clsx("container", s.content)}>{children}</div>
      </main>
    </>
  );
};
