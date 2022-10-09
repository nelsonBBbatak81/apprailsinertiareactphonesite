import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { motion } from 'framer-motion';
import { Head } from '@inertiajs/inertia-react';
import { usePage } from '@inertiajs/inertia-react';
import {
  AddCategory,
  AdminLayout,
  ListCategory,
  EditCategory,
  ShowCategory,
  Loading,
} from '../../components';

export default function Category({ categories }) {
  const [isFormListCategory, setFormListCategory] = useState(true);
  const [isFormAddCategory, setFormAddCategory] = useState(false);
  const [isFormEditCategory, setFormEditCategory] = useState(false);
  const [isFormShowCategory, setFormShowCategory] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [category, setCategory] = useState({});
  const [title, setTitle] = useState('');
  const [meta_info, setMetaInfo] = useState('');
  const [urlimage, setUrlImage] = useState('');
  const [previewImage, setPreviewImage] = useState(null);
  const { errors } = usePage().props;

  const handelBackButton = () => {
    setFormAddCategory(false);
    setFormEditCategory(false);
    setFormShowCategory(false);
    setFormListCategory(true);
    handleReset();
  };

  const handleReset = () => {
    setCategory({});
    setTitle('');
    setMetaInfo('');
    setUrlImage('');
    setPreviewImage(null);
  };

  const handleShowFormAddCategory = () => {
    setFormListCategory(false);
    setFormAddCategory(true);
    handleReset();
  };

  const handleShowFormCategory = (data) => {
    setFormListCategory(false);
    setFormShowCategory(true);
    setCategory(data);
  };

  const handleShowFormEditCategory = (data) => {
    setFormListCategory(false);
    setFormEditCategory(true);
    setCategory(data);
    setTitle(data.title);
    setMetaInfo(data.meta_info);
    setPreviewImage(data.urlimage);
    setUrlImage(null);
  };

  const updateCategory = async (id) => {
    setLoading(true);
    let formData = new FormData();
    formData.append('category[title]', title);
    formData.append('category[meta_info]', meta_info);
    formData.append('category[urlimage]', urlimage);
    console.log(formData);
    await Inertia.post(`/admin/category/update/${id}`, formData, {
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

  const addCategory = async () => {
    setLoading(true);
    let formData = new FormData();
    formData.append('category[title]', title);
    formData.append('category[meta_info]', meta_info);
    formData.append('category[urlimage]', urlimage);
    await Inertia.post('/admin/category/store', formData, {
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
    if (category.hasOwnProperty('id')) {
      updateCategory(category.id);
    } else {
      addCategory();
    }
  };

  const deleteCategory = async (id) => {
    let conf = confirm('Are you sure want to delete this item category ?');
    if (conf) {
      setLoading(true);
      await Inertia.delete(`/admin/category/delete/${id}`, {
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

  console.log(categories);
  return (
    <>
      <Head>
        <title>Category Admin | Ecom Phone Abadi</title>
        <meta name="description" content="This is category admin" />
      </Head>

      <AdminLayout>
        {/* Show Loading State */}
        {isLoading && <Loading />}

        {/* form show category */}
        {isFormShowCategory && (
          <motion.div
            initial={{ opacity: 0, y: -40, transition: { duration: 0.75 } }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            exit={{ opacity: 0, y: -40, transition: { duration: 0.75 } }}
          >
            <ShowCategory
              handelBackButton={handelBackButton}
              category={category}
            />
          </motion.div>
        )}

        {/* form add category */}
        {isFormAddCategory && (
          <motion.div
            initial={{ opacity: 0, y: -40, transition: { duration: 0.75 } }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            exit={{ opacity: 0, y: -40, transition: { duration: 0.75 } }}
          >
            <AddCategory
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
        {isFormEditCategory && (
          <motion.div
            initial={{ opacity: 0, y: -40, transition: { duration: 0.75 } }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            exit={{ opacity: 0, y: -40, transition: { duration: 0.75 } }}
          >
            <EditCategory
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
        {isFormListCategory && (
          <motion.div
            initial={{ opacity: 0, x: -40, transition: { duration: 0.75 } }}
            animate={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.75, delay: 0.5 },
            }}
            exit={{ opacity: 0, x: -40, transition: { duration: 0.75 } }}
          >
            <ListCategory
              categories={categories}
              handleShowFormAddCategory={handleShowFormAddCategory}
              handleShowFormEditCategory={handleShowFormEditCategory}
              handleShowFormCategory={handleShowFormCategory}
              deleteCategory={deleteCategory}
            />
          </motion.div>
        )}
      </AdminLayout>
    </>
  );
}
