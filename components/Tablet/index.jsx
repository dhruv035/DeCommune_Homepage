import React from "react";
import Group9 from "../Group9";
import Group5 from "../Group5";
import Group7 from "../Group7";
import styled from "styled-components";
import {
  KanitNormalSkyBlue20px,
  UrbanistBlackTolopea16px,
  UrbanistBoldBlack35px,
  UrbanistSemiBoldCodGray20px,
  UrbanistSemiBoldBlack25px,
  UrbanistSemiBoldBlack20px2,
  UrbanistBoldBlack20px,
  UrbanistSemiBoldBlack20px,
  UrbanistLightBlack15px,
  UrbanistBoldWhite10px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Tablet.css";

function Tablet(props) {
  const {
    decommune,
    commingSoon,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    spanText9,
    spanText10,
    spanText11,
    spanText12,
    spanText13,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    spanText18,
    spanText19,
    spanText20,
    spanText21,
    spanText22,
    paragraph1,
    spanText23,
    spanText24,
    spanText25,
    paragraph2,
    spanText26,
    spanText27,
    requestAccess,
    inputType,
    inputPlaceholder,
    getUpdates,
    group7Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet screen">
        <OverlapGroup9>
          <NavBar>
            <OverlapGroup>
              <Ethereum1 src="/img/ethereum-1@2x.svg" alt="ethereum 1" />
              <DeCommune>{decommune}</DeCommune>
            </OverlapGroup>
            <Btn>
              <OverlapGroup1>
                <CommingSoon>{commingSoon}</CommingSoon>
              </OverlapGroup1>
            </Btn>
          </NavBar>
          <OverlapGroup2>
            <ADecentralisedAnd>
              <span>
                <span className="urbanist-semi-bold-black-25px">
                  {spanText1}
                </span>
                <Span120>{spanText2}</Span120>
                <span className="urbanist-semi-bold-black-25px">
                  {spanText3}
                </span>
                <Span36>{spanText4}</Span36>
                <span className="urbanist-semi-bold-black-25px">
                  {spanText5}
                </span>
              </span>
            </ADecentralisedAnd>
            <Frame>
              <lottie-player
                src="https://cdn.animaapp.com/projects/63653da52d5ccb2a104f7b32/files/1-st-animationv5.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </Frame>
          </OverlapGroup2>
          <OverlapGroup5>
            <Component5>
              <CreateDecentralized>
                <span>
                  <span className="urbanist-semi-bold-cod-gray-20px">
                    {spanText6}
                  </span>
                  <Span121>{spanText7}</Span121>
                  <span className="urbanist-semi-bold-cod-gray-20px">
                    {spanText8}
                  </span>
                </span>
              </CreateDecentralized>
              <Frame1>
                <lottie-player
                  src="https://cdn.animaapp.com/projects/63653da52d5ccb2a104f7b32/files/2nd-animation-v2.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </Frame1>
            </Component5>
            <CreateChannelsToP>
              <span>
                <span className="urbanist-light-black-15px">{spanText9}</span>
                <span className="urbanist-bold-black-15px">{spanText10}</span>
                <span className="urbanist-light-black-15px">{spanText11}</span>
              </span>
            </CreateChannelsToP>
          </OverlapGroup5>
        </OverlapGroup9>
        <Group31>
          <OverlapGroup6>
            <OverlapGroup3>
              <CreateDecentralizedLivestreams>
                <span>
                  <span className="urbanist-semi-bold-black-20px-2">
                    {spanText12}
                  </span>
                  <span className="urbanist-black-black-20px">
                    {spanText13}
                  </span>
                </span>
              </CreateDecentralizedLivestreams>
              <Frame2>
                <lottie-player
                  src="https://cdn.animaapp.com/projects/63653da52d5ccb2a104f7b32/files/3rd-animation-v2.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </Frame2>
            </OverlapGroup3>
            <CreateChannelsToP1>
              <span>
                <span className="urbanist-light-black-15px">{spanText14}</span>
                <span className="urbanist-bold-black-15px">{spanText15}</span>
                <span className="urbanist-light-black-15px">{spanText16}</span>
              </span>
            </CreateChannelsToP1>
          </OverlapGroup6>
        </Group31>
        <Group33>
          <OverlapGroup7>
            <Component3>
              <SellTicketsToLiveEventsViaNft>
                <span>
                  <span className="urbanist-semi-bold-black-20px">
                    {spanText17}
                  </span>
                  <span className="urbanist-black-black-20px-2">
                    {spanText18}
                  </span>
                  <span className="urbanist-semi-bold-black-20px">
                    {spanText19}
                  </span>
                  <span className="urbanist-black-black-20px-2">
                    {spanText20}
                  </span>
                  <span className="urbanist-semi-bold-black-20px">
                    {spanText21}
                  </span>
                  <span className="urbanist-black-black-20px-2">
                    {spanText22}
                  </span>
                </span>
              </SellTicketsToLiveEventsViaNft>
              <Frame3>
                <lottie-player
                  src="https://cdn.animaapp.com/projects/63653da52d5ccb2a104f7b32/files/5th-animation.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </Frame3>
            </Component3>
            <Paragraph>{paragraph1}</Paragraph>
          </OverlapGroup7>
        </Group33>
        <Group34>
          <OverlapGroup8>
            <Component1>
              <Frame4>
                <lottie-player
                  src="https://cdn.animaapp.com/projects/63653da52d5ccb2a104f7b32/files/4thanimation-v2.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </Frame4>
              <CreateMultiTieredMemberships>
                <span>
                  <span className="urbanist-bold-black-20px">{spanText23}</span>
                  <span className="urbanist-black-black-20px">
                    {spanText24}
                  </span>
                  <span className="urbanist-bold-black-20px">{spanText25}</span>
                </span>
              </CreateMultiTieredMemberships>
            </Component1>
            <Paragraph1>{paragraph2}</Paragraph1>
          </OverlapGroup8>
        </Group34>
        <RequestAcess>
          <InterestedInDeComm>
            <span>
              <span className="urbanist-bold-black-35px">{spanText26}</span>
              <Span127>{spanText27}</Span127>
            </span>
          </InterestedInDeComm>
          <Btn1>
            <OverlapGroup4>
              <RequestAccess>{requestAccess}</RequestAccess>
            </OverlapGroup4>
          </Btn1>
        </RequestAcess>
        <Footer>
          <OverlapGroup41>
            <OverlapGroupContainer>
              <OverlapGroup10>
                <EnterYourEMail
                  name="enteryoure-mail"
                  placeholder={inputPlaceholder}
                  type={inputType}
                />
              </OverlapGroup10>
              <OverlapGroup11>
                <GetUpdates>{getUpdates}</GetUpdates>
              </OverlapGroup11>
            </OverlapGroupContainer>
            <Frame11>
              <Group9 />
              <Group5 />
              <Group7 className={group7Props.className} />
            </Frame11>
          </OverlapGroup41>
        </Footer>
      </div>
    </div>
  );
}

const OverlapGroup9 = styled.div`
  width: 1002px;
  height: 1032px;
  position: relative;
  margin-top: -161px;
  align-self: flex-end;
  margin-right: -299px;
`;

const NavBar = styled.div`
  position: absolute;
  height: 31px;
  top: 189px;
  left: 9px;
  display: flex;
  align-items: flex-end;
  min-width: 648px;
  gap: 395px;
`;

const OverlapGroup = styled.div`
  width: 126px;
  height: 25px;
  position: relative;
  margin-bottom: 0.2px;
`;

const Ethereum1 = styled.img`
  position: absolute;
  width: 25px;
  height: 25px;
  top: 0;
  left: 7px;
`;

const DeCommune = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 126px;
  height: 14px;
  top: 3px;
  left: 0;
  font-family: var(--font-family-urbanist);
  font-weight: 700;
  color: var(--martinique);
  font-size: var(--font-size-xs);
  letter-spacing: -0.6px;
  line-height: 27px;
  white-space: nowrap;
`;

const Btn = styled.div`
  display: flex;
  align-items: flex-end;
  min-width: 129px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    filter: blur(10px);
  }
