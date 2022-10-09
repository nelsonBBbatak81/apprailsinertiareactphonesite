import React from 'react';
import { GuestLayout } from '../components';
import { Head } from '@inertiajs/inertia-react';

export default function Product() {
  return (
    <>
      <Head>
        <title>Product Page | Ecom Phone Abadi</title>
        <meta name="description" content="This is product page" />
      </Head>
      <GuestLayout>Product Page</GuestLayout>
    </>
  );
}
