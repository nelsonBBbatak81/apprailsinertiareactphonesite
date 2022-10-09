import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../Navigation';
import Message from '../Message';
import { usePage } from '@inertiajs/inertia-react';
import { motion, AnimatePresence } from 'framer-motion';


export default function GuestLayout({ children, title, description }) {
  const { flash, user } = usePage().props;
  const variants = {
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.75,
      },
    },
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.5,
      },
    },
  };

  // console.log(usePage.props);
  return (
    <>
      <Navigation user={user} />
      <motion.div
        initial={{ opacity: 0, y: 40, transition: { duration: 0.75 } }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.75, delay: 0.5 },
        }}
        exit={{ opacity: 0, y: 40, transition: { duration: 0.75 } }}
      >
        <div className="page">
          <Container>
            {/* Display message from server */}
            {flash.notice !== null && (
              <Message title="Success" content={flash.notice} type="primary" />
            )}
            {flash.alert !== null && (
              <Message title="Warning" content={flash.alert} type="danger" />
            )}

            {children}
          </Container>
        </div>
      </motion.div>
    </>
  );
}