`;

const OverlapGroup1 = styled.div`
  height: 31px;
  margin-bottom: 0;
  display: flex;
  padding: 5px 28.6px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 127px;
  background-color: var(--black);
  border-radius: 50px;
`;

const CommingSoon = styled.div`
  ${ValignTextMiddle}
  ${UrbanistBoldWhite10px}
            width: 69px;
  height: 20px;
  letter-spacing: -0.3px;
  line-height: 10px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  width: 1000px;
  height: 878px;
  top: 0;
  left: 0;
`;

const ADecentralisedAnd = styled.p`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlack25px}
            position: absolute;
  width: 237px;
  height: 223px;
  top: 274px;
  left: 7px;
  letter-spacing: 1px;
  line-height: 30px;
`;

const Span120 = styled.span`
  font-family: var(--font-family-urbanist);
  font-weight: 800;
  color: var(--black);
  font-size: var(--font-size-s);
`;

const Span36 = styled.span`
  font-family: var(--font-family-urbanist);
  font-weight: 900;
  color: var(--black);
  font-size: var(--font-size-s);
`;

const Frame = styled.div`
  position: absolute;
  width: 1000px;
  height: 878px;
  top: 0;
  left: 0;
  border: 1px none;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 769px;
  height: 328px;
  top: 704px;
  left: 8px;
