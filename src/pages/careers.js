import { graphql } from 'gatsby';
import { arrayOf, shape, string } from 'prop-types';
import React from 'react';
import Layout from '../components/page-layout/layout';
import CareersPageTemplate from '../components/page-templates/careers/careers.template';

export default CareersPage;

CareersPage.propTypes = {
    data: shape({
        nodes: arrayOf(
            shape({
                id: string,
                title: string,
                slug: string,
                created: string,
            })
        ),
    }).isRequired,
};
function CareersPage({ data }) {
    const props = {
        title: 'Careers',
    };

    return (
        <Layout {...props}>
            <CareersPageTemplate {...data} />
        </Layout>
    );
}

export const query = graphql`
    query CareersPageQuery {
        page: allRecruiteeOffer(sort: { fields: created, order: DESC }) {
            nodes {
                id
                title
                slug
                created(fromNow: true)
            }
        }
    }
`;
