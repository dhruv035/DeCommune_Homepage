import React from "react";
import styled from "styled-components";
import {
  UrbanistSemiBoldCodGray15px,
  UrbanistLightBlack10px,
  UrbanistSemiBoldBlack15px,
  UrbanistBoldBlack20px,
  UrbanistBoldBlack15px,
  UrbanistSemiBoldBlack15px2,
  UrbanistBoldWhite10px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Phone.css";

function Phone(props) {
  const {
    decommune,
    commingSoon,
    component6,
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
    paragraph1,
    spanText18,
    spanText19,
    spanText20,
    paragraph2,
    spanText21,
    spanText22,
    requestAccess,
    inputType,
    inputPlaceholder,
    getUpdates,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="phone screen">
        <OverlapGroup3>
          <Navbar>
            <DeCommune>{decommune}</DeCommune>
            <Btn>
              <OverlapGroup>
                <CommingSoon>{commingSoon}</CommingSoon>
              </OverlapGroup>
            </Btn>
          </Navbar>
          <Component6 src={component6} alt="Component 6" />
          <Group29>
            <Group24>
              <CreateDecentralized>
                <span>
                  <span className="urbanist-semi-bold-cod-gray-15px">
                    {spanText1}
                  </span>
                  <Span17>{spanText2}</Span17>
                  <span className="urbanist-semi-bold-cod-gray-15px">
                    {spanText3}
                  </span>
                </span>
              </CreateDecentralized>
              <Frame>
                <lottie-player
                  src="https://cdn.animaapp.com/projects/63653da52d5ccb2a104f7b32/files/2nd-animation-v2.json"
                  background="transparent"
                  speed="1"
                  loop
                  autoplay
                ></lottie-player>
              </Frame>
              <CreateChannelsToP>
                <span>
                  <span className="urbanist-light-black-10px">{spanText4}</span>
                  <span className="urbanist-bold-black-10px">{spanText5}</span>
                  <span className="urbanist-light-black-10px">{spanText6}</span>
                </span>
              </CreateChannelsToP>
            </Group24>
            <Group25>
              <Component2>
                <CreateDecentralizedLivestreams>
                  <span>
                    <span className="urbanist-semi-bold-black-15px-2">
                      {spanText7}
                    </span>
                    <span className="urbanist-black-black-15px-2">
                      {spanText8}
                    </span>
                  </span>
                </CreateDecentralizedLivestreams>
                <Frame1>
                  <lottie-player
                    src="https://cdn.animaapp.com/projects/63653da52d5ccb2a104f7b32/files/3rd-animation-v2.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player>
                </Frame1>
              </Component2>
              <CreateChannelsToP1>
                <span>
                  <span className="urbanist-light-black-10px">{spanText9}</span>
                  <span className="urbanist-bold-black-10px">{spanText10}</span>
                  <span className="urbanist-light-black-10px">
                    {spanText11}
                  </span>
                </span>
              </CreateChannelsToP1>
            </Group25>
            <Group27>
              <SellTicketsToLiveEventsViaNft>
                <span>
                  <span className="urbanist-semi-bold-black-15px">
                    {spanText12}
                  </span>
                  <span className="urbanist-black-black-15px">
                    {spanText13}
                  </span>
                  <span className="urbanist-semi-bold-black-15px">
                    {spanText14}
                  </span>
                  <span className="urbanist-black-black-15px">
                    {spanText15}
                  </span>
                  <span className="urbanist-semi-bold-black-15px">
                    {spanText16}
                  </span>
                  <span className="urbanist-black-black-15px">
                    {spanText17}
                  </span>
                </span>
              </SellTicketsToLiveEventsViaNft>
              <Paragraph>{paragraph1}</Paragraph>
            </Group27>
            <Group26>
              <Component1>
                <CreateMultiTieredMemberships>
                  <span>
                    <span className="urbanist-bold-black-15px">
                      {spanText18}
                    </span>
                    <span className="urbanist-black-black-15px-2">
                      {spanText19}
                    </span>
                    <span className="urbanist-bold-black-15px">
                      {spanText20}
                    </span>
                  </span>
                </CreateMultiTieredMemberships>
                <Frame2>
                  <lottie-player
                    src="https://cdn.animaapp.com/projects/63653da52d5ccb2a104f7b32/files/4thanimation-v2.json"
                    background="transparent"
                    speed="1"
                    loop
                    autoplay
                  ></lottie-player>
                </Frame2>
              </Component1>
              <Paragraph1>{paragraph2}</Paragraph1>
            </Group26>
          </Group29>
          <Frame3>
            <lottie-player
              src="https://cdn.animaapp.com/projects/63653da52d5ccb2a104f7b32/files/5th-animation.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </Frame3>
          <Frame4>
            <lottie-player
              src="https://cdn.animaapp.com/projects/63653da52d5ccb2a104f7b32/files/1-st-animationv5.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </Frame4>
        </OverlapGroup3>
        <RequestAcess>
          <InterestedInDeComm>
            <span>
              <span className="urbanist-bold-black-20px">{spanText21}</span>
              <span className="urbanist-black-black-20px">{spanText22}</span>
            </span>
          </InterestedInDeComm>
          <Btn1>
            <OverlapGroup1>
              <RequestAccess>{requestAccess}</RequestAccess>
            </OverlapGroup1>
          </Btn1>
        </RequestAcess>
        <Footer>
          <BoxFooter>
            <Footer1>
              <OverlapGroupContainer>
                <OverlapGroup2>
                  <EnterYourEMail
                    name="enteryoure-mail"
                    placeholder={inputPlaceholder}
                    type={inputType}
                  />
                </OverlapGroup2>
                <OverlapGroup11>
                  <GetUpdates>{getUpdates}</GetUpdates>
                </OverlapGroup11>
              </OverlapGroupContainer>
            </Footer1>
          </BoxFooter>
        </Footer>
      </div>
    </div>
  );
}

const OverlapGroup3 = styled.div`
  width: 663px;
  height: 2135px;
  position: relative;
  margin-top: -34px;
  margin-left: -112px;
`;

const Navbar = styled.div`
  position: absolute;
  height: 21px;
  top: 67px;
  left: 141px;
  display: flex;
  align-items: center;
  min-width: 303px;
  gap: 128px;
`;

const DeCommune = styled.div`
  ${ValignTextMiddle}
  width: 86px;
  height: 14px;
  margin-bottom: 1px;
  font-family: var(--font-family-urbanist);
  font-weight: 700;
  color: var(--martinique);
  font-size: var(--font-size-xxs);
  letter-spacing: -0.45px;
  line-height: 27px;
  white-space: nowrap;
`;

const Btn = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 89px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    filter: blur(10px);
  }
