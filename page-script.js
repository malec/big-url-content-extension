const endpointUrl = 'https://bigurl.herokuapp.com/';
const hrefs = document.getElementsByTagName('a');
for (let i = 0; i < hrefs.length; i++) {
  const x = hrefs[i];
  const url = `${endpointUrl}${encodeURIComponent(x.href)}`;
  fetch(url).then(res => res.json()).then(json => {
    if(x.href != json.url) {
      console.log('FOUND DIFFERENT URL!!!!!!!!');
      console.log('source:', x.href);
      console.log('destination:', json.url);
      x.href = json.url
    }
  });
}