import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
import './styles/base.css'
import './styles/theme.css'


const md = new MarkdownIt({
	highlight: function(string, language) {
		if (language && hljs.getLanguage(language)) {
			try {
				return hljs.highlight(string, { language })
					.value
			} catch {}
		}
	}
})


const source = document.querySelector('.source__textarea')
const target = document.querySelector('.target')


function scrollContainer(element) {

	if (element.selectionStart == element.selectionEnd) {
		element.scrollTop = element.scrollHeight
	}
}


window.addEventListener('load', function() {
	
	source.addEventListener('input', function() {
		target.innerHTML = md.render(source.value)

		scrollContainer(source)
		scrollContainer(target)
	})

	source.focus()
})