`;

const OverlapGroup = styled.div`
  height: 21px;
  display: flex;
  padding: 0 7.7px;
  justify-content: flex-end;
  align-items: center;
  min-width: 87px;
  background-color: var(--black);
  border-radius: 50px;
`;

const CommingSoon = styled.div`
  ${ValignTextMiddle}
  ${UrbanistBoldWhite10px}
            width: 66px;
  height: 13px;
  letter-spacing: -0.3px;
  line-height: 10px;
`;

const Component6 = styled.img`
  position: absolute;
  width: 1px;
  height: 1px;
  top: 1680px;
  left: 128px;
`;

const Group29 = styled.div`
  position: absolute;
  width: 371px;
  top: 531px;
  left: 115px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 1604px;
`;

const Group24 = styled.div`
  width: 375px;
  margin-left: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 382px;
`;

const CreateDecentralized = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldCodGray15px}
            width: 301px;
  height: 73px;
  margin-right: 22px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
`;

const Span17 = styled.span`
  font-family: var(--font-family-urbanist);
  font-weight: 900;
  color: var(--cod-gray);
  font-size: var(--font-size-xxs);
`;

const Frame = styled.div`
  width: 357px;
  height: 236px;
  align-self: flex-start;
`;

const CreateChannelsToP = styled.p`
  ${ValignTextMiddle}
  ${UrbanistLightBlack10px}
            width: 232px;
  height: 52px;
  margin-top: 21px;
  margin-right: 23px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 11px;
`;

const Group25 = styled.div`
  width: 345px;
  align-self: flex-start;
  margin-top: 92px;
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 317px;
  gap: 9px;
`;

const Component2 = styled.div`
  width: 345px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 241px;
  gap: 13px;
`;

const CreateDecentralizedLivestreams = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlack15px2}
            width: 232px;
  height: 27px;
  margin-right: 1px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
`;

const Frame1 = styled.div`
  width: 343px;
  height: 201px;
  margin-right: 2px;
  border: 1px none;
