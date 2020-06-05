import { arrayOf, bool, shape, string } from 'prop-types';
import React, { useMemo } from 'react';

import hashArray from '../../../lib/hash-array';
import PageComponent, { PageComponentPropType } from '../../page-components/page-component';
import Postit from '../../page-components/postit/postit.component';
import Image, { ImageSrcPropType } from '../../page-layout/image/image.component';
import Introduction, { IntroductionProps } from '../../page-layout/introduction/introduction.component';
import styles from './homepage.module.scss';

const homePageSectionPropTypes = {
    isFirstSection: bool,
    isRightImage: bool,
    components: arrayOf(PageComponentPropType),
    isPostit: bool,
    image: ImageSrcPropType,
    imagePostit: ImageSrcPropType,
    imageSquare: ImageSrcPropType,
};
const homepagePropTypes = {
    introduction: shape(IntroductionProps),
    sections: arrayOf(shape(homePageSectionPropTypes)),
};

export default Homepage;

Homepage.propTypes = homepagePropTypes;
Homepage.defaultProps = {
    introduction: null,
    sections: null,
};

function Homepage({ introduction, sections }) {
    const isIntro = !introduction;

    const hashedSections = useMemo(() => (sections ? hashArray(sections) : sections), [sections]);

    return (
        <>
            {introduction && <Introduction introduction={introduction} className={styles.intro} />}
            {hashedSections &&
                hashedSections.map(({ id, ...section }, index) => (
                    <HomePageSection key={id} {...section} isFirstSection={isIntro && index === 0} />
                ))}
        </>
    );
}

HomePageSection.propTypes = homePageSectionPropTypes;
HomePageSection.defaultProps = {
    isFirstSection: false,
    isRightImage: false,
    components: [],
    isPostit: false,
    image: null,
    imagePostit: null,
    imageSquare: null,
};

function HomePageSection({ isFirstSection, components, isPostit, isRightImage, image, imagePostit, imageSquare }) {
    const hasImage = !!image || !!imagePostit || imageSquare;
    const wrapperStyles = [
        styles.section,
        isRightImage ? styles.isRightImage : '',
        hasImage ? styles.hasImage : '',
    ].join(' ');

    const [{ title }] = components || [{}];
    const firstClass = isFirstSection ? styles.first : '';

    const hashedComponents = useMemo(() => (components ? hashArray(components) : components), [components]);

    return (
        <section className={`${wrapperStyles} ${firstClass}`}>
            {!!hasImage && (
                <HomePageImage
                    {...{
                        isPostit,
                        image,
                        alt: title,
                        imagePostit,
                        imageSquare,
                        isRightImage,
                    }}
                />
            )}
            {hashedComponents && (
                <section className={styles.components}>
                    {hashedComponents.map(({ id, ...component }) => (
                        <PageComponent key={id} {...component} title={title} />
                    ))}
                </section>
            )}
        </section>
    );
}

const homePageImagePropTypes = {
    image: ImageSrcPropType.isRequired,
    alt: string,
    imagePostit: ImageSrcPropType,
    imageSquare: ImageSrcPropType,
    isPostit: bool,
    isRightImage: bool,
};

HomePageImage.propTypes = homePageImagePropTypes;
HomePageImage.defaultProps = {
    alt: null,
    imagePostit: null,
    imageSquare: null,
    isPostit: false,
    isRightImage: false,
};

function HomePageImage({ isPostit, image, alt, imagePostit, imageSquare, isRightImage }) {
    return isPostit ? (
        <Postit className={styles.postit} image={imagePostit || image} alt={alt} isRightImage={isRightImage} />
    ) : (
        <Image className={styles.image} image={imageSquare || image} alt={alt} ratio="100%" />
    );
}
