import React from 'react';

function ShowCategory({ category, handelBackButton }) {
  return (
    <div className="row mt-5">
      <div className="col-md-6 offset-md-3">
        <div className="d-flex justify-content-end mb-5">
          <button
            className="btn btn-secondary"
            onClick={() => handelBackButton()}
          >
            Back
          </button>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 col-sm-4">
            <strong>Title</strong>
          </div>
          <div className="col-md-8 col-sm-8">{category.title}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 col-sm-4">
            <strong>Slug</strong>
          </div>
          <div className="col-md-8 col-sm-8">{category.slug}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 col-sm-4">
            <strong>Meta Info</strong>
          </div>
          <div className="col-md-8 col-sm-8">{category.meta_info}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 col-sm-4">
            <strong>Figure</strong>
          </div>
          <div className="col-md-8 col-sm-8">
            <img
              src={category.urlimage}
              alt="Image Category"
              height="150px"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCategory;
