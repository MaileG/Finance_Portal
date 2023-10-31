import React from 'react';


import Downloadpdf9 from '../../../../assets/Reporting_Matters/DPWI/Audit/2013-14.pdf';
import Downloadpdf8 from '../../../../assets/Reporting_Matters/DPWI/Audit/2014-15.pdf';
import Downloadpdf7 from '../../../../assets/Reporting_Matters/DPWI/Audit/2015-16.pdf';
import Downloadpdf6 from '../../../../assets/Reporting_Matters/DPWI/Audit/2016-17.pdf';
import Downloadpdf5 from '../../../../assets/Reporting_Matters/DPWI/Audit/2017-18.pdf';
import Downloadpdf4 from '../../../../assets/Reporting_Matters/DPWI/Audit/2018-19.pdf';
import Downloadpdf3 from '../../../../assets/Reporting_Matters/DPWI/Audit/2019-20.pdf';
import Downloadpdf1 from '../../../../assets/Reporting_Matters/DPWI/Audit/2021-22.pdf';


import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';



const Audit = () => {
  return (
    <div className="main">
      <div className="page-title mb-4 pt-3">
        <h4>Audit Reports</h4>
      </div>
      <div className="back-link pb-2">
        <p>
          You are here: <NavLink to="/dpwi">DPWI</NavLink>/
          <NavLink to="/reporting">Reporting Matters</NavLink>/
          <NavLink to="#">Audit Reports</NavLink>
        </p>
      </div>

      <table class="table table-striped table-hover">
        <tbody>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faFilePdf}
                className="pe-2"
              ></FontAwesomeIcon>{" "}
              Audit Report (2021 / 2022)
            </td>
            <td>
              <NavLink to={Downloadpdf1} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <NavLink
                to={Downloadpdf1}
                download="Audit_Report_2021-22"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </NavLink>
            </td>
          </tr>

          {/* <tr>
                    <td><FontAwesomeIcon icon={faFilePdf} className="pe-2"></FontAwesomeIcon> Audit Report (2020/2021)</td>
                    <td><NavLink to=''>Veiw</NavLink></td>
                    <td><a href={Downloadpdf2} download="Audit_Report_2020-21" target="_blank" rel="noreferrer">Download</a></td>
                </tr> */}
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faFilePdf}
                className="pe-2"
              ></FontAwesomeIcon>{" "}
              Audit Report (2019 / 2020)
            </td>
            <td>
              <NavLink to={Downloadpdf3} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <NavLink
                to={Downloadpdf3}
                download="Audit_Report_2019-20"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faFilePdf}
                className="pe-2"
              ></FontAwesomeIcon>{" "}
              Audit Report (2018 / 2019)
            </td>
            <td>
              <NavLink to={Downloadpdf4} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <NavLink
                to={Downloadpdf4}
                download="Audit_Report_2018-19"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faFilePdf}
                className="pe-2"
              ></FontAwesomeIcon>{" "}
              Audit Report (2017 / 2018)
            </td>
            <td>
              <NavLink to={Downloadpdf5} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <NavLink
                to={Downloadpdf5}
                download="Audit_Report_2017-18"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faFilePdf}
                className="pe-2"
              ></FontAwesomeIcon>{" "}
              Audit Report (2016 / 2017)
            </td>
            <td>
              <NavLink to={Downloadpdf6} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <NavLink
                to={Downloadpdf6}
                download="Audit_Report_2016-17"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faFilePdf}
                className="pe-2"
              ></FontAwesomeIcon>{" "}
              Audit Report (2015 / 2016)
            </td>
            <td>
              <NavLink to={Downloadpdf7} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <NavLink
                to={Downloadpdf7}
                download="Audit_Report_2015-16"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faFilePdf}
                className="pe-2"
              ></FontAwesomeIcon>{" "}
              Audit Report (2014 / 2015)
            </td>
            <td>
              <NavLink to={Downloadpdf8} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <NavLink
                to={Downloadpdf8}
                download="Audit_Report_2014-15"
                target="_blank"
                rel="noreferrer"
              >
                Download
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>
              <FontAwesomeIcon
                icon={faFilePdf}
                className="pe-2"
              ></FontAwesomeIcon>{" "}
              Audit Report (2013 / 2014)
            </td>
            <td>
              <NavLink to={Downloadpdf9} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <NavLink
                to={Downloadpdf9}
                download="Audit_Report_2013-14"
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

export default Audit