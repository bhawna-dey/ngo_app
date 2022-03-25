import React from 'react';
import Navbar from '../Navbar';
import HelpTS from './Help.tsx'

import { QueryClient, QueryClientProvider } from 'react-query';

const Help = () => {
    const client = new QueryClient();

  return (
    <>
    <Navbar />
      <QueryClientProvider client={client}>
      <HelpTS />
      </QueryClientProvider>
      </>
  )
}

export default Help
