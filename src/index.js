import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header.jsx';
import Layout from './Layout.jsx';
import Footer from './Footer.jsx';
import Main from './Main.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Layout>
      <Header />
      <Main />
      <Footer />
    </Layout>
  </>,
);
