import React from "react";

export default function Footer() {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top row">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              Icono Logo
            </svg>
          </a>
          <span className="text-muted">© 2021 Company, Inc</span>
        </div>
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-muted" href="https://twitter.com/" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://www.instagram.com/" target="_blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-muted" href="https://www.facebook.com/" target="_blank">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
