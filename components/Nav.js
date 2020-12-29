export default links => `
<nav class="topnav">
    <ul>
    ${links.reduce(
        (html, link) =>
        html +
        `<li><a href="/${link.title !== "Home" ? link.title : ""}" title="${
        link.title
        }" data-navigo>${link.text}</a></li>`,
    ``
    )}
    </ul>
</nav>
`;