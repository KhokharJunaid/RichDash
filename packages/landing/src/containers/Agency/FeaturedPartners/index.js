import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import Partner1 from "../../../../src/common/assets/image/agency/partner1.PNG";
import Partner2 from "../../../../src/common/assets/image/agency/partner2.PNG";
import Partner3 from "../../../../src/common/assets/image/agency/partner3.PNG";
import Partner4 from "../../../../src/common/assets/image/agency/partner4.PNG";
import Partner5 from "../../../../src/common/assets/image/agency/partner5.PNG";
import Partner6 from "../../../../src/common/assets/image/agency/partner6.PNG";
import Partner7 from "../../../../src/common/assets/image/agency/partner7.PNG";
import Partner8 from "../../../../src/common/assets/image/agency/partner8.PNG";
import next from "../../../../src/common/assets/image/agency/next.png";
import previous from "../../../../src/common/assets/image/agency/previous.png";
import styles from ".//FeaturedPartners.module.css";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Image src={previous} alt="arrow_left" height={"100px"} width={"100px"} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <Image src={next} alt="arrow_right" height={"100px"} width={"100px"} />
    </div>
  );
}
function FeaturedPartners() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SampleNextArrow />,
  };
  return (
    <div className={styles.mainDiv}>
      <div className={styles.innerPart}>
        <h1>Featured Partners</h1>
        <p>
          If you are intrested in becoming a partner or sponsor, please feel
          free to contact us.
        </p>
      </div>
      <Slider {...settings}>
        <div>
          <Image src={Partner1} height={"100px"} width={"100px"} />
        </div>
        <div>
          <Image src={Partner2} height={"100px"} width={"100px"} />
        </div>
        <div>
          <Image src={Partner3} height={"100px"} width={"100px"} />
        </div>
        <div>
          <Image src={Partner4} height={"100px"} width={"100px"} />
        </div>
        <div>
          <Image src={Partner5} height={"100px"} width={"100px"} />
        </div>
        <div>
          <Image src={Partner6} height={"100px"} width={"100px"} />
        </div>
        <div>
          <Image src={Partner7} height={"100px"} width={"100px"} />
        </div>
        <div>
          <Image src={Partner8} height={"100px"} width={"100px"} />
        </div>
      </Slider>
    </div>
  );
}

export default FeaturedPartners;
