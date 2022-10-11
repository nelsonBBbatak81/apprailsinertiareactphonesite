import React from 'react';

function ShowBrand({ brand, handelBackButton }) {
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
          <div className="col-md-8 col-sm-8">{brand.title}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 col-sm-4">
            <strong>Slug</strong>
          </div>
          <div className="col-md-8 col-sm-8">{brand.slug}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 col-sm-4">
            <strong>Meta Info</strong>
          </div>
          <div className="col-md-8 col-sm-8">{brand.meta_info}</div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4 col-sm-4">
            <strong>Figure</strong>
          </div>
          <div className="col-md-8 col-sm-8">
            <img
              src={brand.urlimage}
              alt="Image Brand"
              height="150px"
              className="w-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowBrand;
