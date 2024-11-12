import "./result.styles.scss";

type Props = {
  data: any;
};
const Result = ({ data }: Props) => {
  return (
    <div className="result-container">
      <div className="container">
        {!data ? (
          <div className="default">
            <img src="/result.svg" alt="" />
            <h2>Results Shown Here</h2>
            <p>
              Complete the form and click “calculate repayments” to see what
              your monthly repayments would be.
            </p>
          </div>
        ) : (
          <div className="results">
            <h2>Your Results</h2>
            <p>
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
            <div className="repayment">
              <div>
                <h3>Your monthly repayments</h3>
                <p className="monthly-repayment">£{data.monthlyPayment}</p>
              </div>
              <div className="divider"></div>
              <div>
                <h3>Total you'll repay overterm</h3>
                <p className="repayment-over-term">£{data.repaymentOverTerm}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;
