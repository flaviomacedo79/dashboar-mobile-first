import React from "react";
import {
  BsFillCameraFill,
  BsEyeFill,
  BsEnvelopeFill,
  BsChevronRight,
  BsFillSunriseFill,
  BsFillTelephoneFill,
  BsFillCreditCardFill,
  BsFillEnvelopeOpenFill,
  BsFillAirplaneFill,
  BsFillTriangleFill,
} from "react-icons/bs";

import { AiFillCalendar } from "react-icons/ai";
import {
  FaPlane,
  FaRegFileAlt,
  FaImages,
  FaUniversity,
  FaGlassMartiniAlt,
  FaChartBar,
  FaUsers,
  FaBookOpen,
  FaMoneyBillWave,
} from "react-icons/fa";

const AsideMenu = () => {
  const asideNav = {
    padding: "0 15px 0 10px",
  };

  const asideDestaqueMenu = {
    color: "#B0C4DE",
    fontSize: ".875rem",
    textTransform: "upperCase",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "30px 0 10px 0",
  };

  const asideMenuItems = {
    fontSize: ".75rem",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
    textTransform: "capitalize",
    paddingLeft: "10px",
  };

  const asideMenuItemsAfastamento = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const asideTopo = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    paddingLeft: "10px",
    fontSize: ".875rem",
    fontWeight: "900",
    color: "#cccccc",
  };

  return (
    <>
      <h1 style={asideTopo}>
        <BsFillSunriseFill />
        <div>
          Ux<span style={{ fontWeight: "400" }}>Pro</span>
        </div>
      </h1>
      <div>
        <img src="" alt="" />
        <p>Matthew H</p>
      </div>
      <nav style={asideNav}>
        <ul>
          <li style={asideDestaqueMenu}>
            documents <FaRegFileAlt />
          </li>
          <ul style={asideMenuItemsAfastamento}>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <BsFillCameraFill />
                <p>insurance</p>
              </div>
              <BsChevronRight />
            </li>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <BsFillAirplaneFill />
                <p>travel</p>
              </div>
              <BsChevronRight />
            </li>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <FaMoneyBillWave />
                <p>taxes</p>
              </div>
              <BsChevronRight />
            </li>
          </ul>
          <li style={asideDestaqueMenu}>
            messages <BsEnvelopeFill />
          </li>
          <ul style={asideMenuItemsAfastamento}>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <BsFillEnvelopeOpenFill />
                <p>inbox</p>
              </div>
              <BsChevronRight />
            </li>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <BsEyeFill />
                <p>unread</p>
              </div>
              <BsChevronRight />
            </li>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <FaBookOpen />
                <p>archives</p>
              </div>
              <BsChevronRight />
            </li>
          </ul>

          <li style={asideDestaqueMenu}>
            photo album <FaImages />
          </li>
          <ul style={asideMenuItemsAfastamento}>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <BsFillTriangleFill />
                <p>vacation</p>
              </div>
              <BsChevronRight />
            </li>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <FaGlassMartiniAlt />
                <p>anniversary</p>
              </div>
              <BsChevronRight />
            </li>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <FaUniversity />
                <p>university</p>
              </div>
              <BsChevronRight />
            </li>
          </ul>

          <li style={asideDestaqueMenu}>
            statics <FaChartBar />
          </li>
          <ul style={asideMenuItemsAfastamento}>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <BsFillCreditCardFill />
                <p>finances</p>
              </div>
              <BsChevronRight />
            </li>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <BsFillTelephoneFill />
                <p>call stats</p>
              </div>
              <BsChevronRight />
            </li>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <FaPlane />
                <p>trip logs</p>
              </div>
              <BsChevronRight />
            </li>
          </ul>

          <li style={asideDestaqueMenu}>
            events <AiFillCalendar />{" "}
          </li>
          <ul style={asideMenuItemsAfastamento}>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <FaGlassMartiniAlt />
                <p>weddings</p>
              </div>
              <BsChevronRight />
            </li>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <BsChevronRight />
                <p>playdates</p>
              </div>
              <BsChevronRight />
            </li>
            <li style={asideMenuItems}>
              <div style={asideMenuItems}>
                <FaUsers />
                <p>networking</p>
              </div>
              <BsChevronRight />
            </li>
          </ul>
        </ul>
      </nav>
    </>
  );
};

export default AsideMenu;
