import React from 'react';
import { usePage } from '@inertiajs/inertia-react';

function Logo() {
  const { logo } = usePage().props;

  return (
    <>
      <img src={logo} alt="Image Logo" width="100%" height="100px" />
    </>
  );
}

export default Logo;
