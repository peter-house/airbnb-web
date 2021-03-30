import React from "react";
import styled from "@emotion/styled";
import WhereverPlace from "./WhereverPlace";

const WhereverBg = styled.div`
  padding: 20px 80px 9 80px;
  font-weight: 700;
  max-height: 400px;
`;

const WhereverTitle = styled.div`
  font-size: 32px;
`;
const WhereverPlacesContainer = styled.div`


display: flex;
`

const Wherever = () => {
  return (
    <WhereverBg>
      <WhereverTitle>어디에서나, 여행은 살아보는거야!</WhereverTitle>
      <WhereverPlacesContainer>
        <WhereverPlace/>
      </WhereverPlacesContainer>
    </WhereverBg>
  );
};

export default Wherever;
