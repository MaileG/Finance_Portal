import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';

import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';


const ReportingPmte = () => {
  return (
    <div className="main pb-5">
      <div className="page-title mb-3 pt-3">
        <h4>Reporting Matters</h4>
      </div>
      <div className="row">
        <div className="col-3">
          <div class="card text-center" title="Audit Report">
            <div class="card-body">
              <h4>Audit Report</h4>
              <hr />
              <NavLink to="/audit_pmte">
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  size="6x"
                  className="pe-2"
                  style={{ color: "#6f6a64" }}
                ></FontAwesomeIcon>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div class="card text-center" title="Management Report">
            <div class="card-body">
              <h4>Management Report</h4>
              <hr />
              <NavLink to="/man_report_pmte">
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  size="6x"
                  className="pe-2"
                  style={{ color: "#6f6a64" }}
                ></FontAwesomeIcon>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div class="card text-center" title="Financial Statement">
            <div class="card-body">
              <h4>Financial Statement</h4>
              <hr />
              <NavLink to="/fin_statement_pmte">
                <FontAwesomeIcon
                  icon={faFolderOpen}
                  size="6x"
                  className="pe-2"
                  style={{ color: "#6f6a64" }}
                ></FontAwesomeIcon>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportingPmte