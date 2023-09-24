import styles from "./Hero.module.css";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <>
      <div className={styles.hero}>
        <div className="self-center">
          <h1 className="text-[3rem] pt-12 text-gray-100 drop-shadow-sm">What&apos;s your new destination?</h1>
        </div>
        <form>
          <div className={styles.text}>
            <label>Where</label>
            <input
              className={styles.text_input}
              type="text"
              placeholder="Search Location"
            />
          </div>
          <div className={styles.from}>
            <span className={styles.border}></span>
            <label>From</label>
            <input type="date" />
          </div>
          <div className={styles.until}>
            <span className={styles.border}></span>
            <label>Until</label>
            <input type="date" />
          </div>
          <div className={styles.search_btn}>
            <button className={styles.btn}>Search for cars</button>
            <AiOutlineSearch size={25} className={styles.icon} />
          </div>
        </form>
      </div>
    </>
  );
};

export default Hero;
