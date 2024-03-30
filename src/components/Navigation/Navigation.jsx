import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

/* пункты меню в шапке */
const navItems = [
  { name: "Главная", path: "/" },
  { name: "Про нас", path: "/About" },
  { name: "Каталог", path: "/Catalog" },
  { name: "Отзывы", path: "/Reviews" },
  { name: "Курсы", path: "/Courses" },
  { name: "Избранное", path: "/Favourites" },
];

const Navigation = () => {
  // состояние для активного пункта меню
  const [activeLink, setActiveLink] = useState("");

  const router = useRouter();

  // клик по активному пункту меню
  const onClickHandler = (path) => {
    if (path !== activeLink) {
      router.push(path);
      setActiveLink(path);
    }
  };

  return (
    <ul className="menu__list">
      {navItems.map((item) => (
        <li key={item.path} className="menu__list_item">
          <Link legacyBehavior href={item.path}>
            <a
              className={
                item.path === router.pathname
                  ? "menu__list_link active"
                  : "menu__list_link"
              }
              onClick={() => onClickHandler(item.path)}
            >
              {item.name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
