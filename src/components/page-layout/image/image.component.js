import GatsbyImage from 'gatsby-image';
import { any, objectOf, oneOfType, shape, string } from 'prop-types';
import React from 'react';

import styles from './image.module.scss';

const imageSrcPropTypes = [
    string,
    shape({
        publicURL: string,
        childImageSharp: shape({
            fluid: objectOf(any),
        }),
    }),
];

const imagePropTypes = {
    image: oneOfType(imageSrcPropTypes).isRequired,
    alt: string,
    ratio: string,
    className: string,
};

export default Image;
export const ImagePropType = shape(imagePropTypes);
export const ImageSrcPropType = oneOfType(imageSrcPropTypes);

Image.propTypes = imagePropTypes;
Image.defaultProps = {
    alt: null,
    ratio: '62.5%',
    className: '',
};

function Image({ image, alt, ratio, className = '', ...props }) {
    const { childImageSharp, extension } = image || {};
    let src;
    if (childImageSharp && extension !== 'svg') {
        const { fluid } = childImageSharp;

        return <GatsbyImage fluid={fluid} alt={alt} durationFadeIn={100} className={className} {...props} />;
    }

    if (typeof image === 'string') {
        src = image;
    } else {
        const { publicURL } = image || {};
        src = publicURL;
    }

    return (
        <div className={`${styles.imageWrapper} ${className}`} {...props}>
            <div className={styles.padder} style={{ paddingBottom: ratio }} />
            <img
                {...{
                    src,
                    alt,
                }}
                className={styles.image}
                alt={alt}
            />
        </div>
    );
}
