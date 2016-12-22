javascript:(function () {
  var s;
  if (window.getSelection && window.getSelection().toString()) {
    s = window.getSelection().toString();
  } else if ($('#taskTitle h2').length) {
    s = $('#taskTitle h2').text().replace(/\d+\sday(s)?/, '');
  } else if ($('a#key-val.issue-link').length && $('#summary-val').length) {
    s = '' + $('a#key-val.issue-link').text() + ' ' + $('#summary-val').text();
  }
  s = s.replace(/[^a-z0-9\-\#]/gmi, " ").trim().replace(/\s+/g, "_").replace(/_?-_?/g, '-');
  prompt('Branch name:', s);
})();