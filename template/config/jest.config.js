const generateAliases = require("./generateAliases").default;

const aliases = generateAliases();
const moduleMap = {};
for (const key in aliases) {
  if (Object.hasOwnProperty.call(aliases, key)) {
    moduleMap[`^${key}$`] = aliases[key];
  }
}

module.exports = {
  moduleNameMapper: moduleMap,
};
