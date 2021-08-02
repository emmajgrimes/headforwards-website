const moment = require('moment');
const TurndownService = require('turndown');
const fetch = require('node-fetch');
const { minify } = require('html-minifier');
const sanitizeHtml = require('sanitize-html');
const pretty = require('pretty');

const minifyOptions = {
    collapseWhitespace: true,
    removeComments: true,
    removeTagWhitespace: true,
    removeEmptyElements: true,
};

const turndownService = new TurndownService();
const getMarkdown = html => {
    const minifiedHtml = minify(html, minifyOptions)
        .replace('\n', '')
        .replace(/\s*<br>\s*/gm, '')
        .replace('<b>', '<strong>')
        .replace('</b>', '</strong>')
        .replace('<i>', ' <em>')
        .replace('</i>', '</em> ')
        .replace(/\s*<strong>\s*<strong>\s*/gm, '<strong>')
        .replace(/\s*<\/strong>\s*<\/strong>\s*/gm, '</strong>')
        .replace(/<\/strong>(\s*)<strong>/gm, '$1')
        .replace(/<\/em>(\s*)<em>/gm, '$1')
        .replace(/\s*<em>\s*<em>\s*/gm, '<em>')
        .replace(/\s*<\/em>\s*<\/em>\s*/gm, '</em>')
        .replace(/\s*<em>\s*<\/em>\s*/gm, ' ')
        .replace(/\s*<strong>\s*<\/strong>\s*/gm, ' ')
        .replace(/\s*<em>\s*<strong>\s*/gm, '<strong><em>')
        .replace(/\s*<strong>\s*<em>\s*/gm, '<strong><em>')
        .replace(/\s*<\/strong>\s*<\/em>\s*/gm, '</em></strong>')
        .replace(/\s*<\/em>\s*<\/strong>\s*/gm, '</em></strong>')
        .replace(/\s*<p>\s*<\/p>\s*/gm, ' ')
        .replace(/\s*<li>\s*<p>\s*/gm, '<li>')
        .replace(/\s*<\/p>\s*<\/li>\s*/gm, '</li>');

    const sanitizedHtml = sanitizeHtml(minifiedHtml);
    const prettyHtml = pretty(sanitizedHtml, { ocd: true });
    const markdown = turndownService.turndown(prettyHtml);

    return markdown.replace(/\s*(?:\\n){2,}\s*(?:\\n){2,}\s*/g, '\n\n');
};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    const typeDefs = `
type RecruiteeOffer implements Node {
    path: String
    open_questions: [openQuestion]
    options_cover_letter: String
    options_cv: String
    options_phone: String
    options_photo: String
    salary: String
    title: String
    subtitle: String
    tags: [String]
}
type openQuestion {
    body: String
    id: String
    kind: String
    required: String
    open_question_options: [openQuestionOption]
}
type openQuestionOption {
    body: String
    id: String
}
    `;
    createTypes(typeDefs);
};

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;

    const apiUrl = `https://headforwards.recruitee.com/api/offers`;
    return (
        // Fetch a response from the apiUrl
        fetch(apiUrl)
            .then(response => response.json())
            .then(({ offers }) => offers.map(processOffer))
    );

    function processOffer(offer) {
        const {
            id,
            title,
            description = '',
            department = '',
            requirements,
            created_at: created,
            slug: path,
            ...others
        } = offer;
        const [full, salary = null] =
            title.match(
                /(?:\s*-?\s*)(?:\s*\(?\s*)((?:(?:up\s*to)|(?:£?[\d]+\s*-))\s*£?[\d]+)(?:[kK]?)(?:\s*\)?\s*)$/im
            ) || [];
        const [, subtitle = null] = description ? getMarkdown(description).match(/^(.*)(?:\n\n)/m) : [];

        const nodeId = createNodeId(`recruitee-offer-${id}`);
        const nodeData = {
            ...others,
            path,
            id: nodeId,
            title: full ? title.substring(0, title.indexOf(full)) : title,
            salary: salary ? `${salary.toLowerCase()}k` : '',
            subtitle: subtitle.trim().replace(/\*+/g, ''),
            type: 'recruitee-offer',
            parent: null,
            children: [],
            internal: {
                type: `RecruiteeOffer`,
                contentDigest: createContentDigest(offer),
            },
            department: department || '',
            description: getMarkdown(description),
            requirements: getMarkdown(requirements),
            created: moment(created, 'YYYY-MM-DD HH:mm:ss Z').toDate(),
        };

//         console.log({ title, full, subtitle, salary });

        createNode(nodeData);
    }
};
