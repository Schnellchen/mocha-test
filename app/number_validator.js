/**
 *
 * Class for numbers validating
 * @class NumbersValidator
 */
class NumbersValidator {
  /**
     * Creates an instance of NumbersValidator.
     * @memberof NumbersValidator
     */
  constructor() { }
  /**
     *
     *
     * @param {Number} number number to check
     * @return {Boolean}
     * @memberof NumbersValidator
     */
  isNumberEven(number) {
    const typeOfVariable = typeof number;

    if (typeOfVariable !== 'number') {
      // eslint-disable-next-line max-len
      throw new Error(`${number} is not of type number as it's type of ${typeOfVariable}`);
    } else {
      return number % 2 === 0;
    }
  }
  /**
 *
 *
 * @param {Array<Number>} arrayOfNumbers array of numbers
 * @return {Array<Number>} array of even numbers
 * @memberof NumbersValidator
 */
  getEvenNumbersFromArray(arrayOfNumbers) {
    if (Array.isArray(arrayOfNumbers) &&
    arrayOfNumbers.every((item) => typeof item === 'number')) {
      const arrayOfEvenNumbers =
      arrayOfNumbers.filter((item) => this.isNumberEven(item));

      return arrayOfEvenNumbers;
    } else {
      throw new Error(`${arrayOfEvenNumbers} is not array of "Number"`);
    }
  }
}

module.exports = NumbersValidator;
