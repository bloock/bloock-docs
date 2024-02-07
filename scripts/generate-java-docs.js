const fs = require('fs-extra');
const jsdom = require('jsdom');
const path = require('path');
const { JSDOM } = jsdom;

try {
  const src = process.argv[2];
  const dest = './docs/sdks/java';
  const folder = 'reference';

  function transformFile(file) {
    const content = fs.readFileSync(file);
    const dom = new JSDOM(content).window.document;
    const mainContent = dom.getElementById('content');
    const breadcrums = mainContent.querySelector('.breadcrumbs');
    const name = breadcrums.querySelector(':last-child').textContent;
    mainContent.removeChild(breadcrums);
    const cover = mainContent.querySelector('.cover');
    const coverHeader = cover.querySelector('.cover');
    cover.removeChild(coverHeader);
    for (const a of mainContent.querySelectorAll('a')) {
      const href = a.getAttribute('href');
      if (href && !href.startsWith('http')) {
        a.setAttribute('href', href.replace(/\.html/, '-'));
      }
    }
    const newString = mainContent.innerHTML;
    const withoutEnding = path.basename(file).replace('.html', '-');
    const newHtmlPath = path.join(
      dest,
      folder,
      path.relative(src, path.dirname(file)),
      withoutEnding + '.source'
    );
    const newMdxPath = path.join(
      dest,
      folder,
      path.relative(src, path.dirname(file)),
      withoutEnding + '.mdx'
    );
    fs.outputFileSync(newHtmlPath, newString);
    fs.outputFileSync(
      newMdxPath,
      `---
title: ${name}
tags: [java, reference]
---

import DokkaComponent from "@graphglue/dokka-docusaurus"
import sourceHTML from './${withoutEnding}.source'

# ${name}

<DokkaComponent dokkaHTML={sourceHTML}/>
        `
    );
    return {
      type: 'doc',
      id: path
        .join(folder, path.relative(src, path.dirname(file)), withoutEnding)
        .replace(/\\/g, '/'),
      label: name,
    };
  }
  function generateForDir(dir) {
    const subdirs = [];
    const files = [];
    let indexPath = null;
    for (const subdir of fs.readdirSync(dir)) {
      const subdirPath = path.join(dir, subdir);
      if (fs.statSync(subdirPath).isDirectory()) {
        subdirs.push(subdirPath);
      } else {
        if (subdir == 'index.html') {
          indexPath = subdirPath;
        } else {
          files.push(subdirPath);
        }
      }
    }
    if (!indexPath) {
      throw new Error('no index found: ' + dir);
    }
    const index = transformFile(indexPath);

    const categoryPath = path.join(
      dest,
      folder,
      path.relative(src, dir),
      '_category_.json'
    );

    fs.outputFileSync(
      categoryPath,
      JSON.stringify({
        label: index.label,
        collapsible: true,
      })
    );

    const items = [
      ...subdirs.map((subdir) => generateForDir(subdir)),
      ...files.map((file) => transformFile(file)),
    ];
    return {
      type: 'category',
      label: index.label,
      link: {
        type: 'doc',
        id: index.id,
      },
      items: items,
    };
  }

  const packageHierarchy = {};
  const packageMap = {};
  const modulePath = path.join(src);
  for (const pckg of fs.readdirSync(modulePath)) {
    const packagePath = path.join(modulePath, pckg);
    if (fs.statSync(packagePath).isDirectory()) {
      if (pckg == 'scripts') {
        continue;
      }
      const generated = generateForDir(packagePath);
      const packageStructure = generated.label.split('.');
      let currentMap = packageHierarchy;
      for (const packagePart of packageStructure) {
        if (currentMap[packagePart] == undefined) {
          currentMap[packagePart] = {};
        }
        currentMap = currentMap[packagePart];
      }
      packageMap[generated.label] = generated;
    }
  }
} catch (error) {
  console.error(error.message);
}
