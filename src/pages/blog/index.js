import React from 'react';

import Layout from '../../components/Layout';
import BlogRoll from '../../components/BlogRoll';
import Title from '../../components/Title';

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Title title="Latest Posts" />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <BlogRoll />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
