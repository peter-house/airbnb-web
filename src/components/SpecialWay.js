import React from "react";
import styled from "@emotion/styled";
import SpecialPlace from './SpecialPlace';


const SpecialBg = styled.div`
  
  width: 100%;
  height: 100%;
  padding-top: 150px;
  padding-left: 80px;

`;

const SpecialTextsContainer = styled.div`
  
`;
const SpecialText = styled.div`
font-size: 32px;
font-weight: 700;
`

const SpecialSubText =styled.div`
font-size: 26px;
margin-bottom: 20px;
`

const SpecialWaysCotainer = styled.div`
`

const SpecialWay = () => {
  return (
    <SpecialBg>
      <SpecialTextsContainer>
        <SpecialText>
        세상을 만나는 특별한 방법
        </SpecialText>
        <SpecialSubText>
        현지 전문가와 함께하는 독특한 액티비티를 직접 체험하거나 온라인으로 만나보세요.
        </SpecialSubText>
      </SpecialTextsContainer>
      <SpecialWaysCotainer>
          <SpecialPlace/>
      </SpecialWaysCotainer>
    </SpecialBg>
  );
};

export default SpecialWay;
