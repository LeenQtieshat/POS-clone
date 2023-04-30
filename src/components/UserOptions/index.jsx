import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  LogoutOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Dropdown from "../../CoreUI/Dropdown";
import { deleteAccessToken } from "../../helpers/accessToken";
import { logout as logoutAction } from "../../redux/actionCreators/auth";

import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
const { userOptionsContainer, initials, optionsDropdown } = styles;

const UserOptions = () => {
  const [showOptionsDropdown, setShowOptionsDropdown] = useState(false);

  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const node = useRef();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('selectedTickets');
    deleteAccessToken();
    dispatch(logoutAction());
    navigate("/", { replace: true });
  };

  const userOptionsList = [
    {
      displayName: "Profile",
      id: 1,
      icon: <UserOutlined />,
      linkTo: "/profile",
    },
    {
      displayName: "Settings",
      id: 2,
      icon: <SettingOutlined />,
    },
    {
      displayName: "Logout",
      id: 3,
      withDivider: true,
      icon: <LogoutOutlined />,
      onClick: logout,
    },
  ];

  const getUserInitials = () => {
    try {
      const { given_name, family_name } = userData;
      return `${given_name} ${family_name}`;
    } catch (err) {
      return "NA";
    }
  };

  return (
    <div
      onClick={() => setShowOptionsDropdown(!showOptionsDropdown)}
      ref={node}
      className={userOptionsContainer}
    >
      <span className={initials}>{getUserInitials()}</span>
      <Dropdown
        className={optionsDropdown}
        parentNode={node}
        showDropdown={showOptionsDropdown}
        items={userOptionsList}
        onDropdownHide={() => setShowOptionsDropdown(false)}
        onDropdownShow={() => setShowOptionsDropdown(true)}
      />
    </div>
  );
};

export default UserOptions;
