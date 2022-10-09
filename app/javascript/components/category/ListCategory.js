import React, { useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import Pagination from '../Pagination';

function ListCategory({
  categories,
  handleShowFormAddCategory,
  handleShowFormEditCategory,
  handleShowFormCategory,
  deleteCategory,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(3);

  // Get current posts
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // console.log(categories.length > 0);
  console.log(categories);
  return (
    <>
      <Container className="mt-5">
        <h1 className="fs-3 fw-bold text-center mb-5">List of Category</h1>
        <div className="d-flex justify-content-end mb-1">
          <button
            className="btn btn-primary"
            onClick={() => handleShowFormAddCategory()}
          >
            Create Category
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
            {currentCategories.length > 0 &&
              currentCategories.map((category) => (
                <tr key={category.id}>
                  <td>
                    <img
                      src={category.urlimage}
                      alt="Image Category"
                      width={60}
                      height={60}
                    />
                  </td>
                  <td>{category.title}</td>
                  <td>{category.meta_info}</td>
                  <td>
                    <button
                      className="btn btn-outline-default btn-sm mr-1"
                      onClick={() => handleShowFormCategory(category)}
                    >
                      Show
                    </button>
                    <button
                      className="btn btn-outline-info btn-sm mr-1"
                      onClick={() => handleShowFormEditCategory(category)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteCategory(category.id)}
                      className="btn btn-outline-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <div className="d-flex justify-content-center mt-4">
          <Pagination
            postsPerPage={categoriesPerPage}
            totalPosts={categories.length}
            paginate={paginate}
          />
        </div>
      </Container>
    </>
  );
}

export default ListCategory;
