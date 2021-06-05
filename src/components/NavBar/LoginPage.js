import React from "react";
import styled from "@emotion/styled";
import { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginPageBg = styled.div`
  display: ${(props) => (props.isLoginPageOn ? "block" : "none")};
  position: absolute;
  top: -50px;
  left: -45vw;
  width: 30vw;
  height: 500px;
  color: black;
  z-index: 2;
  border-radius: 13px;
  background-color: white;
`;

const LoginPageHeader = styled.div``;

const LoginPageCancelBtn = styled.div``;

const LoginPageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  height: 65px;
  border-bottom: 1px solid #c1c1c1;
`;
const LoginPageGreetings = styled.div`
  display: flex;
  align-items: center;
  height: 65px;
  font-size: 22px;
  font-weith: 600;
`;
const InputId = styled.input`
  border: none;
  height: 50px;
  padding: 0 10px 10px 10px;
  outline: none;
`;

const InputPwd = styled.input`
  border: none;
  border-top: 1px solid #c1c1c1;
  height: 50px;
  padding: 10px 10px 0 10px;
  outline: none;
`;
const LoginInputWrapper = styled.form`
  border: 1px solid #c1c1c1;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  margin-bottom: 20px;
`;
const TopOfLoginPage = styled.div`
  padding-right: 20px;
  padding-left: 20px;
`;
const BottomOfLoginPage = styled.div`
  padding-right: 20px;
  padding-left: 20px;
`;
const SubmissionBtn = styled.input`
  color: #ffffff;
  height: 50px;
  width: 100%;
  border: 1px solid transparent;
  border-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  background-color: rgb(255, 56, 92);
  &:hover {
    cursor: pointer;
  }
`;
const GoogleLoginBtn = styled.button`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  border: 2px solid rgb(176, 176, 176);
  border-radius: 8px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

const GoogleImg = styled.img`
  width: 35px;
  height: 35px;
`;
const GoogleBtnTitle = styled.div`
  width: 100%;
  padding-right: 20px;
`;

const LoginPage = ({ handleLoginPage, isLoginPageOn }) => {
  const LoginPageRef = useRef();

  function handleClickOutside({ target }) {
    if (LoginPageRef.current.contains(target)) {
      handleLoginPage(true);
      return ture;
    } else {
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
    <LoginPageBg isLoginPageOn={isLoginPageOn} ref={LoginPageRef}>
      <LoginPageHeader>
        <LoginPageCancelBtn>x</LoginPageCancelBtn>
        <LoginPageTitle>로그인 또는 회원 가입</LoginPageTitle>
      </LoginPageHeader>
      <TopOfLoginPage>
        <div>
          <LoginPageGreetings>
            에어비엔비에 오신것을 환영합니다.
          </LoginPageGreetings>
          <LoginInputWrapper action="http://localhost:3000/user" method="post">
            <InputId
              type="text"
              placeholder={"Id를 입력하세요"}
              name="id"
            ></InputId>
            <InputPwd
              name="pwd"
              type="password"
              placeholder={"Password를 입력하세요"}
            ></InputPwd>
            <SubmissionBtn type="submit" value="계속"></SubmissionBtn>
          </LoginInputWrapper>
        </div>
      </TopOfLoginPage>
      <BottomOfLoginPage>
        <form method="GET" action="http://localhost:3000/auth/google">
          <GoogleLoginBtn>
            <GoogleImg
              src={
                "https://pbs.twimg.com/profile_images/770139154898382848/ndFg-IDH.jpg"
              }
            ></GoogleImg>
            <GoogleBtnTitle>Login with google</GoogleBtnTitle>
          </GoogleLoginBtn>
        </form>
      </BottomOfLoginPage>
    </LoginPageBg>
  );
};
export default LoginPage;
