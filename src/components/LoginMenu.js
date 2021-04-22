import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useRef } from "react";
import { checkPropTypes } from "prop-types";

const UserMenuList = styled.div``;
const UserMenuListWrapper = styled.div`
  // display: ${(props) => (props.isUserMenuListOn ? "block" : "none")};
  background-color: white;
  color: black;
  font-weight: normal;
  position: absolute;
  top: 70px;
  border: 1px solid transparent;
  border-radius: 13px;
  width: 200px;
  height: 200px;
  padding: 10px 0px;
`;
const Lists = styled.a`
  color: black;
  display: flex;
  flex-direction: coloumn;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  padding: 5px 0 5px 15px;
  text-decoration: none;
  &:hover {
    background-color: #f7f7f7;
  }
`;
const BorderLine = styled.div`
  position: relative;
  left: -10px;
  width: 210px;
  content: "";
  border-top: 1px solid #c1c1c1;
  border-radius: 30px;
  background-color: #c1c1c1;
`;
const LoginMenu = (props) => {
  const menuListRef = useRef();
  const isUserMenuListOn = props.isUserMenuListOn;

  function handleClickOutside({ target }) {
    if (menuListRef.current.contains(target)) {
      props.changeIsUserMenuListOn(true);
      return true;
    } else {
      props.changeIsUserMenuListOn(false);
      return false;
    }
  }
  const handleGlobalClick = () => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  };
  useEffect(() => {
    handleGlobalClick();
  }, []);

  return (
    props.isUserMenuListOn && (
      <UserMenuListWrapper userMenu={props.isUserMenuListOn} ref={menuListRef}>
        <UserMenuList>
          <Lists href={"https://www.airbnb.co.kr/login"} bold>
            회원가입
          </Lists>
          <Lists href={"https://www.airbnb.co.kr/login"}>로그인</Lists>
          <BorderLine></BorderLine>
          <Lists href={"https://www.airbnb.co.kr/host/homes"}>
            숙소 호스트 되기
          </Lists>
          <Lists href={"https://www.airbnb.co.kr/host/experiences?from_nav=1"}>
            체험 호스팅하기
          </Lists>
          <Lists href={"https://www.airbnb.co.kr/help/home"}>도움말</Lists>
        </UserMenuList>
      </UserMenuListWrapper>
    )
  );
};

export default LoginMenu;
