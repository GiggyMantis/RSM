function main() {

    const newStyle = document.createElement("link");
    newStyle.rel = "stylesheet";
    newStyle.href = "http://localhost:8080/styles.css";
    document.head.appendChild(newStyle);

    const newDiv = document.createElement("div");
    const newContent = document.createTextNode("Hello World!");
    newDiv.appendChild(newContent);
    newDiv.id = "title";
    document.body.appendChild(newDiv);
  }
