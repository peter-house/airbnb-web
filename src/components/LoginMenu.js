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
  padding: 15px 15px;
`;

const LoginMenu = (props) => {
  const menuListRef = useRef();
  const isUserMenuListOn = props.isUserMenuListOn;

  function handleClickOutside ({target}) {
    console.log("this is target",target)
    console.log('menuList', menuListRef.current)
    console.log('isUserMenuListOn',isUserMenuListOn);

    if(isUserMenuListOn && !menuListRef.current.contains(target)) {console.log("offfffff")};
  }
  // const userBtnRef = props.userRef;
  // console.log('박스',props.userMenu);

  // document.addEventListener("click", (event) => {
  //   const isMenuListClicked = [menuListRef.current].includes(event.target);    // 배경화면 클릭시 false / list 클릭되면 true
  //   const isMenuBtnClicked = [userBtnRef.current].includes(event.target);   //  배경화면 클릭시 false / menu 클릭되면 true
  //   if (isMenuListClicked == true || isMenuBtnClicked == true ) {
  //     if(props.isUserMenuListOn){
  //       props.toggleUserMenuListOn(true);
  //     }
  //   }else{
  //     props.toggleUserMenuListOn(false);
  //   }
  // });
  const handleGlobalClick = () =>  {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }
  useEffect(() => {
    handleGlobalClick();
  },[])
  
  return ( 
    props.isUserMenuListOn && 
    <UserMenuListWrapper userMenu={props.isUserMenuListOn}  ref={menuListRef} >
      <UserMenuList>
        <div>회원가입</div>
        <div>로그인</div>
        <div>숙소 호스트 되기</div>
        <div>체험 호스팅하기</div>
        <div>도움말</div>
      </UserMenuList>
    </UserMenuListWrapper>
    );
};

export default LoginMenu;
