import React from "react";

import { NavLink } from "react-router-dom";

const BudgetMatters = () => {
  return (
    <div className="main">
      <div className="page-title mb-4 pt-3">
        <h4>Budget Matters</h4>
      </div>
      <div className="back-link pb-2">
        <p>
          You are here: <NavLink to="/dpwi">DPWI</NavLink>/
          <NavLink to="#">Budget Matters</NavLink>
        </p>
      </div>

      <h1 className="text-center">Content coming soon</h1>
    </div>
  );
};

export default BudgetMatters;
