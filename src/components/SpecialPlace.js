import React from "react";
import styled from "@emotion/styled";

const SpecialImg = styled.img `
width: 29vw;
height: 29vw;
border-radius: 10px;

&:after {
  padding-bottom: 100%;
}


`
const SpecialTexts = styled.div `
margin-top: 10px;

`
const SpecialTitle = styled.div `
font-size: 18px;
font-weight: 600;
line-height: 22px;
margin-bottom: 5px;
`
const SpecialSubTitle = styled.div `
line-height: 18px;
`
const SpecialPlacesWrapper =styled.div `
    display: flex;
`
const SpecialPlaceWrapper = styled.div `
margin-right: 15px;

`
const SpecialPlaceLink = styled.a `
text-decoration: none;
cursor: point;
&:visited {
  text-decoration: none;
  color: black;
}

`


const SpecialPlace = () => {
    const places = [
        {
          img:
          "https://a0.muscache.com/im/pictures/4d353c80-e73a-4b04-9e15-ec3d8381b106.jpg?im_w=720",
          link:
          "https://www.airbnb.co.kr/s/experiences/online",
          text: "온라인 체험",
          subText: "집에서 즐기는 랜선 세계 여행",
        },
        {
            img:
            "https://a0.muscache.com/im/pictures/e81fce5f-2f51-4342-938e-5bc18ae237f4.jpg?im_w=720",
            link:
           "https://www.airbnb.co.kr/s/experiences?location_search=NEARBY",
            text: "체험",
            subText: "어디에서든 즐길 수 있는 체험",
          },
          {
            img:
            "https://a0.muscache.com/im/pictures/b9adfc39-6e2a-4e5f-b6f3-681b306fae5c.jpg?im_w=720",
            link:
              "https://www.airbnb.co.kr/s/adventures",
            text: "어드벤처",
            subText: "숙박과 식사가 포함된 며칠 일정의 여행",
          },
        ]


    return (

        <SpecialPlacesWrapper>
        {places.map((place) => {
            return (
                <SpecialPlaceLink href={place.link}>
                <SpecialPlaceWrapper>
                <SpecialImg src={place.img}></SpecialImg>
                <SpecialTexts>
                    <SpecialTitle>
                        {place.text}
                    </SpecialTitle>
                    <SpecialSubTitle>
                        {place.subText}
                    </SpecialSubTitle>
                </SpecialTexts>
                </SpecialPlaceWrapper>
                </SpecialPlaceLink>
            )
        })}
        </SpecialPlacesWrapper>

    


    )
}

export default SpecialPlace;