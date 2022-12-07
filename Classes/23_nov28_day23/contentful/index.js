var client = contentful.createClient({
  space: 'tvyvjos0u241',
  accessToken: 'ppIm6YyIgx-l4-axduEOVvQFz2KcHbxZbUr3tMPdmzM',
});

client.getEntries().then(entries => {
  // log the title for all the entries that have it
  console.log(entries);
  let blog = document.getElementById('blog');

  entries.items.forEach(entry => {
    // console.log(entry.fields.body);
    let converter = new showdown.Converter();
    let text = entry.fields.body;
    let body = converter.makeHtml(text);
    let html = `
      <h1>${entry.fields.title}</h1>
      <img class='blog-image' src='${entry.fields.image.fields.file.url}'>
      ${body}
    `;
    blog.innerHTML += html;
  });
});
