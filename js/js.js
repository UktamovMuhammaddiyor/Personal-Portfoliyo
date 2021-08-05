const open_item = document.getElementsByClassName('nav-bar')[0]
var a = 0,
  setting = 0,
  p_click = 0,
  hei = 0,
  nom = 0
// open and close buttons clicked
function open_close() {
  var item = document.getElementsByClassName('sec-' + nom)[0]
  item.style.zIndex = '-1'
  item.style.opacity = 0
  item.style.display = 'none'
  open_item.style.opacity = '1'
  open_item.style.zIndex = '99'
}
function close_open(b, raq) {
  if (b !== 2) {
    //change nav link
    document.getElementsByClassName('inner-shadow')[0].classList =
      'btn-1 outer-shadow hover-in-shadow'
    b.classList = 'btn-1 inner-shadow text-change'
    nom = raq
  }

  var item = document.getElementsByClassName('sec-' + nom)[0]
  item.style.zIndex = '1'
  item.style.opacity = 1
  item.style.display = 'block'
  open_item.style.opacity = '0'
  open_item.style.zIndex = '-1'
}
// change bg color with change :root bgcolor
function change_bg() {
  var vc = document.createElement('style')
  document.head.appendChild(vc)
  var ic = document.getElementsByClassName('ic-s')[0]
  if (a === 0) {
    vc.sheet.insertRule(
      ':root { --bgcolor-light: rgb(43, 44, 47); --text-color-700: white; --outer-shadow: 3px 3px 3px #222327, -3px -3px 3px #363636; --inner-shadow: inset 3px 3px 3px #222327, inset -3px -3px 3px #363636; --outer-0-shadow: 0px 0px 0px #222327, 0px 0px 0px #363636; --text-color-light: rgb(187, 187, 187); --text-color-400: #bbbbbb;}',
      0
    ) //dark
    ic.style.transform = 'translate(0, -40px)'
    a = 1
  } else {
    vc.sheet.insertRule(
      ':root { --bgcolor-light: rgb(239, 240, 244);--text-color-400: rgb(148, 148, 148);--text-color-light: rgb(100, 100, 100); --text-color-700: rgb(0, 0, 0);--inner-shadow: inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8;--outer-shadow: 3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8;--outer-0-shadow: 0px 0px 0px #d0d0d0, 0px 0px 0px #f8f8f8; }',
      0
    ) //light
    ic.style.transform = 'translate(0, 0px)'
    a = 0
  }
}
// open stting menyu color
function open_setting() {
  if (setting === 0) {
    document.getElementsByClassName('settings')[0].style.right = '5px'
    setting = 1
  } else {
    document.getElementsByClassName('settings')[0].style.right = '-242px'
    setting = 0
  }
}
// change color each Element
function change_color(a) {
  var vc = document.createElement('style')
  document.head.appendChild(vc)
  switch (a) {
    case 1:
      vc.sheet.insertRule(':root{ --color: #ec9412; }', 0)
    case 2:
      vc.sheet.insertRule(':root{ --color: #1fc586; }', 0)
    case 3:
      vc.sheet.insertRule(':root{ --color: #2eb1ed; }', 0)
    case 4:
      vc.sheet.insertRule(':root{ --color: #cc3a3b; }', 0)
    case 5:
      vc.sheet.insertRule(':root{ --color: #fb839e; }', 0)
  }
}
// project section open close in portfolio
function project_click() {
  var item = document.getElementsByClassName('port-view')[0],
    mi = document.getElementById('minus'),
    pl = document.getElementById('plus')
  if (p_click === 0) {
    hei = item.clientHeight
    item.style.height = 0
    mi.style.display = 'none'
    pl.style.display = 'inline'
    p_click = 1
  } else {
    mi.style.display = 'inline'
    pl.style.display = 'none'
    item.style.height = hei + 'px'
    p_click = 0
  }
}
// open portfolio view
function open_view() {
  var item1 = document.getElementsByClassName('sec-' + nom)[0],
    item2 = document.getElementsByClassName('portfolio-view')[0]
  item1.style.zIndex = '-1'
  item1.style.opacity = 0
  item1.style.display = 'none'
  item2.style.opacity = '1'
  item2.style.zIndex = '100'
  item2.style.display = 'block'
  if (document.getElementsByClassName('port-view')[0].style.height !== '0px') {
    project_click()
  }
}
// close portfolio view
function close_view() {
  var item1 = document.getElementsByClassName('sec-' + nom)[0],
    item2 = document.getElementsByClassName('portfolio-view')[0]
  item1.style.zIndex = '1'
  item1.style.opacity = 1
  item1.style.display = 'block'
  item2.style.opacity = '0'
  item2.style.zIndex = '-1'
  item2.style.display = 'none'
}
