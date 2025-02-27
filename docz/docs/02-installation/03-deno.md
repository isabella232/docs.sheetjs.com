---
sidebar_position: 3
sidebar_custom_props:
  summary: Import ECMAScript Modules and TypeScript definitions
---

import current from '/version.js';

# Deno

Each standalone release script is available at <https://cdn.sheetjs.com/>.

Using the URL imports, `deno run` will automatically download scripts and types:

<pre><code parentName="pre" {...{"className": "language-ts"}}>{`\
// @deno-types="https://cdn.sheetjs.com/xlsx-${current}/package/types/index.d.ts"
import * as XLSX from 'https://cdn.sheetjs.com/xlsx-${current}/package/xlsx.mjs';`}
</code></pre>

<details>
  <summary><b>XLS Codepage support</b> (click to show)</summary>

If XLS support is required, `cpexcel.full.js` must be manually imported:

<pre><code parentName="pre" {...{"className": "language-ts"}}>{`\
/* load the codepage support library for extended support with older formats  */
import * as cptable from 'https://cdn.sheetjs.com/xlsx-${current}/package/dist/cpexcel.full.mjs';
XLSX.set_cptable(cptable);`}
</code></pre>

</details>