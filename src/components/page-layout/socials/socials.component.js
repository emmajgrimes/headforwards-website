import { faFacebookSquare, faInstagram, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { bool, string } from 'prop-types';
import React from 'react';

import Link from '../link/link.component';
import styles from './socials.module.scss';

export default Socials;

Socials.propTypes = {
    activeClass: string,
    twitterURL: string,
    facebookURL: string,
    instagramURL: string,
    linkedInURL: string,
    youtubeURL: string,
    isFooter: bool,
};
Socials.defaultProps = {
    activeClass: '',
    twitterURL: null,
    facebookURL: null,
    instagramURL: null,
    linkedInURL: null,
    youtubeURL: null,
    isFooter: false,
};

function Socials({ activeClass, twitterURL, facebookURL, instagramURL, linkedInURL, youtubeURL, isFooter }) {
    const footerClass = isFooter ? styles.footerSection : styles.headerSection;
    return (
        <ul className={`${activeClass} ${footerClass}`}>
            {!!twitterURL && (
                <li>
                    <Link to={twitterURL} aria-label="Twitter">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                </li>
            )}
            {!!facebookURL && (
                <li>
                    <Link to={facebookURL} aria-label="Facebook">
                        <FontAwesomeIcon icon={faFacebookSquare} />
                    </Link>
                </li>
            )}
            {!!instagramURL && (
                <li>
                    <Link to={instagramURL} aria-label="Instagram">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </li>
            )}
            {!!linkedInURL && (
                <li>
                    <Link to={linkedInURL} aria-label="LinkedIn">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </Link>
                </li>
            )}
            {!!youtubeURL && (
                <li>
                    <Link to={youtubeURL} aria-label="YouTube">
                        <FontAwesomeIcon icon={faYoutube} />
                    </Link>
                </li>
            )}
        </ul>
    );
}
