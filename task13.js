function domainName(url) {
  let regexp = /(http)?(s)?(\:\/\/)?(www.)?([\w-]+)([\.\S]*)/;
  return url.match(regexp)[5];
}

console.log(domainName("http://google.com"));

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name =

// The method str.match(regexp), if regexp has no flag g, looks for the first match and returns it as an array:

// At index 0: the full match.
// At index 1: the contents of the first parentheses.
// At index 2: the contents of the second parentheses.
// …and so on…

// alternative solution:
// function domainName(url){
//     url = url.replace("https://", '');
//     url = url.replace("http://", '');
//     url = url.replace("www.", '');
//     return url.split('.')[0];
//   };
