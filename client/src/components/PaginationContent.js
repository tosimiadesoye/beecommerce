import React from "react";
import Pagination from "react-js-pagination";

export const ProductContentPagination = (props) => {
  const { product, activePage, setCurrentPage } = props;

  const handlePageChange = (pageNumber) => {
  
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <div className="d-flex justify-content-center ">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={9}
          totalItemsCount={product.length}
          pageRangeDisplayed={3}
          onChange={handlePageChange}
           itemClass="page-item"
          linkClass="page-link"
          
        />
      </div>
    </div>
  );
};



