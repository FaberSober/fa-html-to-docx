/* eslint-disable no-console */
const fs = require('fs');
// FIXME: Incase you have the npm package
// const HTMLtoDOCX = require('html-to-docx');
const HTMLtoDOCX = require('../dist/html-to-docx.umd');

const filePath = './example/example.docx';

const htmlString = `<div><div style="padding:12px"><div id="std-export" class="std-export"><div style="font-size:34px;line-height:44px;font-weight:600;text-align:center">YYLW工程</div><div><h1>1 范围</h1><div><table><tbody><tr class="firstRow"><td width="161" valign="top" style="word-break: break-all;">111</td><td width="161" valign="top" style="word-break: break-all;">22</td><td width="161" valign="top" style="word-break: break-all;">33</td><td width="161" valign="top" style="word-break: break-all;">344</td><td width="161" valign="top" style="word-break: break-all;">44</td></tr><tr><td width="161" valign="top" style="word-break: break-all;">asdf</td><td width="161" valign="top" style="word-break: break-all;">阿斯蒂芬</td><td width="161" valign="top"><br/></td><td width="161" valign="top"><br/></td><td width="161" valign="top" style="word-break: break-all;">啊书法大赛反对</td></tr><tr><td width="161" valign="top"><br/></td><td width="161" valign="top"><br/></td><td width="161" valign="top"><br/></td><td width="161" valign="top" style="word-break: break-all;">啊手动阀手动阀</td><td width="161" valign="top"><br/></td></tr><tr><td width="161" valign="top"><br/></td><td width="161" valign="top"><br/></td><td width="161" valign="top" style="word-break: break-all;">阿斯蒂芬</td><td width="161" valign="top"><br/></td><td width="161" valign="top"><br/></td></tr></tbody></table><p><br/></p></div></div><div><h1>2 范围和定义</h1></div></div></div></div>`;

(async () => {
  const fileBuffer = await HTMLtoDOCX(htmlString, null, {
    table: { row: { cantSplit: true } },
    footer: true,
    pageNumber: true,
  });

  fs.writeFile(filePath, fileBuffer, (error) => {
    if (error) {
      console.log('Docx file creation failed');
      return;
    }
    console.log('Docx file created successfully');
  });
})();
