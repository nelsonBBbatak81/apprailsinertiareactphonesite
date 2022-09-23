import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function Unauthorized() {
  return (
    <div>
      You have no authorize to access that page, please{' '}
      <Link className="btn btn-link" href="/login">
        Sign In
      </Link>
    </div>
  );
}
