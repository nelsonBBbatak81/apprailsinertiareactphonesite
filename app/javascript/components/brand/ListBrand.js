import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Pagination from '../Pagination';

function ListBrand({
  brands,
  handleShowFormAddBrand,
  handleShowFormEditBrand,
  handleShowFormBrand,
  deleteBrand,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [brandsPerPage] = useState(3);

  // Get current posts
  const indexOfLastBrand = currentPage * brandsPerPage;
  const indexOfFirstBrand = indexOfLastBrand - brandsPerPage;
  const currentBrands =
    brands.length <= brandsPerPage
      ? brands
      : brands.slice(indexOfFirstBrand, indexOfLastBrand);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // console.log(categories.length > 0);
  console.log(brands);
  return (
    <>
      <Container className="mt-5">
        <h1 className="fs-3 fw-bold text-center mb-5">List of Brand</h1>
        <div className="d-flex justify-content-end mb-1">
          <button
            className="btn btn-primary"
            onClick={() => handleShowFormAddBrand()}
          >
            Create Brand
          </button>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Figure</th>
              <th>Title</th>
              <th>Meta Info</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {brands.length > 0 &&
              currentBrands.map((brand) => (
                <tr key={brand.id}>
                  <td>
                    <img
                      src={brand.urlimage}
                      alt="Image Brand"
                      width={60}
                      height={60}
                    />
                  </td>
                  <td>{brand.title}</td>
                  <td>{brand.meta_info}</td>
                  <td>
                    <button
                      className="btn btn-outline-default btn-sm mr-1"
                      onClick={() => handleShowFormBrand(brand)}
                    >
                      Show
                    </button>
                    <button
                      className="btn btn-outline-info btn-sm mr-1"
                      onClick={() => handleShowFormEditBrand(brand)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteBrand(brand.id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        {brands.length > brandsPerPage && (
          <div className="d-flex justify-content-center mt-4">
            <Pagination
              postsPerPage={brandsPerPage}
              totalPosts={brands.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        )}
      </Container>
    </>
  );
}

export default ListBrand;
