import React, { useState } from 'react';
import { AdminLayout } from '../../components';
import { Head } from '@inertiajs/inertia-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Admin | Ecom Phone Abadi</title>
        <meta name="description" content="This is home admin" />
      </Head>
      <AdminLayout>Admin Home Page</AdminLayout>
    </>
  );
}
