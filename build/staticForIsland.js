function countFields(matrix, placeScore) {
    let count = 0;
    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix.length; j += 1) {
            if (matrix[i][j][0] === placeScore) {
                count += 1;
            }
        }
    }
    return count;
}
function countScoreAllFields(matrix) {
    const countArray = [998];
    for (let i = 1; i < 11; i += 1) {
        const count = countFields(matrix, i);
        countArray.push(count);
    }
    return countArray;
}
export default function staticForFieldScores(matrix) {
    return countScoreAllFields(matrix);
}
