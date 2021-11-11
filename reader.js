function main() {

    const newStyle = document.createElement("link");
    newStyle.rel = "stylesheet";
    newStyle.href = "http://localhost:8080/styles.css";
    document.head.appendChild(newStyle);

    const title = document.createElement("div");
    const titleText = document.createTextNode("Welcome to Really Simple Messaging");
    title.appendChild(titleText);
    title.id = "title";
    document.body.appendChild(title);

    const sign = document.createElement("div");
    const signText = document.createTextNode("Please sign in");
    sign.appendChild(signText);
    sign.id = "signIn";
    document.body.appendChild(sign);
  }
