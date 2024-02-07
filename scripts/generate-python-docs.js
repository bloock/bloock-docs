const fs = require('fs-extra');
const path = require('path');

const dest = './docs/sdks/python/reference';
const category = {
  position: 3,
  label: 'Reference',
  collapsible: true,
};

const categoryPath = path.join(dest, '_category_.json');
fs.outputFileSync(categoryPath, JSON.stringify(category));
