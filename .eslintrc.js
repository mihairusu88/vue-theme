/* eslint-env node */
module.exports = {
    'root': true,
    'env': {
        'node': true
    },
    'extends': [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'vue/html-indent': [
            'error',
            4,
            {
                'attribute': 1,
                'closeBracket': 1,
                'alignAttributesVertically': false,
                'ignores': []
            }
        ],
        'vue/max-attributes-per-line': [ 'error', {
            'singleline': {
                'max': 6
            },      
            'multiline': {
                'max': 1
            }
        } ],
        'vue/html-self-closing': [
            'error',
            {
                'html': {
                    'void': 'always',
                    'normal': 'never',
                    'component': 'always'
                },
                'svg': 'never',
                'math': 'never'
            }
        ],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                'singleline': 'never',
                'multiline': 'never'
            }
        ],
        'vue/script-indent': 'off',
        'vue/no-unused-components': [ 'error', {
            'ignoreWhenBindingPresent': false
        } ],
        'vue/no-dupe-keys': 0,
        'quotes': [
            'error',
            'single',
            {
                'allowTemplateLiterals': true
            }
        ],
        'semi': [
            'error',
            'always'
        ],
        'array-bracket-spacing': [
            'error',
            'always',
            {
                'singleValue': true,
                'objectsInArrays': true,
                'arraysInArrays': true
            }
        ],
        'object-curly-spacing': [
            'error',
            'always',
            {
                'objectsInObjects': true,
                'arraysInObjects': true
            }
        ],
        'space-in-parens': [
            'error',
            'always'
        ],
        'comma-spacing': [
            'error',
            {
                'before': false,
                'after': true
            }
        ],
        'vue/order-in-components': [ 'error', {
            'order': [
                'el',
                'name',
                'parent',
                'functional',
                [ 'delimiters', 'comments' ],
                'extends',
                [ 'components', 'directives' ],
                'mixins',
                'inheritAttrs',
                'model',
                [ 'props', 'propsData' ],
                'data',
                'filters',
                'computed',
                'watch',
                'methods',
                [ 'template', 'render' ],
                'renderError',
                'LIFECYCLE_HOOKS',
                'setup'
            ]
        } ],
    },
    'overrides': [
        {
            'files': [ '*.vue' ],
            'rules': {
                'indent': 'off'
            }
        },
        {
            'files': [ '*.js' ],
            'rules': {
                'vue/script-indent': 'off'
            }
        }
    ],
};