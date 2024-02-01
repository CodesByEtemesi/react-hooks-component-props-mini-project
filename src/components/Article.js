import React from "react";

function Article({ title, date = "January 1, 1970", preview, readTime }) {

    const getCoffeeCups = (minutes) => {
        const cups = Math.ceil(minutes / 5);
        return "=".repeat(cups);
    };

    return (
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{getCoffeeCups(readTime)} {readTime} min read </p>

        </article>
    );
}

export default Article;