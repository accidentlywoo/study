import View from './View.js'

const tag = '[FormView]'

const FormView = Object.create(View)

FormView.setup = function(el){
  // setup : 엘레먼트 주입받아서 내부적으로 속성을 갖게한다.
  this.init(el)
  this.inputEl = el.querySelector('[type=text]')
  this.resetEl = el.querySelector('[type=reset]')
  this.showResetBtn(false)
  this.bindEvents()
  return this
}

FormView.showResetBtn = function(show = true){
  this.resetEl.style.display = show ? 'block' : 'none'
}

FormView.bindEvents = function(){
  this.on('submit', e => e.preventDefault())
  // ??
  this.inputEl.addEventListener('keyup', e => this.onKeyup(e))
  this.resetEl.addEventListener('click', e => this.onClickReset())
}

FormView.onKeyup = function(e){
  const enter = 13;
  this.showResetBtn(this.inputEl.value.length)
  if(!this.inputEl.value.length)this.emit('@reset')
  if(e.keyCode !== enter )return
  /*todo
  FormView -> MainController -> ResultView
  */
  console.log(this.inputEl.value, 'testtesttest');
  this.emit('@submit',{input:this.inputEl.value})
}

FormView.onClickReset = function(){
  this.emit('@reset')
  this.showResetBtn(false)
}

FormView.setValue = function(value = ''){
  this.inputEl.value = value
  this.showResetBtn(this.inputEl.value.length)
}

export default FormView
