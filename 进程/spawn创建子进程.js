const { spawn } = require('child_process')

const child = spawn(`ls`, [], {
	stdio: [process.stdin, process.stdout, process.stderr],
});
child.on('close', (code, signal) => {
	console.log('close - code', code);
	console.log('close - signal', signal);
});

child.on('exit', (code, signal) => {
	console.log('exit - code', code);
	console.log('exit - signal', signal);
});