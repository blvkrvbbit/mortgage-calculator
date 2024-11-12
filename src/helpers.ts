const calcMortgage = (
  mortgageAmount: number,
  years: number,
  annualInterestRate: number
) => {
  const monthlyInterestRate = annualInterestRate / 100 / 12;
  const totalPayments = years * 12;
  const monthlyPayment =
    (mortgageAmount *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, totalPayments)) /
    (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);
  const repaymentOverTerm = monthlyPayment * totalPayments;
  return {
    monthlyPayment: monthlyPayment.toFixed(2),
    repaymentOverTerm: repaymentOverTerm.toFixed(2),
  };
};

export default calcMortgage;
