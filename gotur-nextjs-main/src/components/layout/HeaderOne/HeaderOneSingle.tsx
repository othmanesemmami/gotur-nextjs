"use client";
import React from "react";
import Image from "next/image";

import Link from "next/link"; // Assuming we're using Next.js for routing
import { navItems, headerOneNavItems } from "@/data/navItems"; // Import the navItems data
import DemoPages from "@/components/common/DemoPages/DemoPages";
import main_logo from "@/assets/images/logo-dark.png";
import { usePathname } from "next/navigation";
import useStore from "@/store/useStore";
import SingleNavItems from "../SingleNavItems/SingleNavItems";
interface NavItem {
  id: number;
  title: string;
  link?: string;
  subMenu?: NavItem[];
}

const HeaderOneSingle: React.FC = () => {
  const pathname = usePathname();
  const {
    changeSearchPopupStatus,
    changeMobileDrawerStatus,
    changeSideBarDrawerStatus,
  } = useStore();
  const renderSubMenu = (subMenu: NavItem[]) => (
    <ul className=''>
      {subMenu.map((item: any, index: number) => (
        <li key={index} className={item.subMenu ? "dropdown" : ""}>
          <Link href={item.link}>{item.title}</Link>
          {item.subMenu && renderSubMenu(item.subMenu)}
        </li>
      ))}
    </ul>
  );
  const handelClick = () => {
    changeMobileDrawerStatus();
    console.log("clicked");
  };

  const nav =
    pathname === "/home1-one" || pathname === "/home3-one"
      ? headerOneNavItems
      : navItems;
  return (
    <header className='main-header main-header--one sticky-header sticky-header--normal'>
      <div className='container-fluid'>
        <div className='main-header__inner'>
          <div className='main-header__logo logo-retina'>
            <Link href='/'>
              <Image src={main_logo} alt='gotur HTML' width='160' height='45' />
            </Link>
          </div>

          <div className='main-header__right'>
            <nav className='main-header__nav main-menu'>
              <ul className='main-menu__list'>
                {/* Render Home menu with showcase */}
                <li className='dropdown megamenu'>
                  <Link href='/'>Home</Link>
                  <DemoPages />
                </li>

                {nav.map((item: NavItem) => (
                  <SingleNavItems item={item} key={item.id} />
                ))}
              </ul>
            </nav>

            <div className='main-header__info'>
              <Link
                onClick={(e) => {
                  e.preventDefault();
                  changeSearchPopupStatus();
                }}
                href='#'
                className='search-toggler main-header__info__item'
              >
                <i
                  className='icon-search-interface-symbol'
                  aria-hidden='true'
                ></i>
                <span className='sr-only'>Search</span>
              </Link>
              <Link href='cart' className='main-header__info__item'>
                <i className='icon-shopping-carts' aria-hidden='true'></i>
                <span className='sr-only'>Cart</span>
              </Link>
            </div>

            <div
              className='main-header__btn-popup main-header__element__btn'
              onClick={changeSideBarDrawerStatus}
            >
              <i className='icon-menu-bar'></i>
            </div>

            <Link href='contact' className='gotur-btn main-header__btn'>
              Get in touch <i className='icon-paper-plane'></i>
            </Link>

            <div
              className='mobile-nav__btn mobile-nav__toggler'
              onClick={handelClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOneSingle;
