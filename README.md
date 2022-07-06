# Webapp SSR Engine

## Local Setup

1. Install dependencies: `make`
2. Edit `webapp-ssr-engine/.env.local.sample`
3. Make a copy of config: `cp webapp-ssr-engine/.env.local.sample webapp-ssr-engine/.env.local`
4. Start local webserver:`npm run dev`

# Tricks

For `npm run sb:snapshot`

### Error: `Error running image diff: spawnSync /usr/bin/node ENOBUFS`

**Explanation**

Some image snapshots are very long and large, over 10MB is more than just possible.

**Solution**

Change `node_modules/jest-image-snapshot/src/diff-snapshot.js:346:11`

```js
function runDiffImageToSnapshot(options) {
  options.receivedImageBuffer = options.receivedImageBuffer.toString('base64');

  const serializedInput = JSON.stringify(options);

  let result = {};

  const writeDiffProcess = childProcess.spawnSync(
    process.execPath,
    [`${__dirname}/diff-process.js`],
    {
      input: Buffer.from(serializedInput),
      stdio: ['pipe', 'inherit', 'inherit', 'pipe'],
      //! to very large value, like 100 * 1024 * 1024
      maxBuffer: 10 * 1024 * 1024, // 10 MB
    }
  );
  // ...
}
```
