import React from "react";
import RequestAcess from "../RequestAcess";
import Group9 from "../Group9";
import Group5 from "../Group5";
import Group7 from "../Group7";
import styled from "styled-components";
import {
  UrbanistLightBlack25px,
  KanitNormalSkyBlue20px,
  UrbanistBlackTolopea16px,
  UrbanistBoldMartinique35px,
  UrbanistBoldWhite20px,
  UrbanistSemiBoldCodGray40px,
  UrbanistSemiBoldBlack40px,
  UrbanistSemiBoldBlack40px2,
  ValignTextMiddle,
} from "../../styledMixins";
import "./TabletBig.css";

function TabletBig(props) {
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
    paragraph1,
    spanText14,
    spanText15,
    spanText16,
    spanText17,
    spanText18,
    spanText19,
    paragraph2,
    spanText20,
    spanText21,
    spanText22,
    paragraph3,
    inputType,
    inputPlaceholder,
    getUpdates,
    requestAcessProps,
    group7Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="tablet-big screen">
        <OverlapGroup7>
          <NavBar>
            <DeCommune>{decommune}</DeCommune>
            <Btn>
              <OverlapGroup>
                <Rectangle7></Rectangle7>
                <CommingSoon>{commingSoon}</CommingSoon>
              </OverlapGroup>
            </Btn>
          </NavBar>
          <OverlapGroup1>
            <ADecentralisedAnd>
              <span>
                <span className="urbanist-semi-bold-black-40px">
                  {spanText1}
                </span>
                <span className="urbanist-black-black-40px">{spanText2}</span>
                <span className="urbanist-semi-bold-black-40px">
                  {spanText3}
                </span>
                <span className="urbanist-black-black-40px">{spanText4}</span>
                <span className="urbanist-semi-bold-black-40px">
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
          </OverlapGroup1>
          <OverlapGroup5>
            <Frame1>
              <lottie-player
                src="https://cdn.animaapp.com/projects/63653da52d5ccb2a104f7b32/files/2nd-animation-v2.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </Frame1>
            <CreateDecentralized>
              <span>
                <span className="urbanist-semi-bold-cod-gray-40px">
                  {spanText6}
                </span>
                <Span115>{spanText7}</Span115>
                <Span211>{spanText8}</Span211>
              </span>
            </CreateDecentralized>
            <CreateChannelsToP>
              <span>
                <span className="urbanist-light-black-25px">{spanText9}</span>
                <Span116>{spanText10}</Span116>
                <span className="urbanist-light-black-25px">{spanText11}</span>
              </span>
            </CreateChannelsToP>
          </OverlapGroup5>
        </OverlapGroup7>
        <Component2>
          <OverlapGroup3>
            <Group10>
              <Frame2>
                <lottie-player
                  src="https://cdn.animaapp.com/projects/63653da52d5ccb2a104f7b32/files/3rd-animation-v2.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </Frame2>
              <CreateDecentralizedLivestreams>
                <span>
                  <span className="urbanist-semi-bold-black-40px">
                    {spanText12}
                  </span>
                  <span className="urbanist-black-black-40px">
                    {spanText13}
                  </span>
                </span>
              </CreateDecentralizedLivestreams>
            </Group10>
            <Paragraph>{paragraph1}</Paragraph>
          </OverlapGroup3>
        </Component2>
        <OverlapGroup8>
          <OverlapGroup4>
            <Frame3>
              <lottie-player
                src="https://cdn.animaapp.com/projects/63653da52d5ccb2a104f7b32/files/5th-animation.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </Frame3>
            <SellTicketsToLiveEventsViaNft>
              <span>
                <span className="urbanist-semi-bold-black-40px-2">
                  {spanText14}
                </span>
                <span className="urbanist-black-black-40px-2">
                  {spanText15}
                </span>
                <span className="urbanist-semi-bold-black-40px-2">
                  {spanText16}
                </span>
                <span className="urbanist-black-black-40px-2">
                  {spanText17}
                </span>
                <span className="urbanist-semi-bold-black-40px-2">
                  {spanText18}
                </span>
                <span className="urbanist-black-black-40px-2">
                  {spanText19}
                </span>
              </span>
            </SellTicketsToLiveEventsViaNft>
          </OverlapGroup4>
          <Paragraph1>{paragraph2}</Paragraph1>
        </OverlapGroup8>
        <Component1>
          <OverlapGroup2>
            <Frame4>
              <lottie-player
                src="https://cdn.animaapp.com/projects/63653da52d5ccb2a104f7b32/files/4thanimation-v2.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </Frame4>
            <Group23>
              <CreateMultiTieredMemberships>
                <span>
                  <span className="urbanist-semi-bold-black-40px">
                    {spanText20}
                  </span>
                  <span className="urbanist-black-black-40px">
                    {spanText21}
                  </span>
                  <span className="urbanist-semi-bold-black-40px">
                    {spanText22}
                  </span>
                </span>
              </CreateMultiTieredMemberships>
              <Paragraph2>{paragraph3}</Paragraph2>
            </Group23>
          </OverlapGroup2>
        </Component1>
        <RequestAcess className={requestAcessProps.className} />
        <Footer>
          <OverlapGroup6>
            <OverlapGroupContainer>
              <OverlapGroup9>
                <EnterYourEMail
                  name="enteryoure-mail"
                  placeholder={inputPlaceholder}
                  type={inputType}
                />
              </OverlapGroup9>
              <OverlapGroup11>
                <GetUpdates>{getUpdates}</GetUpdates>
              </OverlapGroup11>
            </OverlapGroupContainer>
            <Frame11>
              <Group9 />
              <Group5 />
              <Group7 className={group7Props.className} />
            </Frame11>
          </OverlapGroup6>
        </Footer>
      </div>
    </div>
  );
}

