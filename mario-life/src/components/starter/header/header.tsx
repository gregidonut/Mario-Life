import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { Link } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <header>
            <h1>Mario Life</h1>
        </header>
    );
});
