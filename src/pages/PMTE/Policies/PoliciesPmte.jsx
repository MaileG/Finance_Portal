import React from "react";
import Accordion from "react-bootstrap/Accordion";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf, faFileWord } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";



import PS1 from "../../../assets/Policies/PMTE/PMTE CD Financial Accounting and Reporting/Financial Accounting/PMTE Accounting and Financial Reporting Policy.PDF";
import PS2 from "../../../assets/Policies/PMTE/PMTE CD Financial Accounting and Reporting/Financial Accounting/PMTE Finance Financial Accounting SOP V05.03 20190124.docx";
import PS3 from "../../../assets/Policies/PMTE/PMTE CD Financial Accounting and Reporting/Financial Accounting/PMTE Bank and Cash Management Policy.PDF";
import PS4 from "../../../assets/Policies/PMTE/PMTE CD Financial Accounting and Reporting/Financial Accounting/PMTE Financial Management_-_Revenue_and_Debt_Management_-SOP_02.00.pdf";
import PS5 from "../../../assets/Policies/PMTE/PMTE CD Financial Accounting and Reporting/Financial Accounting/PMTE Financial Management-Expenditure and_Liabilities Management SOP 02.00.pdf";
import PS6 from "../../../assets/Policies/PMTE/PMTE CD Financial Accounting and Reporting/Financial Accounting/PMTE Financial Management - Financial Planning Budgeting and Monitoring SOP 02.00.pdf";
import PS7 from "../../../assets/Policies/PMTE/PMTE CD Financial Accounting and Reporting/Financial Accounting/PMTE Financial Management Blueprint.pdf";
import PS8 from "../../../assets/Policies/PMTE/PMTE CD Financial Accounting and Reporting/Financial Accounting/PMTE Damage and Loss Control.PDF";
import PS9 from "../../../assets/Policies/PMTE/PMTE CD Financial Accounting and Reporting/Financial Accounting/PMTE Expenditure and Payables.PDF";


import PS10 from "../../../assets/Policies/PMTE/PMTE CD Financial Accounting and Reporting/Financial Reporting/PMTE Accounting and Financial Reporting Policy.PDF";
import PS11 from "../../../assets/Policies/PMTE/PMTE CD Financial Accounting and Reporting/Financial Reporting/PMTE Immovable Asset Management Policy.pdf";
import PS12 from "../../../assets/Policies/PMTE/PMTE CD Financial Accounting and Reporting/Financial Reporting/PMTE Policy on Reporting Framework.pdf";
import PS13 from "../../../assets/Policies/PMTE/PMTE CD Financial Accounting and Reporting/Financial Reporting/PMTE Materiality and Significance Framework.pdf";
import PS14 from "../../../assets/Policies/PMTE/PMTE CD Financial Accounting and Reporting/Financial Reporting/PMTE Related party Disclosures.PDF";


import PS15 from "../../../assets/Policies/PMTE/PMTE CD Revenue and Debt Management/PMTE Final approved receivable policy.pdf";
import PS16 from "../../../assets/Policies/PMTE/PMTE CD Revenue and Debt Management/NT Practice Note No. 06 of 2006_2007.pdf";
import PS17 from "../../../assets/Policies/PMTE/PMTE CD Revenue and Debt Management/PMTE Framework on devolution v17 Dec 05.pdf";

import PS18 from "../../../assets/Policies/PMTE/PMTE CD Financial Planning and Budgeting/PMTE Planning and Budgeting Policy.PDF";

