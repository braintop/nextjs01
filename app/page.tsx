import Image from "next/image";
import styles from "./page.module.css";
import hero from "../public/hero.png";
import Button from "./components/Button/Button";
export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Lets learn fullstack</h1>
                <p className={styles.desc}>
                    To become expert on full stack lets see...
                </p>
                <Button url="/portfolio" text="See our lessons" />
            </div>
            <div className={styles.item}>
                <Image src={hero} alt="hero" className={styles.img} />
            </div>
        </div>
    );
}
