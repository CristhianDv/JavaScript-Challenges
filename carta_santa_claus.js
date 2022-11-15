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