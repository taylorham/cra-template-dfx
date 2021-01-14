const path = require("path");

const dfxJson = require(`${__dirname}/../dfx.json`);

const generateAliases = () => {
  const aliases = Object.entries(dfxJson.canisters).reduce(
    (acc, [name, value]) => {
      const outputRoot = path.join(
        __dirname,
        `../.dfx/local/${dfxJson.defaults.build.output}`,
        name
      );
      const filename = path.basename(value.main, ".mo");
      return {
        ...acc,
        ["ic:canisters/" + name]: path.join(outputRoot, name + ".js"),
        ["ic:idl/" + name]: path.join(outputRoot, name + ".did.js"),
      };
    },
    {}
  );
  return aliases;
};

module.exports = {
  default: generateAliases,
};
