class Project {
	/**
	 *
	 * @param {Object} props
	 * @param {String} props.name
	 * @param {String[]} props.tags
	 * @param {String} props.description
	 * @param {String} props.repository
	 * @param {String} props.project
	 */
	constructor(props) {
		this.name = props.name
		this.urlImage = props.urlImage || 'bg1.jpg'
		this.tags = props.tags
		this.description = props.description
		this.repository = props.repository || BASE_URL
		this.project = props.project
	}
}

const BASE_URL = 'https://github.com/j-player/'

export default [
	new Project({
		name: 'Profanator',
		tags: ['Java'],
        description: 'Uma calculadora de itens desenvolvida para o jogo Profane (MMO Sandbox brasileiro). É um aplicativo desktop desenvolvido em Java e utilizando JavaFX para desenvolver a interface gráfica.',
		repository: `${BASE_URL}Profanator`,
	}),
	new Project({
		name: 'Profanator-API',
		tags: ['Java', 'Spring'],
        description: 'API desenvolvida em Spring Boot com o propósito de fornecer dados relacionados aos itens do Profane (MMO Sandbox brasileiro). É uma API Reativa (Spring Webflux) e Stateless (usa tokens JWT para Autenticação e Autorização).',
		repository: `${BASE_URL}Profanator-API`,
	}),
]
