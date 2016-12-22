# xmas-tree [![Build Status](https://travis-ci.org/importre/xmas-tree.svg?branch=master)](https://travis-ci.org/importre/xmas-tree)

> :christmas_tree: xmas-tree ascii art

<p align="center"><img src="https://cloud.githubusercontent.com/assets/1744446/21423997/549b4294-c883-11e6-8aa6-dd9016a578fb.png" width=283></p>

> Decorations are generated randomly

## Install

```sh
$ npm install --save xmas-tree
```


## Usage

```js
const xmasTree = require('xmas-tree');

console.log(xmasTree());
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


## References

- [WPC/ascii_art.c at master · OLIMEX/WPC](https://goo.gl/VLGyVL)


## License

MIT © [Jaewe Heo](http://importre.com)

