exports["megadoc-plugin-js"] =
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
	
	var InspectorOutlet = __webpack_require__(2);
	var ModuleOutlet = __webpack_require__(6);
	var ModuleEntitiesOutlet = __webpack_require__(15);
	var ModuleHeaderOutlet = __webpack_require__(21);
	var ModuleIndexOutlet = __webpack_require__(22);
	var ModuleBodyOutlet = __webpack_require__(28);
	var BrowserOutlet = __webpack_require__(50);
	var NamespaceOutlet = __webpack_require__(56);
	
	exports.outlets = ['JS::Browser', 'JS::Module', 'JS::ModuleEntities', 'JS::ModuleHeader', 'JS::ModuleHeader::Type', 'JS::ModuleIndex', 'JS::ModuleBody', 'JS::Namespace', 'JS::Tag', 'JS::ExampleTags', 'JS::ExampleTag'];
	
	exports.name = 'megadoc-plugin-js';
	exports.outletOccupants = [{ name: 'Core::Inspector', component: InspectorOutlet }, { name: 'JS::Module', component: ModuleOutlet }, { name: 'JS::ModuleEntities', component: ModuleEntitiesOutlet }, { name: 'JS::ModuleHeader', component: ModuleHeaderOutlet }, { name: 'JS::ModuleIndex', component: ModuleIndexOutlet }, { name: 'JS::ModuleBody', component: ModuleBodyOutlet }, { name: 'JS::Browser', component: BrowserOutlet }, { name: 'JS::Namespace', component: NamespaceOutlet }];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var K = __webpack_require__(4);
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string;
	
	
	module.exports = React.createClass({
	  displayName: 'JS::InspectorOutlet',
	  propTypes: {
	    documentNode: shape({
	      properties: shape({
	        summary: string
	      })
	    }),
	
	    namespaceNode: shape({
	      title: string
	    })
	  },
	
	  render: function render() {
	    var _props = this.props,
	        documentNode = _props.documentNode,
	        namespaceNode = _props.namespaceNode;
	
	    var doc = documentNode.properties;
	
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'div',
	        { className: 'tooltip__title' },
	        doc.id,
	        ' (',
	        doc.type !== K.TYPE_UNKNOWN && React.createElement(
	          'strong',
	          null,
	          doc.type,
	          ' '
	        ),
	        'in ',
	        namespaceNode.title,
	        ')'
	      ),
	      React.createElement('p', { children: documentNode.summary })
	    );
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
	
	module.exports = __webpack_require__(5);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	exports.NAMESPACE_SEP = '.';
	
	exports.SCOPE_UNSCOPED = undefined;
	exports.SCOPE_INSTANCE = 'instance';
	exports.SCOPE_PROTOTYPE = 'prototype';
	exports.SCOPE_FACTORY_EXPORTS = 'factory_exports';
	
	exports.TYPE_OBJECT = 'Object';
	exports.TYPE_OBJECT_PROPERTY = 'ObjectProperty';
	exports.TYPE_DEFAULT_EXPORTS = 'exports';
	exports.TYPE_FACTORY = 'Factory';
	exports.TYPE_FUNCTION = 'Function';
	exports.TYPE_CLASS = 'Class';
	exports.TYPE_ARRAY = 'Array';
	exports.TYPE_UNKNOWN = 'Unknown';
	exports.TYPE_LITERAL = 'Literal';
	exports.TYPE_ALL_LITERAL = 'AllLiteral';
	exports.TYPE_UNKNOWN_LITERAL = 'UnknownLiteral';
	exports.TYPE_UNION = 'Union';
	
	exports.VISIBILITY_PROTECTED = 'protected';
	exports.VISIBILITY_PRIVATE = 'private';
	
	exports.DEFAULT_FACTORY_EXPORTS_ID = 'default_exports';
	exports.TYPE_OVERRIDING_TAGS = {
	  'method': true,
	  'property': true,
	  'type': true,
	  'class': true,
	  'export': true
	};
	
	exports.TAGS_WITH_STRINGS = {
	  'deprecated': true,
	  'example': true
	};
	
	exports.NO_DESCRIPTION_TAGS = {
	  'alias': true,
	  'class': true,
	  'constructor': true,
	  'extends': true,
	  'inheritdoc': true,
	  'memberOf': true,
	  'method': true,
	  'mixin': true,
	  'mixes': true,
	  'module': true,
	  'namespace': true,
	  'preserveOrder': true,
	  'private': true,
	  'public': true,
	  'type': true,
	  'typedef': true
	};
	
	exports.KNOWN_TAGS = ['alias', 'async', 'callback', 'class', 'constructor', 'deprecated', 'example', 'export', 'interface', 'lends', 'memberOf', 'method', 'mixes', 'module', 'name', 'namespace', 'param', 'preserveOrder', 'private', 'public', 'property', 'protected', 'return', 'see', 'static', 'throws', 'type', 'typedef'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Module = __webpack_require__(7);
	
	var _require = __webpack_require__(14),
	    isNamespaceDocument = _require.isNamespaceDocument;
	
	var object = React.PropTypes.object;
	
	
	module.exports = React.createClass({
	  displayName: 'JS::Module',
	  propTypes: {
	    documentNode: object,
	    namespaceNode: object
	  },
	
	  render: function render() {
	    if (!this.props.documentNode || isNamespaceDocument(this.props.documentNode.properties)) {
	      return null;
	    }
	
	    return React.createElement(Module, this.props);
	  }
	});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var HasTitle = __webpack_require__(8);
	var ModuleHeader = __webpack_require__(9);
	var Outlet = __webpack_require__(10);
	
	var Module = React.createClass({
	  displayName: 'Module',
	
	  mixins: [HasTitle(function () {
	    return this.props.documentNode.properties.name;
	  })],
	
	  propTypes: {
	    namespaceNode: React.PropTypes.object.isRequired,
	    documentNode: React.PropTypes.object.isRequired,
	    documentEntityNode: React.PropTypes.object
	  },
	
	  childContextTypes: {
	    config: React.PropTypes.object
	  },
	
	  getChildContext: function getChildContext() {
	    return {
	      config: this.props.namespaceNode.config
	    };
	  },
	  render: function render() {
	    var _props = this.props,
	        documentNode = _props.documentNode,
	        namespaceNode = _props.namespaceNode;
	    var config = namespaceNode.config;
	
	    var moduleNode = documentNode.type === 'DocumentEntity' ? documentNode.parentNode : documentNode;
	
	    var legacyParams = {
	      moduleId: moduleNode.id,
	      entity: documentNode.type === 'DocumentEntity' ? documentNode.id : undefined
	    };
	
	    return React.createElement(
	      'div',
	      { className: 'class-view' },
	      React.createElement(ModuleHeader, {
	        documentNode: moduleNode,
	        showSourcePaths: config.showSourcePaths,
	        showNamespace: config.showNamespaceInModuleHeader,
	        generateAnchor: false
	      }),
	      React.createElement(Outlet, {
	        name: 'JS::ModuleBody',
	        elementProps: {
	          params: legacyParams,
	          query: {},
	          documentNode: documentNode,
	          documentEntityNode: this.props.documentEntityNode,
	          namespaceNode: namespaceNode
	        }
	      })
	    );
	  }
	});
	
	module.exports = Module;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["mixins/HasTitle"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Outlet = __webpack_require__(10);
	var Heading = __webpack_require__(11);
	var HeadingAnchor = __webpack_require__(12);
	var HighlightedText = __webpack_require__(13);
	var K = __webpack_require__(4);
	var DocClassifier = __webpack_require__(14);
	var PropTypes = React.PropTypes;
	
	
	var ModuleHeader = React.createClass({
	  displayName: 'ModuleHeader',
	
	  propTypes: {
	    documentNode: PropTypes.object,
	    showSourcePaths: PropTypes.bool,
	    headerLevel: PropTypes.string,
	    generateAnchor: PropTypes.bool,
	    showNamespace: PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      headerLevel: '1',
	      generateAnchor: true
	    };
	  },
	
	
	  // shouldComponentUpdate(prevProps) {
	  //   return prevProps.documentNode !== this.props.documentNode;
	  // },
	
	  render: function render() {
	    var anchor = void 0;
	
	    var documentNode = this.props.documentNode;
	
	    var doc = documentNode.properties || {
	      name: documentNode.title,
	      type: K.TYPE_UNKNOWN
	    };
	
	    if (this.props.generateAnchor) {
	      anchor = documentNode.meta.anchor;
	    }
	
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        Heading,
	        {
	          level: '1',
	          parentLevel: this.props.headerLevel,
	          className: 'class-view__header anchorable-heading',
	          title: this.props.showSourcePaths ? doc.filePath : undefined,
	          id: anchor
	        },
	        anchor && React.createElement(HeadingAnchor.Anchor, { href: anchor }),
	        anchor && React.createElement(HeadingAnchor.Link, { href: anchor }),
	        React.createElement(
	          HeadingAnchor.Text,
	          { className: 'class-view__header-name' },
	          React.createElement(
	            'span',
	            null,
	            doc.name
	          )
	        ),
	        ' ',
	        this.props.showNamespace && doc.namespace && React.createElement(
	          'span',
	          { className: 'class-view__header-namespace' },
	          '{',
	          doc.namespace,
	          '}'
	        ),
	        ' ',
	        React.createElement(
	          'span',
	          { className: 'class-view__header-type' },
	          React.createElement(
	            Outlet,
	            {
	              name: 'JS::ModuleHeader::Type',
	              tagName: 'span',
	              firstMatchingElement: true,
	              elementProps: this.props
	            },
	            React.createElement(
	              'span',
	              null,
	              DocClassifier.getDisplayType(documentNode)
	            )
	          ),
	          hasMixinTargets(documentNode) && documentNode.properties.mixinTargets.map(function (x) {
	            return React.createElement(
	              'span',
	              { key: x.name },
	              ', ',
	              React.createElement('span', { dangerouslySetInnerHTML: { __html: x.html || x.name } })
	            );
	          })
	        )
	      ),
	      this.props.showSourcePaths && documentNode.filePath && React.createElement(
	        'p',
	        { className: 'class-view__module-filepath' },
	        'Defined in: ',
	        React.createElement(
	          'code',
	          null,
	          documentNode.filePath
	        )
	      ),
	      React.createElement(
	        HighlightedText,
	        { key: 'description' },
	        doc.description
	      )
	    );
	  }
	});
	
	function hasMixinTargets(node) {
	  return node.properties && node.properties.mixinTargets && node.properties.mixinTargets.length > 0;
	}
	
	module.exports = ModuleHeader;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Outlet"];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Heading"];

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/HeadingAnchor"];

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/HighlightedText"];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var K = __webpack_require__(4);
	
	function isMethod(doc) {
	  var ctx = doc.nodeInfo;
	
	  return doc.type === K.TYPE_FUNCTION && (ctx.scope === K.SCOPE_FACTORY_EXPORTS || ctx.scope === K.SCOPE_INSTANCE || ctx.scope === K.SCOPE_PROTOTYPE);
	}
	
	function isCallback(doc) {
	  return doc.type === K.TYPE_FUNCTION && doc.tags.some(function (x) {
	    return x.type === 'callback';
	  });
	}
	
	function isTypeDef(doc) {
	  return !doc.isModule && doc.tags.some(function (x) {
	    return x.type === 'typedef';
	  });
	}
	
	function isFactoryExports(doc) {
	  return doc.nodeInfo.scope === K.SCOPE_FACTORY_EXPORTS;
	}
	
	function isClassEntity(doc) {
	  return doc.nodeInfo.scope === K.SCOPE_INSTANCE || doc.nodeInfo.scope === K.SCOPE_PROTOTYPE;
	}
	
	function isStaticMethod(doc) {
	  return doc.type === K.TYPE_FUNCTION && !isMethod(doc) && !isCallback(doc);
	}
	
	function isExportedSymbol(doc) {
	  return !!doc.isExportedSymbol;
	}
	
	exports.isMethod = isMethod;
	exports.isCallback = isCallback;
	exports.isStaticMethod = isStaticMethod;
	exports.isFactoryExports = isFactoryExports;
	exports.isClassEntity = isClassEntity;
	exports.isTypeDef = isTypeDef;
	exports.isExportedSymbol = isExportedSymbol;
	
	exports.getDisplayType = function (documentNode) {
	  if (documentNode.type === 'Namespace') {
	    return 'Library';
	  }
	
	  if (documentNode.properties.isNamespace) {
	    return 'Namespace';
	  } else if (documentNode.entities.some(function (n) {
	    return isClassEntity(n.properties);
	  })) {
	    return 'Class';
	  } else if (documentNode.entities.some(function (n) {
	    return isFactoryExports(n.properties);
	  })) {
	    return 'Factory';
	  } else if (documentNode.properties.type === K.TYPE_FUNCTION) {
	    return 'Function';
	  } else {
	    return 'Object';
	  }
	};
	
	exports.isProperty = function (doc) {
	  return doc && doc.tags && doc.tags.some(function (x) {
	    return x.type === 'property';
	  });
	};
	
	exports.isStaticProperty = function (doc) {
	  return exports.isProperty(doc) && [K.SCOPE_PROTOTYPE, K.SCOPE_INSTANCE].indexOf(doc.nodeInfo.scope) === -1;
	};
	
	exports.isMemberProperty = function (doc) {
	  return exports.isProperty(doc) && !exports.isStaticProperty(doc);
	};
	
	exports.isPrivate = function (doc) {
	  return doc && doc.tags && doc.tags.some(function (x) {
	    return x.type === 'private';
	  });
	};
	
	exports.isProtected = function (doc) {
	  return doc && doc.tags && doc.tags.some(function (x) {
	    return x.type === 'protected';
	  });
	};
	
	exports.isPublic = function (doc) {
	  return !exports.isPrivate(doc) && !exports.isProtected(doc);
	};
	
	exports.isNamespaceDocument = function (doc) {
	  return doc && doc.isNamespace;
	};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var ClassEntityBrowser = __webpack_require__(16);
	var object = React.PropTypes.object;
	
	
	module.exports = React.createClass({
	  displayName: 'JS::ModuleEntities',
	
	  propTypes: {
	    documentNode: object,
	    documentEntityNode: object
	  },
	
	  render: function render() {
	    if (!this.props.documentNode) {
	      return null;
	    }
	
	    return React.createElement(ClassEntityBrowser, {
	      standalone: true,
	      documentNode: this.props.documentNode,
	      documentEntityNode: this.props.documentEntityNode
	    });
	  }
	});

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Link = __webpack_require__(17);
	var orderAwareSort = __webpack_require__(18);
	var classSet = __webpack_require__(20);
	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    bool = _React$PropTypes.bool;
	
	
	var ClassEntityBrowser = React.createClass({
	  displayName: 'ClassEntityBrowser',
	
	  propTypes: {
	    standalone: bool,
	    documentNode: object,
	    documentEntityNode: object
	  },
	
	  render: function render() {
	    var documentNode = this.props.documentNode;
	
	
	    if (!documentNode.entities || !documentNode.entities.length) {
	      return null;
	    }
	
	    var entityDocuments = orderAwareSort.asNodes(documentNode, documentNode.entities, 'id');
	
	    return React.createElement(
	      'ul',
	      {
	        className: classSet("class-browser__methods", {
	          'class-browser__methods--standalone': this.props.standalone
	        }) },
	      entityDocuments.map(this.renderEntity)
	    );
	  },
	  renderEntity: function renderEntity(node) {
	    return React.createElement(
	      'li',
	      { key: node.uid, className: 'class-browser__methods-entity' },
	      React.createElement(Link, {
	        to: node,
	        children: (node.properties.symbol || '') + node.properties.name,
	        title: node.title
	      })
	    );
	  }
	});
	
	module.exports = ClassEntityBrowser;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Link"];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _require = __webpack_require__(19),
	    sortBy = _require.sortBy;
	
	module.exports = function (doc, array, key) {
	  var preserveOrder = doc.tags.some(function (tag) {
	    return tag.type === 'preserveOrder';
	  });
	
	  if (preserveOrder) {
	    return sortBy(array, 'line');
	  } else {
	    return sortBy(array, key);
	  }
	};
	
	module.exports.asNodes = function (documentNode, array, key) {
	  var preserveOrder = documentNode.properties.tags.some(function (tag) {
	    return tag.type === 'preserveOrder';
	  });
	
	  if (preserveOrder) {
	    return sortBy(array, 'properties.line');
	  } else {
	    return sortBy(array, key);
	  }
	};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["lodash"];

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["classnames"];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var ModuleHeader = __webpack_require__(9);
	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    shape = _React$PropTypes.shape,
	    bool = _React$PropTypes.bool;
	
	
	module.exports = React.createClass({
	  displayName: 'JS::ModuleHeader',
	
	  propTypes: {
	    documentNode: object,
	    namespaceNode: object,
	    $outletOptions: shape({
	      showFilePath: bool
	    })
	  },
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'js-module-header-outlet' },
	      React.createElement(ModuleHeader, {
	        documentNode: this.props.documentNode || this.props.namespaceNode,
	        showSourcePaths: this.props.$outletOptions.showFilePath !== false,
	        generateAnchor: false
	      })
	    );
	  }
	});

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    shape = _React$PropTypes.shape,
	    bool = _React$PropTypes.bool;
	
	var NamespaceIndex = __webpack_require__(23);
	var ModuleIndex = __webpack_require__(24);
	
	module.exports = React.createClass({
	  displayName: 'JS::ModuleIndex',
	  propTypes: {
	    documentNode: object,
	    namespaceNode: object,
	    $outletOptions: shape({
	      showFunctions: bool,
	      showProperties: bool,
	      showStaticMembers: bool
	    })
	  },
	
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(NamespaceIndex, _extends({}, this.props.$outletOptions, {
	        documentNode: this.props.documentNode
	      })),
	      React.createElement(ModuleIndex, _extends({}, this.props.$outletOptions, {
	        documentNode: this.props.documentNode
	      }))
	    );
	  }
	});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Link = __webpack_require__(17);
	var DocClassifier = __webpack_require__(14);
	var object = React.PropTypes.object;
	
	
	var NamespaceIndex = React.createClass({
	  displayName: 'NamespaceIndex',
	
	  propTypes: {
	    documentNode: object
	  },
	
	  render: function render() {
	    var documentNode = this.props.documentNode;
	
	    var classes = getByDisplayType(documentNode, ['Class', 'Factory']);
	    var functions = getByDisplayType(documentNode, ['Function']);
	    var namespaces = getByDisplayType(documentNode, ['Namespace']);
	    var others = getRemainingDocuments(documentNode, [classes, functions, namespaces]);
	
	    return React.createElement(
	      'div',
	      { className: 'js-document-index' },
	      namespaces.length > 0 && this.renderGroupByContextType('Namespaces', namespaces),
	      classes.length > 0 && this.renderGroupByContextType('Classes', classes),
	      functions.length > 0 && this.renderGroupByContextType('Functions', functions),
	      others.length > 0 && this.renderGroupByContextType('Other', others)
	    );
	  },
	  renderGroupByContextType: function renderGroupByContextType(title, documents) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        { className: 'doc-group__header' },
	        title
	      ),
	      this.renderGroup(documents)
	    );
	  },
	  renderGroup: function renderGroup(documents) {
	    return React.createElement(
	      'table',
	      null,
	      React.createElement(
	        'tbody',
	        null,
	        documents.map(this.renderModuleSummaryRecord)
	      )
	    );
	  },
	  renderModuleSummaryRecord: function renderModuleSummaryRecord(node) {
	    return React.createElement(
	      'tr',
	      { key: node.uid },
	      React.createElement(
	        'td',
	        null,
	        React.createElement(
	          Link,
	          { to: node },
	          node.properties && node.properties.name || node.title
	        )
	      ),
	      React.createElement(
	        'td',
	        null,
	        node.summary || React.createElement(
	          'em',
	          { className: 'type-mute' },
	          'No summary provided.'
	        )
	      )
	    );
	  }
	});
	
	function getByDisplayType(documentNode, typeNames) {
	  return documentNode.documents.filter(function (x) {
	    return typeNames.indexOf(DocClassifier.getDisplayType(x)) > -1;
	  });
	}
	
	function getRemainingDocuments(documentNode, lists) {
	  var usedUIDs = lists.reduce(function (map, list) {
	    list.forEach(function (x) {
	      map[x.uid] = true;
	    });
	    return map;
	  }, {});
	
	  return documentNode.documents.filter(function (x) {
	    return !(x.uid in usedUIDs);
	  });
	}
	
	module.exports = NamespaceIndex;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var React = __webpack_require__(3);
	var Link = __webpack_require__(17);
	var TypeNames = __webpack_require__(25);
	var FunctionSignature = __webpack_require__(27);
	var DocClassifier = __webpack_require__(14);
	var _React$PropTypes = React.PropTypes,
	    bool = _React$PropTypes.bool,
	    object = _React$PropTypes.object;
	
	
	var ModuleIndex = React.createClass({
	  displayName: 'ModuleIndex',
	
	  propTypes: {
	    documentNode: object,
	    showFunctions: bool,
	    showProperties: bool,
	    showStaticMembers: bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      showFunctions: true,
	      showProperties: true,
	      showStaticMembers: true
	    };
	  },
	  render: function render() {
	    var documentNode = this.props.documentNode;
	
	    var memberFuctions = getByClassification(documentNode, [DocClassifier.isMethod]);
	    var memberProperties = getByClassification(documentNode, [DocClassifier.isMemberProperty]);
	    var exportedSymbols = getByClassification(documentNode, [DocClassifier.isExportedSymbol]);
	    var staticMembers = getByClassification(documentNode, [DocClassifier.isStaticMethod, DocClassifier.isStaticProperty]);
	
	    var publicStaticMembers = staticMembers.filter(function (x) {
	      return DocClassifier.isPublic(x.properties);
	    });
	
	    var privateStaticMembers = staticMembers.filter(function (x) {
	      return !DocClassifier.isPublic(x.properties);
	    });
	
	    var others = getRemainingDocuments(documentNode, [staticMembers, memberFuctions, memberProperties, exportedSymbols]);
	
	    return React.createElement(
	      'div',
	      { className: 'js-document-index' },
	      exportedSymbols.length > 0 && this.renderExportedSymbols('Exported Symbols', exportedSymbols),
	      memberFuctions.length > 0 && this.renderMethodGroup('Public Functions', memberFuctions),
	      memberProperties.length > 0 && this.renderPropertyGroup('Public Properties', memberProperties),
	      publicStaticMembers.length > 0 && this.renderMethodGroup('Public Static Members', publicStaticMembers),
	      privateStaticMembers.length > 0 && this.renderMethodGroup('Private Static Members', privateStaticMembers),
	      others.length > 0 && this.renderGroupByContextType('Other', others)
	    );
	  },
	  renderGroupByContextType: function renderGroupByContextType(title, documents) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        { className: 'doc-group__header' },
	        title
	      ),
	      this.renderGroup(documents)
	    );
	  },
	  renderGroup: function renderGroup(documents) {
	    return React.createElement(
	      'table',
	      null,
	      React.createElement(
	        'tbody',
	        null,
	        documents.map(this.renderModuleSummaryRecord)
	      )
	    );
	  },
	  renderModuleSummaryRecord: function renderModuleSummaryRecord(node) {
	    return React.createElement(
	      'tr',
	      { key: node.uid },
	      React.createElement(
	        'td',
	        null,
	        React.createElement(
	          Link,
	          { to: node },
	          node.properties ? node.properties.name : node.title
	        )
	      ),
	      React.createElement(
	        'td',
	        null,
	        node.summary || React.createElement(
	          'em',
	          { className: 'type-mute' },
	          'No summary provided.'
	        )
	      )
	    );
	  },
	  renderMethodGroup: function renderMethodGroup(title, documents) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        { className: 'doc-group__header' },
	        title
	      ),
	      React.createElement(
	        'table',
	        null,
	        React.createElement(
	          'tbody',
	          null,
	          documents.map(this.renderMethodSummaryRow)
	        )
	      )
	    );
	  },
	  renderMethodSummaryRow: function renderMethodSummaryRow(documentNode) {
	    if (DocClassifier.isProperty(documentNode.properties)) {
	      return this.renderPropertySummaryRow(documentNode);
	    }
	
	    var returnValue = documentNode.properties.tags.reduce(function (v, x) {
	      if (x.type === 'return') {
	        return x.typeInfo.type;
	      } else {
	        return v;
	      }
	    }, { name: 'void' });
	
	    return React.createElement(
	      'tr',
	      { key: documentNode.uid },
	      React.createElement(
	        'td',
	        null,
	        React.createElement(
	          'span',
	          { className: 'doc-entity__function-signature' },
	          returnValue && React.createElement(TypeNames, { type: returnValue })
	        )
	      ),
	      React.createElement(
	        'td',
	        null,
	        React.createElement(
	          Link,
	          { to: documentNode, className: 'js-document-index__entity-name' },
	          documentNode.properties.name
	        ),
	        React.createElement(FunctionSignature, {
	          doc: documentNode.properties,
	          withNames: false,
	          withBraces: true
	        })
	      )
	    );
	  },
	  renderPropertyGroup: function renderPropertyGroup(title, documents) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        { className: 'doc-group__header' },
	        title
	      ),
	      React.createElement(
	        'table',
	        null,
	        React.createElement(
	          'tbody',
	          null,
	          documents.map(this.renderPropertySummaryRow)
	        )
	      )
	    );
	  },
	  renderPropertySummaryRow: function renderPropertySummaryRow(documentNode) {
	    var propertyTag = documentNode.properties.tags.filter(function (x) {
	      return x.type === 'property';
	    })[0];
	
	    return React.createElement(
	      'tr',
	      { key: documentNode.uid },
	      React.createElement(
	        'td',
	        null,
	        React.createElement(
	          'span',
	          { className: 'doc-entity__function-signature' },
	          React.createElement(TypeNames, { type: propertyTag.typeInfo.type })
	        )
	      ),
	      React.createElement(
	        'td',
	        null,
	        React.createElement(
	          Link,
	          { to: documentNode, className: 'js-document-index__entity-name' },
	          documentNode.properties.name
	        )
	      )
	    );
	  },
	  renderExportedSymbols: function renderExportedSymbols(title, documents) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        { className: 'doc-group__header' },
	        title
	      ),
	      React.createElement(
	        'table',
	        null,
	        React.createElement(
	          'thead',
	          null,
	          React.createElement(
	            'tr',
	            null,
	            React.createElement(
	              'th',
	              null,
	              'Symbol'
	            ),
	            React.createElement(
	              'th',
	              null,
	              'Definition'
	            )
	          )
	        ),
	        React.createElement(
	          'tbody',
	          null,
	          documents.map(function (node) {
	            var _node$properties$tags = node.properties.tags.filter(function (x) {
	              return x.type === 'export';
	            }).map(function (x) {
	              return x.typeInfo;
	            }),
	                _node$properties$tags2 = _slicedToArray(_node$properties$tags, 1),
	                typeInfo = _node$properties$tags2[0];
	
	            return React.createElement(
	              'tr',
	              { key: node.id },
	              React.createElement(
	                'td',
	                null,
	                typeInfo.name || node.properties.name
	              ),
	              React.createElement(
	                'td',
	                null,
	                React.createElement(TypeNames, { type: typeInfo.type })
	              )
	            );
	          })
	        )
	      )
	    );
	  }
	});
	
	function getByClassification(documentNode, klassifiers) {
	  return documentNode.entities.filter(function (x) {
	    return klassifiers.some(function (fn) {
	      return fn(x.properties);
	    });
	  });
	}
	
	function getRemainingDocuments(documentNode, lists) {
	  var usedUIDs = lists.reduce(function (map, list) {
	    list.forEach(function (x) {
	      map[x.uid] = true;
	    });
	
	    return map;
	  }, {});
	
	  return documentNode.entities.filter(function (x) {
	    return !(x.uid in usedUIDs);
	  });
	}
	
	module.exports = ModuleIndex;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var describeType = __webpack_require__(26);
	
	var TypeNames = React.createClass({
	  displayName: 'TypeNames',
	
	  contextTypes: {
	    config: React.PropTypes.object.isRequired
	  },
	
	  propTypes: {
	    type: React.PropTypes.object.isRequired
	  },
	
	  render: function render() {
	    return React.createElement('span', {
	      className: 'js-type-names',
	      dangerouslySetInnerHTML: {
	        __html: describeType({
	          html: true,
	          expandFunctionSignatures: this.context.config.expandReturnedFunctionSignatures
	        })(this.props.type)
	      }
	    });
	  }
	});
	
	module.exports = TypeNames;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var K = __webpack_require__(4);
	var APPL_SEP = ' | ';
	var APPL_START = '.&lt;';
	var APPL_END = '&gt;';
	
	module.exports = function (_ref) {
	  var html = _ref.html,
	      expandFunctionSignatures = _ref.expandFunctionSignatures;
	  return function renderType(type) {
	    if (!type) {
	      return '';
	    }
	
	    var displayNameOf = function displayNameOf(x) {
	      return html && x.html || x.name;
	    };
	    var displayName = displayNameOf(type);
	    var renderFunctionParam = function renderFunctionParam(param) {
	      return displayNameOf(param);
	    };
	
	    if (type.name === K.TYPE_UNION) {
	      return type.elements.map(renderType).join(APPL_SEP);
	    } else if (type.name === K.TYPE_ARRAY && type.elements) {
	      return 'Array' + APPL_START + type.elements.map(renderType).join(APPL_SEP) + APPL_END;
	    } else if (type.name && type.elements) {
	      return '' + displayName + APPL_START + type.elements.map(renderType).join(APPL_SEP) + APPL_END;
	    }
	    // function with params and return type
	    else if (expandFunctionSignatures && type.name === K.TYPE_FUNCTION && type.params && type.returnType) {
	        return '(' + type.params.map(renderFunctionParam).join(', ') + ') -> ' + displayNameOf(type.returnType);
	      }
	      // function with return type only
	      else if (expandFunctionSignatures && type.name === K.TYPE_FUNCTION && type.returnType) {
	          return '() -> ' + displayNameOf(type.returnType);
	        }
	        // function with params only
	        else if (expandFunctionSignatures & type.name === K.TYPE_FUNCTION && type.params) {
	            return '(' + type.params.map(renderFunctionParam).join(', ') + ') -> ?';
	          } else if (type.name === K.TYPE_ALL_LITERAL) {
	            return '*';
	          }
	
	    var buffer = displayName;
	
	    if (type.nullable === false) {
	      buffer += '!';
	    }
	
	    if (type.nullable === true) {
	      buffer += '?';
	    }
	
	    if (type.optional) {
	      buffer += '=';
	    }
	
	    return buffer;
	  };
	};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var _React$PropTypes = React.PropTypes,
	    bool = _React$PropTypes.bool,
	    object = _React$PropTypes.object;
	
	var describeType = __webpack_require__(26);
	
	var FunctionSignature = React.createClass({
	  displayName: 'FunctionSignature',
	
	  contextTypes: {
	    config: React.PropTypes.object.isRequired
	  },
	
	  propTypes: {
	    doc: object,
	    withNames: bool,
	    withBraces: bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      withNames: true,
	      withBraces: true
	    };
	  },
	  render: function render() {
	    var withNames = this.props.withNames;
	
	    var describeTypeHTML = describeType({
	      expandFunctionSignatures: this.context.config.expandReturnedFunctionSignatures,
	      html: true
	    });
	    var describeTypeText = describeType({
	      expandFunctionSignatures: this.context.config.expandReturnedFunctionSignatures,
	      html: false
	    });
	
	    var paramTags = this.props.doc.tags.filter(function (tag) {
	      return tag.type === 'param' && (tag.typeInfo.name || '?').indexOf('.') === -1;
	    });
	
	    var paramLines = paramTags.map(function (param) {
	      if (withNames && param.typeInfo.name) {
	        return '<em>' + (param.typeInfo.name || '?') + '</em>: ' + describeTypeHTML(param.typeInfo.type);
	      } else {
	        return describeTypeHTML(param.typeInfo.type);
	      }
	    });
	
	    // it's 3:42 AM and i can't sleep
	    var paramTagTotalLength = paramTags.map(function (tag) {
	      if (withNames && tag.typeInfo.name) {
	        return tag.typeInfo.name + ': ' + describeTypeText(tag.typeInfo.type);
	      } else {
	        return describeTypeText(tag.typeInfo.type);
	      }
	    }).join(', ').length;
	
	    var needsBreak = paramTagTotalLength >= 40;
	    var html = paramLines.map(function (line) {
	      return needsBreak ? '<br />&nbsp;&nbsp;' + line : line;
	    }).join(', ') + (needsBreak ? '<br />' : '');
	
	    return React.createElement('span', {
	      className: 'doc-entity__function-signature',
	      dangerouslySetInnerHTML: {
	        __html: this.props.withBraces ? '(' + html + ')' : html
	      }
	    });
	  }
	});
	
	module.exports = FunctionSignature;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var ModuleBody = __webpack_require__(29);
	var object = React.PropTypes.object;
	
	
	module.exports = React.createClass({
	  displayName: 'JS::ModuleBody',
	
	  propTypes: {
	    documentNode: object,
	    namespaceNode: object
	  },
	
	  render: function render() {
	    if (!this.props.documentNode.properties) {
	      return null;
	    }
	
	    return React.createElement(ModuleBody, this.props);
	  }
	});

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	
	var _require = __webpack_require__(19),
	    findWhere = _require.findWhere,
	    where = _require.where;
	
	var Outlet = __webpack_require__(10);
	var Link = __webpack_require__(17);
	var Doc = __webpack_require__(30);
	var ObjectSynopsis = __webpack_require__(46);
	var SeeTag = __webpack_require__(39);
	var DocGroup = __webpack_require__(49);
	var PropertyTag = __webpack_require__(47);
	var ExampleTag = __webpack_require__(36);
	var orderAwareSort = __webpack_require__(18);
	var DocClassifier = __webpack_require__(14);
	var K = __webpack_require__(4);
	var _React$PropTypes = React.PropTypes,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object,
	    arrayOf = _React$PropTypes.arrayOf;
	
	
	var ModuleBody = React.createClass({
	  displayName: 'ModuleBody',
	
	  propTypes: {
	    documentNode: object,
	    namespaceNode: object,
	    doc: object,
	    moduleDocs: arrayOf(object),
	    focusedEntity: string
	  },
	
	  render: function render() {
	    var documentNode = this.props.documentNode;
	
	    var doc = documentNode.properties;
	    var moduleDocs = documentNode.entities.map(function (x) {
	      return x.properties;
	    });
	    var renderableType = DocClassifier.getDisplayType(documentNode);
	    var mixedInTargets = getMixedInTargets(documentNode, this.props.namespaceNode);
	    var withoutTypeDefs = moduleDocs.filter(function (x) {
	      return !DocClassifier.isTypeDef(x);
	    });
	    var typedefs = documentNode.entities.filter(function (x) {
	      return DocClassifier.isTypeDef(x.properties);
	    });
	
	    return React.createElement(
	      'div',
	      null,
	      mixedInTargets.length > 0 && [React.createElement(
	        'p',
	        { key: 'mixinTargets__header', className: 'doc-group__header' },
	        'This module is mixed-in by the following modules:'
	      ), React.createElement(
	        'ol',
	        { key: 'mixinTargets__listing' },
	        mixedInTargets.map(function (x) {
	          return React.createElement(
	            'li',
	            { key: x.uid },
	            React.createElement(
	              Link,
	              { to: x },
	              x.title
	            )
	          );
	        })
	      )],
	      renderableType === 'Factory' && this.renderConstructor(doc, "Instance Constructor"),
	      renderableType === 'Class' && this.renderConstructor(doc, "Constructor"),
	      renderableType === 'Function' && this.renderConstructor(doc, "Signature"),
	      this.renderExamples(doc),
	      this.renderStaticMethods(doc, withoutTypeDefs),
	      this.renderCallbacks(doc, withoutTypeDefs),
	      this.renderTypeDefs(doc, typedefs),
	      this.renderProperties(doc, withoutTypeDefs, function (scope) {
	        return !isStaticProperty(scope);
	      }, "Instance Properties"),
	      this.renderProperties(doc, withoutTypeDefs, isStaticProperty, "Static Properties"),
	      this.renderMethods(doc, withoutTypeDefs),
	      this.renderAdditionalResources(doc)
	    );
	  },
	  renderConstructor: function renderConstructor(doc, title) {
	    return React.createElement(
	      'div',
	      null,
	      React.createElement(
	        'h2',
	        { className: 'doc-group__header' },
	        title
	      ),
	      React.createElement(Doc, {
	        withDescription: false,
	        withExamples: false,
	        withAdditionalResources: false,
	        collapsible: false,
	        doc: doc,
	        config: this.props.namespaceNode.config,
	        headingTag: 'h3'
	      })
	    );
	  },
	  renderExamples: function renderExamples(doc) {
	    var tags = where(doc.tags, { type: 'example' });
	
	    return React.createElement(
	      Outlet,
	      { name: 'JS::ExampleTags', elementProps: { tags: tags } },
	      tags.length === 1 && this.renderExampleTag(tags[0]),
	      tags.length > 1 && React.createElement(
	        DocGroup,
	        { label: 'Examples', alwaysGroup: false },
	        tags.map(this.renderExampleTag)
	      )
	    );
	  },
	  renderExampleTag: function renderExampleTag(tag) {
	    return React.createElement(
	      Outlet,
	      {
	        key: tag.string,
	        name: 'JS::ExampleTag',
	        elementProps: {
	          tag: tag,
	          documentNode: this.props.documentNode
	        },
	        firstMatchingElement: true
	      },
	      React.createElement(ExampleTag, { string: tag.string, typeInfo: tag.typeInfo })
	    );
	  },
	  renderAdditionalResources: function renderAdditionalResources(doc) {
	    var tags = where(doc.tags, { type: 'see' });
	
	    if (!tags.length) {
	      return null;
	    }
	
	    return React.createElement(
	      DocGroup,
	      { label: 'Additional resources', className: 'class-view__sees', tagName: 'ul' },
	      tags.map(this.renderSeeTag)
	    );
	  },
	  renderSeeTag: function renderSeeTag(tag) {
	    return React.createElement(SeeTag, _extends({ key: tag.typeInfo.name }, tag));
	  },
	  renderProperties: function renderProperties(doc, moduleDocs) {
	    var scope = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	    var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'Properties';
	
	    var propertyDocs = orderAwareSort(doc, moduleDocs.filter(function (entityDoc) {
	
	      return (scope ? scope(entityDoc.nodeInfo.scope) : true) && (entityDoc.nodeInfo.type === K.TYPE_LITERAL || entityDoc.tags.some(function (x) {
	        return x.type === 'property';
	      })) && entityDoc.symbol !== '~';
	    }), 'id');
	
	    if (!propertyDocs.length) {
	      return null;
	    }
	
	    return React.createElement(
	      DocGroup,
	      { label: title, tagName: 'div', className: 'js-doc-entity__property-tags' },
	      propertyDocs.map(this.renderProperty)
	    );
	  },
	  renderProperty: function renderProperty(doc) {
	    var tag = findWhere(doc.tags, { type: 'property' }) || findWhere(doc.tags, { type: 'type' }) || {
	      typeInfo: {
	        name: doc.name,
	        type: { name: doc.type }
	      }
	    };
	
	    if (doc.type && doc.type === K.TYPE_OBJECT && !!tag.typeInfo.name) {
	      return React.createElement(ObjectSynopsis, {
	        key: doc.id,
	        doc: doc,
	        anchor: this.getEntityAnchor(doc)
	      });
	    }
	
	    return React.createElement(
	      PropertyTag,
	      {
	        key: doc.id,
	        typeInfo: tag.typeInfo,
	        anchor: this.getEntityAnchor(doc),
	        doc: doc
	      },
	      doc.type && doc.type === K.TYPE_FUNCTION && React.createElement(Doc, {
	        withTitle: false,
	        collapsible: false,
	        doc: doc,
	        config: this.props.namespaceNode.config
	      })
	    );
	  },
	  renderStaticMethods: function renderStaticMethods(doc, moduleDocs) {
	    var staticMethodDocs = orderAwareSort(doc, moduleDocs.filter(DocClassifier.isStaticMethod), 'id');
	
	    if (!staticMethodDocs.length) {
	      return null;
	    }
	
	    return React.createElement(
	      DocGroup,
	      { label: 'Static Methods', tagName: 'ul', className: 'class-view__method-list' },
	      staticMethodDocs.map(this.renderStaticMethod)
	    );
	  },
	  renderCallbacks: function renderCallbacks(doc, moduleDocs) {
	    var callbackDocs = orderAwareSort(doc, moduleDocs.filter(DocClassifier.isCallback), 'id');
	
	    if (!callbackDocs.length) {
	      return null;
	    }
	
	    return React.createElement(
	      DocGroup,
	      { label: 'Callback Definitions', tagName: 'ul', className: 'class-view__method-list' },
	      callbackDocs.map(this.renderStaticMethod)
	    );
	  },
	  renderTypeDefs: function renderTypeDefs(doc, typedefNodes) {
	    var _this = this;
	
	    if (!typedefNodes.length) {
	      return null;
	    }
	
	    var orderedNodes = orderAwareSort.asNodes({ properties: doc }, typedefNodes, 'id');
	
	    return React.createElement(
	      DocGroup,
	      { label: 'Type Definitions', tagName: 'ul', className: 'class-view__type-def-list' },
	      orderedNodes.map(function (typedefNode) {
	        var typedefDoc = typedefNode.properties;
	        var propertyTags = typedefDoc.tags.filter(function (x) {
	          return x.type === 'property';
	        });
	        var memberPropertyTags = (typedefNode.entities || []).reduce(function (list, entity) {
	          return list.concat(entity.properties.tags.filter(function (x) {
	            return x.type === 'property';
	          }).map(function (propertyTag) {
	            return Object.assign({}, propertyTag, { anchor: entity.meta.anchor });
	          }));
	        }, []);
	
	        var allPropertyTags = propertyTags.concat(memberPropertyTags);
	
	        return React.createElement(
	          Doc,
	          {
	            key: typedefDoc.id,
	            doc: typedefDoc,
	            anchor: _this.getEntityAnchor(typedefDoc),
	            config: _this.props.namespaceNode.config,
	            headingTag: 'h3'
	          },
	          allPropertyTags.length > 0 && React.createElement(
	            'h4',
	            { className: 'tag-group__header' },
	            "Properties"
	          ),
	          allPropertyTags.map(function (tag, i) {
	            return React.createElement(PropertyTag, {
	              key: i,
	              typeInfo: tag.typeInfo,
	              anchor: tag.anchor
	            });
	          })
	        );
	      })
	    );
	  },
	  renderStaticMethod: function renderStaticMethod(doc) {
	    return React.createElement(Doc, {
	      key: doc.id,
	      doc: doc,
	      anchor: this.getEntityAnchor(doc),
	      config: this.props.namespaceNode.config,
	      headingTag: 'h3'
	    });
	  },
	  renderMethods: function renderMethods(doc, moduleDocs) {
	    var methodDocs = orderAwareSort(doc, moduleDocs.filter(DocClassifier.isMethod), 'id');
	
	    if (!methodDocs.length) {
	      return null;
	    }
	
	    return React.createElement(
	      DocGroup,
	      { label: 'Instance Methods', tagName: 'ul', className: 'class-view__method-list' },
	      methodDocs.map(this.renderMethod)
	    );
	  },
	  renderMethod: function renderMethod(doc) {
	    return React.createElement(Doc, {
	      key: doc.id,
	      doc: doc,
	      anchor: this.getEntityAnchor(doc),
	      config: this.props.namespaceNode.config,
	      headingTag: 'h3'
	    });
	  },
	  getEntityAnchor: function getEntityAnchor(doc) {
	    return this.props.documentNode.entities.filter(function (x) {
	      return x.properties === doc;
	    })[0].meta.anchor;
	  }
	});
	
	function isStaticProperty(scope) {
	  return [K.SCOPE_PROTOTYPE, K.SCOPE_INSTANCE].indexOf(scope) === -1 || scope;
	}
	
	function getMixedInTargets(node, namespaceNode) {
	  var uid = node.uid;
	
	
	  return namespaceNode.documents.reduce(findMatchingDocuments, []);
	
	  function findMatchingDocuments(list, documentNode) {
	    if (match(documentNode)) {
	      list.push(documentNode);
	    }
	
	    if (documentNode.documents) {
	      documentNode.documents.reduce(findMatchingDocuments, list);
	    }
	
	    return list;
	  }
	
	  function match(x) {
	    return x.properties && x.properties.mixinTargets && x.properties.mixinTargets.some(function (y) {
	      return y.uid === uid;
	    });
	  }
	}
	
	module.exports = ModuleBody;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var React = __webpack_require__(3);
	var classSet = __webpack_require__(31);
	var HighlightedText = __webpack_require__(13);
	var DocTags = __webpack_require__(32);
	var FunctionSignature = __webpack_require__(27);
	var TypeNames = __webpack_require__(25);
	var DeprecatedTag = __webpack_require__(45);
	var K = __webpack_require__(4);
	var DocClassifier = __webpack_require__(14);
	var Collapsible = __webpack_require__(34);
	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    bool = _React$PropTypes.bool,
	    string = _React$PropTypes.string;
	
	var HeadingAnchor = __webpack_require__(12);
	
	var Doc = React.createClass({
	  displayName: 'Doc',
	
	  mixins: [Collapsible],
	
	  propTypes: {
	    anchor: string,
	    children: React.PropTypes.node,
	    doc: object.isRequired,
	    config: object.isRequired,
	    collapsible: bool,
	    expanded: bool,
	    headingTag: string,
	    withExamples: bool,
	    withTitle: bool,
	    withDescription: bool,
	    withAdditionalResources: bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      headingTag: 'h4',
	      withTitle: true,
	      withDescription: true,
	      withExamples: true
	    };
	  },
	
	  // shouldComponentUpdate: function(nextProps, nextState) {
	  //   return (
	  //     nextProps.doc !== this.props.doc ||
	  //     nextState.collapsed !== this.state.collapsed ||
	  //     nextProps.expanded !== this.props.expanded
	  //   );
	  // },
	
	  render: function render() {
	    var isCollapsed = this.isCollapsed();
	    var className = classSet({
	      'doc-entity': true,
	      'collapsible': !!this.props.collapsible,
	      'collapsible--expanded': !isCollapsed,
	      'collapsible--collapsed': isCollapsed
	    });
	
	    var _props = this.props,
	        doc = _props.doc,
	        anchor = _props.anchor;
	
	    var description = doc.description;
	    var deprecatedTag = doc.tags.filter(function (t) {
	      return t.type === 'deprecated';
	    })[0];
	    var isPrivate = DocClassifier.isPrivate(doc);
	    var HeadingTag = this.props.headingTag || 'h4';
	
	    if (isPrivate && this.props.config.hidePrivateSymbols) {
	      return null;
	    }
	
	    return React.createElement(
	      'div',
	      { className: className },
	      this.props.withTitle && React.createElement(
	        HeadingTag,
	        {
	          className: classSet({
	            "doc-entity__header": true,
	            "collapsible-header": true,
	            "anchorable-heading": !!anchor
	          }),
	          onClick: this.toggleCollapsed,
	          title: doc.name
	        },
	        this.renderCollapser(),
	        anchor && React.createElement(HeadingAnchor.Anchor, { href: anchor }),
	        anchor && React.createElement(HeadingAnchor.Link, { href: anchor }),
	        React.createElement(
	          HeadingAnchor.Text,
	          { className: 'doc-entity__name' },
	          React.createElement(
	            'span',
	            { className: 'doc-entity__name-fragment' },
	            doc.name
	          ),
	          isFunction(doc) && React.createElement(FunctionSignature, { doc: doc }),
	          this.renderReturnType(),
	          doc.isConstructor && React.createElement(
	            'span',
	            { className: 'doc-entity__modifier' },
	            'CONSTRUCTOR'
	          ),
	          DocClassifier.isProtected(doc) && React.createElement(
	            'span',
	            { className: 'doc-entity__modifier doc-entity__protected' },
	            'PROTECTED'
	          ),
	          isPrivate && React.createElement(
	            'span',
	            { className: 'doc-entity__modifier doc-entity__private' },
	            'PRIVATE'
	          ),
	          doc.tags.some(function (t) {
	            return t.type === 'async';
	          }) && React.createElement(
	            'span',
	            { className: 'doc-entity__modifier doc-entity__async' },
	            'ASYNC'
	          ),
	          deprecatedTag && React.createElement(
	            'span',
	            { className: 'doc-entity__modifier doc-entity__async' },
	            'DEPRECATED'
	          )
	        )
	      ),
	      React.createElement(
	        'div',
	        { className: 'doc-entity__description' },
	        deprecatedTag && deprecatedTag.string.length > 0 && React.createElement(DeprecatedTag, { string: deprecatedTag.string }),
	        this.props.withDescription && description && description.length > 0 && !isCollapsed && React.createElement(
	          HighlightedText,
	          null,
	          description
	        )
	      ),
	      !isCollapsed && doc.tags.length > 0 && React.createElement(DocTags, {
	        tags: doc.tags,
	        doc: doc,
	        config: this.props.config,
	        withExamples: this.props.withExamples,
	        withAdditionalResources: this.props.withAdditionalResources
	      }),
	      !isCollapsed && this.props.children
	    );
	  },
	  renderReturnType: function renderReturnType() {
	    var _props$doc$tags$filte = this.props.doc.tags.filter(function (t) {
	      return t.type === 'return';
	    }),
	        _props$doc$tags$filte2 = _slicedToArray(_props$doc$tags$filte, 1),
	        tag = _props$doc$tags$filte2[0];
	
	    if (!tag) {
	      return null;
	    }
	
	    return React.createElement(
	      'span',
	      { className: 'doc-entity__method-params' },
	      ' -> ',
	      React.createElement(TypeNames, { type: tag.typeInfo.type })
	    );
	  }
	});
	
	function isFunction(doc) {
	  return doc.type === K.TYPE_FUNCTION;
	}
	
	module.exports = Doc;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["utils/classSet"];

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var TagGroup = __webpack_require__(33);
	var TypeDefTagGroup = __webpack_require__(35);
	var ExampleTag = __webpack_require__(36);
	var ParamTag = __webpack_require__(37);
	var SeeTag = __webpack_require__(39);
	var ThrowsTag = __webpack_require__(41);
	var ReturnTag = __webpack_require__(42);
	var CallbackTag = __webpack_require__(43);
	var TabularTagGroup = __webpack_require__(44);
	
	var _require = __webpack_require__(19),
	    where = _require.where;
	
	var HANDLED_TAGS = ['alias', 'async', 'callback', 'class', 'constructor', 'deprecated', 'example', 'memberOf', 'method', 'module', 'name', 'namespace', 'param', 'preserveOrder', 'private', 'property', 'protected', 'return', 'see', 'static', 'throws', 'type', 'typedef'];
	
	var DocTags = React.createClass({
	  displayName: 'DocTags',
	
	  propTypes: {
	    config: React.PropTypes.object.isRequired,
	    tags: React.PropTypes.array,
	    callbacks: React.PropTypes.array,
	    withExamples: React.PropTypes.bool,
	    withAdditionalResources: React.PropTypes.bool
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tags: [],
	      callbacks: [],
	      withExamples: true,
	      withAdditionalResources: true
	    };
	  },
	
	
	  // shouldComponentUpdate: function(nextProps) {
	  //   return this.props.tags !== nextProps.tags;
	  // },
	
	  render: function render() {
	    var paramTags = where(this.props.tags, { type: 'param' });
	    var returnTags = where(this.props.tags, { type: 'return' });
	    var unhandledTags = this.props.tags.filter(function (tag) {
	      return HANDLED_TAGS.indexOf(tag.type) === -1;
	    });
	    var config = this.props.config;
	
	
	    return React.createElement(
	      'div',
	      { className: 'doc-entity__tags' },
	      React.createElement(
	        TabularTagGroup,
	        {
	          alwaysGroup: true,
	          tagName: 'div',
	          tags: paramTags,
	          renderer: ParamTag,
	          hideIfEmpty: config.hideBlankParameters
	        },
	        'Parameters (',
	        paramTags.length,
	        ')'
	      ),
	      React.createElement(
	        TabularTagGroup,
	        {
	          alwaysGroup: true,
	          tagName: 'div',
	          tags: returnTags,
	          tagType: 'return',
	          renderer: ReturnTag,
	          hideIfEmpty: config.hideBlankReturns
	        },
	        returnTags.length > 1 ? 'Return Values' : 'Return Value'
	      ),
	      this.props.withExamples && React.createElement(
	        TagGroup,
	        { alwaysGroup: true, tags: this.props.tags, tagType: 'example', renderer: ExampleTag, tagName: 'ul' },
	        'Examples'
	      ),
	      React.createElement(
	        TagGroup,
	        { alwaysGroup: true, tagName: 'ul', tags: this.props.tags, tagType: 'throws', renderer: ThrowsTag },
	        React.createElement(
	          'span',
	          { className: 'type-attention' },
	          'Exceptions'
	        )
	      ),
	      React.createElement(
	        TypeDefTagGroup,
	        { alwaysGroup: true, tagName: 'ul', documents: this.props.callbacks, renderer: CallbackTag },
	        'Callback Definitions'
	      ),
	      this.props.withAdditionalResources && React.createElement(
	        TagGroup,
	        { alwaysGroup: true, tags: this.props.tags, tagType: 'see', renderer: SeeTag, tagName: 'ul' },
	        'Suggested Reading'
	      ),
	      unhandledTags.length > 0 && unhandledTags.map(this.renderTagString)
	    );
	  },
	  renderTagString: function renderTagString(tag) {
	    return React.createElement(
	      'div',
	      { key: tag.string, className: 'type-attention' },
	      React.createElement(
	        'pre',
	        null,
	        "Unknown tag:\n" + JSON.stringify(tag, null, 2)
	      )
	    );
	  }
	});
	
	module.exports = DocTags;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	
	var _require = __webpack_require__(19),
	    where = _require.where;
	
	var Collapsible = __webpack_require__(34);
	var classSet = __webpack_require__(31);
	
	var TagGroup = React.createClass({
	  displayName: 'TagGroup',
	
	  mixins: [Collapsible],
	
	  propTypes: {
	    tagName: React.PropTypes.string,
	    tagType: React.PropTypes.string,
	    alwaysGroup: React.PropTypes.bool,
	    tags: React.PropTypes.array,
	
	    renderer: React.PropTypes.func,
	    className: React.PropTypes.string,
	    children: React.PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tagName: 'div',
	      alwaysGroup: false
	    };
	  },
	
	  render: function render() {
	    var DOMTag = this.props.tagName;
	    var tags = this.props.tagType ? where(this.props.tags, { type: this.props.tagType }) : this.props.tags;
	    var Renderer = this.props.renderer;
	    var isCollapsed = this.isCollapsed();
	    var className;
	
	    if (tags.length === 0) {
	      return null;
	    } else if (tags.length === 1 && !this.props.alwaysGroup) {
	      return React.createElement(Renderer, _extends({ withTitle: true }, tags[0]));
	    } else {
	      className = classSet({
	        'tag-group': true,
	        'tag-group--collapsed': isCollapsed,
	        'collapsible': this.isCollapsible(),
	        'collapsible--collapsed': isCollapsed,
	        'tag-group--single-child': tags.length === 1
	      });
	
	      return React.createElement(
	        DOMTag,
	        { className: className + ' ' + (this.props.className || '') },
	        this.props.children && React.createElement(
	          'h4',
	          { className: 'tag-group__header collapsible-header', onClick: this.toggleCollapsed },
	          this.renderCollapser(),
	          this.props.children
	        ),
	        !isCollapsed && tags.map(function (tag, i) {
	          return React.createElement(Renderer, _extends({ key: i, withTitle: false }, tag));
	        })
	      );
	    }
	  }
	});
	
	module.exports = TagGroup;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["mixins/Collapsible"];

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var Collapsible = __webpack_require__(34);
	var classSet = __webpack_require__(31);
	
	var TypeDefTagGroup = React.createClass({
	  displayName: 'TypeDefTagGroup',
	
	  mixins: [Collapsible],
	
	  propTypes: {
	    tagName: React.PropTypes.string,
	    alwaysGroup: React.PropTypes.bool,
	    documents: React.PropTypes.array,
	
	    renderer: React.PropTypes.func,
	    className: React.PropTypes.string,
	    children: React.PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tagName: 'div',
	      alwaysGroup: false
	    };
	  },
	
	  render: function render() {
	    var DOMTag = this.props.tagName;
	    var documents = this.props.documents;
	    var Renderer = this.props.renderer;
	    var isCollapsed = this.isCollapsed();
	    var className;
	
	    if (documents.length === 0) {
	      return null;
	    } else if (documents.length === 1 && !this.props.alwaysGroup) {
	      return React.createElement(Renderer, { withTitle: true, document: documents[0] });
	    } else {
	      className = classSet({
	        'tag-group': true,
	        'tag-group--collapsed': isCollapsed,
	        'collapsible': this.isCollapsible(),
	        'collapsible--collapsed': isCollapsed,
	        'tag-group--single-child': documents.length === 1
	      });
	
	      return React.createElement(
	        DOMTag,
	        { className: className + ' ' + (this.props.className || '') },
	        this.props.children && React.createElement(
	          'h4',
	          { className: 'tag-group__header collapsible-header', onClick: this.toggleCollapsed },
	          this.renderCollapser(),
	          this.props.children
	        ),
	        !isCollapsed && documents.map(function (tag, i) {
	          return React.createElement(Renderer, { key: i, withTitle: false, document: tag });
	        })
	      );
	    }
	  }
	});
	
	module.exports = TypeDefTagGroup;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var HighlightedText = __webpack_require__(13);
	
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string;
	
	
	var ExampleTag = React.createClass({
	  displayName: "ExampleTag",
	
	  propTypes: {
	    string: string,
	    typeInfo: shape({
	      name: string,
	      description: string
	    })
	  },
	
	  render: function render() {
	    var _props$typeInfo = this.props.typeInfo,
	        name = _props$typeInfo.name,
	        description = _props$typeInfo.description;
	
	
	    return React.createElement(
	      "div",
	      { className: "example-tag" },
	      name && React.createElement(
	        "p",
	        null,
	        React.createElement("span", { dangerouslySetInnerHTML: { __html: name } })
	      ),
	      React.createElement(
	        HighlightedText,
	        { className: "example-tag__code" },
	        description
	      )
	    );
	  }
	});
	
	module.exports = ExampleTag;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var HighlightedText = __webpack_require__(13);
	var TypeNames = __webpack_require__(25);
	var DefaultValue = __webpack_require__(38);
	
	var ParamTag = React.createClass({
	  displayName: "ParamTag",
	
	  propTypes: {
	    withTitle: React.PropTypes.bool,
	    typeInfo: React.PropTypes.shape({
	      type: React.PropTypes.object,
	      name: React.PropTypes.string,
	      defaultValue: React.PropTypes.string,
	      description: React.PropTypes.string
	    })
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      withTitle: false
	    };
	  },
	
	  render: function render() {
	    var typeInfo = this.props.typeInfo;
	
	
	    return React.createElement(
	      'li',
	      { className: 'param-tag' },
	      React.createElement(
	        'header',
	        { className: 'param-tag__header' },
	        this.props.withTitle && React.createElement(
	          'strong',
	          null,
	          'Parameter',
	          ' '
	        ),
	        React.createElement(
	          'code',
	          { className: 'param-tag__name' },
	          typeInfo.name
	        ),
	        typeInfo.type && React.createElement(
	          'code',
	          { className: 'param-tag__types' },
	          ': ',
	          React.createElement(TypeNames, { type: typeInfo.type })
	        )
	      ),
	      typeInfo.description && React.createElement(
	        HighlightedText,
	        { className: 'param-tag__description' },
	        typeInfo.description.replace(/[ ]{4,}/g, '')
	      ),
	      React.createElement(DefaultValue, { defaultValue: typeInfo.defaultValue })
	    );
	  }
	});
	
	module.exports = ParamTag;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var DefaultValue = React.createClass({
	  displayName: "DefaultValue",
	
	  propTypes: {
	    defaultValue: React.PropTypes.string
	  },
	
	  render: function render() {
	    var defaultValue = this.props.defaultValue;
	
	
	    if (!defaultValue) {
	      return null;
	    }
	
	    return React.createElement(
	      "p",
	      { className: "property-tag__default-value" },
	      "Defaults to: ",
	      React.createElement(
	        "code",
	        null,
	        defaultValue
	      )
	    );
	  }
	});
	
	module.exports = DefaultValue;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var MarkdownText = __webpack_require__(40);
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string;
	
	
	var SeeTag = React.createClass({
	  displayName: "SeeTag",
	
	  propTypes: {
	    typeInfo: shape({
	      name: string.isRequired
	    })
	  },
	
	  render: function render() {
	    return React.createElement(
	      "li",
	      { className: "see-tag" },
	      React.createElement(
	        MarkdownText,
	        { tagName: "span" },
	        this.props.typeInfo.name
	      )
	    );
	  }
	});
	
	module.exports = SeeTag;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/MarkdownText"];

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var HighlightedText = __webpack_require__(13);
	var TypeNames = __webpack_require__(25);
	
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;
	
	
	var ThrowsTag = React.createClass({
	  displayName: 'ThrowsTag',
	
	  propTypes: {
	    typeInfo: shape({
	      type: object,
	      description: string
	    })
	  },
	
	  render: function render() {
	    return React.createElement(
	      'li',
	      { className: 'throws-tag' },
	      React.createElement(
	        'p',
	        { className: 'inline-block' },
	        React.createElement(TypeNames, { type: this.props.typeInfo.type })
	      ),
	      ' - ',
	      React.createElement(HighlightedText, {
	        className: 'inline-block',
	        children: this.props.typeInfo.description
	      })
	    );
	  }
	});
	
	module.exports = ThrowsTag;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var HighlightedText = __webpack_require__(13);
	var TypeNames = __webpack_require__(25);
	
	var ReturnTag = React.createClass({
	  displayName: "ReturnTag",
	
	  propTypes: {
	    withTitle: React.PropTypes.bool,
	    typeInfo: React.PropTypes.shape({
	      type: React.PropTypes.object,
	      name: React.PropTypes.string,
	      defaultValue: React.PropTypes.string,
	      description: React.PropTypes.string
	    })
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      withTitle: false
	    };
	  },
	
	  render: function render() {
	    var typeInfo = this.props.typeInfo;
	
	    var hasName = Boolean(typeInfo.name);
	
	    return React.createElement(
	      'li',
	      { className: 'return-tag' },
	      React.createElement(
	        'header',
	        { className: 'return-tag__header' },
	        this.props.withTitle && React.createElement(
	          'strong',
	          null,
	          'Returns'
	        ),
	        hasName && React.createElement(
	          'code',
	          { className: 'return-tag__name' },
	          typeInfo.name
	        ),
	        typeInfo.type && React.createElement(
	          'code',
	          { className: 'return-tag__types' },
	          hasName && ': ',
	          React.createElement(TypeNames, { type: typeInfo.type }),
	          typeInfo.defaultValue && React.createElement(
	            'span',
	            { className: 'param-tag__default-value' },
	            ' (',
	            'defaults to: ',
	            React.createElement(
	              'code',
	              null,
	              typeInfo.defaultValue
	            ),
	            ')'
	          )
	        )
	      ),
	      typeInfo.description && React.createElement(
	        HighlightedText,
	        { className: 'return-tag__description' },
	        typeInfo.description.replace(/[ ]{5,8}/g, '')
	      )
	    );
	  }
	});
	
	module.exports = ReturnTag;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var Doc = __webpack_require__(30);
	
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object;
	
	
	var CallbackTag = React.createClass({
	  displayName: "CallbackTag",
	
	  propTypes: {
	    string: string,
	    typeInfo: shape({
	      name: string,
	      description: string
	    }),
	    document: object.isRequired
	  },
	
	  render: function render() {
	    return React.createElement(
	      "div",
	      { className: "callback-tag" },
	      React.createElement(Doc, { doc: this.props.document })
	    );
	  }
	});
	
	module.exports = CallbackTag;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var React = __webpack_require__(3);
	
	var _require = __webpack_require__(19),
	    where = _require.where;
	
	var Collapsible = __webpack_require__(34);
	var classSet = __webpack_require__(31);
	var TypeNames = __webpack_require__(25);
	var DefaultValue = __webpack_require__(38);
	var HighlightedText = __webpack_require__(13);
	
	var TabularTagGroup = React.createClass({
	  displayName: 'TabularTagGroup',
	
	  mixins: [Collapsible],
	
	  propTypes: {
	    tagName: React.PropTypes.string,
	    tagType: React.PropTypes.string,
	    alwaysGroup: React.PropTypes.bool,
	    tags: React.PropTypes.array,
	    hideIfEmpty: React.PropTypes.bool,
	
	    renderer: React.PropTypes.func,
	    className: React.PropTypes.string,
	    children: React.PropTypes.any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tagName: 'div',
	      alwaysGroup: false
	    };
	  },
	
	  render: function render() {
	    var DOMTag = this.props.tagName;
	    var tags = this.props.tagType ? where(this.props.tags, { type: this.props.tagType }) : this.props.tags;
	    var Renderer = this.props.renderer;
	    var isCollapsed = this.isCollapsed();
	    var className;
	
	    if (tags.length === 0) {
	      return null;
	    } else if (this.props.hideIfEmpty && tags.every(tagIsBlank)) {
	      return null;
	    } else if (tags.length === 1 && !this.props.alwaysGroup) {
	      return React.createElement(Renderer, _extends({ withTitle: true }, tags[0]));
	    } else {
	      className = classSet(this.props.className, {
	        'tag-group': true,
	        'tag-group--tabular': true,
	        'tag-group--collapsed': isCollapsed,
	        'collapsible': this.isCollapsible(),
	        'collapsible--collapsed': isCollapsed,
	        'tag-group--single-child': tags.length === 1
	      });
	
	      return React.createElement(
	        DOMTag,
	        { className: className },
	        this.props.children && React.createElement(
	          'h4',
	          { className: 'tag-group__header collapsible-header', onClick: this.toggleCollapsed },
	          this.renderCollapser(),
	          this.props.children
	        ),
	        !isCollapsed && React.createElement(
	          'table',
	          null,
	          React.createElement(
	            'tbody',
	            null,
	            tags.map(this.renderTag)
	          )
	        )
	      );
	    }
	  },
	  renderTag: function renderTag(tag, i) {
	    var typeInfo = tag.typeInfo;
	
	    var hasName = Boolean(typeInfo.name && typeInfo.name.length > 0);
	
	    return React.createElement(
	      'tr',
	      { key: i, className: 'param-tag' },
	      React.createElement(
	        'td',
	        { className: 'tag-group__primary-column' },
	        hasName && React.createElement(
	          'header',
	          { className: 'param-tag__header' },
	          React.createElement(
	            'code',
	            { className: 'param-tag__name' },
	            typeInfo.name
	          )
	        )
	      ),
	      React.createElement(
	        'td',
	        null,
	        typeInfo.type && React.createElement(
	          'code',
	          { className: 'param-tag__types' },
	          React.createElement(TypeNames, { type: typeInfo.type })
	        ),
	        typeInfo.description && React.createElement(
	          HighlightedText,
	          { className: 'param-tag__description' },
	          typeInfo.description.replace(/[ ]{4,}/g, '')
	        ),
	        React.createElement(DefaultValue, { defaultValue: typeInfo.defaultValue })
	      )
	    );
	  }
	});
	
	function tagIsBlank(_ref) {
	  var string = _ref.string;
	
	  return !string || !string.length === 0;
	}
	
	module.exports = TabularTagGroup;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var DeprecatedTag = React.createClass({
	  displayName: "DeprecatedTag",
	
	  propTypes: {
	    string: React.PropTypes.string.isRequired
	  },
	
	  render: function render() {
	    return React.createElement(
	      "blockquote",
	      { className: "blockquote--warning" },
	      React.createElement(
	        "p",
	        null,
	        React.createElement(
	          "strong",
	          null,
	          "Deprecated"
	        )
	      ),
	      this.props.string
	    );
	  }
	});
	
	module.exports = DeprecatedTag;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var PropertyTag = __webpack_require__(47);
	
	var _require = __webpack_require__(19),
	    assign = _require.assign;
	
	var PropTypes = React.PropTypes;
	
	
	var ObjectSynopsis = React.createClass({
	  displayName: 'ObjectSynopsis',
	
	
	  propTypes: {
	    doc: PropTypes.object,
	    anchor: PropTypes.string
	  },
	
	  render: function render() {
	    var _props = this.props,
	        anchor = _props.anchor,
	        doc = _props.doc;
	
	    var tags = this.props.doc.tags.filter(function (tag) {
	      return tag.type === 'property';
	    });
	
	    var tree = tags.reduce(function (map, tag) {
	      var fragments = tag.typeInfo.name.split('.');
	      var parentKey = fragments.slice(0, -1).join('.');
	
	      if (!map[parentKey]) {
	        map[parentKey] = [];
	      }
	
	      map[parentKey].push(tag);
	
	      return map;
	    }, {});
	
	    var render = function render(key) {
	      var childTags = tree[key];
	
	      if (!childTags || !childTags.length) {
	        return null;
	      }
	
	      return childTags.map(function (tag, index) {
	        var children = render(tag.typeInfo.name);
	        var isRoot = tag.typeInfo.name === doc.name;
	
	        return React.createElement(
	          'div',
	          { key: key + '__' + index },
	          React.createElement(
	            PropertyTag,
	            {
	              anchor: isRoot && anchor || null,
	              collapsible: isRoot,
	              typeInfo: assign({}, tag.typeInfo, {
	                name: tag.typeInfo.name.split('.').slice(-1).join('.')
	              })
	            },
	            children
	          )
	        );
	      });
	    };
	
	    return React.createElement(
	      'div',
	      { className: 'js-object-synopsis' },
	      render('')
	    );
	  }
	});
	
	module.exports = ObjectSynopsis;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var HighlightedText = __webpack_require__(13);
	var HeadingAnchor = __webpack_require__(12);
	var TypeNames = __webpack_require__(25);
	var DefaultValue = __webpack_require__(38);
	var describeNode = __webpack_require__(48);
	var DocClassifier = __webpack_require__(14);
	var Collapsible = __webpack_require__(34);
	var classSet = __webpack_require__(20);
	var _React$PropTypes = React.PropTypes,
	    shape = _React$PropTypes.shape,
	    string = _React$PropTypes.string,
	    object = _React$PropTypes.object,
	    node = _React$PropTypes.node;
	
	
	var PropertyTag = React.createClass({
	  mixins: [Collapsible],
	
	  displayName: "PropertyTag",
	
	  propTypes: {
	    children: node,
	    anchor: string,
	    typeInfo: shape({
	      type: object,
	      name: string,
	      defaultValue: string,
	      description: string
	    }),
	
	    doc: object
	  },
	
	  render: function render() {
	    var _props = this.props,
	        anchor = _props.anchor,
	        typeInfo = _props.typeInfo,
	        doc = _props.doc;
	
	    var description = typeInfo.description || doc && doc.description;
	    var defaultValue = typeInfo.defaultValue || doc && describeNode(doc.nodeInfo);
	    var collapsed = this.isCollapsed();
	    var collapsible = this.isCollapsible() && description && description.length;
	
	    return React.createElement(
	      'div',
	      { className: classSet("property-tag", {
	          'collapsible': collapsible,
	          'collapsible--collapsed': this.isCollapsed()
	        }) },
	      React.createElement(
	        'header',
	        {
	          className: classSet("property-tag__header anchorable-heading", {
	            "collapsible-header": collapsible
	          }),
	          onClick: this.toggleCollapsed
	        },
	        collapsible && this.renderCollapser(),
	        anchor && React.createElement(HeadingAnchor.Anchor, { href: this.props.anchor }),
	        anchor && React.createElement(HeadingAnchor.Link, { href: this.props.anchor }),
	        React.createElement(
	          'span',
	          { className: 'property-tag__name' },
	          typeInfo.name || doc && doc.name
	        ),
	        ': ',
	        React.createElement(
	          'code',
	          null,
	          React.createElement(TypeNames, { type: typeInfo.type })
	        ),
	        doc && DocClassifier.isPrivate(doc) && React.createElement(
	          'span',
	          { className: 'doc-entity__modifier doc-entity__private' },
	          'PRIVATE'
	        )
	      ),
	      !collapsed && description && React.createElement(
	        HighlightedText,
	        { className: 'property-tag__description' },
	        description
	      ),
	      !collapsed && defaultValue && React.createElement(DefaultValue, { defaultValue: defaultValue }),
	      !collapsed && this.props.children
	    );
	  }
	});
	
	module.exports = PropertyTag;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var K = __webpack_require__(4);
	
	module.exports = function (nodeInfo) {
	  return describeNode(nodeInfo, true);
	};
	
	function describeNode(nodeInfo, stringify) {
	  var print = stringify ? prettyJSON : Identity;
	
	  if (!nodeInfo.type) {
	    return null;
	  }
	
	  if (nodeInfo.type === K.TYPE_LITERAL && nodeInfo.regexp) {
	    return nodeInfo.hasOwnProperty('value') ? nodeInfo.value : null;
	  } else if (nodeInfo.type === K.TYPE_LITERAL) {
	    return print(nodeInfo.hasOwnProperty('value') ? nodeInfo.value : null);
	  } else if (nodeInfo.type === K.TYPE_ARRAY) {
	    return print(nodeInfo.elements.map(function (x) {
	      return describeNode(x, false);
	    }));
	  } else if (nodeInfo.type === K.TYPE_OBJECT) {
	    return print(nodeInfo.properties.reduce(function (map, x) {
	      if (x) {
	        map[x.key] = describeNode(x.value, false);
	      }
	
	      return map;
	    }, {}));
	  }
	
	  return null;
	}
	
	function prettyJSON(x) {
	  return JSON.stringify(x, null, 2);
	}
	
	function Identity(x) {
	  return x;
	}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var _React$PropTypes = React.PropTypes,
	    string = _React$PropTypes.string,
	    any = _React$PropTypes.any;
	
	
	var DocGroup = React.createClass({
	  displayName: 'DocGroup',
	
	  propTypes: {
	    tagName: string,
	    label: string,
	    className: string,
	    children: any
	  },
	
	  getDefaultProps: function getDefaultProps() {
	    return {
	      tagName: 'div'
	    };
	  },
	
	  // shouldComponentUpdate: function(nextProps) {
	  //   return this.props.children !== nextProps.children;
	  // },
	
	  render: function render() {
	    var DOMTag = this.props.tagName;
	
	    return React.createElement(
	      'div',
	      { className: 'doc-group' },
	      React.createElement('h2', { className: 'doc-group__header', children: this.props.label }),
	      React.createElement(
	        DOMTag,
	        { className: this.props.className },
	        this.props.children
	      )
	    );
	  }
	});
	
	module.exports = DocGroup;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var ClassBrowser = __webpack_require__(51);
	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    shape = _React$PropTypes.shape,
	    bool = _React$PropTypes.bool;
	
	
	module.exports = React.createClass({
	  displayName: 'JS::BrowserOutlet',
	  propTypes: {
	    documentNode: object,
	    namespaceNode: object,
	    documentEntityNode: object,
	    $outletOptions: shape({
	      flat: bool,
	      linkNamespaces: bool
	    })
	  },
	
	  render: function render() {
	    return React.createElement(ClassBrowser, {
	      namespaceNode: this.props.namespaceNode,
	      documentNode: this.props.documentNode,
	      documentEntityNode: this.props.documentEntityNode,
	      withControls: this.props.namespaceNode.enableSidebarControls !== false,
	      flat: this.props.$outletOptions.flat,
	      linkToNamespaces: this.props.$outletOptions.linkNamespaces
	    });
	  }
	});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var React = __webpack_require__(3);
	var console = __webpack_require__(52);
	var Link = __webpack_require__(17);
	var classSet = __webpack_require__(31);
	var Checkbox = __webpack_require__(53);
	var Icon = __webpack_require__(54);
	var HotItemIndicator = __webpack_require__(55);
	
	var _require = __webpack_require__(19),
	    sortBy = _require.sortBy;
	
	var orderAwareSort = __webpack_require__(18);
	var DocClassifier = __webpack_require__(14);
	var _React$PropTypes = React.PropTypes,
	    object = _React$PropTypes.object,
	    bool = _React$PropTypes.bool;
	
	
	var ClassBrowser = React.createClass({
	  displayName: "ClassBrowser",
	
	  propTypes: {
	    withControls: bool,
	    documentNode: object,
	    documentEntityNode: object,
	    namespaceNode: object,
	    flat: bool,
	    linkNamespaces: bool,
	    showTypeDefs: bool
	  },
	
	  getInitialState: function getInitialState() {
	    return {
	      showPrivateModules: false
	    };
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      showTypeDefs: false,
	      withControls: true
	    };
	  },
	
	
	  // shouldComponentUpdate: function(nextProps) {
	  //   return (
	  //     nextProps.documentEntityNode !== this.props.documentEntityNode ||
	  //     nextProps.documentNode !== this.props.documentNode ||
	  //     nextProps.namespaceNode !== this.props.namespaceNode
	  //   );
	  // },
	
	  render: function render() {
	    var rootDocuments = this.props.namespaceNode.documents;
	    var genericNamespace = {
	      id: '__general__',
	      title: '[General]',
	      documents: [],
	      meta: {}
	    };
	
	    var hasPrivateModules = rootDocuments.some(function (x) {
	      return x.documents.some(function (y) {
	        return DocClassifier.isPrivate(y.properties);
	      });
	    });
	
	    var namespaces = rootDocuments.reduce(function (list, node) {
	      if (node.documents.length) {
	        list.push(node);
	      } else {
	        list[0].documents.push(node);
	      }
	
	      return list;
	    }, [genericNamespace]).sort(function (a, b) {
	      if (a.id === '__general__') {
	        return 1;
	      } else {
	        return a.id > b.id ? 1 : -1;
	      }
	    });
	
	    var shouldDisplayName = namespaces.length > 1;
	
	    return React.createElement(
	      "nav",
	      { className: "megadoc-document-browser class-browser__listing" },
	      namespaces.map(this.renderNamespace.bind(null, shouldDisplayName)),
	      this.props.withControls && hasPrivateModules && React.createElement(
	        "div",
	        { className: "class-browser__controls" },
	        React.createElement(Checkbox, {
	          checked: this.state.showPrivateModules,
	          onChange: this.togglePrivateVisibility,
	          children: "Show private"
	        })
	      )
	    );
	  },
	  renderNamespace: function renderNamespace(shouldDisplayName, ns) {
	    var documents = ns.documents;
	
	    var config = this.props.namespaceNode.config;
	
	    var shouldHidePrivateModules = config.hidePrivateSymbols || !this.state.showPrivateModules;
	
	    var showTypeDefs = this.props.showTypeDefs || config.showTypeDefsInBrowser;
	
	    if (shouldHidePrivateModules) {
	      documents = ns.documents.filter(function (x) {
	        return !DocClassifier.isPrivate(x.properties);
	      });
	    }
	
	    if (!showTypeDefs) {
	      documents = documents.filter(function (x) {
	        return !DocClassifier.isTypeDef(x.properties);
	      });
	    }
	
	    if (documents.length === 0) {
	      return null;
	    }
	
	    var hasSelfDocument = ns.id !== '__general__' && (ns.properties || config.linkToNamespacesInBrowser || this.props.linkNamespaces);
	
	    return React.createElement(
	      "div",
	      { key: ns.id, className: "class-browser__category" },
	      shouldDisplayName && React.createElement(
	        "h3",
	        { className: "class-browser__category-name" },
	        hasSelfDocument ? React.createElement(Link, { to: ns, children: ns.title }) : ns.title
	      ),
	      hasSelfDocument && this.props.documentNode === ns && this.renderModuleEntities(ns.entities),
	      sortBy(documents, 'id').map(this.renderModule)
	    );
	  },
	  renderModule: function renderModule(docNode) {
	    var doc = docNode.properties;
	    var id = doc.id;
	
	    var isPrivate = DocClassifier.isPrivate(doc);
	    var isActive = this.props.documentNode === docNode;
	    var className = classSet({
	      'class-browser__entry': true,
	      'class-browser__entry--active': isActive
	    });
	
	    return React.createElement(
	      "div",
	      { key: docNode.uid, className: className },
	      React.createElement(
	        Link,
	        { ref: id, to: docNode, className: "class-browser__entry-link" },
	        doc.name,
	        isPrivate && this.props.namespaceNode.config.markPrivateModules !== false && React.createElement(
	          "span",
	          {
	            className: "class-browser__entry-link--private",
	            title: "This module is private" },
	          " ",
	          React.createElement(Icon, { className: "icon-cube" })
	        ),
	        doc.git && React.createElement(HotItemIndicator, { timestamp: doc.git.lastCommittedAt })
	      ),
	      isActive && !this.props.flat && this.renderModuleEntities(docNode)
	    );
	  },
	  renderModuleEntities: function renderModuleEntities(documentNode) {
	    if (!documentNode.entities || !documentNode.entities.length) {
	      return null;
	    }
	
	    if (!documentNode.properties.tags) {
	      console.log('weird docNode:', documentNode);
	    }
	
	    var hidePrivateSymbols = this.props.namespaceNode.config.hidePrivateSymbols;
	
	    var visible = function visible(entityNode) {
	      return !hidePrivateSymbols || !DocClassifier.isPrivate(entityNode.properties);
	    };
	
	    var entityDocuments = orderAwareSort.asNodes(documentNode, documentNode.entities.filter(visible), 'id');
	
	    return React.createElement(
	      "ul",
	      { className: "class-browser__methods" },
	      entityDocuments.map(this.renderEntity)
	    );
	  },
	  renderEntity: function renderEntity(node) {
	    var shouldDisplayTypeDefProperties = this.props.showTypeDefProperties || this.props.namespaceNode.config.showTypeDefPropertiesInBrowser;
	
	    return React.createElement(
	      "li",
	      { key: node.uid, className: "class-browser__methods-entity" },
	      React.createElement(Link, {
	        to: node,
	        children: (node.properties.symbol || '') + node.properties.name,
	        title: node.title
	      }),
	      shouldDisplayTypeDefProperties && DocClassifier.isTypeDef(node.properties) && this.renderModuleEntities(node)
	    );
	  },
	  togglePrivateVisibility: function togglePrivateVisibility() {
	    this.setState({
	      showPrivateModules: !this.state.showPrivateModules
	    });
	  }
	});
	
	module.exports = ClassBrowser;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	module.exports = typeof console !== 'undefined' ? console : window.console || global.console;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 53 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Checkbox"];

