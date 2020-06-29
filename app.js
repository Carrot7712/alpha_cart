const form = document.getElementById('a-form')
const formParts = form.querySelectorAll('.part')
const stepControl = document.getElementById('step-control')
const steps = stepControl.querySelectorAll('.step')
const btnControl = document.getElementById('btn-control')
const nextBtn = btnControl.querySelector('.next')
const prevBtn = btnControl.querySelector('.back')
let step = 0

// listener
btnControl.addEventListener('click', handleBtnControlClicked)

function handleBtnControlClicked(e) {
  setSteppers(e.target, step, e.target.innerHTML)
  step += setFormParts(e.target, step, e.target.innerHTML)
  setBtnDisabled()
}

function setSteppers(target, step, word) {
  const nowStep = steps[step]
  if (target.matches('.next') && word === '下一步') {
    const nextStep = steps[step + 1]
    nowStep.classList.remove('active')
    nowStep.classList.add('checked')
    nextStep.classList.add('active')
  } else if (target.matches('.back')) {
    const prevStep = steps[step - 1]
    nowStep.classList.remove('active')
    prevStep.classList.remove('checked')
    prevStep.classList.add('active')
  }
}

function setFormParts(target, step, word) {
  let newStep = 0
  if (target.matches('.next') && word === '下一步') {
    formParts[step].classList.toggle('d-none')
    formParts[step + 1].classList.toggle('d-none')
    newStep += 1
  } else if (target.matches('.back')) {
    formParts[step].classList.toggle('d-none')
    formParts[step - 1].classList.toggle('d-none')
    newStep -= 1
  }
  //console.log(newStep)
  return newStep
}

function setBtnDisabled() {
  if (step === 0) {
    prevBtn.setAttribute('disabled', 'disabled')
  } else {
    prevBtn.removeAttribute('disabled')
  }
  if (step === 2) {
    nextBtn.innerHTML = '確認下單'
  } else {
    nextBtn.innerHTML = '下一步'
  }
}