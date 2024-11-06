enum sizes {
	xs = '400px',
	sm = '600px',
	md = '768px', //Largura máxima do meu celular (deitado)
	lg = '992px',
	xl = '1366px'
}

const breakpoints = {
	xs: `(max-width: ${sizes.xs})`,
	sm: `(max-width: ${sizes.sm})`,
	md: `(max-width: ${sizes.md})`,
	lg: `(max-width: ${sizes.lg})`,
	xl: `(min-width: ${sizes.xl})`
}

export default breakpoints
