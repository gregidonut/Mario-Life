import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <header>
            <Link href="/">
                <div class={styles.wrapper}>
                    <img
                        width="37.9"
                        height="68.5"
                        class={styles.logo}
                        src="/cursed-mario.svg"
                        alt="cursed-mario-image"
                    />
                    <h1>Mario Life</h1>
                </div>
            </Link>
            <ul>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
        </header>
    );
});
