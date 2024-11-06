import Image from "next/image";

import styles from "./ReachUs.module.css";
import Link from "next/link";
const ReachUs = () => {
  return (
    <div className={`${styles.reach_us}`}>
      <div className={styles.left}>
        <span>Something went wrong?</span>
        <h3>Reach Us Here</h3>
        <Link className={styles.btn} href="reach-us">
          Contact Us
        </Link>
      </div>
      <div className={styles.right}>
        <div className={styles.grad_wrapper}>
          <div className={styles.grad}></div>
        </div>
        <Image className={styles.img} src="/assets/reachusCall.png" fill alt="reachusCall" />
      </div>
    </div>
  );
};
export default ReachUs;
