import store from 'store2'

const KEY = 'lastActiveMutations'
const DEFAULT = { 0: true }

function get () {
  return store.get(KEY) || DEFAULT
}

function current () {
  const retrieved = get()
  return Object.entries(retrieved)
    .filter(([i, enabled]) => enabled)
    .map(([i]) => parseInt(i, 10))
}

function update (index, active) {
  const existing = get()
  existing[index] = active
  store.set(KEY, existing)
}

export { current, update }
export default { current, update }
