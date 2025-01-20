import { ReactNode, useEffect, useRef } from "react";
import { Header } from "../header/Header";
import s from "./Layout.module.css";
import { Nullable } from "../../types";
import { ToastContainer } from "react-toastify";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  const ref = useRef<Nullable<HTMLElement>>(null);

  useEffect(() => {
    if (ref.current) {
      const scrollbarWidth = ref.current.offsetWidth - ref.current.clientWidth;
      ref.current.style.paddingLeft = `${scrollbarWidth}px`;
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <Header />
      <main ref={ref} className={s.scroll}>
        {children}
      </main>
    </>
  );
};
