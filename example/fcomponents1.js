const main   = ReactDOM.createRoot(document.getElementById("main"));

function Message() {
  return <h1>Hello world from Function Component!</h1>;
}

main.render(<Message />);
