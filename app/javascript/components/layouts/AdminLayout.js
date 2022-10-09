import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from '@inertiajs/inertia-react';
import Navigation from '../Navigation';
import Message from '../Message';
import { usePage } from '@inertiajs/inertia-react';
import { motion } from 'framer-motion';
import Logo from '../Logo';

export default function AdminLayout({ children }) {
  const { flash, user } = usePage().props;
  const [token, setToken] = useState(
    document.querySelector('meta[name=csrf-token]').content
  );

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={4} lg={3} className="bg-secondary px-2 py-2">
            <Link href="/" className="mb-5">
              <Logo />
            </Link>
            <div className="nav flex-column">
              <Link
                className="nav-link fs-4fw-bold text-white"
                href="/admin/home"
              >
                Home
              </Link>
              <Link
                className="nav-link fs-4fw-bold text-white"
                href="/admin/category"
              >
                Category
              </Link>
              <Link
                className="nav-link fs-4fw-bold text-white"
                href="/admin/product"
              >
                Product
              </Link>
              <Link
                href="/users/sign_out"
                method="delete"
                headers={{ 'X-CSRF-Token': token }}
                className="nav-link fs-4fw-bold text-white"
              >
                Logout
              </Link>
            </div>
          </Col>
          <Col xs={12} md={8} lg={9} className="pageadmin">
            <motion.div
              initial={{ opacity: 0, x: -40, transition: { duration: 0.75 } }}
              animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.75, delay: 0.5 },
              }}
              exit={{ opacity: 0, x: -40, transition: { duration: 0.75 } }}
            >
              {/* Display message from server */}
              {flash.notice !== null && (
                <Message
                  title="Success"
                  content={flash.notice}
                  type="primary"
                />
              )}
              {flash.alert !== null && (
                <Message title="Warning" content={flash.alert} type="danger" />
              )}
              {children}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
