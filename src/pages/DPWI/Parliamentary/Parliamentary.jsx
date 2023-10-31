import React from 'react';
import Accordion from "react-bootstrap/Accordion";
import "../../../pages/DPWI/Parliamentary/Parliamentary.css";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faFileWord } from '@fortawesome/free-solid-svg-icons';
import { faFolderOpen } from '@fortawesome/free-solid-svg-icons';




import Q8 from "../../../assets/Parliamentary/DPWI/2014-15/Q2459_June2015.docx";
import Q9 from "../../../assets/Parliamentary/DPWI/2014-15/Q210_February2015.docx";



const Parliamentary = () => {
  return (
    <div className="main">
      <div className="page-title mb-4 pt-3">
        <h4>Parliamentary Questions</h4>
      </div>

      <div className="back-link pb-2">
        <p>You are here: <NavLink to='/dpwi'>DPWI</NavLink>/<NavLink to="#">Parliamentary</NavLink></p>
      </div>

      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>2022 -2023</Accordion.Header>
          <Accordion.Body>
            <table class="table table-striped table-hover">
              <tbody>
                <tr>
                  <td>
                    
                      <FontAwesomeIcon
                        icon={faFileWord}
                        className="pe-2"
                      ></FontAwesomeIcon>
                      NA PQ 3504 (Written Reply)
                    
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 3504 (Written Reply)"
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
                        icon={faFileWord}
                        className="pe-2"
                      ></FontAwesomeIcon>
                      2022 09 21 NA PQ 557 (Oral Reply)
                    
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="2022 09 21 NA PQ 557 (Oral Reply)"
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
                    PQ NA 419
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <span className="ms-3">
                      <FontAwesomeIcon
                        icon={faFileWord}
                        className="pe-2"
                      ></FontAwesomeIcon>
                      NA PQ 419 Annexure-Final
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 419 Annexure-Final"
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
                      NA PQ 419 Annexure
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 419 Annexure"
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
                        icon={faFileExcel}
                        className="pe-2"
                      ></FontAwesomeIcon>
                      NA PQ 419 Supporting Document
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 419 Supporting Document"
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
                      NA PQ 419 Internal Memorandum
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 419 Internal Memorandum"
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
                      NA PQ 419 Route Form
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 419 Route Form"
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
                    NA PQ 420
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <span className="ms-3">
                      <FontAwesomeIcon
                        icon={faFileWord}
                        className="pe-2"
                      ></FontAwesomeIcon>
                      NA PQ 420 Annexure
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 420 Annexure"
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
                        icon={faFileExcel}
                        className="pe-2"
                      ></FontAwesomeIcon>
                      NA PQ 420 Supporting Document
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 420 Supporting Document"
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
                      NA PQ 420 Internal Memorandum
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 420 Internal Memorandum"
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
                      NA PQ 420 Route Form
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 420 Route Form"
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
                    NA PQ 3809
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
                      NA PQ 3809 (Written Reply) (002) Final
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 3809 (Written Reply) (002) Final"
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
                      NA PQ 3809 (Written Reply) (002)
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 3809 (Written Reply) (002)"
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
                      Proof of Ownership
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="Proof of Ownership"
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
                      Annexure A
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="Annexure A"
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
                      Annexure B
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="Annexure B"
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
                      Annexure C
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="Annexure C"
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
                    NA PQ 4016
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
                      NA PQ 4016 (Written Reply)-signed
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 4016 (Written Reply)-signed"
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
                      NA PQ 4016 (Written Reply)
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 4016 (Written Reply)"
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
                    NCOP PQ 650F
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
                      Written Reply NCOP PQ 650 - Signed
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="Written Reply_NCOP PQ 650 - Signed"
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
                      Written Reply NCOP PQ 650F v2
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="Written Reply NCOP PQ 650F v2"
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
                      Written Reply NCOP PQ 650F v2
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="Written Reply NCOP PQ 650F v2"
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
                      Written Reply NCOP PQ 650F
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="Written Reply NCOP PQ 650F"
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
          <Accordion.Header>2020 - 2021</Accordion.Header>
          <Accordion.Body>
            <table class="table table-striped table-hover">
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faFolderOpen}
                      className="pe-2"
                    ></FontAwesomeIcon>
                    PQ NA 2220
                  </td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <span className="ms-3">
                      <FontAwesomeIcon
                        icon={faFileWord}
                        className="pe-2"
                      ></FontAwesomeIcon>
                      NA PQ 2220 (Written) 14 October 2020
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 2220 (Written) 14 October 2020"
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
                        icon={faFileExcel}
                        className="pe-2"
                      ></FontAwesomeIcon>
                      ANNEXURE A - Detailed Unpaid Invoices Report - 30
                      September 20
                    </span>
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q8}
                      download="ANNEXURE A - Detailed Unpaid Invoices Report"
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
                      icon={faFileWord}
                      className="pe-2"
                    ></FontAwesomeIcon>
                    MI2- Determination of appropriateness of actions-(Beitbridge
                    Project- Site establishment)
                  </td>
                  <td>
                    <NavLink to="/"></NavLink>View
                  </td>
                  <td>
                    <a
                      href={Q8}
                      download="MI2- Determination  of appropriateness of actions-(Beitbridge Project- Site establishment)"
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
                      icon={faFileWord}
                      className="pe-2"
                    ></FontAwesomeIcon>
                    NCOP PQ 277 (Written)
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q9}
                      download="NCOP PQ 277 (Written)"
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
                      icon={faFileWord}
                      className="pe-2"
                    ></FontAwesomeIcon>
                    NA PQ 411 (Written)
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q9}
                      download="NA PQ 411 (Written)"
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
                      icon={faFileWord}
                      className="pe-2"
                    ></FontAwesomeIcon>
                    NA PQ 2220 (Written)
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Q9}
                      download="NA PQ 2220 (Written)"
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
                      icon={faFileWord}
                      className="pe-2"
                    ></FontAwesomeIcon>
                    NA PQ 2220 (Written)
                  </td>
                  <td>
                    <NavLink to="/"></NavLink>View
                  </td>
                  <td>
                    <a
                      href={Q9}
                      download="NA PQ 2220 (Written)"
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
          <Accordion.Header>2019- 2020</Accordion.Header>
          <Accordion.Body>
            <table class="table table-striped table-hover">
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faFileWord}
                      className="pe-2"
                    ></FontAwesomeIcon>
                    NA PQ 858_Written Response_11092019
                  </td>
                  <td width="320"></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 858_Written Response_11092019"
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
                      icon={faFileWord}
                      className="pe-2"
                    ></FontAwesomeIcon>
                    NA PQ 710 (Written) SRVM
                  </td>
                  <td width="320"></td>
                  <td>
                    <a
                      href={Q9}
                      download="NA PQ 710 (Written) SRVM"
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

        <Accordion.Item eventKey="3">
          <Accordion.Header>2018 - 2019</Accordion.Header>
          <Accordion.Body>
            <table class="table table-striped table-hover">
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faFileWord}
                      className="pe-2"
                    ></FontAwesomeIcon>
                    NA PQ 3244 (Written)
                  </td>
                  <td width="500"></td>
                  <td>
                    <a
                      href={Q8}
                      download="NA PQ 3244 (Written)"
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

        <Accordion.Item eventKey="4">
          <Accordion.Header>2015 - 2016</Accordion.Header>
          <Accordion.Body>
            <table class="table table-striped table-hover">
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faFileWord}
                      className="pe-2"
                    ></FontAwesomeIcon>
                    PQ 520 NA (Written)
                  </td>
                  <td width="500"></td>
                  <td className="">
                    <a
                      href={Q8}
                      download="PQ 520 NA (Written)"
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

        <Accordion.Item eventKey="5">
          <Accordion.Header>2014 - 2015</Accordion.Header>
          <Accordion.Body>
            <table class="table table-striped table-hover">
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faFileWord}
                      className="pe-2"
                    ></FontAwesomeIcon>
                    Question 2459 EFF Sonti Irr Exp - June 2015
                  </td>
                  <td width="320"></td>
                  <td>
                    <a
                      href={Q8}
                      download="Question 2459 EFF Sonti Irr Exp - June 2015"
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
                      icon={faFileWord}
                      className="pe-2"
                    ></FontAwesomeIcon>
                    Question 210 draft Reply - February 2015
                  </td>
                  <td width="320"></td>
                  <td>
                    <a
                      href={Q9}
                      download="Question 210 draft Reply - February 2015"
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
}

export default Parliamentary