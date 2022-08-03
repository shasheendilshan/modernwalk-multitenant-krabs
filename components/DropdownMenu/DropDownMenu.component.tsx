import React from "react";
import { Menu } from "@headlessui/react";

import style from "./DropDownMenu.module.scss";
import {
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineMenu,
} from "react-icons/ai";

type Props = {
  logout?: () => void;
};

const DropDownMenu: React.FC<Props> = ({ logout }) => {
  return (
    <Menu as="div" className={style.menu}>
      <Menu.Button className={style.menuButton}>
        {" "}
        <AiOutlineMenu size={25} className={style.icon} />
      </Menu.Button>
      <Menu.Items as="div" className={style.menuItems}>
        <Menu.Item as="div" className={style.menuItem}>
          {({ active }) => (
            <>
              <AiOutlineSetting />
              <p>Account settings</p>
            </>
          )}
        </Menu.Item>
        <Menu.Item as="div" className={style.menuItem} onClick={logout}>
          {({ active }) => (
            <>
              <AiOutlineLogout />
              <p>Logout</p>
            </>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default DropDownMenu;
