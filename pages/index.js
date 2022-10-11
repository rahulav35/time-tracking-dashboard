import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import Tasks from "../components/task/Task";
import data from "../data.json";
function App() {
  const [selected, setSelected] = useState("daily");
  const [images, setImages] = useState([
    {
      image: "/assets/images/icon-work.svg",
      color: "hsl(235, 45%, 61%)",
    },

    {
      image: "/assets/images/icon-play.svg",
      color: "white",
    },
    {
      image: "/assets/images/icon-study.svg",
      color: "black",
    },
    {
      image: "/assets/images/icon-exercise.svg",
      color: "red",
    },
    {
      image: "/assets/images/icon-social.svg",
      color: "orange",
    },
    {
      image: "/assets/images/icon-self-care.svg",
      color: "green",
    },
  ]);

  function distribute(item) {
    if (selected === "daily") {
      return {
        current: item.timeframes.daily.current,
        previous: item.timeframes.daily.previous,
      };
    } else if (selected === "weekly") {
      return {
        current: item.timeframes.weekly.current,
        previous: item.timeframes.weekly.previous,
      };
    } else {
      return {
        current: item.timeframes.monthly.current,
        previous: item.timeframes.monthly.previous,
      };
    }
  }
  return (
    <div className={styles.maindiv}>
      <div className={styles.firstdiv}>
        <div className={styles.profilediv}>
          <div className={styles.namediv}>
            <img src="/assets/images/image-jeremy.png" alt="" />
            <h3 className={styles.report}> Report for</h3>
            <h1 className={styles.jeremy}> Jeremy Robson</h1>
          </div>
          <h1
            style={{
              color: selected === "daily" ? "white" : " hsl(235, 45%, 61%)",
            }}
            onClick={() => {
              setSelected("daily");
            }}
            className={styles.daily}
          >
            Daily
          </h1>
          <h1
            style={{
              color: selected === "weekly" ? "white" : " hsl(235, 45%, 61%)",
            }}
            onClick={() => {
              setSelected("weekly");
            }}
            className={styles.daily}
          >
            Weekly
          </h1>
          <h1
            style={{
              color: selected === "monthly" ? "white" : " hsl(235, 45%, 61%)",
            }}
            onClick={() => {
              setSelected("monthly");
            }}
            className={styles.daily}
          >
            Monthly
          </h1>
        </div>
        <div className={styles.detailsdiv}>
          {data.map((item, index) => {
            return (
              <Tasks
                backgroundColor={images[index].color}
                backgroundImage={images[index].image}
                duration={distribute(item).current}
                todo={item.title}
                weeks={distribute(item).previous}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