const OverlapGroup7 = styled.div`
  width: 1259px;
  height: 1505px;
  position: relative;
  margin-top: -145px;
  margin-right: -296px;
`;

const NavBar = styled.div`
  position: absolute;
  height: 49px;
  top: 188px;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 923px;
  gap: 477px;
`;

const DeCommune = styled.div`
  ${ValignTextMiddle}
  ${UrbanistBoldMartinique35px}
            width: 226px;
  height: 25px;
  margin-top: 0.11px;
  letter-spacing: -1.05px;
  line-height: 27px;
  white-space: nowrap;
`;

const Btn = styled.div`
  display: flex;
  padding: 0 0px;
  align-items: flex-start;
  min-width: 222px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    filter: blur(10px);
  }
`;

const OverlapGroup = styled.div`
  width: 220px;
  height: 49px;
  position: relative;
`;

const Rectangle7 = styled.div`
  position: absolute;
  width: 202px;
  height: 49px;
  top: 0;
  left: 0;
  background-color: var(--black);
  border-radius: 50px;
  border: 1px none;
`;

const CommingSoon = styled.div`
  ${ValignTextMiddle}
  ${UrbanistBoldWhite20px}
            position: absolute;
  width: 190px;
  height: 32px;
  top: 9px;
  left: 30px;
  letter-spacing: -0.6px;
  line-height: 10px;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1255px;
  height: 1069px;
  top: 0;
  left: 2px;
`;

const ADecentralisedAnd = styled.p`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlack40px}
            position: absolute;
  width: 345px;
  height: 154px;
  top: 385px;
  left: 0;
  letter-spacing: 1px;
  line-height: 50px;
`;

const Frame = styled.div`
  position: absolute;
  width: 1217px;
  height: 1069px;
  top: 0;
  left: 38px;
  border: 1px none;
`;

const OverlapGroup5 = styled.div`
  position: absolute;
  width: 960px;
  height: 537px;
  top: 968px;
  left: 3px;
`;

const Frame1 = styled.div`
  position: absolute;
  width: 589px;
  height: 496px;
  top: 0;
  left: 371px;
`;

const CreateDecentralized = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldCodGray40px}
            position: absolute;
  width: 406px;
  height: 116px;
  top: 127px;
  left: 0;
  letter-spacing: 1px;
  line-height: 40px;
`;

const Span115 = styled.span`
  font-family: var(--font-family-urbanist);
  font-weight: 700;
  color: var(--cod-gray);
  font-size: var(--font-size-l);
`;

const Span211 = styled.span`
  font-family: var(--font-family-urbanist);
  font-weight: 900;
  color: var(--cod-gray);
  font-size: var(--font-size-l);
`;

const CreateChannelsToP = styled.p`
  ${ValignTextMiddle}
  ${UrbanistLightBlack25px}
            position: absolute;
  width: 460px;
  height: 289px;
  top: 248px;
  left: 2px;
  letter-spacing: 1px;
  line-height: 40px;
`;

const Span116 = styled.span`
  font-family: var(--font-family-urbanist);
  font-weight: 700;
  color: var(--black);
  font-size: var(--font-size-s);
`;

const Component2 = styled.div`
  align-self: flex-start;
  margin-top: 196px;
  margin-left: -38px;
  display: flex;
  align-items: flex-start;
  min-width: 1008px;