`;

const Component5 = styled.div`
  position: absolute;
  height: 328px;
  top: 0;
  left: 2px;
  display: flex;
  align-items: center;
  min-width: 767px;
  gap: 21px;
`;

const CreateDecentralized = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldCodGray20px}
            width: 228px;
  height: 75px;
  margin-bottom: 75.14px;
  letter-spacing: 1px;
  line-height: 30px;
`;

const Span121 = styled.span`
  font-family: var(--font-family-urbanist);
  font-weight: 900;
  color: var(--cod-gray);
  font-size: var(--font-size-xs);
`;

const Frame1 = styled.div`
  width: 444px;
  height: 328px;
`;

const CreateChannelsToP = styled.p`
  ${ValignTextMiddle}
  ${UrbanistLightBlack15px}
            position: absolute;
  width: 264px;
  height: 104px;
  top: 220px;
  left: 0;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 20px;
`;

const Group31 = styled.div`
  margin-top: 161px;
  margin-left: -30px;
  display: flex;
  align-items: flex-start;
  min-width: 729px;
`;

const OverlapGroup6 = styled.div`
  width: 727px;
  height: 304px;
  position: relative;
`;

const OverlapGroup3 = styled.div`
  position: absolute;
  width: 726px;
  height: 304px;
  top: 0;
  left: 0;
`;

const CreateDecentralizedLivestreams = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlack20px2}
            position: absolute;
  width: 245px;
  height: 75px;
  top: 35px;
  left: 481px;
  letter-spacing: 1px;
  line-height: 30px;
`;

const Frame2 = styled.div`
  position: absolute;
  width: 519px;
  height: 304px;
  top: 0;
  left: 0;
  border: 1px none;
`;

const CreateChannelsToP1 = styled.p`
  ${ValignTextMiddle}
  ${UrbanistLightBlack15px}
            position: absolute;
  width: 247px;
  height: 126px;
  top: 152px;
  left: 480px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 20px;
`;

const Group33 = styled.div`
  align-self: flex-end;
  margin-top: 111px;
  margin-right: 9px;
  display: flex;
  align-items: flex-start;
  min-width: 685px;
`;

const OverlapGroup7 = styled.div`
  width: 685px;
  height: 279px;
  position: relative;
`;

const Component3 = styled.div`
  position: absolute;
  height: 279px;
  top: 0;
  left: 3px;
  display: flex;
  align-items: center;
  min-width: 682px;
  gap: 29px;
`;

const SellTicketsToLiveEventsViaNft = styled.p`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlack20px}
            width: 239px;
  height: 89px;
  margin-bottom: 15.91px;
  letter-spacing: 1px;
  line-height: 30px;
`;

const Frame3 = styled.div`
  width: 412px;
  height: 279px;
  border: 1px none;
