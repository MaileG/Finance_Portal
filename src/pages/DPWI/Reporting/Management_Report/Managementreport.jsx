import React from "react";
import "../../../../pages/DPWI/Reporting/Management_Report/Managementreport.css";
import Tab  from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import Final1 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2021-22.1.pdf";
import Final2 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2021-22.2.pdf";
import Final3 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2020-21.1.pdf";
import Final4 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2020-21.2.pdf";
import Final5 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2020-21.3.docx";
import Final6 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2019-20_A-C.pdf";
import Final7 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2019-20_D-F.pdf";
import Final8 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2019-20.1.docx";
import Final9 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2019-20.2.docx";
import Final10 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2019-20.3.pdf";
import Final11 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2019-20.4.docx";
import Final12 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2019-20.5.docx";
import Final13 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2019-20.6.pdf";
import Final14 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2019-20.7.pdf";
import Final15 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2019-20.8.docx";
import Final16 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2019-20.9.docx";
import Final17 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2018-19.1.pdf";
import Final18 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2018-19.2.pdf";
import Final19 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2018-19.3.pdf";
import Final20 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2018-19.4.pdf";
import Final21 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2018-19.5.docx";
import Final22 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2018-19.6.pdf";
import Final23 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2017-18.1.pdf";
import Final24 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2017-18.2.docx";
import Final25 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2017-18.3.docx";
import Final26 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2017-18.4.docx";
import Final27 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2017-18.5.docx";
import Final28 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2016-17.docx";
import Final29 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2015-16.1.pdf";
import Final30 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2015-16.2.docx";
import Final31 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2015-16.3.docx";
import Final32 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2015-16.4.docx";

import Final33 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2011-12.docx";
import Final34 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2011-12.1.docx";
import Final35 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2011-12.2.docx";
import Final36 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2011-12.3.docx";
import Final37 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2011-12.4.docx";
import Final38 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2011-12.5.docx";
import Final39 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2011-12.6.docx";

import Final40 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2010-11.doc";
import Final41 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2009-10.doc";
import Final42 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/FMR_DPWI_2007-08.doc";

import Interim1 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/DPWI_2021-22_05.pdf";
import Interim2 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/DPWI_2021-22_04.pdf";
import Interim3 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/DPWI_2020-21.docx";
import Interim4 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/DPWI_2019-20.pdf";
import Interim5 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/DPWI_2018-19.pdf";
import Interim6 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/DPWI_2018-19_Draft.pdf";
import Interim7 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/DPWI_2018-19_Draft.docx";
import Interim8 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/DPWI_2019-20.pdf";
import Interim9 from "../../../../assets/Reporting_Matters/DPWI/Management_Reports/DPWI_2019-20.pdf";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faFileWord } from "@fortawesome/free-solid-svg-icons";

