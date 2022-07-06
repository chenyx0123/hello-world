---
to: tests/snapshot/<%= testfile.replace(".snapshot.js","") %>.test.js
---

/**
 * @jest-environment jsdom
 */
import initStoryshots from '@storybook/addon-storyshots';
// https://storybook.js.org/docs/react/workflows/snapshot-testing
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import path from 'path';

// Function to customize the snapshot location
export const getMatchOptions = ({ context }) => {
  // Generates a custom path based on the file name and the custom directory.
  const snapshotPath = path.join(
    'snapshot',
    context.fileName.replace('.snapshot.js', '')
  );

  return {
    customSnapshotsDir: snapshotPath,
    customSnapshotIdentifier: context.id.replace(/^📷-(views|components)-/, ''),
    failureThreshold: 0.0005, // 0.05%
    failureThresholdType: 'percent',
  };
};

// https://github.com/storybookjs/storybook/issues/9605
export const beforeScreenshot = async (
  page,
  { context: { parameters } }
) => {
  if (parameters?.viewport?.defaultViewport) {
    const viewport =
      parameters.viewport.viewports[parameters.viewport.defaultViewport];
    await page.setViewport({
      width: parseInt(viewport.styles.width, 10),
      height: parseInt(viewport.styles.height, 10),
    });
  }
  await page.waitForNetworkIdle({ idleTime: 500 });
};

const DEFAULT_IMAGE_SNAPSHOT_OPTIONS = {
  beforeScreenshot,
  getGotoOptions: () => ({ waitUntil: 'networkidle2' }),
  getMatchOptions,
  testTimeout: 30000,
};

initStoryshots({
  storyKindRegex: /^📷\/<%= testfile.replace(".snapshot.js","").replace(/\//g,"\\/") %>$/,
  test: imageSnapshot(DEFAULT_IMAGE_SNAPSHOT_OPTIONS),
});
