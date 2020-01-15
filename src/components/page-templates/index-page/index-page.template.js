import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import ReactMarkdown from 'react-markdown';
import Image from '../../page-layout/image/image.component';
import Link from '../../page-layout/link/link.component';
import styles from './index-page.module.scss';

const PageLinkPropTypes = {
    link: string,
    linkText: string,
    page: {},
};

PageLink.propTypes = PageLinkPropTypes;
PageLink.defaultProps = {
    link: '',
    linkText: '',
    page: {},
};

IndexPageTemplate.propTypes = {
    pages: arrayOf(shape(PageLinkPropTypes)).isRequired,
};
export default function IndexPageTemplate({ pages }) {
    return <section className={styles.pages}>{!!pages && pages.map(page => <PageLink {...page} />)}</section>;
}

function PageLink({ link, linkText, page }) {
    const { frontmatter } = page || {};
    const { introduction, image } = frontmatter || {};
    const { image: introImage } = image;
    const { text: introText } = introduction;

    const { logo } = useStaticQuery(graphql`
        query {
            logo: file(name: { eq: "icon.white" }) {
                childImageSharp {
                    fluid(maxWidth: 100, maxHeight: 100, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                    }
                }
            }
        }
    `);

    return (
        <Link to={link}>
            <article className={styles.page}>
                <h2>{linkText}</h2>
                <section>
                    {introImage && <Image image={introImage} alt={linkText} />}
                    {introImage && introText && (
                        <section className={styles.introduction}>
                            <Image image={logo} alt={linkText} className={styles.logo} />
                            <ReactMarkdown source={introText} />
                        </section>
                    )}
                </section>
            </article>
        </Link>
    );
}
