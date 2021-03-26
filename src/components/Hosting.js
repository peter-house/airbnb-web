import React from "react";
import styled from "@emotion/styled";


const HostingBg = styled.div`
margin-top: 50px;
max-width: 1100px;
max-height: 400px;
padding-left: 80px;
`;
const HostingBgImg = styled.div`
background-image: url("https://a0.muscache.com/im/pictures/eff28e1d-51c4-49ff-8266-68d6929ea1ec.jpg?im_w=2560");
width: 1250px;
height: 483px;
background-size: cover;
background-repeat: no-repeat;
border-radius: 10px;

`;
const HostingTextContainer = styled.div`
padding-left: 80px;
padding-top: 110px;
  `;

const HostingText =styled.div `
font-size: 48px;
font-family: "Circular";
color: white;

`

const HostingSubText =styled.div `
font-size: 18px;
font-family: "Circular";
color: white;
padding-top: 12px;
padding-bottom: 38px;
`
const HostingBtn =styled.button `
font-size: 16px;
font-family: "Circular";
border: 1px solid black;
backgroud-color: white;
padding: 14px 24px;
border-radius: 10px
`

const Hosting = () => {
    const hostText = ["여러분의 세상을", <br/>,"다른 사람들과", <br/>,"나눠보세요."]
  return (
      <HostingBg>
          <HostingBgImg>
              <HostingTextContainer>
                  <HostingText>
                   {hostText}
                  </HostingText>
                  <HostingSubText>
                      남는 공간을 활용해 새로운 기회를 만들어 보세요.
                  </HostingSubText>
                  <HostingBtn>
                      호스팅 시작하기
                  </HostingBtn>
              </HostingTextContainer>
             </HostingBgImg>
      </HostingBg>
      
  );
};
export default Hosting;