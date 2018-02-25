exports["megadoc-plugin-markdown"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var BrowserOutlet = __webpack_require__(2);
	var DocumentOutlet = __webpack_require__(14);
	var DocumentTOCOutlet = __webpack_require__(18);
	var InspectorOutlet = __webpack_require__(19);
	
	module.exports = {
	  name: 'megadoc-plugin-lua',
	  outlets: ['Markdown::Document', 'Markdown::DocumentTOC', 'Markdown::Browser'],
	
	  outletOccupants: [{ name: 'Markdown::Document', component: DocumentOutlet }, { name: 'Markdown::DocumentTOC', component: DocumentTOCOutlet }, { name: 'Markdown::Browser', component: BrowserOutlet }, { name: 'Core::Inspector', component: InspectorOutlet }]
	};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	var Browser = __webpack_require__(4);
	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    shape = _React$PropTypes.shape,
	    bool = _React$PropTypes.bool;
	
	
	module.exports = React.createClass({
	  displayName: 'Markdown::BrowserOutlet',
	
	  propTypes: {
	    namespaceNode: object,
	    $outletOptions: shape({
	      flat: bool
	    })
	  },
	
	  render: function render() {
	    return React.createElement(Browser, _extends({}, this.props, { flat: this.props.$outletOptions.flat }));
	  }
	});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["react"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Link = __webpack_require__(5);
	var HotItemIndicator = __webpack_require__(6);
	
	var _require = __webpack_require__(7),
	    ROOT_FOLDER_ID = _require.ROOT_FOLDER_ID;
	
	var ArticleTOC = __webpack_require__(8);
	var object = React.PropTypes.object;
	
	
	var Browser = React.createClass({
	  displayName: 'Browser',
	
	  propTypes: {
	    namespaceNode: object,
	    documentNode: object,
	    documentEntityNode: object,
	    expanded: React.PropTypes.bool,
	    flat: React.PropTypes.bool
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      groupByFolder: false
	    };
	  },
	  render: function render() {
	    var namespaceNode = this.props.namespaceNode;
	
	
	    return React.createElement(
	      'nav',
	      { className: 'megadoc-document-browser markdown-browser' },
	      React.createElement(
	        'div',
	        null,
	        Array.isArray(namespaceNode.config.folders) && namespaceNode.config.folders.length > 0 ? FolderHierarchy(namespaceNode).map(this.renderFolder) : namespaceNode.documents.map(this.renderArticle)
	      )
	    );
	  },
	  renderFolders: function renderFolders(folders) {
	    return React.createElement(
	      'div',
	      null,
	      folders.map(this.renderFolder)
	    );
	  },
	  renderFolder: function renderFolder(folder) {
	    var documents = folder.documents;
	
	
	    return React.createElement(
	      'div',
	      { key: folder.path, className: 'class-browser__category' },
	      React.createElement(
	        'h3',
	        { className: 'class-browser__category-name' },
	        folder.title === '.' ? '/' : folder.title
	      ),
	      React.createElement(
	        'div',
	        null,
	        documents.map(this.renderArticle)
	      )
	    );
	  },
	  renderArticle: function renderArticle(documentNode) {
	    var article = documentNode.properties;
	    var isActive = this.props.documentNode === documentNode || this.props.expanded;
	    var title = article.title || '';
	
	    if (this.state.groupByFolder && article.folderTitle !== ROOT_FOLDER_ID && article.folderTitle !== '.') {
	
	      if (title.indexOf(article.folderTitle + '/') === 0) {
	        title = title.substr(article.folderTitle.length + 1 /* '/' */);
	      }
	    }
	
	    return React.createElement(
	      'div',
	      { key: documentNode.uid },
	      React.createElement(
	        Link,
	        { to: documentNode, className: 'class-browser__entry-link' },
	        article.plainTitle,
	        documentNode.meta.gitStats && React.createElement(HotItemIndicator, { timestamp: documentNode.meta.gitStats.lastCommittedAt })
	      ),
	      isActive && !this.props.flat && this.renderTOC(documentNode)
	    );
	  },
	  renderTOC: function renderTOC(documentNode) {
	    return React.createElement(ArticleTOC, { documentNode: documentNode });
	  }
	});
	
	function FolderHierarchy(namespaceNode) {
	  var _require2 = __webpack_require__(12),
	      assign = _require2.assign,
	      findWhere = _require2.findWhere,
	      sortBy = _require2.sortBy;
	
	  var strHumanize = __webpack_require__(13);
	  var config = namespaceNode.config,
	      documents = namespaceNode.documents;
	
	  var folders = {};
	
	  sortBy(documents, 'title').forEach(function (documentNode) {
	    var folderPath = documentNode.properties.folder;
	
	    if (!(folderPath in folders)) {
	      folders[folderPath] = createFolderConfig(folderPath);
	    }
	
	    folders[folderPath].documents.push(documentNode);
	  });
	
	  for (var folderPath in folders) {
	    var folder = folders[folderPath];
	
	    if (folder.series) {
	      folder.documents = sortBy(folder.documents, 'properties.fileName');
	    }
	
	    // README always comes first
	    folder.documents = sortBy(folder.documents, function (a) {
	      if (a.properties.fileName === 'README') {
	        return -1;
	      } else {
	        return 1;
	      }
	    });
	  }
	
	  // TODO: can we please do this at compile-time instead??
	  //
	  // no we can't, zip it
	  function createFolderConfig(folderPath) {
	    var folderConfig = findWhere(config.folders, { path: folderPath });
	    var folder = assign({}, folderConfig, {
	      path: folderPath,
	      documents: []
	    });
	
	    // generate a title
	    if (!folder.title) {
	      if (config.fullFolderTitles) {
	        folder.title = folderPath.replace(config.commonPrefix, '').split('/').map(strHumanize).join(config.fullFolderTitleDelimiter);
	      } else {
	        var fragments = folderPath.split('/');
	        folder.title = strHumanize(fragments[fragments.length - 1]);
	      }
	    }
	
	    return folder;
	  }
	
	  return sortBy(Object.keys(folders).map(function (x) {
	    return folders[x];
	  }), 'title');
	}
	
	module.exports = Browser;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Link"];

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/HotItemIndicator"];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	"use strict";
	
	exports.SORT_ASC = "asc";
	exports.SORT_DESC = "desc";
	
	exports.QUERY_ON = "1";
	exports.QUERY_OFF = undefined;
	
	exports.KC_RETURN = 13;
	exports.KC_K = 75;
	exports.KC_ESCAPE = 27;
	
	exports.AVAILABLE_SCHEMES = ['plain', 'steel', 'solarized--light', 'solarized--dark'];
	
	exports.AVAILABLE_SCHEME_NAMES = ['Light', 'Steel', 'Solarized (light)', 'Solarized (dark)'];
	
	exports.AVAILABLE_LAYOUTS = ['single-page', 'multi-page'];
	
	exports.DEFAULT_SCHEME = 'plain';
	
	exports.CFG_COLOR_SCHEME = 'colorScheme';
	exports.CFG_SYNTAX_HIGHLIGHTING = 'highlightingEnabled';
	exports.CFG_SIDEBAR_WIDTH = 'sidebarWidth';
	exports.MIN_SIDEBAR_WIDTH = 160;
	exports.INITIAL_SIDEBAR_WIDTH = 240;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var React = __webpack_require__(3);
	var Link = __webpack_require__(5);
	var Icon = __webpack_require__(9);
	var classSet = __webpack_require__(10);
	var SectionTree = __webpack_require__(11);
	
	var _require = __webpack_require__(12),
	    assign = _require.assign;
	
	var ArticleTOC = React.createClass({
	  displayName: 'ArticleTOC',
	
	  propTypes: {
	    documentNode: React.PropTypes.object,
	    documentEntityNode: React.PropTypes.object,
	    flat: React.PropTypes.bool,
	    grouped: React.PropTypes.bool
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      collapsed: {}
	    };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      flat: false
	    };
	  },
	  render: function render() {
	    var sections = SectionTree(this.props.documentNode);
	    var rootSections = sections.filter(function (x) {
	      return x.root;
	    });
	
	    if (!rootSections.length) {
	      return null;
	    }
	
	    if (this.props.grouped) {
	      return React.createElement(
	        'ul',
	        { className: 'markdown-toc markdown-toc--flat' },
	        this.renderNodeInBranch(sections, rootSections[0].node)
	      );
	    }
	
	    return React.createElement(
	      'div',
	      { className: 'markdown-toc' },
	      rootSections.map(this.renderTree.bind(null, sections))
	    );
	  },
	  renderTree: function renderTree(tree, branch) {
	    if (!branch.children.length) {
	      return null;
	    }
	
	    return React.createElement(
	      'ul',
	      {
	        key: branch.node.uid,
	        className: classSet("markdown-toc", {
	          "markdown-toc--flat": this.props.flat && branch.root
	        })
	      },
	      branch.children.map(this.renderNodeInBranch.bind(null, tree))
	    );
	  },
	  renderNodeInBranch: function renderNodeInBranch(tree, node) {
	    var children = tree.filter(function (x) {
	      return x.node.uid === node.uid;
	    })[0];
	    var collapsed = this.state.collapsed[node.uid];
	
	    return React.createElement(
	      'li',
	      {
	        key: node.uid,
	        className: classSet({
	          'markdown-toc__entry': true,
	          'markdown-toc__entry--collapsible': !!children,
	          'markdown-toc__entry--collapsed': collapsed
	        })
	      },
	      children && React.createElement(Icon, {
	        className: classSet({
	          "icon-arrow-down": collapsed,
	          "icon-arrow-right": !collapsed
	        }),
	        onClick: this.collapse.bind(null, node.uid)
	      }),
	      React.createElement(Link, { to: node, children: node.properties.text }),
	      children && !collapsed && this.renderTree(tree, children)
	    );
	  },
	  collapse: function collapse(key) {
	    this.setState({
	      collapsed: assign({}, this.state.collapsed, _defineProperty({}, key, !this.state.collapsed[key]))
	    });
	  }
	});
	
	module.exports = ArticleTOC;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Icon"];

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["utils/classSet"];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	"use strict";
	
	module.exports = function (documentNode) {
	  var tree = documentNode.entities.reduce(function (map, x, i) {
	    var myLevel = x.properties.level;
	    var parents = documentNode.entities.slice(0, i).filter(function (y) {
	      return y.properties.level < myLevel;
	    });
	    var closestParent = void 0;
	
	    parents.forEach(function (y) {
	      if (!closestParent || y.properties.level >= closestParent.properties.level) {
	        closestParent = y;
	      }
	    });
	
	    if (closestParent) {
	      map[closestParent.uid] = map[closestParent.uid] || {
	        node: closestParent,
	        children: []
	      };
	
	      map[closestParent.uid].children.push(x);
	    } else {
	      map[x.uid] = map[x.uid] || { root: true, node: x, children: [] };
	    }
	
	    return map;
	  }, {});
	
	  return Object.keys(tree).map(function (x) {
	    return tree[x];
	  }).sort(function (a, b) {
	    if (a.node.properties.level > b.node.properties.level) {
	      return 1;
	    } else {
	      return -1;
	    }
	  });
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["lodash"];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict';
	
	module.exports = function (str) {
	  return str.replace(/[_-]/g, ' ').replace(/(\w+)/g, function (match) {
	    return match.charAt(0).toUpperCase() + match.slice(1);
	  });
	};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	var Article = __webpack_require__(15);
	var object = React.PropTypes.object;
	var PropTypes = React.PropTypes;
	
	
	module.exports = React.createClass({
	  displayName: 'Markdown::DocumentOutlet',
	
	  propTypes: {
	    documentNode: object,
	    $outletOptions: PropTypes.shape({
	      className: PropTypes.string
	    })
	  },
	
	  render: function render() {
	    if (!this.props.documentNode || !this.props.documentNode.properties) {
	      return null;
	    }
	
	    return React.createElement(Article, _extends({}, this.props, this.props.$outletOptions));
	  }
	});

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var HighlightedText = __webpack_require__(16);
	var Disqus = __webpack_require__(17);
	
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object,
	    oneOfType = _React$PropTypes.oneOfType,
	    bool = _React$PropTypes.bool;
	
	
	var Article = React.createClass({
	  displayName: 'Article',
	
	  contextTypes: {
	    location: shape({ pathname: string }).isRequired,
	    config: shape({
	      disqus: oneOfType([bool, object])
	    }).isRequired
	  },
	
	  propTypes: {
	    className: string,
	    documentNode: shape({
	      source: string
	    }).isRequired
	  },
	
	  render: function render() {
	    var article = this.props.documentNode.properties;
	
	    return React.createElement(
	      'div',
	      { className: this.props.className },
	      React.createElement(
	        HighlightedText,
	        null,
	        article.source
	      ),
	      this.context.config.disqus && React.createElement(Disqus, {
	        identifier: article.id,
	        title: article.title,
	        pathname: this.context.location.pathname,
	        config: this.context.config.disqus
	      })
	    );
	  }
	});
	
	module.exports = Article;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/HighlightedText"];

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Disqus"];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	var ArticleTOC = __webpack_require__(8);
	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    bool = _React$PropTypes.bool,
	    shape = _React$PropTypes.shape;
	
	
	module.exports = React.createClass({
	  displayName: 'Markdown::DocumentTOCOutlet',
	
	  propTypes: {
	    documentEntityNode: object,
	    documentNode: object.isRequired,
	    namespaceNode: object.isRequired,
	    $outletOptions: shape({
	      grouped: bool
	    })
	  },
	
	  render: function render() {
	    if (!this.props.documentNode) {
	      return null;
	    }
	
	    return React.createElement(ArticleTOC, _extends({ flat: true, grouped: this.props.$outletOptions.grouped }, this.props));
	  }
	});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string,
	    number = _React$PropTypes.number;
	
	var WPM = 275; // https://help.medium.com/hc/en-us/articles/214991667-Read-time
	
	module.exports = React.createClass({
	  displayName: 'Markdown::InspectorOutlet',
	
	  propTypes: {
	    documentNode: shape({
	      properties: shape({
	        title: string,
	        wordCount: number
	      })
	    })
	  },
	
	  render: function render() {
	    var doc = this.props.documentNode.properties;
	    var expectedReadTime = Math.ceil(doc.wordCount / WPM);
	
	    return React.createElement(
	      'p',
	      null,
	      doc.title,
	      ' ',
	      React.createElement(
	        'small',
	        null,
	        '(',
	        expectedReadTime,
	        ' min read)'
	      )
	    );
	  }
	});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDA1ZTk2YzgxZmU2ZTE2YjQ0NzIiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvb3V0bGV0cy9Ccm93c2VyT3V0bGV0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcInJlYWN0XFxcIl1cIiIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1tYXJrZG93bi91aS9jb21wb25lbnRzL0Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9MaW5rXFxcIl1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0hvdEl0ZW1JbmRpY2F0b3JcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtaHRtbC1zZXJpYWxpemVyL3VpL3NoYXJlZC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvY29tcG9uZW50cy9BcnRpY2xlVE9DLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSWNvblxcXCJdXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwidXRpbHMvY2xhc3NTZXRcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL1NlY3Rpb25UcmVlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImxvZGFzaFxcXCJdXCIiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vbGliL3V0aWxzL3N0ckh1bWFuaXplLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL291dGxldHMvRG9jdW1lbnRPdXRsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvY29tcG9uZW50cy9BcnRpY2xlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSGlnaGxpZ2h0ZWRUZXh0XFxcIl1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0Rpc3F1c1xcXCJdXCIiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvb3V0bGV0cy9Eb2N1bWVudFRPQ091dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1tYXJrZG93bi91aS9vdXRsZXRzL0luc3BlY3Rvck91dGxldC5qcyJdLCJuYW1lcyI6WyJCcm93c2VyT3V0bGV0IiwicmVxdWlyZSIsIkRvY3VtZW50T3V0bGV0IiwiRG9jdW1lbnRUT0NPdXRsZXQiLCJJbnNwZWN0b3JPdXRsZXQiLCJtb2R1bGUiLCJleHBvcnRzIiwibmFtZSIsIm91dGxldHMiLCJvdXRsZXRPY2N1cGFudHMiLCJjb21wb25lbnQiLCJSZWFjdCIsIkJyb3dzZXIiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJzaGFwZSIsImJvb2wiLCJjcmVhdGVDbGFzcyIsImRpc3BsYXlOYW1lIiwicHJvcFR5cGVzIiwibmFtZXNwYWNlTm9kZSIsIiRvdXRsZXRPcHRpb25zIiwiZmxhdCIsInJlbmRlciIsInByb3BzIiwiTGluayIsIkhvdEl0ZW1JbmRpY2F0b3IiLCJST09UX0ZPTERFUl9JRCIsIkFydGljbGVUT0MiLCJkb2N1bWVudE5vZGUiLCJkb2N1bWVudEVudGl0eU5vZGUiLCJleHBhbmRlZCIsImdldEluaXRpYWxTdGF0ZSIsImdyb3VwQnlGb2xkZXIiLCJBcnJheSIsImlzQXJyYXkiLCJjb25maWciLCJmb2xkZXJzIiwibGVuZ3RoIiwiRm9sZGVySGllcmFyY2h5IiwibWFwIiwicmVuZGVyRm9sZGVyIiwiZG9jdW1lbnRzIiwicmVuZGVyQXJ0aWNsZSIsInJlbmRlckZvbGRlcnMiLCJmb2xkZXIiLCJwYXRoIiwidGl0bGUiLCJhcnRpY2xlIiwicHJvcGVydGllcyIsImlzQWN0aXZlIiwic3RhdGUiLCJmb2xkZXJUaXRsZSIsImluZGV4T2YiLCJzdWJzdHIiLCJ1aWQiLCJwbGFpblRpdGxlIiwibWV0YSIsImdpdFN0YXRzIiwibGFzdENvbW1pdHRlZEF0IiwicmVuZGVyVE9DIiwiYXNzaWduIiwiZmluZFdoZXJlIiwic29ydEJ5Iiwic3RySHVtYW5pemUiLCJmb3JFYWNoIiwiZm9sZGVyUGF0aCIsImNyZWF0ZUZvbGRlckNvbmZpZyIsInB1c2giLCJzZXJpZXMiLCJhIiwiZmlsZU5hbWUiLCJmb2xkZXJDb25maWciLCJmdWxsRm9sZGVyVGl0bGVzIiwicmVwbGFjZSIsImNvbW1vblByZWZpeCIsInNwbGl0Iiwiam9pbiIsImZ1bGxGb2xkZXJUaXRsZURlbGltaXRlciIsImZyYWdtZW50cyIsIk9iamVjdCIsImtleXMiLCJ4IiwiU09SVF9BU0MiLCJTT1JUX0RFU0MiLCJRVUVSWV9PTiIsIlFVRVJZX09GRiIsInVuZGVmaW5lZCIsIktDX1JFVFVSTiIsIktDX0siLCJLQ19FU0NBUEUiLCJBVkFJTEFCTEVfU0NIRU1FUyIsIkFWQUlMQUJMRV9TQ0hFTUVfTkFNRVMiLCJBVkFJTEFCTEVfTEFZT1VUUyIsIkRFRkFVTFRfU0NIRU1FIiwiQ0ZHX0NPTE9SX1NDSEVNRSIsIkNGR19TWU5UQVhfSElHSExJR0hUSU5HIiwiQ0ZHX1NJREVCQVJfV0lEVEgiLCJNSU5fU0lERUJBUl9XSURUSCIsIklOSVRJQUxfU0lERUJBUl9XSURUSCIsIkljb24iLCJjbGFzc1NldCIsIlNlY3Rpb25UcmVlIiwiZ3JvdXBlZCIsImNvbGxhcHNlZCIsImdldERlZmF1bHRQcm9wcyIsInNlY3Rpb25zIiwicm9vdFNlY3Rpb25zIiwiZmlsdGVyIiwicm9vdCIsInJlbmRlck5vZGVJbkJyYW5jaCIsIm5vZGUiLCJyZW5kZXJUcmVlIiwiYmluZCIsInRyZWUiLCJicmFuY2giLCJjaGlsZHJlbiIsImNvbGxhcHNlIiwidGV4dCIsImtleSIsInNldFN0YXRlIiwiZW50aXRpZXMiLCJyZWR1Y2UiLCJpIiwibXlMZXZlbCIsImxldmVsIiwicGFyZW50cyIsInNsaWNlIiwieSIsImNsb3Nlc3RQYXJlbnQiLCJzb3J0IiwiYiIsInN0ciIsIm1hdGNoIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJBcnRpY2xlIiwiY2xhc3NOYW1lIiwic3RyaW5nIiwiSGlnaGxpZ2h0ZWRUZXh0IiwiRGlzcXVzIiwib25lT2ZUeXBlIiwiY29udGV4dFR5cGVzIiwibG9jYXRpb24iLCJwYXRobmFtZSIsImlzUmVxdWlyZWQiLCJkaXNxdXMiLCJzb3VyY2UiLCJjb250ZXh0IiwiaWQiLCJudW1iZXIiLCJXUE0iLCJ3b3JkQ291bnQiLCJkb2MiLCJleHBlY3RlZFJlYWRUaW1lIiwiTWF0aCIsImNlaWwiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQSxLQUFNQSxnQkFBZ0IsbUJBQUFDLENBQVEsQ0FBUixDQUF0QjtBQUNBLEtBQU1DLGlCQUFpQixtQkFBQUQsQ0FBUSxFQUFSLENBQXZCO0FBQ0EsS0FBTUUs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QU1NLFdBQU4sQ0FBa0I7QUFDakNDLGdCQUFhLDJCQURvQjs7QUFHakNDLGNBQVc7QUFDVFUsbUJBQWNkLE1BQU07QUFDbEJrQyxtQkFBWWxDLE1BQU07QUFDaEJnQyxnQkFBTzJGLE1BRFM7QUFFaEJjLG9CQUFXRjtBQUZLLFFBQU47QUFETSxNQUFOO0FBREwsSUFIc0I7O0FBWWpDL0gsU0FaaUMsb0JBWXhCO0FBQ1AsU0FBTWtJLE1BQU0sS0FBS2pJLEtBQUwsQ0FBV0ssWUFBWCxDQUF3Qm9CLFVBQXBDO0FBQ0EsU0FBTXlHLG1CQUFtQkMsS0FBS0MsSUFBTCxDQUFVSCxJQUFJRCxTQUFKLEdBQWdCRCxHQUExQixDQUF6Qjs7QUFFQSxZQUNFO0FBQUE7QUFBQTtBQUNHRSxXQUFJMUcsS0FEUDtBQUFBO0FBQ2M7QUFBQTtBQUFBO0FBQUE7QUFBUzJHLHlCQUFUO0FBQUE7QUFBQTtBQURkLE1BREY7QUFLRDtBQXJCZ0MsRUFBbEIsQ0FBakIsQyIsImZpbGUiOiJtZWdhZG9jLXBsdWdpbi1tYXJrZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQwNWU5NmM4MWZlNmUxNmI0NDcyIiwiY29uc3QgQnJvd3Nlck91dGxldCA9IHJlcXVpcmUoJy4vb3V0bGV0cy9Ccm93c2VyT3V0bGV0Jyk7XG5jb25zdCBEb2N1bWVudE91dGxldCA9IHJlcXVpcmUoJy4vb3V0bGV0cy9Eb2N1bWVudE91dGxldCcpO1xuY29uc3QgRG9jdW1lbnRUT0NPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvRG9jdW1lbnRUT0NPdXRsZXQnKTtcbmNvbnN0IEluc3BlY3Rvck91dGxldCA9IHJlcXVpcmUoJy4vb3V0bGV0cy9JbnNwZWN0b3JPdXRsZXQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG5hbWU6ICdtZWdhZG9jLXBsdWdpbi1sdWEnLFxuICBvdXRsZXRzOiBbXG4gICAgJ01hcmtkb3duOjpEb2N1bWVudCcsXG4gICAgJ01hcmtkb3duOjpEb2N1bWVudFRPQycsXG4gICAgJ01hcmtkb3duOjpCcm93c2VyJyxcbiAgXSxcblxuICBvdXRsZXRPY2N1cGFudHM6IFtcbiAgICB7IG5hbWU6ICdNYXJrZG93bjo6RG9jdW1lbnQnLCBjb21wb25lbnQ6IERvY3VtZW50T3V0bGV0LCB9LFxuICAgIHsgbmFtZTogJ01hcmtkb3duOjpEb2N1bWVudFRPQycsIGNvbXBvbmVudDogRG9jdW1lbnRUT0NPdXRsZXQsIH0sXG4gICAgeyBuYW1lOiAnTWFya2Rvd246OkJyb3dzZXInLCBjb21wb25lbnQ6IEJyb3dzZXJPdXRsZXQsIH0sXG4gICAgeyBuYW1lOiAnQ29yZTo6SW5zcGVjdG9yJywgY29tcG9uZW50OiBJbnNwZWN0b3JPdXRsZXQsIH0sXG4gIF1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvaW5kZXguanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBCcm93c2VyID0gcmVxdWlyZSgnLi4vY29tcG9uZW50cy9Ccm93c2VyJylcbmNvbnN0IHsgb2JqZWN0LCBzaGFwZSwgYm9vbCwgfSA9IFJlYWN0LlByb3BUeXBlcztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTWFya2Rvd246OkJyb3dzZXJPdXRsZXQnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG5hbWVzcGFjZU5vZGU6IG9iamVjdCxcbiAgICAkb3V0bGV0T3B0aW9uczogc2hhcGUoe1xuICAgICAgZmxhdDogYm9vbCxcbiAgICB9KVxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJyb3dzZXIgey4uLnRoaXMucHJvcHN9IGZsYXQ9e3RoaXMucHJvcHMuJG91dGxldE9wdGlvbnMuZmxhdH0gLz5cbiAgICApO1xuICB9XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1tYXJrZG93bi91aS9vdXRsZXRzL0Jyb3dzZXJPdXRsZXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJyZWFjdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcInJlYWN0XFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IExpbmsgPSByZXF1aXJlKCdjb21wb25lbnRzL0xpbmsnKTtcbmNvbnN0IEhvdEl0ZW1JbmRpY2F0b3IgPSByZXF1aXJlKCdjb21wb25lbnRzL0hvdEl0ZW1JbmRpY2F0b3InKTtcbmNvbnN0IHsgUk9PVF9GT0xERVJfSUQgfSA9IHJlcXVpcmUoJ2NvbnN0YW50cycpO1xuY29uc3QgQXJ0aWNsZVRPQyA9IHJlcXVpcmUoJy4vQXJ0aWNsZVRPQycpO1xuY29uc3QgeyBvYmplY3QgfSA9IFJlYWN0LlByb3BUeXBlcztcblxudmFyIEJyb3dzZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIG5hbWVzcGFjZU5vZGU6IG9iamVjdCxcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgICBkb2N1bWVudEVudGl0eU5vZGU6IG9iamVjdCxcbiAgICBleHBhbmRlZDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgZmxhdDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBncm91cEJ5Rm9sZGVyOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbmFtZXNwYWNlTm9kZSB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8bmF2IGNsYXNzTmFtZT1cIm1lZ2Fkb2MtZG9jdW1lbnQtYnJvd3NlciBtYXJrZG93bi1icm93c2VyXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAge0FycmF5LmlzQXJyYXkobmFtZXNwYWNlTm9kZS5jb25maWcuZm9sZGVycykgJiYgbmFtZXNwYWNlTm9kZS5jb25maWcuZm9sZGVycy5sZW5ndGggPiAwID9cbiAgICAgICAgICAgIEZvbGRlckhpZXJhcmNoeShuYW1lc3BhY2VOb2RlKS5tYXAodGhpcy5yZW5kZXJGb2xkZXIpIDpcbiAgICAgICAgICAgIG5hbWVzcGFjZU5vZGUuZG9jdW1lbnRzLm1hcCh0aGlzLnJlbmRlckFydGljbGUpXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyRm9sZGVycyhmb2xkZXJzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHtmb2xkZXJzLm1hcCh0aGlzLnJlbmRlckZvbGRlcil9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckZvbGRlcihmb2xkZXIpIHtcbiAgICBjb25zdCB7IGRvY3VtZW50cyB9ID0gZm9sZGVyO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXtmb2xkZXIucGF0aH0gY2xhc3NOYW1lPVwiY2xhc3MtYnJvd3Nlcl9fY2F0ZWdvcnlcIj5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNsYXNzLWJyb3dzZXJfX2NhdGVnb3J5LW5hbWVcIj5cbiAgICAgICAgICB7Zm9sZGVyLnRpdGxlID09PSAnLicgPyAnLycgOiBmb2xkZXIudGl0bGV9XG4gICAgICAgIDwvaDM+XG5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7ZG9jdW1lbnRzLm1hcCh0aGlzLnJlbmRlckFydGljbGUpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQXJ0aWNsZShkb2N1bWVudE5vZGUpIHtcbiAgICBjb25zdCBhcnRpY2xlID0gZG9jdW1lbnROb2RlLnByb3BlcnRpZXM7XG4gICAgY29uc3QgaXNBY3RpdmUgPSB0aGlzLnByb3BzLmRvY3VtZW50Tm9kZSA9PT0gZG9jdW1lbnROb2RlIHx8IHRoaXMucHJvcHMuZXhwYW5kZWQ7XG4gICAgbGV0IHRpdGxlID0gYXJ0aWNsZS50aXRsZSB8fCAnJztcblxuICAgIGlmICh0aGlzLnN0YXRlLmdyb3VwQnlGb2xkZXIgJiZcbiAgICAgIGFydGljbGUuZm9sZGVyVGl0bGUgIT09IFJPT1RfRk9MREVSX0lEICYmXG4gICAgICBhcnRpY2xlLmZvbGRlclRpdGxlICE9PSAnLicpIHtcblxuICAgICAgaWYgKHRpdGxlLmluZGV4T2YoYXJ0aWNsZS5mb2xkZXJUaXRsZSArICcvJykgPT09IDApIHtcbiAgICAgICAgdGl0bGUgPSB0aXRsZS5zdWJzdHIoYXJ0aWNsZS5mb2xkZXJUaXRsZS5sZW5ndGggKyAxIC8qICcvJyAqLyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXtkb2N1bWVudE5vZGUudWlkfT5cbiAgICAgICAgPExpbmsgdG89e2RvY3VtZW50Tm9kZX0gY2xhc3NOYW1lPVwiY2xhc3MtYnJvd3Nlcl9fZW50cnktbGlua1wiPlxuICAgICAgICAgIHthcnRpY2xlLnBsYWluVGl0bGV9XG5cbiAgICAgICAgICB7ZG9jdW1lbnROb2RlLm1ldGEuZ2l0U3RhdHMgJiYgKFxuICAgICAgICAgICAgPEhvdEl0ZW1JbmRpY2F0b3IgdGltZXN0YW1wPXtkb2N1bWVudE5vZGUubWV0YS5naXRTdGF0cy5sYXN0Q29tbWl0dGVkQXR9IC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIHtpc0FjdGl2ZSAmJiAhdGhpcy5wcm9wcy5mbGF0ICYmIHRoaXMucmVuZGVyVE9DKGRvY3VtZW50Tm9kZSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclRPQyhkb2N1bWVudE5vZGUpIHtcbiAgICByZXR1cm4gPEFydGljbGVUT0MgZG9jdW1lbnROb2RlPXtkb2N1bWVudE5vZGV9IC8+XG4gIH0sXG5cbn0pO1xuXG5mdW5jdGlvbiBGb2xkZXJIaWVyYXJjaHkobmFtZXNwYWNlTm9kZSkge1xuICBjb25zdCB7IGFzc2lnbiwgZmluZFdoZXJlLCBzb3J0QnkgfSA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuICBjb25zdCBzdHJIdW1hbml6ZSA9IHJlcXVpcmUoJy4uLy4uL2xpYi91dGlscy9zdHJIdW1hbml6ZScpO1xuICBjb25zdCB7IGNvbmZpZywgZG9jdW1lbnRzIH0gPSBuYW1lc3BhY2VOb2RlO1xuICBjb25zdCBmb2xkZXJzID0ge307XG5cbiAgc29ydEJ5KGRvY3VtZW50cywgJ3RpdGxlJykuZm9yRWFjaChkb2N1bWVudE5vZGUgPT4ge1xuICAgIGNvbnN0IGZvbGRlclBhdGggPSBkb2N1bWVudE5vZGUucHJvcGVydGllcy5mb2xkZXI7XG5cbiAgICBpZiAoIShmb2xkZXJQYXRoIGluIGZvbGRlcnMpKSB7XG4gICAgICBmb2xkZXJzW2ZvbGRlclBhdGhdID0gY3JlYXRlRm9sZGVyQ29uZmlnKGZvbGRlclBhdGgpO1xuICAgIH1cblxuICAgIGZvbGRlcnNbZm9sZGVyUGF0aF0uZG9jdW1lbnRzLnB1c2goZG9jdW1lbnROb2RlKTtcbiAgfSk7XG5cbiAgZm9yIChsZXQgZm9sZGVyUGF0aCBpbiBmb2xkZXJzKSB7XG4gICAgY29uc3QgZm9sZGVyID0gZm9sZGVyc1tmb2xkZXJQYXRoXTtcblxuICAgIGlmIChmb2xkZXIuc2VyaWVzKSB7XG4gICAgICBmb2xkZXIuZG9jdW1lbnRzID0gc29ydEJ5KGZvbGRlci5kb2N1bWVudHMsICdwcm9wZXJ0aWVzLmZpbGVOYW1lJyk7XG4gICAgfVxuXG4gICAgLy8gUkVBRE1FIGFsd2F5cyBjb21lcyBmaXJzdFxuICAgIGZvbGRlci5kb2N1bWVudHMgPSBzb3J0QnkoZm9sZGVyLmRvY3VtZW50cywgZnVuY3Rpb24oYSkge1xuICAgICAgaWYgKGEucHJvcGVydGllcy5maWxlTmFtZSA9PT0gJ1JFQURNRScpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gVE9ETzogY2FuIHdlIHBsZWFzZSBkbyB0aGlzIGF0IGNvbXBpbGUtdGltZSBpbnN0ZWFkPz9cbiAgLy9cbiAgLy8gbm8gd2UgY2FuJ3QsIHppcCBpdFxuICBmdW5jdGlvbiBjcmVhdGVGb2xkZXJDb25maWcoZm9sZGVyUGF0aCkge1xuICAgIGNvbnN0IGZvbGRlckNvbmZpZyA9IGZpbmRXaGVyZShjb25maWcuZm9sZGVycywgeyBwYXRoOiBmb2xkZXJQYXRoIH0pO1xuICAgIGNvbnN0IGZvbGRlciA9IGFzc2lnbih7fSwgZm9sZGVyQ29uZmlnLCB7XG4gICAgICBwYXRoOiBmb2xkZXJQYXRoLFxuICAgICAgZG9jdW1lbnRzOiBbXVxuICAgIH0pO1xuXG4gICAgLy8gZ2VuZXJhdGUgYSB0aXRsZVxuICAgIGlmICghZm9sZGVyLnRpdGxlKSB7XG4gICAgICBpZiAoY29uZmlnLmZ1bGxGb2xkZXJUaXRsZXMpIHtcbiAgICAgICAgZm9sZGVyLnRpdGxlID0gZm9sZGVyUGF0aFxuICAgICAgICAgIC5yZXBsYWNlKGNvbmZpZy5jb21tb25QcmVmaXgsICcnKVxuICAgICAgICAgIC5zcGxpdCgnLycpXG4gICAgICAgICAgLm1hcChzdHJIdW1hbml6ZSlcbiAgICAgICAgICAuam9pbihjb25maWcuZnVsbEZvbGRlclRpdGxlRGVsaW1pdGVyKVxuICAgICAgICA7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgZnJhZ21lbnRzID0gZm9sZGVyUGF0aC5zcGxpdCgnLycpO1xuICAgICAgICBmb2xkZXIudGl0bGUgPSBzdHJIdW1hbml6ZShmcmFnbWVudHNbZnJhZ21lbnRzLmxlbmd0aC0xXSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZvbGRlcjtcbiAgfVxuXG4gIHJldHVybiBzb3J0QnkoT2JqZWN0LmtleXMoZm9sZGVycykubWFwKHggPT4gZm9sZGVyc1t4XSksICd0aXRsZScpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEJyb3dzZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvY29tcG9uZW50cy9Ccm93c2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9MaW5rXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9MaW5rXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJjb21wb25lbnRzL0hvdEl0ZW1JbmRpY2F0b3JcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0hvdEl0ZW1JbmRpY2F0b3JcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMuU09SVF9BU0MgPSBcImFzY1wiO1xuZXhwb3J0cy5TT1JUX0RFU0MgPSBcImRlc2NcIjtcblxuZXhwb3J0cy5RVUVSWV9PTiA9IFwiMVwiO1xuZXhwb3J0cy5RVUVSWV9PRkYgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydHMuS0NfUkVUVVJOID0gMTM7XG5leHBvcnRzLktDX0sgPSA3NTtcbmV4cG9ydHMuS0NfRVNDQVBFID0gMjc7XG5cbmV4cG9ydHMuQVZBSUxBQkxFX1NDSEVNRVMgPSBbXG4gICdwbGFpbicsXG4gICdzdGVlbCcsXG4gICdzb2xhcml6ZWQtLWxpZ2h0JyxcbiAgJ3NvbGFyaXplZC0tZGFyaydcbl07XG5cbmV4cG9ydHMuQVZBSUxBQkxFX1NDSEVNRV9OQU1FUyA9IFtcbiAgJ0xpZ2h0JyxcbiAgJ1N0ZWVsJyxcbiAgJ1NvbGFyaXplZCAobGlnaHQpJyxcbiAgJ1NvbGFyaXplZCAoZGFyayknXG5dO1xuXG5leHBvcnRzLkFWQUlMQUJMRV9MQVlPVVRTID0gW1xuICAnc2luZ2xlLXBhZ2UnLFxuICAnbXVsdGktcGFnZScsXG5dO1xuXG5leHBvcnRzLkRFRkFVTFRfU0NIRU1FID0gJ3BsYWluJztcblxuZXhwb3J0cy5DRkdfQ09MT1JfU0NIRU1FID0gJ2NvbG9yU2NoZW1lJztcbmV4cG9ydHMuQ0ZHX1NZTlRBWF9ISUdITElHSFRJTkcgPSAnaGlnaGxpZ2h0aW5nRW5hYmxlZCc7XG5leHBvcnRzLkNGR19TSURFQkFSX1dJRFRIID0gJ3NpZGViYXJXaWR0aCc7XG5leHBvcnRzLk1JTl9TSURFQkFSX1dJRFRIID0gMTYwO1xuZXhwb3J0cy5JTklUSUFMX1NJREVCQVJfV0lEVEggPSAyNDA7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1odG1sLXNlcmlhbGl6ZXIvdWkvc2hhcmVkL2NvbnN0YW50cy5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgTGluayA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvTGluaycpO1xuY29uc3QgSWNvbiA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSWNvbicpO1xuY29uc3QgY2xhc3NTZXQgPSByZXF1aXJlKCd1dGlscy9jbGFzc1NldCcpO1xuY29uc3QgU2VjdGlvblRyZWUgPSByZXF1aXJlKCcuLi9TZWN0aW9uVHJlZScpO1xuY29uc3QgeyBhc3NpZ24gfSA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xuXG5jb25zdCBBcnRpY2xlVE9DID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudE5vZGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgZG9jdW1lbnRFbnRpdHlOb2RlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGZsYXQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGdyb3VwZWQ6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICB9LFxuXG4gIGdldEluaXRpYWxTdGF0ZSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY29sbGFwc2VkOiB7fVxuICAgIH07XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBmbGF0OiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gU2VjdGlvblRyZWUodGhpcy5wcm9wcy5kb2N1bWVudE5vZGUpO1xuICAgIGNvbnN0IHJvb3RTZWN0aW9ucyA9IHNlY3Rpb25zLmZpbHRlcih4ID0+IHgucm9vdCk7XG5cbiAgICBpZiAoIXJvb3RTZWN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByb3BzLmdyb3VwZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJtYXJrZG93bi10b2MgbWFya2Rvd24tdG9jLS1mbGF0XCI+XG4gICAgICAgICAge3RoaXMucmVuZGVyTm9kZUluQnJhbmNoKHNlY3Rpb25zLCByb290U2VjdGlvbnNbMF0ubm9kZSl9XG4gICAgICAgIDwvdWw+XG4gICAgICApXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFya2Rvd24tdG9jXCI+XG4gICAgICAgIHtyb290U2VjdGlvbnMubWFwKHRoaXMucmVuZGVyVHJlZS5iaW5kKG51bGwsIHNlY3Rpb25zKSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclRyZWUodHJlZSwgYnJhbmNoKSB7XG4gICAgaWYgKCFicmFuY2guY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsXG4gICAgICAgIGtleT17YnJhbmNoLm5vZGUudWlkfVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0KFwibWFya2Rvd24tdG9jXCIsIHtcbiAgICAgICAgICBcIm1hcmtkb3duLXRvYy0tZmxhdFwiOiB0aGlzLnByb3BzLmZsYXQgJiYgYnJhbmNoLnJvb3RcbiAgICAgICAgfSl9XG4gICAgICA+XG4gICAgICAgIHticmFuY2guY2hpbGRyZW4ubWFwKHRoaXMucmVuZGVyTm9kZUluQnJhbmNoLmJpbmQobnVsbCwgdHJlZSkpfVxuICAgICAgPC91bD5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5vZGVJbkJyYW5jaCh0cmVlLCBub2RlKSB7XG4gICAgY29uc3QgY2hpbGRyZW4gPSB0cmVlLmZpbHRlcih4ID0+IHgubm9kZS51aWQgPT09IG5vZGUudWlkKVswXTtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLnN0YXRlLmNvbGxhcHNlZFtub2RlLnVpZF07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpXG4gICAgICAgIGtleT17bm9kZS51aWR9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXQoe1xuICAgICAgICAgICdtYXJrZG93bi10b2NfX2VudHJ5JzogdHJ1ZSxcbiAgICAgICAgICAnbWFya2Rvd24tdG9jX19lbnRyeS0tY29sbGFwc2libGUnOiAhIWNoaWxkcmVuLFxuICAgICAgICAgICdtYXJrZG93bi10b2NfX2VudHJ5LS1jb2xsYXBzZWQnOiBjb2xsYXBzZWQsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICB7Y2hpbGRyZW4gJiYgKFxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzU2V0KHtcbiAgICAgICAgICAgICAgXCJpY29uLWFycm93LWRvd25cIjogY29sbGFwc2VkLFxuICAgICAgICAgICAgICBcImljb24tYXJyb3ctcmlnaHRcIjogIWNvbGxhcHNlZCxcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgb25DbGljaz17dGhpcy5jb2xsYXBzZS5iaW5kKG51bGwsIG5vZGUudWlkKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIDxMaW5rIHRvPXtub2RlfSBjaGlsZHJlbj17bm9kZS5wcm9wZXJ0aWVzLnRleHR9IC8+XG5cbiAgICAgICAge2NoaWxkcmVuICYmICFjb2xsYXBzZWQgJiYgKHRoaXMucmVuZGVyVHJlZSh0cmVlLCBjaGlsZHJlbikpfVxuICAgICAgPC9saT5cbiAgICApXG4gIH0sXG5cbiAgY29sbGFwc2Uoa2V5KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBjb2xsYXBzZWQ6IGFzc2lnbih7fSwgdGhpcy5zdGF0ZS5jb2xsYXBzZWQsIHtcbiAgICAgICAgW2tleV06ICF0aGlzLnN0YXRlLmNvbGxhcHNlZFtrZXldXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcnRpY2xlVE9DO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL2NvbXBvbmVudHMvQXJ0aWNsZVRPQy5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvSWNvblwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSWNvblxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1widXRpbHMvY2xhc3NTZXRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJ1dGlscy9jbGFzc1NldFxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9jdW1lbnROb2RlKSB7XG4gIGNvbnN0IHRyZWUgPSBkb2N1bWVudE5vZGUuZW50aXRpZXMucmVkdWNlKGZ1bmN0aW9uKG1hcCwgeCwgaSkge1xuICAgIGNvbnN0IG15TGV2ZWwgPSB4LnByb3BlcnRpZXMubGV2ZWw7XG4gICAgY29uc3QgcGFyZW50cyA9IGRvY3VtZW50Tm9kZS5lbnRpdGllcy5zbGljZSgwLCBpKS5maWx0ZXIoeSA9PiB5LnByb3BlcnRpZXMubGV2ZWwgPCBteUxldmVsKTtcbiAgICBsZXQgY2xvc2VzdFBhcmVudDtcblxuICAgIHBhcmVudHMuZm9yRWFjaChmdW5jdGlvbih5KSB7XG4gICAgICBpZiAoIWNsb3Nlc3RQYXJlbnQgfHwgeS5wcm9wZXJ0aWVzLmxldmVsID49IGNsb3Nlc3RQYXJlbnQucHJvcGVydGllcy5sZXZlbCkge1xuICAgICAgICBjbG9zZXN0UGFyZW50ID0geTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChjbG9zZXN0UGFyZW50KSB7XG4gICAgICBtYXBbY2xvc2VzdFBhcmVudC51aWRdID0gbWFwW2Nsb3Nlc3RQYXJlbnQudWlkXSB8fCB7XG4gICAgICAgIG5vZGU6IGNsb3Nlc3RQYXJlbnQsXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgfTtcblxuICAgICAgbWFwW2Nsb3Nlc3RQYXJlbnQudWlkXS5jaGlsZHJlbi5wdXNoKHgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIG1hcFt4LnVpZF0gPSBtYXBbeC51aWRdIHx8IHsgcm9vdDogdHJ1ZSwgbm9kZTogeCwgY2hpbGRyZW46IFtdIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIG1hcDtcbiAgfSwge30pO1xuXG4gIHJldHVybiBPYmplY3Qua2V5cyh0cmVlKS5tYXAoeCA9PiB0cmVlW3hdKS5zb3J0KGZ1bmN0aW9uKGEsYikge1xuICAgIGlmIChhLm5vZGUucHJvcGVydGllcy5sZXZlbCA+IGIubm9kZS5wcm9wZXJ0aWVzLmxldmVsKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuICB9KTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL1NlY3Rpb25UcmVlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wibG9kYXNoXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwibG9kYXNoXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihzdHIpIHtcbiAgcmV0dXJuIHN0clxuICAgIC5yZXBsYWNlKC9bXy1dL2csICcgJylcbiAgICAucmVwbGFjZSgvKFxcdyspL2csIGZ1bmN0aW9uKG1hdGNoKSB7XG4gICAgICByZXR1cm4gbWF0Y2guY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBtYXRjaC5zbGljZSgxKTtcbiAgICB9KVxuICA7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL2xpYi91dGlscy9zdHJIdW1hbml6ZS5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IEFydGljbGUgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL0FydGljbGUnKVxuY29uc3QgeyBvYmplY3QgfSA9IFJlYWN0LlByb3BUeXBlcztcbmNvbnN0IHsgUHJvcFR5cGVzIH0gPSBSZWFjdDtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTWFya2Rvd246OkRvY3VtZW50T3V0bGV0JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgICAkb3V0bGV0T3B0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xuICAgIH0pLFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZG9jdW1lbnROb2RlIHx8ICF0aGlzLnByb3BzLmRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFydGljbGUgey4uLnRoaXMucHJvcHN9IHsuLi50aGlzLnByb3BzLiRvdXRsZXRPcHRpb25zfSAvPlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvb3V0bGV0cy9Eb2N1bWVudE91dGxldC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgSGlnaGxpZ2h0ZWRUZXh0ID0gcmVxdWlyZSgnY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHQnKTtcbmNvbnN0IERpc3F1cyA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvRGlzcXVzJyk7XG5cbmNvbnN0IHsgc2hhcGUsIHN0cmluZywgb2JqZWN0LCBvbmVPZlR5cGUsIGJvb2wsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmNvbnN0IEFydGljbGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGNvbnRleHRUeXBlczoge1xuICAgIGxvY2F0aW9uOiBzaGFwZSh7IHBhdGhuYW1lOiBzdHJpbmcgfSkuaXNSZXF1aXJlZCxcbiAgICBjb25maWc6IHNoYXBlKHtcbiAgICAgIGRpc3F1czogb25lT2ZUeXBlKFsgYm9vbCwgb2JqZWN0IF0pLFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgY2xhc3NOYW1lOiBzdHJpbmcsXG4gICAgZG9jdW1lbnROb2RlOiBzaGFwZSh7XG4gICAgICBzb3VyY2U6IHN0cmluZyxcbiAgICB9KS5pc1JlcXVpcmVkLFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBhcnRpY2xlID0gdGhpcy5wcm9wcy5kb2N1bWVudE5vZGUucHJvcGVydGllcztcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICA8SGlnaGxpZ2h0ZWRUZXh0PnthcnRpY2xlLnNvdXJjZX08L0hpZ2hsaWdodGVkVGV4dD5cblxuICAgICAgICB7dGhpcy5jb250ZXh0LmNvbmZpZy5kaXNxdXMgJiYgKFxuICAgICAgICAgIDxEaXNxdXNcbiAgICAgICAgICAgIGlkZW50aWZpZXI9e2FydGljbGUuaWR9XG4gICAgICAgICAgICB0aXRsZT17YXJ0aWNsZS50aXRsZX1cbiAgICAgICAgICAgIHBhdGhuYW1lPXt0aGlzLmNvbnRleHQubG9jYXRpb24ucGF0aG5hbWV9XG4gICAgICAgICAgICBjb25maWc9e3RoaXMuY29udGV4dC5jb25maWcuZGlzcXVzfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBBcnRpY2xlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLW1hcmtkb3duL3VpL2NvbXBvbmVudHMvQXJ0aWNsZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvSGlnaGxpZ2h0ZWRUZXh0XCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHRcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJjb21wb25lbnRzL0Rpc3F1c1wiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvRGlzcXVzXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgQXJ0aWNsZVRPQyA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvQXJ0aWNsZVRPQycpXG5jb25zdCB7IG9iamVjdCwgYm9vbCwgc2hhcGUsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ01hcmtkb3duOjpEb2N1bWVudFRPQ091dGxldCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnRFbnRpdHlOb2RlOiBvYmplY3QsXG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgICBuYW1lc3BhY2VOb2RlOiBvYmplY3QuaXNSZXF1aXJlZCxcbiAgICAkb3V0bGV0T3B0aW9uczogc2hhcGUoe1xuICAgICAgZ3JvdXBlZDogYm9vbFxuICAgIH0pLFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAoIXRoaXMucHJvcHMuZG9jdW1lbnROb2RlKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFydGljbGVUT0MgZmxhdCBncm91cGVkPXt0aGlzLnByb3BzLiRvdXRsZXRPcHRpb25zLmdyb3VwZWR9IHsuLi50aGlzLnByb3BzfSAvPlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvb3V0bGV0cy9Eb2N1bWVudFRPQ091dGxldC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHsgc2hhcGUsIHN0cmluZywgbnVtYmVyIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5jb25zdCBXUE0gPSAyNzU7IC8vIGh0dHBzOi8vaGVscC5tZWRpdW0uY29tL2hjL2VuLXVzL2FydGljbGVzLzIxNDk5MTY2Ny1SZWFkLXRpbWVcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnTWFya2Rvd246Okluc3BlY3Rvck91dGxldCcsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBzaGFwZSh7XG4gICAgICBwcm9wZXJ0aWVzOiBzaGFwZSh7XG4gICAgICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgICAgIHdvcmRDb3VudDogbnVtYmVyLFxuICAgICAgfSlcbiAgICB9KSxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgZG9jID0gdGhpcy5wcm9wcy5kb2N1bWVudE5vZGUucHJvcGVydGllcztcbiAgICBjb25zdCBleHBlY3RlZFJlYWRUaW1lID0gTWF0aC5jZWlsKGRvYy53b3JkQ291bnQgLyBXUE0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxwPlxuICAgICAgICB7ZG9jLnRpdGxlfSA8c21hbGw+KHtleHBlY3RlZFJlYWRUaW1lfSBtaW4gcmVhZCk8L3NtYWxsPlxuICAgICAgPC9wPlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tbWFya2Rvd24vdWkvb3V0bGV0cy9JbnNwZWN0b3JPdXRsZXQuanMiXSwic291cmNlUm9vdCI6IiJ9