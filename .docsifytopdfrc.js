module.exports = {
  contents: [ "sidebar.md" ], // array of "table of contents" files path
  pathToPublic: "readme.pdf", // path where pdf will stored
  removeTemp: true, // remove generated .md and .html or not
  emulateMedia: "screen", // mediaType, emulating by puppeteer for rendering pdf, 'print' by default (reference: https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pageemulatemediamediatype)
}