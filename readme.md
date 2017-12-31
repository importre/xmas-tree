# xmas-tree [![Build Status](https://travis-ci.org/importre/xmas-tree.svg?branch=master)](https://travis-ci.org/importre/xmas-tree)

> :christmas_tree: xmas-tree ascii art

<p align="center">
  <img width=330 src="https://user-images.githubusercontent.com/1744446/34326729-5415a9f0-e8f7-11e7-8b7c-fec0d4060dcc.gif">
</p>


## Install

```sh
$ npm install --save xmas-tree
```


## Usage

```js
const xmasTree = require('xmas-tree');

console.log(xmasTree());
```

### Output

```

           *
         _/ \_
        \     /
        /_' '_\
         /'+ \
        / o o \
       /  -' *-\
      /.  oo+...\
     /o- @ o @o' \
    *-------------*
       [_______]
        \_____/

```

> Decorations are generated randomly


## API

### xmasTree(\[options\])

#### options

##### size

Type: `number`<br>
Default: `15`

##### color (for CLI)

Type: `boolean`<br>
Default: `false`

##### version

Type: `boolean`<br>
Default: `false`


## CLI

```
$ npm install --global xmas-tree
```

```
$ xmas-tree --help

  Usage
    $ xmas-tree

  Options
    --size number
    --color
    --loop

  Examples
    $ xmas-tree
    $ xmas-tree --size 30
    $ xmas-tree --color
    $ xmas-tree --color --loop
    $ xmas-tree --version
```


## Contributors

- Laura Brown
    - http://laurabrown.ca


## License

MIT © [Jaewe Heo](http://importre.com)

