
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions: { createPage} }) => {
    const {
        data: {
            gcms: { posts },
        },
      }  = await graphql(`
        {
            gcms {
                posts(stage: PUBLISHED) {
                id
                slug
                }
            }
        }
    `);

    posts.forEach(({id, slug}) => 
      createPage({
        path: `blog/${slug}`,
        component: require.resolve(`./src/templates/blog-post.js`),
        context: {
                id,
            },
        })
    );
  };
