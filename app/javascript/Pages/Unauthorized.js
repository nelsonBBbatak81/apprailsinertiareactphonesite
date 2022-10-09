import React from 'react';
import { Link } from '@inertiajs/inertia-react';
import { GuestLayout } from '../components';
import { Head } from '@inertiajs/inertia-react';

export default function Unauthorized() {
  return (
    <>
      <Head>
        <title>Authorized Page | Ecom Phone Abadi</title>
        <meta name="description" content="This is authorized page" />
      </Head>
      <GuestLayout>
        You have no authorize to access that page, please{' '}
        <Link className="btn btn-link" href="/login">
          Sign In
        </Link>
      </GuestLayout>
    </>
  );
}
