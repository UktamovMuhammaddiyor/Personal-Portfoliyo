// function change_color() {
//   document.styleSheets[1].insertRule(':root { --color-1: #ec9412 !important; }')
// }
const open_item = document.getElementsByClassName('nav-bar')[0]
var a = 0
function open_close() {
  open_item.style.opacity = '1'
  open_item.style.zIndex = '99'
}
function close_open() {
  open_item.style.opacity = '0'
  open_item.style.zIndex = '-1'
}
function change_bg() {
  var vc = document.createElement('style')
  document.head.appendChild(vc)
  if (a === 0) {
    vc.sheet.insertRule(
      ':root { --bgcolor-light: rgb(43, 44, 47); --text-color-700: white; --outer-shadow: 3px 3px 3px #222327, -3px -3px 3px #363636; --inner-shadow: inset 3px 3px 3px #222327, inset -3px -3px 3px #363636; --outer-0-shadow: 0px 0px 0px #222327, 0px 0px 0px #363636; --text-color-light: rgb(187, 187, 187); --text-color-400: #bbbbbb;}',
      0
    )
    a = 1
  } else {
    vc.sheet.insertRule(
      ':root { --bgcolor-light: rgb(239, 240, 244);--text-color-400: rgb(148, 148, 148);--text-color-light: rgb(100, 100, 100); --text-color-700: rgb(0, 0, 0);--inner-shadow: inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8;--outer-shadow: 3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8;--outer-0-shadow: 0px 0px 0px #d0d0d0, 0px 0px 0px #f8f8f8; }',
      0
    )
    a = 0
  }
}
