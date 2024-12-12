const GhostContentAPI = require('@tryghost/content-api');
const fs = require("fs");

// Never do this! However, I trust you with my API key :)
const api = new GhostContentAPI({
    url: 'sample',
    key: 'sample',
    version: 'v5.0'
});

async function fetchPosts() {
    try {
        const posts = await api.posts.browse();
        const formattedPosts = posts.map(post => ({
            id: post.id,
            title: post.title,
            slug: post.slug,
            date: post.published_at,
            text: post.excerpt,
            picture: post.feature_image
        }));

        fs.writeFileSync('src/_data/posts.json', JSON.stringify({ "posts": formattedPosts }, null, 2));
        console.log('Posts fetched and saved to posts.json');
    } catch (err) {
        console.error('error: ', err);
    }
}

fetchPosts();
