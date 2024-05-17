import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="footer">
    <div className="container mt-5">
      <footer className="py-5">
        <div className="row mb-5">
          <div className="col-md mb-3">
            <h2>Tasty</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul className="nav footer-social justify-content-between">
              <li className="nav-item">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  <i className="fa-brands fa-twitter"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  <i className="fa-brands fa-facebook"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  <i className="fa-brands fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md mb-3">
            <h2>Opening Hours</h2>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Monday: <span>08:-22:00</span>
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Tuesday: <span>08:-22:00</span>
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Wednesday: <span>08:-22:00</span>
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Thursday: <span>08:-22:00</span>
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Friday: <span>08:-22:00</span>
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Saturday: <span>08:-22:00</span>
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Sunday: <span>08:-22:00</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md mb-3">
            <h2>Contact Information</h2>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  198 West 21th Street, Suite 721 New York NY 10016
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  + 1235 2355 98
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  info@yoursite.com
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  email@email.com
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-md offset-md-1 mb-3">
            <form>
              <h2>Newsletter</h2>
              <p>
                Far far away, behind the word mountains, far from the
                countries.
              </p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" className="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Subscribe"
                />
                <Link className="news-btn" type="button">
                  <i className="fa-solid fa-paper-plane"></i>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
          <p>© 2024 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <svg className="bi" width="24" height="24">
                  <use xlink:to="#twitter"></use>
                </svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <svg className="bi" width="24" height="24">
                  <use xlink:to="#instagram"></use>
                </svg>
              </Link>
            </li>
            <li className="ms-3">
              <Link className="link-body-emphasis" to="#">
                <svg className="bi" width="24" height="24">
                  <use xlink:to="#facebook"></use>
                </svg>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  </div>
  )
}

export default Footer