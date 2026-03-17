/**
 * Calculates the sum of all numerical digits within a string.
 * @param {string} str - The input string.
 * @returns {number} The sum of all digits found.
 */
export function calculate(str) {
    let sum = 0;

    // Loop through each character of the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i];

        // Check if the character is a digit (0-9)
        // isNaN returns false if the argument is a number or can be parsed as a number.
        // We also check that the character isn't just a space or an empty string which is 'falsy' but might pass isNaN check for some browsers/paradigms.
        if (!isNaN(Number(char)) && char.trim() !== '') {
            // Convert the character to a number and add it to the sum
            sum = sum + Number(char);
        }
    }

    return sum;
}
