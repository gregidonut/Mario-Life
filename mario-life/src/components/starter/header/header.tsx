import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";

export default component$(() => {
    return (
        <header>
            <img src="/cursed-mario.svg" alt="cursed-mario-image" />
            <h1>Mario Life</h1>
        </header>
    );
});
