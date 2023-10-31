import React from "react";
import "../../../pages/DPWI/Parliamentary/Parliamentary.css";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";


import T1 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/UPLIFTING TERMINATION OF LEASES.pdf";
import T2 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/UNLOCKING LEASES NDPW.pdf";
import T3 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASE IN-CAPTURE LEASE NDPW-Update.pdf";
import T4 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASED ASSET CREATION NDPW-UDO-0002.pdf";
import T5 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASED ASSET VERIFICATION NDPW-UDO-0003.pdf";
import T6 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASED ASSET APPROVAL NDPW-UDO-0004.pdf";
import T7 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASED ASSET MANAGEMENT NDPW-UDO-0005.pdf";
import T8 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASE IN-CAPTURE LEASE NDPW-UDO-0006.pdf";
import T9 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASE IN-VERIFY LEASE NDPW-UDO-0007.pdf";
import T10 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASE IN -APPROVE LEASE NDPW-UDO-0008.pdf";
import T11 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASE IN-LEASE SUSPENSION NDPW-UDO-0010.pdf";
import T12 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASE IN-LEASE SUSPENSION VERIFICATION-UDO-0011.pdf";
import T13 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASE IN-LEASE SUSPENSION APPROVAL-UDO-0012.pdf";
import T14 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASE IN-LEASE RENEWAL NDPW-UDO-0013.pdf";
import T15 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASE IN-LEASE RENEWAL VERIFICATION NDPW-UDO-0014.pdf";
import T16 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASE IN-LEASE RENEWAL APPROVAL NDPW-UDO-0015.pdf";
import T17 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASE IN-LEASE TERMINATION NDPW-UDO-0016.pdf";
import T18 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASE IN-LEASE TERMINATION VERIFICATION-UDO-0017.pdf";
import T19 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASE IN-LEASE TERMINATION APPROVAL NDPW-UDO-0018.pdf";
import T20 from "../../../assets/Training/DPWI/Archibus_Training_Manuals_LM/LEASE IN-COST ADJUSTMENT NDPW-UDO-00019.pdf";


const Training = () => {
  return (
    <div className="main">
      <div className="page-title mb-4 pt-3">
        <h4>Training and Development</h4>
      </div>

      <div className="back-link pb-2">
        <p>
          You are here: <NavLink to="/dpwi">DPWI</NavLink>/
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
              Archibus Training Manuals (Leasing module)
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
                UPLIFTING TERMINATION OF LEASES
              </span>
            </td>
            <td>
              <NavLink to={T1} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T1}
                download="UPLIFTING TERMINATION OF LEASES"
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
                UNLOCKING LEASES NDPW
              </span>
            </td>
            <td>
              <NavLink to={T2} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T2}
                download="UNLOCKING LEASES NDPW"
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
                LEASE IN-CAPTURE LEASE NDPW-Update
              </span>
            </td>
            <td>
              <NavLink to={T3} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T3}
                download="LEASE IN-CAPTURE LEASE NDPW-Update"
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
                LEASED ASSET CREATION NDPW-UDO-0002
              </span>
            </td>
            <td>
              <NavLink to={T4} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T4}
                download="LEASED ASSET CREATION NDPW-UDO-0002"
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
                LEASED ASSET VERIFICATION NDPW-UDO-0003
              </span>
            </td>
            <td>
              <NavLink to={T5} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T5}
                download="LEASED ASSET VERIFICATION NDPW-UDO-0003"
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
                LEASED ASSET APPROVAL NDPW-UDO-0004
              </span>
            </td>
            <td>
              <NavLink to={T6} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T6}
                download="LEASED ASSET APPROVAL NDPW-UDO-0004"
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
                LEASED ASSET MANAGEMENT NDPW-UDO-0005
              </span>
            </td>
            <td>
              <NavLink to={T7} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T7}
                download="LEASED ASSET MANAGEMENT NDPW-UDO-0005"
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
                LEASE IN-CAPTURE LEASE NDPW-UDO-0006
              </span>
            </td>
            <td>
              <NavLink to={T8} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T8}
                download="LEASE IN-CAPTURE LEASE NDPW-UDO-0006"
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
                LEASE IN-VERIFY LEASE NDPW-UDO-0007
              </span>
            </td>
            <td>
              <NavLink to={T9} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T9}
                download="LEASE IN-VERIFY LEASE NDPW-UDO-0007"
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
                LEASE IN -APPROVE LEASE NDPW-UDO-0008
              </span>
            </td>
            <td>
              <NavLink to={T10} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T10}
                download="LEASE IN -APPROVE LEASE NDPW-UDO-0008"
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
                LEASE IN-LEASE SUSPENSION NDPW UDO-0010
              </span>
            </td>
            <td>
              <NavLink to={T11} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T11}
                download="LEASE IN-LEASE SUSPENSION NDPW-UDO-0010"
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
                LEASE IN-LEASE SUSPENSION VERIFICATION UDO-0011
              </span>
            </td>
            <td>
              <NavLink to={T12} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T12}
                download="LEASE IN-LEASE SUSPENSION VERIFICATION-UDO-0011"
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
                LEASE IN-LEASE SUSPENSION APPROVAL UDO-0012
              </span>
            </td>
            <td>
              <NavLink to={T13} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T13}
                download="LEASE IN-LEASE SUSPENSION APPROVAL-UDO-0012"
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
                LEASE IN-LEASE RENEWAL NDPW UDO-0013
              </span>
            </td>
            <td>
              <NavLink to={T14} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T14}
                download="LEASE IN-LEASE RENEWAL NDPW-UDO-0013"
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
                LEASE IN-LEASE RENEWAL VERIFICATION NDPW UDO-0014
              </span>
            </td>
            <td>
              <NavLink to={T15} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T15}
                download="LEASE IN-LEASE RENEWAL VERIFICATION NDPW-UDO-0014"
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
                LEASE IN-LEASE RENEWAL APPROVAL NDPW UDO-0015
              </span>
            </td>
            <td>
              <NavLink to={T16} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T16}
                download="LEASE IN-LEASE RENEWAL APPROVAL NDPW-UDO-0015"
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
                LEASE IN-LEASE TERMINATION NDPW UDO-0016
              </span>
            </td>
            <td>
              <NavLink to={T17} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T17}
                download="LEASE IN-LEASE TERMINATION NDPW-UDO-0016"
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
                LEASE IN-LEASE TERMINATION VERIFICATION UDO-0017
              </span>
            </td>
            <td>
              <NavLink to={T18} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T18}
                download="LEASE IN-LEASE TERMINATION VERIFICATION-UDO-0017"
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
                LEASE IN-LEASE TERMINATION APPROVAL NDPW UDO-0018
              </span>
            </td>
            <td>
              <NavLink to={T19} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T19}
                download="LEASE IN-LEASE TERMINATION APPROVAL NDPW UDO-0018"
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
                LEASE IN-COST ADJUSTMENT NDPW UDO-00019
              </span>
            </td>
            <td>
              <NavLink to={T20} target="_blank" rel="noreferrer">
                View
              </NavLink>
            </td>
            <td>
              <a
                href={T20}
                download="LEASE IN-COST ADJUSTMENT NDPW-UDO-00019"
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

export default Training;
