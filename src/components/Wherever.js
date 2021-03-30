import React from "react";
import styled from "@emotion/styled";
import WhereverPlace from "./WhereverPlace";

const WhereverBg = styled.div`
  padding: 20px 0 9px 80px;
  font-weight: 700;
  max-height: 400px;
`;
const WhereverTitle = styled.div`
  font-size: 32px;
`;
const WhereverPlacesContainer = styled.div`
  width: 89.5vw;
  display: flex;
`;
const WhereverPlaceContainer = styled.ul`
  list-style: none;
  padding-left: 0px;
  display: flex;
`;

const Wherever = () => {
  const PLACES = [
    {
      img:
        "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=720",
      link:
        "https://www.airbnb.co.kr/s/homes?ne_lat=59.12927453041205&ne_lng=154.2003905675037&sw_lat=16.01072546958795&sw_lng=99.79960943249633&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=2&search_type=NAVIGATION_CARD&title_type=CURATED_PROPERTY_TYPE",
      text: "집 전체",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720",
      link:
        "https://www.airbnb.co.kr/s/homes?refinement_paths%5B%5D=%2Fhomes%2Fsection%2FNEARBY_LISTINGS%3A2400&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=5&property_type_id%5B%5D=6&property_type_id%5B%5D=8&property_type_id%5B%5D=10&property_type_id%5B%5D=12&property_type_id%5B%5D=15&property_type_id%5B%5D=16&property_type_id%5B%5D=17&property_type_id%5B%5D=18&property_type_id%5B%5D=19&property_type_id%5B%5D=23&property_type_id%5B%5D=24&property_type_id%5B%5D=25&property_type_id%5B%5D=28&property_type_id%5B%5D=32&property_type_id%5B%5D=34&property_type_id%5B%5D=44&property_type_id%5B%5D=50&property_type_id%5B%5D=54&property_type_id%5B%5D=57&property_type_id%5B%5D=58&property_type_id%5B%5D=61&property_type_id%5B%5D=63&property_type_id%5B%5D=64&property_type_id%5B%5D=66&property_type_id%5B%5D=67&property_type_id%5B%5D=68&property_type_id%5B%5D=69&property_type_id%5B%5D=62&property_type_id%5B%5D=51&title_type=CURATED_PROPERTY_TYPE",
      text: "독특한 공간",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=720",
      link:
        "https://www.airbnb.co.kr/s/homes?refinement_paths%5B%5D=%2Fhomes%2Fsection%2FNEARBY_LISTINGS%3A2400&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=5&property_type_id%5B%5D=6&property_type_id%5B%5D=8&property_type_id%5B%5D=10&property_type_id%5B%5D=12&property_type_id%5B%5D=15&property_type_id%5B%5D=16&property_type_id%5B%5D=17&property_type_id%5B%5D=18&property_type_id%5B%5D=19&property_type_id%5B%5D=23&property_type_id%5B%5D=24&property_type_id%5B%5D=25&property_type_id%5B%5D=28&property_type_id%5B%5D=32&property_type_id%5B%5D=34&property_type_id%5B%5D=44&property_type_id%5B%5D=50&property_type_id%5B%5D=54&property_type_id%5B%5D=57&property_type_id%5B%5D=58&property_type_id%5B%5D=61&property_type_id%5B%5D=63&property_type_id%5B%5D=64&property_type_id%5B%5D=66&property_type_id%5B%5D=67&property_type_id%5B%5D=68&property_type_id%5B%5D=69&property_type_id%5B%5D=62&property_type_id%5B%5D=51&title_type=CURATED_PROPERTY_TYPE",
      text: "통나무집 및 전원주택",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720",
      link:
        "https://www.airbnb.co.kr/s/homes?refinement_paths%5B%5D=%2Fhomes%2Fsection%2FNEARBY_LISTINGS%3A2400&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=5&property_type_id%5B%5D=6&property_type_id%5B%5D=8&property_type_id%5B%5D=10&property_type_id%5B%5D=12&property_type_id%5B%5D=15&property_type_id%5B%5D=16&property_type_id%5B%5D=17&property_type_id%5B%5D=18&property_type_id%5B%5D=19&property_type_id%5B%5D=23&property_type_id%5B%5D=24&property_type_id%5B%5D=25&property_type_id%5B%5D=28&property_type_id%5B%5D=32&property_type_id%5B%5D=34&property_type_id%5B%5D=44&property_type_id%5B%5D=50&property_type_id%5B%5D=54&property_type_id%5B%5D=57&property_type_id%5B%5D=58&property_type_id%5B%5D=61&property_type_id%5B%5D=63&property_type_id%5B%5D=64&property_type_id%5B%5D=66&property_type_id%5B%5D=67&property_type_id%5B%5D=68&property_type_id%5B%5D=69&property_type_id%5B%5D=62&property_type_id%5B%5D=51&title_type=CURATED_PROPERTY_TYPE",
      text: "반려동물 동반 가능",
    },
  ];
  return (
    <WhereverBg>
      <WhereverTitle>어디에서나, 여행은 살아보는거야!</WhereverTitle>
      <WhereverPlacesContainer>
        <WhereverPlaceContainer>
        {PLACES.map((place, index) => {
          return (
            <WhereverPlace 
          link={place.link}
          src={place.img}
          text={place.text}
          key={index}
          />
          )
        })}
        </WhereverPlaceContainer>
      </WhereverPlacesContainer>
    </WhereverBg>
  );
};
export default Wherever;
