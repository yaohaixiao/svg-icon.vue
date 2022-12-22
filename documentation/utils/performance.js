import { getCLS, getFID, getLCP } from 'web-vitals'

const queue = new Set()
const addToQueue = (metric) => {
  const name = metric.name
  const record = metric.value
  const rating = metric.rating
  const page = location.pathname + location.hash

  queue.add({ page, name, record, rating })
}

export const analyseCoreVitals = () => {
  getLCP(addToQueue)
  getFID(addToQueue)
  getCLS(addToQueue)
}

export const echoAnalyseRecords = () => {
  const records = [...queue]
  console.table(records)
}
