import React from "react";
import Pagination from "react-js-pagination";
import PropTypes from 'prop-types';
 const ProductContentPagination = (props) => {
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


ProductContentPagination.propTypes = {
  product: PropTypes.array,
  activePage: PropTypes.number,
  setCurrentPage: PropTypes.func,
}
export default ProductContentPagination


