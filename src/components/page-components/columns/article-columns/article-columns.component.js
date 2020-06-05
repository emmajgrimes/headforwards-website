import { arrayOf, shape, string } from 'prop-types';
import React, { useMemo } from 'react';

import hashArray from '../../../../lib/hash-array';
import styles from './article-columns.module.scss';
import Article, { ArticlePropType } from './article.component';

const articleColumnsPropTypes = {
    title: string,
    articles: arrayOf(ArticlePropType),
};

export default ArticleColumns;
export const ArticleColumnsPropType = shape(articleColumnsPropTypes);

ArticleColumns.propTypes = articleColumnsPropTypes;
ArticleColumns.defaultProps = {
    title: null,
    articles: [],
};

function ArticleColumns({ title, articles }) {
    const columnsStyle = articles.length > 2 ? styles.isThreeColumns : '';
    const hashedArticles = useMemo(() => (articles ? hashArray(articles) : articles), [articles]);

    return (
        <section className={styles.articleColumns}>
            {title && <h2>{title}</h2>}
            {hashedArticles && (
                <section className={columnsStyle}>
                    {hashedArticles.map(({ id, ...article }) => (
                        <Article key={id} {...article} />
                    ))}
                </section>
            )}
        </section>
    );
}
