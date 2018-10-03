module.exports = {
	root : true,
	env  : {
		node : true,
	},
	extends : [
		'plugin:vue/essential',
		'@vue/airbnb',
	],
	rules : {
		'no-console'            : process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger'           : process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-use-before-define'  : 0,
		'no-prototype-builtins' : 'off',
		'func-names'            : 0,
		'global-require'        : 0,
		'max-len'               : 0,
		'quotes'                : [
			'error',
			'single'
		],
		'quote-props' : [
			'error',
			'consistent'
		],
		'no-mixed-spaces-and-tabs' : [
			'error',
			'smart-tabs'
		],
		'indent' : [
			'error',
			'tab',
			{ 'SwitchCase' : 1 }
		],
		'space-in-parens' : [
			'error',
			'always'
		],
		'no-multi-spaces' : [
			'error',
			{
				'exceptions' : {
					'VariableDeclarator'   : true,
					'AssignmentExpression' : true
				}
			}
		],
		'key-spacing' : [
			'error',
			{
				'beforeColon' : true,
				'align'       : 'colon'
			}
		],
		'brace-style' : [
			'error',
			'stroustrup'
		],
		'comma-dangle'          : 'off',
		'no-tabs'               : 0,
		'padded-blocks'         : 'off',
		'no-underscore-dangle'  : 'off',
		'jsx-a11y/href-no-hash' : 'off'
	},
	parserOptions : {
		parser : 'babel-eslint',
	},
};
