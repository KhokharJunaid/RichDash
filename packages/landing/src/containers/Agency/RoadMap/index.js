import Image from "next/image";
import CCheck from "../../../common/assets/image/agency/check.png";
import styles from ".//RoadMap.module.css";

const cardData = [
  {
    id: 1,
    question: "Question 1",
    lineOne: "Medical and vision",
    lineTwo: "Life insurance",
    lineThree: "Medical and vision",
    lineFour: "Life insurance",
    lineFive: "Medical and vision",
    lineSix: "Life insurance",
  },
  {
    id: 2,
    question: "Question 2",
    lineOne: "Medical and vision",
    lineTwo: "Life insurance",
    lineThree: "Medical and vision",
    lineFour: "Life insurance",
    lineFive: "Medical and vision",
    lineSix: "Life insurance",
  },
  {
    id: 3,
    question: "Question 3",
    lineOne: "Medical and vision",
    lineTwo: "Life insurance",
    lineThree: "Medical and vision",
    lineFour: "Life insurance",
    lineFive: "Medical and vision",
    lineSix: "Life insurance",
  },
  {
    id: 4,
    question: "Question 4",
    lineOne: "Medical and vision",
    lineTwo: "Life insurance",
    lineThree: "Medical and vision",
    lineFour: "Life insurance",
    lineFive: "Medical and vision",
    lineSix: "Life insurance",
  },
];
function RoadMap() {
  return (
    <div className={styles.main}>
      <h1>The RoadMap</h1>
      <div className={styles.cards}>
        {cardData.map((card) => {
          return (
            <div className={styles.card} key={card.id}>
              <h2>{card.question}</h2>
              <div className={styles.innerDivCard}>
                <div className={styles.cardPart}>
                  <div
                    className={styles.innerPart}
                    style={{
                      width: "15px",
                    }}
                  >
                    <Image width="100%" height="100%" src={CCheck} />
                  </div>
                  <p>{card.lineOne}</p>
                </div>
                <div className={styles.cardPart}>
                  <div
                    className={styles.innerPart}
                    style={{
                      width: "15px",
                    }}
                  >
                    <Image width="100%" height="100%" src={CCheck} />
                  </div>
                  <p>{card.lineTwo}</p>
                </div>
                <br />
                <br />
                <div className={styles.cardPart}>
                  <div
                    className={styles.innerPart}
                    style={{
                      width: "15px",
                    }}
                  >
                    <Image width="100%" height="100%" src={CCheck} />
                  </div>
                  <p>{card.lineThree}</p>
                </div>
                <div className={styles.cardPart}>
                  <div
                    className={styles.innerPart}
                    style={{
                      width: "15px",
                    }}
                  >
                    <Image width="100%" height="100%" src={CCheck} />
                  </div>
                  <p>{card.lineFour}</p>
                </div>
                <br />
                <br />
                <div className={styles.cardPart}>
                  <div
                    className={styles.innerPart}
                    style={{
                      width: "15px",
                    }}
                  >
                    <Image width="100%" height="100%" src={CCheck} />
                  </div>
                  <p>{card.lineFive}</p>
                </div>
                <div className={styles.cardPart}>
                  <div
                    className={styles.innerPart}
                    style={{
                      width: "15px",
                    }}
                  >
                    <Image width="100%" height="100%" src={CCheck} />
                  </div>
                  <p>{card.lineSix}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RoadMap;
