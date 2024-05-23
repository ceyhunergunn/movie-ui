import React from "react";
import { MainContext } from "../context/Context";

const Pagination = () => {
  const { totalResults, page, setPage } = React.useContext(MainContext);
  const totalPageCount = Math.round(totalResults / 10);

  return (
    <div className="w-100 flex-center">
      {+page > 1 ? (
        <div className="text-2 flex-center">
          <div
            onClick={() => {
              setPage(1);
            }}
            className="pagination-btn"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-skip-start"
                style={{ marginBottom: "1px", marginRight: "1px" }}
                viewBox="0 0 16 16"
              >
                <path d="M4 4a.5.5 0 0 1 1 0v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L5 8.752V12a.5.5 0 0 1-1 0zm7.5.633L5.696 8l5.804 3.367z" />
              </svg>
            </div>
          </div>
        </div>
      ) : null}
      {+page > 1 ? (
        <div className="text-2 flex-center">
          <div
            onClick={() => {
              setPage(+page - 1);
            }}
            className="pagination-btn"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                style={{ marginBottom: "1px", marginRight: "1px" }}
                fill="currentColor"
                className="bi bi-caret-left"
                viewBox="0 0 16 16"
              >
                <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753" />
              </svg>
            </div>
          </div>
        </div>
      ) : null}
      {/* {+page > 3 ? (
        <div className="text-2 flex-center">
          <div
            onClick={() => {
              setPage(1);
            }}
            className="pagination-btn"
          >
            1
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-dot"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-dot"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-dot"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg>
          </div>
        </div>
      ) : null} */}
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
      {/* {+page < totalPageCount - 1 ? (
        <div className="text-2 flex-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-dot"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-dot"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-dot"
              viewBox="0 0 16 16"
            >
              <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
            </svg>
          </div>
          <div
            onClick={() => {
              setPage(totalPageCount);
            }}
            className="pagination-btn"
          >
            {totalPageCount}
          </div>
        </div>
      ) : null} */}
      {+page < totalPageCount ? (
        <div className="text-2 flex-center">
          <div
            onClick={() => {
              setPage(+page + 1);
            }}
            className="pagination-btn"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                style={{ marginBottom: "1px", marginRight: "1px" }}
                fill="currentColor"
                className="bi bi-caret-right"
                viewBox="0 0 16 16"
              >
                <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
              </svg>
            </div>
          </div>
        </div>
      ) : null}
      {+page < totalPageCount ? (
        <div className="text-2 flex-center">
          <div
            onClick={() => {
              setPage(totalPageCount);
            }}
            className="pagination-btn"
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-skip-end"
                viewBox="0 0 16 16"
                style={{ marginBottom: "1px", marginRight: "1px" }}
              >
                <path d="M12.5 4a.5.5 0 0 0-1 0v3.248L5.233 3.612C4.713 3.31 4 3.655 4 4.308v7.384c0 .653.713.998 1.233.696L11.5 8.752V12a.5.5 0 0 0 1 0zM5 4.633 10.804 8 5 11.367z" />
              </svg>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Pagination;