const PoliciesPmte = () => {
  return (
    <div className="main">
      <div className="page-title mb-4 pt-3">
        <h4>Policies and SOPs [PMTE]</h4>
      </div>
      <div className="back-link pb-2">
        <p>
          You are here: <NavLink to="/dpwi">DPWI</NavLink>/
          <NavLink to="#">Policies and SOPs</NavLink>
        </p>
      </div>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            PMTE CD Financial Accounting and Reporting
          </Accordion.Header>
          <Accordion.Body>
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
                      PMTE Accounting and Financial Reporting Policy
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
                      download="PMTE Accounting and Financial Reporting Policy"
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
                        icon={faFileWord}
                        className="pe-2"
                      ></FontAwesomeIcon>
                      PMTE Finance Financial Accounting SOP V05.03 20190124
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={PS2}
                      download="PMTE Finance Financial Accounting SOP V05.03 20190124"
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
                      PMTE Bank and Cash Management Policy
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
                      download="PMTE Bank and Cash Management Policy"
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
                      PMTE Financial Management - Revenue and Debt Management
                      SOP 02.00
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
                      download="PMTE Financial Management_-_Revenue_and_Debt_Management_-SOP_02.00"
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
                      PMTE Financial Management - Expenditure and Liabilities
                      Management SOP 02.00
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
                      download="PMTE Financial Management-Expenditure and_Liabilities Management SOP 02.00"
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
                      PMTE Financial Management - Financial Planning Budgeting
                      and Monitoring SOP 02.00
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
                      download="PMTE Financial Management - Financial Planning Budgeting and Monitoring SOP 02.00"
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
                      PMTE Financial Management Blueprint
                    </span>
                  </td>
                  <td>
                    <NavLink to={PS7} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={PS7}
                      download="PMTE Financial Management Blueprint"
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
                      PMTE Damage and Loss Control
                    </span>
                  </td>
                  <td>
                    <NavLink to={PS8} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={PS8}
                      download="PMTE Damage and Loss Control"
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
                      PMTE Expenditure and Payables
                    </span>
                  </td>
                  <td>
                    <NavLink to={PS9} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={PS9}
                      download="PMTE Expenditure and Payables"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>

                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faFolderOpen}
                      className="pe-2"
                    ></FontAwesomeIcon>
                    Financial Reporting
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
                      PMTE Accounting and Financial Reporting Policy
                    </span>
                  </td>
                  <td>
                    <NavLink to={PS10} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={PS10}
                      download="PMTE Accounting and Financial Reporting Policy"
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
                      PMTE Immovable Asset Management Policy
                    </span>
                  </td>
                  <td>
                    <NavLink to={PS11} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={PS11}
                      download="PMTE Immovable Asset Management Policy"
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
                      PMTE Policy on Reporting Framework
                    </span>
                  </td>
                  <td>
                    <NavLink to={PS12} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={PS12}
                      download="PMTE Policy on Reporting Framework"
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
                      PMTE Materiality and Significance Framework
                    </span>
                  </td>
                  <td>
                    <NavLink to={PS13} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={PS13}
                      download="PMTE Materiality and Significance Framework"
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
                      PMTE Related party Disclosures
                    </span>
                  </td>
                  <td>
                    <NavLink to={PS14} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={PS14}
                      download="PMTE Related party Disclosures"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            PMTE CD Revenue and Debt Management
          </Accordion.Header>
          <Accordion.Body>
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
                      PMTE Final approved receivable policy
                    </span>
                  </td>
                  <td>
                    <NavLink to={PS15} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={PS15}
                      download="PMTE Final approved receivable policy"
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
                        icon={faFileWord}
                        className="pe-2"
                      ></FontAwesomeIcon>
                      NT Practice Note No. 06 of 2006-2007
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={PS16}
                      download="NT Practice Note No. 06 of 2006_2007"
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
                      PMTE Framework on devolution v17 Dec 05
                    </span>
                  </td>
                  <td>
                    <NavLink to={PS17} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={PS17}
                      download="PMTE Framework on devolution v17 Dec 05"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            PMTE CD Financial Planning and Budgeting
          </Accordion.Header>
          <Accordion.Body>
            <table class="table table-striped table-hover">
              <tbody>
                <tr>
                  <td>
                    <span className="ms-3">
                      <FontAwesomeIcon
                        icon={faFilePdf}
                        className="pe-2"
                      ></FontAwesomeIcon>
                      PMTE Planning and Budgeting Policy
                    </span>
                  </td>
                  <td>
                    <NavLink to={PS18} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={PS18}
                      download="PMTE Planning and Budgeting Policy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default PoliciesPmte;
