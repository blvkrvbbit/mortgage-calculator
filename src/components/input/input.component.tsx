import ErrorText from "../error-text/error-text.component";
import "./input.styles.scss";

type Props = {
  title: string;
  onChange: (e: any) => void;
  name: string;
  prefix?: any;
  prefixPos?: string;
  fields: any;
  error: boolean;
};

const Input = ({
  title,
  onChange,
  name,
  prefix,
  fields,
  prefixPos = "left",
  error,
}: Props) => {
  return (
    <div className="form-field">
      <label htmlFor="">{title}</label>
      <div className="field">
        <input
          className={`${prefixPos == "right" && "input-left"} ${
            error && "error"
          }`}
          onChange={onChange}
          name={name}
          value={fields && fields[name]}
          type="number"
        />
        <div
          className={`prefix ${
            prefixPos === "left" ? "prefix-left" : "prefix-right"
          }`}
        >
          {prefix}
        </div>
        {/* <p className="error-text">{"Error Text"}</p> */}
      </div>
      {error && <ErrorText />}
    </div>
  );
};

export default Input;
