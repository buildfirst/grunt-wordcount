# Writing Your Own Task: `grunt-wordcount`

_This repository is part of the **JavaScript Application Design: A Build First Approach** book's code samples_, the full original for the code samples [can be found here][1]. You can [learn more about the book itself here][2].

This tutorial is part of the code samples accompanying the book [in the appendix _Introduction to Grunt_][3], which walks you through the kind of things you can do, using Grunt.

> You might want to create your own Grunt tasks to help you shape your workflows. This example shows you how to do just that.

For the code in the book to work as [_a Grunt plugin_][5], I just placed it inside an exported task function, like below.

```js
module.exports = function (grunt) {
  // register task
};
```

Which is pretty much the same pattern we see in a `Gruntfile.js`. Learn [more about Grunt plugins here][5].

_**The walkthrough itself can be found in the book.**_

Below is how this README would actually look like if I were serious about open-sourcing it.

# grunt-wordcount

> Grunt task to count words and set a word count threshold.

Check for updates in the [changelog](CHANGELOG.md).

## Install

To consume it, install it from `npm`.

```shell
npm i -D grunt-wordcount
```

Read [quick tips about npm][4].

## Usage

Pick which files to count words from. Provide an optional `threshold`. If a `threshold` is provided, the task will fail unless it counts less words than that.

```js
wordcount: {
  everything: {
    files: {
      src: ['**/*', '!node_modules/**']
    }
  },
  capped: {
    files: {
      src: ['**/*', '!node_modules/**']
    },
    options: {
      threshold: 30
    }
  }
}
```

## Options

Just the `threshold` for now.

## License

MIT

  [1]: https://github.com/bevacqua/buildfirst
  [2]: http://bevacqua.io/buildfirst "JavaScript Application Design: A Build First Approach"
  [3]: https://github.com/bevacqua/buildfirst/tree/master/ch04
  [4]: http://blog.ponyfoo.com/2013/12/14/9-quick-tips-about-npm
  [5]: http://gruntjs.com/creating-plugins
