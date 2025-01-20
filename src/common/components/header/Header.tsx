import { ComponentPropsWithoutRef } from "react";
import s from "./Header.module.css";
import clsx from "clsx";
import { NavLink } from "react-router";
import { Path } from "../../enums/enums";

export const Header = ({
  className,
  ...rest
}: ComponentPropsWithoutRef<"header">) => {
  return (
    <header {...rest} className={clsx(s.main, className)}>
      <nav className={clsx("container", s.nav)}>
        <ul className={s.navList}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navBtn} ${s.active}` : s.navBtn
              }
              to={Path.Home}
              end
            >
              Все котики
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `${s.navBtn} ${s.active}` : s.navBtn
              }
              to={Path.Favorite}
            >
              Любимые котики
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
