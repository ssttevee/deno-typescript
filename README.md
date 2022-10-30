This module exports the typescript library bundled in the official deno repo for
user access. This is a stopgap solution in place of whatever becomes of
https://github.com/denoland/deno/issues/1739 probably.

Unfortunately, `--allow-net` is required to fetch the code bundle from github.
Additionally, an internal api for eval must be used to since the bundle is not
an es module (seems like a browser bundle) and does not export anything
explicitly. This makes this module relatively unstable. Please don't use it for
anything that is mission critical.

## Usage

```
import ts from "https://raw.githubusercontent.com/ssttevee/deno-typescript/v1.27.0/mod.ts"

ts.createProgram();
```
