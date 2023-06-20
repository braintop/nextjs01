import Link from "next/link";
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
interface Post {
    userId: number;
    _id: number;
    title: string;
    desc: string;
    img: string;
}
async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", {
        next: { revalidate: 60 },
    });
    if (!res.ok) {
        throw new Error("failed ti fetch data");
    }
    return res.json();
}
export default async function Blog() {
    const data = await getData();
    console.log(data);
    return (
        <div className={styles.mainContainer}>
            {data.map((item: Post) => {
                return (
                    <Link
                        href={`/blog/${item._id}`}
                        className={styles.container}
                        key={item._id}
                    >
                        <div className={styles.imageContainer}>
                            <Image
                                src={item.img}
                                alt="appschool"
                                width={400}
                                height={250}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.content}>
                            <h1 className={styles.title}>{item.title}</h1>
                            <p className={styles.desc}>{item.desc}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}
