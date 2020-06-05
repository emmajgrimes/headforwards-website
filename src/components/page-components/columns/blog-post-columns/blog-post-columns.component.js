import { arrayOf, shape, string } from 'prop-types';
import React, { useMemo } from 'react';

import hashArray from '../../../../lib/hash-array';
import BlogArticle, { BlogArticlePropType } from './blog-article.component';
import styles from './blog-post-columns.module.scss';

const blogPostColumnsPropTypes = {
    title: string,
    articles: arrayOf(BlogArticlePropType),
};

export default BlogPostColumns;
export const BlogPostColumnsPropType = shape(blogPostColumnsPropTypes);

BlogPostColumns.propTypes = blogPostColumnsPropTypes;
BlogPostColumns.defaultProps = {
    title: null,
    articles: [],
};

function BlogPostColumns({ title, articles }) {
    const hashedArticles = useMemo(() => (articles ? hashArray(articles) : articles), [articles]);

    return (
        <section className={styles.blogPostColumns}>
            {!!title && <h2>{title}</h2>}
            <section>
                {hashedArticles.map(({ id, ...article }) => (
                    <BlogArticle key={id} {...article} />
                ))}
            </section>
        </section>
    );
}
