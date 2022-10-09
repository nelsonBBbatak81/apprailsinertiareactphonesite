import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <a onClick={() => paginate(currentPage - 1)} className="page-link">
              Previuos
            </a>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} className="page-link">
              {number}
            </a>
          </li>
        ))}
        {currentPage + 1 <= pageNumbers.length && (
          <li className="page-item">
            <a onClick={() => paginate(currentPage + 1)} className="page-link">
              Next
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
