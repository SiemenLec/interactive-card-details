export default function validate(values) {
  let errors = {};
  //   Name empty
  if (!values.cardholderName) {
    errors.cardholderName = 'Please fill in all fields.';
  }
  //   Card number contains letters
  if (/[a-zA-Z]/g.test(values.cardNumber) && values.cardNumber !== undefined) {
    errors.cardNumberFormat = 'Wrong format, numbers only.';
  }
  //   Card number empty
  if (!values.cardNumber) {
    errors.cardNumberEmpty = 'Please fill in all fields.';
  }
  //   Card number length
  if (
    values.cardNumber &&
    // 16 + 3 spaces
    values.cardNumber.length !== 19 &&
    values.cardNumber !== undefined
  ) {
    errors.cardNumberLength = 'Card number must be 16 characters long.';
  }
  //   Exp Date empty
  if (!values.expMonth || !values.expYear) {
    errors.expMonthEmpty = 'Please fill in all fields.';
  }
  //   Exp Date format
  if (
    (values.expMonth &&
      values.expMonth.length !== 2 &&
      values.expMonth !== undefined) ||
    (/[a-zA-Z]/g.test(values.expMonth) &&
      (values.expMonth || values.expMonth) !== undefined)
  ) {
    if (values.expMonth && values.expYear) {
      errors.expFormat = 'Wrong format.';
    }
  }
  if (
    (values.expYear &&
      values.expYear.length !== 2 &&
      values.expYear !== undefined) ||
    (/[a-zA-Z]/g.test(values.expYear) &&
      (values.expYear || values.expMonth !== undefined))
  ) {
    errors.expFormat = 'Wrong  format.';
  }
  if (parseInt(values.expMonth) < 12) {
    errors.expFormat = 'Wrong EXP. DATE format.';
  }
  //   CVC empty
  if (!values.cvc) {
    errors.cvcEmpty = 'Please fill in all fields.';
  }
  //   CVC format
  //   Checks for length and if only numbers
  if (
    (values.cvc && values.cvc.length !== 3 && values.cvc !== undefined) ||
    (/[a-zA-Z]/g.test(values.cvc) && values.cvc !== undefined)
  ) {
    errors.cvcFormat = 'Wrong CVC format.';
  }
  return errors;
}
