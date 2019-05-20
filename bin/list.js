var soljsonSources = [
  "soljson-v0.5.8+commit.23d335f2.js",
  "soljson-v0.4.20+commit.58b6c547.js"
];
var soljsonReleases = {
  "0.5.8": "soljson-v0.5.8+commit.23d335f2.js",
  "0.4.20": "soljson-v0.4.20+commit.58b6c547.js"
};

if (typeof(module) !== 'undefined')
  module.exports = {
    'allVersions': soljsonSources,
    'releases': soljsonReleases
  };
