import React from 'react';
import customStaticProps from '@utils/staticProps';

export default function NotFound() {
  return <h1>404 Page Not Found!</h1>;
}

export const getStaticProps = customStaticProps(null, []);
