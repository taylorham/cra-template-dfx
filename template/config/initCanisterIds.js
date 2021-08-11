const path = require('path')
let localCanisters, prodCanisters, canisters

try {
  localCanisters = require(path.resolve('.dfx', 'local', 'canister_ids.json'))
} catch (error) {
  console.log('No local canister_ids.json found. Continuing production')
}

function initCanisterIds() {
  try {
    prodCanisters = require(path.resolve('canister_ids.json'))
  } catch (error) {
    console.log('No production canister_ids.json found. Continuing with local')
  }

  const network =
    process.env.DFX_NETWORK ||
    (process.env.NODE_ENV === 'production' ? 'ic' : 'local')

  canisters = network === 'local' ? localCanisters : prodCanisters

  for (const canister in canisters) {
    process.env[canister.toUpperCase() + '_CANISTER_ID'] =
      canisters[canister][network]
  }
  return canisters
}

module.exports = {
  initCanisterIds,
}
