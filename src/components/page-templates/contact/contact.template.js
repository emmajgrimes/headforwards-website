import { string } from 'prop-types';
import React from 'react';

import ContactForm from '../../page-components/forms/contact-form/contact-form.component';
import styles from './contact.module.scss';

const contactPropTypes = {
    companyName: string,
    email: string,
    jobsEmail: string,
    phone: string,
    address: string,
    registeredAddress: string,
    mapUrl: string,
};

export default ContactTemplate;

ContactTemplate.propTypes = contactPropTypes;
ContactTemplate.defaultProps = {
    companyName: '',
    email: '',
    jobsEmail: '',
    phone: '',
    address: '',
    registeredAddress: '',
    mapUrl: null,
};

function ContactTemplate({ companyName, mapUrl, email, jobsEmail, phone, address, registeredAddress }) {
    const formattedAddress = address.split(',');
    const formattedRegAddress = registeredAddress.split(',');

    return (
        <section className={styles.contactColumns}>
            <header>
                <h2>We would love to talk business with you.</h2>
            </header>
            <section>
                <address>
                    <section>
                        <h2>{companyName}</h2>
                        {formattedAddress.map(item => (
                            <span key={item}>{item}</span>
                        ))}
                    </section>
                    <dl>
                        <dt>Telephone.</dt>
                        <dd>{phone}</dd>
                        <dt>Email.</dt>
                        <dd>{email}</dd>
                        <dd>{jobsEmail}</dd>
                    </dl>
                </address>
                <ContactForm formName="contact" />
            </section>
            {mapUrl && (
                <section className={styles.map}>
                    <iframe
                        title={companyName}
                        src={mapUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen
                    />
                </section>
            )}
            <section className={styles.office}>
                <section>
                    <h2>Recruitment</h2>
                    <p>
                        If you are interested in joining the team here at Headforwards please take a look at our careers
                        page to see if we have any suitable vacancies available.{' '}
                    </p>
                    <p>
                        <strong>We only recruit directly so, please, NO recruiters.</strong>
                    </p>
                    <p>
                        If you are a recruiter and still wish to call us then we will ask for a donation of at least £50
                        to the charity Shelter Box.
                    </p>
                </section>
                <section>
                    <h2>Our Registered Office:</h2>
                    <ul>
                        {formattedRegAddress.map(item => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                    <p>Headforwards is the trading name of Headforwards Solutions Ltd.</p>
                    <p>An Outsource Software Company registered in England and Wales with number 07576641</p>
                </section>
            </section>
        </section>
    );
}
