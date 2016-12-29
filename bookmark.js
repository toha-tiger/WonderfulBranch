javascript:(function () {
  var s;
  if (window.getSelection && window.getSelection().toString()) {
    s = window.getSelection().toString();
  } else if ($('#taskTitle h2').length) {
    s = $('#taskTitle h2').text().replace(/\d+\sday(s)?/, '');
  } else if ($('a#key-val.issue-link').length && $('#summary-val').length) {
    s = '' + $('a#key-val.issue-link').text() + ' ' + $('#summary-val').text();
  }
  var umls = {'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'Ä': 'Ae', 'Ö': 'Oe', 'Ü': 'Ue', 'ß': 'ss'}; //(or SZ)
  s= s.replace(/[äÄöÖüÜß]/gi, function(str) {
    return umls[str];
  });
  s = s.replace(/[^a-z0-9\-\#]/gmi, " ").trim().replace(/\s+/g, "_").replace(/_?-_?/g, '-');
  prompt('Branch name:', s);
})();