module.exports = {

	dest:		"VueGlass",
	base:		"/VueGlass/",
	title: 		'vue.glass',
 	head:		[
				['link', { rel: 'icon', href: '/logo3b.png'}],
				//['script', { src: "https://www.gstatic.com/firebasejs/3.4.0/firebase.js" }],
				//['script', { src: "https://unpkg.com/vuefire@1.3.0" }],
	],
	description:  "just looking aorund",
	themeConfig:	{
		nav: [
				{ text: 'email', link: 	'/undefined.md'},
		],
		docsDir: "docs",
	},
	chainWebpack ( config ) { config.resolve.alias.set( 'vue', 'vue/dist/vue.common.js') },
}
