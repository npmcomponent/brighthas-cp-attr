
# cp-attr

  copy a element attrs to otherone.

## Installation

  Install with [component(1)](http://component.io):

    $ component install brighthas/cp-attr

## API

    var cp = require("cp-attr");

## Example
```html
<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style>
        .divbg{
            background-color: "blue";
            margin:10px;
        }
    </style>
</head>
<body>

    <div id="div1" class="divbg">div1</div>
    <div id="div2">div2</div>
    <script src="build.js"></script>

    <script>
        var cp =  require("cp-attr");
        var div2 = document.querySelector("#div2")
        cp(document.querySelector("#div1"),div2);
        setTimeout(function(){
            div2.style.backgroundColor = "red";
        },5000);
    </script>

</body>
</html>
```
Div1 attributes cp to Div2.

## License

  MIT
