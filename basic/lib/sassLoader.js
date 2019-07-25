(async () => {
  
  let buffer='';
  
  const fullCode = (await Promise.all([...document.querySelectorAll("link")]
    .filter(l => l.rel === 'stylesheet/scss')
    .map(async l=> await (await fetch(l.href)).text()))).join("\n");

  const basename = 'tmp.scss';
  Sass.writeFile(basename, fullCode);
  const compiled = await Sass.compile(`@import "${basename}";`);

  document.head.innerHTML += `<style>${compiled}</style>`;

})();