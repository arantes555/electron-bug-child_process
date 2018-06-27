const childProcess = require('child_process')
const util = require('util')

const exec = util.promisify(childProcess.exec)
const execFile = util.promisify(childProcess.execFile)

const test = async () => {
  const resultExec = await exec('echo foobar')
  console.log(resultExec)

  const resultExecFile = await execFile('echo', ['foobar'])
  console.log(resultExecFile)

  process.exit(0)
}

test()
