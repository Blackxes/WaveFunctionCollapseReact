/**
 * @File File Content
 *
 * @Author Alexander Bassov Wed Jul 06 2022
 * @Email blackxes.dev@gmail.com
 */

const { resolve } = require("path");

const root = resolve(__dirname + "/../../..");
const client = root + "/src/Client";

const paths = {
  root,
  client,
  entries: client + "/Entries",
  templates: client + "/Templates",
  internalAssets: client + "/Assets",
  externalAssets: root + "/public/assets",
  dist: root + "/dist/client",
};

console.log(paths);

module.exports = paths;
