import { string } from 'yup';

const schema = {
    name: {
        field: {
            name: 'name',
            label: 'Your Name',
            placeholder: '',
            type: 'text',
            required: true,
        },
        validation: string().required('Name is required.'),
    },
    business: {
        field: {
            name: 'business',
            label: 'Your Business',
            placeholder: '',
            type: 'text',
            required: false,
        },
        validation: string(),
    },
    phone: {
        field: {
            name: 'phone',
            label: 'Telephone Number',
            placeholder: '',
            type: 'tel',
            required: true,
        },
        validation: string().required('Telephone is required.'),
    },
    email: {
        field: {
            name: 'email',
            label: 'Email Address',
            placeholder: '',
            type: 'email',
            required: true,
        },
        validation: string()
            .email()
            .required('Email is required.'),
    },
    enquiry: {
        field: {
            name: 'enquiry',
            label: 'Enquiry',
            placeholder: '',
            type: 'textarea',
            rows: 6,
            required: true,
        },
        validation: string().required('Enquiry is required.'),
    },
    privacy: {
        field: {
            name: 'privacy',
            label: 'I agree to the terms outlined in the privacy policy.',
            type: 'checkbox',
            required: true,
        },
        validation: string()
            .test('privacy', 'You must agree to the privacy policy.', value => value === schema.privacy.field.label)
            .required('You must agree to the privacy policy.'),
    },
    marketing: {
        field: {
            name: 'marketing',
            label: 'I would like to receive marketing communications.',
            type: 'checkbox',
            required: false,
        },
        validation: string(),
    },
};
export default schema;
