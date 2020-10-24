import React, { useState } from "react";
import styles from "./Paginator.module.scss";

const Paginator = ({
  totalItemsCount,
  pageSize,
  onPageChanged,
  currentPage,
  portionSize,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let portionCount = Math.ceil(pagesCount / portionSize);
  let [portionNumber, setPortionNumber] = useState(1);
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;

  return (
    <div className={styles.pagesWrapper}>
      {portionNumber > 1 && (
        <div>
          <button
            onClick={() => {
              setPortionNumber(1);
            }}
          >
            First
          </button>
          <button
            onClick={() => {
              setPortionNumber(portionNumber - 1);
            }}
          >
            Prev
          </button>
        </div>
      )}
      {pages
        .filter(
          (p) => p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map((p) => (
          <span
            key={p}
            className={currentPage === p ? styles.selectedPage : undefined}
            onClick={() => {
              onPageChanged(p);
            }}
          >
            {p}
          </span>
        ))}
      {portionCount > portionNumber && (
        <div>
          <button
            onClick={() => {
              setPortionNumber(portionNumber + 1);
            }}
          >
            Next
          </button>
          <button
            onClick={() => {
              setPortionNumber(portionCount);
            }}
          >
            Last
          </button>
        </div>
      )}
    </div>
  );
};

export default Paginator;
