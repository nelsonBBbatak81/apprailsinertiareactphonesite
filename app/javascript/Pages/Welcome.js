import React from 'react';
import { GuestLayout } from '../components';
import { Head } from '@inertiajs/inertia-react';

export default function Welcome() {
  return (
    <>
      <Head>
        <title>Welcome Page | Ecom Phone Abadi</title>
        <meta name="description" content="This is welcome page" />
      </Head>
      <GuestLayout>Welcome Page</GuestLayout>
    </>
  );
}
