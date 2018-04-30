# multi_runner

Run nodejs application on multicore processor, currently only tested on Linux

Every `stdout` and `stderr` output are prefixes with PID, `stdin` is not used. [12factor](https://12factor.net/) principle.

If one of the sub-process exited with non-zero status code, or killed by signal, the entire cluster will be terminated. [FailFast](http://wiki.c2.com/?FailFast) principle.

It should be the supervisor responsibility to restart the service.

It suitable for docker container. For PID1 please use [docker_pid1](https://github.com/win-t/docker_pid1)

## how to install
using git
```
npm install git+https://git@github.com/payfazz/multi_runner.git
```

using npm registry
```
npm install multi_runner
```

# how to use
let's say the script is `server.js`
```sh
$ export PATH=$PWD/node_modules/.bin:$PATH
$ multi_runner server.js
```
