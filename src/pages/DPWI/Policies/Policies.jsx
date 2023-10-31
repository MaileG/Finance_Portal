import React from "react";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

import PS1 from "../../../assets/Policies/DPWI/DPWI Financial Management/DPWI Financial Statement Framework 28022013.pdf";
import PS2 from "../../../assets/Policies/DPWI/DPWI Financial Management/DPWI Related Parties frame work.pdf";
import PS3 from "../../../assets/Policies/DPWI/DPWI Financial Management/DPWI Directive Expenditure Management (DPW).PDF";
import PS4 from "../../../assets/Policies/DPWI/DPWI Financial Management/DPWI DPWI Debt,Claims Recoverable and Revenue Management2015-11-02-082552.pdf";
import PS5 from "../../../assets/Policies/DPWI/DPWI Financial Management/DPWI Petty Cash Policy.PDF";
import PS6 from "../../../assets/Policies/DPWI/DPWI Financial Management/DPWI Contingent liabilities and assets.pdf";


const Policies = () => {
  return (
    <div className="main">
      <div className="page-title mb-4 pt-3">
        <h4>Policies and SOPs</h4>
      </div>
      <div className="back-link pb-2">
        <p>
          You are here: <NavLink to="/dpwi">DPWI</NavLink>/
          <NavLink to="#">Policies and SOPs</NavLink>
        </p>
      </div>

      <table class="table table-striped table-hover">
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faFolderOpen}
                className="pe-2"
              ></FontAwesomeIcon>
              DPWI Financial Management
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <span className="ms-3">
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="pe-2"
                ></FontAwesomeIcon>
                DPWI Financial Statement Framework 28022013
              </span>
            </td>
            <td>
              <NavLink to={PS1} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={PS1}
                download="DPWI Financial Statement Framework 28022013"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <span className="ms-3">
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="pe-2"
                ></FontAwesomeIcon>
                DPWI Related Parties frame work
              </span>
            </td>
            <td>
              <NavLink to={PS2} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={PS2}
                download="DPWI Related Parties frame work"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <span className="ms-3">
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="pe-2"
                ></FontAwesomeIcon>
                DPWI Directive Expenditure Management (DPW)
              </span>
            </td>
            <td>
              <NavLink to={PS3} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={PS3}
                download="DPWI Directive Expenditure Management (DPW)"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <span className="ms-3">
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="pe-2"
                ></FontAwesomeIcon>
                DPWI DPWI Debt,Claims Recoverable and Revenue
                Management2015-11-02-082552
              </span>
            </td>
            <td>
              <NavLink to={PS4} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={PS4}
                download="DPWI DPWI Debt,Claims Recoverable and Revenue Management2015-11-02-082552"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <span className="ms-3">
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="pe-2"
                ></FontAwesomeIcon>
                DPWI Petty Cash Policy
              </span>
            </td>
            <td>
              <NavLink to={PS5} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={PS5}
                download="DPWI Petty Cash Policy"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>
              <span className="ms-3">
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="pe-2"
                ></FontAwesomeIcon>
                DPWI Contingent liabilities and assets
              </span>
            </td>
            <td>
              <NavLink to={PS6} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={PS6}
                download="DPWI Contingent liabilities and assets"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Policies;
