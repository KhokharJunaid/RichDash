import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import FeatureBlock from "common/components/FeatureBlock";
import data from "common/data/Agency";
import Container from "common/components/UI/Container";
import FeatureSectionWrapper from "./featureSection.style";
import Image from "next/image";
import CreditCards from "../../../common/assets/image/iicons/creditcard.png";
import AutoLoans from "../../../common/assets/image/iicons/AutoLoans.png";
import Banking from "../../../common/assets/image/iicons/Banking.png";
import Insurance from "../../../common/assets/image/iicons/Insurance.png";
import Investment from "../../../common/assets/image/iicons/investment.png";
import Mortgeges from "../../../common/assets/image/iicons/Mortgages.png";
import PersonalLoans from "../../../common/assets/image/iicons/PersonalLoans.png";
import SmallBusiness from "../../../common/assets/image/iicons/SmallBusiness.png";
import StudentLoan from "../../../common/assets/image/iicons/StudentLoan.png";
import Travel from "../../../common/assets/image/iicons/Travel.png";
import Row from "antd";
import Col from "antd";
import styles from "../../../containers/Agency/FeatureSection/ffeatureSection.module.css";

const cards = [
  {
    id: 1,
    icon: CreditCards,
    title: "Best of Credit Cards",
    backgroundColor: "rgba(255,148,249,0.4)",
  },
  {
    id: 2,
    icon: Investment,
    title: "Best of Investing",
    backgroundColor: "rgba(33,255,91,0.4)",
  },
  {
    id: 3,
    icon: Insurance,
    title: "Best of Insurance",
    backgroundColor: "rgba(255,148,249,0.4)",
  },
  {
    id: 4,
    icon: StudentLoan,
    title: "Best of Student Loans",
    backgroundColor: "rgba(33,255,91,0.4)",
  },
  {
    id: 5,
    icon: Mortgeges,
    title: "Best of Mortgages",
    backgroundColor: "rgba(255,148,249,0.4)",
  },
  {
    id: 6,
    icon: PersonalLoans,
    title: "Best of Personal Loans",
    backgroundColor: "rgba(33,255,91,0.4)",
  },
  {
    id: 7,
    icon: Banking,
    title: "Best of Banking",
    backgroundColor: "rgba(255,148,249,0.4)",
  },
  {
    id: 8,
    icon: Travel,
    title: "Best of Travel",
    backgroundColor: "rgba(33,255,91,0.4)",
  },
  {
    id: 9,
    icon: SmallBusiness,
    title: "Best of Small business",
    backgroundColor: "rgba(255,148,249,0.4)",
  },
  {
    id: 10,
    icon: AutoLoans,
    title: "Best of Auto Loans",
    backgroundColor: "rgba(33,255,91,0.4)",
  },
];

const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  return (
    <FeatureSectionWrapper id="featureSection">
      <Container>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          {...sectionHeader}
        >
          <Heading
            style={{ fontSize: "40px", fontWeight: "500", width: "60%" }}
            content="Choose dashboard for every stage of your customer journey"
            {...sectionTitle}
          />
          <Text
            style={{
              color: "#343d48cc",
              fontWeight: "400",
              lineHeight: "2.1",
              marginTop: "15px",
              letterSpacing: "0px",
              padding: "0 15px",
              fontSize: "16px",
              width: "60%",
            }}
            content="The rise of mobile devices transform the way we consume infromation entirely and the world's most relevant channels such as Facebook and Instagram are almost exclusively used on mobile"
            {...sectionSubTitle}
          />
        </Box>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
          className="row"
          {...row}
        >
          <div className={styles.ccard}>
            {cards.map((card, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      width: "80px",
                      backgroundColor: card.backgroundColor,
                      padding: "10px",
                      borderRadius: "10px",
                      marginBottom: "10px",
                    }}
                    key={card.id}
                  >
                    <Image src={card.icon} />
                  </div>
                  <p>{card.title}</p>
                </div>
              );
            })}
          </div>
        </Box>
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ["40px", "56px"],
  },
  // sub section default style
  sectionSubTitle: {
    as: "span",
    display: "block",
    textAlign: "center",
    fontSize: "14px",
    letterSpacing: "0.15em",
    fontWeight: "700",
    color: "#10ac84",
    mb: "10px",
  },
  // section title default style
  sectionTitle: {
    textAlign: "center",
    fontSize: ["20px", "24px"],
    fontWeight: "400",
    color: "#0f2137",
    letterSpacing: "-0.025em",
    mb: "0",
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    borderLeft: "1px solid #f1f4f6",
    borderBottom: "1px solid #f1f4f6",
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ["30px", "20px", "30px", "40px"],
  },
  // feature icon default style
  iconStyle: {
    width: "84px",
    height: "84px",
    m: "0 auto",
    borderRadius: "50%",
    bg: "#93d26e",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "36px",
    color: "#ffffff",
    overflow: "hidden",
    mb: "30px",
  },
  // feature content default style
  contentStyle: {
    textAlign: "center",
  },
  // feature title default style
  featureTitle: {
    fontSize: ["18px", "20px"],
    fontWeight: "400",
    color: "#0f2137",
    lineHeight: "1.5",
    mb: ["10px", "10px", "10px", "20px"],
    letterSpacing: "-0.020em",
  },
  // feature description default style
  featureDescription: {
    fontSize: "15px",
    lineHeight: "1.75",
    color: "#343d48cc",
  },
};

export default FeatureSection;
