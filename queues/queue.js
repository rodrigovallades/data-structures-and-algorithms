const { createQueue } = require('./index')

const q = createQueue()

q.enqueue('Magalhães')
q.enqueue('Vallades')
q.enqueue('Rodrigo')

q.dequeue()
q.dequeue()
console.log(q.peek())
