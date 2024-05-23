import React from "react";
import { MainContext } from "../context/Context";

const Pagination = () => {
  const { totalResults, page, setPage } = React.useContext(MainContext);
  const totalPageCount = Math.round(totalResults / 10);
  console.log(page);
  return (
    <div className="w-100 flex-center">
      {+page > 2 ? (
        <>
          <div
            onClick={() => {
              setPage(1);
            }}
            className="pagination-btn"
          >
            1
          </div>
          ...
        </>
      ) : null}
      {+page > 1 ? (
        <div
          onClick={() => {
            setPage(+page - 1);
          }}
          className="pagination-btn"
        >
          {+page - 1}
        </div>
      ) : null}
      <div className="pagination-btn-active">{+page}</div>
      {+page < totalPageCount ? (
        <div
          onClick={() => {
            setPage(+page + 1);
          }}
          className="pagination-btn"
        >
          {+page + 1}
        </div>
      ) : null}
      {+page < totalPageCount - 1 ? (
        <>
          ...
          <div
            onClick={() => {
              setPage(totalPageCount);
            }}
            className="pagination-btn"
          >
            {totalPageCount}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Pagination;
