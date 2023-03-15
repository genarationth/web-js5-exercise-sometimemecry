const bankQueue = ['Sofia', 'David', 'Juan'];
bankQueue.push('Sara', 'Augustin');
bankQueue.shift();
bankQueue.splice(1, 0, 'Renata');
bankQueue.push('Elena');

console.log(bankQueue);