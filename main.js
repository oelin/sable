import { markdown } from 'markdown'


//const state = { flushInput: false }


document.querySelector('.source__textarea').focus()
document.querySelector('.source__textarea').addEventListener('input', function(e) {
	
	document.querySelector('.target').innerHTML = markdown.toHTML(this.value)
})
