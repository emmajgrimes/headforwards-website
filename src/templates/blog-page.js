import { graphql } from 'gatsby';
import { arrayOf, shape } from 'prop-types';
import React from 'react';

import { PageComponentPropType } from '../components/page-components/page-component';
import { IntroductionProps } from '../components/page-layout/introduction/introduction.component';
import Layout, { extractLayoutProps } from '../components/page-layout/layout';
import BlogPageTemplate from '../components/page-templates/blog-page/blog-page.template';

export default BlogPagePage;

BlogPagePage.propTypes = {
    data: shape({
        page: shape({
            frontmatter: shape({
                introduction: shape(IntroductionProps),
                components: arrayOf(PageComponentPropType),
            }),
        }),
    }).isRequired,
};

function BlogPagePage({ data }) {
    const { page } = data;
    const { frontmatter } = page;
    const { title, introduction, author: authorPage, components, publishedDate } = frontmatter || {};

    const layoutProps = extractLayoutProps(page);

    const { frontmatter: author } = authorPage || {};
    const pageProps = {
        title,
        introduction,
        author,
        publishedDate,
        components,
    };

    return (
        <Layout {...layoutProps}>
            <BlogPageTemplate {...pageProps} />
        </Layout>
    );
}

export const query = graphql`
    query BlogPage($id: String!) {
        page: markdownRemark(id: { eq: $id }) {
            frontmatter {
                ...PageFragment
            }
        }
    }
`;
