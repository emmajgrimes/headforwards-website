import { arrayOf, bool, oneOf, string } from 'prop-types';
import React from 'react';

import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import IntroductionComponent from '../../page-layout/introduction/introduction.component';
import BlogLink, { BlogLinkPropType } from './blog-link.component';
import styles from './index-page.module.scss';
import PageLink, { PageLinkPropType } from './page-link.component';

IndexPage.propTypes = {
    introduction: string,
    isPostits: bool,
    pages: arrayOf(PageLinkPropType),
    components: arrayOf(oneOf([PageComponentPropType, BlogLinkPropType])),
    isBlog: bool,
};
IndexPage.defaultProps = {
    isPostits: false,
    introduction: null,
    pages: null,
    components: null,
    isBlog: false,
};
export default function IndexPage({ isPostits, introduction, pages, components, isBlog }) {
    const hasArrow = !!pages && pages.length % (!isBlog ? 2 : 3) !== 0;
    const postitClass = isPostits ? styles.postits : '';
    const blogClass = isBlog ? styles.blog : '';

    return (
        <>
            {introduction && <IntroductionComponent introduction={introduction} />}
            <section className={`${styles.pages} ${postitClass} ${blogClass}`}>
                {!!pages &&
                    pages.map(({ uuid, ...page }) =>
                        !isBlog ? (
                            <PageLink key={uuid} {...page} isPostit={isPostits} />
                        ) : (
                            <BlogLink key={page.id} {...page} />
                        )
                    )}
                {hasArrow && <img src="/images/hf-arrow.svg" alt="arrow" className={styles.page} />}
            </section>
            {components && (
                <section>
                    {!!components &&
                        components.map(({ id, ...component }) => <PageComponent key={id} {...component} />)}
                </section>
            )}
        </>
    );
}
