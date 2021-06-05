import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { checkPropTypes } from "prop-types";
import LoginPage from "./LoginPage";


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
const SingUP = styled.div`
  color: black;
  display: flex;
  flex-direction: coloumn;
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  padding: 5px 0 5px 15px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #f7f7f7;
  }

`

const BorderLine = styled.div`
  position: relative;
  left: -10px;
  width: 210px;
  content: "";
  border-top: 1px solid #c1c1c1;
  border-radius: 30px;
  background-color: #c1c1c1;
`;
const LoginMenu = ({ changeIsUserMenuListOn, isUserMenuListOn }) => {
  const menuListRef = useRef();
  const [isLoginPageOn, setIsLoginPageOn] = useState(false);

  function handleLoginPage(bool) {
    setIsLoginPageOn(bool);
  }
  function onLoginPage() {
    setIsLoginPageOn(true);
    event.stopPropagation();
  }
  function handleClickOutside({ target }) {
    if (menuListRef.current.contains(target)) {
      changeIsUserMenuListOn(true);
      return true;
    } else {
      changeIsUserMenuListOn(false);
      handleLoginPage(false);
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
    isUserMenuListOn && (
      <UserMenuListWrapper userMenu={isUserMenuListOn} ref={menuListRef}>
        <UserMenuList>
          <SingUP onClick={onLoginPage}>
            회원가입
          </SingUP>
          <Lists href={"https://www.airbnb.co.kr/login"}>로그인</Lists>
          <LoginPage 
          handleLoginPage={handleLoginPage} 
          isLoginPageOn={isLoginPageOn}
          />
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
