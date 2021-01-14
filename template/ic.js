import {
  AnonymousIdentity,
  HttpAgent,
  makeExpiryTransform,
  makeNonceTransform,
} from '@dfinity/agent'

function PolyfillAgent({ log = console } = {}) {
  const agentOptions = {
    host: 'http://localhost:8000',
    identity: new AnonymousIdentity(),
  }
  log.debug('PolyfillAgent creating HttpAgent with options', agentOptions)
  const agent = new HttpAgent(agentOptions)
  agent.addTransform(makeNonceTransform())
  agent.addTransform(makeExpiryTransform(5 * 60 * 1000))
  return agent
}

const ic = {
  ...window.ic,
  agent: PolyfillAgent(),
}

if (!(window.ic && window.ic.agent)) {
  window.ic = ic
}

export { ic }
