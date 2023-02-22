const domainName = (url) => {
  return url.match(/^https?:\/\/(?:www\.?)(.+?)\..*/i)[1];
};
console.log(domainName("http://www.zombie-bites.com"));
