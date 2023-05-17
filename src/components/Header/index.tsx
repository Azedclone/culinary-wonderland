import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import "./header.css";
import Link from "next/link";

function Search() {
  return (
    <>
      <form className="search-form relative">
        <input type="text" placeholder="Search Chefs, Recipes and More" />
        <button
          type="submit"
          title="submit-search"
          className="search-btn absolute"
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </>
  );
}

function Authentication() {
  return (
    <div className="auth-container">
      <Link href="/login">
        <span className="login pe-2">Login</span>
      </Link>
      <FontAwesomeIcon icon={faUser} className="user-icon inline-block" />
      <span className="signup pl-8">Sign up for free</span>
    </div>
  );
}

function Menu() {
  const menuItems = ["chefs", "recipes", "stories", "places", "videos"];

  return (
    <ul className="flex gap-10 menu-container">
      {menuItems.map((item) => (
        <li key={item} className="menu-item uppercase">
          {item}
        </li>
      ))}
    </ul>
  );
}

export function Header() {
  return (
    <header id="header" className="flex flex-col">
      <div className="top-nav flex justify-between items-center">
        <span className="logo">
          culinary <br /> wonderland
        </span>
        <Search />
        <Authentication />
      </div>
      <hr className="divider" />
      <Menu />
    </header>
  );
}
