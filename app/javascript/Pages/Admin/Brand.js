import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { motion } from 'framer-motion';
import { Head } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react';
import {
  AddBrand,
  AdminLayout,
  ListBrand,
  EditBrand,
  ShowBrand,
  Loading,
} from '../../components';

export default function Brand({ brands }) {
  const [isFormListBrand, setFormListBrand] = useState(true);
  const [isFormAddBrand, setFormAddBrand] = useState(false);
  const [isFormEditBrand, setFormEditBrand] = useState(false);
  const [isFormShowBrand, setFormShowBrand] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [brand, setBrand] = useState({});
  const [title, setTitle] = useState('');
  const [meta_info, setMetaInfo] = useState('');
  const [urlimage, setUrlImage] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const { errors } = usePage().props;

  const handelBackButton = () => {
    setFormAddBrand(false);
    setFormEditBrand(false);
    setFormShowBrand(false);
    setFormListBrand(true);
    handleReset();
  };

  const handleReset = () => {
    setBrand({});
    setTitle('');
    setMetaInfo('');
    setUrlImage('');
    setPreviewImage(null);
  };

  const handleShowFormAddBrand = () => {
    setFormListBrand(false);
    setFormAddBrand(true);
    handleReset();
  };

  const handleShowFormBrand = (data) => {
    setFormListBrand(false);
    setFormShowBrand(true);
    setBrand(data);
  };

  const handleShowFormEditBrand = (data) => {
    setFormListBrand(false);
    setFormEditBrand(true);
    setBrand(data);
    setTitle(data.title);
    setMetaInfo(data.meta_info);
    setPreviewImage(data.urlimage);
    setUrlImage(null);
  };

  const updateBrand = async (id) => {
    setLoading(true);
    let formData = new FormData();
    formData.append('brand[title]', title);
    formData.append('brand[meta_info]', meta_info);
    formData.append('brand[urlimage]', urlimage);
    console.log(formData);
    await Inertia.post(`/admin/brand/update/${id}`, formData, {
      preserveScroll: true,
      onBefore: () => {},
      onStart: (visit) => {},
      onSuccess: (page) => {
        setLoading(false);
        handelBackButton();
      },
      onError: (errors) => {
        setLoading(false);
      },
    });
  };

  const addBrand = async () => {
    setLoading(true);
    let formData = new FormData();
    formData.append('brand[title]', title);
    formData.append('brand[meta_info]', meta_info);
    formData.append('brand[urlimage]', urlimage);
    await Inertia.post('/admin/brand/store', formData, {
      preserveScroll: true,
      onBefore: () => {},
      onStart: (visit) => {},
      onSuccess: (page) => {
        setLoading(false);
        handelBackButton();
      },
      onError: (errors) => {
        setLoading(false);
      },
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (brand.hasOwnProperty('id')) {
      updateBrand(brand.id);
    } else {
      addBrand();
    }
  };

  const deleteBrand = async (id) => {
    let conf = confirm('Are you sure want to delete this item brand ?');
    if (conf) {
      setLoading(true);
      await Inertia.delete(`/admin/brand/delete/${id}`, {
        preserveScroll: true,
        onBefore: () => {},
        onStart: (visit) => {},
        onSuccess: (page) => {
          setLoading(false);
        },
        onError: (errors) => {
          setLoading(false);
        },
      });
    } else {
      return false;
    }
  };

  console.log(brand);
  return (
    <>
      <Head>
        <title>Brand Admin | Ecom Phone Abadi</title>
        <meta name="description" content="This is brand admin" />
      </Head>

      <AdminLayout>
        {/* Show Loading State */}
        {isLoading && <Loading />}

        {/* form show category */}
        {isFormShowBrand && (
          <motion.div
            initial={{ opacity: 0, y: -40, transition: { duration: 0.75 } }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            exit={{ opacity: 0, y: -40, transition: { duration: 0.75 } }}
          >
            <ShowBrand handelBackButton={handelBackButton} brand={brand} />
          </motion.div>
        )}
        {/* form add category */}
        {isFormAddBrand && (
          <motion.div
            initial={{ opacity: 0, y: -40, transition: { duration: 0.75 } }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            exit={{ opacity: 0, y: -40, transition: { duration: 0.75 } }}
          >
            <AddBrand
              handelBackButton={handelBackButton}
              setMetaInfo={setMetaInfo}
              setTitle={setTitle}
              title={title}
              previewImage={previewImage}
              setPreviewImage={setPreviewImage}
              onSubmit={onSubmit}
              setUrlImage={setUrlImage}
              errors={errors}
            />
          </motion.div>
        )}
        {/* form edit category */}
        {isFormEditBrand && (
          <motion.div
            initial={{ opacity: 0, y: -40, transition: { duration: 0.75 } }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            exit={{ opacity: 0, y: -40, transition: { duration: 0.75 } }}
          >
            <EditBrand
              handelBackButton={handelBackButton}
              setMetaInfo={setMetaInfo}
              meta_info={meta_info}
              setTitle={setTitle}
              title={title}
              previewImage={previewImage}
              setPreviewImage={setPreviewImage}
              onSubmit={onSubmit}
              setUrlImage={setUrlImage}
            />
          </motion.div>
        )}
        {/* form list category */}
        {isFormListBrand && (
          <motion.div
            initial={{ opacity: 0, x: -40, transition: { duration: 0.75 } }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            exit={{ opacity: 0, x: -40, transition: { duration: 0.75 } }}
          >
            <ListBrand
              brands={brands}
              handleShowFormAddBrand={handleShowFormAddBrand}
              handleShowFormEditBrand={handleShowFormEditBrand}
              handleShowFormBrand={handleShowFormBrand}
              deleteBrand={deleteBrand}
            />
          </motion.div>
        )}
      </AdminLayout>
    </>
  );
}
