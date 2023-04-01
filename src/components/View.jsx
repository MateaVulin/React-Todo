import React from "react";

const View = () => {
  const View = ({ toggleView, showOnlyActive }) => {
    return (
      <div>
        <button>Show All</button>
        <button>Show active</button>
        <button onClick={toggleView}>
          {showOnlyActive ? "Show All" : "Only active"}
        </button>
      </div>
    );
  };
};
export default View;
