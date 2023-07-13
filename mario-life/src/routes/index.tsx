import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Counter from "~/components/starter/counter/counter";
import Hero from "~/components/starter/hero/hero";
import Infobox from "~/components/starter/infobox/infobox";
import Starter from "~/components/starter/next-steps/next-steps";

export default component$(() => {
    return (
        <>
            <h2>Okie Dokie</h2>
        </>
    );
});

export const head: DocumentHead = {
    title: "Mario Life",
    meta: [
        {
            name: "description",
            content: "A blog site about everything mario",
        },
    ],
    links: [
        {
            rel: "stylesheets",
            href: "somestylesheet.com/styles.css",
        },
    ],
};
