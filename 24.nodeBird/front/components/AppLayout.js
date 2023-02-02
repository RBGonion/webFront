import React from "react";
import PropsTypes from "prop-types";

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>공통메뉴</div>
      {children}
    </div>
  );
};

AppLayout.propTypes = {
  children: PropsTypes.node.isRequired,
};

export default AppLayout;
