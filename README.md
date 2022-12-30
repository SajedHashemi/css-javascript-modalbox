Use this script in your projects and change the style according to the theme of your project.

#### How to use:
Put the following line related to the style at the beginning of the file and in the head tag
```html
<link rel="stylesheet" href="modalBox.css">
```
And put the following line of javascript code at the end of the file and after the body tag
```html
<script src="modalBox.js"></script>
```
**Note**: The path of the file should be changed relative to the storage address of the css file in the project.

#### Example:
```html
<!DOCTYPE html>
<html>
<head>
	<title>Modal Box Demo</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="assets/css/modalBox.css">
  <link rel="icon" type="image/x-icon" href="/assets/img/favicon.png">
  <style>
    ...
  </style>
</head>
<body>
  <div class="center">
    <button class="btn" onclick="modalBox('modalbox1',[{selector:'.at-item',value:'Modal'}],0)">Open Modal</button>
  </div>
  <div class="modal-box" id="modalbox1" style="">
    <div class="modal-box-header">Title</div>
    <div class="modal-box-content">
      <div class='at-container'>
        <div class='at-item'></div>
      </div>
    </div>
    <div class="modal-box-footer">
      <div class="modal-box-btns n1">
        <button onclick="modalBoxHideByElement(this)">Close</button>
      </div>
    </div>
  </div>
</body>
<script src="assets/js/modalBox.js"></script>
</html>
```
**Note**: The syntax related to the definition of the elements is as follows:

> [{selector:'selector string',value:'value of selector'},{...},{...},...]

#### Example:

> [{selector:'.at-item',value:'Modal'}]

### Thank you
