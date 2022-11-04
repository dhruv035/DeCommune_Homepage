import { css } from "styled-components";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import MacBookAir from "../components/MacBookAir";
import Phone from "../components/Phone";
import TabletBig from "../components/TabletBig";
import Tablet from "../components/Tablet";
import MacbookPro17 from "../components/MacbookPro17";
import { MediaQuery, useMediaQuery } from "react-responsive";

function Home() {
  const isPhone = useMediaQuery({ maxWidth: 743 });
  const isTablet = useMediaQuery({ minWidth: 744, maxWidth: 1023 });
  const isBigTablet = useMediaQuery({ minWidth: 1024, maxWidth: 1279 });
  const isSmallDesktop = useMediaQuery({ minWidth: 1280, maxWidth: 1400 });
  const isBigDesktop = useMediaQuery({ minWidth: 1401 });
  return (
    <>
      {isBigDesktop && <MacbookPro17 {...macbookPro17Data} />}
      {isSmallDesktop && <MacBookAir {...macBookAirData} />}
      {isBigTablet && <TabletBig {...tabletBigData} />}
      {isTablet && <Tablet {...tabletData} />}
      {isPhone && <Phone {...phoneData} />}
    </>
  );
}

export default Home;
const macBookAirData = {
  decommune: "DeCommune",
  commingSoon: "Comming Soon",
  spanText1: "A",
  spanText2: " Decentralised ",
  spanText3: "and",
  spanText4: " Transparent ",
  spanText5: "subscriptions platform",
  spanText6: "Create ",
  spanText7: (
    <React.Fragment>
      decentralized membership
      <br />
      Channels
    </React.Fragment>
  ),
  spanText8:
    "Create channels to publish media content using decentralized infrastructure and sell membership NFT's for access to ",
  spanText9: "member's only ",
  spanText10: "content through crypto.",
  spanText11: "Create",
  spanText12: " ",
  spanText13: "Decentralized Livestreams",
  paragraph1:
    "Host Livestreams Without A Centralized Provider And Use Crypto To Sell Tickets",
  paragraph2:
    "Make Different Membership Tiers For Enhanced Access Control And Reward Higher Tier Membership With More Exclusive Content.",
  spanText14: "Create",
  spanText15: " ",
  spanText16: (
    <React.Fragment>
      multi <br />
      tiered{" "}
    </React.Fragment>
  ),
  spanText17: "memberships",
  spanText18: "Sell",
  spanText19: " ",
  spanText20: "tickets",
  spanText21: " ",
  spanText22: "to",
  spanText23: (
    <React.Fragment>
      {" "}
      <br />
    </React.Fragment>
  ),
  spanText24: (
    <React.Fragment>
      live events <br />
    </React.Fragment>
  ),
  spanText25: "via",
  spanText26: " ",
  spanText27: "nft",
  paragraph3:
    "Use Nft's As Tickets For Livestreams As Well As In-person Event. Nft's Are Non-forgible And Non-duplicable And Provides A Full-proof Security And Utility.",
  inputType: "email",
  inputPlaceholder: "Enter your E-mail",
  getUpdates: "Get Updates",
};

const requestAcess2Data = {
  className: "request-acess-1",
};

const group72Data = {
  className: "group-7-1",
};

const tabletBigData = {
  decommune: "DeCommune",
  commingSoon: "Comming Soon",
  spanText1: "A",
  spanText2: " Decentralised ",
  spanText3: "and ",
  spanText4: "Transparent ",
  spanText5: "subscriptions platform",
  spanText6: "Create",
  spanText7: " ",
  spanText8: (
    <React.Fragment>
      decentralized membership
      <br />
      Channels
    </React.Fragment>
  ),
  spanText9:
    "Create channels to publish media content using decentralized infrastructure and sell membership NFT's for access to ",
  spanText10: "member's only ",
  spanText11: "content through crypto.",
  spanText12: "Create ",
  spanText13: "Decentralized Livestreams",
  paragraph1:
    "Host Livestreams Without A Centralized Provider And Use Crypto To Sell Tickets",
  spanText14: "Sell ",
  spanText15: "tickets",
  spanText16: (
    <React.Fragment>
      {" "}
      to <br />
    </React.Fragment>
  ),
  spanText17: "live events",
  spanText18: (
    <React.Fragment>
      {" "}
      <br />
      via{" "}
    </React.Fragment>
  ),
  spanText19: "nft",
  paragraph2:
    "Use Nft's As Tickets For Livestreams As Well As In-person Event. Nft's Are Non-forgible And Non-duplicable And Provides A Full-proof Security And Utility.",
  spanText20: "Create ",
  spanText21: (
    <React.Fragment>
      multi <br />
      tiered{" "}
    </React.Fragment>
  ),
  spanText22: "memberships",
  paragraph3:
    "Make Different Membership Tiers For Enhanced Access Control And Reward Higher Tier Membership With More Exclusive Content.",
  inputType: "email",
  inputPlaceholder: "Enter your E-mail",
  getUpdates: "Get Updates",
  requestAcessProps: requestAcess2Data,
  group7Props: group72Data,
};

const group73Data = {
  className: "group-7-2",
};

