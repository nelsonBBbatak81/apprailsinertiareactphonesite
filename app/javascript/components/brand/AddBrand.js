import React, { useState, useRef } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function AddBrand({
  handelBackButton,
  setPreviewImage,
  previewImage,
  setTitle,
  title,
  setMetaInfo,
  onSubmit,
  setUrlImage,
  errors,
}) {
  const imageFile = useRef(null);
  const [isUpload, setIsUpload] = useState(false);

  const selectImage = () => {
    imageFile.current.click();
  };

  const pickFile = () => {
    setPreviewImage(null);
    let file = imageFile.current.files;
    console.log(file);
    if (file && file[0]) {
      let reader = new FileReader();
      reader.onloadstart = (e) => {
        console.log('start');
        setIsUpload(true);
      };
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.onloadend = (e) => {
        console.log('end');
        setIsUpload(false);
      };
      reader.readAsDataURL(file[0]);
      setUrlImage(file[0]);
    }
  };

  const styleImagePreview = {
    width: '250px',
    height: '250px',
    display: 'block',
    cursor: 'pointer',
    margin: '0 auto 30px',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundImage: `url(${previewImage})`,
  };

  return (
    <>
      <Container>
        <div className="row mt-5">
          <div className="col-md-6 offset-md-3">
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-dark"
                type="button"
                onClick={() => handelBackButton()}
              >
                Back
              </button>
            </div>
            <h1 className="fs-3 fw-bold text-center mb-3">Add Brand</h1>
            <Form onSubmit={onSubmit}>
              <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  value={title}
                  placeholder="Fill title category .."
                  onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && (
                  <div className="text-danger">{errors.title}</div>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMetaInfo">
                <Form.Label>Password</Form.Label>
                <textarea
                  id=""
                  cols="30"
                  rows="4"
                  className="form-control"
                  placeholder="Fill meta description category .."
                  onChange={(e) => setMetaInfo(e.target.value)}
                ></textarea>
                {errors.meta_info && (
                  <div className="text-danger">{errors.meta_info}</div>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Figure</Form.Label>
                <Form.Control
                  type="file"
                  ref={imageFile}
                  onInput={() => pickFile()}
                />
                {errors.urlimage && (
                  <div className="text-danger">{errors.urlimage}</div>
                )}
                {isUpload && <p>Wait for uploading ...</p>}
                <div
                  style={previewImage && styleImagePreview}
                  onClick={() => selectImage()}
                ></div>
              </Form.Group>
              <div className="d-grid gap-2">
                <Button variant="primary" type="submit">
                  Save
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
}

export default AddBrand;
