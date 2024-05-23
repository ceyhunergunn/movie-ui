import React from "react";
import { MainContext } from "../context/Context";

const Pagination = () => {
  const { totalResults, page } = React.useContext(MainContext);
  const totalPageCount = totalResults / 10;
  console.log(Math.round(totalPageCount));
  return (
    <div className="w-100 flex-center">
      {}
      <div className="pagination-btn">{page}</div>
    </div>
  );
};

export default Pagination;
