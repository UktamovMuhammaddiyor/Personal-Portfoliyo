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
//about me
function about_me() {
  document.getElementsByClassName('inner-shadow')[0].classList =
    'btn-1 outer-shadow hover-in-shadow'
  document.getElementById('aboutme').classList =
    'btn-1 inner-shadow text-change'

  var item2 = document.getElementsByClassName('sec-' + nom)[0]
  item2.style.zIndex = '-1'
  item2.style.opacity = 0
  item2.style.display = 'none'
  nom = 1
  var item = document.getElementsByClassName('sec-' + nom)[0]
  item.style.display = 'block'
  setTimeout(function () {
    item.style.zIndex = '1'
    item.style.opacity = 1
  }, 100)
}
// change skills, education, experience
function skills(a, son) {
  var sk = document.getElementsByClassName('skill-close')[0],
    ti = document.getElementsByClassName('time-lines')[0],
    skch = document.getElementsByClassName('skill-ch')[0],
    ti2 = document.getElementsByClassName('time-lines')[1]

  if (son === 0) {
    if (ti.style.display === 'block') {
      ti.style.opacity = 0
      ti.style.zIndex = '-1'
      ti.style.display = 'none'
    } else {
      ti2.style.opacity = 0
      ti2.style.zIndex = '-1'
      ti2.style.display = 'none'
    }
    sk.style.display = 'flex'
    setTimeout(function () {
      sk.style.opacity = 1
      sk.style.zIndex = '1'
      sk.style.top = '50px'
    }, 100)
  } else if (son === 1) {
    if (ti2.style.display === 'block') {
      ti2.style.opacity = 0
      ti2.style.zIndex = '-1'
      ti2.style.display = 'none'
    } else {
      sk.style.top = 0
      sk.style.opacity = 0
      sk.style.zIndex = '-1'
      sk.style.display = 'none'
    }
    ti.style.display = 'block'
    setTimeout(function () {
      ti.style.opacity = 1
      ti.style.zIndex = '1'
      ti.style.top = '50px'
    }, 100)
  } else {
    if (ti.style.display === 'block') {
      ti.style.opacity = 0
      ti.style.zIndex = '-1'
      ti.style.display = 'none'
    } else {
      sk.style.top = 0
      sk.style.opacity = 0
      sk.style.zIndex = '-1'
      sk.style.display = 'none'
    }
    ti2.style.display = 'block'
    setTimeout(function () {
      ti2.style.opacity = 1
      ti2.style.zIndex = '1'
      ti2.style.top = '50px'
    }, 100)
  }
  skch.classList = 'btn-1 inner-shadow-h'
  a.classList = 'btn-1 outer-shadow text-change skill-ch'
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
var port_dict = {
  'project 1': {
    name: 'Landing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sedenim eligendi, aperiam odit minus at laudantium id vero placeat?Aliquid maxime autem perspiciatis inventore, a quisquamdoloremque libero molestiae laboriosam.',
    malumot: [
      2020,
      'xyz',
      'Html, Css, Js',
      "<a href='https://mdrx.netlify.app'>MDRX</a",
    ],
    img: ['project 1/1.png'],
  },
  'project 2': {
    name: 'Landing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sedenim eligendi, aperiam odit minus at laudantium id vero placeat?Aliquid maxime autem perspiciatis inventore, a quisquamdoloremque libero molestiae laboriosam.',
    malumot: [
      2020,
      'xyz',
      'Html, Css, Js',
      "<a href='https://goodwebsolution.netlify.app'>Goodweb</a",
    ],
    img: ['project 2/1.png'],
  },
  'project 3': {
    name: 'Web Aplication',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sedenim eligendi, aperiam odit minus at laudantium id vero placeat?Aliquid maxime autem perspiciatis inventore, a quisquamdoloremque libero molestiae laboriosam.',
    malumot: [
      2020,
      'xyz',
      'Html, Css, Js',
      "<a href='https://mdrx18.netlify.app'>MDRX18</a",
    ],
    img: [
      'project 3/1.png',
      'project 3/2.png',
      'project 3/3.png',
      'project 3/4.png',
      'project 3/5.png',
      'project 3/6.png',
    ],
  },
}
function open_view(a) {
  var item1 = document.getElementsByClassName('sec-' + nom)[0],
    item2 = document.getElementsByClassName('portfolio-view')[0],
    port_m = document.querySelectorAll('.port-m'),
    port_img2 = document.getElementById('portfoliyo-img')
  console.log(port_dict['project ' + a])
  document.getElementById('portfolio-name').innerHTML =
    port_dict['project ' + a].name
  document.getElementById('about-portfolio').innerHTML =
    port_dict['project ' + a].text
  port_m.forEach((b, c) => {
    b.innerHTML = port_dict['project ' + a].malumot[c]
  })
  port_img2.innerHTML =
    '<img src="./images/' +
    port_dict['project ' + a].img[0] +
    '" alt="error" class="port-img"/>'
  for (var i = 1; i < port_dict['project ' + a].img.length; i++) {
    port_img2.innerHTML +=
      '<img src="./images/' +
      port_dict['project ' + a].img[i] +
      '" alt="error" class="port-img"/>'
  }
  son_img = 0
  item1.style.zIndex = '-1'
  item1.style.opacity = 0
  item1.style.display = 'none'
  item2.style.opacity = '1'
  item2.style.zIndex = '100'
  item2.style.display = 'block'
  if (document.getElementsByClassName('port-view')[0].style.height !== '0px') {
    project_click()
  }
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
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
// next portfolio view image
var son_img = 0
function next_port() {
  var port_img = document.querySelectorAll('.port-img'),
    next_img = 0
  port_img.forEach((a, b) => {
    a.style.display = 'none'
    a.style.opacity = '0'
  })
  son_img += 1
  if (son_img === port_img.length) {
    son_img = 0
  }
  port_img[son_img].style.display = 'block'
  port_img[son_img].style.animation = 'port_img 0.7s forwards'
}
function prev_port() {
  var port_img = document.querySelectorAll('.port-img'),
    next_img = 0
  port_img.forEach((a, b) => {
    a.style.display = 'none'
    a.style.opacity = '0'
  })
  son_img -= 1
  if (son_img === -1) {
    son_img = port_img.length - 1
  }
  port_img[son_img].style.display = 'block'
  port_img[son_img].style.animation = 'port_img 0.7s forwards'
}
//testimanal prev view
var test = 0
function test_right() {
  var test_prev = document.getElementsByClassName('testiminal'),
    test2 = document.getElementsByClassName('testiminal-item')
  test -= 100 / test2.length
  if (test < -99) {
    test = 0
  }
  test_prev[0].style.transform = 'translate(' + test + '%,0)'
}
function test_left() {
  var test_prev = document.getElementsByClassName('testiminal'),
    test2 = document.getElementsByClassName('testiminal-item')
  test += 100 / test2.length
  if (test > 1) {
    test = -66.66
  }
  test_prev[0].style.transform = 'translate(' + test + '%,0)'
}
var xy = 0,
  y = 0,
  tend = 0
document
  .getElementsByClassName('testiminal')[0]
  .addEventListener('touchstart', function touch_move(event) {
    var xyz = event.touches[0].clientX
    xy = xyz
    y = 0
  })
document
  .getElementsByClassName('testiminal')[0]
  .addEventListener('touchmove', function touch_move(event) {
    var test_prev = document.getElementsByClassName('testiminal')
    var xyz = event.touches[0].clientX
    if (xy < xyz) {
      y -= 1
      tend = xyz - 1
    } else {
      y += 1
      tend = xyz + 1
    }
    test_prev[0].style.transform = 'translate(' + y + '%,0)'
    xy = xyz
  })
document
  .getElementsByClassName('testiminal')[0]
  .addEventListener('touchend', function touch_move(event) {
    var xyz = tend
    if (xy < xyz) {
      test_right()
    } else {
      test_left()
    }
  })
