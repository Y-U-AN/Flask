const header = ReactDOM.createRoot(document.getElementById("header"));
const main   = ReactDOM.createRoot(document.getElementById("main"));
const footer = ReactDOM.createRoot(document.getElementById("footer"));

header.render(<h1>Hello World Header</h1>);
main.render(<h1>Hello World main article</h1>);
footer.render(<h1>Hello World main article</h1>);
