export enum Language {
	java = 'java',
	javascript = 'javascript',
	python = 'python',
}

export default interface ProjectModel {
	name: string
	repository: string
	description: string
	project?: string
}

export const projects: { [key in Language]: ProjectModel[] } = {
	java: [
		{
			name: "Profanator-API",
			repository: "https://github.com/J-Player/Profanator-API",
			description:
				"API reativa desenvolvida em Spring WebFlux com o propósito de fornecer dados relacionados aos itens do Profane (MMO Sandbox brasileiro).",
			project: 'https://profanator-api.onrender.com/swagger-ui/index.html'
		},
		{
			name: "Simple Spring Batch Template",
			repository: "https://github.com/J-Player/Simple-Spring-Batch-Template",
			description: "Um simples template de um projeto usando Spring Batch para processamento de lotes.",
		},
		{
			name: "Simple Spring Kafka Template",
			repository: "https://github.com/J-Player/Simple-Spring-Kafka-Template",
			description: "Um simples template de uma mensageria usando Spring Kafka.",
		},
	],
	javascript: [],
	python: [],
}