const tabletData = {
  decommune: "DeCommune",
  commingSoon: "Comming Soon",
  spanText1: "A ",
  spanText2: "Decentralised ",
  spanText3: "and ",
  spanText4: "Transparent ",
  spanText5: "subscriptions platform",
  spanText6: "Create ",
  spanText7: (
    <React.Fragment>
      decentralized membership
      <br />
    </React.Fragment>
  ),
  spanText8: "Channels",
  spanText9:
    "Create channels to publish media content using decentralized infrastructure and sell membership NFT's for access to ",
  spanText10: "member's only ",
  spanText11: "content through crypto.",
  spanText12: "Create ",
  spanText13: "Decentralized Livestreams",
  spanText14:
    "Create channels to publish media content using decentralized infrastructure and sell membership NFT's for access to ",
  spanText15: "member's only ",
  spanText16: "content through crypto.",
  spanText17: "Sell ",
  spanText18: "tickets",
  spanText19: (
    <React.Fragment>
      {" "}
      to <br />
    </React.Fragment>
  ),
  spanText20: (
    <React.Fragment>
      live events <br />
    </React.Fragment>
  ),
  spanText21: "via ",
  spanText22: "nft",
  paragraph1:
    "Use Nft's As Tickets For Livestreams As Well As In-person Event. Nft's Are Non-forgible And Non-duplicable And Provides A Full-proof Security And Utility.",
  spanText23: "Create ",
  spanText24: (
    <React.Fragment>
      multi <br />
      tiered
    </React.Fragment>
  ),
  spanText25: " memberships",
  paragraph2:
    "Make Different Membership Tiers For Enhanced Access Control And Reward Higher Tier Membership With More Exclusive Content.",
  spanText26: (
    <React.Fragment>
      Interested in DeCommune? <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  ),
  spanText27: "Request Access Now",
  requestAccess: "Request Access",
  inputType: "email",
  inputPlaceholder: "Enter your E-mail",
  getUpdates: "Get Updates",
  group7Props: group73Data,
};

const requestAcess3Data = {
  className: "request-acess-2",
};

const group74Data = {
  className: "group-7-3",
};

const macbookPro17Data = {
  decommune: "DeCommune",
  commingSoon: "Comming Soon",
  spanText1: "A",
  spanText2: " Decentralised ",
  spanText3: "and",
  spanText4: " Transparent ",
  spanText5: "subscriptions platform",
  spanText6: "Create ",
  spanText7: "decentralized membership Channels",
  spanText8:
    "Create channels to publish media content using decentralized infrastructure and sell membership NFT's for access to ",
  spanText9: "member's only ",
  spanText10: "content through crypto.",
  spanText11: "Create",
  spanText12: " ",
  spanText13: "Decentralized Livestreams",
  paragraph1:
    "Host Livestreams Without A Centralized Provider And Use Crypto To Sell Tickets",
  spanText14: "Create",
  spanText15: " ",
  spanText16: (
    <React.Fragment>
      multi <br />
      tiered{" "}
    </React.Fragment>
  ),
  spanText17: "memberships",
  paragraph2:
    "Make Different Membership Tiers For Enhanced Access Control And Reward Higher Tier Membership With More Exclusive Content.",
  spanText18: "Sell",
  spanText19: " ",
  spanText20: "tickets",
  spanText21: " ",
  spanText22: "to",
  spanText23: (
    <React.Fragment>
      {" "}
      <br />
    </React.Fragment>
  ),
  spanText24: (
    <React.Fragment>
      live events <br />
    </React.Fragment>
  ),
  spanText25: "via",
  spanText26: " ",
  spanText27: "nft",
  paragraph3:
    "Use Nft's As Tickets For Livestreams As Well As In-person Event. Nft's Are Non-forgible And Non-duplicable And Provides A Full-proof Security And Utility.",
  inputType: "email",
  inputPlaceholder: "Enter your E-mail",
  getUpdates: "Get Updates",
  requestAcessProps: requestAcess3Data,
  group7Props: group74Data,
};

const phoneData = {
  decommune: "DeCommune",
  commingSoon: "Comming Soon",
  component6: "/img/component-6@2x.png",
  spanText1: "Create ",
  spanText2: (
    <React.Fragment>
      decentralized <br />
      membership{" "}
    </React.Fragment>
  ),
  spanText3: "Channels",
  spanText4:
    "Create channels to publish media content using decentralized infrastructure and sell membership NFT's for access to ",
  spanText5: "member's only ",
  spanText6: "content through crypto.",
  spanText7: "Create ",
  spanText8: "Decentralized Livestreams",
  spanText9:
    "Create channels to publish media content using decentralized infrastructure and sell membership NFT's for access to ",
  spanText10: "member's only ",
  spanText11: "content through crypto.",
  spanText12: "Sell ",
  spanText13: "tickets",
  spanText14: " to ",
  spanText15: "live events ",
  spanText16: "via ",
  spanText17: "nft",
  paragraph1:
    "Use Nft's As Tickets For Livestreams As Well As In-person Event. Nft's Are Non-forgible And Non-duplicable And Provides A Full-proof Security And Utility.",
  spanText18: "create ",
  spanText19: "multi tiered",
  spanText20: " memberships",
  paragraph2:
    "Make Different Membership Tiers For Enhanced Access Control And Reward Higher Tier Membership With More Exclusive Content.",
  spanText21: (
    <React.Fragment>
      Interested in DeCommune? <br />
      <br />
      <br />
      <br />
    </React.Fragment>
  ),
  spanText22: "Request Access Now",
  requestAccess: "Request Access",
  inputType: "email",
  inputPlaceholder: "Enter your E-mail",
  getUpdates: "Get Updates",
};