`;

const Paragraph = styled.p`
  ${ValignTextMiddle}
  ${UrbanistLightBlack15px}
            position: absolute;
  width: 271px;
  height: 103px;
  top: 175px;
  left: 0;
  letter-spacing: 1px;
  line-height: 20px;
`;

const Group34 = styled.div`
  margin-top: 187px;
  margin-left: -16px;
  display: flex;
  align-items: flex-start;
  min-width: 715px;
`;

const OverlapGroup8 = styled.div`
  width: 713px;
  height: 309px;
  position: relative;
`;

const Component1 = styled.div`
  position: absolute;
  height: 309px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 713px;
  gap: 10px;
`;

const Frame4 = styled.div`
  width: 432px;
  height: 309px;
  border: 1px none;
`;

const CreateMultiTieredMemberships = styled.div`
  ${ValignTextMiddle}
  ${UrbanistBoldBlack20px}
            width: 271px;
  height: 53px;
  margin-top: 32px;
  letter-spacing: 1px;
  line-height: 30px;
`;

const Paragraph1 = styled.p`
  ${ValignTextMiddle}
  ${UrbanistLightBlack15px}
            position: absolute;
  width: 265px;
  height: 73px;
  top: 142px;
  left: 442px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 20px;
`;

const RequestAcess = styled.div`
  width: 748px;
  margin-top: 143px;
  margin-left: -2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 221px;
  gap: 56px;
`;

const InterestedInDeComm = styled.p`
  ${ValignTextMiddle}
  ${UrbanistBoldBlack35px}
            width: 746px;
  height: 89px;
  margin-right: 2px;
  text-align: center;
  letter-spacing: 0;
  line-height: 10px;
`;

const Span127 = styled.span`
  font-family: var(--font-family-urbanist);
  font-weight: 900;
  color: var(--black);
  font-size: 35px;
`;

const Btn1 = styled.div`
  margin-right: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 315px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const OverlapGroup4 = styled.div`
  height: 76px;
  display: flex;
  padding: 14px 53px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 313px;
  background-color: var(--black);
  border-radius: 50px;
`;

const RequestAccess = styled.div`
  ${ValignTextMiddle}
  width: 200px;
  height: 47px;
  font-family: var(--font-family-urbanist);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-m);
  letter-spacing: -0.9px;
  line-height: 10px;
`;

const Footer = styled.div`
  height: 510px;
  margin-top: 205px;
  display: flex;
  align-items: flex-start;
  min-width: 744px;
  background-image: url(/img/rectangle-6@1x.svg);
`;

const OverlapGroup41 = styled.div`
  width: 744px;
  height: 505px;
  position: relative;
`;

const OverlapGroupContainer = styled.div`
  position: absolute;
  width: 744px;
  height: 505px;
  top: 0;
  left: 0;
  background-image: url(/img/rectangle-6-3@1x.svg);
  background-size: 100% 100%;
`;

const OverlapGroup10 = styled.div`
  position: absolute;
  height: 42px;
  top: 59px;
  left: 112px;
  display: flex;
  padding: 11.6px 22.8px;
  align-items: flex-end;
  min-width: 394px;
  background-color: var(--white);
  border-radius: 10px;
`;

const EnterYourEMail = styled.input`
  ${KanitNormalSkyBlue20px}
  width: 197px;
  height: 18px;
  background-color: transparent;
  opacity: 0.25;
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
  white-space: nowrap;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #7fdeff99;
  }
`;

const OverlapGroup11 = styled.div`
  position: absolute;
  height: 46px;
  top: 57px;
  left: 484px;
  display: flex;
  padding: 14.5px 6.5px;
  align-items: flex-start;
  min-width: 147px;
  background-color: var(--blue-violet);
  border-radius: 10px;
`;

const GetUpdates = styled.div`
  ${ValignTextMiddle}
  ${UrbanistBlackTolopea16px}
            width: 129px;
  height: 17px;
  opacity: 0.8;
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
  white-space: nowrap;
`;

const Frame11 = styled.div`
  display: flex;
  width: 425px;
  height: 289px;
  align-items: flex-start;
  gap: 60px;
  position: absolute;
  top: 175px;
  left: 159px;
  border: 1px none;
`;

export default Tablet;
