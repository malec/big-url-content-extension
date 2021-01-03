const main = async () => {
  const endpointUrl = 'https://bigurl.herokuapp.com/';
  const hrefs = document.getElementsByTagName('a');
  let bogus = 0;
  for (let i = 0; i < hrefs.length; i++) {
    const href = hrefs[i].href;
    console.log('evaluating link', href, i, 'of', hrefs.length);
    const url = `${endpointUrl}${encodeURIComponent(href)}`;
    const json = await (await fetch(url)).json();
    if (href != json.url) {
      console.log('FOUND DIFFERENT URL!!!!!!!!');
      console.log('source:', href);
      console.log('destination:', json.url);
      href = json.url
      bogus++;
    }
  }
  console.log(`of the ${hrefs.length} urls found, ${bogus} were bogus (not authentic).`);
  const caution = bogus / hrefs.length >= .5
  if (caution) {
    console.log(`${caution * 100}% of the urls on this page could be trackers. Use with care.`);
  }
};

main();