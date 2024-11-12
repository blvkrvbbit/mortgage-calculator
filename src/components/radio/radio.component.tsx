import ErrorText from "../error-text/error-text.component";
import "./radio.styles.scss";

type Props = {
  options: string[];
  title: string;
  name: string;
  onChange: (e: any) => void;
  error: boolean;
  fields: any;
};

const Radio = ({ options, title, name, onChange, error }: Props) => {
  return (
    <div className="form-field">
      <label htmlFor="">{title.split("")}</label>
      <div>
        {options.map((option, id) => (
          <div key={id} className={`radio-field ${error && "error"}`}>
            <input
              name={name}
              onChange={onChange}
              type="radio"
              value={option}
            />
            <label htmlFor="">{option}</label>
          </div>
        ))}
        {error && <ErrorText />}
      </div>
    </div>
  );
};

export default Radio;
