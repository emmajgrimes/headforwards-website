const faker = require('faker');

export default function generateImage(square = false) {
    const width = 1024;
    const height = 1024;
    const id = faker.random.number({
        min: 50,
        max: 250,
    });

    const publicURL = `https://picsum.photos/id/${id}/${width}/${height}`;

    return { publicURL };
}