const Managementreport = () => {
    return (
      <div className="main">
        <div className="page-title mb-4 pt-3">
          <h4>Management Reports</h4>
        </div>

        <div className="back-link pb-2">
          <p>
            You are here: <NavLink to="/dpwi">DPWI</NavLink>/
            <NavLink to="/reporting">Reporting Matters</NavLink>/
            <NavLink to="#">Management Reports</NavLink>
          </p>
        </div>

        <Tabs
          defaultActiveKey="FMR"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="FMR" title="Final Management Reports">
            <table class="table table-striped table-hover">
              <tbody>
                <div className="pt-4">
                  <h4>Final Management Reports</h4>
                </div>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report 2021/22
                  </td>
                  <td>
                    <NavLink to={Final1} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final1}
                      download="Final DPWI Management Report 2021-22"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report-Detail Audit Findings 2021/22
                  </td>
                  <td>
                    <NavLink to={Final2} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final2}
                      download="DPWI Management Report-Detail Audit Findings"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Detailed Findings 2020/21
                  </td>
                  <td>
                    <NavLink to={Final3} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final3}
                      download="Final DPWI Management Report Detailed Findings"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Executive Summary 2020/21
                  </td>
                  <td>
                    <NavLink to={Final4} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final4}
                      download="DPWI Management Report Executive Summary"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Final Draft 2020/21
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final5}
                      download="DPWI Management Report Final Draft"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report - Annex A-C
                  </td>
                  <td>
                    <NavLink to={Final6} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final6}
                      download="Final DPWI Management Report - Annex A-C"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report - Annex C-F
                  </td>
                  <td>
                    <NavLink to={Final7} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final7}
                      download="Final DPWI Management Report - Annex D-F"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Executive Summary 2019/20
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final8}
                      download="DPWI Management Report Executive Summary 2019-20"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Detailed Findings 2019/20
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final9}
                      download="DPWI Management Report Detailed Findings 2019-20"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Executive Summary Draft 2019/20 - 24
                    Sep 2020
                  </td>
                  <td>
                    <NavLink to={Final10} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final10}
                      download="DPWI Management Report Executive Summary 24 Sep 2020"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Executive Summary Draft 2019/20 - 16
                    Sep 2020
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final11}
                      download="DPWI Management Report Executive Draft Summary - 16 Sep 2020"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Executive Summary Draft 2019/20 - 15
                    Sep 2020
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final12}
                      download="DPWI Management Report Executive Draft Summary - 15 Sep 2020"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Detailed Findings Draft 2019/20 - 25
                    Sep 2020
                  </td>
                  <td>
                    <NavLink to={Final13} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final13}
                      download="DPWI Management Report Detailed Findings Draft - 25 Sep 2020"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Detailed Findings Draft 2019/20 - 24
                    Sep 2020
                  </td>
                  <td>
                    <NavLink to={Final14} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final14}
                      download="DPWI Management Report Detailed Findings Draft - 24 Sep 2020"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Detailed Findings Draft 2019/20 - 16
                    Sep 2020
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final15}
                      download="DPWI Management Report Executive Draft Summary - 16 Sep 2020"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Detailed Findings Draft 2019/20 - 15
                    Sep 2020
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final16}
                      download="DPWI Management Report Executive Draft Summary - 15 Sep 2020"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Executive Summary 2018/19
                  </td>
                  <td>
                    <NavLink to={Final17} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final17}
                      download="DPWI Management Report Executive Summary 2018/19"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Detailed Findings 2018/19 - 31 Jul
                    2019
                  </td>
                  <td>
                    <NavLink to={Final18} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final18}
                      download="DPWI Management Report Detailed Findings - 31 Jul 2019"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Executive Draft Summary 2018/19 - 17
                    Jul 2019
                  </td>
                  <td>
                    <NavLink to={Final19} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final19}
                      download="DPWI Management Report Executive Draft Summary - 17 Jul 2019"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Executive Draft Summary 2018/19 - 15
                    Jul 2019
                  </td>
                  <td>
                    <NavLink to={Final20} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final20}
                      download="DPWI Management Report Executive Draft Summary - 15 Jul 2019"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Executive Draft Summary 2018/19
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final21}
                      download="DPWI Management Report Executive Draft Summary 2018/19"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Detailed Findings Draft 2018/19 - 15
                    Jul 2019
                  </td>
                  <td>
                    <NavLink to={Final22} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final22}
                      download="DPWI Management Report Detailed Findings Draft - 15 Jul 2019"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Executive Summary 2017/18
                  </td>
                  <td>
                    <NavLink to={Final23} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final23}
                      download="DPWI Management Report Executive Summary 2017-18"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI PFMA Management Report Draft 2017/18 - 24 July 2018
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final24}
                      download="DPWI PFMA Management Report Draft - 24 July 2018"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI PFMA Management Report Draft 2017/18 - 16 July 2018
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final25}
                      download="DPWI PFMA Management Report Draft - 16 July 2018"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI PFMA Management Report Draft 2017/18 - 16 July 2018
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final26}
                      download="DPWI PFMA Management Report Draft - 16 July 2018"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI PFMA Management Report Draft 2017/18 - 15 July 2018
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final27}
                      download="DPWI PFMA Management Report Draft - 15 July 2018"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report 2016/17
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final28}
                      download="DPWI Management Report 2016-17"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Executive Summary 2015-16
                  </td>
                  <td>
                    <NavLink to={Final29} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final29}
                      download="DPWI Management Report Executive Summary 2015-16"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report 2015/16
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final30}
                      download="DPWI Management Report 2015/16"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Draft 2015/16 - 25 July 2015
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final31}
                      download="DPWI Management Report Draft - 25 July 2015"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Draft 2015/16 - 23 July 2015
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final32}
                      download="DPWI Management Report Draft - 23 July 2015"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report Executive Summary 2011-12
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final33}
                      download="DPWI Management Report Executive Summary 2011-12"
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
                    ></FontAwesomeIcon>{" "}
                    DPW Head Office Management Letter part 1 - Matrix page 53 -
                    74
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final34}
                      download="DPW Head Office Management Letter part 1 - Matrix"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    DPW Head office Management Letter part 1 ANNEXURE A page 43
                    -52
                  </td>
                  <td>
                    <NavLink to={Final35} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Final35}
                      download="DPW Head office Management Letter part 1 ANNEXURE A"
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
                    ></FontAwesomeIcon>{" "}
                    DPW Head office Management Letter part 2 ANNEXURE B page
                    75-456
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final36}
                      download="DPW Head office Management Letter part 2 ANNEXURE B"
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
                    ></FontAwesomeIcon>{" "}
                    DPW Head office Management Letter part 3 ANNEXURE B page
                    457-674
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final37}
                      download="DPW Head office Management Letter part 3 ANNEXURE B"
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
                    ></FontAwesomeIcon>{" "}
                    DPW Head office Management Letter part 4 ANNEXURE B page
                    675-1167
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final38}
                      download="DPW Head office Management Letter part 4 ANNEXURE B"
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
                    ></FontAwesomeIcon>{" "}
                    DPW Head office Management Letter part 5 ANNEXURE B page
                    1168-1197
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final39}
                      download="DPW Head office Management Letter part 5 ANNEXURE B"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report 2010/11
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final40}
                      download="DPWI Management Report 2010-11"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report 2009/10
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final41}
                      download="DPWI Management Report 2009-10"
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
                    ></FontAwesomeIcon>{" "}
                    DPWI Management Report 2007/08
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Final42}
                      download="DPWI Management Report 2007-08"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </Tab>
          <Tab eventKey="IMR" title="Interim Management Reports">
            <table class="table table-striped table-hover">
              <tbody>
                <div className="pt-4">
                  <h4>Interim Management Reports</h4>
                </div>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    Interim DPWI Management Report 2021/22 - 15 May 2022
                  </td>
                  <td>
                    <NavLink to={Interim1} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Interim1}
                      download="Interim_DPWI_Management_Report_15May2022"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    Interim DPWI Management Report 2021/22 - 28 April 2022
                  </td>
                  <td>
                    <NavLink to={Interim2} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Interim2}
                      download="Interim_DPWI_Management_Report_28April2022"
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
                    ></FontAwesomeIcon>{" "}
                    Interim DPWI Management Report 2020/21 - 06 May 2021
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Interim3}
                      download="Interim_DPWI_Management_Report_06May2021"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    Interim DPWI Management Report 2019/20 - 19 July 2020
                  </td>
                  <td>
                    <NavLink to={Interim4} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Interim4}
                      download="Interim_DPWI_Management_Report_19July2020"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    Interim DPWI Management Report 2018/19
                  </td>
                  <td>
                    <NavLink to={Interim5} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Interim5}
                      download="Interim_DPWI_Management_Report_2018-19"
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
                      icon={faFilePdf}
                      className="pe-2"
                    ></FontAwesomeIcon>{" "}
                    Interim DPWI Management Report Draft 2018/19- 24 April 2019
                  </td>
                  <td>
                    <NavLink to={Interim6} target="_blank" rel="noreferrer">
                      View
                    </NavLink>
                  </td>
                  <td>
                    <a
                      href={Interim6}
                      download="Interim_DPWI_Management_Report_Draft_24April2019(pdf)"
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
                    ></FontAwesomeIcon>{" "}
                    Interim DPWI Management Report Draft 2018/19- 24 April 2019
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Interim7}
                      download="Interim_DPWI_Management_Report_Draft_24April2019(doc)"
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
                    ></FontAwesomeIcon>{" "}
                    Interim DPWI Management Report 2017/18 - 06 April 2018
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Interim8}
                      download="Interim_DPWI_Management_Report_06April2018"
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
                    ></FontAwesomeIcon>{" "}
                    Interim DPWI Management Report 2015/16
                  </td>
                  <td></td>
                  <td>
                    <a
                      href={Interim9}
                      download="Interim_DPWI_Management_Report_2015-16"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Download
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </Tab>
        </Tabs>
      </div>
    );
};

export default Managementreport;
