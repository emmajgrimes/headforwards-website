import { graphql } from 'gatsby';

// eslint-disable-next-line import/prefer-default-export
export const ImageFragment = graphql`
    fragment BannerImageFragment on MarkdownRemarkFrontmatter {
        bannerImageMobile: bannerImage {
            publicURL
            extension
            childImageSharp {
                fluid(
                    maxWidth: 767
                    maxHeight: 767
                    cropFocus: CENTER
                    quality: 65
                    srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
                ) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        bannerImageDesktop: bannerImage {
            childImageSharp {
                fluid(
                    maxWidth: 1440
                    maxHeight: 900
                    cropFocus: CENTER
                    quality: 75
                    srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
                ) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
    fragment BlogSummaryImageFragment on MarkdownRemarkFrontmatterSummary {
        imageMobile: image {
            publicURL
            extension
            childImageSharp {
                fluid(
                    maxWidth: 726
                    maxHeight: 276
                    cropFocus: CENTER
                    quality: 65
                    srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
                ) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        imageTablet: image {
            childImageSharp {
                fluid(
                    maxWidth: 468
                    maxHeight: 468
                    cropFocus: CENTER
                    quality: 70
                    srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
                ) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        imageDesktop: image {
            childImageSharp {
                fluid(
                    maxWidth: 362
                    maxHeight: 362
                    cropFocus: CENTER
                    quality: 75
                    srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
                ) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
    fragment SeoImageFragment on File {
        publicURL
        extension
        childImageSharp {
            fixed(width: 1200, height: 630, cropFocus: CENTER, quality: 85) {
                src
                width
                height
            }
        }
    }
    fragment ImageFragment on File {
        publicURL
        extension
        childImageSharp {
            fluid(
                maxWidth: 720
                maxHeight: 450
                cropFocus: CENTER
                quality: 80
                srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
            ) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    fragment AuthorImageFragment on MarkdownRemarkFrontmatter {
        imageMobile: profilePic {
            publicURL
            extension
            childImageSharp {
                fluid(
                    maxWidth: 54
                    maxHeight: 54
                    cropFocus: CENTER
                    quality: 65
                    srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
                ) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        imageTablet: profilePic {
            childImageSharp {
                fluid(
                    maxWidth: 67
                    maxHeight: 67
                    cropFocus: CENTER
                    quality: 70
                    srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
                ) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
        imageDesktop: profilePic {
            childImageSharp {
                fluid(
                    maxWidth: 84
                    maxHeight: 84
                    cropFocus: CENTER
                    quality: 75
                    srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
                ) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
    fragment ProfilePicFragment on File {
        publicURL
        extension
        childImageSharp {
            fluid(
                maxWidth: 100
                maxHeight: 100
                cropFocus: CENTER
                quality: 80
                srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
            ) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    fragment FooterImageFragment on File {
        publicURL
        extension
        childImageSharp {
            fluid(
                maxWidth: 732
                maxHeight: 366
                cropFocus: CENTER
                quality: 80
                srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
            ) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    fragment ImageSquareFragment on File {
        publicURL
        extension
        childImageSharp {
            fluid(
                maxWidth: 585
                maxHeight: 585
                cropFocus: CENTER
                quality: 80
                srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
            ) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
    fragment ImagePostitFragment on File {
        publicURL
        extension
        childImageSharp {
            fluid(
                maxWidth: 585
                maxHeight: 585
                cropFocus: CENTER
                quality: 80
                srcSetBreakpoints: [320, 480, 768, 1024, 1280, 1440]
            ) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
            }
        }
    }
`;
