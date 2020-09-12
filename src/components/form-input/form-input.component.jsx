import React from "react";

// import "./form-input.styles.scss";
import {
  FormGroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ label, handleChange, ...otherProps }) => {
  return (
    <FormGroupContainer>
      <FormInputContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormInputLabel className={otherProps.value.length ? "shrink" : ""}>
          {label}
        </FormInputLabel>
      ) : null}
    </FormGroupContainer>
  );
};

export default FormInput;
