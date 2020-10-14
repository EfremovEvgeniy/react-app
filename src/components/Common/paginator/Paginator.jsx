import React from "react";
import styles from "./Paginator.module.scss";

const Paginator = ({
  totalUsersCount,
  pageSize,
  onPageChanged,
  currentPage,
}) => {
  let pagesCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let limitPages = pages.slice(0, 10);

  return (
    <div className={styles.pagesWrapper}>
      {limitPages.map((p) => (
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
    </div>
  );
};

export default Paginator;
