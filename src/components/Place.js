import React from "react";
import styled from "@emotion/styled";

const NearPlaceIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 16px;
  border-radius: 10px;
`;
const NearPlaceText = styled.div`
  
  font-size: 16px;
  font-weight: 600;
  padding-bottom: 2px;
`;
const PlaceContainer = styled.li`
  display: flex;
  align-items: center;
  width: 210px;
  margin-bottom: 25px;
`;
const PlaceLink = styled.a `
  text-decoration: none;
  cursor: point;
  &:visited {
    text-decoration: none;
    color: black;
  }
`
const NearPlaceTextsContainer =styled.div `
 display: flex;
 flex-direction: column;
`

const Place = () => {
  const Places = [
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
    <>
        {Places.map((place) => {
          return (
            <PlaceLink href={place.link}>
            <PlaceContainer>
            <NearPlaceIcon src={place.img}></NearPlaceIcon>
            <NearPlaceTextsContainer>
              <NearPlaceText>{place.text}</NearPlaceText>
              <div className="nearplace-subtext">{place.subText}</div>
            </NearPlaceTextsContainer>
            </PlaceContainer>
            </PlaceLink>
          );
        })}
    </>
  );
};

export default Place;
