import React from "react";

const AlertBanner = () => {
  return (
    <>
      <div className="alert alert-success" id="alert-success" role="alert">
        <span className="alert-message">
          <span className="alert-icon">
            <span className="fas fa-check-circle"></span>
          </span>
          <span className="alert-heading">Success!</span>
        </span>
        <p>Acceso Correcto.</p>
      </div>
      <div className="alert alert-error" id="alert-error" role="alert">
        <span className="alert-message">
          <span className="alert-icon">
            <span className="fas fa-exclamation-triangle"></span>
          </span>
          <span className="alert-heading">Error!</span>
        </span>
        <p>Acceso Denegado.</p>
        <div className="btn-cerrar">
          <button
            className="buttons close closebutton"
            onClick="cerrarbanner()"
            id="closebutton"
          >
            <div className="closebtn">
              <div className="fas fa-redo"></div>
              <div className="reintentar">Reintentar</div>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default AlertBanner;
