import React from "react";
import { NavLink } from "react-router-dom";

const Pagination = () => {
  return (
    <nav>
      <ul className="pagination">
        <li className="pagination-item">
          <NavLink
            className="page-link"
            style={(active) => ({
              color: active ? "white" : "none",
              backgroundColor: active ? "#f7941d" : "none",
            })}
            to={"#"}
            // activeClassName="active"
          >
            1
          </NavLink>
        </li>
        <li className="pagination-item">
          <NavLink className="page-link" to={"#"}>
            2
          </NavLink>
        </li>
        <li className="pagination-item">
          <NavLink className="page-link" to={"#"}>
            3
          </NavLink>
        </li>
        <li className="pagination-item">
          <NavLink className="page-link" to={"#"}>
            4
          </NavLink>
        </li>
        <li className="pagination-item">
          <NavLink className="page-link" to={"#"}>
            5
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
