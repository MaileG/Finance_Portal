import React from 'react';
import '../../pages/PMTE/PMTE.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { faLandmark } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';



const PMTE = () => {
  return (
    <div className="pb-5">
      <div className="page-title mb-3 pt-3">
        <h4>PMTE</h4>
      </div>
      <div className="row">
        <div className="col-3">
          <div class="card text-center" title="Budget Matters">
            <div class="card-body">
              <h4>Budget Matters</h4>
              <hr />
              <NavLink to="/budget_matters_pmte">
                <FontAwesomeIcon
                  icon={faWallet}
                  size="6x"
                  className="pe-2"
                  style={{ color: "#6f6a64" }}
                ></FontAwesomeIcon>
              </NavLink>
              <p class="card-text text-light pt-4">
                <small>Last updated: 2023</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div class="card text-center" title="Budget Matters">
            <div class="card-body">
              <h4>Expenditure Management</h4>
              <hr />
              <NavLink to="/">
                <FontAwesomeIcon
                  icon={faCalculator}
                  size="6x"
                  className="pe-2"
                  style={{ color: "#6f6a64" }}
                ></FontAwesomeIcon>
              </NavLink>
              <p class="card-text text-light pt-4">
                <small>Last updated: 2023</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div class="card text-center" title="Budget Matters">
            <div class="card-body">
              <h4>Compliance Matters</h4>
              <hr />
              <NavLink to="/">
                <FontAwesomeIcon
                  icon={faAddressBook}
                  size="6x"
                  className="pe-2"
                  style={{ color: "#6f6a64" }}
                ></FontAwesomeIcon>
              </NavLink>
              <p class="card-text text-light pt-4">
                <small>Last updated: 2023</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div class="card text-center" title="Budget Matters">
            <div class="card-body">
              <h4>Reporting Matters</h4>
              <hr />
              <NavLink to="/reporting_pmte">
                <FontAwesomeIcon
                  icon={faEdit}
                  size="6x"
                  className="pe-2"
                  style={{ color: "#6f6a64" }}
                ></FontAwesomeIcon>
              </NavLink>
              <p class="card-text text-light pt-4">
                <small>Last updated: 2023</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-4">
        <div className="col-3">
          <div class="card text-center" title="Budget Matters">
            <div class="card-body">
              <h4>Policies & SOPs</h4>
              <hr />
              <NavLink to="/policies_pmte">
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  size="6x"
                  className="pe-2"
                  style={{ color: "#6f6a64" }}
                ></FontAwesomeIcon>
              </NavLink>
              <p class="card-text text-light pt-4">
                <small>Last updated: 2023</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div class="card text-center" title="Budget Matters">
            <div class="card-body">
              <h4>Training & Development</h4>
              <hr />
              <NavLink to="/training_pmte">
                <FontAwesomeIcon
                  icon={faPersonChalkboard}
                  size="6x"
                  className="pe-2"
                  style={{ color: "#6f6a64" }}
                ></FontAwesomeIcon>
              </NavLink>
              <p class="card-text text-light pt-4">
                <small>Last updated: 2023</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div class="card text-center" title="Budget Matters">
            <div class="card-body">
              <h4>Paliamentary Questions</h4>
              <hr />
              <NavLink to="/">
                <FontAwesomeIcon
                  icon={faLandmark}
                  size="6x"
                  className="pe-2"
                  style={{ color: "#6f6a64" }}
                ></FontAwesomeIcon>
              </NavLink>
              <p class="card-text text-light pt-4">
                <small>Last updated: 2023</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div class="card text-center" title="Budget Matters">
            <div class="card-body">
              <h4>FAQs</h4>
              <hr />
              <NavLink to="/">
                <FontAwesomeIcon
                  icon={faList}
                  size="6x"
                  className="pe-2"
                  style={{ color: "#6f6a64" }}
                ></FontAwesomeIcon>
              </NavLink>
              <p class="card-text text-light pt-4">
                <small>Last updated: 2023</small>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row pt-4">
        <div className="col-3">
          <div class="card text-center" title="Budget Matters">
            <div class="card-body">
              <h4>Meet the Leadership</h4>
              <hr />
              <NavLink to="/">
                <FontAwesomeIcon
                  icon={faUsers}
                  size="6x"
                  className="pe-2"
                  style={{ color: "#6f6a64" }}
                ></FontAwesomeIcon>
              </NavLink>
              <p class="card-text text-light pt-4">
                <small>Last updated: 2023</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PMTE