`;

const CreateChannelsToP1 = styled.p`
  ${ValignTextMiddle}
  ${UrbanistLightBlack10px}
            width: 232px;
  height: 67px;
  margin-right: 3px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 11px;
`;

const Group27 = styled.div`
  width: 234px;
  margin-top: 87px;
  margin-right: 19px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 327px;
  gap: 248px;
`;

const SellTicketsToLiveEventsViaNft = styled.p`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldBlack15px}
            width: 232px;
  height: 33px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
`;

const Paragraph = styled.p`
  ${ValignTextMiddle}
  ${UrbanistLightBlack10px}
            width: 232px;
  height: 46px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 10px;
`;

const Group26 = styled.div`
  width: 291px;
  margin-top: 80px;
  margin-right: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 319px;
  gap: 13px;
`;

const Component1 = styled.div`
  width: 293px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 248px;
`;

const CreateMultiTieredMemberships = styled.div`
  ${ValignTextMiddle}
  ${UrbanistBoldBlack15px}
            width: 232px;
  height: 40px;
  margin-right: 7px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
`;

const Frame2 = styled.div`
  width: 291px;
  height: 208px;
  margin-right: 2px;
  border: 1px none;
`;

const Paragraph1 = styled.p`
  ${ValignTextMiddle}
  ${UrbanistLightBlack10px}
            width: 232px;
  height: 58px;
  margin-right: 7px;
  text-align: justify;
  letter-spacing: 1px;
  line-height: 11px;
`;

const Frame3 = styled.div`
  position: absolute;
  width: 263px;
  height: 178px;
  top: 1468px;
  left: 162px;
  border: 1px none;
`;

const Frame4 = styled.div`
  position: absolute;
  width: 663px;
  height: 583px;
  top: 0;
  left: 0;
  border: 1px none;
`;

const RequestAcess = styled.div`
  width: 362px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 141px;
  gap: 13px;
`;

const InterestedInDeComm = styled.p`
  ${ValignTextMiddle}
  ${UrbanistBoldBlack20px}
            width: 360px;
  height: 88px;
  margin-right: 2px;
  text-align: center;
  letter-spacing: 0;
  line-height: 6px;
`;

const Btn1 = styled.div`
  margin-right: 1px;
  display: flex;
  align-items: flex-start;
  min-width: 167px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const OverlapGroup1 = styled.div`
  height: 40px;
  display: flex;
  padding: 0 32px;
  align-items: center;
  min-width: 165px;
  background-color: var(--black);
  border-radius: 50px;
`;

const RequestAccess = styled.div`
  ${ValignTextMiddle}
  width: 101px;
  height: 22px;
  font-family: var(--font-family-urbanist);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xxs);
  letter-spacing: -0.45px;
  line-height: 10px;
`;

const Footer = styled.div`
  display: flex;
  margin-top: 95px;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  border: 1px none;
  background-image: url(/img/rectangle-6@1x.svg);
`;

const BoxFooter = styled.div`
  min-width: 360px;
  height: 184.99998474121094px;
  background-image: url(/img/rectangle-6-1@2x.svg);
  background-size: 100% 100%;
`;

const Footer1 = styled.div`
  position: relative;
  top: 62px;
  left: 64px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 244px;
`;

const OverlapGroupContainer = styled.div`
  width: 244px;
  height: 31px;
  position: relative;
  margin-top: 0;
  margin-right: 100px;
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  height: 28px;
  top: 2px;
  left: 0;
  display: flex;
  padding: 7.6px 11px;
  align-items: flex-end;
  min-width: 185px;
  background-color: var(--white);
  border-radius: 10px;
`;

const EnterYourEMail = styled.input`
  width: 127px;
  height: 12px;
  background-color: transparent;
  opacity: 0.25;
  font-family: var(--font-family-kanit);
  font-weight: 400;
  color: var(--sky-blue);
  font-size: var(--font-size-xxxs);
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
  height: 31px;
  top: 0;
  left: 145px;
  display: flex;
  padding: 8.7px 5px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 99px;
  background-image: url(/img/button@2x.svg);
  background-size: 100% 100%;
`;

const GetUpdates = styled.div`
  ${ValignTextMiddle}
  width: 82px;
  height: 12px;
  opacity: 0.8;
  font-family: var(--font-family-urbanist);
  font-weight: 900;
  color: var(--tolopea);
  font-size: var(--font-size-xxxs);
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
  white-space: nowrap;
`;

export default Phone;
