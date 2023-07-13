import { component$, useStylesScoped$ } from "@builder.io/qwik";
import ContactStyles from "./contact.css?inline";

export default component$(() => {
    useStylesScoped$(ContactStyles);

    return (
        <article>
            <h2>Contact Us</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa id laboriosam ratione.
                Cupiditate illo impedit ipsum labore nisi officia perspiciatis reiciendis reprehenderit sed sequi? Ea
                facilis nostrum totam voluptates?
            </p>
        </article>
    );
});
