import contentField from '../widgets/content-field';
import linkFields from '../widgets/link-fields';

const imageCopyComponent = {
    label: 'Image & Copy',
    name: 'image-copy-component',
    widget: 'object',
    fields: [
        {
            label: 'Title',
            name: 'title',
            widget: 'string',
            required: false,
            default: null,
        },
        {
            label: 'Image',
            name: 'image',
            widget: 'image',
            required: false,
            default: null,
        },
        { ...contentField },
        {
            label: 'Link',
            name: 'linkFields',
            required: false,
            default: null,
            widget: 'optional-object',
            fields: [
                {
                    label: 'Link Text',
                    name: 'linkText',
                    widget: 'string',
                    default: 'Read more',
                },
                {
                    label: 'Link',
                    name: 'linkFields',
                    ...linkFields,
                },
            ],
        },
        {
            label: 'Image on right?',
            name: 'isRightImage',
            widget: 'boolean',
            required: false,
            default: false,
        },
        {
            label: 'Postit?',
            name: 'isPostit',
            widget: 'boolean',
            required: false,
            default: false,
        },
        {
            label: 'Two columns (no image)?',
            name: 'isTwoColumns',
            widget: 'boolean',
            required: false,
            default: false,
        },
    ],
};

export default imageCopyComponent;