/***/ }),
/* 54 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/Icon"];

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	module.exports = MEGADOC_PUBLIC_MODULES["components/HotItemIndicator"];

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(3);
	var object = React.PropTypes.object;
	
	var NamespaceIndex = __webpack_require__(23);
	
	module.exports = React.createClass({
	  displayName: 'JS::NamespaceIndex',
	  propTypes: {
	    documentNode: object,
	    namespaceNode: object
	  },
	
	  render: function render() {
	    return React.createElement(NamespaceIndex, {
	      documentNode: this.props.documentNode || this.props.namespaceNode
	    });
	  }
	});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTk2NDI1MWY0YzY2N2U3NmUxODMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9JbnNwZWN0b3JPdXRsZXQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwicmVhY3RcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9qc2RvYy1wYXJzZXItZXh0ZW5kZWQvbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9vdXRsZXRzL01vZHVsZU91dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL01vZHVsZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJtaXhpbnMvSGFzVGl0bGVcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvTW9kdWxlSGVhZGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvT3V0bGV0XFxcIl1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0hlYWRpbmdcXFwiXVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSGVhZGluZ0FuY2hvclxcXCJdXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHRcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL3V0aWxzL0RvY0NsYXNzaWZpZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9Nb2R1bGVFbnRpdGllc091dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0NsYXNzRW50aXR5QnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0xpbmtcXFwiXVwiIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL3V0aWxzL29yZGVyQXdhcmVTb3J0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImxvZGFzaFxcXCJdXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY2xhc3NuYW1lc1xcXCJdXCIiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9Nb2R1bGVIZWFkZXJPdXRsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9Nb2R1bGVJbmRleE91dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL05hbWVzcGFjZUluZGV4LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvTW9kdWxlSW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1R5cGVOYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS91dGlscy9kZXNjcmliZVR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9GdW5jdGlvblNpZ25hdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9vdXRsZXRzL01vZHVsZUJvZHlPdXRsZXQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9Nb2R1bGVCb2R5LmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvRG9jLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcInV0aWxzL2NsYXNzU2V0XFxcIl1cIiIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0RvY1RhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1RhZ0dyb3VwLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcIm1peGlucy9Db2xsYXBzaWJsZVxcXCJdXCIiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1R5cGVEZWZUYWdHcm91cC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvRXhhbXBsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvUGFyYW1UYWcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL0RlZmF1bHRWYWx1ZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvU2VlVGFnLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvTWFya2Rvd25UZXh0XFxcIl1cIiIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvVGhyb3dzVGFnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9SZXR1cm5UYWcuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL0NhbGxiYWNrVGFnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFidWxhclRhZ0dyb3VwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9EZXByZWNhdGVkVGFnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvT2JqZWN0U3lub3BzaXMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1Byb3BlcnR5VGFnLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL3V0aWxzL2Rlc2NyaWJlTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0RvY0dyb3VwLmpzIiwid2VicGFjazovLy8uL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvQnJvd3Nlck91dGxldC5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0NsYXNzQnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9wYWNrYWdlcy9tZWdhZG9jLWh0bWwtc2VyaWFsaXplci91aS9zaGFyZWQvY29uc29sZS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0NoZWNrYm94XFxcIl1cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0ljb25cXFwiXVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvSG90SXRlbUluZGljYXRvclxcXCJdXCIiLCJ3ZWJwYWNrOi8vLy4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9OYW1lc3BhY2VPdXRsZXQuanMiXSwibmFtZXMiOlsiSW5zcGVjdG9yT3V0bGV0IiwicmVxdWlyZSIsIk1vZHVsZU91dGxldCIsIk1vZHVsZUVudGl0aWVzT3V0bGV0IiwiTW9kdWxlSGVhZGVyT3V0bGV0IiwiTW9kdWxlSW5kZXhPdXRsZXQiLCJNb2R1bGVCb2R5T3V0bGV0IiwiQnJvd3Nlck91dGxldCIsIk5hbWVzcGFjZU91dGxldCIsImV4cG9ydHMiLCJvdXRsZXRzIiwibmFtZSIsIm91dGxldE9jY3VwYW50cyIsImNvbXBvbmVudCIsIlJlYWN0IiwiSyIsIlByb3BUeXBlcyIsInNoYXBlIiwic3RyaW5nIiwibW9kdWxlIiwiY3JlYXRlQ2xhc3MiLCJkaXNwbGF5TmFtZSIsInByb3BUeXBlcyIsImRvY3VtZW50Tm9kZSIsInByb3BlcnRpZXMiLCJzdW1tYXJ5IiwibmFtZXNwYWNlTm9kZSIsInRpdGxlIiwicmVuZGVyIiwicHJvcHMiLCJkb2MiLCJpZCIsInR5cGUiLCJUWVBFX1VOS05PV04iLCJOQU1FU1BBQ0VfU0VQIiwiU0NPUEVfVU5TQ09QRUQiLCJ1bmRlZmluZWQiLCJTQ09QRV9JTlNUQU5DRSIsIlNDT1BFX1BST1RPVFlQRSIsIlNDT1BFX0ZBQ1RPUllfRVhQT1JUUyIsIlRZUEVfT0JKRUNUIiwiVFlQRV9PQkpFQ1RfUFJPUEVSVFkiLCJUWVBFX0RFRkFVTFRfRVhQT1JUUyIsIlRZUEVfRkFDVE9SWSIsIlRZUEVfRlVOQ1RJT04iLCJUWVBFX0NMQVNTIiwiVFlQRV9BUlJBWSIsIlRZUEVfTElURVJBTCIsIlRZUEVfQUxMX0xJVEVSQUwiLCJUWVBFX1VOS05PV05fTElURVJBTCIsIlRZUEVfVU5JT04iLCJWSVNJQklMSVRZX1BST1RFQ1RFRCIsIlZJU0lCSUxJVFlfUFJJVkFURSIsIkRFRkFVTFRfRkFDVE9SWV9FWFBPUlRTX0lEIiwiVFlQRV9PVkVSUklESU5HX1RBR1MiLCJUQUdTX1dJVEhfU1RSSU5HUyIsIk5PX0RFU0NSSVBUSU9OX1RBR1MiLCJLTk9XTl9UQUdTIiwiTW9kdWxlIiwiaXNOYW1lc3BhY2VEb2N1bWVudCIsIm9iamVjdCIsIkhhc1RpdGxlIiwiTW9kdWxlSGVhZGVyIiwiT3V0bGV0IiwibWl4aW5zIiwiaXNSZXF1aXJlZCIsImRvY3VtZW50RW50aXR5Tm9kZSIsImNoaWxkQ29udGV4dFR5cGVzIiwiY29uZmlnIiwiZ2V0Q2hpbGRDb250ZXh0IiwibW9kdWxlTm9kZSIsInBhcmVudE5vZGUiLCJsZWdhY3lQYXJhbXMiLCJtb2R1bGVJZCIsImVudGl0eSIsInNob3dTb3VyY2VQYXRocyIsInNob3dOYW1lc3BhY2VJbk1vZHVsZUhlYWRlciIsInBhcmFtcyIsInF1ZXJ5IiwiSGVhZGluZyIsIkhlYWRpbmdBbmNob3IiLCJIaWdobGlnaHRlZFRleHQiLCJEb2NDbGFzc2lmaWVyIiwiYm9vbCIsImhlYWRlckxldmVsIiwiZ2VuZXJhdGVBbmNob3IiLCJzaG93TmFtZXNwYWNlIiwiZ2V0RGVmYXVsdFByb3BzIiwiYW5jaG9yIiwibWV0YSIsImZpbGVQYXRoIiwibmFtZXNwYWNlIiwiZ2V0RGlzcGxheVR5cGUiLCJoYXNNaXhpblRhcmdldHMiLCJtaXhpblRhcmdldHMiLCJtYXAiLCJ4IiwiX19odG1sIiwiaHRtbCIsImRlc2NyaXB0aW9uIiwibm9kZSIsImxlbmd0aCIsImlzTWV0aG9kIiwiY3R4Iiwibm9kZUluZm8iLCJzY29wZSIsImlzQ2FsbGJhY2siLCJ0YWdzIiwic29tZSIsImlzVHlwZURlZiIsImlzTW9kdWxlIiwiaXNGYWN0b3J5RXhwb3J0cyIsImlzQ2xhc3NFbnRpdHkiLCJpc1N0YXRpY01ldGhvZCIsImlzRXhwb3J0ZWRTeW1ib2wiLCJpc05hbWVzcGFjZSIsImVudGl0aWVzIiwibiIsImlzUHJvcGVydHkiLCJpc1N0YXRpY1Byb3BlcnR5IiwiaW5kZXhPZiIsImlzTWVtYmVyUHJvcGVydHkiLCJpc1ByaXZhdGUiLCJpc1Byb3RlY3RlZCIsImlzUHVibGljIiwiQ2xhc3NFbnRpdHlCcm93c2VyIiwiTGluayIsIm9yZGVyQXdhcmVTb3J0IiwiY2xhc3NTZXQiLCJzdGFuZGFsb25lIiwiZW50aXR5RG9jdW1lbnRzIiwiYXNOb2RlcyIsInJlbmRlckVudGl0eSIsInVpZCIsInN5bWJvbCIsInNvcnRCeSIsImFycmF5Iiwia2V5IiwicHJlc2VydmVPcmRlciIsInRhZyIsIiRvdXRsZXRPcHRpb25zIiwic2hvd0ZpbGVQYXRoIiwiTmFtZXNwYWNlSW5kZXgiLCJNb2R1bGVJbmRleCIsInNob3dGdW5jdGlvbnMiLCJzaG93UHJvcGVydGllcyIsInNob3dTdGF0aWNNZW1iZXJzIiwiY2xhc3NlcyIsImdldEJ5RGlzcGxheVR5cGUiLCJmdW5jdGlvbnMiLCJuYW1lc3BhY2VzIiwib3RoZXJzIiwiZ2V0UmVtYWluaW5nRG9jdW1lbnRzIiwicmVuZGVyR3JvdXBCeUNvbnRleHRUeXBlIiwiZG9jdW1lbnRzIiwicmVuZGVyR3JvdXAiLCJyZW5kZXJNb2R1bGVTdW1tYXJ5UmVjb3JkIiwidHlwZU5hbWVzIiwiZmlsdGVyIiwibGlzdHMiLCJ1c2VkVUlEcyIsInJlZHVjZSIsImxpc3QiLCJmb3JFYWNoIiwiVHlwZU5hbWVzIiwiRnVuY3Rpb25TaWduYXR1cmUiLCJtZW1iZXJGdWN0aW9ucyIsImdldEJ5Q2xhc3NpZmljYXRpb24iLCJtZW1iZXJQcm9wZXJ0aWVzIiwiZXhwb3J0ZWRTeW1ib2xzIiwic3RhdGljTWVtYmVycyIsInB1YmxpY1N0YXRpY01lbWJlcnMiLCJwcml2YXRlU3RhdGljTWVtYmVycyIsInJlbmRlckV4cG9ydGVkU3ltYm9scyIsInJlbmRlck1ldGhvZEdyb3VwIiwicmVuZGVyUHJvcGVydHlHcm91cCIsInJlbmRlck1ldGhvZFN1bW1hcnlSb3ciLCJyZW5kZXJQcm9wZXJ0eVN1bW1hcnlSb3ciLCJyZXR1cm5WYWx1ZSIsInYiLCJ0eXBlSW5mbyIsInByb3BlcnR5VGFnIiwia2xhc3NpZmllcnMiLCJmbiIsImRlc2NyaWJlVHlwZSIsImNvbnRleHRUeXBlcyIsImV4cGFuZEZ1bmN0aW9uU2lnbmF0dXJlcyIsImNvbnRleHQiLCJleHBhbmRSZXR1cm5lZEZ1bmN0aW9uU2lnbmF0dXJlcyIsIkFQUExfU0VQIiwiQVBQTF9TVEFSVCIsIkFQUExfRU5EIiwicmVuZGVyVHlwZSIsImRpc3BsYXlOYW1lT2YiLCJyZW5kZXJGdW5jdGlvblBhcmFtIiwicGFyYW0iLCJlbGVtZW50cyIsImpvaW4iLCJyZXR1cm5UeXBlIiwiYnVmZmVyIiwibnVsbGFibGUiLCJvcHRpb25hbCIsIndpdGhOYW1lcyIsIndpdGhCcmFjZXMiLCJkZXNjcmliZVR5cGVIVE1MIiwiZGVzY3JpYmVUeXBlVGV4dCIsInBhcmFtVGFncyIsInBhcmFtTGluZXMiLCJwYXJhbVRhZ1RvdGFsTGVuZ3RoIiwibmVlZHNCcmVhayIsImxpbmUiLCJNb2R1bGVCb2R5IiwiZmluZFdoZXJlIiwid2hlcmUiLCJEb2MiLCJPYmplY3RTeW5vcHNpcyIsIlNlZVRhZyIsIkRvY0dyb3VwIiwiUHJvcGVydHlUYWciLCJFeGFtcGxlVGFnIiwiYXJyYXlPZiIsIm1vZHVsZURvY3MiLCJmb2N1c2VkRW50aXR5IiwicmVuZGVyYWJsZVR5cGUiLCJtaXhlZEluVGFyZ2V0cyIsImdldE1peGVkSW5UYXJnZXRzIiwid2l0aG91dFR5cGVEZWZzIiwidHlwZWRlZnMiLCJyZW5kZXJDb25zdHJ1Y3RvciIsInJlbmRlckV4YW1wbGVzIiwicmVuZGVyU3RhdGljTWV0aG9kcyIsInJlbmRlckNhbGxiYWNrcyIsInJlbmRlclR5cGVEZWZzIiwicmVuZGVyUHJvcGVydGllcyIsInJlbmRlck1ldGhvZHMiLCJyZW5kZXJBZGRpdGlvbmFsUmVzb3VyY2VzIiwicmVuZGVyRXhhbXBsZVRhZyIsInJlbmRlclNlZVRhZyIsInByb3BlcnR5RG9jcyIsImVudGl0eURvYyIsInJlbmRlclByb3BlcnR5IiwiZ2V0RW50aXR5QW5jaG9yIiwic3RhdGljTWV0aG9kRG9jcyIsInJlbmRlclN0YXRpY01ldGhvZCIsImNhbGxiYWNrRG9jcyIsInR5cGVkZWZOb2RlcyIsIm9yZGVyZWROb2RlcyIsInR5cGVkZWZEb2MiLCJ0eXBlZGVmTm9kZSIsInByb3BlcnR5VGFncyIsIm1lbWJlclByb3BlcnR5VGFncyIsImNvbmNhdCIsIk9iamVjdCIsImFzc2lnbiIsImFsbFByb3BlcnR5VGFncyIsImkiLCJtZXRob2REb2NzIiwicmVuZGVyTWV0aG9kIiwiZmluZE1hdGNoaW5nRG9jdW1lbnRzIiwibWF0Y2giLCJwdXNoIiwieSIsIkRvY1RhZ3MiLCJEZXByZWNhdGVkVGFnIiwiQ29sbGFwc2libGUiLCJjaGlsZHJlbiIsImNvbGxhcHNpYmxlIiwiZXhwYW5kZWQiLCJoZWFkaW5nVGFnIiwid2l0aEV4YW1wbGVzIiwid2l0aFRpdGxlIiwid2l0aERlc2NyaXB0aW9uIiwid2l0aEFkZGl0aW9uYWxSZXNvdXJjZXMiLCJpc0NvbGxhcHNlZCIsImNsYXNzTmFtZSIsImRlcHJlY2F0ZWRUYWciLCJ0IiwiSGVhZGluZ1RhZyIsImhpZGVQcml2YXRlU3ltYm9scyIsInRvZ2dsZUNvbGxhcHNlZCIsInJlbmRlckNvbGxhcHNlciIsImlzRnVuY3Rpb24iLCJyZW5kZXJSZXR1cm5UeXBlIiwiaXNDb25zdHJ1Y3RvciIsIlRhZ0dyb3VwIiwiVHlwZURlZlRhZ0dyb3VwIiwiUGFyYW1UYWciLCJUaHJvd3NUYWciLCJSZXR1cm5UYWciLCJDYWxsYmFja1RhZyIsIlRhYnVsYXJUYWdHcm91cCIsIkhBTkRMRURfVEFHUyIsImNhbGxiYWNrcyIsInJldHVyblRhZ3MiLCJ1bmhhbmRsZWRUYWdzIiwiaGlkZUJsYW5rUGFyYW1ldGVycyIsImhpZGVCbGFua1JldHVybnMiLCJyZW5kZXJUYWdTdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwidGFnTmFtZSIsInRhZ1R5cGUiLCJhbHdheXNHcm91cCIsInJlbmRlcmVyIiwiZnVuYyIsImFueSIsIkRPTVRhZyIsIlJlbmRlcmVyIiwiaXNDb2xsYXBzaWJsZSIsIkRlZmF1bHRWYWx1ZSIsImRlZmF1bHRWYWx1ZSIsInJlcGxhY2UiLCJNYXJrZG93blRleHQiLCJoYXNOYW1lIiwiQm9vbGVhbiIsImRvY3VtZW50IiwiaGlkZUlmRW1wdHkiLCJldmVyeSIsInRhZ0lzQmxhbmsiLCJyZW5kZXJUYWciLCJ0cmVlIiwiZnJhZ21lbnRzIiwic3BsaXQiLCJwYXJlbnRLZXkiLCJzbGljZSIsImNoaWxkVGFncyIsImluZGV4IiwiaXNSb290IiwiZGVzY3JpYmVOb2RlIiwiY29sbGFwc2VkIiwicHJpbnQiLCJwcmV0dHlKU09OIiwiSWRlbnRpdHkiLCJyZWdleHAiLCJoYXNPd25Qcm9wZXJ0eSIsInZhbHVlIiwibGFiZWwiLCJDbGFzc0Jyb3dzZXIiLCJmbGF0IiwibGlua05hbWVzcGFjZXMiLCJlbmFibGVTaWRlYmFyQ29udHJvbHMiLCJjb25zb2xlIiwiQ2hlY2tib3giLCJJY29uIiwiSG90SXRlbUluZGljYXRvciIsIndpdGhDb250cm9scyIsInNob3dUeXBlRGVmcyIsImdldEluaXRpYWxTdGF0ZSIsInNob3dQcml2YXRlTW9kdWxlcyIsInJvb3REb2N1bWVudHMiLCJnZW5lcmljTmFtZXNwYWNlIiwiaGFzUHJpdmF0ZU1vZHVsZXMiLCJzb3J0IiwiYSIsImIiLCJzaG91bGREaXNwbGF5TmFtZSIsInJlbmRlck5hbWVzcGFjZSIsImJpbmQiLCJzdGF0ZSIsInRvZ2dsZVByaXZhdGVWaXNpYmlsaXR5IiwibnMiLCJzaG91bGRIaWRlUHJpdmF0ZU1vZHVsZXMiLCJzaG93VHlwZURlZnNJbkJyb3dzZXIiLCJoYXNTZWxmRG9jdW1lbnQiLCJsaW5rVG9OYW1lc3BhY2VzSW5Ccm93c2VyIiwicmVuZGVyTW9kdWxlRW50aXRpZXMiLCJyZW5kZXJNb2R1bGUiLCJkb2NOb2RlIiwiaXNBY3RpdmUiLCJtYXJrUHJpdmF0ZU1vZHVsZXMiLCJnaXQiLCJsYXN0Q29tbWl0dGVkQXQiLCJsb2ciLCJ2aXNpYmxlIiwiZW50aXR5Tm9kZSIsInNob3VsZERpc3BsYXlUeXBlRGVmUHJvcGVydGllcyIsInNob3dUeXBlRGVmUHJvcGVydGllcyIsInNob3dUeXBlRGVmUHJvcGVydGllc0luQnJvd3NlciIsInNldFN0YXRlIiwid2luZG93IiwiZ2xvYmFsIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsS0FBTUEsa0JBQWtCLG1CQUFBQyxDQUFRLENBQVIsQ0FBeEI7QUFDQSxLQUFNQyxlQUFlLG1CQUFBRCxDQUFRLENBQVIsQ0FBckI7QUFDQSxLQUFNRSx1QkFBdUIsbUJBQUFGLENBQVEsRUFBUixDQUE3QjtBQUNBLEtBQU1HLHFCQUFxQixtQkFBQUgsQ0FBUSxFQUFSLENBQTNCO0FBQ0EsS0FBTUksb0JBQW9CLG1CQUFBSixDQUFRLEVBQVIsQ0FBMUI7QUFD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LENBQXdCVCxLQUFLNUUsVUFBN0IsQ0FBbEMsSUFDQyxLQUFLcVYsb0JBQUwsQ0FBMEJ6USxJQUExQjtBQVJKLE1BREY7QUFhRCxJQXZOa0M7QUF5Tm5DbVEsMEJBek5tQyxxQ0F5TlQ7QUFDeEIsVUFBS21CLFFBQUwsQ0FBYztBQUNaOUIsMkJBQW9CLENBQUMsS0FBS1UsS0FBTCxDQUFXVjtBQURwQixNQUFkO0FBR0Q7QUE3TmtDLEVBQWxCLENBQW5COztBQWdPQXpVLFFBQU9WLE9BQVAsR0FBaUJ3VSxZQUFqQixDOzs7Ozs7OztBQzVPQTlULFFBQU9WLE9BQVAsR0FBaUIsT0FBTzRVLE9BQVAsS0FBbUIsV0FBbkIsR0FBaUNBLE9BQWpDLEdBQTRDc0MsT0FBT3RDLE9BQVAsSUFBa0J1QyxPQUFPdkMsT0FBdEYsQzs7Ozs7OztBQ0FBLGdFOzs7Ozs7QUNBQSw0RDs7Ozs7O0FDQUEsd0U7Ozs7Ozs7O0FDQUEsS0FBTXZVLFFBQVEsbUJBQUFiLENBQVEsQ0FBUixDQUFkO0tBQ1EyRCxNLEdBQVk5QyxNQUFNRSxTLENBQWxCNEMsTTs7QUFDUixLQUFNa0YsaUJBQWlCLG1CQUFBN0ksQ0FBUSxFQUFSLENBQXZCOztBQUVBa0IsUUFBT1YsT0FBUCxHQUFpQkssTUFBTU0sV0FBTixDQUFrQjtBQUNqQ0MsZ0JBQWEsb0JBRG9CO0FBRWpDQyxjQUFXO0FBQ1RDLG1CQUFjcUMsTUFETDtBQUVUbEMsb0JBQWVrQztBQUZOLElBRnNCOztBQU9qQ2hDLFNBUGlDLG9CQU94QjtBQUNQLFlBQ0Usb0JBQUMsY0FBRDtBQUNFLHFCQUFjLEtBQUtDLEtBQUwsQ0FBV04sWUFBWCxJQUEyQixLQUFLTSxLQUFMLENBQVdIO0FBRHRELE9BREY7QUFLRDtBQWJnQyxFQUFsQixDQUFqQixDIiwiZmlsZSI6Im1lZ2Fkb2MtcGx1Z2luLWpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTk2NDI1MWY0YzY2N2U3NmUxODMiLCJjb25zdCBJbnNwZWN0b3JPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvSW5zcGVjdG9yT3V0bGV0Jyk7XG5jb25zdCBNb2R1bGVPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvTW9kdWxlT3V0bGV0Jyk7XG5jb25zdCBNb2R1bGVFbnRpdGllc091dGxldCA9IHJlcXVpcmUoJy4vb3V0bGV0cy9Nb2R1bGVFbnRpdGllc091dGxldCcpO1xuY29uc3QgTW9kdWxlSGVhZGVyT3V0bGV0ID0gcmVxdWlyZSgnLi9vdXRsZXRzL01vZHVsZUhlYWRlck91dGxldCcpO1xuY29uc3QgTW9kdWxlSW5kZXhPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvTW9kdWxlSW5kZXhPdXRsZXQnKTtcbmNvbnN0IE1vZHVsZUJvZHlPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvTW9kdWxlQm9keU91dGxldCcpO1xuY29uc3QgQnJvd3Nlck91dGxldCA9IHJlcXVpcmUoJy4vb3V0bGV0cy9Ccm93c2VyT3V0bGV0Jyk7XG5jb25zdCBOYW1lc3BhY2VPdXRsZXQgPSByZXF1aXJlKCcuL291dGxldHMvTmFtZXNwYWNlT3V0bGV0Jyk7XG5cbmV4cG9ydHMub3V0bGV0cyA9IFtcbiAgJ0pTOjpCcm93c2VyJyxcbiAgJ0pTOjpNb2R1bGUnLFxuICAnSlM6Ok1vZHVsZUVudGl0aWVzJyxcbiAgJ0pTOjpNb2R1bGVIZWFkZXInLFxuICAnSlM6Ok1vZHVsZUhlYWRlcjo6VHlwZScsXG4gICdKUzo6TW9kdWxlSW5kZXgnLFxuICAnSlM6Ok1vZHVsZUJvZHknLFxuICAnSlM6Ok5hbWVzcGFjZScsXG4gICdKUzo6VGFnJyxcbiAgJ0pTOjpFeGFtcGxlVGFncycsXG4gICdKUzo6RXhhbXBsZVRhZycsXG5dO1xuXG5leHBvcnRzLm5hbWUgPSAnbWVnYWRvYy1wbHVnaW4tanMnO1xuZXhwb3J0cy5vdXRsZXRPY2N1cGFudHMgPSBbXG4gIHsgbmFtZTogJ0NvcmU6Okluc3BlY3RvcicsIGNvbXBvbmVudDogSW5zcGVjdG9yT3V0bGV0LCB9LFxuICB7IG5hbWU6ICdKUzo6TW9kdWxlJywgY29tcG9uZW50OiBNb2R1bGVPdXRsZXQsIH0sXG4gIHsgbmFtZTogJ0pTOjpNb2R1bGVFbnRpdGllcycsIGNvbXBvbmVudDogTW9kdWxlRW50aXRpZXNPdXRsZXQsIH0sXG4gIHsgbmFtZTogJ0pTOjpNb2R1bGVIZWFkZXInLCBjb21wb25lbnQ6IE1vZHVsZUhlYWRlck91dGxldCwgfSxcbiAgeyBuYW1lOiAnSlM6Ok1vZHVsZUluZGV4JywgY29tcG9uZW50OiBNb2R1bGVJbmRleE91dGxldCwgfSxcbiAgeyBuYW1lOiAnSlM6Ok1vZHVsZUJvZHknLCBjb21wb25lbnQ6IE1vZHVsZUJvZHlPdXRsZXQsIH0sXG4gIHsgbmFtZTogJ0pTOjpCcm93c2VyJywgY29tcG9uZW50OiBCcm93c2VyT3V0bGV0LCB9LFxuICB7IG5hbWU6ICdKUzo6TmFtZXNwYWNlJywgY29tcG9uZW50OiBOYW1lc3BhY2VPdXRsZXQsIH0sXG5dXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvaW5kZXguanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBLID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5jb25zdCB7IHNoYXBlLCBzdHJpbmcgfSA9IFJlYWN0LlByb3BUeXBlcztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSlM6Okluc3BlY3Rvck91dGxldCcsXG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogc2hhcGUoe1xuICAgICAgcHJvcGVydGllczogc2hhcGUoe1xuICAgICAgICBzdW1tYXJ5OiBzdHJpbmdcbiAgICAgIH0pXG4gICAgfSksXG5cbiAgICBuYW1lc3BhY2VOb2RlOiBzaGFwZSh7XG4gICAgICB0aXRsZTogc3RyaW5nXG4gICAgfSksXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZG9jdW1lbnROb2RlLCBuYW1lc3BhY2VOb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbHRpcF9fdGl0bGVcIj5cbiAgICAgICAgICB7ZG9jLmlkfSAoe2RvYy50eXBlICE9PSBLLlRZUEVfVU5LTk9XTiAmJiAoXG4gICAgICAgICAgICA8c3Ryb25nPntkb2MudHlwZX0gPC9zdHJvbmc+XG4gICAgICAgICAgKX1pbiB7bmFtZXNwYWNlTm9kZS50aXRsZX0pXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwIGNoaWxkcmVuPXtkb2N1bWVudE5vZGUuc3VtbWFyeX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9JbnNwZWN0b3JPdXRsZXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJyZWFjdFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcInJlYWN0XFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uLy4uL2pzZG9jLXBhcnNlci1leHRlbmRlZC9saWIvY29uc3RhbnRzJyk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29uc3RhbnRzLmpzIiwiZXhwb3J0cy5OQU1FU1BBQ0VfU0VQID0gJy4nO1xuXG5leHBvcnRzLlNDT1BFX1VOU0NPUEVEID0gdW5kZWZpbmVkO1xuZXhwb3J0cy5TQ09QRV9JTlNUQU5DRSA9ICdpbnN0YW5jZSc7XG5leHBvcnRzLlNDT1BFX1BST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuZXhwb3J0cy5TQ09QRV9GQUNUT1JZX0VYUE9SVFMgPSAnZmFjdG9yeV9leHBvcnRzJztcblxuZXhwb3J0cy5UWVBFX09CSkVDVCA9ICdPYmplY3QnO1xuZXhwb3J0cy5UWVBFX09CSkVDVF9QUk9QRVJUWSA9ICdPYmplY3RQcm9wZXJ0eSc7XG5leHBvcnRzLlRZUEVfREVGQVVMVF9FWFBPUlRTID0gJ2V4cG9ydHMnO1xuZXhwb3J0cy5UWVBFX0ZBQ1RPUlkgPSAnRmFjdG9yeSc7XG5leHBvcnRzLlRZUEVfRlVOQ1RJT04gPSAnRnVuY3Rpb24nO1xuZXhwb3J0cy5UWVBFX0NMQVNTID0gJ0NsYXNzJztcbmV4cG9ydHMuVFlQRV9BUlJBWSA9ICdBcnJheSc7XG5leHBvcnRzLlRZUEVfVU5LTk9XTiA9ICdVbmtub3duJztcbmV4cG9ydHMuVFlQRV9MSVRFUkFMID0gJ0xpdGVyYWwnO1xuZXhwb3J0cy5UWVBFX0FMTF9MSVRFUkFMID0gJ0FsbExpdGVyYWwnO1xuZXhwb3J0cy5UWVBFX1VOS05PV05fTElURVJBTCA9ICdVbmtub3duTGl0ZXJhbCc7XG5leHBvcnRzLlRZUEVfVU5JT04gPSAnVW5pb24nO1xuXG5leHBvcnRzLlZJU0lCSUxJVFlfUFJPVEVDVEVEID0gJ3Byb3RlY3RlZCc7XG5leHBvcnRzLlZJU0lCSUxJVFlfUFJJVkFURSA9ICdwcml2YXRlJztcblxuZXhwb3J0cy5ERUZBVUxUX0ZBQ1RPUllfRVhQT1JUU19JRCA9ICdkZWZhdWx0X2V4cG9ydHMnO1xuZXhwb3J0cy5UWVBFX09WRVJSSURJTkdfVEFHUyA9IHtcbiAgJ21ldGhvZCc6IHRydWUsXG4gICdwcm9wZXJ0eSc6IHRydWUsXG4gICd0eXBlJzogdHJ1ZSxcbiAgJ2NsYXNzJzogdHJ1ZSxcbiAgJ2V4cG9ydCc6IHRydWUsXG59O1xuXG5leHBvcnRzLlRBR1NfV0lUSF9TVFJJTkdTID0ge1xuICAnZGVwcmVjYXRlZCc6IHRydWUsXG4gICdleGFtcGxlJzogdHJ1ZSxcbn07XG5cbmV4cG9ydHMuTk9fREVTQ1JJUFRJT05fVEFHUyA9IHtcbiAgJ2FsaWFzJzogdHJ1ZSxcbiAgJ2NsYXNzJzogdHJ1ZSxcbiAgJ2NvbnN0cnVjdG9yJzogdHJ1ZSxcbiAgJ2V4dGVuZHMnOiB0cnVlLFxuICAnaW5oZXJpdGRvYyc6IHRydWUsXG4gICdtZW1iZXJPZic6IHRydWUsXG4gICdtZXRob2QnOiB0cnVlLFxuICAnbWl4aW4nOiB0cnVlLFxuICAnbWl4ZXMnOiB0cnVlLFxuICAnbW9kdWxlJzogdHJ1ZSxcbiAgJ25hbWVzcGFjZSc6IHRydWUsXG4gICdwcmVzZXJ2ZU9yZGVyJzogdHJ1ZSxcbiAgJ3ByaXZhdGUnOiB0cnVlLFxuICAncHVibGljJzogdHJ1ZSxcbiAgJ3R5cGUnOiB0cnVlLFxuICAndHlwZWRlZic6IHRydWUsXG59O1xuXG5leHBvcnRzLktOT1dOX1RBR1MgPSBbXG4gICdhbGlhcycsXG4gICdhc3luYycsXG4gICdjYWxsYmFjaycsXG4gICdjbGFzcycsXG4gICdjb25zdHJ1Y3RvcicsXG4gICdkZXByZWNhdGVkJyxcbiAgJ2V4YW1wbGUnLFxuICAnZXhwb3J0JyxcbiAgJ2ludGVyZmFjZScsXG4gICdsZW5kcycsXG4gICdtZW1iZXJPZicsXG4gICdtZXRob2QnLFxuICAnbWl4ZXMnLFxuICAnbW9kdWxlJyxcbiAgJ25hbWUnLFxuICAnbmFtZXNwYWNlJyxcbiAgJ3BhcmFtJyxcbiAgJ3ByZXNlcnZlT3JkZXInLFxuICAncHJpdmF0ZScsXG4gICdwdWJsaWMnLFxuICAncHJvcGVydHknLFxuICAncHJvdGVjdGVkJyxcbiAgJ3JldHVybicsXG4gICdzZWUnLFxuICAnc3RhdGljJyxcbiAgJ3Rocm93cycsXG4gICd0eXBlJyxcbiAgJ3R5cGVkZWYnXG5dO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvanNkb2MtcGFyc2VyLWV4dGVuZGVkL2xpYi9jb25zdGFudHMuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBNb2R1bGUgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL01vZHVsZScpO1xuY29uc3QgeyBpc05hbWVzcGFjZURvY3VtZW50IH0gPSByZXF1aXJlKCcuLi91dGlscy9Eb2NDbGFzc2lmaWVyJyk7XG5jb25zdCB7IG9iamVjdCwgfSA9IFJlYWN0LlByb3BUeXBlcztcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSlM6Ok1vZHVsZScsXG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogb2JqZWN0LFxuICAgIG5hbWVzcGFjZU5vZGU6IG9iamVjdCxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgaWYgKCF0aGlzLnByb3BzLmRvY3VtZW50Tm9kZSB8fCBpc05hbWVzcGFjZURvY3VtZW50KHRoaXMucHJvcHMuZG9jdW1lbnROb2RlLnByb3BlcnRpZXMpKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE1vZHVsZSB7Li4udGhpcy5wcm9wc30gLz5cbiAgICApO1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvTW9kdWxlT3V0bGV0LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgSGFzVGl0bGUgPSByZXF1aXJlKCdtaXhpbnMvSGFzVGl0bGUnKTtcbmNvbnN0IE1vZHVsZUhlYWRlciA9IHJlcXVpcmUoJy4vTW9kdWxlSGVhZGVyJyk7XG5jb25zdCBPdXRsZXQgPSByZXF1aXJlKCdjb21wb25lbnRzL091dGxldCcpO1xuXG5jb25zdCBNb2R1bGUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogW1xuICAgIEhhc1RpdGxlKGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuZG9jdW1lbnROb2RlLnByb3BlcnRpZXMubmFtZTtcbiAgICB9KVxuICBdLFxuXG4gIHByb3BUeXBlczoge1xuICAgIG5hbWVzcGFjZU5vZGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBkb2N1bWVudE5vZGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBkb2N1bWVudEVudGl0eU5vZGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gIH0sXG5cbiAgY2hpbGRDb250ZXh0VHlwZXM6IHtcbiAgICBjb25maWc6IFJlYWN0LlByb3BUeXBlcy5vYmplY3RcbiAgfSxcblxuICBnZXRDaGlsZENvbnRleHQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlLmNvbmZpZ1xuICAgIH1cbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkb2N1bWVudE5vZGUsIG5hbWVzcGFjZU5vZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBjb25maWcgfSA9IG5hbWVzcGFjZU5vZGU7XG4gICAgY29uc3QgbW9kdWxlTm9kZSA9IGRvY3VtZW50Tm9kZS50eXBlID09PSAnRG9jdW1lbnRFbnRpdHknID9cbiAgICAgIGRvY3VtZW50Tm9kZS5wYXJlbnROb2RlIDpcbiAgICAgIGRvY3VtZW50Tm9kZVxuICAgIDtcblxuICAgIGNvbnN0IGxlZ2FjeVBhcmFtcyA9IHtcbiAgICAgIG1vZHVsZUlkOiBtb2R1bGVOb2RlLmlkLFxuICAgICAgZW50aXR5OiBkb2N1bWVudE5vZGUudHlwZSA9PT0gJ0RvY3VtZW50RW50aXR5JyA/IGRvY3VtZW50Tm9kZS5pZCA6IHVuZGVmaW5lZCxcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xhc3Mtdmlld1wiPlxuICAgICAgICA8TW9kdWxlSGVhZGVyXG4gICAgICAgICAgZG9jdW1lbnROb2RlPXttb2R1bGVOb2RlfVxuICAgICAgICAgIHNob3dTb3VyY2VQYXRocz17Y29uZmlnLnNob3dTb3VyY2VQYXRoc31cbiAgICAgICAgICBzaG93TmFtZXNwYWNlPXtjb25maWcuc2hvd05hbWVzcGFjZUluTW9kdWxlSGVhZGVyfVxuICAgICAgICAgIGdlbmVyYXRlQW5jaG9yPXtmYWxzZX1cbiAgICAgICAgLz5cblxuICAgICAgICA8T3V0bGV0XG4gICAgICAgICAgbmFtZT1cIkpTOjpNb2R1bGVCb2R5XCJcbiAgICAgICAgICBlbGVtZW50UHJvcHM9e3tcbiAgICAgICAgICAgIHBhcmFtczogbGVnYWN5UGFyYW1zLFxuICAgICAgICAgICAgcXVlcnk6IHt9LFxuICAgICAgICAgICAgZG9jdW1lbnROb2RlLFxuICAgICAgICAgICAgZG9jdW1lbnRFbnRpdHlOb2RlOiB0aGlzLnByb3BzLmRvY3VtZW50RW50aXR5Tm9kZSxcbiAgICAgICAgICAgIG5hbWVzcGFjZU5vZGUsXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vZHVsZTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL01vZHVsZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcIm1peGlucy9IYXNUaXRsZVwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcIm1peGlucy9IYXNUaXRsZVxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBPdXRsZXQgPSByZXF1aXJlKCdjb21wb25lbnRzL091dGxldCcpO1xuY29uc3QgSGVhZGluZyA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGVhZGluZycpO1xuY29uc3QgSGVhZGluZ0FuY2hvciA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGVhZGluZ0FuY2hvcicpO1xuY29uc3QgSGlnaGxpZ2h0ZWRUZXh0ID0gcmVxdWlyZSgnY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHQnKTtcbmNvbnN0IEsgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbmNvbnN0IERvY0NsYXNzaWZpZXIgPSByZXF1aXJlKCcuLi91dGlscy9Eb2NDbGFzc2lmaWVyJyk7XG5jb25zdCB7IFByb3BUeXBlcyB9ID0gUmVhY3Q7XG5cbmNvbnN0IE1vZHVsZUhlYWRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIHNob3dTb3VyY2VQYXRoczogUHJvcFR5cGVzLmJvb2wsXG4gICAgaGVhZGVyTGV2ZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZ2VuZXJhdGVBbmNob3I6IFByb3BUeXBlcy5ib29sLFxuICAgIHNob3dOYW1lc3BhY2U6IFByb3BUeXBlcy5ib29sLFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGVhZGVyTGV2ZWw6ICcxJyxcbiAgICAgIGdlbmVyYXRlQW5jaG9yOiB0cnVlLFxuICAgIH07XG4gIH0sXG5cbiAgLy8gc2hvdWxkQ29tcG9uZW50VXBkYXRlKHByZXZQcm9wcykge1xuICAvLyAgIHJldHVybiBwcmV2UHJvcHMuZG9jdW1lbnROb2RlICE9PSB0aGlzLnByb3BzLmRvY3VtZW50Tm9kZTtcbiAgLy8gfSxcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGFuY2hvcjtcblxuICAgIGNvbnN0IHsgZG9jdW1lbnROb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGRvYyA9IGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzIHx8IHtcbiAgICAgIG5hbWU6IGRvY3VtZW50Tm9kZS50aXRsZSxcbiAgICAgIHR5cGU6IEsuVFlQRV9VTktOT1dOXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnByb3BzLmdlbmVyYXRlQW5jaG9yKSB7XG4gICAgICBhbmNob3IgPSBkb2N1bWVudE5vZGUubWV0YS5hbmNob3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkaW5nXG4gICAgICAgICAgbGV2ZWw9XCIxXCJcbiAgICAgICAgICBwYXJlbnRMZXZlbD17dGhpcy5wcm9wcy5oZWFkZXJMZXZlbH1cbiAgICAgICAgICBjbGFzc05hbWU9XCJjbGFzcy12aWV3X19oZWFkZXIgYW5jaG9yYWJsZS1oZWFkaW5nXCJcbiAgICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5zaG93U291cmNlUGF0aHMgPyBkb2MuZmlsZVBhdGggOiB1bmRlZmluZWR9XG4gICAgICAgICAgaWQ9e2FuY2hvcn1cbiAgICAgICAgPlxuICAgICAgICAgIHthbmNob3IgJiYgPEhlYWRpbmdBbmNob3IuQW5jaG9yIGhyZWY9e2FuY2hvcn0gLz59XG4gICAgICAgICAge2FuY2hvciAmJiA8SGVhZGluZ0FuY2hvci5MaW5rIGhyZWY9e2FuY2hvcn0gLz59XG5cbiAgICAgICAgICA8SGVhZGluZ0FuY2hvci5UZXh0IGNsYXNzTmFtZT1cImNsYXNzLXZpZXdfX2hlYWRlci1uYW1lXCI+XG4gICAgICAgICAgICA8c3Bhbj57ZG9jLm5hbWV9PC9zcGFuPlxuICAgICAgICAgIDwvSGVhZGluZ0FuY2hvci5UZXh0PlxuXG4gICAgICAgICAgeycgJ31cblxuICAgICAgICAgIHt0aGlzLnByb3BzLnNob3dOYW1lc3BhY2UgJiYgZG9jLm5hbWVzcGFjZSAmJiAoXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJjbGFzcy12aWV3X19oZWFkZXItbmFtZXNwYWNlXCI+XG4gICAgICAgICAgICAgIHsneyd9e2RvYy5uYW1lc3BhY2V9eyd9J31cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgeycgJ31cblxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImNsYXNzLXZpZXdfX2hlYWRlci10eXBlXCI+XG4gICAgICAgICAgICA8T3V0bGV0XG4gICAgICAgICAgICAgIG5hbWU9XCJKUzo6TW9kdWxlSGVhZGVyOjpUeXBlXCJcbiAgICAgICAgICAgICAgdGFnTmFtZT1cInNwYW5cIlxuICAgICAgICAgICAgICBmaXJzdE1hdGNoaW5nRWxlbWVudFxuICAgICAgICAgICAgICBlbGVtZW50UHJvcHM9e3RoaXMucHJvcHN9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxzcGFuPntEb2NDbGFzc2lmaWVyLmdldERpc3BsYXlUeXBlKGRvY3VtZW50Tm9kZSl9PC9zcGFuPlxuICAgICAgICAgICAgPC9PdXRsZXQ+XG5cbiAgICAgICAgICAgIHtoYXNNaXhpblRhcmdldHMoZG9jdW1lbnROb2RlKSAmJiAoXG4gICAgICAgICAgICAgIGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzLm1peGluVGFyZ2V0c1xuICAgICAgICAgICAgICAgIC5tYXAoeCA9PiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e3gubmFtZX0+LCA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogeC5odG1sIHx8IHgubmFtZX19IC8+PC9zcGFuPlxuICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9IZWFkaW5nPlxuXG4gICAgICAgIHt0aGlzLnByb3BzLnNob3dTb3VyY2VQYXRocyAmJiBkb2N1bWVudE5vZGUuZmlsZVBhdGggJiYgKFxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNsYXNzLXZpZXdfX21vZHVsZS1maWxlcGF0aFwiPlxuICAgICAgICAgICAgRGVmaW5lZCBpbjogPGNvZGU+e2RvY3VtZW50Tm9kZS5maWxlUGF0aH08L2NvZGU+XG4gICAgICAgICAgPC9wPlxuICAgICAgICApfVxuXG4gICAgICAgIDxIaWdobGlnaHRlZFRleHQga2V5PVwiZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICB7ZG9jLmRlc2NyaXB0aW9ufVxuICAgICAgICA8L0hpZ2hsaWdodGVkVGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBoYXNNaXhpblRhcmdldHMobm9kZSkge1xuICByZXR1cm4gKFxuICAgIG5vZGUucHJvcGVydGllcyAmJlxuICAgIG5vZGUucHJvcGVydGllcy5taXhpblRhcmdldHMgJiZcbiAgICBub2RlLnByb3BlcnRpZXMubWl4aW5UYXJnZXRzLmxlbmd0aCA+IDBcbiAgKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb2R1bGVIZWFkZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9Nb2R1bGVIZWFkZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJjb21wb25lbnRzL091dGxldFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvT3V0bGV0XFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9IZWFkaW5nXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9IZWFkaW5nXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9IZWFkaW5nQW5jaG9yXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9IZWFkaW5nQW5jaG9yXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0hpZ2hsaWdodGVkVGV4dFxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBLID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbmZ1bmN0aW9uIGlzTWV0aG9kKGRvYykge1xuICB2YXIgY3R4ID0gZG9jLm5vZGVJbmZvO1xuXG4gIHJldHVybiBkb2MudHlwZSA9PT0gSy5UWVBFX0ZVTkNUSU9OICYmIChcbiAgICBjdHguc2NvcGUgPT09IEsuU0NPUEVfRkFDVE9SWV9FWFBPUlRTIHx8XG4gICAgY3R4LnNjb3BlID09PSBLLlNDT1BFX0lOU1RBTkNFIHx8XG4gICAgY3R4LnNjb3BlID09PSBLLlNDT1BFX1BST1RPVFlQRVxuICApO1xufVxuXG5mdW5jdGlvbiBpc0NhbGxiYWNrKGRvYykge1xuICByZXR1cm4gZG9jLnR5cGUgPT09IEsuVFlQRV9GVU5DVElPTiAmJiBkb2MudGFncy5zb21lKHggPT4geC50eXBlID09PSAnY2FsbGJhY2snKTtcbn1cblxuZnVuY3Rpb24gaXNUeXBlRGVmKGRvYykge1xuICByZXR1cm4gIWRvYy5pc01vZHVsZSAmJiBkb2MudGFncy5zb21lKHggPT4geC50eXBlID09PSAndHlwZWRlZicpO1xufVxuXG5mdW5jdGlvbiBpc0ZhY3RvcnlFeHBvcnRzKGRvYykge1xuICByZXR1cm4gZG9jLm5vZGVJbmZvLnNjb3BlID09PSBLLlNDT1BFX0ZBQ1RPUllfRVhQT1JUUztcbn1cblxuZnVuY3Rpb24gaXNDbGFzc0VudGl0eShkb2MpIHtcbiAgcmV0dXJuIChcbiAgICBkb2Mubm9kZUluZm8uc2NvcGUgPT09IEsuU0NPUEVfSU5TVEFOQ0UgfHxcbiAgICBkb2Mubm9kZUluZm8uc2NvcGUgPT09IEsuU0NPUEVfUFJPVE9UWVBFXG4gICk7XG59XG5cbmZ1bmN0aW9uIGlzU3RhdGljTWV0aG9kKGRvYykge1xuICByZXR1cm4gZG9jLnR5cGUgPT09IEsuVFlQRV9GVU5DVElPTiAmJiAhaXNNZXRob2QoZG9jKSAmJiAhaXNDYWxsYmFjayhkb2MpO1xufVxuXG5mdW5jdGlvbiBpc0V4cG9ydGVkU3ltYm9sKGRvYykge1xuICByZXR1cm4gISFkb2MuaXNFeHBvcnRlZFN5bWJvbDtcbn1cblxuZXhwb3J0cy5pc01ldGhvZCA9IGlzTWV0aG9kO1xuZXhwb3J0cy5pc0NhbGxiYWNrID0gaXNDYWxsYmFjaztcbmV4cG9ydHMuaXNTdGF0aWNNZXRob2QgPSBpc1N0YXRpY01ldGhvZDtcbmV4cG9ydHMuaXNGYWN0b3J5RXhwb3J0cyA9IGlzRmFjdG9yeUV4cG9ydHM7XG5leHBvcnRzLmlzQ2xhc3NFbnRpdHkgPSBpc0NsYXNzRW50aXR5O1xuZXhwb3J0cy5pc1R5cGVEZWYgPSBpc1R5cGVEZWY7XG5leHBvcnRzLmlzRXhwb3J0ZWRTeW1ib2wgPSBpc0V4cG9ydGVkU3ltYm9sO1xuXG5leHBvcnRzLmdldERpc3BsYXlUeXBlID0gZnVuY3Rpb24oZG9jdW1lbnROb2RlKSB7XG4gIGlmIChkb2N1bWVudE5vZGUudHlwZSA9PT0gJ05hbWVzcGFjZScpIHtcbiAgICByZXR1cm4gJ0xpYnJhcnknO1xuICB9XG5cbiAgaWYgKGRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzLmlzTmFtZXNwYWNlKSB7XG4gICAgcmV0dXJuICdOYW1lc3BhY2UnO1xuICB9XG4gIGVsc2UgaWYgKGRvY3VtZW50Tm9kZS5lbnRpdGllcy5zb21lKG4gPT4gaXNDbGFzc0VudGl0eShuLnByb3BlcnRpZXMpKSkge1xuICAgIHJldHVybiAnQ2xhc3MnO1xuICB9XG4gIGVsc2UgaWYgKGRvY3VtZW50Tm9kZS5lbnRpdGllcy5zb21lKG4gPT4gaXNGYWN0b3J5RXhwb3J0cyhuLnByb3BlcnRpZXMpKSkge1xuICAgIHJldHVybiAnRmFjdG9yeSc7XG4gIH1cbiAgZWxzZSBpZiAoZG9jdW1lbnROb2RlLnByb3BlcnRpZXMudHlwZSA9PT0gSy5UWVBFX0ZVTkNUSU9OKSB7XG4gICAgcmV0dXJuICdGdW5jdGlvbic7XG4gIH1cbiAgZWxzZSB7XG4gICAgcmV0dXJuICdPYmplY3QnO1xuICB9XG59O1xuXG5leHBvcnRzLmlzUHJvcGVydHkgPSBmdW5jdGlvbihkb2MpIHtcbiAgcmV0dXJuIGRvYyAmJiBkb2MudGFncyAmJiBkb2MudGFncy5zb21lKHggPT4geC50eXBlID09PSAncHJvcGVydHknKTtcbn07XG5cbmV4cG9ydHMuaXNTdGF0aWNQcm9wZXJ0eSA9IGZ1bmN0aW9uKGRvYykge1xuICByZXR1cm4gZXhwb3J0cy5pc1Byb3BlcnR5KGRvYykgJiYgW1xuICAgIEsuU0NPUEVfUFJPVE9UWVBFLFxuICAgIEsuU0NPUEVfSU5TVEFOQ0VcbiAgXS5pbmRleE9mKGRvYy5ub2RlSW5mby5zY29wZSkgPT09IC0xO1xufTtcblxuZXhwb3J0cy5pc01lbWJlclByb3BlcnR5ID0gZnVuY3Rpb24oZG9jKSB7XG4gIHJldHVybiBleHBvcnRzLmlzUHJvcGVydHkoZG9jKSAmJiAhZXhwb3J0cy5pc1N0YXRpY1Byb3BlcnR5KGRvYyk7XG59O1xuXG5leHBvcnRzLmlzUHJpdmF0ZSA9IGZ1bmN0aW9uKGRvYykge1xuICByZXR1cm4gZG9jICYmIGRvYy50YWdzICYmIGRvYy50YWdzLnNvbWUoeCA9PiB4LnR5cGUgPT09ICdwcml2YXRlJyk7XG59O1xuXG5leHBvcnRzLmlzUHJvdGVjdGVkID0gZnVuY3Rpb24oZG9jKSB7XG4gIHJldHVybiBkb2MgJiYgZG9jLnRhZ3MgJiYgZG9jLnRhZ3Muc29tZSh4ID0+IHgudHlwZSA9PT0gJ3Byb3RlY3RlZCcpO1xufTtcblxuZXhwb3J0cy5pc1B1YmxpYyA9IGZ1bmN0aW9uKGRvYykge1xuICByZXR1cm4gKFxuICAgICFleHBvcnRzLmlzUHJpdmF0ZShkb2MpICYmXG4gICAgIWV4cG9ydHMuaXNQcm90ZWN0ZWQoZG9jKVxuICApO1xufTtcblxuZXhwb3J0cy5pc05hbWVzcGFjZURvY3VtZW50ID0gZnVuY3Rpb24oZG9jKSB7XG4gIHJldHVybiBkb2MgJiYgZG9jLmlzTmFtZXNwYWNlO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL3V0aWxzL0RvY0NsYXNzaWZpZXIuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBDbGFzc0VudGl0eUJyb3dzZXIgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL0NsYXNzRW50aXR5QnJvd3NlcicpO1xuY29uc3QgeyBvYmplY3QsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0pTOjpNb2R1bGVFbnRpdGllcycsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QsXG4gICAgZG9jdW1lbnRFbnRpdHlOb2RlOiBvYmplY3QsXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5kb2N1bWVudE5vZGUpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Q2xhc3NFbnRpdHlCcm93c2VyXG4gICAgICAgIHN0YW5kYWxvbmVcbiAgICAgICAgZG9jdW1lbnROb2RlPXt0aGlzLnByb3BzLmRvY3VtZW50Tm9kZX1cbiAgICAgICAgZG9jdW1lbnRFbnRpdHlOb2RlPXt0aGlzLnByb3BzLmRvY3VtZW50RW50aXR5Tm9kZX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9Nb2R1bGVFbnRpdGllc091dGxldC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgTGluayA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvTGluaycpO1xuY29uc3Qgb3JkZXJBd2FyZVNvcnQgPSByZXF1aXJlKCcuLi91dGlscy9vcmRlckF3YXJlU29ydCcpO1xuY29uc3QgY2xhc3NTZXQgPSByZXF1aXJlKCdjbGFzc25hbWVzJyk7XG5jb25zdCB7IG9iamVjdCwgYm9vbCwgfSA9IFJlYWN0LlByb3BUeXBlcztcblxudmFyIENsYXNzRW50aXR5QnJvd3NlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgc3RhbmRhbG9uZTogYm9vbCxcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgICBkb2N1bWVudEVudGl0eU5vZGU6IG9iamVjdCxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkb2N1bWVudE5vZGUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWRvY3VtZW50Tm9kZS5lbnRpdGllcyB8fCAhZG9jdW1lbnROb2RlLmVudGl0aWVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgZW50aXR5RG9jdW1lbnRzID0gb3JkZXJBd2FyZVNvcnQuYXNOb2Rlcyhkb2N1bWVudE5vZGUsIGRvY3VtZW50Tm9kZS5lbnRpdGllcywgJ2lkJyk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHVsXG4gICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgY2xhc3NTZXQoXCJjbGFzcy1icm93c2VyX19tZXRob2RzXCIsIHtcbiAgICAgICAgICAgICdjbGFzcy1icm93c2VyX19tZXRob2RzLS1zdGFuZGFsb25lJzogdGhpcy5wcm9wcy5zdGFuZGFsb25lXG4gICAgICAgICAgfSlcbiAgICAgIH0+XG4gICAgICAgIHtlbnRpdHlEb2N1bWVudHMubWFwKHRoaXMucmVuZGVyRW50aXR5KX1cbiAgICAgIDwvdWw+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJFbnRpdHkobm9kZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8bGkga2V5PXtub2RlLnVpZH0gY2xhc3NOYW1lPVwiY2xhc3MtYnJvd3Nlcl9fbWV0aG9kcy1lbnRpdHlcIj5cbiAgICAgICAgPExpbmtcbiAgICAgICAgICB0bz17bm9kZX1cbiAgICAgICAgICBjaGlsZHJlbj17KG5vZGUucHJvcGVydGllcy5zeW1ib2wgfHwgJycpICsgbm9kZS5wcm9wZXJ0aWVzLm5hbWV9XG4gICAgICAgICAgdGl0bGU9e25vZGUudGl0bGV9XG4gICAgICAgIC8+XG4gICAgICA8L2xpPlxuICAgICk7XG4gIH0sXG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDbGFzc0VudGl0eUJyb3dzZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9DbGFzc0VudGl0eUJyb3dzZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJjb21wb25lbnRzL0xpbmtcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0xpbmtcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zdCB7IHNvcnRCeSB9ID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9jLCBhcnJheSwga2V5KSB7XG4gIHZhciBwcmVzZXJ2ZU9yZGVyID0gZG9jLnRhZ3Muc29tZShmdW5jdGlvbih0YWcpIHtcbiAgICByZXR1cm4gdGFnLnR5cGUgPT09ICdwcmVzZXJ2ZU9yZGVyJztcbiAgfSk7XG5cbiAgaWYgKHByZXNlcnZlT3JkZXIpIHtcbiAgICByZXR1cm4gc29ydEJ5KGFycmF5LCAnbGluZScpO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBzb3J0QnkoYXJyYXksIGtleSk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmFzTm9kZXMgPSBmdW5jdGlvbihkb2N1bWVudE5vZGUsIGFycmF5LCBrZXkpIHtcbiAgdmFyIHByZXNlcnZlT3JkZXIgPSBkb2N1bWVudE5vZGUucHJvcGVydGllcy50YWdzLnNvbWUoZnVuY3Rpb24odGFnKSB7XG4gICAgcmV0dXJuIHRhZy50eXBlID09PSAncHJlc2VydmVPcmRlcic7XG4gIH0pO1xuXG4gIGlmIChwcmVzZXJ2ZU9yZGVyKSB7XG4gICAgcmV0dXJuIHNvcnRCeShhcnJheSwgJ3Byb3BlcnRpZXMubGluZScpO1xuICB9XG4gIGVsc2Uge1xuICAgIHJldHVybiBzb3J0QnkoYXJyYXksIGtleSk7XG4gIH1cbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvdXRpbHMvb3JkZXJBd2FyZVNvcnQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJsb2Rhc2hcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJsb2Rhc2hcXFwiXVwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJjbGFzc25hbWVzXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY2xhc3NuYW1lc1xcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IE1vZHVsZUhlYWRlciA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvTW9kdWxlSGVhZGVyJyk7XG5jb25zdCB7IG9iamVjdCwgc2hhcGUsIGJvb2wsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0pTOjpNb2R1bGVIZWFkZXInLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogb2JqZWN0LFxuICAgIG5hbWVzcGFjZU5vZGU6IG9iamVjdCxcbiAgICAkb3V0bGV0T3B0aW9uczogc2hhcGUoe1xuICAgICAgc2hvd0ZpbGVQYXRoOiBib29sLFxuICAgIH0pXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLW1vZHVsZS1oZWFkZXItb3V0bGV0XCI+XG4gICAgICAgIDxNb2R1bGVIZWFkZXJcbiAgICAgICAgICBkb2N1bWVudE5vZGU9e3RoaXMucHJvcHMuZG9jdW1lbnROb2RlIHx8IHRoaXMucHJvcHMubmFtZXNwYWNlTm9kZX1cbiAgICAgICAgICBzaG93U291cmNlUGF0aHM9e3RoaXMucHJvcHMuJG91dGxldE9wdGlvbnMuc2hvd0ZpbGVQYXRoICE9PSBmYWxzZX1cbiAgICAgICAgICBnZW5lcmF0ZUFuY2hvcj17ZmFsc2V9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvTW9kdWxlSGVhZGVyT3V0bGV0LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgeyBvYmplY3QsIHNoYXBlLCBib29sLCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuY29uc3QgTmFtZXNwYWNlSW5kZXggPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL05hbWVzcGFjZUluZGV4Jyk7XG5jb25zdCBNb2R1bGVJbmRleCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvTW9kdWxlSW5kZXgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSlM6Ok1vZHVsZUluZGV4JyxcbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QsXG4gICAgbmFtZXNwYWNlTm9kZTogb2JqZWN0LFxuICAgICRvdXRsZXRPcHRpb25zOiBzaGFwZSh7XG4gICAgICBzaG93RnVuY3Rpb25zOiBib29sLFxuICAgICAgc2hvd1Byb3BlcnRpZXM6IGJvb2wsXG4gICAgICBzaG93U3RhdGljTWVtYmVyczogYm9vbCxcbiAgICB9KSxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYW1lc3BhY2VJbmRleFxuICAgICAgICAgIHsuLi50aGlzLnByb3BzLiRvdXRsZXRPcHRpb25zfVxuICAgICAgICAgIGRvY3VtZW50Tm9kZT17dGhpcy5wcm9wcy5kb2N1bWVudE5vZGV9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPE1vZHVsZUluZGV4XG4gICAgICAgICAgey4uLnRoaXMucHJvcHMuJG91dGxldE9wdGlvbnN9XG4gICAgICAgICAgZG9jdW1lbnROb2RlPXt0aGlzLnByb3BzLmRvY3VtZW50Tm9kZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvb3V0bGV0cy9Nb2R1bGVJbmRleE91dGxldC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IExpbmsgPSByZXF1aXJlKCdjb21wb25lbnRzL0xpbmsnKTtcbmNvbnN0IERvY0NsYXNzaWZpZXIgPSByZXF1aXJlKCcuLi91dGlscy9Eb2NDbGFzc2lmaWVyJyk7XG5jb25zdCB7IG9iamVjdCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5jb25zdCBOYW1lc3BhY2VJbmRleCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QsXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZG9jdW1lbnROb2RlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBnZXRCeURpc3BsYXlUeXBlKGRvY3VtZW50Tm9kZSwgWyAnQ2xhc3MnLCAnRmFjdG9yeScgXSk7XG4gICAgY29uc3QgZnVuY3Rpb25zID0gZ2V0QnlEaXNwbGF5VHlwZShkb2N1bWVudE5vZGUsIFsgJ0Z1bmN0aW9uJyBdKTtcbiAgICBjb25zdCBuYW1lc3BhY2VzID0gZ2V0QnlEaXNwbGF5VHlwZShkb2N1bWVudE5vZGUsIFsgJ05hbWVzcGFjZScgXSk7XG4gICAgY29uc3Qgb3RoZXJzID0gZ2V0UmVtYWluaW5nRG9jdW1lbnRzKGRvY3VtZW50Tm9kZSwgW1xuICAgICAgY2xhc3NlcyxcbiAgICAgIGZ1bmN0aW9ucyxcbiAgICAgIG5hbWVzcGFjZXNcbiAgICBdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLWRvY3VtZW50LWluZGV4XCI+XG4gICAgICAgIHtuYW1lc3BhY2VzLmxlbmd0aCA+IDAgJiYgdGhpcy5yZW5kZXJHcm91cEJ5Q29udGV4dFR5cGUoJ05hbWVzcGFjZXMnLCBuYW1lc3BhY2VzKX1cbiAgICAgICAge2NsYXNzZXMubGVuZ3RoID4gMCAmJiB0aGlzLnJlbmRlckdyb3VwQnlDb250ZXh0VHlwZSgnQ2xhc3NlcycsIGNsYXNzZXMpfVxuICAgICAgICB7ZnVuY3Rpb25zLmxlbmd0aCA+IDAgJiYgdGhpcy5yZW5kZXJHcm91cEJ5Q29udGV4dFR5cGUoJ0Z1bmN0aW9ucycsIGZ1bmN0aW9ucyl9XG4gICAgICAgIHtvdGhlcnMubGVuZ3RoID4gMCAmJiB0aGlzLnJlbmRlckdyb3VwQnlDb250ZXh0VHlwZSgnT3RoZXInLCBvdGhlcnMpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJHcm91cEJ5Q29udGV4dFR5cGUodGl0bGUsIGRvY3VtZW50cykge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZG9jLWdyb3VwX19oZWFkZXJcIj5cbiAgICAgICAgICB7dGl0bGV9XG4gICAgICAgIDwvaDI+XG5cbiAgICAgICAge3RoaXMucmVuZGVyR3JvdXAoZG9jdW1lbnRzKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfSxcblxuICByZW5kZXJHcm91cChkb2N1bWVudHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAge2RvY3VtZW50cy5tYXAodGhpcy5yZW5kZXJNb2R1bGVTdW1tYXJ5UmVjb3JkKX1cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJNb2R1bGVTdW1tYXJ5UmVjb3JkKG5vZGUpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGtleT17bm9kZS51aWR9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPExpbmsgdG89e25vZGV9Pntub2RlLnByb3BlcnRpZXMgJiYgbm9kZS5wcm9wZXJ0aWVzLm5hbWUgfHwgbm9kZS50aXRsZX08L0xpbms+XG4gICAgICAgIDwvdGQ+XG5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIHtub2RlLnN1bW1hcnkgfHwgPGVtIGNsYXNzTmFtZT1cInR5cGUtbXV0ZVwiPk5vIHN1bW1hcnkgcHJvdmlkZWQuPC9lbT59XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBnZXRCeURpc3BsYXlUeXBlKGRvY3VtZW50Tm9kZSwgdHlwZU5hbWVzKSB7XG4gIHJldHVybiBkb2N1bWVudE5vZGUuZG9jdW1lbnRzLmZpbHRlcih4ID0+IHtcbiAgICByZXR1cm4gdHlwZU5hbWVzLmluZGV4T2YoRG9jQ2xhc3NpZmllci5nZXREaXNwbGF5VHlwZSh4KSkgPiAtMTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFJlbWFpbmluZ0RvY3VtZW50cyhkb2N1bWVudE5vZGUsIGxpc3RzKSB7XG4gIGNvbnN0IHVzZWRVSURzID0gbGlzdHMucmVkdWNlKGZ1bmN0aW9uKG1hcCwgbGlzdCkge1xuICAgIGxpc3QuZm9yRWFjaCh4ID0+IHsgbWFwW3gudWlkXSA9IHRydWUgfSk7XG4gICAgcmV0dXJuIG1hcDtcbiAgfSwge30pO1xuXG4gIHJldHVybiBkb2N1bWVudE5vZGUuZG9jdW1lbnRzLmZpbHRlcih4ID0+ICEoeC51aWQgaW4gdXNlZFVJRHMpKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOYW1lc3BhY2VJbmRleDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvTmFtZXNwYWNlSW5kZXguanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBMaW5rID0gcmVxdWlyZSgnY29tcG9uZW50cy9MaW5rJyk7XG5jb25zdCBUeXBlTmFtZXMgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL1RhZ3MvVHlwZU5hbWVzJyk7XG5jb25zdCBGdW5jdGlvblNpZ25hdHVyZSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvRnVuY3Rpb25TaWduYXR1cmUnKTtcbmNvbnN0IERvY0NsYXNzaWZpZXIgPSByZXF1aXJlKCcuLi91dGlscy9Eb2NDbGFzc2lmaWVyJyk7XG5jb25zdCB7IGJvb2wsIG9iamVjdCwgfSA9IFJlYWN0LlByb3BUeXBlcztcblxuY29uc3QgTW9kdWxlSW5kZXggPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogb2JqZWN0LFxuICAgIHNob3dGdW5jdGlvbnM6IGJvb2wsXG4gICAgc2hvd1Byb3BlcnRpZXM6IGJvb2wsXG4gICAgc2hvd1N0YXRpY01lbWJlcnM6IGJvb2wsXG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93RnVuY3Rpb25zOiB0cnVlLFxuICAgICAgc2hvd1Byb3BlcnRpZXM6IHRydWUsXG4gICAgICBzaG93U3RhdGljTWVtYmVyczogdHJ1ZSxcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRvY3VtZW50Tm9kZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBtZW1iZXJGdWN0aW9ucyA9IGdldEJ5Q2xhc3NpZmljYXRpb24oZG9jdW1lbnROb2RlLCBbIERvY0NsYXNzaWZpZXIuaXNNZXRob2QgXSk7XG4gICAgY29uc3QgbWVtYmVyUHJvcGVydGllcyA9IGdldEJ5Q2xhc3NpZmljYXRpb24oZG9jdW1lbnROb2RlLCBbIERvY0NsYXNzaWZpZXIuaXNNZW1iZXJQcm9wZXJ0eSBdKTtcbiAgICBjb25zdCBleHBvcnRlZFN5bWJvbHMgPSBnZXRCeUNsYXNzaWZpY2F0aW9uKGRvY3VtZW50Tm9kZSwgWyBEb2NDbGFzc2lmaWVyLmlzRXhwb3J0ZWRTeW1ib2wgXSk7XG4gICAgY29uc3Qgc3RhdGljTWVtYmVycyA9IGdldEJ5Q2xhc3NpZmljYXRpb24oZG9jdW1lbnROb2RlLCBbXG4gICAgICBEb2NDbGFzc2lmaWVyLmlzU3RhdGljTWV0aG9kLFxuICAgICAgRG9jQ2xhc3NpZmllci5pc1N0YXRpY1Byb3BlcnR5LFxuICAgIF0pXG5cbiAgICBjb25zdCBwdWJsaWNTdGF0aWNNZW1iZXJzID0gc3RhdGljTWVtYmVyc1xuICAgICAgLmZpbHRlcih4ID0+IERvY0NsYXNzaWZpZXIuaXNQdWJsaWMoeC5wcm9wZXJ0aWVzKSlcbiAgICA7XG5cbiAgICBjb25zdCBwcml2YXRlU3RhdGljTWVtYmVycyA9IHN0YXRpY01lbWJlcnNcbiAgICAgIC5maWx0ZXIoeCA9PiAhRG9jQ2xhc3NpZmllci5pc1B1YmxpYyh4LnByb3BlcnRpZXMpKVxuICAgIDtcblxuICAgIGNvbnN0IG90aGVycyA9IGdldFJlbWFpbmluZ0RvY3VtZW50cyhkb2N1bWVudE5vZGUsIFtcbiAgICAgIHN0YXRpY01lbWJlcnMsXG4gICAgICBtZW1iZXJGdWN0aW9ucyxcbiAgICAgIG1lbWJlclByb3BlcnRpZXMsXG4gICAgICBleHBvcnRlZFN5bWJvbHNcbiAgICBdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImpzLWRvY3VtZW50LWluZGV4XCI+XG4gICAgICAgIHtleHBvcnRlZFN5bWJvbHMubGVuZ3RoID4gMCAmJiB0aGlzLnJlbmRlckV4cG9ydGVkU3ltYm9scygnRXhwb3J0ZWQgU3ltYm9scycsIGV4cG9ydGVkU3ltYm9scyl9XG4gICAgICAgIHttZW1iZXJGdWN0aW9ucy5sZW5ndGggPiAwICYmIHRoaXMucmVuZGVyTWV0aG9kR3JvdXAoJ1B1YmxpYyBGdW5jdGlvbnMnLCBtZW1iZXJGdWN0aW9ucyl9XG4gICAgICAgIHttZW1iZXJQcm9wZXJ0aWVzLmxlbmd0aCA+IDAgJiYgdGhpcy5yZW5kZXJQcm9wZXJ0eUdyb3VwKCdQdWJsaWMgUHJvcGVydGllcycsIG1lbWJlclByb3BlcnRpZXMpfVxuICAgICAgICB7cHVibGljU3RhdGljTWVtYmVycy5sZW5ndGggPiAwICYmIHRoaXMucmVuZGVyTWV0aG9kR3JvdXAoJ1B1YmxpYyBTdGF0aWMgTWVtYmVycycsIHB1YmxpY1N0YXRpY01lbWJlcnMpfVxuICAgICAgICB7cHJpdmF0ZVN0YXRpY01lbWJlcnMubGVuZ3RoID4gMCAmJiB0aGlzLnJlbmRlck1ldGhvZEdyb3VwKCdQcml2YXRlIFN0YXRpYyBNZW1iZXJzJywgcHJpdmF0ZVN0YXRpY01lbWJlcnMpfVxuICAgICAgICB7b3RoZXJzLmxlbmd0aCA+IDAgJiYgdGhpcy5yZW5kZXJHcm91cEJ5Q29udGV4dFR5cGUoJ090aGVyJywgb3RoZXJzKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyR3JvdXBCeUNvbnRleHRUeXBlKHRpdGxlLCBkb2N1bWVudHMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cImRvYy1ncm91cF9faGVhZGVyXCI+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L2gyPlxuXG4gICAgICAgIHt0aGlzLnJlbmRlckdyb3VwKGRvY3VtZW50cyl9XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0sXG5cbiAgcmVuZGVyR3JvdXAoZG9jdW1lbnRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIHtkb2N1bWVudHMubWFwKHRoaXMucmVuZGVyTW9kdWxlU3VtbWFyeVJlY29yZCl9XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTW9kdWxlU3VtbWFyeVJlY29yZChub2RlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e25vZGUudWlkfT5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxMaW5rIHRvPXtub2RlfT57bm9kZS5wcm9wZXJ0aWVzID8gbm9kZS5wcm9wZXJ0aWVzLm5hbWUgOiBub2RlLnRpdGxlfTwvTGluaz5cbiAgICAgICAgPC90ZD5cblxuICAgICAgICA8dGQ+XG4gICAgICAgICAge25vZGUuc3VtbWFyeSB8fCA8ZW0gY2xhc3NOYW1lPVwidHlwZS1tdXRlXCI+Tm8gc3VtbWFyeSBwcm92aWRlZC48L2VtPn1cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJNZXRob2RHcm91cCh0aXRsZSwgZG9jdW1lbnRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJkb2MtZ3JvdXBfX2hlYWRlclwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9oMj5cblxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge2RvY3VtZW50cy5tYXAodGhpcy5yZW5kZXJNZXRob2RTdW1tYXJ5Um93KX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9LFxuXG4gIHJlbmRlck1ldGhvZFN1bW1hcnlSb3coZG9jdW1lbnROb2RlKSB7XG4gICAgaWYgKERvY0NsYXNzaWZpZXIuaXNQcm9wZXJ0eShkb2N1bWVudE5vZGUucHJvcGVydGllcykpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclByb3BlcnR5U3VtbWFyeVJvdyhkb2N1bWVudE5vZGUpO1xuICAgIH1cblxuICAgIGNvbnN0IHJldHVyblZhbHVlID0gZG9jdW1lbnROb2RlLnByb3BlcnRpZXMudGFncy5yZWR1Y2UoKHYsIHgpID0+IHtcbiAgICAgIGlmICh4LnR5cGUgPT09ICdyZXR1cm4nKSB7XG4gICAgICAgIHJldHVybiB4LnR5cGVJbmZvLnR5cGU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgICB9XG4gICAgfSwgeyBuYW1lOiAndm9pZCcgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRyIGtleT17ZG9jdW1lbnROb2RlLnVpZH0+XG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtZW50aXR5X19mdW5jdGlvbi1zaWduYXR1cmVcIj5cbiAgICAgICAgICAgIHtyZXR1cm5WYWx1ZSAmJiA8VHlwZU5hbWVzIHR5cGU9e3JldHVyblZhbHVlfSAvPn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvdGQ+XG5cbiAgICAgICAgPHRkPlxuICAgICAgICAgIDxMaW5rIHRvPXtkb2N1bWVudE5vZGV9IGNsYXNzTmFtZT1cImpzLWRvY3VtZW50LWluZGV4X19lbnRpdHktbmFtZVwiPlxuICAgICAgICAgICAge2RvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzLm5hbWV9XG4gICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgPEZ1bmN0aW9uU2lnbmF0dXJlXG4gICAgICAgICAgICBkb2M9e2RvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzfVxuICAgICAgICAgICAgd2l0aE5hbWVzPXtmYWxzZX1cbiAgICAgICAgICAgIHdpdGhCcmFjZXNcbiAgICAgICAgICAvPlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICApXG4gIH0sXG5cbiAgcmVuZGVyUHJvcGVydHlHcm91cCh0aXRsZSwgZG9jdW1lbnRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJkb2MtZ3JvdXBfX2hlYWRlclwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9oMj5cblxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge2RvY3VtZW50cy5tYXAodGhpcy5yZW5kZXJQcm9wZXJ0eVN1bW1hcnlSb3cpfVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH0sXG5cbiAgcmVuZGVyUHJvcGVydHlTdW1tYXJ5Um93KGRvY3VtZW50Tm9kZSkge1xuICAgIGNvbnN0IHByb3BlcnR5VGFnID0gZG9jdW1lbnROb2RlLnByb3BlcnRpZXMudGFncy5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdwcm9wZXJ0eScpWzBdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e2RvY3VtZW50Tm9kZS51aWR9PlxuICAgICAgICA8dGQ+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWVudGl0eV9fZnVuY3Rpb24tc2lnbmF0dXJlXCI+XG4gICAgICAgICAgICA8VHlwZU5hbWVzIHR5cGU9e3Byb3BlcnR5VGFnLnR5cGVJbmZvLnR5cGV9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3RkPlxuXG4gICAgICAgIDx0ZD5cbiAgICAgICAgICA8TGluayB0bz17ZG9jdW1lbnROb2RlfSBjbGFzc05hbWU9XCJqcy1kb2N1bWVudC1pbmRleF9fZW50aXR5LW5hbWVcIj5cbiAgICAgICAgICAgIHtkb2N1bWVudE5vZGUucHJvcGVydGllcy5uYW1lfVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC90ZD5cbiAgICAgIDwvdHI+XG4gICAgKVxuICB9LFxuXG4gIHJlbmRlckV4cG9ydGVkU3ltYm9scyh0aXRsZSwgZG9jdW1lbnRzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJkb2MtZ3JvdXBfX2hlYWRlclwiPlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9oMj5cblxuICAgICAgICA8dGFibGU+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICA8dGg+U3ltYm9sPC90aD5cbiAgICAgICAgICAgICAgPHRoPkRlZmluaXRpb248L3RoPlxuICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge2RvY3VtZW50cy5tYXAobm9kZSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IFsgdHlwZUluZm8gXSA9IG5vZGUucHJvcGVydGllcy50YWdzLmZpbHRlcih4ID0+IHgudHlwZSA9PT0gJ2V4cG9ydCcpLm1hcCh4ID0+IHgudHlwZUluZm8pO1xuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17bm9kZS5pZH0+XG4gICAgICAgICAgICAgICAgICA8dGQ+e3R5cGVJbmZvLm5hbWUgfHwgbm9kZS5wcm9wZXJ0aWVzLm5hbWV9PC90ZD5cbiAgICAgICAgICAgICAgICAgIDx0ZD48VHlwZU5hbWVzIHR5cGU9e3R5cGVJbmZvLnR5cGV9IC8+PC90ZD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59KTtcblxuZnVuY3Rpb24gZ2V0QnlDbGFzc2lmaWNhdGlvbihkb2N1bWVudE5vZGUsIGtsYXNzaWZpZXJzKSB7XG4gIHJldHVybiBkb2N1bWVudE5vZGUuZW50aXRpZXMuZmlsdGVyKHggPT4ge1xuICAgIHJldHVybiBrbGFzc2lmaWVycy5zb21lKGZuID0+IGZuKHgucHJvcGVydGllcykpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVtYWluaW5nRG9jdW1lbnRzKGRvY3VtZW50Tm9kZSwgbGlzdHMpIHtcbiAgY29uc3QgdXNlZFVJRHMgPSBsaXN0cy5yZWR1Y2UoZnVuY3Rpb24obWFwLCBsaXN0KSB7XG4gICAgbGlzdC5mb3JFYWNoKHggPT4ge1xuICAgICAgbWFwW3gudWlkXSA9IHRydWU7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbWFwO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIGRvY3VtZW50Tm9kZS5lbnRpdGllcy5maWx0ZXIoeCA9PiAhKHgudWlkIGluIHVzZWRVSURzKSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kdWxlSW5kZXg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL01vZHVsZUluZGV4LmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgZGVzY3JpYmVUeXBlID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvZGVzY3JpYmVUeXBlJyk7XG5cbmNvbnN0IFR5cGVOYW1lcyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgY29udGV4dFR5cGVzOiB7XG4gICAgY29uZmlnOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdHlwZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9XCJqcy10eXBlLW5hbWVzXCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGRlc2NyaWJlVHlwZSh7XG4gICAgICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAgICAgZXhwYW5kRnVuY3Rpb25TaWduYXR1cmVzOiB0aGlzLmNvbnRleHQuY29uZmlnLmV4cGFuZFJldHVybmVkRnVuY3Rpb25TaWduYXR1cmVzXG4gICAgICAgICAgfSkodGhpcy5wcm9wcy50eXBlKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApO1xuICB9LFxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZU5hbWVzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1R5cGVOYW1lcy5qcyIsImNvbnN0IEsgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbmNvbnN0IEFQUExfU0VQID0gJyB8ICdcbmNvbnN0IEFQUExfU1RBUlQgPSAnLiZsdDsnXG5jb25zdCBBUFBMX0VORCAgID0gJyZndDsnXG5cbm1vZHVsZS5leHBvcnRzID0gKHsgaHRtbCwgZXhwYW5kRnVuY3Rpb25TaWduYXR1cmVzIH0pID0+IGZ1bmN0aW9uIHJlbmRlclR5cGUodHlwZSkge1xuICBpZiAoIXR5cGUpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBjb25zdCBkaXNwbGF5TmFtZU9mID0geCA9PiBodG1sICYmIHguaHRtbCB8fCB4Lm5hbWU7XG4gIGNvbnN0IGRpc3BsYXlOYW1lID0gZGlzcGxheU5hbWVPZih0eXBlKTtcbiAgY29uc3QgcmVuZGVyRnVuY3Rpb25QYXJhbSA9IHBhcmFtID0+IChcbiAgICBkaXNwbGF5TmFtZU9mKHBhcmFtKVxuICApXG5cbiAgaWYgKHR5cGUubmFtZSA9PT0gSy5UWVBFX1VOSU9OKSB7XG4gICAgcmV0dXJuIHR5cGUuZWxlbWVudHMubWFwKHJlbmRlclR5cGUpLmpvaW4oQVBQTF9TRVApO1xuICB9XG4gIGVsc2UgaWYgKHR5cGUubmFtZSA9PT0gSy5UWVBFX0FSUkFZICYmIHR5cGUuZWxlbWVudHMpIHtcbiAgICByZXR1cm4gYEFycmF5JHtBUFBMX1NUQVJUfWAgKyB0eXBlLmVsZW1lbnRzLm1hcChyZW5kZXJUeXBlKS5qb2luKEFQUExfU0VQKSArIEFQUExfRU5EO1xuICB9XG4gIGVsc2UgaWYgKHR5cGUubmFtZSAmJiB0eXBlLmVsZW1lbnRzKSB7XG4gICAgcmV0dXJuIGAke2Rpc3BsYXlOYW1lfSR7QVBQTF9TVEFSVH0ke3R5cGUuZWxlbWVudHMubWFwKHJlbmRlclR5cGUpLmpvaW4oQVBQTF9TRVApfSR7QVBQTF9FTkR9YDtcbiAgfVxuICAvLyBmdW5jdGlvbiB3aXRoIHBhcmFtcyBhbmQgcmV0dXJuIHR5cGVcbiAgZWxzZSBpZiAoZXhwYW5kRnVuY3Rpb25TaWduYXR1cmVzICYmIHR5cGUubmFtZSA9PT0gSy5UWVBFX0ZVTkNUSU9OICYmIHR5cGUucGFyYW1zICYmIHR5cGUucmV0dXJuVHlwZSkge1xuICAgIHJldHVybiBgKCR7dHlwZS5wYXJhbXMubWFwKHJlbmRlckZ1bmN0aW9uUGFyYW0pLmpvaW4oJywgJyl9KSAtPiAke2Rpc3BsYXlOYW1lT2YodHlwZS5yZXR1cm5UeXBlKX1gXG4gIH1cbiAgLy8gZnVuY3Rpb24gd2l0aCByZXR1cm4gdHlwZSBvbmx5XG4gIGVsc2UgaWYgKGV4cGFuZEZ1bmN0aW9uU2lnbmF0dXJlcyAmJiB0eXBlLm5hbWUgPT09IEsuVFlQRV9GVU5DVElPTiAmJiB0eXBlLnJldHVyblR5cGUpIHtcbiAgICByZXR1cm4gYCgpIC0+ICR7ZGlzcGxheU5hbWVPZih0eXBlLnJldHVyblR5cGUpfWBcbiAgfVxuICAvLyBmdW5jdGlvbiB3aXRoIHBhcmFtcyBvbmx5XG4gIGVsc2UgaWYgKGV4cGFuZEZ1bmN0aW9uU2lnbmF0dXJlcyAmIHR5cGUubmFtZSA9PT0gSy5UWVBFX0ZVTkNUSU9OICYmIHR5cGUucGFyYW1zKSB7XG4gICAgcmV0dXJuIGAoJHt0eXBlLnBhcmFtcy5tYXAocmVuZGVyRnVuY3Rpb25QYXJhbSkuam9pbignLCAnKX0pIC0+ID9gXG4gIH1cbiAgZWxzZSBpZiAodHlwZS5uYW1lID09PSBLLlRZUEVfQUxMX0xJVEVSQUwpIHtcbiAgICByZXR1cm4gJyonO1xuICB9XG5cbiAgdmFyIGJ1ZmZlciA9IGRpc3BsYXlOYW1lO1xuXG4gIGlmICh0eXBlLm51bGxhYmxlID09PSBmYWxzZSkge1xuICAgIGJ1ZmZlciArPSAnISc7XG4gIH1cblxuICBpZiAodHlwZS5udWxsYWJsZSA9PT0gdHJ1ZSkge1xuICAgIGJ1ZmZlciArPSAnPyc7XG4gIH1cblxuICBpZiAodHlwZS5vcHRpb25hbCkge1xuICAgIGJ1ZmZlciArPSAnPSc7XG4gIH1cblxuICByZXR1cm4gYnVmZmVyO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL3V0aWxzL2Rlc2NyaWJlVHlwZS5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbmNvbnN0IHsgYm9vbCwgb2JqZWN0LCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuY29uc3QgZGVzY3JpYmVUeXBlID0gcmVxdWlyZSgnLi4vdXRpbHMvZGVzY3JpYmVUeXBlJyk7XG5cbmNvbnN0IEZ1bmN0aW9uU2lnbmF0dXJlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBjb250ZXh0VHlwZXM6IHtcbiAgICBjb25maWc6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfSxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkb2M6IG9iamVjdCxcbiAgICB3aXRoTmFtZXM6IGJvb2wsXG4gICAgd2l0aEJyYWNlczogYm9vbCxcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpdGhOYW1lczogdHJ1ZSxcbiAgICAgIHdpdGhCcmFjZXM6IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHdpdGhOYW1lcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkZXNjcmliZVR5cGVIVE1MID0gZGVzY3JpYmVUeXBlKHtcbiAgICAgIGV4cGFuZEZ1bmN0aW9uU2lnbmF0dXJlczogdGhpcy5jb250ZXh0LmNvbmZpZy5leHBhbmRSZXR1cm5lZEZ1bmN0aW9uU2lnbmF0dXJlcyxcbiAgICAgIGh0bWw6IHRydWUsXG4gICAgfSlcbiAgICBjb25zdCBkZXNjcmliZVR5cGVUZXh0ID0gZGVzY3JpYmVUeXBlKHtcbiAgICAgIGV4cGFuZEZ1bmN0aW9uU2lnbmF0dXJlczogdGhpcy5jb250ZXh0LmNvbmZpZy5leHBhbmRSZXR1cm5lZEZ1bmN0aW9uU2lnbmF0dXJlcyxcbiAgICAgIGh0bWw6IGZhbHNlLFxuICAgIH0pXG5cbiAgICBjb25zdCBwYXJhbVRhZ3MgPSB0aGlzLnByb3BzLmRvYy50YWdzLmZpbHRlcihmdW5jdGlvbih0YWcpIHtcbiAgICAgIHJldHVybiB0YWcudHlwZSA9PT0gJ3BhcmFtJyAmJiAodGFnLnR5cGVJbmZvLm5hbWUgfHwgJz8nKS5pbmRleE9mKCcuJykgPT09IC0xO1xuICAgIH0pXG5cbiAgICBjb25zdCBwYXJhbUxpbmVzID0gcGFyYW1UYWdzLm1hcChmdW5jdGlvbihwYXJhbSkge1xuICAgICAgaWYgKHdpdGhOYW1lcyAmJiBwYXJhbS50eXBlSW5mby5uYW1lKSB7XG4gICAgICAgIHJldHVybiAnPGVtPicgKyAocGFyYW0udHlwZUluZm8ubmFtZSB8fCAnPycpICsgJzwvZW0+OiAnICsgZGVzY3JpYmVUeXBlSFRNTChwYXJhbS50eXBlSW5mby50eXBlKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZGVzY3JpYmVUeXBlSFRNTChwYXJhbS50eXBlSW5mby50eXBlKTtcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gaXQncyAzOjQyIEFNIGFuZCBpIGNhbid0IHNsZWVwXG4gICAgY29uc3QgcGFyYW1UYWdUb3RhbExlbmd0aCA9IHBhcmFtVGFncy5tYXAodGFnID0+IHtcbiAgICAgIGlmICh3aXRoTmFtZXMgJiYgdGFnLnR5cGVJbmZvLm5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRhZy50eXBlSW5mby5uYW1lICsgJzogJyArIGRlc2NyaWJlVHlwZVRleHQodGFnLnR5cGVJbmZvLnR5cGUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBkZXNjcmliZVR5cGVUZXh0KHRhZy50eXBlSW5mby50eXBlKTtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcsICcpLmxlbmd0aFxuXG4gICAgY29uc3QgbmVlZHNCcmVhayA9IHBhcmFtVGFnVG90YWxMZW5ndGggPj0gNDBcbiAgICBjb25zdCBodG1sID0gcGFyYW1MaW5lc1xuICAgICAgLm1hcChsaW5lID0+IHtcbiAgICAgICAgcmV0dXJuIG5lZWRzQnJlYWsgPyBgPGJyIC8+Jm5ic3A7Jm5ic3A7JHtsaW5lfWAgOiBsaW5lXG4gICAgICB9KVxuICAgICAgLmpvaW4oJywgJykgKyAobmVlZHNCcmVhayA/ICc8YnIgLz4nIDogJycpXG4gICAgO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX2Z1bmN0aW9uLXNpZ25hdHVyZVwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiB0aGlzLnByb3BzLndpdGhCcmFjZXMgPyBgKCR7aHRtbH0pYCA6IGh0bWxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRnVuY3Rpb25TaWduYXR1cmU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0Z1bmN0aW9uU2lnbmF0dXJlLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgTW9kdWxlQm9keSA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvTW9kdWxlQm9keScpO1xuY29uc3QgeyBvYmplY3QsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbm1vZHVsZS5leHBvcnRzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0pTOjpNb2R1bGVCb2R5JyxcblxuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgICBuYW1lc3BhY2VOb2RlOiBvYmplY3QsXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5wcm9wcy5kb2N1bWVudE5vZGUucHJvcGVydGllcykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIDxNb2R1bGVCb2R5IHsuLi50aGlzLnByb3BzfSAvPjtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9vdXRsZXRzL01vZHVsZUJvZHlPdXRsZXQuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCB7IGZpbmRXaGVyZSwgd2hlcmUgfSA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7XG5jb25zdCBPdXRsZXQgPSByZXF1aXJlKCdjb21wb25lbnRzL091dGxldCcpO1xuY29uc3QgTGluayA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvTGluaycpO1xuY29uc3QgRG9jID0gcmVxdWlyZSgnLi9Eb2MnKTtcbmNvbnN0IE9iamVjdFN5bm9wc2lzID0gcmVxdWlyZSgnLi9PYmplY3RTeW5vcHNpcycpO1xuY29uc3QgU2VlVGFnID0gcmVxdWlyZSgnLi9UYWdzL1NlZVRhZycpO1xuY29uc3QgRG9jR3JvdXAgPSByZXF1aXJlKCcuL0RvY0dyb3VwJyk7XG5jb25zdCBQcm9wZXJ0eVRhZyA9IHJlcXVpcmUoJy4vVGFncy9Qcm9wZXJ0eVRhZycpO1xuY29uc3QgRXhhbXBsZVRhZyA9IHJlcXVpcmUoJy4vVGFncy9FeGFtcGxlVGFnJyk7XG5jb25zdCBvcmRlckF3YXJlU29ydCA9IHJlcXVpcmUoJy4uL3V0aWxzL29yZGVyQXdhcmVTb3J0Jyk7XG5jb25zdCBEb2NDbGFzc2lmaWVyID0gcmVxdWlyZSgnLi4vdXRpbHMvRG9jQ2xhc3NpZmllcicpO1xuY29uc3QgSyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuY29uc3QgeyBzdHJpbmcsIG9iamVjdCwgYXJyYXlPZiB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5jb25zdCBNb2R1bGVCb2R5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgICBuYW1lc3BhY2VOb2RlOiBvYmplY3QsXG4gICAgZG9jOiBvYmplY3QsXG4gICAgbW9kdWxlRG9jczogYXJyYXlPZihvYmplY3QpLFxuICAgIGZvY3VzZWRFbnRpdHk6IHN0cmluZyxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkb2N1bWVudE5vZGUgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZG9jID0gZG9jdW1lbnROb2RlLnByb3BlcnRpZXM7XG4gICAgY29uc3QgbW9kdWxlRG9jcyA9IGRvY3VtZW50Tm9kZS5lbnRpdGllcy5tYXAoeCA9PiB4LnByb3BlcnRpZXMpO1xuICAgIGNvbnN0IHJlbmRlcmFibGVUeXBlID0gRG9jQ2xhc3NpZmllci5nZXREaXNwbGF5VHlwZShkb2N1bWVudE5vZGUpO1xuICAgIGNvbnN0IG1peGVkSW5UYXJnZXRzID0gZ2V0TWl4ZWRJblRhcmdldHMoZG9jdW1lbnROb2RlLCB0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGUpO1xuICAgIGNvbnN0IHdpdGhvdXRUeXBlRGVmcyA9IG1vZHVsZURvY3MuZmlsdGVyKHggPT4gIURvY0NsYXNzaWZpZXIuaXNUeXBlRGVmKHgpKVxuICAgIGNvbnN0IHR5cGVkZWZzID0gZG9jdW1lbnROb2RlLmVudGl0aWVzLmZpbHRlcih4ID0+IERvY0NsYXNzaWZpZXIuaXNUeXBlRGVmKHgucHJvcGVydGllcykpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge21peGVkSW5UYXJnZXRzLmxlbmd0aCA+IDAgJiYgW1xuICAgICAgICAgIDxwIGtleT1cIm1peGluVGFyZ2V0c19faGVhZGVyXCIgY2xhc3NOYW1lPVwiZG9jLWdyb3VwX19oZWFkZXJcIj5cbiAgICAgICAgICAgIFRoaXMgbW9kdWxlIGlzIG1peGVkLWluIGJ5IHRoZSBmb2xsb3dpbmcgbW9kdWxlczpcbiAgICAgICAgICA8L3A+LFxuXG4gICAgICAgICAgPG9sIGtleT1cIm1peGluVGFyZ2V0c19fbGlzdGluZ1wiPlxuICAgICAgICAgICAge21peGVkSW5UYXJnZXRzLm1hcCh4ID0+IChcbiAgICAgICAgICAgICAgPGxpIGtleT17eC51aWR9PlxuICAgICAgICAgICAgICAgIDxMaW5rIHRvPXt4fT57eC50aXRsZX08L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L29sPlxuICAgICAgICBdfVxuXG4gICAgICAgIHtyZW5kZXJhYmxlVHlwZSA9PT0gJ0ZhY3RvcnknICYmIChcbiAgICAgICAgICB0aGlzLnJlbmRlckNvbnN0cnVjdG9yKGRvYywgXCJJbnN0YW5jZSBDb25zdHJ1Y3RvclwiKVxuICAgICAgICApfVxuXG4gICAgICAgIHtyZW5kZXJhYmxlVHlwZSA9PT0gJ0NsYXNzJyAmJiAoXG4gICAgICAgICAgdGhpcy5yZW5kZXJDb25zdHJ1Y3Rvcihkb2MsIFwiQ29uc3RydWN0b3JcIilcbiAgICAgICAgKX1cblxuICAgICAgICB7cmVuZGVyYWJsZVR5cGUgPT09ICdGdW5jdGlvbicgJiYgKFxuICAgICAgICAgIHRoaXMucmVuZGVyQ29uc3RydWN0b3IoZG9jLCBcIlNpZ25hdHVyZVwiKVxuICAgICAgICApfVxuXG4gICAgICAgIHt0aGlzLnJlbmRlckV4YW1wbGVzKGRvYyl9XG4gICAgICAgIHt0aGlzLnJlbmRlclN0YXRpY01ldGhvZHMoZG9jLCB3aXRob3V0VHlwZURlZnMpfVxuICAgICAgICB7dGhpcy5yZW5kZXJDYWxsYmFja3MoZG9jLCB3aXRob3V0VHlwZURlZnMpfVxuICAgICAgICB7dGhpcy5yZW5kZXJUeXBlRGVmcyhkb2MsIHR5cGVkZWZzKX1cbiAgICAgICAge3RoaXMucmVuZGVyUHJvcGVydGllcyhcbiAgICAgICAgICBkb2MsXG4gICAgICAgICAgd2l0aG91dFR5cGVEZWZzLFxuICAgICAgICAgIChzY29wZSkgPT4gIWlzU3RhdGljUHJvcGVydHkoc2NvcGUpLFxuICAgICAgICAgIFwiSW5zdGFuY2UgUHJvcGVydGllc1wiXG4gICAgICAgICl9XG5cbiAgICAgICAge3RoaXMucmVuZGVyUHJvcGVydGllcyhcbiAgICAgICAgICBkb2MsXG4gICAgICAgICAgd2l0aG91dFR5cGVEZWZzLFxuICAgICAgICAgIGlzU3RhdGljUHJvcGVydHksXG4gICAgICAgICAgXCJTdGF0aWMgUHJvcGVydGllc1wiXG4gICAgICAgICl9XG5cbiAgICAgICAge3RoaXMucmVuZGVyTWV0aG9kcyhkb2MsIHdpdGhvdXRUeXBlRGVmcyl9XG4gICAgICAgIHt0aGlzLnJlbmRlckFkZGl0aW9uYWxSZXNvdXJjZXMoZG9jKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ29uc3RydWN0b3IoZG9jLCB0aXRsZSkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZG9jLWdyb3VwX19oZWFkZXJcIj57dGl0bGV9PC9oMj5cblxuICAgICAgICA8RG9jXG4gICAgICAgICAgd2l0aERlc2NyaXB0aW9uPXtmYWxzZX1cbiAgICAgICAgICB3aXRoRXhhbXBsZXM9e2ZhbHNlfVxuICAgICAgICAgIHdpdGhBZGRpdGlvbmFsUmVzb3VyY2VzPXtmYWxzZX1cbiAgICAgICAgICBjb2xsYXBzaWJsZT17ZmFsc2V9XG4gICAgICAgICAgZG9jPXtkb2N9XG4gICAgICAgICAgY29uZmlnPXt0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGUuY29uZmlnfVxuICAgICAgICAgIGhlYWRpbmdUYWc9XCJoM1wiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlckV4YW1wbGVzKGRvYykge1xuICAgIGNvbnN0IHRhZ3MgPSB3aGVyZShkb2MudGFncywgeyB0eXBlOiAnZXhhbXBsZScgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPE91dGxldCBuYW1lPVwiSlM6OkV4YW1wbGVUYWdzXCIgZWxlbWVudFByb3BzPXt7dGFnc319PlxuICAgICAgICB7dGFncy5sZW5ndGggPT09IDEgJiYgKHRoaXMucmVuZGVyRXhhbXBsZVRhZyh0YWdzWzBdKSl9XG5cbiAgICAgICAge3RhZ3MubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgICAgPERvY0dyb3VwIGxhYmVsPVwiRXhhbXBsZXNcIiBhbHdheXNHcm91cD17ZmFsc2V9PlxuICAgICAgICAgICAge3RhZ3MubWFwKHRoaXMucmVuZGVyRXhhbXBsZVRhZyl9XG4gICAgICAgICAgPC9Eb2NHcm91cD5cbiAgICAgICAgKX1cbiAgICAgIDwvT3V0bGV0PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyRXhhbXBsZVRhZyh0YWcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE91dGxldFxuICAgICAgICBrZXk9e3RhZy5zdHJpbmd9XG4gICAgICAgIG5hbWU9XCJKUzo6RXhhbXBsZVRhZ1wiXG4gICAgICAgIGVsZW1lbnRQcm9wcz17e1xuICAgICAgICAgIHRhZyxcbiAgICAgICAgICBkb2N1bWVudE5vZGU6IHRoaXMucHJvcHMuZG9jdW1lbnROb2RlXG4gICAgICAgIH19XG4gICAgICAgIGZpcnN0TWF0Y2hpbmdFbGVtZW50XG4gICAgICA+XG4gICAgICAgIDxFeGFtcGxlVGFnIHN0cmluZz17dGFnLnN0cmluZ30gdHlwZUluZm89e3RhZy50eXBlSW5mb30gLz5cbiAgICAgIDwvT3V0bGV0PlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQWRkaXRpb25hbFJlc291cmNlcyhkb2MpIHtcbiAgICBjb25zdCB0YWdzID0gd2hlcmUoZG9jLnRhZ3MsIHsgdHlwZTogJ3NlZScgfSk7XG5cbiAgICBpZiAoIXRhZ3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvY0dyb3VwIGxhYmVsPVwiQWRkaXRpb25hbCByZXNvdXJjZXNcIiBjbGFzc05hbWU9XCJjbGFzcy12aWV3X19zZWVzXCIgdGFnTmFtZT1cInVsXCI+XG4gICAgICAgIHt0YWdzLm1hcCh0aGlzLnJlbmRlclNlZVRhZyl9XG4gICAgICA8L0RvY0dyb3VwPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyU2VlVGFnKHRhZykge1xuICAgIHJldHVybiAoXG4gICAgICA8U2VlVGFnIGtleT17dGFnLnR5cGVJbmZvLm5hbWV9IHsuLi50YWd9IC8+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJQcm9wZXJ0aWVzKGRvYywgbW9kdWxlRG9jcywgc2NvcGUgPSBudWxsLCB0aXRsZSA9ICdQcm9wZXJ0aWVzJykge1xuICAgIGNvbnN0IHByb3BlcnR5RG9jcyA9IG9yZGVyQXdhcmVTb3J0KFxuICAgICAgZG9jLFxuICAgICAgbW9kdWxlRG9jcy5maWx0ZXIoZnVuY3Rpb24oZW50aXR5RG9jKSB7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoc2NvcGUgPyBzY29wZShlbnRpdHlEb2Mubm9kZUluZm8uc2NvcGUpIDogdHJ1ZSkgJiZcbiAgICAgICAgICAoXG4gICAgICAgICAgICBlbnRpdHlEb2Mubm9kZUluZm8udHlwZSA9PT0gSy5UWVBFX0xJVEVSQUwgfHxcbiAgICAgICAgICAgIGVudGl0eURvYy50YWdzLnNvbWUoeCA9PiB4LnR5cGUgPT09ICdwcm9wZXJ0eScpXG4gICAgICAgICAgKSAmJiBlbnRpdHlEb2Muc3ltYm9sICE9PSAnfidcbiAgICAgICAgKTtcbiAgICAgIH0pLFxuICAgICAgJ2lkJ1xuICAgICk7XG5cbiAgICBpZiAoIXByb3BlcnR5RG9jcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jR3JvdXAgbGFiZWw9e3RpdGxlfSB0YWdOYW1lPVwiZGl2XCIgY2xhc3NOYW1lPVwianMtZG9jLWVudGl0eV9fcHJvcGVydHktdGFnc1wiPlxuICAgICAgICB7cHJvcGVydHlEb2NzLm1hcCh0aGlzLnJlbmRlclByb3BlcnR5KX1cbiAgICAgIDwvRG9jR3JvdXA+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJQcm9wZXJ0eShkb2MpIHtcbiAgICBjb25zdCB0YWcgPSAoXG4gICAgICBmaW5kV2hlcmUoZG9jLnRhZ3MsIHsgdHlwZTogJ3Byb3BlcnR5JyB9KSB8fFxuICAgICAgZmluZFdoZXJlKGRvYy50YWdzLCB7IHR5cGU6ICd0eXBlJyB9KSB8fCB7XG4gICAgICAgIHR5cGVJbmZvOiB7XG4gICAgICAgICAgbmFtZTogZG9jLm5hbWUsXG4gICAgICAgICAgdHlwZTogeyBuYW1lOiBkb2MudHlwZSB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuXG4gICAgaWYgKGRvYy50eXBlICYmIGRvYy50eXBlID09PSBLLlRZUEVfT0JKRUNUICYmICEhdGFnLnR5cGVJbmZvLm5hbWUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxPYmplY3RTeW5vcHNpc1xuICAgICAgICAgIGtleT17ZG9jLmlkfVxuICAgICAgICAgIGRvYz17ZG9jfVxuICAgICAgICAgIGFuY2hvcj17dGhpcy5nZXRFbnRpdHlBbmNob3IoZG9jKX1cbiAgICAgICAgLz5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxQcm9wZXJ0eVRhZ1xuICAgICAgICBrZXk9e2RvYy5pZH1cbiAgICAgICAgdHlwZUluZm89e3RhZy50eXBlSW5mb31cbiAgICAgICAgYW5jaG9yPXt0aGlzLmdldEVudGl0eUFuY2hvcihkb2MpfVxuICAgICAgICBkb2M9e2RvY31cbiAgICAgID5cbiAgICAgICAge2RvYy50eXBlICYmIGRvYy50eXBlID09PSBLLlRZUEVfRlVOQ1RJT04gJiYgKFxuICAgICAgICAgIDxEb2NcbiAgICAgICAgICAgIHdpdGhUaXRsZT17ZmFsc2V9XG4gICAgICAgICAgICBjb2xsYXBzaWJsZT17ZmFsc2V9XG4gICAgICAgICAgICBkb2M9e2RvY31cbiAgICAgICAgICAgIGNvbmZpZz17dGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlLmNvbmZpZ31cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgPC9Qcm9wZXJ0eVRhZz5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclN0YXRpY01ldGhvZHMoZG9jLCBtb2R1bGVEb2NzKSB7XG4gICAgY29uc3Qgc3RhdGljTWV0aG9kRG9jcyA9IG9yZGVyQXdhcmVTb3J0KFxuICAgICAgZG9jLFxuICAgICAgbW9kdWxlRG9jcy5maWx0ZXIoRG9jQ2xhc3NpZmllci5pc1N0YXRpY01ldGhvZCksXG4gICAgICAnaWQnXG4gICAgKTtcblxuICAgIGlmICghc3RhdGljTWV0aG9kRG9jcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jR3JvdXAgbGFiZWw9XCJTdGF0aWMgTWV0aG9kc1wiIHRhZ05hbWU9XCJ1bFwiIGNsYXNzTmFtZT1cImNsYXNzLXZpZXdfX21ldGhvZC1saXN0XCI+XG4gICAgICAgIHtzdGF0aWNNZXRob2REb2NzLm1hcCh0aGlzLnJlbmRlclN0YXRpY01ldGhvZCl9XG4gICAgICA8L0RvY0dyb3VwPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyQ2FsbGJhY2tzKGRvYywgbW9kdWxlRG9jcykge1xuICAgIGNvbnN0IGNhbGxiYWNrRG9jcyA9IG9yZGVyQXdhcmVTb3J0KFxuICAgICAgZG9jLFxuICAgICAgbW9kdWxlRG9jcy5maWx0ZXIoRG9jQ2xhc3NpZmllci5pc0NhbGxiYWNrKSxcbiAgICAgICdpZCdcbiAgICApO1xuXG4gICAgaWYgKCFjYWxsYmFja0RvY3MubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPERvY0dyb3VwIGxhYmVsPVwiQ2FsbGJhY2sgRGVmaW5pdGlvbnNcIiB0YWdOYW1lPVwidWxcIiBjbGFzc05hbWU9XCJjbGFzcy12aWV3X19tZXRob2QtbGlzdFwiPlxuICAgICAgICB7Y2FsbGJhY2tEb2NzLm1hcCh0aGlzLnJlbmRlclN0YXRpY01ldGhvZCl9XG4gICAgICA8L0RvY0dyb3VwPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyVHlwZURlZnMoZG9jLCB0eXBlZGVmTm9kZXMpIHtcbiAgICBpZiAoIXR5cGVkZWZOb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IG9yZGVyZWROb2RlcyA9IG9yZGVyQXdhcmVTb3J0LmFzTm9kZXMoeyBwcm9wZXJ0aWVzOiBkb2MgfSwgdHlwZWRlZk5vZGVzLCAnaWQnKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RG9jR3JvdXAgbGFiZWw9XCJUeXBlIERlZmluaXRpb25zXCIgdGFnTmFtZT1cInVsXCIgY2xhc3NOYW1lPVwiY2xhc3Mtdmlld19fdHlwZS1kZWYtbGlzdFwiPlxuICAgICAgICB7b3JkZXJlZE5vZGVzLm1hcCh0eXBlZGVmTm9kZSA9PiB7XG4gICAgICAgICAgY29uc3QgdHlwZWRlZkRvYyA9IHR5cGVkZWZOb2RlLnByb3BlcnRpZXNcbiAgICAgICAgICBjb25zdCBwcm9wZXJ0eVRhZ3MgPSB0eXBlZGVmRG9jLnRhZ3MuZmlsdGVyKHggPT4geC50eXBlID09PSAncHJvcGVydHknKVxuICAgICAgICAgIGNvbnN0IG1lbWJlclByb3BlcnR5VGFncyA9ICh0eXBlZGVmTm9kZS5lbnRpdGllcyB8fCBbXSkucmVkdWNlKChsaXN0LCBlbnRpdHkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBsaXN0LmNvbmNhdChcbiAgICAgICAgICAgICAgZW50aXR5LnByb3BlcnRpZXMudGFncy5maWx0ZXIoeCA9PiB4LnR5cGUgPT09ICdwcm9wZXJ0eScpLm1hcChwcm9wZXJ0eVRhZyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHByb3BlcnR5VGFnLCB7IGFuY2hvcjogZW50aXR5Lm1ldGEuYW5jaG9yIH0pXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSwgW10pXG5cbiAgICAgICAgICBjb25zdCBhbGxQcm9wZXJ0eVRhZ3MgPSBwcm9wZXJ0eVRhZ3MuY29uY2F0KG1lbWJlclByb3BlcnR5VGFncylcblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RG9jXG4gICAgICAgICAgICAgIGtleT17dHlwZWRlZkRvYy5pZH1cbiAgICAgICAgICAgICAgZG9jPXt0eXBlZGVmRG9jfVxuICAgICAgICAgICAgICBhbmNob3I9e3RoaXMuZ2V0RW50aXR5QW5jaG9yKHR5cGVkZWZEb2MpfVxuICAgICAgICAgICAgICBjb25maWc9e3RoaXMucHJvcHMubmFtZXNwYWNlTm9kZS5jb25maWd9XG4gICAgICAgICAgICAgIGhlYWRpbmdUYWc9XCJoM1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHthbGxQcm9wZXJ0eVRhZ3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRhZy1ncm91cF9faGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICB7XCJQcm9wZXJ0aWVzXCJ9XG4gICAgICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7YWxsUHJvcGVydHlUYWdzLm1hcCgodGFnLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxQcm9wZXJ0eVRhZ1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICAgIHR5cGVJbmZvPXt0YWcudHlwZUluZm99XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcj17dGFnLmFuY2hvcn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvRG9jPlxuICAgICAgICAgIClcbiAgICAgICAgfSl9XG4gICAgICA8L0RvY0dyb3VwPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyU3RhdGljTWV0aG9kKGRvYykge1xuICAgIHJldHVybiAoXG4gICAgICA8RG9jXG4gICAgICAgIGtleT17ZG9jLmlkfVxuICAgICAgICBkb2M9e2RvY31cbiAgICAgICAgYW5jaG9yPXt0aGlzLmdldEVudGl0eUFuY2hvcihkb2MpfVxuICAgICAgICBjb25maWc9e3RoaXMucHJvcHMubmFtZXNwYWNlTm9kZS5jb25maWd9XG4gICAgICAgIGhlYWRpbmdUYWc9XCJoM1wiXG4gICAgICAvPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyTWV0aG9kcyhkb2MsIG1vZHVsZURvY3MpIHtcbiAgICBjb25zdCBtZXRob2REb2NzID0gb3JkZXJBd2FyZVNvcnQoXG4gICAgICBkb2MsXG4gICAgICBtb2R1bGVEb2NzLmZpbHRlcihEb2NDbGFzc2lmaWVyLmlzTWV0aG9kKSxcbiAgICAgICdpZCdcbiAgICApO1xuXG4gICAgaWYgKCFtZXRob2REb2NzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2NHcm91cCBsYWJlbD1cIkluc3RhbmNlIE1ldGhvZHNcIiB0YWdOYW1lPVwidWxcIiBjbGFzc05hbWU9XCJjbGFzcy12aWV3X19tZXRob2QtbGlzdFwiPlxuICAgICAgICB7bWV0aG9kRG9jcy5tYXAodGhpcy5yZW5kZXJNZXRob2QpfVxuICAgICAgPC9Eb2NHcm91cD5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck1ldGhvZChkb2MpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPERvY1xuICAgICAgICBrZXk9e2RvYy5pZH1cbiAgICAgICAgZG9jPXtkb2N9XG4gICAgICAgIGFuY2hvcj17dGhpcy5nZXRFbnRpdHlBbmNob3IoZG9jKX1cbiAgICAgICAgY29uZmlnPXt0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGUuY29uZmlnfVxuICAgICAgICBoZWFkaW5nVGFnPVwiaDNcIlxuICAgICAgLz5cbiAgICApO1xuICB9LFxuXG4gIGdldEVudGl0eUFuY2hvcihkb2MpIHtcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5kb2N1bWVudE5vZGUuZW50aXRpZXMuZmlsdGVyKHggPT4geC5wcm9wZXJ0aWVzID09PSBkb2MpWzBdLm1ldGEuYW5jaG9yO1xuICB9LFxufSk7XG5cbmZ1bmN0aW9uIGlzU3RhdGljUHJvcGVydHkoc2NvcGUpIHtcbiAgcmV0dXJuIFtcbiAgICBLLlNDT1BFX1BST1RPVFlQRSxcbiAgICBLLlNDT1BFX0lOU1RBTkNFXG4gIF0uaW5kZXhPZihzY29wZSkgPT09IC0xIHx8IHNjb3BlIDtcbn1cblxuZnVuY3Rpb24gZ2V0TWl4ZWRJblRhcmdldHMobm9kZSwgbmFtZXNwYWNlTm9kZSkge1xuICBjb25zdCB7IHVpZCB9ID0gbm9kZTtcblxuICByZXR1cm4gbmFtZXNwYWNlTm9kZS5kb2N1bWVudHMucmVkdWNlKGZpbmRNYXRjaGluZ0RvY3VtZW50cywgW10pO1xuXG4gIGZ1bmN0aW9uIGZpbmRNYXRjaGluZ0RvY3VtZW50cyhsaXN0LCBkb2N1bWVudE5vZGUpIHtcbiAgICBpZiAobWF0Y2goZG9jdW1lbnROb2RlKSkge1xuICAgICAgbGlzdC5wdXNoKGRvY3VtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50Tm9kZS5kb2N1bWVudHMpIHtcbiAgICAgIGRvY3VtZW50Tm9kZS5kb2N1bWVudHMucmVkdWNlKGZpbmRNYXRjaGluZ0RvY3VtZW50cywgbGlzdCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaCh4KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHgucHJvcGVydGllcyAmJlxuICAgICAgeC5wcm9wZXJ0aWVzLm1peGluVGFyZ2V0cyAmJlxuICAgICAgeC5wcm9wZXJ0aWVzLm1peGluVGFyZ2V0cy5zb21lKHkgPT4geS51aWQgPT09IHVpZClcbiAgICApO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTW9kdWxlQm9keTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL01vZHVsZUJvZHkuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBjbGFzc1NldCA9IHJlcXVpcmUoJ3V0aWxzL2NsYXNzU2V0Jyk7XG5jb25zdCBIaWdobGlnaHRlZFRleHQgPSByZXF1aXJlKCdjb21wb25lbnRzL0hpZ2hsaWdodGVkVGV4dCcpO1xuY29uc3QgRG9jVGFncyA9IHJlcXVpcmUoJy4vRG9jVGFncycpO1xuY29uc3QgRnVuY3Rpb25TaWduYXR1cmUgPSByZXF1aXJlKCcuL0Z1bmN0aW9uU2lnbmF0dXJlJyk7XG5jb25zdCBUeXBlTmFtZXMgPSByZXF1aXJlKCcuL1RhZ3MvVHlwZU5hbWVzJyk7XG5jb25zdCBEZXByZWNhdGVkVGFnID0gcmVxdWlyZSgnLi9UYWdzL0RlcHJlY2F0ZWRUYWcnKTtcbmNvbnN0IEsgPSByZXF1aXJlKCcuLi9jb25zdGFudHMnKTtcbmNvbnN0IERvY0NsYXNzaWZpZXIgPSByZXF1aXJlKCcuLi91dGlscy9Eb2NDbGFzc2lmaWVyJyk7XG5jb25zdCBDb2xsYXBzaWJsZSA9IHJlcXVpcmUoJ21peGlucy9Db2xsYXBzaWJsZScpO1xuY29uc3QgeyBvYmplY3QsIGJvb2wsIHN0cmluZyB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuY29uc3QgSGVhZGluZ0FuY2hvciA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGVhZGluZ0FuY2hvcicpO1xuXG5jb25zdCBEb2MgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogWyBDb2xsYXBzaWJsZSBdLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGFuY2hvcjogc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBSZWFjdC5Qcm9wVHlwZXMubm9kZSxcbiAgICBkb2M6IG9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGNvbmZpZzogb2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgY29sbGFwc2libGU6IGJvb2wsXG4gICAgZXhwYW5kZWQ6IGJvb2wsXG4gICAgaGVhZGluZ1RhZzogc3RyaW5nLFxuICAgIHdpdGhFeGFtcGxlczogYm9vbCxcbiAgICB3aXRoVGl0bGU6IGJvb2wsXG4gICAgd2l0aERlc2NyaXB0aW9uOiBib29sLFxuICAgIHdpdGhBZGRpdGlvbmFsUmVzb3VyY2VzOiBib29sLFxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhlYWRpbmdUYWc6ICdoNCcsXG4gICAgICB3aXRoVGl0bGU6IHRydWUsXG4gICAgICB3aXRoRGVzY3JpcHRpb246IHRydWUsXG4gICAgICB3aXRoRXhhbXBsZXM6IHRydWVcbiAgICB9O1xuICB9LFxuXG4gIC8vIHNob3VsZENvbXBvbmVudFVwZGF0ZTogZnVuY3Rpb24obmV4dFByb3BzLCBuZXh0U3RhdGUpIHtcbiAgLy8gICByZXR1cm4gKFxuICAvLyAgICAgbmV4dFByb3BzLmRvYyAhPT0gdGhpcy5wcm9wcy5kb2MgfHxcbiAgLy8gICAgIG5leHRTdGF0ZS5jb2xsYXBzZWQgIT09IHRoaXMuc3RhdGUuY29sbGFwc2VkIHx8XG4gIC8vICAgICBuZXh0UHJvcHMuZXhwYW5kZWQgIT09IHRoaXMucHJvcHMuZXhwYW5kZWRcbiAgLy8gICApO1xuICAvLyB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgaXNDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG4gICAgdmFyIGNsYXNzTmFtZSA9IGNsYXNzU2V0KHtcbiAgICAgICdkb2MtZW50aXR5JzogdHJ1ZSxcbiAgICAgICdjb2xsYXBzaWJsZSc6ICEhdGhpcy5wcm9wcy5jb2xsYXBzaWJsZSxcbiAgICAgICdjb2xsYXBzaWJsZS0tZXhwYW5kZWQnOiAhaXNDb2xsYXBzZWQsXG4gICAgICAnY29sbGFwc2libGUtLWNvbGxhcHNlZCc6IGlzQ29sbGFwc2VkLFxuICAgIH0pO1xuXG4gICAgY29uc3QgeyBkb2MsIGFuY2hvciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvYy5kZXNjcmlwdGlvbjtcbiAgICBjb25zdCBkZXByZWNhdGVkVGFnID0gZG9jLnRhZ3MuZmlsdGVyKCh0KSA9PiB0LnR5cGUgPT09ICdkZXByZWNhdGVkJylbMF07XG4gICAgY29uc3QgaXNQcml2YXRlID0gRG9jQ2xhc3NpZmllci5pc1ByaXZhdGUoZG9jKVxuICAgIGNvbnN0IEhlYWRpbmdUYWcgPSB0aGlzLnByb3BzLmhlYWRpbmdUYWcgfHwgJ2g0J1xuXG4gICAgaWYgKGlzUHJpdmF0ZSAmJiB0aGlzLnByb3BzLmNvbmZpZy5oaWRlUHJpdmF0ZVN5bWJvbHMpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgICB7dGhpcy5wcm9wcy53aXRoVGl0bGUgJiYgKFxuICAgICAgICAgIDxIZWFkaW5nVGFnXG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICBjbGFzc1NldCh7XG4gICAgICAgICAgICAgICAgXCJkb2MtZW50aXR5X19oZWFkZXJcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBcImNvbGxhcHNpYmxlLWhlYWRlclwiOiB0cnVlLFxuICAgICAgICAgICAgICAgIFwiYW5jaG9yYWJsZS1oZWFkaW5nXCI6ICEhYW5jaG9yXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlZH1cbiAgICAgICAgICAgIHRpdGxlPXtkb2MubmFtZX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJDb2xsYXBzZXIoKX1cbiAgICAgICAgICAgIHthbmNob3IgJiYgPEhlYWRpbmdBbmNob3IuQW5jaG9yIGhyZWY9e2FuY2hvcn0gLz59XG4gICAgICAgICAgICB7YW5jaG9yICYmIDxIZWFkaW5nQW5jaG9yLkxpbmsgaHJlZj17YW5jaG9yfSAvPn1cblxuICAgICAgICAgICAgPEhlYWRpbmdBbmNob3IuVGV4dCBjbGFzc05hbWU9XCJkb2MtZW50aXR5X19uYW1lXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX25hbWUtZnJhZ21lbnRcIj5cbiAgICAgICAgICAgICAgICB7ZG9jLm5hbWV9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICB7aXNGdW5jdGlvbihkb2MpICYmIChcbiAgICAgICAgICAgICAgICA8RnVuY3Rpb25TaWduYXR1cmUgZG9jPXtkb2N9IC8+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyUmV0dXJuVHlwZSgpfVxuXG4gICAgICAgICAgICAgIHtkb2MuaXNDb25zdHJ1Y3RvciAmJiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWVudGl0eV9fbW9kaWZpZXJcIj5DT05TVFJVQ1RPUjwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICB7RG9jQ2xhc3NpZmllci5pc1Byb3RlY3RlZChkb2MpICYmIChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkb2MtZW50aXR5X19tb2RpZmllciBkb2MtZW50aXR5X19wcm90ZWN0ZWRcIj5QUk9URUNURUQ8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAge2lzUHJpdmF0ZSAmJiAoXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWVudGl0eV9fbW9kaWZpZXIgZG9jLWVudGl0eV9fcHJpdmF0ZVwiPlBSSVZBVEU8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAge2RvYy50YWdzLnNvbWUoKHQpID0+IHQudHlwZSA9PT0gJ2FzeW5jJykgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX21vZGlmaWVyIGRvYy1lbnRpdHlfX2FzeW5jXCI+QVNZTkM8L3NwYW4+XG4gICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAge2RlcHJlY2F0ZWRUYWcgJiYgKFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX21vZGlmaWVyIGRvYy1lbnRpdHlfX2FzeW5jXCI+REVQUkVDQVRFRDwvc3Bhbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvSGVhZGluZ0FuY2hvci5UZXh0PlxuICAgICAgICAgIDwvSGVhZGluZ1RhZz5cbiAgICAgICAgKX1cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX2Rlc2NyaXB0aW9uXCI+XG4gICAgICAgICAge2RlcHJlY2F0ZWRUYWcgJiYgZGVwcmVjYXRlZFRhZy5zdHJpbmcubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICA8RGVwcmVjYXRlZFRhZyBzdHJpbmc9e2RlcHJlY2F0ZWRUYWcuc3RyaW5nfSAvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7dGhpcy5wcm9wcy53aXRoRGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24ubGVuZ3RoID4gMCAmJiAhaXNDb2xsYXBzZWQgJiYgKFxuICAgICAgICAgICAgPEhpZ2hsaWdodGVkVGV4dD5cbiAgICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgPC9IaWdobGlnaHRlZFRleHQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiBkb2MudGFncy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICA8RG9jVGFnc1xuICAgICAgICAgICAgdGFncz17ZG9jLnRhZ3N9XG4gICAgICAgICAgICBkb2M9e2RvY31cbiAgICAgICAgICAgIGNvbmZpZz17dGhpcy5wcm9wcy5jb25maWd9XG4gICAgICAgICAgICB3aXRoRXhhbXBsZXM9e3RoaXMucHJvcHMud2l0aEV4YW1wbGVzfVxuICAgICAgICAgICAgd2l0aEFkZGl0aW9uYWxSZXNvdXJjZXM9e3RoaXMucHJvcHMud2l0aEFkZGl0aW9uYWxSZXNvdXJjZXN9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7IWlzQ29sbGFwc2VkICYmIHRoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclJldHVyblR5cGUoKSB7XG4gICAgY29uc3QgWyB0YWcgXSA9IHRoaXMucHJvcHMuZG9jLnRhZ3MuZmlsdGVyKHQgPT4gdC50eXBlID09PSAncmV0dXJuJyk7XG5cbiAgICBpZiAoIXRhZykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRvYy1lbnRpdHlfX21ldGhvZC1wYXJhbXNcIj5cbiAgICAgICAgeycgLT4gJ31cbiAgICAgICAgPFR5cGVOYW1lcyB0eXBlPXt0YWcudHlwZUluZm8udHlwZX0gLz5cbiAgICAgIDwvc3Bhbj5cbiAgICApO1xuICB9XG59KTtcblxuZnVuY3Rpb24gaXNGdW5jdGlvbihkb2MpIHtcbiAgcmV0dXJuIGRvYy50eXBlID09PSBLLlRZUEVfRlVOQ1RJT047XG59XG5cbm1vZHVsZS5leHBvcnRzID0gRG9jO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvRG9jLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1widXRpbHMvY2xhc3NTZXRcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJ1dGlscy9jbGFzc1NldFxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgVGFnR3JvdXAgPSByZXF1aXJlKCcuL1RhZ3MvVGFnR3JvdXAnKTtcbnZhciBUeXBlRGVmVGFnR3JvdXAgPSByZXF1aXJlKCcuL1RhZ3MvVHlwZURlZlRhZ0dyb3VwJyk7XG52YXIgRXhhbXBsZVRhZyA9IHJlcXVpcmUoJy4vVGFncy9FeGFtcGxlVGFnJyk7XG52YXIgUGFyYW1UYWcgPSByZXF1aXJlKCcuL1RhZ3MvUGFyYW1UYWcnKTtcbnZhciBTZWVUYWcgPSByZXF1aXJlKCcuL1RhZ3MvU2VlVGFnJyk7XG52YXIgVGhyb3dzVGFnID0gcmVxdWlyZSgnLi9UYWdzL1Rocm93c1RhZycpO1xudmFyIFJldHVyblRhZyA9IHJlcXVpcmUoJy4vVGFncy9SZXR1cm5UYWcnKTtcbnZhciBDYWxsYmFja1RhZyA9IHJlcXVpcmUoJy4vVGFncy9DYWxsYmFja1RhZycpO1xudmFyIFRhYnVsYXJUYWdHcm91cCA9IHJlcXVpcmUoJy4vVGFidWxhclRhZ0dyb3VwJyk7XG52YXIgeyB3aGVyZSB9ID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5cbmNvbnN0IEhBTkRMRURfVEFHUyA9IFtcbiAgJ2FsaWFzJyxcbiAgJ2FzeW5jJyxcbiAgJ2NhbGxiYWNrJyxcbiAgJ2NsYXNzJyxcbiAgJ2NvbnN0cnVjdG9yJyxcbiAgJ2RlcHJlY2F0ZWQnLFxuICAnZXhhbXBsZScsXG4gICdtZW1iZXJPZicsXG4gICdtZXRob2QnLFxuICAnbW9kdWxlJyxcbiAgJ25hbWUnLFxuICAnbmFtZXNwYWNlJyxcbiAgJ3BhcmFtJyxcbiAgJ3ByZXNlcnZlT3JkZXInLFxuICAncHJpdmF0ZScsXG4gICdwcm9wZXJ0eScsXG4gICdwcm90ZWN0ZWQnLFxuICAncmV0dXJuJyxcbiAgJ3NlZScsXG4gICdzdGF0aWMnLFxuICAndGhyb3dzJyxcbiAgJ3R5cGUnLFxuICAndHlwZWRlZidcbl07XG5cbnZhciBEb2NUYWdzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogJ0RvY1RhZ3MnLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNvbmZpZzogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIHRhZ3M6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICBjYWxsYmFja3M6IFJlYWN0LlByb3BUeXBlcy5hcnJheSxcbiAgICB3aXRoRXhhbXBsZXM6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIHdpdGhBZGRpdGlvbmFsUmVzb3VyY2VzOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRhZ3M6IFtdLFxuICAgICAgY2FsbGJhY2tzOiBbXSxcbiAgICAgIHdpdGhFeGFtcGxlczogdHJ1ZSxcbiAgICAgIHdpdGhBZGRpdGlvbmFsUmVzb3VyY2VzOiB0cnVlXG4gICAgfTtcbiAgfSxcblxuICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uKG5leHRQcm9wcykge1xuICAvLyAgIHJldHVybiB0aGlzLnByb3BzLnRhZ3MgIT09IG5leHRQcm9wcy50YWdzO1xuICAvLyB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICB2YXIgcGFyYW1UYWdzID0gd2hlcmUodGhpcy5wcm9wcy50YWdzLCB7IHR5cGU6ICdwYXJhbScgfSk7XG4gICAgdmFyIHJldHVyblRhZ3MgPSB3aGVyZSh0aGlzLnByb3BzLnRhZ3MsIHsgdHlwZTogJ3JldHVybicgfSk7XG4gICAgdmFyIHVuaGFuZGxlZFRhZ3MgPSB0aGlzLnByb3BzLnRhZ3MuZmlsdGVyKGZ1bmN0aW9uKHRhZykge1xuICAgICAgcmV0dXJuIEhBTkRMRURfVEFHUy5pbmRleE9mKHRhZy50eXBlKSA9PT0gLTE7XG4gICAgfSk7XG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJkb2MtZW50aXR5X190YWdzXCI+XG4gICAgICAgIDxUYWJ1bGFyVGFnR3JvdXBcbiAgICAgICAgICBhbHdheXNHcm91cFxuICAgICAgICAgIHRhZ05hbWU9XCJkaXZcIlxuICAgICAgICAgIHRhZ3M9e3BhcmFtVGFnc31cbiAgICAgICAgICByZW5kZXJlcj17UGFyYW1UYWd9XG4gICAgICAgICAgaGlkZUlmRW1wdHk9e2NvbmZpZy5oaWRlQmxhbmtQYXJhbWV0ZXJzfVxuICAgICAgICA+XG4gICAgICAgICAgUGFyYW1ldGVycyAoe3BhcmFtVGFncy5sZW5ndGh9KVxuICAgICAgICA8L1RhYnVsYXJUYWdHcm91cD5cblxuICAgICAgICA8VGFidWxhclRhZ0dyb3VwXG4gICAgICAgICAgYWx3YXlzR3JvdXBcbiAgICAgICAgICB0YWdOYW1lPVwiZGl2XCJcbiAgICAgICAgICB0YWdzPXtyZXR1cm5UYWdzfVxuICAgICAgICAgIHRhZ1R5cGU9XCJyZXR1cm5cIlxuICAgICAgICAgIHJlbmRlcmVyPXtSZXR1cm5UYWd9XG4gICAgICAgICAgaGlkZUlmRW1wdHk9e2NvbmZpZy5oaWRlQmxhbmtSZXR1cm5zfVxuICAgICAgICA+XG4gICAgICAgICAge3JldHVyblRhZ3MubGVuZ3RoID4gMSA/ICdSZXR1cm4gVmFsdWVzJyA6ICdSZXR1cm4gVmFsdWUnfVxuICAgICAgICA8L1RhYnVsYXJUYWdHcm91cD5cblxuICAgICAgICB7dGhpcy5wcm9wcy53aXRoRXhhbXBsZXMgJiYgKFxuICAgICAgICAgIDxUYWdHcm91cCBhbHdheXNHcm91cCB0YWdzPXt0aGlzLnByb3BzLnRhZ3N9IHRhZ1R5cGU9XCJleGFtcGxlXCIgcmVuZGVyZXI9e0V4YW1wbGVUYWd9IHRhZ05hbWU9XCJ1bFwiPlxuICAgICAgICAgICAgRXhhbXBsZXNcbiAgICAgICAgICA8L1RhZ0dyb3VwPlxuICAgICAgICApfVxuXG4gICAgICAgIDxUYWdHcm91cCBhbHdheXNHcm91cCB0YWdOYW1lPVwidWxcIiB0YWdzPXt0aGlzLnByb3BzLnRhZ3N9IHRhZ1R5cGU9XCJ0aHJvd3NcIiByZW5kZXJlcj17VGhyb3dzVGFnfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0eXBlLWF0dGVudGlvblwiPkV4Y2VwdGlvbnM8L3NwYW4+XG4gICAgICAgIDwvVGFnR3JvdXA+XG5cbiAgICAgICAgPFR5cGVEZWZUYWdHcm91cCBhbHdheXNHcm91cCB0YWdOYW1lPVwidWxcIiBkb2N1bWVudHM9e3RoaXMucHJvcHMuY2FsbGJhY2tzfSByZW5kZXJlcj17Q2FsbGJhY2tUYWd9PlxuICAgICAgICAgIENhbGxiYWNrIERlZmluaXRpb25zXG4gICAgICAgIDwvVHlwZURlZlRhZ0dyb3VwPlxuXG4gICAgICAgIHt0aGlzLnByb3BzLndpdGhBZGRpdGlvbmFsUmVzb3VyY2VzICYmIChcbiAgICAgICAgICA8VGFnR3JvdXAgYWx3YXlzR3JvdXAgdGFncz17dGhpcy5wcm9wcy50YWdzfSB0YWdUeXBlPVwic2VlXCIgcmVuZGVyZXI9e1NlZVRhZ30gdGFnTmFtZT1cInVsXCI+XG4gICAgICAgICAgICBTdWdnZXN0ZWQgUmVhZGluZ1xuICAgICAgICAgIDwvVGFnR3JvdXA+XG4gICAgICAgICl9XG5cbiAgICAgICAge3VuaGFuZGxlZFRhZ3MubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgdW5oYW5kbGVkVGFncy5tYXAodGhpcy5yZW5kZXJUYWdTdHJpbmcpXG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlclRhZ1N0cmluZyh0YWcpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e3RhZy5zdHJpbmd9IGNsYXNzTmFtZT1cInR5cGUtYXR0ZW50aW9uXCI+XG4gICAgICAgIDxwcmU+e1wiVW5rbm93biB0YWc6XFxuXCIgKyBKU09OLnN0cmluZ2lmeSh0YWcsIG51bGwsIDIpfTwvcHJlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRG9jVGFncztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL0RvY1RhZ3MuanMiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHsgd2hlcmUgfSA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xudmFyIENvbGxhcHNpYmxlID0gcmVxdWlyZSgnbWl4aW5zL0NvbGxhcHNpYmxlJyk7XG52YXIgY2xhc3NTZXQgPSByZXF1aXJlKCd1dGlscy9jbGFzc1NldCcpO1xuXG52YXIgVGFnR3JvdXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogWyBDb2xsYXBzaWJsZSBdLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHRhZ05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFnVHlwZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhbHdheXNHcm91cDogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgdGFnczogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgcmVuZGVyZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgIGFsd2F5c0dyb3VwOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBET01UYWcgPSB0aGlzLnByb3BzLnRhZ05hbWU7XG4gICAgdmFyIHRhZ3MgPSB0aGlzLnByb3BzLnRhZ1R5cGUgP1xuICAgICAgd2hlcmUodGhpcy5wcm9wcy50YWdzLCB7IHR5cGU6IHRoaXMucHJvcHMudGFnVHlwZSB9KSA6XG4gICAgICB0aGlzLnByb3BzLnRhZ3NcbiAgICA7XG4gICAgdmFyIFJlbmRlcmVyID0gdGhpcy5wcm9wcy5yZW5kZXJlcjtcbiAgICB2YXIgaXNDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG4gICAgdmFyIGNsYXNzTmFtZTtcblxuICAgIGlmICh0YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRhZ3MubGVuZ3RoID09PSAxICYmICF0aGlzLnByb3BzLmFsd2F5c0dyb3VwKSB7XG4gICAgICByZXR1cm4gPFJlbmRlcmVyIHdpdGhUaXRsZSB7Li4udGFnc1swXX0gLz47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2xhc3NOYW1lID0gY2xhc3NTZXQoe1xuICAgICAgICAndGFnLWdyb3VwJzogdHJ1ZSxcbiAgICAgICAgJ3RhZy1ncm91cC0tY29sbGFwc2VkJzogaXNDb2xsYXBzZWQsXG4gICAgICAgICdjb2xsYXBzaWJsZSc6IHRoaXMuaXNDb2xsYXBzaWJsZSgpLFxuICAgICAgICAnY29sbGFwc2libGUtLWNvbGxhcHNlZCc6IGlzQ29sbGFwc2VkLFxuICAgICAgICAndGFnLWdyb3VwLS1zaW5nbGUtY2hpbGQnOiB0YWdzLmxlbmd0aCA9PT0gMVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxET01UYWcgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9ICR7dGhpcy5wcm9wcy5jbGFzc05hbWV8fCcnfWB9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0YWctZ3JvdXBfX2hlYWRlciBjb2xsYXBzaWJsZS1oZWFkZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlZH0+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbGxhcHNlcigpfVxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHshaXNDb2xsYXBzZWQgJiYgdGFncy5tYXAoZnVuY3Rpb24odGFnLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gPFJlbmRlcmVyIGtleT17aX0gd2l0aFRpdGxlPXtmYWxzZX0gey4uLnRhZ30gLz47XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvRE9NVGFnPlxuICAgICAgKTtcbiAgICB9XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRhZ0dyb3VwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9UYWdHcm91cC5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcIm1peGlucy9Db2xsYXBzaWJsZVwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcIm1peGlucy9Db2xsYXBzaWJsZVxcXCJdXCJcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgQ29sbGFwc2libGUgPSByZXF1aXJlKCdtaXhpbnMvQ29sbGFwc2libGUnKTtcbnZhciBjbGFzc1NldCA9IHJlcXVpcmUoJ3V0aWxzL2NsYXNzU2V0Jyk7XG5cbnZhciBUeXBlRGVmVGFnR3JvdXAgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIG1peGluczogWyBDb2xsYXBzaWJsZSBdLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHRhZ05hbWU6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWx3YXlzR3JvdXA6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGRvY3VtZW50czogUmVhY3QuUHJvcFR5cGVzLmFycmF5LFxuXG4gICAgcmVuZGVyZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgIGFsd2F5c0dyb3VwOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBET01UYWcgPSB0aGlzLnByb3BzLnRhZ05hbWU7XG4gICAgdmFyIGRvY3VtZW50cyA9IHRoaXMucHJvcHMuZG9jdW1lbnRzO1xuICAgIHZhciBSZW5kZXJlciA9IHRoaXMucHJvcHMucmVuZGVyZXI7XG4gICAgdmFyIGlzQ29sbGFwc2VkID0gdGhpcy5pc0NvbGxhcHNlZCgpO1xuICAgIHZhciBjbGFzc05hbWU7XG5cbiAgICBpZiAoZG9jdW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKGRvY3VtZW50cy5sZW5ndGggPT09IDEgJiYgIXRoaXMucHJvcHMuYWx3YXlzR3JvdXApIHtcbiAgICAgIHJldHVybiA8UmVuZGVyZXIgd2l0aFRpdGxlIGRvY3VtZW50PXtkb2N1bWVudHNbMF19IC8+O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNsYXNzTmFtZSA9IGNsYXNzU2V0KHtcbiAgICAgICAgJ3RhZy1ncm91cCc6IHRydWUsXG4gICAgICAgICd0YWctZ3JvdXAtLWNvbGxhcHNlZCc6IGlzQ29sbGFwc2VkLFxuICAgICAgICAnY29sbGFwc2libGUnOiB0aGlzLmlzQ29sbGFwc2libGUoKSxcbiAgICAgICAgJ2NvbGxhcHNpYmxlLS1jb2xsYXBzZWQnOiBpc0NvbGxhcHNlZCxcbiAgICAgICAgJ3RhZy1ncm91cC0tc2luZ2xlLWNoaWxkJzogZG9jdW1lbnRzLmxlbmd0aCA9PT0gMVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxET01UYWcgY2xhc3NOYW1lPXtgJHtjbGFzc05hbWV9ICR7dGhpcy5wcm9wcy5jbGFzc05hbWV8fCcnfWB9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVuICYmIChcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0YWctZ3JvdXBfX2hlYWRlciBjb2xsYXBzaWJsZS1oZWFkZXJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlZH0+XG4gICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNvbGxhcHNlcigpfVxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgIDwvaDQ+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHshaXNDb2xsYXBzZWQgJiYgZG9jdW1lbnRzLm1hcChmdW5jdGlvbih0YWcsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiA8UmVuZGVyZXIga2V5PXtpfSB3aXRoVGl0bGU9e2ZhbHNlfSBkb2N1bWVudD17dGFnfSAvPjtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9ET01UYWc+XG4gICAgICApO1xuICAgIH1cbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gVHlwZURlZlRhZ0dyb3VwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9UeXBlRGVmVGFnR3JvdXAuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IEhpZ2hsaWdodGVkVGV4dCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGlnaGxpZ2h0ZWRUZXh0Jyk7XG5cbmNvbnN0IHsgc2hhcGUsIHN0cmluZyB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5jb25zdCBFeGFtcGxlVGFnID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBkaXNwbGF5TmFtZTogXCJFeGFtcGxlVGFnXCIsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgc3RyaW5nOiBzdHJpbmcsXG4gICAgdHlwZUluZm86IHNoYXBlKHtcbiAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgfSlcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBuYW1lLCBkZXNjcmlwdGlvbiwgfSA9IHRoaXMucHJvcHMudHlwZUluZm87XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGFtcGxlLXRhZ1wiPlxuICAgICAgICB7bmFtZSAmJiAoXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG5hbWUgfX0gLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEhpZ2hsaWdodGVkVGV4dCBjbGFzc05hbWU9XCJleGFtcGxlLXRhZ19fY29kZVwiPlxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgICAgPC9IaWdobGlnaHRlZFRleHQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeGFtcGxlVGFnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9FeGFtcGxlVGFnLmpzIiwidmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIEhpZ2hsaWdodGVkVGV4dCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGlnaGxpZ2h0ZWRUZXh0Jyk7XG52YXIgVHlwZU5hbWVzID0gcmVxdWlyZSgnLi9UeXBlTmFtZXMnKTtcbnZhciBEZWZhdWx0VmFsdWUgPSByZXF1aXJlKCcuL0RlZmF1bHRWYWx1ZScpO1xuXG52YXIgUGFyYW1UYWcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiBcIlBhcmFtVGFnXCIsXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgd2l0aFRpdGxlOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB0eXBlSW5mbzogUmVhY3QuUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIHR5cGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgICBuYW1lOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZGVmYXVsdFZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgICAgZGVzY3JpcHRpb246IFJlYWN0LlByb3BUeXBlcy5zdHJpbmdcbiAgICB9KVxuICB9LFxuXG4gIGdldERlZmF1bHRQcm9wczogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpdGhUaXRsZTogZmFsc2VcbiAgICB9O1xuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHR5cGVJbmZvIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJwYXJhbS10YWdcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJwYXJhbS10YWdfX2hlYWRlclwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLndpdGhUaXRsZSAmJiA8c3Ryb25nPlBhcmFtZXRlcnsnICd9PC9zdHJvbmc+fVxuXG4gICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwicGFyYW0tdGFnX19uYW1lXCI+e3R5cGVJbmZvLm5hbWV9PC9jb2RlPlxuXG4gICAgICAgICAge3R5cGVJbmZvLnR5cGUgJiYgKFxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwicGFyYW0tdGFnX190eXBlc1wiPlxuICAgICAgICAgICAgICB7JzogJ31cblxuICAgICAgICAgICAgICA8VHlwZU5hbWVzIHR5cGU9e3R5cGVJbmZvLnR5cGV9IC8+XG4gICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAge3R5cGVJbmZvLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgICA8SGlnaGxpZ2h0ZWRUZXh0IGNsYXNzTmFtZT1cInBhcmFtLXRhZ19fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIHt0eXBlSW5mby5kZXNjcmlwdGlvbi5yZXBsYWNlKC9bIF17NCx9L2csICcnKX1cbiAgICAgICAgICA8L0hpZ2hsaWdodGVkVGV4dD5cbiAgICAgICAgKX1cblxuICAgICAgICA8RGVmYXVsdFZhbHVlIGRlZmF1bHRWYWx1ZT17dHlwZUluZm8uZGVmYXVsdFZhbHVlfSAvPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJhbVRhZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvUGFyYW1UYWcuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBEZWZhdWx0VmFsdWUgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkZWZhdWx0VmFsdWUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWRlZmF1bHRWYWx1ZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxwIGNsYXNzTmFtZT1cInByb3BlcnR5LXRhZ19fZGVmYXVsdC12YWx1ZVwiPlxuICAgICAgICBEZWZhdWx0cyB0bzogPGNvZGU+e2RlZmF1bHRWYWx1ZX08L2NvZGU+XG4gICAgICA8L3A+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmYXVsdFZhbHVlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL0RlZmF1bHRWYWx1ZS5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgTWFya2Rvd25UZXh0ID0gcmVxdWlyZSgnY29tcG9uZW50cy9NYXJrZG93blRleHQnKTtcbmNvbnN0IHsgc2hhcGUsIHN0cmluZyB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5jb25zdCBTZWVUYWcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIHR5cGVJbmZvOiBzaGFwZSh7XG4gICAgICBuYW1lOiBzdHJpbmcuaXNSZXF1aXJlZFxuICAgIH0pXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwic2VlLXRhZ1wiPlxuICAgICAgICA8TWFya2Rvd25UZXh0IHRhZ05hbWU9XCJzcGFuXCI+e3RoaXMucHJvcHMudHlwZUluZm8ubmFtZX08L01hcmtkb3duVGV4dD5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VlVGFnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9TZWVUYWcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IE1FR0FET0NfUFVCTElDX01PRFVMRVNbXCJjb21wb25lbnRzL01hcmtkb3duVGV4dFwiXTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIk1FR0FET0NfUFVCTElDX01PRFVMRVNbXFxcImNvbXBvbmVudHMvTWFya2Rvd25UZXh0XFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG5jb25zdCBIaWdobGlnaHRlZFRleHQgPSByZXF1aXJlKCdjb21wb25lbnRzL0hpZ2hsaWdodGVkVGV4dCcpO1xuY29uc3QgVHlwZU5hbWVzID0gcmVxdWlyZSgnLi9UeXBlTmFtZXMnKTtcblxuY29uc3QgeyBzaGFwZSwgc3RyaW5nLCBvYmplY3QgfSA9IFJlYWN0LlByb3BUeXBlcztcblxuY29uc3QgVGhyb3dzVGFnID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICB0eXBlSW5mbzogc2hhcGUoe1xuICAgICAgdHlwZTogb2JqZWN0LFxuICAgICAgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICB9KSxcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9XCJ0aHJvd3MtdGFnXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZS1ibG9ja1wiPlxuICAgICAgICAgIDxUeXBlTmFtZXMgdHlwZT17dGhpcy5wcm9wcy50eXBlSW5mby50eXBlfSAvPlxuICAgICAgICA8L3A+XG5cbiAgICAgICAgeycgLSAnfVxuXG4gICAgICAgIDxIaWdobGlnaHRlZFRleHRcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbmxpbmUtYmxvY2tcIlxuICAgICAgICAgIGNoaWxkcmVuPXt0aGlzLnByb3BzLnR5cGVJbmZvLmRlc2NyaXB0aW9ufVxuICAgICAgICAvPlxuICAgICAgPC9saT5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBUaHJvd3NUYWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1Rocm93c1RhZy5qcyIsInZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBIaWdobGlnaHRlZFRleHQgPSByZXF1aXJlKCdjb21wb25lbnRzL0hpZ2hsaWdodGVkVGV4dCcpO1xudmFyIFR5cGVOYW1lcyA9IHJlcXVpcmUoJy4vVHlwZU5hbWVzJyk7XG5cbnZhciBSZXR1cm5UYWcgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiBcIlJldHVyblRhZ1wiLFxuXG4gIHByb3BUeXBlczoge1xuICAgIHdpdGhUaXRsZTogUmVhY3QuUHJvcFR5cGVzLmJvb2wsXG4gICAgdHlwZUluZm86IFJlYWN0LlByb3BUeXBlcy5zaGFwZSh7XG4gICAgICB0eXBlOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgICAgbmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGRlZmF1bHRWYWx1ZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nXG4gICAgfSlcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aXRoVGl0bGU6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB0eXBlSW5mbyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBoYXNOYW1lID0gQm9vbGVhbih0eXBlSW5mby5uYW1lKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPVwicmV0dXJuLXRhZ1wiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJldHVybi10YWdfX2hlYWRlclwiPlxuICAgICAgICAgIHt0aGlzLnByb3BzLndpdGhUaXRsZSAmJiAoXG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICBSZXR1cm5zXG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAge2hhc05hbWUgJiYgPGNvZGUgY2xhc3NOYW1lPVwicmV0dXJuLXRhZ19fbmFtZVwiPnt0eXBlSW5mby5uYW1lfTwvY29kZT59XG5cbiAgICAgICAgICB7dHlwZUluZm8udHlwZSAmJiAoXG4gICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJyZXR1cm4tdGFnX190eXBlc1wiPlxuICAgICAgICAgICAgICB7aGFzTmFtZSAmJiAnOiAnfVxuXG4gICAgICAgICAgICAgIDxUeXBlTmFtZXMgdHlwZT17dHlwZUluZm8udHlwZX0gLz5cblxuICAgICAgICAgICAgICB7dHlwZUluZm8uZGVmYXVsdFZhbHVlICYmIChcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwYXJhbS10YWdfX2RlZmF1bHQtdmFsdWVcIj5cbiAgICAgICAgICAgICAgICAgIHsnICgnfWRlZmF1bHRzIHRvOiA8Y29kZT57dHlwZUluZm8uZGVmYXVsdFZhbHVlfTwvY29kZT4pXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIHt0eXBlSW5mby5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgPEhpZ2hsaWdodGVkVGV4dCBjbGFzc05hbWU9XCJyZXR1cm4tdGFnX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAge3R5cGVJbmZvLmRlc2NyaXB0aW9uLnJlcGxhY2UoL1sgXXs1LDh9L2csICcnKX1cbiAgICAgICAgICA8L0hpZ2hsaWdodGVkVGV4dD5cbiAgICAgICAgKX1cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUmV0dXJuVGFnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9SZXR1cm5UYWcuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IERvYyA9IHJlcXVpcmUoJy4uL0RvYycpO1xuXG5jb25zdCB7IHNoYXBlLCBzdHJpbmcsIG9iamVjdCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5jb25zdCBDYWxsYmFja1RhZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgc3RyaW5nOiBzdHJpbmcsXG4gICAgdHlwZUluZm86IHNoYXBlKHtcbiAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgfSksXG4gICAgZG9jdW1lbnQ6IG9iamVjdC5pc1JlcXVpcmVkLFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYWxsYmFjay10YWdcIj5cbiAgICAgICAgPERvYyBkb2M9e3RoaXMucHJvcHMuZG9jdW1lbnR9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYWxsYmFja1RhZztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS9jb21wb25lbnRzL1RhZ3MvQ2FsbGJhY2tUYWcuanMiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIHsgd2hlcmUgfSA9IHJlcXVpcmUoJ2xvZGFzaCcpO1xudmFyIENvbGxhcHNpYmxlID0gcmVxdWlyZSgnbWl4aW5zL0NvbGxhcHNpYmxlJyk7XG52YXIgY2xhc3NTZXQgPSByZXF1aXJlKCd1dGlscy9jbGFzc1NldCcpO1xudmFyIFR5cGVOYW1lcyA9IHJlcXVpcmUoJy4vVGFncy9UeXBlTmFtZXMnKTtcbnZhciBEZWZhdWx0VmFsdWUgPSByZXF1aXJlKCcuL1RhZ3MvRGVmYXVsdFZhbHVlJyk7XG52YXIgSGlnaGxpZ2h0ZWRUZXh0ID0gcmVxdWlyZSgnY29tcG9uZW50cy9IaWdobGlnaHRlZFRleHQnKTtcblxudmFyIFRhYnVsYXJUYWdHcm91cCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbIENvbGxhcHNpYmxlIF0sXG5cbiAgcHJvcFR5cGVzOiB7XG4gICAgdGFnTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0YWdUeXBlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFsd2F5c0dyb3VwOiBSZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICB0YWdzOiBSZWFjdC5Qcm9wVHlwZXMuYXJyYXksXG4gICAgaGlkZUlmRW1wdHk6IFJlYWN0LlByb3BUeXBlcy5ib29sLFxuXG4gICAgcmVuZGVyZXI6IFJlYWN0LlByb3BUeXBlcy5mdW5jLFxuICAgIGNsYXNzTmFtZTogUmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjaGlsZHJlbjogUmVhY3QuUHJvcFR5cGVzLmFueSxcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICB0YWdOYW1lOiAnZGl2JyxcbiAgICAgIGFsd2F5c0dyb3VwOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciBET01UYWcgPSB0aGlzLnByb3BzLnRhZ05hbWU7XG4gICAgdmFyIHRhZ3MgPSB0aGlzLnByb3BzLnRhZ1R5cGUgP1xuICAgICAgd2hlcmUodGhpcy5wcm9wcy50YWdzLCB7IHR5cGU6IHRoaXMucHJvcHMudGFnVHlwZSB9KSA6XG4gICAgICB0aGlzLnByb3BzLnRhZ3NcbiAgICA7XG4gICAgdmFyIFJlbmRlcmVyID0gdGhpcy5wcm9wcy5yZW5kZXJlcjtcbiAgICB2YXIgaXNDb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG4gICAgdmFyIGNsYXNzTmFtZTtcblxuICAgIGlmICh0YWdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucHJvcHMuaGlkZUlmRW1wdHkgJiYgdGFncy5ldmVyeSh0YWdJc0JsYW5rKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRhZ3MubGVuZ3RoID09PSAxICYmICF0aGlzLnByb3BzLmFsd2F5c0dyb3VwKSB7XG4gICAgICByZXR1cm4gPFJlbmRlcmVyIHdpdGhUaXRsZSB7Li4udGFnc1swXX0gLz47XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY2xhc3NOYW1lID0gY2xhc3NTZXQodGhpcy5wcm9wcy5jbGFzc05hbWUsIHtcbiAgICAgICAgJ3RhZy1ncm91cCc6IHRydWUsXG4gICAgICAgICd0YWctZ3JvdXAtLXRhYnVsYXInOiB0cnVlLFxuICAgICAgICAndGFnLWdyb3VwLS1jb2xsYXBzZWQnOiBpc0NvbGxhcHNlZCxcbiAgICAgICAgJ2NvbGxhcHNpYmxlJzogdGhpcy5pc0NvbGxhcHNpYmxlKCksXG4gICAgICAgICdjb2xsYXBzaWJsZS0tY29sbGFwc2VkJzogaXNDb2xsYXBzZWQsXG4gICAgICAgICd0YWctZ3JvdXAtLXNpbmdsZS1jaGlsZCc6IHRhZ3MubGVuZ3RoID09PSAxXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPERPTVRhZyBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW4gJiYgKFxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRhZy1ncm91cF9faGVhZGVyIGNvbGxhcHNpYmxlLWhlYWRlclwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQ29sbGFwc2VkfT5cbiAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ29sbGFwc2VyKCl9XG4gICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9oND5cbiAgICAgICAgICApfVxuXG4gICAgICAgICAgeyFpc0NvbGxhcHNlZCAmJiAoXG4gICAgICAgICAgICA8dGFibGU+XG4gICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICB7dGFncy5tYXAodGhpcy5yZW5kZXJUYWcpfVxuICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICApfVxuICAgICAgICA8L0RPTVRhZz5cbiAgICAgICk7XG4gICAgfVxuICB9LFxuXG4gIHJlbmRlclRhZyh0YWcsIGkpIHtcbiAgICBjb25zdCB7IHR5cGVJbmZvIH0gPSB0YWc7XG4gICAgY29uc3QgaGFzTmFtZSA9IEJvb2xlYW4odHlwZUluZm8ubmFtZSAmJiB0eXBlSW5mby5uYW1lLmxlbmd0aCA+IDApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDx0ciBrZXk9e2l9IGNsYXNzTmFtZT1cInBhcmFtLXRhZ1wiPlxuICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGFnLWdyb3VwX19wcmltYXJ5LWNvbHVtblwiPlxuICAgICAgICAgIHtoYXNOYW1lICYmIChcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwicGFyYW0tdGFnX19oZWFkZXJcIj5cbiAgICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwicGFyYW0tdGFnX19uYW1lXCI+e3R5cGVJbmZvLm5hbWV9PC9jb2RlPlxuICAgICAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC90ZD5cblxuICAgICAgICA8dGQ+XG4gICAgICAgICAge3R5cGVJbmZvLnR5cGUgJiYgKFxuICAgICAgICAgICAgPGNvZGUgY2xhc3NOYW1lPVwicGFyYW0tdGFnX190eXBlc1wiPlxuICAgICAgICAgICAgICA8VHlwZU5hbWVzIHR5cGU9e3R5cGVJbmZvLnR5cGV9IC8+XG4gICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHt0eXBlSW5mby5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICA8SGlnaGxpZ2h0ZWRUZXh0IGNsYXNzTmFtZT1cInBhcmFtLXRhZ19fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAge3R5cGVJbmZvLmRlc2NyaXB0aW9uLnJlcGxhY2UoL1sgXXs0LH0vZywgJycpfVxuICAgICAgICAgICAgPC9IaWdobGlnaHRlZFRleHQ+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxEZWZhdWx0VmFsdWUgZGVmYXVsdFZhbHVlPXt0eXBlSW5mby5kZWZhdWx0VmFsdWV9IC8+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICk7XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiB0YWdJc0JsYW5rKHsgc3RyaW5nIH0pIHtcbiAgcmV0dXJuICFzdHJpbmcgfHwgIXN0cmluZy5sZW5ndGggPT09IDBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUYWJ1bGFyVGFnR3JvdXA7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWJ1bGFyVGFnR3JvdXAuanMiLCJ2YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgRGVwcmVjYXRlZFRhZyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcHJvcFR5cGVzOiB7XG4gICAgc3RyaW5nOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWRcbiAgfSxcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT1cImJsb2NrcXVvdGUtLXdhcm5pbmdcIj5cbiAgICAgICAgPHA+PHN0cm9uZz5EZXByZWNhdGVkPC9zdHJvbmc+PC9wPlxuXG4gICAgICAgIHt0aGlzLnByb3BzLnN0cmluZ31cbiAgICAgIDwvYmxvY2txdW90ZT5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZXByZWNhdGVkVGFnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvVGFncy9EZXByZWNhdGVkVGFnLmpzIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgUHJvcGVydHlUYWcgPSByZXF1aXJlKCcuL1RhZ3MvUHJvcGVydHlUYWcnKTtcbmNvbnN0IHsgYXNzaWduIH0gPSByZXF1aXJlKCdsb2Rhc2gnKTtcbmNvbnN0IHsgUHJvcFR5cGVzLCB9ID0gUmVhY3Q7XG5cbmNvbnN0IE9iamVjdFN5bm9wc2lzID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuXG4gIHByb3BUeXBlczoge1xuICAgIGRvYzogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBhbmNob3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgYW5jaG9yLCBkb2MgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGFncyA9IHRoaXMucHJvcHMuZG9jLnRhZ3MuZmlsdGVyKHRhZyA9PiB0YWcudHlwZSA9PT0gJ3Byb3BlcnR5Jyk7XG5cbiAgICBjb25zdCB0cmVlID0gdGFnc1xuICAgICAgLnJlZHVjZSgobWFwLCB0YWcpID0+IHtcbiAgICAgICAgY29uc3QgZnJhZ21lbnRzID0gdGFnLnR5cGVJbmZvLm5hbWUuc3BsaXQoJy4nKTtcbiAgICAgICAgY29uc3QgcGFyZW50S2V5ID0gZnJhZ21lbnRzLnNsaWNlKDAsIC0xKS5qb2luKCcuJyk7XG5cbiAgICAgICAgaWYgKCFtYXBbcGFyZW50S2V5XSkge1xuICAgICAgICAgIG1hcFtwYXJlbnRLZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBtYXBbcGFyZW50S2V5XS5wdXNoKHRhZylcblxuICAgICAgICByZXR1cm4gbWFwO1xuICAgICAgfSwge30pXG4gICAgO1xuXG4gICAgY29uc3QgcmVuZGVyID0ga2V5ID0+IHtcbiAgICAgIGNvbnN0IGNoaWxkVGFncyA9IHRyZWVba2V5XTtcblxuICAgICAgaWYgKCFjaGlsZFRhZ3MgfHwgIWNoaWxkVGFncy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIGNoaWxkVGFncy5tYXAoKHRhZywgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHJlbmRlcih0YWcudHlwZUluZm8ubmFtZSlcbiAgICAgICAgICBjb25zdCBpc1Jvb3QgPSB0YWcudHlwZUluZm8ubmFtZSA9PT0gZG9jLm5hbWU7XG5cbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2Ake2tleX1fXyR7aW5kZXh9YH0+XG4gICAgICAgICAgICAgIDxQcm9wZXJ0eVRhZ1xuICAgICAgICAgICAgICAgIGFuY2hvcj17aXNSb290ICYmIGFuY2hvciB8fCBudWxsfVxuICAgICAgICAgICAgICAgIGNvbGxhcHNpYmxlPXtpc1Jvb3R9XG4gICAgICAgICAgICAgICAgdHlwZUluZm89e2Fzc2lnbih7fSwgdGFnLnR5cGVJbmZvLCB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiB0YWcudHlwZUluZm8ubmFtZS5zcGxpdCgnLicpLnNsaWNlKC0xKS5qb2luKCcuJylcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgPC9Qcm9wZXJ0eVRhZz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqcy1vYmplY3Qtc3lub3BzaXNcIj5cbiAgICAgICAge3JlbmRlcignJyl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3RTeW5vcHNpcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvT2JqZWN0U3lub3BzaXMuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IEhpZ2hsaWdodGVkVGV4dCA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvSGlnaGxpZ2h0ZWRUZXh0Jyk7XG5jb25zdCBIZWFkaW5nQW5jaG9yID0gcmVxdWlyZSgnY29tcG9uZW50cy9IZWFkaW5nQW5jaG9yJyk7XG5jb25zdCBUeXBlTmFtZXMgPSByZXF1aXJlKCcuL1R5cGVOYW1lcycpO1xuY29uc3QgRGVmYXVsdFZhbHVlID0gcmVxdWlyZSgnLi9EZWZhdWx0VmFsdWUnKTtcbmNvbnN0IGRlc2NyaWJlTm9kZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2Rlc2NyaWJlTm9kZScpO1xuY29uc3QgRG9jQ2xhc3NpZmllciA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL0RvY0NsYXNzaWZpZXInKTtcbmNvbnN0IENvbGxhcHNpYmxlID0gcmVxdWlyZSgnbWl4aW5zL0NvbGxhcHNpYmxlJyk7XG5jb25zdCBjbGFzc1NldCA9IHJlcXVpcmUoJ2NsYXNzbmFtZXMnKTtcbmNvbnN0IHsgc2hhcGUsIHN0cmluZywgb2JqZWN0LCBub2RlIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmNvbnN0IFByb3BlcnR5VGFnID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFsgQ29sbGFwc2libGUgXSxcblxuICBkaXNwbGF5TmFtZTogXCJQcm9wZXJ0eVRhZ1wiLFxuXG4gIHByb3BUeXBlczoge1xuICAgIGNoaWxkcmVuOiBub2RlLFxuICAgIGFuY2hvcjogc3RyaW5nLFxuICAgIHR5cGVJbmZvOiBzaGFwZSh7XG4gICAgICB0eXBlOiBvYmplY3QsXG4gICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICBkZWZhdWx0VmFsdWU6IHN0cmluZyxcbiAgICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgICB9KSxcblxuICAgIGRvYzogb2JqZWN0LFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGFuY2hvciwgdHlwZUluZm8sIGRvYyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHR5cGVJbmZvLmRlc2NyaXB0aW9uIHx8IGRvYyAmJiBkb2MuZGVzY3JpcHRpb247XG4gICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdHlwZUluZm8uZGVmYXVsdFZhbHVlIHx8IGRvYyAmJiBkZXNjcmliZU5vZGUoZG9jLm5vZGVJbmZvKTtcbiAgICBjb25zdCBjb2xsYXBzZWQgPSB0aGlzLmlzQ29sbGFwc2VkKCk7XG4gICAgY29uc3QgY29sbGFwc2libGUgPSB0aGlzLmlzQ29sbGFwc2libGUoKSAmJiAoZGVzY3JpcHRpb24gJiYgZGVzY3JpcHRpb24ubGVuZ3RoKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc1NldChcInByb3BlcnR5LXRhZ1wiLCB7XG4gICAgICAgICdjb2xsYXBzaWJsZSc6IGNvbGxhcHNpYmxlLFxuICAgICAgICAnY29sbGFwc2libGUtLWNvbGxhcHNlZCc6IHRoaXMuaXNDb2xsYXBzZWQoKSxcbiAgICAgIH0pfT5cbiAgICAgICAgPGhlYWRlclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NTZXQoXCJwcm9wZXJ0eS10YWdfX2hlYWRlciBhbmNob3JhYmxlLWhlYWRpbmdcIiwge1xuICAgICAgICAgICAgXCJjb2xsYXBzaWJsZS1oZWFkZXJcIjogY29sbGFwc2libGVcbiAgICAgICAgICB9KX1cbiAgICAgICAgICBvbkNsaWNrPXt0aGlzLnRvZ2dsZUNvbGxhcHNlZH1cbiAgICAgICAgPlxuICAgICAgICAgIHtjb2xsYXBzaWJsZSAmJiB0aGlzLnJlbmRlckNvbGxhcHNlcigpfVxuICAgICAgICAgIHthbmNob3IgJiYgPEhlYWRpbmdBbmNob3IuQW5jaG9yIGhyZWY9e3RoaXMucHJvcHMuYW5jaG9yfSAvPn1cbiAgICAgICAgICB7YW5jaG9yICYmIDxIZWFkaW5nQW5jaG9yLkxpbmsgaHJlZj17dGhpcy5wcm9wcy5hbmNob3J9IC8+fVxuXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHJvcGVydHktdGFnX19uYW1lXCI+XG4gICAgICAgICAgICB7dHlwZUluZm8ubmFtZSB8fCBkb2MgJiYgZG9jLm5hbWV9XG5cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICB7JzogJ31cblxuICAgICAgICAgIDxjb2RlPjxUeXBlTmFtZXMgdHlwZT17dHlwZUluZm8udHlwZX0gLz48L2NvZGU+XG5cbiAgICAgICAgICB7ZG9jICYmIERvY0NsYXNzaWZpZXIuaXNQcml2YXRlKGRvYykgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZG9jLWVudGl0eV9fbW9kaWZpZXIgZG9jLWVudGl0eV9fcHJpdmF0ZVwiPlBSSVZBVEU8L3NwYW4+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgeyFjb2xsYXBzZWQgJiYgZGVzY3JpcHRpb24gJiYgKFxuICAgICAgICAgIDxIaWdobGlnaHRlZFRleHQgY2xhc3NOYW1lPVwicHJvcGVydHktdGFnX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAge2Rlc2NyaXB0aW9ufVxuICAgICAgICAgIDwvSGlnaGxpZ2h0ZWRUZXh0PlxuICAgICAgICApfVxuXG4gICAgICAgIHshY29sbGFwc2VkICYmIGRlZmF1bHRWYWx1ZSAmJiAoXG4gICAgICAgICAgPERlZmF1bHRWYWx1ZSBkZWZhdWx0VmFsdWU9e2RlZmF1bHRWYWx1ZX0gLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7IWNvbGxhcHNlZCAmJiB0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvcGVydHlUYWc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFja2FnZXMvbWVnYWRvYy1wbHVnaW4tanMvdWkvY29tcG9uZW50cy9UYWdzL1Byb3BlcnR5VGFnLmpzIiwiY29uc3QgSyA9IHJlcXVpcmUoJy4uL2NvbnN0YW50cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5vZGVJbmZvKSB7XG4gIHJldHVybiBkZXNjcmliZU5vZGUobm9kZUluZm8sIHRydWUpO1xufTtcblxuZnVuY3Rpb24gZGVzY3JpYmVOb2RlKG5vZGVJbmZvLCBzdHJpbmdpZnkpIHtcbiAgY29uc3QgcHJpbnQgPSBzdHJpbmdpZnkgPyBwcmV0dHlKU09OIDogSWRlbnRpdHk7XG5cbiAgaWYgKCFub2RlSW5mby50eXBlKSB7XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmIChub2RlSW5mby50eXBlID09PSBLLlRZUEVfTElURVJBTCAmJiBub2RlSW5mby5yZWdleHApIHtcbiAgICByZXR1cm4gbm9kZUluZm8uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyBub2RlSW5mby52YWx1ZSA6IG51bGw7XG4gIH1cbiAgZWxzZSBpZiAobm9kZUluZm8udHlwZSA9PT0gSy5UWVBFX0xJVEVSQUwpIHtcbiAgICByZXR1cm4gcHJpbnQobm9kZUluZm8uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgPyBub2RlSW5mby52YWx1ZSA6IG51bGwpO1xuICB9XG4gIGVsc2UgaWYgKG5vZGVJbmZvLnR5cGUgPT09IEsuVFlQRV9BUlJBWSkge1xuICAgIHJldHVybiBwcmludChub2RlSW5mby5lbGVtZW50cy5tYXAoeCA9PiBkZXNjcmliZU5vZGUoeCwgZmFsc2UpKSk7XG4gIH1cbiAgZWxzZSBpZiAobm9kZUluZm8udHlwZSA9PT0gSy5UWVBFX09CSkVDVCkge1xuICAgIHJldHVybiBwcmludChub2RlSW5mby5wcm9wZXJ0aWVzLnJlZHVjZShmdW5jdGlvbihtYXAsIHgpIHtcbiAgICAgIGlmICh4KSB7XG4gICAgICAgIG1hcFt4LmtleV0gPSBkZXNjcmliZU5vZGUoeC52YWx1ZSwgZmFsc2UpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gbWFwO1xuICAgIH0sIHt9KSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gcHJldHR5SlNPTih4KSB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh4LCBudWxsLCAyKTtcbn1cblxuZnVuY3Rpb24gSWRlbnRpdHkoeCkge1xuICByZXR1cm4geDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLXBsdWdpbi1qcy91aS91dGlscy9kZXNjcmliZU5vZGUuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCB7IHN0cmluZywgYW55IH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbmNvbnN0IERvY0dyb3VwID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBwcm9wVHlwZXM6IHtcbiAgICB0YWdOYW1lOiBzdHJpbmcsXG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBjbGFzc05hbWU6IHN0cmluZyxcbiAgICBjaGlsZHJlbjogYW55XG4gIH0sXG5cbiAgZ2V0RGVmYXVsdFByb3BzOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGFnTmFtZTogJ2RpdicsXG4gICAgfTtcbiAgfSxcblxuICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uKG5leHRQcm9wcykge1xuICAvLyAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuICE9PSBuZXh0UHJvcHMuY2hpbGRyZW47XG4gIC8vIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IERPTVRhZyA9IHRoaXMucHJvcHMudGFnTmFtZTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImRvYy1ncm91cFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZG9jLWdyb3VwX19oZWFkZXJcIiBjaGlsZHJlbj17dGhpcy5wcm9wcy5sYWJlbH0gLz5cblxuICAgICAgICA8RE9NVGFnIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5jbGFzc05hbWV9PlxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICA8L0RPTVRhZz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERvY0dyb3VwO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvRG9jR3JvdXAuanMiLCJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5jb25zdCBDbGFzc0Jyb3dzZXIgPSByZXF1aXJlKCcuLi9jb21wb25lbnRzL0NsYXNzQnJvd3NlcicpO1xuY29uc3QgeyBvYmplY3QsIHNoYXBlLCBib29sLCB9ID0gUmVhY3QuUHJvcFR5cGVzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgZGlzcGxheU5hbWU6ICdKUzo6QnJvd3Nlck91dGxldCcsXG4gIHByb3BUeXBlczoge1xuICAgIGRvY3VtZW50Tm9kZTogb2JqZWN0LFxuICAgIG5hbWVzcGFjZU5vZGU6IG9iamVjdCxcbiAgICBkb2N1bWVudEVudGl0eU5vZGU6IG9iamVjdCxcbiAgICAkb3V0bGV0T3B0aW9uczogc2hhcGUoe1xuICAgICAgZmxhdDogYm9vbCxcbiAgICAgIGxpbmtOYW1lc3BhY2VzOiBib29sLFxuICAgIH0pXG4gIH0sXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Q2xhc3NCcm93c2VyXG4gICAgICAgIG5hbWVzcGFjZU5vZGU9e3RoaXMucHJvcHMubmFtZXNwYWNlTm9kZX1cbiAgICAgICAgZG9jdW1lbnROb2RlPXt0aGlzLnByb3BzLmRvY3VtZW50Tm9kZX1cbiAgICAgICAgZG9jdW1lbnRFbnRpdHlOb2RlPXt0aGlzLnByb3BzLmRvY3VtZW50RW50aXR5Tm9kZX1cbiAgICAgICAgd2l0aENvbnRyb2xzPXt0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGUuZW5hYmxlU2lkZWJhckNvbnRyb2xzICE9PSBmYWxzZX1cbiAgICAgICAgZmxhdD17dGhpcy5wcm9wcy4kb3V0bGV0T3B0aW9ucy5mbGF0fVxuICAgICAgICBsaW5rVG9OYW1lc3BhY2VzPXt0aGlzLnByb3BzLiRvdXRsZXRPcHRpb25zLmxpbmtOYW1lc3BhY2VzfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvQnJvd3Nlck91dGxldC5qcyIsImNvbnN0IFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xuY29uc3QgY29uc29sZSA9IHJlcXVpcmUoXCJjb25zb2xlXCIpO1xuY29uc3QgTGluayA9IHJlcXVpcmUoJ2NvbXBvbmVudHMvTGluaycpO1xuY29uc3QgY2xhc3NTZXQgPSByZXF1aXJlKCd1dGlscy9jbGFzc1NldCcpO1xuY29uc3QgQ2hlY2tib3ggPSByZXF1aXJlKCdjb21wb25lbnRzL0NoZWNrYm94Jyk7XG5jb25zdCBJY29uID0gcmVxdWlyZSgnY29tcG9uZW50cy9JY29uJyk7XG5jb25zdCBIb3RJdGVtSW5kaWNhdG9yID0gcmVxdWlyZSgnY29tcG9uZW50cy9Ib3RJdGVtSW5kaWNhdG9yJyk7XG5jb25zdCB7IHNvcnRCeSB9ID0gcmVxdWlyZSgnbG9kYXNoJyk7XG5jb25zdCBvcmRlckF3YXJlU29ydCA9IHJlcXVpcmUoJy4uL3V0aWxzL29yZGVyQXdhcmVTb3J0Jyk7XG5jb25zdCBEb2NDbGFzc2lmaWVyID0gcmVxdWlyZSgnLi4vdXRpbHMvRG9jQ2xhc3NpZmllcicpO1xuY29uc3QgeyBvYmplY3QsIGJvb2wsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5cbnZhciBDbGFzc0Jyb3dzZXIgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHByb3BUeXBlczoge1xuICAgIHdpdGhDb250cm9sczogYm9vbCxcbiAgICBkb2N1bWVudE5vZGU6IG9iamVjdCxcbiAgICBkb2N1bWVudEVudGl0eU5vZGU6IG9iamVjdCxcbiAgICBuYW1lc3BhY2VOb2RlOiBvYmplY3QsXG4gICAgZmxhdDogYm9vbCxcbiAgICBsaW5rTmFtZXNwYWNlczogYm9vbCxcbiAgICBzaG93VHlwZURlZnM6IGJvb2wsXG4gIH0sXG5cbiAgZ2V0SW5pdGlhbFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzaG93UHJpdmF0ZU1vZHVsZXM6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBnZXREZWZhdWx0UHJvcHMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNob3dUeXBlRGVmczogZmFsc2UsXG4gICAgICB3aXRoQ29udHJvbHM6IHRydWUsXG4gICAgfTtcbiAgfSxcblxuICAvLyBzaG91bGRDb21wb25lbnRVcGRhdGU6IGZ1bmN0aW9uKG5leHRQcm9wcykge1xuICAvLyAgIHJldHVybiAoXG4gIC8vICAgICBuZXh0UHJvcHMuZG9jdW1lbnRFbnRpdHlOb2RlICE9PSB0aGlzLnByb3BzLmRvY3VtZW50RW50aXR5Tm9kZSB8fFxuICAvLyAgICAgbmV4dFByb3BzLmRvY3VtZW50Tm9kZSAhPT0gdGhpcy5wcm9wcy5kb2N1bWVudE5vZGUgfHxcbiAgLy8gICAgIG5leHRQcm9wcy5uYW1lc3BhY2VOb2RlICE9PSB0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGVcbiAgLy8gICApO1xuICAvLyB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCByb290RG9jdW1lbnRzID0gdGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlLmRvY3VtZW50cztcbiAgICBjb25zdCBnZW5lcmljTmFtZXNwYWNlID0ge1xuICAgICAgaWQ6ICdfX2dlbmVyYWxfXycsXG4gICAgICB0aXRsZTogJ1tHZW5lcmFsXScsXG4gICAgICBkb2N1bWVudHM6IFtdLFxuICAgICAgbWV0YToge31cbiAgICB9O1xuXG4gICAgY29uc3QgaGFzUHJpdmF0ZU1vZHVsZXMgPSByb290RG9jdW1lbnRzLnNvbWUoeCA9PiB7XG4gICAgICByZXR1cm4geC5kb2N1bWVudHMuc29tZSh5ID0+IERvY0NsYXNzaWZpZXIuaXNQcml2YXRlKHkucHJvcGVydGllcykpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbmFtZXNwYWNlcyA9IHJvb3REb2N1bWVudHMucmVkdWNlKGZ1bmN0aW9uKGxpc3QsIG5vZGUpIHtcbiAgICAgIGlmIChub2RlLmRvY3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgbGlzdC5wdXNoKG5vZGUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxpc3RbMF0uZG9jdW1lbnRzLnB1c2gobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH0sIFsgZ2VuZXJpY05hbWVzcGFjZSBdKS5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIGlmIChhLmlkID09PSAnX19nZW5lcmFsX18nKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBhLmlkID4gYi5pZCA/IDEgOiAtMTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IHNob3VsZERpc3BsYXlOYW1lID0gbmFtZXNwYWNlcy5sZW5ndGggPiAxO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwibWVnYWRvYy1kb2N1bWVudC1icm93c2VyIGNsYXNzLWJyb3dzZXJfX2xpc3RpbmdcIj5cbiAgICAgICAge25hbWVzcGFjZXMubWFwKHRoaXMucmVuZGVyTmFtZXNwYWNlLmJpbmQobnVsbCwgc2hvdWxkRGlzcGxheU5hbWUpKX1cblxuICAgICAgICB7dGhpcy5wcm9wcy53aXRoQ29udHJvbHMgJiYgaGFzUHJpdmF0ZU1vZHVsZXMgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xhc3MtYnJvd3Nlcl9fY29udHJvbHNcIj5cbiAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnN0YXRlLnNob3dQcml2YXRlTW9kdWxlc31cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudG9nZ2xlUHJpdmF0ZVZpc2liaWxpdHl9XG4gICAgICAgICAgICAgIGNoaWxkcmVuPVwiU2hvdyBwcml2YXRlXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L25hdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck5hbWVzcGFjZShzaG91bGREaXNwbGF5TmFtZSwgbnMpIHtcbiAgICBsZXQgZG9jdW1lbnRzID0gbnMuZG9jdW1lbnRzO1xuXG4gICAgY29uc3QgeyBjb25maWcgfSA9IHRoaXMucHJvcHMubmFtZXNwYWNlTm9kZTtcbiAgICBjb25zdCBzaG91bGRIaWRlUHJpdmF0ZU1vZHVsZXMgPSAoXG4gICAgICBjb25maWcuaGlkZVByaXZhdGVTeW1ib2xzIHx8XG4gICAgICAhdGhpcy5zdGF0ZS5zaG93UHJpdmF0ZU1vZHVsZXNcbiAgICApO1xuXG4gICAgY29uc3Qgc2hvd1R5cGVEZWZzID0gKFxuICAgICAgdGhpcy5wcm9wcy5zaG93VHlwZURlZnMgfHxcbiAgICAgIGNvbmZpZy5zaG93VHlwZURlZnNJbkJyb3dzZXJcbiAgICApXG5cbiAgICBpZiAoc2hvdWxkSGlkZVByaXZhdGVNb2R1bGVzKSB7XG4gICAgICBkb2N1bWVudHMgPSBucy5kb2N1bWVudHMuZmlsdGVyKHggPT4ge1xuICAgICAgICByZXR1cm4gIURvY0NsYXNzaWZpZXIuaXNQcml2YXRlKHgucHJvcGVydGllcyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXNob3dUeXBlRGVmcykge1xuICAgICAgZG9jdW1lbnRzID0gZG9jdW1lbnRzLmZpbHRlcih4ID0+ICFEb2NDbGFzc2lmaWVyLmlzVHlwZURlZih4LnByb3BlcnRpZXMpKVxuICAgIH1cblxuICAgIGlmIChkb2N1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNTZWxmRG9jdW1lbnQgPSBucy5pZCAhPT0gJ19fZ2VuZXJhbF9fJyAmJiAoXG4gICAgICBucy5wcm9wZXJ0aWVzIHx8XG4gICAgICAoXG4gICAgICAgIGNvbmZpZy5saW5rVG9OYW1lc3BhY2VzSW5Ccm93c2VyIHx8XG4gICAgICAgIHRoaXMucHJvcHMubGlua05hbWVzcGFjZXNcbiAgICAgIClcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYga2V5PXtucy5pZH0gY2xhc3NOYW1lPVwiY2xhc3MtYnJvd3Nlcl9fY2F0ZWdvcnlcIj5cbiAgICAgICAge3Nob3VsZERpc3BsYXlOYW1lICYmIChcbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY2xhc3MtYnJvd3Nlcl9fY2F0ZWdvcnktbmFtZVwiPlxuICAgICAgICAgICAge2hhc1NlbGZEb2N1bWVudCA/IChcbiAgICAgICAgICAgICAgPExpbmsgdG89e25zfSBjaGlsZHJlbj17bnMudGl0bGV9IC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICBucy50aXRsZVxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2gzPlxuICAgICAgICApfVxuXG4gICAgICAgIHtoYXNTZWxmRG9jdW1lbnQgJiYgdGhpcy5wcm9wcy5kb2N1bWVudE5vZGUgPT09IG5zICYmIChcbiAgICAgICAgICB0aGlzLnJlbmRlck1vZHVsZUVudGl0aWVzKG5zLmVudGl0aWVzKVxuICAgICAgICApfVxuXG4gICAgICAgIHtzb3J0QnkoZG9jdW1lbnRzLCAnaWQnKS5tYXAodGhpcy5yZW5kZXJNb2R1bGUpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSxcblxuICByZW5kZXJNb2R1bGUoZG9jTm9kZSkge1xuICAgIGNvbnN0IGRvYyA9IGRvY05vZGUucHJvcGVydGllcztcbiAgICBjb25zdCB7IGlkIH0gPSBkb2M7XG4gICAgY29uc3QgaXNQcml2YXRlID0gRG9jQ2xhc3NpZmllci5pc1ByaXZhdGUoZG9jKTtcbiAgICBjb25zdCBpc0FjdGl2ZSA9IHRoaXMucHJvcHMuZG9jdW1lbnROb2RlID09PSBkb2NOb2RlO1xuICAgIGNvbnN0IGNsYXNzTmFtZSA9IGNsYXNzU2V0KHtcbiAgICAgICdjbGFzcy1icm93c2VyX19lbnRyeSc6IHRydWUsXG4gICAgICAnY2xhc3MtYnJvd3Nlcl9fZW50cnktLWFjdGl2ZSc6IGlzQWN0aXZlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2RvY05vZGUudWlkfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG4gICAgICAgIDxMaW5rIHJlZj17aWR9IHRvPXtkb2NOb2RlfSBjbGFzc05hbWU9XCJjbGFzcy1icm93c2VyX19lbnRyeS1saW5rXCI+XG4gICAgICAgICAge2RvYy5uYW1lfVxuXG4gICAgICAgICAge2lzUHJpdmF0ZSAmJiB0aGlzLnByb3BzLm5hbWVzcGFjZU5vZGUuY29uZmlnLm1hcmtQcml2YXRlTW9kdWxlcyAhPT0gZmFsc2UgJiYgKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2xhc3MtYnJvd3Nlcl9fZW50cnktbGluay0tcHJpdmF0ZVwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiVGhpcyBtb2R1bGUgaXMgcHJpdmF0ZVwiPiA8SWNvbiBjbGFzc05hbWU9XCJpY29uLWN1YmVcIiAvPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICB7ZG9jLmdpdCAmJiA8SG90SXRlbUluZGljYXRvciB0aW1lc3RhbXA9e2RvYy5naXQubGFzdENvbW1pdHRlZEF0fSAvPn1cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIHtpc0FjdGl2ZSAmJiAhdGhpcy5wcm9wcy5mbGF0ICYmIHRoaXMucmVuZGVyTW9kdWxlRW50aXRpZXMoZG9jTm9kZSl9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9LFxuXG4gIHJlbmRlck1vZHVsZUVudGl0aWVzKGRvY3VtZW50Tm9kZSkge1xuICAgIGlmICghZG9jdW1lbnROb2RlLmVudGl0aWVzIHx8ICFkb2N1bWVudE5vZGUuZW50aXRpZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAoIWRvY3VtZW50Tm9kZS5wcm9wZXJ0aWVzLnRhZ3MpIHtcbiAgICAgIGNvbnNvbGUubG9nKCd3ZWlyZCBkb2NOb2RlOicsIGRvY3VtZW50Tm9kZSk7XG4gICAgfVxuXG4gICAgY29uc3QgeyBoaWRlUHJpdmF0ZVN5bWJvbHMgfSA9IHRoaXMucHJvcHMubmFtZXNwYWNlTm9kZS5jb25maWdcbiAgICBjb25zdCB2aXNpYmxlID0gZW50aXR5Tm9kZSA9PiAoXG4gICAgICAhaGlkZVByaXZhdGVTeW1ib2xzIHx8ICFEb2NDbGFzc2lmaWVyLmlzUHJpdmF0ZShlbnRpdHlOb2RlLnByb3BlcnRpZXMpXG4gICAgKVxuXG4gICAgY29uc3QgZW50aXR5RG9jdW1lbnRzID0gb3JkZXJBd2FyZVNvcnQuYXNOb2RlcyhcbiAgICAgIGRvY3VtZW50Tm9kZSxcbiAgICAgIGRvY3VtZW50Tm9kZS5lbnRpdGllcy5maWx0ZXIodmlzaWJsZSksXG4gICAgICAnaWQnXG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8dWwgY2xhc3NOYW1lPVwiY2xhc3MtYnJvd3Nlcl9fbWV0aG9kc1wiPlxuICAgICAgICB7ZW50aXR5RG9jdW1lbnRzLm1hcCh0aGlzLnJlbmRlckVudGl0eSl9XG4gICAgICA8L3VsPlxuICAgICk7XG4gIH0sXG5cbiAgcmVuZGVyRW50aXR5KG5vZGUpIHtcbiAgICBjb25zdCBzaG91bGREaXNwbGF5VHlwZURlZlByb3BlcnRpZXMgPSAoXG4gICAgICB0aGlzLnByb3BzLnNob3dUeXBlRGVmUHJvcGVydGllcyB8fFxuICAgICAgdGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlLmNvbmZpZy5zaG93VHlwZURlZlByb3BlcnRpZXNJbkJyb3dzZXJcbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGtleT17bm9kZS51aWR9IGNsYXNzTmFtZT1cImNsYXNzLWJyb3dzZXJfX21ldGhvZHMtZW50aXR5XCI+XG4gICAgICAgIDxMaW5rXG4gICAgICAgICAgdG89e25vZGV9XG4gICAgICAgICAgY2hpbGRyZW49eyhub2RlLnByb3BlcnRpZXMuc3ltYm9sIHx8ICcnKSArIG5vZGUucHJvcGVydGllcy5uYW1lfVxuICAgICAgICAgIHRpdGxlPXtub2RlLnRpdGxlfVxuICAgICAgICAvPlxuXG4gICAgICAgIHtzaG91bGREaXNwbGF5VHlwZURlZlByb3BlcnRpZXMgJiYgRG9jQ2xhc3NpZmllci5pc1R5cGVEZWYobm9kZS5wcm9wZXJ0aWVzKSAmJiAoXG4gICAgICAgICAgdGhpcy5yZW5kZXJNb2R1bGVFbnRpdGllcyhub2RlKVxuICAgICAgICApfVxuICAgICAgPC9saT5cbiAgICApO1xuICB9LFxuXG4gIHRvZ2dsZVByaXZhdGVWaXNpYmlsaXR5KCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2hvd1ByaXZhdGVNb2R1bGVzOiAhdGhpcy5zdGF0ZS5zaG93UHJpdmF0ZU1vZHVsZXNcbiAgICB9KTtcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xhc3NCcm93c2VyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL2NvbXBvbmVudHMvQ2xhc3NCcm93c2VyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgPyBjb25zb2xlIDogKHdpbmRvdy5jb25zb2xlIHx8IGdsb2JhbC5jb25zb2xlKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWNrYWdlcy9tZWdhZG9jLWh0bWwtc2VyaWFsaXplci91aS9zaGFyZWQvY29uc29sZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcImNvbXBvbmVudHMvQ2hlY2tib3hcIl07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1xcXCJjb21wb25lbnRzL0NoZWNrYm94XFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9JY29uXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9JY29uXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBNRUdBRE9DX1BVQkxJQ19NT0RVTEVTW1wiY29tcG9uZW50cy9Ib3RJdGVtSW5kaWNhdG9yXCJdO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiTUVHQURPQ19QVUJMSUNfTU9EVUxFU1tcXFwiY29tcG9uZW50cy9Ib3RJdGVtSW5kaWNhdG9yXFxcIl1cIlxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xuY29uc3QgeyBvYmplY3QsIH0gPSBSZWFjdC5Qcm9wVHlwZXM7XG5jb25zdCBOYW1lc3BhY2VJbmRleCA9IHJlcXVpcmUoJy4uL2NvbXBvbmVudHMvTmFtZXNwYWNlSW5kZXgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIGRpc3BsYXlOYW1lOiAnSlM6Ok5hbWVzcGFjZUluZGV4JyxcbiAgcHJvcFR5cGVzOiB7XG4gICAgZG9jdW1lbnROb2RlOiBvYmplY3QsXG4gICAgbmFtZXNwYWNlTm9kZTogb2JqZWN0LFxuICB9LFxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPE5hbWVzcGFjZUluZGV4XG4gICAgICAgIGRvY3VtZW50Tm9kZT17dGhpcy5wcm9wcy5kb2N1bWVudE5vZGUgfHwgdGhpcy5wcm9wcy5uYW1lc3BhY2VOb2RlfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhY2thZ2VzL21lZ2Fkb2MtcGx1Z2luLWpzL3VpL291dGxldHMvTmFtZXNwYWNlT3V0bGV0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==