import React from "react";
import styled from "styled-components";
import { UrbanistBoldBlack60px, UrbanistBoldWhite40px, ValignTextMiddle } from "../../styledMixins";


function RequestAcess(props) {
  const { className } = props;

  return (
    <RequestAcess1 className={`request-acess ${className || ""}`}>
      <InterestedInDeComm className="interested-in-de-comm">
        <span>
          <span className="span0-6 urbanist-bold-black-60px">
            Interested in DeCommune? <br />
            <br />
            <br />
            <br />
          </span>
          <span className="span1-6 urbanist-black-black-60px">Request Access Now</span>
        </span>
      </InterestedInDeComm>
      <Btn className="btn-1">
        <OverlapGroup className="overlap-group-3">
          <RequestAccess className="request-access">Request Access</RequestAccess>
        </OverlapGroup>
      </Btn>
    </RequestAcess1>
  );
}

const RequestAcess1 = styled.div`
  width: 880px;
  align-self: center;
  margin-top: 179px;
  margin-left: 2px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 393px;
  gap: 42px;

  &.request-acess.request-acess-1 {
    margin-top: 198px;
  }

  &.request-acess.request-acess-2 {
    margin-top: 83px;
    align-self: unset;
  }
`;

const InterestedInDeComm = styled.h1`
  ${ValignTextMiddle}
  ${UrbanistBoldBlack60px}
            width: 878px;
  height: 229px;
  margin-right: 2px;
  text-align: center;
  letter-spacing: 0;
  line-height: 18px;
`;

const Btn = styled.div`
  margin-left: 39.74px;
  display: flex;
  padding: 0 0px;
  align-items: flex-start;
  min-width: 506px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: translate(0, -5px);
  }
`;

const OverlapGroup = styled.div`
  height: 122px;
  display: flex;
  padding: 0 50.7px;
  justify-content: flex-end;
  align-items: center;
  min-width: 504px;
  background-color: var(--black);
  border-radius: 50px;
`;

const RequestAccess = styled.div`
  ${ValignTextMiddle}
  ${UrbanistBoldWhite40px}
            width: 333px;
  height: 56px;
  letter-spacing: -1.2px;
  line-height: 10px;
`;

export default RequestAcess;
