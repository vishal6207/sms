import React from "react";
import "./CommonInputField.css";

const CommonInputField = (props) => {

  return (
    <div
      className={`mb-3  ${
        props.mainclass
          ? props.mainclass + " common-input-field"
          : "common-input-field"
      }`}
    >
      {props.label && (
        <label htmlFor={`inputid-${props.index}`} className="form-label">
          {props.label}
        </label>
      )}
      <div className="common-input-sec">

        {props.field === "input" && (
          <input
            type={props.type || "text"}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            valid={props.value}
            className={`form-control ${
              props.inputclass
                ? props.inputclass + " default-form-control"
                : "default-form-control"
            } ${props.valid && "is-invalid"}  ${props.success && "is-valid"}`}
            id={`inputid-${props.index}`}
            aria-describedby={`desc-text-${props.index} ${
              props.valid && `invalid-acs-${props.index}`
            }  ${props.success && `valid-acs-${props.index}`}`}
            readOnly={props.readonly ? true : false}
          />
        )}
        {props.readonly && (
          <div className="readonly-icon">
            <i className="fa-solid fa-lock"></i>
          </div>
        )}
      </div>
      {props.field === "textarea" && (
        <textarea
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className={`form-control ${
            props.inputclass ? props.inputclass : "default-form-control"
          } ${props.valid && "is-invalid"}  ${props.success && "is-valid"}`}
          aria-describedby={`desc-text-${props.index} ${
            props.valid && `invalid-acs-${props.index}`
          }  ${props.success && `valid-acs-${props.index}`}`}
          rows={props.rows || 4}
          id={`inputid-${props.index}`}
        />
      )}
      {props.field === "datalist" && (
        <>
          <input list={`datalist-${props.index}`}
          placeholder={props.placeholder}

          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className={`form-control ${
              props.inputclass
                ? props.inputclass + " default-form-control"
                : "default-form-control"
            } ${props.valid && "is-invalid"}  ${props.success && "is-valid"}`}
            id={`inputid-${props.index}`}
          
           />
          <datalist id={`datalist-${props.index}`}>
          {props.option &&
            props.option.map((res, index) => (
            <option key={index} value={res}/>
            ))}
          </datalist>
          </>
      )}
      {props.field === "select" && (
        <select
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          className={`form-control ${
            props.inputclass ? props.inputclass : "default-form-control"
          } ${props.valid && "is-invalid"}  ${props.success && "is-valid"}`}
          aria-describedby={`desc-text-${props.index} ${
            props.valid && `invalid-acs-${props.index}`
          }  ${props.success && `valid-acs-${props.index}`}`}
          id={`inputid-${props.index}`}
        >
          {props.defaultoption && (
            <option value="">{props.defaultoption}</option>
          )}
          {props.option &&
            props.option.map((res, index) => (
              <option key={index} value={res}>
                {res}
              </option>
            ))}
        </select>
      )}
      {props.field === "date" && (
        <input
          type="date"
          name={props.name}
          value={props.value}
          onChange={props.onChange}
          placeholder={props.placeholder}
          className={`form-control ${
            props.inputclass
              ? props.inputclass + " default-form-control"
              : "default-form-control"
          } ${props.valid && "is-invalid"}  ${props.success && "is-valid"}`}
          id={`inputid-${props.index}`}
        />
      )}
      {props.valid && (
        <div className="invalid-feedback" style={{display:props.readonly ? "none" : "block"}} id={`invalid-acs-${props.index}`}>
          {props.valid}
        </div>
      )}
      {props.success && (
        <div className="valid-feedback" style={{display:props.success ? "none" : "block"}} id={`valid-acs-${props.index}`}>
          {props.success}
        </div>
      )}
      {props.description && (
        <div id={`desc-text-${props.index}`}  style={{display:props.description ? "none" : "block"}} className="form-text">
          {props.description}
        </div>
      )}
    </div>
  );
};

export default CommonInputField;
