import React from "react";
import styles from "./featued.module.css";
import Image from "next/image";

const Featued = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Santii here!</b> Discover my stories and creative ideas
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            tenetur doloremque officia minus eum quidem inventore delectus,
            optio accusantium voluptatibus at, atque quis nam, quos sit quod.
            Vel, quo explicabo.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featued;
