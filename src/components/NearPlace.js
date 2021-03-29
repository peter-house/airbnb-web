import React from "react";
import styled from "@emotion/styled";
import Place from "./Place";

const NearPlaceBg = styled.div`
  max-width: 1760px;
  height: 250px;
  padding: 60px 80px 0px 80px;
`;
const NearPlaceTitle = styled.div`
  width: 100%;
  font-size: 32px;
  font-weight: 700;
  padding-bottom: 20px;
`;
const PlaceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const PlacesContainer = styled.ul`
  padding-left: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const NearPlace = () => {
  const PLACES = [
    {
      img:
        "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720",
      link:
        "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
      text: "서울",
      subText: "차로 15분거리",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720",
      link:
        "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
      text: "서울",
      subText: "차로 15분거리",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720",
      link:
        "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
      text: "서울",
      subText: "차로 15분거리",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720",
      link:
        "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
      text: "서울",
      subText: "차로 15분거리",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720",
      link:
        "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
      text: "서울",
      subText: "차로 15분거리",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720",
      link:
        "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
      text: "서울",
      subText: "차로 15분거리",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720",
      link:
        "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
      text: "서울",
      subText: "차로 15분거리",
    },
    {
      img:
        "https://a0.muscache.com/im/pictures/71e23854-a3c7-491c-b715-6e86233a293f.jpg?im_q=medq&im_w=720",
      link:
        "https://www.airbnb.co.kr/s/%EC%84%9C%EC%9A%B8/homes?place_id=ChIJzWXFYYuifDUR64Pq5LTtioU&refinement_paths%5B%5D=%2Fhomes&search_type=section_navigation",
      text: "서울",
      subText: "차로 15분거리",
    },
  ];
  return (
    <NearPlaceBg>
      <NearPlaceTitle>가까운 여행지 둘러보기</NearPlaceTitle>
      <PlacesContainer>
        {PLACES.map((place) => {
          return (
            <Place
              link={place.link}
              src={place.img}
              text={place.text}
              subText={place.subText}
            />
          );
        })}
      </PlacesContainer>
    </NearPlaceBg>
  );
};
export default NearPlace;
