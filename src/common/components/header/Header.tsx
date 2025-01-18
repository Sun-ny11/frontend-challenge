import { ComponentPropsWithoutRef } from "react";
import s from "./Header.module.css";
import clsx from "clsx";

export const Header = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"header">) => {
  return (
    <header {...rest} className={clsx(s.main, className)}>
      <nav className={clsx("container", s.nav)}>
        <ul className={s.navList}>
          <li>
            <a className={s.navBtn} href="#">
              Все котики
            </a>
          </li>
          <li>
            <a className={s.navBtn} href="#">
              Любимые котики
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
