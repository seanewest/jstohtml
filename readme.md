# JSToHTML

Pipe in your javascript, pipe out simple html with a script tag. Maybe you could use it with browserify.

```
cat index.js | jstohtml > index.html
```

## Install

```
npm install seanewest/jstohtml
```

## Command Line Usage

Just pipe to it any javascript to use this from the command line.
```
echo "console.log('hello world')" | jstohtml > index.html
cat index.html
<html><body><script>console.log('hello world')
</script></body></html>
```

## API
```
var jstohtml = require('jstohtml');
var somejs = 'console.log("hello world")';
var html = jstohtml(somejs);
```

## Pipeline Friends


include npm modules in your JS with [browserify](https://github.com/substack/node-browserify)
```
cat index.js | browserify - | jstohtml > index.html
```

pipe right to an http server with [http-cat](https://github.com/seanewest/http-cat)
```
cat index.js | jstohtml | http-cat 3000
```

pipe right to a [thrust](https://github.com/breach/thrust) browser window with [thrust-cat](https://github.com/seanewest/thrust-cat)
```
cat index.js | jstohtml | thrust-cat 800 600
```

pipe right to your browser with [hcat](https://github.com/kessler/node-hcat)

```
cat index.js | jstohtml | hcat
```

which is the same as just using [scat](https://github.com/hughsk/scat)
```
cat index.js | scat
```
