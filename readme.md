# xmas-tree [![Build Status](https://travis-ci.org/importre/xmas-tree.svg?branch=master)](https://travis-ci.org/importre/xmas-tree)

> :christmas_tree: xmas-tree ascii art


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

> Decorations are generated randomly

```

           *
         _/ \_
        \     /
        /_' '_\
         /. '\
        /   @ \
       /   o*o \
      /.-* +    \
     /  .  -@ . .\
    *-------------*
       [_______]
        \_____/

```


## API

### xmasTree(\[options\])

#### options

##### size

Type: `number`<br>
Default: `15`

##### color (for CLI)

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
    --color  # for CLI

  Examples
    $ xmas-tree
    $ xmas-tree --size 30
    $ xmas-tree --color
```


## License

MIT © [Jaewe Heo](http://importre.com)

