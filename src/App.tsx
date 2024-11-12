import { useState } from "react";
import AppBar from "./components/app-bar/app-bar.component";
import Button from "./components/button/button.component";
import Input from "./components/input/input.component";
import Radio from "./components/radio/radio.component";
import Result from "./components/result/result.component";
import calcMortgage from "./helpers";

const defaultFields = {
  mortgageAmount: "",
  interestRate: "",
  years: "",
  mortgageType: "",
};

const defaultErrors = {
  mortgageAmount: false,
  years: false,
  interestRate: false,
  mortgageType: false,
};

const App = () => {
  const [fields, setFields] = useState(defaultFields);
  const [errors, setErrors] = useState<any>(defaultErrors);
  const [data, setData] = useState<any>(null);

  const handleChange = (e: any) => {
    console.log(e.target, e.target.name, e.target.value);
    setFields({
      ...fields,
      [e.target.name]: e.target.value,
    });
  };

  const handleCalc = () => {
    const error = checkForErrors();
    if (!error) {
      const repayment = calcMortgage(
        Number(fields.mortgageAmount),
        Number(fields.years),
        Number(fields.interestRate)
      );
      setData(repayment);
    }

    console.log(error, errors);
  };

  const checkForErrors = () => {
    let errorsFound = false;
    const errors = {
      mortgageAmount: false,
      years: false,
      interestRate: false,
      mortgageType: false,
    };

    if (fields.mortgageAmount.length === 0) {
      errors.mortgageAmount = true;
      errorsFound = true;
    }

    if (fields.years.length === 0) {
      errors.years = true;
      errorsFound = true;
    }

    if (fields.interestRate.length === 0) {
      errors.interestRate = true;
      errorsFound = true;
    }

    if (fields.mortgageType.length === 0) {
      errors.mortgageType = true;
      errorsFound = true;
    }

    if (
      fields.mortgageAmount.length > 0 &&
      fields.years.length > 0 &&
      fields.interestRate.length > 0
    ) {
      errorsFound = false;
    }

    setErrors(errors);
    return errorsFound;
  };

  const clear = () => {
    setFields(defaultFields);
    setErrors(defaultErrors);
    setData(null);
  };
  return (
    <div className="app">
      <div className="container form-grid">
        <AppBar clear={clear} />
        <Input
          fields={fields}
          error={errors.mortgageAmount}
          name="mortgageAmount"
          title="Mortgage Amount"
          onChange={handleChange}
          prefix={"£"}
        />
        <Input
          fields={fields}
          error={errors.years}
          name="years"
          title={"Mortgage Term"}
          onChange={handleChange}
          prefix="years"
          prefixPos="right"
        />
        <Input
          fields={fields}
          error={errors.interestRate}
          name="interestRate"
          title={"Interest Rate"}
          onChange={handleChange}
          prefix="% "
          prefixPos="right"
        />
        <Radio
          fields={fields}
          error={errors.mortgageType}
          name="mortgageType"
          title="mortgage type"
          onChange={handleChange}
          options={["repayment", "interest only"]}
        />
        <Button className="submit" onClick={handleCalc}>
          <img src="/calculator.svg" alt="" />
          Calculate Repayments
        </Button>
      </div>
      <Result data={data} />
    </div>
  );
};

export default App;
