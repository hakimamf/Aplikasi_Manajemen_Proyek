(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[24],{109:function(e,a,t){"use strict";var c=t(5),n=t(11),i=t(2),l=t.n(i),s=t(14),r=t.n(s),o=t(59),m=t.n(o),u=t(68),b=t(60),v={tag:b.q,activeTab:r.a.any,className:r.a.string,cssModule:r.a.object},E=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(n.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.tag,i=Object(b.n)(this.props,Object.keys(v)),s=Object(b.m)(m()("tab-content",a),t);return l.a.createElement(u.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(n,Object(c.a)({},i,{className:s})))},a}(i.Component);a.a=E,E.propTypes=v,E.defaultProps={tag:"div"}},110:function(e,a,t){"use strict";t.d(a,"a",(function(){return E}));var c=t(5),n=t(13),i=t(2),l=t.n(i),s=t(14),r=t.n(s),o=t(59),m=t.n(o),u=t(68),b=t(60),v={tag:b.q,className:r.a.string,cssModule:r.a.object,tabId:r.a.any};function E(e){var a=e.className,t=e.cssModule,i=e.tabId,s=e.tag,r=Object(n.a)(e,["className","cssModule","tabId","tag"]),o=function(e){return Object(b.m)(m()("tab-pane",a,{active:i===e}),t)};return l.a.createElement(u.a.Consumer,null,(function(e){var a=e.activeTabId;return l.a.createElement(s,Object(c.a)({},r,{className:o(a)}))}))}E.propTypes=v,E.defaultProps={tag:"div"}},325:function(e,a,t){"use strict";t.r(a);var c=t(23),n=t(24),i=t(27),l=t(26),s=t(25),r=t(2),o=t.n(r),m=t(110),u=t(95),b=t(96),v=t(297),E=t(294),d=t(295),h=t(109),p=t(296),g=t(59),T=t.n(g),f=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(e){var n;return Object(c.a)(this,t),(n=a.call(this,e)).toggle=n.toggle.bind(Object(i.a)(n)),n.state={activeTab:new Array(4).fill("1")},n}return Object(n.a)(t,[{key:"lorem",value:function(){return"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit."}},{key:"toggle",value:function(e,a){var t=this.state.activeTab.slice();t[e]=a,this.setState({activeTab:t})}},{key:"tabPane",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(m.a,{tabId:"1"},"1. ".concat(this.lorem())),o.a.createElement(m.a,{tabId:"2"},"2. ".concat(this.lorem())),o.a.createElement(m.a,{tabId:"3"},"3. ".concat(this.lorem())))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"animated fadeIn"},o.a.createElement(u.a,null,o.a.createElement(b.a,{xs:"12",md:"6",className:"mb-4"},o.a.createElement(v.a,{tabs:!0},o.a.createElement(E.a,null,o.a.createElement(d.a,{active:"1"===this.state.activeTab[0],onClick:function(){e.toggle(0,"1")}},"Home")),o.a.createElement(E.a,null,o.a.createElement(d.a,{active:"2"===this.state.activeTab[0],onClick:function(){e.toggle(0,"2")}},"Profile")),o.a.createElement(E.a,null,o.a.createElement(d.a,{active:"3"===this.state.activeTab[0],onClick:function(){e.toggle(0,"3")}},"Messages"))),o.a.createElement(h.a,{activeTab:this.state.activeTab[0]},this.tabPane())),o.a.createElement(b.a,{xs:"12",md:"6",className:"mb-4"},o.a.createElement(v.a,{tabs:!0},o.a.createElement(E.a,null,o.a.createElement(d.a,{active:"1"===this.state.activeTab[1],onClick:function(){e.toggle(1,"1")}},o.a.createElement("i",{className:"icon-calculator"}))),o.a.createElement(E.a,null,o.a.createElement(d.a,{active:"2"===this.state.activeTab[1],onClick:function(){e.toggle(1,"2")}},o.a.createElement("i",{className:"icon-basket-loaded"}))),o.a.createElement(E.a,null,o.a.createElement(d.a,{active:"3"===this.state.activeTab[1],onClick:function(){e.toggle(1,"3")}},o.a.createElement("i",{className:"icon-pie-chart"})))),o.a.createElement(h.a,{activeTab:this.state.activeTab[1]},this.tabPane())),o.a.createElement(b.a,{xs:"12",md:"6",className:"mb-4"},o.a.createElement(v.a,{tabs:!0},o.a.createElement(E.a,null,o.a.createElement(d.a,{active:"1"===this.state.activeTab[2],onClick:function(){e.toggle(2,"1")}},o.a.createElement("i",{className:"icon-calculator"})," ",o.a.createElement("span",{className:"1"===this.state.activeTab[2]?"":"d-none"}," Calculator"))),o.a.createElement(E.a,null,o.a.createElement(d.a,{active:"2"===this.state.activeTab[2],onClick:function(){e.toggle(2,"2")}},o.a.createElement("i",{className:"icon-basket-loaded"})," ",o.a.createElement("span",{className:"2"===this.state.activeTab[2]?"":"d-none"}," Shopping cart"))),o.a.createElement(E.a,null,o.a.createElement(d.a,{className:T()({active:"3"===this.state.activeTab[2]}),onClick:function(){e.toggle(2,"3")}},o.a.createElement("i",{className:"icon-pie-chart"})," ",o.a.createElement("span",{className:"3"===this.state.activeTab[2]?"":"d-none"}," Charts")))),o.a.createElement(h.a,{activeTab:this.state.activeTab[2]},this.tabPane())),o.a.createElement(b.a,{xs:"12",md:"6",className:"mb-4"},o.a.createElement(v.a,{tabs:!0},o.a.createElement(E.a,null,o.a.createElement(d.a,{active:"1"===this.state.activeTab[3],onClick:function(){e.toggle(3,"1")}},o.a.createElement("i",{className:"icon-calculator"}),o.a.createElement("span",{className:"1"===this.state.activeTab[3]?"":"d-none"}," Calc"),"\xa0",o.a.createElement(p.a,{color:"success"},"New"))),o.a.createElement(E.a,null,o.a.createElement(d.a,{active:"2"===this.state.activeTab[3],onClick:function(){e.toggle(3,"2")}},o.a.createElement("i",{className:"icon-basket-loaded"}),o.a.createElement("span",{className:"2"===this.state.activeTab[3]?"":"d-none"}," Cart"),"\xa0",o.a.createElement(p.a,{pill:!0,color:"danger"},"29"))),o.a.createElement(E.a,null,o.a.createElement(d.a,{active:"3"===this.state.activeTab[3],onClick:function(){e.toggle(3,"3")}},o.a.createElement("i",{className:"icon-pie-chart"}),o.a.createElement("span",{className:"3"===this.state.activeTab[3]?"":"d-none"}," Charts")))),o.a.createElement(h.a,{activeTab:this.state.activeTab[3]},this.tabPane()))))}}]),t}(r.Component);a.default=f},68:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var c=t(2),n=t.n(c).a.createContext({})}}]);
//# sourceMappingURL=24.3a86ae91.chunk.js.map