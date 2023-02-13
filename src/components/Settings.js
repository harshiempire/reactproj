import React from "react";
import Sidebar from "./Sidebar";
import Setting from "./Setting";

const Settings = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <div className="col-lg-9 matter ">
            <div className="row">
              <div className="col-lg topbar border border-dark">
                <h2>Settings</h2>
              </div>
              <div className="col-lg-10 catter">
                <Setting />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Settings;
