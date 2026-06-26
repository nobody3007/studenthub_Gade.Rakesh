function generate(passwordlegngth, includelowercase, includeuppercase, includenumber, includesymbols) {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const syambol = "!@#$%^*()_+-*";
    let allowedChars = "";
    let password = "";
    allowedChars += includelowercase ? lowercase : "";
    allowedChars += includeuppercase ? uppercase : "";
    allowedChars += includenumber ? number : "";
    allowedChars += includesymbols ? syambol : "";

    if (passwordlegngth <= 0) {
        return "(passwrod legnth must be greater than 0)";
    }
    if (allowedChars.length == 0) {
        return "(at least one must be selected)"
    }

    for (let i = 0; i < passwordlegngth; i++) {
        const randomindex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomindex];
    }

    return password;
}


const generateBtn = document.getElementById("generate");
const passwordInput = document.getElementById("password");

generateBtn.addEventListener("click", () => {
    const password = generate
        (
            15,
            true,
            true,
            true,
            true,
        );
    passwordInput.value = password;
});
