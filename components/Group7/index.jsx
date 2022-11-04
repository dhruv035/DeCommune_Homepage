import React from "react";
import styled from "styled-components";
import {
  UrbanistSemiBoldShark20px,
  UrbanistSemiBoldShark14px,
  ValignTextMiddle,
} from "../../styledMixins";

function Group7(props) {
  const { className } = props;

  return (
    <Group71 className={`group-7 ${className || ""}`}>
      <Frame10 className="frame-10">
        <Community className="community">Community</Community>
        <Frame6 className="frame-6">
          <Twitter className="twitter">Twitter</Twitter>
          <Telegram className="telegram">Telegram</Telegram>
          <Discord className="discord">Discord</Discord>
          <Discord className="medium">Medium</Discord>
          <Instagram className="instagram">Instagram</Instagram>
        </Frame6>
      </Frame10>
    </Group71>
  );
}

const Group71 = styled.div`
  min-width: 112px;
  height: 266px;
  margin-right: -99.4px;

  &.group-7.group-7-1 {
    margin-right: unset;
  }

  &.group-7.group-7-2 {
    margin-right: unset;
  }

  &.group-7.group-7-3 {
    margin-right: unset;
  }
`;

const Frame10 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  gap: 37px;
  border: 1px none;
`;

const Community = styled.div`
  ${ValignTextMiddle}
  ${UrbanistSemiBoldShark20px}
            width: fit-content;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
  white-space: nowrap;
`;

const Frame6 = styled.div`
  ${UrbanistSemiBoldShark14px}
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  gap: 24px;
  border: 1px none;
`;

const Twitter = styled.div`
  ${ValignTextMiddle}
  width: 64px;
  height: 21px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
  white-space: nowrap;
`;

const Telegram = styled.div`
  ${ValignTextMiddle}
  width: 78px;
  height: 25px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
`;

const Discord = styled.div`
  ${ValignTextMiddle}
  width: 64px;
  height: 21px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
  white-space: nowrap;
`;

const Instagram = styled.div`
  ${ValignTextMiddle}
  width: 79px;
  height: 25px;
  text-align: center;
  letter-spacing: 1px;
  line-height: 20px;
`;

export default Group7;
