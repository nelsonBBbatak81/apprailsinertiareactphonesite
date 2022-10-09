import React, { useState } from 'react';
import { usePage } from '@inertiajs/inertia-react';
import { Inertia } from '@inertiajs/inertia';
import { GuestLayout, Input, Label, Button } from '../components';
import { Head } from '@inertiajs/inertia-react';

export default function Login() {
  const { errors } = usePage().props;
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  const [token, setToken] = useState(
    document.querySelector('meta[name=csrf-token]').content
  );

  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value;
    setValues((values) => ({
      ...values,
      [key]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // let userInfo = {
    //   // authenticity_token: document.querySelector('meta[name=csrf-token]')
    //   //   .content,

    // };
    let data = {
      user: {
        email: values.email,
        password: values.password,
      },
    };
    // console.log(userInfo);
    Inertia.post('/users/sign_in', data, {
      headers: { 'X-CSRF-Token': token },
    });
  }

  console.log(usePage().props);

  return (
    <>
      <Head>
        <title>Login Page | Ecom Phone Abadi</title>
        <meta name="description" content="This is login page" />
      </Head>
      <GuestLayout>
        <div className="row py-20">
          <div className="col-md-6 offset-md-3">
            <h3 className="fs-4 fw-bold text-center mb-5">Please Sign In</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <Label>Email</Label>
                <Input
                  type="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="Fill your email ..."
                  className="form-control"
                />
                {errors.email && (
                  <div className="text-danger">{errors.email}</div>
                )}
              </div>
              <div className="mb-3">
                <Label>Password</Label>
                <Input
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  placeholder="Fill your password ..."
                  className="form-control"
                />
                {errors.password && (
                  <div className="text-danger">{errors.password}</div>
                )}
              </div>
              <div className="d-grid gap-2">
                <button className="btn btn-primary" type="submit">
                  OK
                </button>
              </div>
            </form>
          </div>
        </div>
      </GuestLayout>
    </>
  );
}
