import React from 'react';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileExcel } from '@fortawesome/free-solid-svg-icons';


import File1 from '../../../assets/Compliance_Matters/DPWI/Monthly_reporting_checklist_for_CFO_Vol3.xlsx';

const ComplianceMatters = () => {
  return (
    <div className="main">
      <div className="page-title mb-5 pt-3">
        <h4>Compliance Matters</h4>
      </div>

      <div className="back-link pb-2">
        <p>
          You are here: <NavLink to="/dpwi">DPWI</NavLink>/
          <NavLink to="#">Compliance Matters</NavLink>
        </p>
      </div>

      <table class="table table-striped table-hover">
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faFileExcel}
                className="pe-2"
              ></FontAwesomeIcon>{" "}
              Monthly Reporting Checklist for CFO Vol3
            </td>
            <td>
              <NavLink
                to={File1}
                download="Monthly Report Checklist for CFO Vol 3"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComplianceMatters