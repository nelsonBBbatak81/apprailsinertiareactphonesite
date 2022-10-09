import React from 'react';
import { GuestLayout } from '../components';
import { Head } from '@inertiajs/inertia-react';

export default function About() {
  return (
    <>
      <Head>
        <title>About Page | Ecom Phone Abadi</title>
        <meta name="description" content="This is about page" />
      </Head>
      <GuestLayout>About Page</GuestLayout>
    </>
  );
}
