# &lt;hello-world&gt;

> A Web Component example using [VanillaJS](http://vanilla-js.com/).
>
> Looking for a boilerplate? Check [element-boilerplate](https://github.com/webcomponents/element-boilerplate).

## Demo

[Check it live!](http://webcomponents.github.io/hello-world-element)

## Install

Install the component using [Bower](http://bower.io/):

```sh
$ bower install hello-world-element --save
```

Or [download as ZIP](https://github.com/webcomponents/hello-world-element/archive/master.zip).

## Usage

1. Import polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import custom element:

    ```html
    <link rel="import" href="bower_components/hello-world-element/hello-world.html">
    ```

3. Start using it!

    ```html
    <hello-world></hello-world>
    ```

## Options

Attribute  | Options                   | Default             | Description
---        | ---                       | ---                 | ---
`who`      | *string*                  | `World`             | Who do you want to say hello?

## Development

In order to run it locally you'll need to fetch some dependencies and a basic server setup.

1. Install [bower](http://bower.io/) & [polyserve](https://npmjs.com/polyserve):

    ```sh
    $ npm install -g bower polyserve
    ```

2. Install local dependencies:

    ```sh
    $ bower install
    ```

3. Start development server and open `http://localhost:8080/components/hello-world-element/`.

    ```sh
    $ polyserve
    ```

## History

For detailed changelog, check [Releases](https://github.com/webcomponents/hello-world-element/releases).

## License

[MIT License](http://webcomponentsorg.mit-license.org/) © WebComponents.org
