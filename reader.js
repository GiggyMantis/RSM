function main() {

    if (document.head.getAttribute("data-has-rsm") == "yes") {
        throw new Error("Already added RSM to this page");
    } else {
        document.head.setAttribute("data-has-rsm", "yes");
    }

    const newStyle = document.createElement("link");
    newStyle.rel = "stylesheet";
    newStyle.href = "http://localhost:8080/styles.css";
    document.head.appendChild(newStyle);

    const darkMode = document.createElement("button");
    darkMode.innerText = "Toggle Dark Mode";
    darkMode.className = "darkmode-btn";
    darkMode.onclick = function(){
        var r = document.querySelector(':root');
        var rs = getComputedStyle(r);

        var x;
        x = rs.getPropertyValue('--white');
        r.style.setProperty('--white',rs.getPropertyValue('--black'));
        r.style.setProperty('--black',x);

        x = rs.getPropertyValue('--grey');
        r.style.setProperty('--grey',rs.getPropertyValue('--light'));
        r.style.setProperty('--light',x);

        x = rs.getPropertyValue('--textbox');
        r.style.setProperty('--textbox',rs.getPropertyValue('--textbox-dark'));
        r.style.setProperty('--textbox-dark',x);
    }
    document.body.appendChild(darkMode);

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

    const loginDiv = document.createElement("div");
    loginDiv.className="login-div";
    const formDiv = document.createElement("div");
    formDiv.className="form";
    
    
    const usernameDiv = document.createElement("div");
    usernameDiv.className="username";
    const usernameInput = document.createElement("input");
    usernameInput.type="text";
    usernameInput.className="username-box";
    usernameInput.placeholder = "Username";

    usernameDiv.appendChild(usernameInput);
    formDiv.appendChild(usernameDiv);

    const passDiv = document.createElement("div");
    passDiv.className="password";
    const passwordInput = document.createElement("input");
    passwordInput.type="password";
    passwordInput.className="username-box";
    passwordInput.placeholder = "Password";

    passDiv.appendChild(passwordInput);
    formDiv.appendChild(passDiv);
    loginDiv.appendChild(formDiv);

    const optionsDiv = document.createElement("div");
    optionsDiv.className="options";
    const rememberMe = document.createElement("div");
    rememberMe.className="remember-me";
    const rememberBox = document.createElement("input");
    rememberBox.type="checkbox";
    rememberBox.id="remember-me";
    const labelForRemember = document.createElement("label");
    labelForRemember.setAttribute("for","remember-me");
    labelForRemember.textContent = "Remember me?";
    rememberMe.appendChild(rememberBox);
    rememberMe.appendChild(labelForRemember);
    optionsDiv.appendChild(rememberMe);

    const forgotPass = document.createElement("div");
    forgotPass.className="forgot-password";
    const forgotPassLink = document.createElement("a");
    forgotPassLink.href="#";
    const forgotPassText = document.createTextNode("Forgot Password?");
    forgotPassLink.appendChild(forgotPassText);
    forgotPass.appendChild(forgotPassLink);
    optionsDiv.appendChild(forgotPass);

    loginDiv.appendChild(optionsDiv);

    const signUpOrLogin = document.createElement("div");
    signUpOrLogin.className="sign-up-or-login";
    const login = document.createElement("button");
    login.textContent="LOGIN";
    login.className="signin-btn";
    const signUp = document.createElement("button");
    signUp.textContent="SIGN UP";
    signUp.className="signup-btn";
    signUpOrLogin.appendChild(login);
    signUpOrLogin.appendChild(signUp);
    
    loginDiv.appendChild(signUpOrLogin);

    document.body.appendChild(loginDiv);

    
}

