import { component$, useStyles$ } from "@builder.io/qwik";
import AboutStyles from "./about.css?inline";

export default component$(() => {
    useStyles$(AboutStyles);
    return (
        <article>
            <h2>About</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa id laboriosam ratione.
                Cupiditate illo impedit ipsum labore nisi officia perspiciatis reiciendis reprehenderit sed sequi? Ea
                facilis nostrum totam voluptates?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa id laboriosam ratione.
                Cupiditate illo impedit ipsum labore nisi officia perspiciatis reiciendis reprehenderit sed sequi? Ea
                facilis nostrum totam voluptates?
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur culpa id laboriosam ratione.
                Cupiditate illo impedit ipsum labore nisi officia perspiciatis reiciendis reprehenderit sed sequi? Ea
                facilis nostrum totam voluptates?
            </p>
        </article>
    );
});
