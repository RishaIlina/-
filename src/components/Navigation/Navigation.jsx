import Link from 'next/link'

export default function Navigation() {
  return (
    <ul className="menu__list">
      <li className="menu__list_item">
        <Link legacyBehavior href="/About">
          <a className="menu__list_link">Про нас</a>
        </Link>
      </li>
      <li className="menu__list_item">
        <Link legacyBehavior href="/Catalog">
          <a className="menu__list_link">Каталог</a>
        </Link>
      </li>
      <li className="menu__list_item">
        <Link legacyBehavior href="/Reviews">
          <a className="menu__list_link">Отзывы</a>
        </Link>
      </li>
      <li className="menu__list_item">
        <Link legacyBehavior href="/Courses">
          <a className="menu__list_link">Курсы</a>
        </Link>
      </li>
    </ul>
  );
}
