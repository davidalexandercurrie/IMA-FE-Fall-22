var client = contentful.createClient({
  space: 'tvyvjos0u241',
  accessToken: 'ppIm6YyIgx-l4-axduEOVvQFz2KcHbxZbUr3tMPdmzM',
});

client.getEntries().then(entries => {
  // log the title for all the entries that have it

  let blog = document.getElementById('blog');

  entries.items.forEach(entry => {
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

// function renderHTML(entry) {
//   console.log(entry);
//   let title = document.createElement('h1');
//   title.textContent = entry.fields.title;
//   title.classList.add('blog-title');
//   blog.append(title);

//   let image = document.createElement('img');
//   image.src = entry.fields.image.fields.file.url;
//   image.classList.add('blog-image');
//   blog.append(image);

//   if (entry.fields.images) {
//     entry.fields.images.forEach(item => {
//       let image = document.createElement('img');
//       image.src = item.fields.file.url;
//       image.classList.add('blog-image');
//       blog.append(image);
//     });
//   }

//   // render the body text
//   let content = document.createElement('p');
//   content.textContent = entry.fields.body;
//   blog.append(content);
// }
