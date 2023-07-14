import * as React from "react";
import { Menu, List } from "@fluentui/react-northstar";
import { MenuIcon } from "@fluentui/react-icons-northstar";
import Setting from "./Setting";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const items = (handleClick: any, item: any) => [
  {
    key: "menuItem",
    icon: (
      <MenuIcon
        onClick={() => handleClick(item.id)}
        className={item.isOpen ? "open" : ""}
      />
    ),
    text: "Item 1",
    items: [{ key: "subMenuItem", text: "Sub Item" }, { key: "subMenuItem2" }],
  },

  {
    key: "MenuItem1",
    content: "MenuItem1",
    menu: {
      on: "Hover",
      items: [
        { key: "1", content: "item1" },
        {
          key: "2",
          content: "item2",
          menu: [
            {
              key: "1",
              label: "Contact",
              url: "/contact",
              content: "This is some paragraph",
            },
            { key: "2", content: "This is also some paragraph" },
          ],
        },
        {
          key: "3",
          content: "item3",
          menu: [
            { key: "1", content: "item3.1" },
            { key: "2", content: "item3.2" },
          ],
        },
      ],
    },
  },
  {
    key: "editorials",
    content: "MenuItem2",
    menu: {
      items: [
        { key: "1", content: "item1" },
        {
          key: "2",
          content: "item2",
          menu: [
            { key: "1", content: "Hii World This is bla bla bla" },
            { key: "2", content: "Hello universe this is bla bla bla" },
          ],
        },
        {
          key: "3",
          content: "item3",
          menu: [
            { key: "1", content: "This is some card content1" },
            { key: "2", content: "This is some card content2" },
          ],
        },
      ],
    },
  },
  {
    key: "MenuItem3",
    content: "MenuItem3",
    menu: {
      items: [
        { key: "1", content: "item1" },
        {
          key: "2",
          //   icon: <CircleIcon />,
          content: "item2 non augue tortor mollis",
          menu: [
            { key: "1", content: "Hello World" },
            { key: "2", content: "Hello World 2" },
          ],
        },
        {
          key: "3",
          //   icon: <CircleIcon />,
          content:
            "item3 elementum urna varius augue ultrices gravida malesuada fames",
          menu: [
            { key: "1", content: "item3.1" },
            { key: "2", content: "item3.2" },
          ],
        },
      ],
    },
  },
  {
    key: "MenuItem4",
    content: "MenuItem4",
    menu: {
      items: [
        { key: "1", content: "item1" },
        {
          key: "2",
          //   icon: <CircleIcon />,
          content: "item2 non augue tortor mollis",
          menu: [
            { key: "1", content: "Hello World" },
            { key: "2", content: "Hello World 2" },
          ],
        },
        {
          key: "3",
          //   icon: <CircleIcon />,
          content:
            "item3 elementum urna varius augue ultrices gravida malesuada fames",
          menu: [
            { key: "1", content: "This is another paragraph" },
            { key: "2", content: "This is also some paragraph" },
          ],
        },
      ],
    },
  },
];

const NavBar = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, isOpen: false },
    { id: 2, isOpen: false },
    { id: 3, isOpen: false },
  ]);

  const handleClick = (itemId: any) => {
    setMenuItems((prevMenuItems) =>
      prevMenuItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };
  return (
    <>
      <div>
        {menuItems.map((item) => (
          <div key={item.id}>
            {item.isOpen && (
              <div className="menu">
                <List>
                  <NavLink
                    to="/"
                    style={(isActive) => ({
                      color: isActive ? "green" : "blue",
                    })}
                  >
                    Home
                  </NavLink>
                  <li>
                    {" "}
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                </List>
              </div>
            )}
          </div>
        ))}

        <style>{`
        .menu {
          width: 200px;
          height: 500px;
          background-color: #f1f1f1;
          transition: transform 0.3s ease;
          transform-origin: bottom;       
        }

        .menu.open {
          transform:  scaleY(1);
        }
      `}</style>
      </div>
      <Menu
        defaultActiveIndex={0}
        items={items(handleClick, { id: 1, isOpen: false })}
      ></Menu>
      <Setting />
    </>
  );
};

export default NavBar;
