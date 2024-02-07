const fs = require('fs');
const path = require('path');

const dest = './docs/sdks/php/reference';
const category = {
  position: 3,
  label: 'Reference',
  collapsible: true,
};

const categoryPath = path.join(dest, '_category_.json');
fs.writeFileSync(categoryPath, JSON.stringify(category));
