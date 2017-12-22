export function highlightText (words, query) {
  function pregQuote (str) {
    return (str.trim() + '').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1")
  }
  var iQuery = new RegExp(pregQuote(query), 'ig')
  return words.toString().replace(iQuery, function (matchedTxt, a, b) {
    return ('<span class=\'highlight\'>' + matchedTxt + '</span>')
  })
}

//https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
export function openInGmaps (latitude, logitude) {
  let win = window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${logitude}`, '_blank')
  if (win) win.focus()
}
