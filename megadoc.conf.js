const path = require('path')

const sidebarLayout = {
  name: 'Core::Sidebar',
  outlets: [
    {
      name: 'Markdown::Browser',
      using: 'articles'
    },
    {
      name: 'Core::SidebarHeader',
      options: {
        text: 'API'
      }
    },
    {
      name: 'JS::Browser',
      using: 'api'
    },
    {
      name: 'Core::SidebarHeader',
      options: {
        text: 'API: Auxiliary'
      }
    },
    {
      name: 'JS::Browser',
      using: 'api--auxiliary'
    },
    {
      name: 'Core::SidebarHeader',
      options: {
        text: 'API: Constraints'
      }
    },
    {
      name: 'JS::Browser',
      using: 'api--constraints'
    },
  ]
}

const configureJS = config => Object.assign({}, {
  baseURL: '/api',
  title: 'FMA API',
  showSourcePaths: false,
  hideBlankParameters: true,
  hideBlankReturns: true,
  hidePrivateSymbols: true,
  expandReturnedFunctionSignatures: true,
}, config)

module.exports = {
  outputDir: path.resolve(__dirname, 'docs'),
  assetRoot: path.resolve(__dirname),
  serializer: [ 'megadoc-html-serializer', {
    theme: [ 'megadoc-theme-minimalist', {} ],
    title: 'Full Metal Alchemy',
    resizableSidebar: false,
    fixedSidebar: true,
    sidebarWidth: 340,
    favicon: null,
    footer: false,
    footer: '',
    tooltipPreviews: false,
    styleSheet: path.resolve(__dirname, 'megadoc.conf.less'),
    styleOverrides: {
      accent: '#2aa198'
    },
    rewrite: {
      '/readme.html': '/index.html',
    },
    layoutOptions: {
      banner: false,
      customLayouts: [
        {
          match: { by: 'namespace', on: [ 'api', 'api--constraints', 'api--auxiliary' ] },
          regions: [
            {
              name: 'Core::Content',
              options: { framed: true },
              outlets: [
                {
                  name: 'JS::Module',
                  options: {
                    className: 'api-article'
                  }
                },
              ]
            },
            sidebarLayout
          ]
        },
        {
          match: { by: 'url', on: '*' },
          regions: [
            {
              name: 'Core::Content',
              options: { framed: true },
              outlets: [
                {
                  name: 'Markdown::Document'
                },
              ]
            },
            sidebarLayout
          ]
        }
      ],
    },

    syntaxHighlighting: {
      defaultLanguage: 'javascript',

      aliases: {
        shell: 'bash'
      },

      languages: [
        'bash',
        'javascript',
        'markdown',
      ],
    }
  } ],

  sources: [
    {
      id: 'articles',
      include: [
        'README.md',
        'CHANGELOG.md',
      ],
      processor: [ 'megadoc-plugin-markdown', {
        baseURL: '/',
        title: 'Full Metal Alchemy'
      } ],
    },

    {
      id: 'api',
      include: [
        'lib/createState.js',
        'lib/refine.js'
      ],
      processor: [ 'megadoc-plugin-js', configureJS({}) ],
    },
    {
      id: 'api--auxiliary',
      include: [
        'lib/DataPoint.js',
        'lib/Period.js',
        'lib/Tuple.js',
      ],
      exclude: [
        '**/__tests__'
      ],
      processor: [ 'megadoc-plugin-js', configureJS({}) ],
    },
    {
      id: 'api--constraints',
      include: [
        'lib/constraints/*.js',
      ],
      exclude: [
        '**/__tests__'
      ],
      processor: [ 'megadoc-plugin-js', configureJS({}) ],
    },
    // {
    //   id: 'examples',
    //   include: [
    //     'examples/**/*.md',
    //   ],
    //   processor: [ 'megadoc-plugin-markdown', {
    //     baseURL: '/examples',
    //     title: 'Career Router Examples'
    //   } ],
    // },
  ]
}
