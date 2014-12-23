# JSToHTML

Pipe in your javascript, pipe out simple html with a script tag. Maybe you could use it with browserify.

```
cat index.js | jstohtml > index.html
```

## Install

```
npm install seanewest/jstohtml
```

## Pipeline Friends


include npm modules in your JS with [browserify](https://github.com/substack/node-browserify)
```
cat index.js | browserify - | jstohtml > index.html
```

pipe right to an http server with [http-cat](https://github.com/seanewest/http-cat)
```
cat index.js | jstohtml | httpcat 3000
```

pipe right to your browser with [hcat](https://github.com/kessler/node-hcat)

```
cat index.js | jstohtml | hcat
```

which is the same as just using [scat](https://github.com/hughsk/scat)
```
cat index.js | scat
```
