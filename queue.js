function createQueue() {
	const queue = [];

	return {
		enqueue(item) {
			queue.unshift(item);
		},
		dequeue() {
			return queue.pop();
		},
		peek() {
			return queue[queue.length - 1];
		},
		get length() {
			return queue.length;
		},
		isEmpty() {
			return queue.length === 0;
		}
	}
};

const q = createQueue();

q.enqueue('Magalhaes')
q.enqueue('Vallades')
q.enqueue('Rodrigo')

console.log(`peeking ${q.peek()}`)
console.log(`dequeuing ${q.dequeue()}`);
console.log(`peeking ${q.peek()}`
