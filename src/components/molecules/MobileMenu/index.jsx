"use client";

import {
  Menu,
  MenuItem,
  ProSidebarProvider,
  Sidebar,
  SubMenu,
} from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import menuItems from "@/constant/menuItems";
import isMenuActive from "@/utils/helpers/isMenuActive";

const Image = styled.img`
  width: 140px;
  height: 45px;
`;

import logo from "@/assets/images/header-logo.svg";
import logo2 from "@/assets/images/header-logo2.svg";


const MobileMenu = () => {
  const { pathname: path } = useLocation();

  const socialLinks = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      link: "#",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      link: "#",
    },
    {
      name: "Instagram",
      icon: "fab fa-instagram",
      link: "#",
    },
    {
      name: "YouTube",
      icon: "fab fa-youtube",
      link: "#",
    },
    {
      name: "Pinterest",
      icon: "fab fa-pinterest",
      link: "#",
    },
  ];

  const contactInfo = [
    {
      icon: "flaticon-map",
      text: "47 Bakery Street, London, UK",
    },
    {
      icon: "flaticon-phone-call",
      text: "1-800-458-56987",
    },
    {
      icon: "flaticon-clock",
      text: "Mon - Fri 8:00 - 18:00",
    },
  ];

  return (
    <>
      <div className="stylehome1 h0">
        <div className="mobile-menu">
          <div className="header stylehome1">
            <div className="mobile_menu_bar">
              <a
                className="menubar"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu"
                aria-controls="mobileMenu"
              >
                <small>Menu</small>
                <span />
              </a>
            </div>
            {/* End mobile_menu_bar */}

            <div className="mobile_menu_main_logo">
              <Image
                width={140}
                height={45}
                priority
                src={logo2}
                alt="brand"
              />
            </div>
            {/* End .mobile_menu_main_logo */}
          </div>
        </div>
        {/* /.mobile-menu */}
      </div>
      {/* End mobile menu header */}

      {/* start mobile sidebar menu */}
      <div
        className="offcanvas offcanvas-end mobile_menu-canvas"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
        data-bs-scroll="true"
      >
        <div className="offcanvas-body">
          <div className="pro-header">
            <Link href="/">
              <Image
                width={140}
                height={45}
                priority
                src={logo}
                alt="brand"
              />
            </Link>
            <div
              className="fix-icon"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="fa-light fa-circle-xmark"></i>
            </div>
          </div>
          {/* End pro-header */}

          {/* mobile menu items start */}
          <ProSidebarProvider>
            <Sidebar
              width="100%"
              backgroundColor="#0A2357"
              className="my-custom-class"
            >
              <Menu>
                {menuItems.map((item, index) => (
                  <SubMenu
                    key={index}
                    className={isMenuActive(item.subMenu, path) ? "active" : ""}
                    label={item.label}
                  >
                    {item.subMenu.map((subItem, subIndex) =>
                      subItem.subMenu ? (
                        <SubMenu
                          key={subIndex}
                          label={subItem.label}
                          className={
                            isMenuActive(subItem.subMenu, path) ? "active" : ""
                          }
                        >
                          {subItem.subMenu.map((nestedItem, nestedIndex) => (
                            <MenuItem
                              key={nestedIndex}
                              component={
                                <Link
                                  className={
                                    nestedItem.path == path ? "active" : ""
                                  }
                                  href={nestedItem.path}
                                />
                              }
                            >
                              {nestedItem.label}
                            </MenuItem>
                          ))}
                        </SubMenu>
                      ) : (
                        <MenuItem
                          key={subIndex}
                          component={
                            <Link
                              className={subItem.path == path ? "active" : ""}
                              href={subItem.path}
                            />
                          }
                        >
                          {subItem.label}
                        </MenuItem>
                      )
                    )}
                  </SubMenu>
                ))}
              </Menu>
            </Sidebar>
          </ProSidebarProvider>
          {/* mobile menu items end */}

          <div className="pro-footer mm-add-listing">
            <div className="border-none">
              <div className="mmenu-contact-info">
                {contactInfo.map((info, index) => (
                  <span className="phone-num" key={index}>
                    <i className={info.icon} /> <a href="#">{info.text}</a>
                  </span>
                ))}
              </div>

              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a href={link.link} key={index}>
                    <span className={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* End mm-add-listng */}
        </div>
        {/* End offcanvas-body */}
      </div>
      {/* End mobile sidebar menu */}
    </>
  );
};

export default MobileMenu;
