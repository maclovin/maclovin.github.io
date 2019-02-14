var OutputComponent = document.getElementById('output');
var InputComponent = document.getElementById('input');
var InputFieldComponent = document.getElementById('inputField');
var CurrentTheme = 2;

var _commands = {
  help: '\nCommands list:\n\nWHOIS - Show information about me.\nTRACEROUTE - Show my professional experiences.\nTOP - Show my computer skills.\nMAIL - Contact me.\nHIGHVIEWS - Music reviews.\nCLEAR - Clear terminal.\n',
  whois: "\nHi, my name is Murilo Prestes but my friends call me MacLovin. \nI'm 27 years old and have been a programmer since I was 14.\n\nMy main focus is on front-end/UI development and web security. \nI see myself focused not only at algorithms, architecture and design patterns, \nbut also at user experience optimization. \n\nFront-end role as a way of decreasing the distance beetwen human and machine, \nabstracting from all information technology and delivering palpable info in a simple way.\nI'm comfortable developing solutions for both programmers and users, and web \napplication pentests looking for source-code, third-part libraries and frameworks vulnerabilities. \n\nI always take my decisions based on technical research about user behavior, digital design, \nperformance and secure large-scale architecture.\n\nI also spent my free time mashuping music, design and technology, composing and releasing new artists \naround the world over my collaborative music label VRTGM.\n",
  traceroute: "\nExperiences (OUTDATED):\n\nEVINO (Jun/2017 - Nov/2017):\nReact, Redux, NodeJS, Express, ES6, Stylus, Enzyme (e2e), Jasmine/Karma (tdd), Google Tag Manager & Webpack.\n\nOMNIZE (Sep/2016 - May/2017):\nReact, ES6, Alt, NodeJS, Express, Sass, Karma+Jasmine (tdd), Storybook (bdd), Webpack, Foundation, JWT & SipJS.\n\nROCKET INTERNET/KANUI (Jan/2013 - Jan/2016):\nAngularJS, jQuery, NodeJS, Karma+Jasmine, Sass+Compass, Symfony, Python, Grid960, Foundation & Phonegap.\n\nBOUGUE (Jun/2012 - Nov/2012):\nPHP, NodeJS, MySQL, MongoDB, LESS, SLIM, Bootstrap, NodeUnit, Jasmine, jQuery, RequireJS & Handlebars.\n\nBUSCAPÉ COMPANY/RESOLVAME (Apr/2012 - Jun/2012):\njQuery, MooTools, Compass, Codeigniter, MySQL & PHPFog.\n\nESFERA (Nov/2011 - Apr/2012):\nWordpress, Drupal, WebPy, SASS, Django, jQuery, Scrapy, MySQL & SQLite.\n\nWELL (Jun/2011 - Nov/2011):\nPython, PHP, CSS3, HTML5, MySQL & MongoDB.\n\nGTI (Jun/2010 - Jan/2011):\nC#, .Net, DevExpress, SQL Server 2008 & Agile Coach.\n\nINFORTEC (Jan/2009 - Feb/2010):\nVisual Basic 6, .Net, & SQL Server 2005.\n\nFor more details visit http://linkedin.com/in/muriloprestes\n",
  top: "\nComputer Skills:\n\n[▓▓▓▓▓▓▓▓▓▓] Javascript\n[▓▓▓▓▓▓▓ ] NodeJS\n[▓▓▓▓▓▓▓▓  ] CSS\n[▓▓▓▓▓▓▓▓▓▓] HTML5\n[▓▓▓▓   ] Python\n[▓▓▓▓▓   ] UI Design\n[▓▓▓▓▓▓▓▓▓▓] Front-End Architecture\n[▓▓▓▓▓▓▓▓ ] Web Application Security\n[▓▓▓▓▓▓▓  ] Tests\n[▓▓▓▓▓▓▓▓▓] Audio manipulation\n[▓▓▓▓▓▓   ] Git \n\nFor more details visit http://github.com/maclovin\n",
  mail: function() {
    submitOutput('\nOpenning mail client...\n');
    window.location = 'mailto:m4k2005@gmail.com';
    return;
  },
  highviews: function() {
    window.location = '/highviews.html';
    return;
  },
  clear: function() {
    OutputComponent.innerHTML = '';
    return;
  }
};

var clearInput = function () {
  InputComponent.value = '';
};

var submitInput = function () {
  var input = InputComponent.value.toLowerCase();
  if (typeof _commands[input] === 'undefined') {
    submitOutput('\nCommand not found :(\n');
  } else if (typeof _commands[input] === 'function') {
    _commands[input].call();
  }
  else {
    submitOutput(_commands[input]);
  }

  scrollDown();
};

var clearOutput = function () {
  OutputComponent.innerHTML = '';
}

var submitOutput = function (output) {
  var typeIndex = 0;
  InputFieldComponent.setAttribute('data-hidden', true);

  var typeWritter = setInterval(function() {
    if(typeIndex < output.length) {
      OutputComponent.innerHTML += output[typeIndex];
      typeIndex++;
      scrollDown();
      focus();
    } else {
      InputFieldComponent.setAttribute('data-hidden', false);
      clearInterval(typeWritter);
      scrollDown();
      focus();
    }
  }, 3);
};

var changeTheme = function (theme) {
  document.body.setAttribute('data-theme', theme);
};

var scrollDown = function () {
  window.scrollTo(0, document.body.scrollHeight);
};

InputComponent.onkeypress = function (event) {

  if (event.key === 'Enter' || event.keyCode === 13) {
    submitInput();
    clearInput();
  }
};

var focus = function() {
  InputComponent.focus();
}

document.onclick = function () {
  focus();
};

focus();
