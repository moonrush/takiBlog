(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{122:function(t,n,a){},266:function(t,n,a){"use strict";var o=a(122);a.n(o).a},283:function(t,n,a){"use strict";a.r(n);a(92),a(51),a(2);var o=a(5),i=a(157),s={components:{NavigationIcon:o.g,ClockIcon:o.a},data:function(){return{paginationComponent:null}},created:function(){this.paginationComponent=this.getPaginationComponent(),console.log(this)},computed:{pages:function(){return this.$pagination.pages},tags:function(){return this.$tag._metaMap}},methods:{getPaginationComponent:function(){return i.b},resovlePostDate:function(t){return new Date(t.replace(/\-/g,"/").trim()).toDateString()}}},e=(a(266),a(155),a(4)),r=Object(e.a)(s,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"base-list-layout"}},[a("div",{staticClass:"ui-posts"},t._l(t.pages,(function(n){return a("div",{staticClass:"ui-post"},[a("div",{staticClass:"ui-post-title"},[a("NavLink",{attrs:{link:n.path}},[t._v(t._s(n.title))])],1),t._v(" "),a("div",{staticClass:"ui-post-attribute"},[n.frontmatter.author?a("label",{staticClass:"ui-post-author"},[a("NavigationIcon"),t._v(" "),a("span",[t._v(t._s(n.frontmatter.author)+" in "+t._s(n.frontmatter.location))])],1):t._e(),t._v(" "),n.frontmatter.date?a("label",{staticClass:"ui-post-date"},[a("ClockIcon"),t._v(" "),a("span",[t._v(t._s(t.resovlePostDate(n.frontmatter.date)))])],1):t._e()]),t._v(" "),n.frontmatter.intro?a("div",{staticClass:"ui-post-summary"},[a("Content",{attrs:{"page-key":n.key,"slot-key":"intro"}})],1):a("div",{staticClass:"ui-post-summary"},[t._v(t._s(n.frontmatter.summary||n.summary))])])})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?a(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);n.default=r.exports}}]);