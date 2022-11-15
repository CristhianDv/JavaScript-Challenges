function createXmasTree(height) {
    if (height >= 1 && height <= 100) {
        respuesta = '';
        numStars = 2;
        numUnderScores = 2;
        auxHeight = height - 1;     // 2 * (4) = 8 ... 2 * (3) = 6 ... 2 * (2) = 4
        for (let i = 0; i < height; i++) {
            aux = numUnderScores * auxHeight;
            auxStar = numStars * i + 1;
            auxRespuestaScores = '_';
            auxRespuestaStars = '*';
            auxRespuesta = '';
            auxRespuesta += auxRespuestaScores.repeat(aux/2);
            auxRespuesta += auxRespuestaStars.repeat(auxStar);
            auxRespuesta += auxRespuestaScores.repeat(aux/2);
            respuesta += auxRespuesta + '\n';
            auxHeight -= 1;
        }
        respuesta += '_'.repeat( (height-1));
        respuesta += '#';
        respuesta += '_'.repeat( (height-1)) + '\n';
        respuesta += '_'.repeat( (height-1));
        respuesta += '#';
        respuesta += '_'.repeat( (height-1));
        return respuesta;
    }
}

console.log(createXmasTree(1));
console.log(createXmasTree(30));
// console.log(createXmasTree(101));