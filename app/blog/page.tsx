import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}
async function getData() {
    const res = await fetch("http://localhost:3000/api/post");
    if (!res.ok) {
        throw new Error("failed ti fetch data");
    }
    return res.json();
}
export default async function Blog() {
    const data = await getData();
    return (
        <div className={styles.mainContainer}>
            {data.map((item: Post) => {
                return (
                    <Link
                        href="/blog/1"
                        className={styles.container}
                        key={item.id}
                    >
                        <div className={styles.imageContainer}>
                            <Image
                                src="https://images.pexels.com/photos/733853/pexels-photo-733853.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt="braintop"
                                width={400}
                                height={250}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.desc}>{item.body}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
