import React from 'react';
import { shape, string } from 'prop-types';
import Image, { ImageSrcPropType } from '../../image/image.component';
import styles from './quote.module.scss';

const quotePropTypes = {
    quote: string.isRequired,
    name: string,
    jobTitle: string,
    profilePic: ImageSrcPropType,
};

export default Quote;
export const QuotePropType = shape(quotePropTypes);

Quote.propTypes = quotePropTypes;
Quote.defaultProps = {
    name: null,
    jobTitle: null,
    profilePic: null,
};
function Quote({ jobTitle, name, profilePic, quote }) {
    return (
        <div className={styles.blockquoteContainer}>
            <blockquote>{quote}</blockquote>
            {!!name && (
                <div className={styles.flexRow}>
                    {!!profilePic && (
                        <div className={styles.imageCropper}>
                            <Image className={styles.profilePicImage} image={profilePic} ratio="100%" />
                        </div>
                    )}
                    <div>
                        <h1>{name}</h1>
                        {!!jobTitle && <p>{jobTitle}</p>}
                    </div>
                </div>
            )}
        </div>
    );
}
