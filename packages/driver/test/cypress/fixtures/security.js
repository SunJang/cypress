/* eslint-disable  */

(function () {
  function run () {
    let div = document.createElement('div')
    div.innerText = 'security triggered'
    document.body.appendChild(div)
  }

  if (top != self) run()
  if (top.location != self.location) run()
  // if (top.location != location) run() // can't fix this one yet, must do it at the network level
  if (parent.frames.length > 0) run()
  //if (window != top) run() // can't fix this one yet, must do it at the network level
  if (window.top !== window.self) run()
  if (window.self != window.top) run()
  if (parent && parent != window) run()
  if (parent && parent.frames && parent.frames.length > 0) run()
  if ((self.parent && !(self.parent === self)) && (self.parent.frames.length != 0)) run()
})()
