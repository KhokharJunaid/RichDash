import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import Logo from "common/components/UIElements/Logo";
import Container from "common/components/UI/Container";
import FooterWrapper, { List, ListItem } from "./footer.style";

import LogoImage from "common/assets/image/agency/logo.png";

import data from "common/data/Agency";
import { styles } from "styled-system";

const Footer = ({
  row,
  col,
  colOne,
  colTwo,
  titleStyle,
  logoStyle,
  textStyle,
}) => {
  return (
    <FooterWrapper id="footerSection">
      <Container>
        <Box className="row" {...row}>
          <Box {...colTwo}>
            {data.menuWidget.map((widget) => (
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "left",
                }}
                className="col"
                {...col}
                key={widget.id}
              >
                <Heading content={widget.title} {...titleStyle} />
                <List>
                  {widget.menuItems.map((item) => (
                    <ListItem key={`list__item-${item.id}`}>
                      <Link href={item.url}>
                        <a className="ListItem">{item.text}</a>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </Box>
            ))}
          </Box>
          {/* End of footer List column */}
          <hr />
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            {...colOne}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Logo
                href="#"
                logoSrc={LogoImage}
                title="Agency"
                logoStyle={logoStyle}
              />
              <p
                style={{
                  marginTop: "18px",
                  marginLeft: "10px",
                }}
              >
                Copyright &copy; 2022 by Richdash
              </p>
            </div>
            <div>
              <Link href="#">
                <a
                  style={{
                    marginRight: "15px",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  Home
                </a>
              </Link>
              <Link href="#">
                <a
                  style={{
                    marginRight: "15px",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  Advertise
                </a>
              </Link>
              <Link href="#">
                <a
                  style={{
                    marginRight: "15px",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  Supports
                </a>
              </Link>
              <Link href="#">
                <a
                  style={{
                    marginRight: "15px",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  Marketing
                </a>
              </Link>
              <Link href="#">
                <a
                  style={{
                    marginRight: "15px",
                    color: "black",
                    fontSize: "18px",
                  }}
                >
                  FAQ
                </a>
              </Link>
            </div>
          </Box>
          {/* <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
              }}
            >
              <Logo
                href="#"
                logoSrc={LogoImage}
                title="Agency"
                logoStyle={logoStyle}
              />
              <p>Copyright &copy; 2022 by Richdash</p>
            </div>
            <div>
              <Link href="#">
                <a>Home</a>
              </Link>
              <Link href="#">
                <a>Advertise</a>
              </Link>
              <Link href="#">
                <a>Supports</a>
              </Link>
              <Link href="#">
                <a>Marketing</a>
              </Link>
              <Link href="#">
                <a>FAQ</a>
              </Link>
            </div>
          </div> */}
        </Box>
      </Container>
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: "wrap",
    ml: "-4px",
    mr: "-4px",
  },
  // Footer col one style
  colOne: {
    width: ["100%", "70%", "100%", "100%"],
    flexBox: true,
    flexWrap: "wrap",
  },
  // Footer col two style
  colTwo: {
    width: ["100%", "100%", "100%", "100%", "100"],
    flexBox: true,
    flexWrap: "wrap",
  },

  // Footer col default style
  col: {
    width: ["100%", "50%", "50%", "25%"],
    pl: "15px",
    pr: "15px",
    mb: "30px",
  },
  // widget title default style
  titleStyle: {
    color: "#343d48",
    fontSize: "16px",
    fontWeight: "700",
  },
  // Default logo size
  logoStyle: {
    width: "128px",
    mb: "15px",
  },
  // widget text default style
  textStyle: {
    color: "#0f2137",
    fontSize: "16px",
    mb: "10px",
  },
};

export default Footer;
