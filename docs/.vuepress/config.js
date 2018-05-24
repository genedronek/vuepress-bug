module.exports = {

	dest:		"VueGlass",
	base:		"/VueGlass/",
	title: 		'vue.glass',

	description:  "just playing aorund",
	themeConfig:	{
		nav: [
				{ text: 'email', link: 	'/email.md'},
		],
		docsDir: "docs",
	},
	chainWebpack ( config ) { config.resolve.alias.set( 'vue', 'vue/dist/vue.common.js') },
}