`;

const OverlapGroup3 = styled.div`
  width: 1008px;
  height: 369px;
  position: relative;
`;

const Group10 = styled.div`
  position: absolute;
  height: 369px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 1008px;
  gap: 67px;
`;

const Frame2 = styled.div`
  width: 630px;
  height: 369px;
  border: 1px none;
`;

const CreateDecentralizedLivestreams = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlack40px}
            width: 309px;
  height: 90px;
  margin-top: 50px;
  letter-spacing: 1px;
  line-height: 40px;
`;

const Paragraph = styled.p`
  ${ValignTextMiddle}
  ${UrbanistLightBlack25px}
            position: absolute;
  width: 309px;
  height: 140px;
  top: 195px;
  left: 697px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 40px;
`;

const OverlapGroup8 = styled.div`
  width: 1059px;
  height: 468px;
  position: relative;
  margin-top: 175px;
  margin-right: -98px;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 1056px;
  height: 468px;
  top: 0;
  left: 1px;
`;

const Frame3 = styled.div`
  position: absolute;
  width: 691px;
  height: 468px;
  top: 0;
  left: 365px;
  border: 1px none;
`;

const SellTicketsToLiveEventsViaNft = styled.p`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlack40px2}
            position: absolute;
  width: 365px;
  height: 90px;
  top: 144px;
  left: 0;
  letter-spacing: 1px;
  line-height: 40px;
`;

const Paragraph1 = styled.p`
  ${ValignTextMiddle}
  ${UrbanistLightBlack25px}
            position: absolute;
  width: 393px;
  height: 186px;
  top: 273px;
  left: 0;
  letter-spacing: 1px;
  line-height: 40px;
`;

const Component1 = styled.div`
  align-self: center;
  margin-top: 224px;
  margin-right: 7px;
  display: flex;
  align-items: flex-start;
  min-width: 937px;
`;

const OverlapGroup2 = styled.div`
  width: 941px;
  height: 395px;
  position: relative;
`;

const Frame4 = styled.div`
  position: absolute;
  width: 553px;
  height: 395px;
  top: 0;
  left: 0;
  border: 1px none;
`;

const Group23 = styled.div`
  position: absolute;
  width: 408px;
  top: 77px;
  left: 533px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 309px;
`;

const CreateMultiTieredMemberships = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlack40px}
            width: 319px;
  height: 149px;
  letter-spacing: 1px;
  line-height: 40px;
`;

const Paragraph2 = styled.p`
  ${ValignTextMiddle}
  ${UrbanistLightBlack25px}
            width: 404px;
  height: 160px;
  letter-spacing: 1px;
  line-height: 40px;
`;

const Footer = styled.div`
  height: 700px;
  margin-top: 209px;
  display: flex;
  align-items: flex-start;
  min-width: 1021px;
  background-image: url(/img/rectangle-6@1x.svg);
`;

const OverlapGroup6 = styled.div`
  width: 1021px;
  height: 637px;
  position: relative;
`;

const OverlapGroupContainer = styled.div`
  position: absolute;
  width: 1021px;
  height: 605px;
  top: 0;
  left: 0;
  background-image: url(/img/rectangle-6-2@1x.svg);
  background-size: 100% 100%;
`;

const OverlapGroup9 = styled.div`
  position: absolute;
  height: 58px;
  top: 81px;
  left: 154px;
  display: flex;
  padding: 15.9px 31.2px;
  align-items: flex-end;
  min-width: 541px;
  background-color: var(--white);
  border-radius: 10px;
`;

const EnterYourEMail = styled.input`
  ${KanitNormalSkyBlue20px}
  width: 270px;
  height: 25px;
  background-color: transparent;
  opacity: 0.25;
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
  border: 0;
  padding: 0;

  &::placeholder {
    color: #7fdeff99;
  }
`;

const OverlapGroup11 = styled.div`
  position: absolute;
  height: 63px;
  top: 78px;
  left: 664px;
  display: flex;
  padding: 19.8px 8.9px;
  align-items: flex-start;
  min-width: 202px;
  background-color: var(--blue-violet);
  border-radius: 10px;
`;

const GetUpdates = styled.div`
  ${ValignTextMiddle}
  ${UrbanistBlackTolopea16px}
            width: 177px;
  height: 23px;
  opacity: 0.8;
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
  white-space: nowrap;
`;

const Frame11 = styled.div`
  display: flex;
  width: 583px;
  height: 397px;
  align-items: flex-start;
  gap: 60px;
  position: absolute;
  top: 240px;
  left: 219px;
  border: 1px none;
`;

export default TabletBig;
