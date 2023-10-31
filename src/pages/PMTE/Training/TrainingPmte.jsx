import React from "react";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePowerpoint } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

import T1 from "../../../assets/Training/PMTE/PMTE Year End Procedures/AFS Training_CGSO 2023 AFS final.pptx";
import T2 from "../../../assets/Training/PMTE/PMTE Year End Procedures/AFS Training_D2D 2023 AFS.pptx";
import T3 from "../../../assets/Training/PMTE/PMTE Year End Procedures/AFS Training_MunRate 2023 AFS.pptx";

const TrainingPmte = () => {
  return (
    <div className="main">
      <div className="page-title mb-4 pt-3">
        <h4>Training and Development [PMTE]</h4>
      </div>

      <div className="back-link pb-2">
        <p>
          You are here: <NavLink to="/pmte">PMTE</NavLink>/
          <NavLink to="#">Training and Development</NavLink>
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
              PMTE Year End Procedures
            </td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>
              <span className="ms-3">
                <FontAwesomeIcon
                  icon={faFilePowerpoint}
                  className="pe-2"
                ></FontAwesomeIcon>
                AFS Training CGSO 2023 AFS final
              </span>
            </td>
            <td width="450">
              
            </td>
            <td>
              <a
                href={T1}
                download="AFS Training_CGSO 2023 AFS final"
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
                  icon={faFilePowerpoint}
                  className="pe-2"
                ></FontAwesomeIcon>
                AFS Training D2D 2023 AFS
              </span>
            </td>
            <td>
              
            </td>
            <td>
              <a
                href={T2}
                download="AFS Training_D2D 2023 AFS"
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
                  icon={faFilePowerpoint}
                  className="pe-2"
                ></FontAwesomeIcon>
                AFS Training MunRate 2023 AFS
              </span>
            </td>
            <td>
              
            </td>
            <td>
              <a
                href={T3}
                download="AFS Training_MunRate 2023 AFS"
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

export default TrainingPmte;
