webpackJsonp([2,0],[function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var r=n(36),s=i(r),o=n(153),a=i(o),c=n(154),u=i(c),l=n(64),d=i(l),f=n(139),h=i(f);s.default.use(a.default),s.default.use(u.default);var p=new u.default({mode:"history"});new s.default({el:"#app",store:h.default,router:p,template:"<App/>",components:{App:d.default}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,n){var i,r;n(59),i=n(140);var s=n(78);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,r;n(55),i=n(141);var s=n(73);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,r;n(58),i=n(142);var s=n(77);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,r;n(60),i=n(143);var s=n(79);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,r;n(57),i=n(144);var s=n(76);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,r;i=n(145);var s=n(74);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,r;i=n(146);var s=n(80);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,r;n(61),i=n(147);var s=n(81);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e,n){var i,r;n(56),i=n(148);var s=n(75);r=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(r=i=i.default),"function"==typeof r&&(r=r.options),r.render=s.render,r.staticRenderFns=s.staticRenderFns,t.exports=i},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"aside"},[n("ul",{staticClass:"panel"},[n("li",[n("a",{staticClass:"arkicon-layout",class:{vertical:t.$parent.vertical},attrs:{href:"#",title:"Layout"},on:{click:function(e){t.$parent.layoutChange()}}})]),n("li",[n("a",{staticClass:"arkicon-list",attrs:{href:"#",title:"TOC"},on:{click:function(e){t.$parent.showTOC()}}})]),n("li",[n("a",{attrs:{title:"Font Size"}},[t._v(t._s(t.$parent.fontSize))])]),n("li",[n("a",{attrs:{title:"Line Height"}},[t._v(t._s(t.$parent.lineHeight))])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content",style:{marginTop:t.offsetTop+"em"},attrs:{id:"page_"+t.index},domProps:{innerHTML:t._s(t.compiledMarkdown)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",[n("svg",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"spinner",class:{show:t.show},attrs:{width:"8rem",height:"8rem",viewBox:"0 0 44 44"}},[n("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"4","stroke-linecap":"round",cx:"22",cy:"22",r:"20"}})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",t._l(t.toc,function(e){return n("li",{key:e.pagination},[n("a",{attrs:{href:"#page_"+e.pagination}},[t._v(t._s(e.title))]),n("span",[t._v(t._s(e.pagination))])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page",style:{height:t.$parent.pageHeight+"em",width:t.$parent.contentWidth+"em"}},[n("div",{staticClass:"hd",style:{width:t.$parent.contentWidth+"rem"}},[t._t("hd")],2),n("div",{staticClass:"bd",style:{height:t.$parent.contentHeight+"em"}},[t._t("bd")],2),n("div",{staticClass:"ft"},[t._t("ft")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("hya-reader"),n("a",{attrs:{id:"forkme_banner",href:"https://github.com/GitaiQAQ/HyaReader"}},[t._v("View on GitHub")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{"layout-vertical":t.vertical},style:{"font-size":t.fontSize+"px","line-height":t.lineHeight+"em"},attrs:{id:"hya-reader"}},[n("hya-aside"),n("div",{staticClass:"article",style:{height:t.fullHeight+"em"},on:{click:function(e){t.click(e)}}},[n("div",{staticClass:"inner",style:t.innerStyle},[t.toc_show?n("page",{staticClass:"toc"},[n("h2",{slot:"hd"},[t._v("目录")]),n("hya-toc",{slot:"bd"})],1):t._e(),t.$store.getters.isLoading?n("page",{staticClass:"page-wrapper"},[n("PageWrapper",{directives:[{name:"show",rawName:"v-show",value:t.$store.state.book.meta.title,expression:"$store.state.book.meta.title"}],slot:"bd"}),n("div",{staticClass:"page-loading",slot:"bd"},[n("Spinner",{style:{height:t.$parent.pageHeight+"em",width:t.$parent.contentWidth+"em"},attrs:{show:!t.$store.state.book.meta.title}})],1)],1):t._e(),t.$store.getters.isLoading?n("page",{staticClass:"page-render"},[n("PageRender",{attrs:{contentHeight:t.contentHeight,fontSize:t.fontSize,lineHeight:t.lineHeight},slot:"bd"})],1):t._e(),!t.$store.getters.isLoading&&t.vertical?n("page",{key:0,staticClass:"page-wrapper"},[n("PageWrapper",{slot:"bd"})],1):t._e(),t._l(t.slicedPage,function(e,i){return!t.$store.getters.isLoading&&t.vertical?n("page",{key:t.sliced[0]+i,staticClass:"page-reader"},[n("PageReader",{attrs:{index:t.sliced[0]+i},slot:"bd"})],1):t._e()}),t.$store.getters.isLoading||t.vertical?t._e():n("transition",{attrs:{name:t.transition}},[t.currPos?t._e():n("page",{key:0,staticClass:"page-wrapper"},[n("PageWrapper",{slot:"bd"})],1),t.currPos?n("page",{key:t.currPos,staticClass:"page-reader"},[n("h3",{slot:"hd"},[t._v(t._s(t.title))]),n("PageReader",{attrs:{index:t.currPos-1},slot:"bd"}),n("span",{slot:"ft"},[t._v(t._s(t.currPos)),n("span",[t._v("/ "+t._s(t.pages.length)+" ")])])],1):t._e()],1)],2)])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content",domProps:{innerHTML:t._s(t.book.html)}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-wrapper",style:{height:t.$parent.contentHeight+"em",width:t.$parent.contentWidth+"rem"}},[n("h1",{staticClass:"title"},[t._v(t._s(t.title))]),n("h2",{staticClass:"subtitle"},[t._v(t._s(t.subtitle))]),n("div",{staticClass:"info-list"},t._l(t.infos,function(e){return n("div",{class:e},[t._v(t._s(t.meta[e]))])})),n("div",{staticClass:"copyright"},[t._v(t._s(t.copyright))])])},staticRenderFns:[]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),s=i(r),o=n(155),a=i(o);s.default.use(a.default),e.default=new a.default.Store({state:{reader:{fontSize:16,lineHeight:1.5,vertical:!1},book:{url:"https://raw.githubusercontent.com/GitaiQAQ/HyaReader/gh-pages/static/楚辞.txt",tree:[],meta:[],toc:[],pages:[],html:null}},mutations:{UPDATE_LAYOUT_MODE:function(t,e){var n=e.mode;n?"layout-vertical"===n?t.reader.vertical=!0:"layout-horizontal"===n&&(t.reader.vertical=!1):t.reader.vertical=!t.reader.vertical},UPDATE_BOOK_URL:function(t,e){var n=e.url;n&&(t.book.url=n)},UPDATE_BOOK_META:function(t,e){var n=e.meta;n&&(t.book.meta=n)},UPDATE_BOOK_TREE:function(t,e){var n=e.tree;n&&(t.book.tree=n)},UPDATE_BOOK_HTML:function(t,e){var n=e.html;n&&(t.book.html=n)},UPDATE_BOOK_TOC:function(t,e){var n=e.toc;n&&t.book.toc.push(n)},UPDATE_BOOK_PAGE:function(t,e){var n=e.page;n&&t.book.pages.push(n)}},getters:{isWrapper:function(t){return!t.book.meta.length},isLoading:function(t){return!t.book.pages.length},title:function(t){return t.book.meta.title},toc:function(t){return t.book.toc}},actions:{UPDATE_BOOK_META:function(t,e){var n=t.commit;n("UPDATE_BOOK_META",e)},UPDATE_BOOK_HTML:function(t,e){var n=t.commit;n("UPDATE_BOOK_HTML",e)},UPDATE_BOOK_TREE:function(t,e){var n=t.commit;n("UPDATE_BOOK_TREE",e)},UPDATE_BOOK_URL:function(t,e){var n=t.commit;n("UPDATE_BOOK_URL",e)},UPDATE_BOOK_TOC:function(t,e){var n=t.commit;n("UPDATE_BOOK_TOC",e)},UPDATE_BOOK_PAGE:function(t,e){var n=t.commit;n("UPDATE_BOOK_PAGE",e)}}})},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(49),s=i(r),o=n(52),a=n(83),c=i(a),u=n(67),l=i(u);e.default={name:"app",components:{HyaReader:l.default},methods:{fetch:function(t){var e=this;this.$http.get(t).then(function(t){return t.text()}).then(function(t){var n=(0,c.default)(t);e.$store.dispatch("UPDATE_BOOK_META",{meta:n.attributes});var i=o.markdown.parse(n.body),r=o.markdown.toHTMLTree(i),a=o.markdown.renderJsonML(JSON.parse((0,s.default)(r)));e.$store.dispatch("UPDATE_BOOK_HTML",{html:a.join("\n\n")}),e.$store.dispatch("UPDATE_BOOK_TREE",{tree:a.map(function(t,e){return{html:t,el:r[e+1]}})})})}},created:function(){this.$store.dispatch("UPDATE_BOOK_URL",{url:this.$route.query.url})},mounted:function(){this.fetch(this.$store.state.book.url)}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hya-aside"}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{updateMeta:function(t){this.meta=t}}}},function(t,e,n){(function(t){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(65),s=i(r),o=n(68),a=i(o),c=n(66),u=i(c),l=n(72),d=i(l),f=n(71),h=i(f),p=n(70),g=i(p),_=n(69),v=i(_);e.default={name:"hya-reader",props:["book"],data:function(){return{fontSize:16,lineHeight:1.5,vertical:!1,toc_show:!1,transition:"slide-left",currPos:0}},computed:{pages:function(){return this.$store.state.book.pages},title:function(){var t=this,e=this.$store.state.book.toc.find(function(e){return e.pagination<t.currPos});return e?e.title:this.$store.getters.title},fullHeight:function(){return t.document.documentElement.clientHeight/this.fontSize},fullWidth:function(){return t.document.documentElement.clientWidth/this.fontSize},padding:function(){return t.document.documentElement.clientWidth>599?{h:10,v:8}:{h:3,v:5}},pageHeight:function(){return this.fullHeight-this.padding.v},pageWidth:function(){return this.fullWidth>44?44:this.fullWidth},contentHeight:function(){return Math.floor((this.fullHeight-this.padding.v)/this.lineHeight)*this.lineHeight},contentWidth:function(){return this.pageWidth-this.padding.h},sliced:function(){var t=this.currPos>=3?this.currPos-3:0,e=this.pages.length-1;return e=this.currPos+3<e?this.currPos+3:e,[t,e,e-t]},slicedPage:function(){return this.pages.slice(this.sliced[0],this.sliced[1]+1)},innerStyle:function(){return this.vertical?{width:this.pageWidth+"em",paddingTop:this.contentHeight*this.sliced[0]+"em",paddingBottom:this.contentHeight*(this.pages.length-1-(this.sliced[0]+this.sliced[2]))+"em"}:{width:this.pageWidth+"em"}}},components:{Page:u.default,HyaAside:s.default,HyaToc:a.default,Spinner:d.default,PageWrapper:h.default,PageRender:g.default,PageReader:v.default},methods:{layoutChange:function(t){this.currPos=0,t?"layout-vertical"===t?this.vertical=!0:"layout-horizontal"===t&&(this.vertical=!1):this.vertical=!this.vertical},showTOC:function(){this.toc_show=!this.toc_show},turn:function(t){this.transition=t>0?"slide-left":"slide-right",this.currPos+t>=0&&this.currPos+t<this.pages.length&&(this.currPos+=t)},click:function(e){var n=t.document.documentElement.clientWidth/2-75,i=n+150;e.clientX<n?this.turn(-1):e.clientX>i&&this.turn(1)},handleScroll:function(){var e=Math.floor(t.window.scrollY/this.fontSize/this.contentHeight);this.turn(e-this.currPos)}},mounted:function(){t.window.addEventListener("scroll",this.handleScroll)}}}).call(e,function(){return this}())},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"hya-toc",computed:{toc:function(){return this.$store.getters.toc}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Reader",props:["index"],computed:{page:function(){return this.$store.state.book.pages[this.index]},offsetTop:function(){return this.page&&this.page[0]?this.page[0].offset*this.$store.state.reader.lineHeight:0},compiledMarkdown:function(){if(this.page)return this.page.map(function(t){return t.html}).join("\n")}}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(152),s=i(r),o=n(49),a=i(o);e.default={name:"page-render",props:["fontSize","lineHeight","contentHeight"],data:function(){return{toc:[],pages:[[]]}},computed:{book:function(){return this.$store.state.book}},methods:{pageByHeight:function(){function t(e){if("string"==typeof e)return 0;var n=JSON.parse((0,a.default)(e)),i=n.shift();if("img"===i)return 2;if("h1"===i)return c.$store.dispatch("UPDATE_BOOK_TOC",{toc:{pagination:r,title:n.shift()}}),1;for(!n.length||"object"!==(0,s.default)(n[0])||n[0]instanceof Array||n.shift();n.length;){var o=t(n.shift());if(o)return o}return!1}function e(t){o=t,c.$store.dispatch("UPDATE_BOOK_PAGE",{page:c.pages[r]}),r+=1,c.pages[r]||(c.pages[r]=[])}var n=this.fontSize*this.lineHeight,i=this.contentHeight/this.lineHeight,r=0,o=0,c=this;[].forEach.call(c.$el.children,function(s,u){var l={height:Math.ceil(s.offsetHeight/n),offset:(n-s.offsetHeight%n)%n,html:c.book.tree[u].html,tree:c.book.tree[u].el};switch(t(l.tree)){case 1:return e(l.height),c.toc.push({title:l.tree[1],pagination:r}),void c.pages[r].push(l);case 2:return e(0),c.pages[r].push(l),void e(0)}for(o+=l.height,c.pages[r].push(l);o>=i;){e(o-i);var d=JSON.parse((0,a.default)(l));d.offset=-(l.height-o),c.pages[r].push(d)}})}},updated:function(){this.pageByHeight()}}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(149),s=i(r);e.default={name:"page-wrapper",computed:{meta:function(){return this.$store.state.book.meta},title:function(){return this.meta.title},subtitle:function(){return this.meta.subtitle},copyright:function(){return this.meta.copyright||"© 版权所有，侵权必究。"},infos:function(){return(0,s.default)(this.$store.state.book.meta).filter(function(t){return!["title","subtitle","copyright"].includes(t)})}}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"spinner",props:["show"]}}]);
//# sourceMappingURL=app.7021da6960287d490aea.js.map