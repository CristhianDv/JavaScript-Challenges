function isValid(letter) {
    for (let i = 0; i < letter.length ; i++){
        if ( (letter[i] == '(' && letter[i+1] == ')') || (letter[i] == '(' && letter [i+1] == '(')) {
            return false;
        } else if (letter[i] == '('){
            for (let j = i+1; j < letter.length; j++) {
                if (letter[j] == '{' || letter[j] == '[' || letter[j] == '(') {
                    return false;
                } else if (letter[j] == ')') {
                    return true;
                }
            }
        }
    }
    return false;
}


word = isValid("bici coche (balón) bici coche peluche");
word1 = isValid("(muñeca) consola bici");
word2 = isValid("bici coche (balón bici coche");
word3 = isValid("peluche (bici [coche) bici coche balón");
word4 = isValid("(peluche {) bici");
word5 = isValid("(()) bici");
word6 = isValid("( gg )");
document.write(word + "<br>");
document.write(word1 + "<br>");
document.write(word2 + "<br>");
document.write(word3 + "<br>");
document.write(word4 + "<br>");
document.write(word5 + "<br>");
document.write(word6 + "<br>");
// "(a() bici (a)" debería ser inválido
