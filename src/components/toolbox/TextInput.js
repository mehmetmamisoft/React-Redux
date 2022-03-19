import React from "react";

//bu bir fonk dur arrow function
//normalde proplarla datayı alıyorduk okurken this.props
//burda ise object yapcez textbox kapsadıgı alanlar
//bootstrap gibi css gibi yazcez gare! reactstrap burda şimdilik yok
const TextInput = ({ name, label, onChange, placeHolder, value, error }) => {
  //textbox label name formgroup ver demek
  let wrapperClass = "form-group";
  //eğer hata gelirse ve bu hata length>0 ise
  if (error && error.length > 0) {
    wrapperClass += " has-error";
  }

  //jsx yaz
  return (
    <div className={wrapperClass}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type="text"
          name={name}
          className="form-control"
          placeholder={placeHolder}
          value={value}
          onChange={onChange}
        />
        {/* hata varsa  */}
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

export default TextInput;
