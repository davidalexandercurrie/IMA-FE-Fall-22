const app = {
  initialize: function() {
    app.client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "sfav81wt3vyk",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "Q7P-JxQpURtZ1k7UsQWJNrb-eYoemAndouQQjOOubww"
    });
  },

  getEntry: function(entry) {
    // fetch a particular project
    app.client.getEntry(entry).then(project => {
      debugger;
      const projectData = {
        title: project.fields.title,
        imageUrl: `http:${project.fields.image.fields.file.url}`,
        imageTitle: project.fields.image.fields.title,
        description: documentToHtmlString(project.fields.description)
      };
      // load the template for this item from a local file
      fetch('projectPage.mustache')
        .then(response => response.text())
        .then(template => {
          // render the template with the data
          const rendered = Mustache.render(template, projectData);
          // add the element to the container
          $('.container').append(rendered);
        }
      );
    });
  },

  getAllEntries: function() {
    // fetch all entries
    app.client.getEntries().then(response => {
      // go through each one
      response.items.forEach(project => {
        // pull out the data you're interested in
        const projectData = {
          title: project.fields.title,
          imageUrl: `http:${project.fields.image.fields.file.url}`,
          imageTitle: project.fields.image.fields.title,
          slug: `${project.fields.slug}.html`
        };
        // load the template for this item from a local file
        fetch('projectOnHome.mustache')
          .then(response => response.text())
          .then(template => {
            // render the template with the data
            const rendered = Mustache.render(template, projectData);
            // add the element to the container
            $('.container').append(rendered);
          }
        );
      });
    });
  }
};