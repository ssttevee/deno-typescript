export default Deno.core.evalContext(
  await (await fetch(
    "https://raw.githubusercontent.com/denoland/deno/v1.27.0/cli/tsc/00_typescript.js",
  )).text() + ";ts",
)[0];
