(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[43],{352:function(e,a,t){"use strict";t.r(a);var n=t(23),r=t(24),s=t(26),i=t(25),l=t(2),c=t.n(l),o=t(27),u=t(377),d=t(67),m=t(75),h=t.n(m),f=t(69),p=t(141),b=t(71),g=t(107),v=t(108),O=t(72),E=t(73),k=t(68),j=t(304),y=t(64),P=t(140),N=t(303),R=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(e){var r;Object(n.a)(this,t),r=a.call(this,e);var s=!0;return null==localStorage.getItem("username")&&(s=!1),r.state={loggedIn:s,akun_id:localStorage.getItem("user_id"),divisi:localStorage.getItem("divisi")},r}return Object(r.a)(t,[{key:"displayPurchaseOrderDetail",value:function(){var e=this.props.data.purchaseOrder;if(e)return c.a.createElement(p.a,null,c.a.createElement(b.a,{className:"form-horizontal"},c.a.createElement(g.a,null,c.a.createElement(v.a,{md:"4"},c.a.createElement(O.a,{row:!0},c.a.createElement(v.a,{md:"6"},c.a.createElement(E.a,{htmlFor:"name"},"Kode Purchase Order")),c.a.createElement(v.a,{md:"6"},c.a.createElement(k.a,{type:"text",name:"kode",id:"kode",value:e.kode,disabled:!0})))),c.a.createElement(v.a,{md:"4"},c.a.createElement(O.a,{row:!0},c.a.createElement(v.a,{md:"3"},c.a.createElement(E.a,{htmlFor:"name"},"Status")),c.a.createElement(v.a,{md:"9"},c.a.createElement(k.a,{type:"text",name:"kode",id:"kode",value:e.status,disabled:!0})))),this.renderElement3(e.status,e.tanggal_setuju)),c.a.createElement(g.a,null,c.a.createElement(v.a,{md:"4"},c.a.createElement(O.a,{row:!0},c.a.createElement(v.a,{md:"6"},c.a.createElement(E.a,{htmlFor:"name"},"Nama Vendor")),c.a.createElement(v.a,{md:"6"},c.a.createElement(k.a,{type:"text",name:"kode",id:"kode",value:e.vendor.nama,disabled:!0})))))),c.a.createElement("hr",null),c.a.createElement(j.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},c.a.createElement("thead",{align:"center"},c.a.createElement("tr",null,c.a.createElement("th",null,"Nama Barang"),c.a.createElement("th",null,"Satuan"),c.a.createElement("th",null,"Jumlah"),c.a.createElement("th",null,"Harga"))),c.a.createElement("tbody",{align:"center"},e.listItemPurchaseOrder.map((function(e){return c.a.createElement("tr",{key:e.id},c.a.createElement("td",null,e.nama_barang),c.a.createElement("td",null,e.satuan),c.a.createElement("td",null,e.jumlah_barang),c.a.createElement("td",null,e.harga))})))),c.a.createElement("hr",null),c.a.createElement(g.a,null,c.a.createElement(v.a,null,this.renderElement(e.akun.id,e.status)),c.a.createElement(v.a,null,this.renderElement2(e.tanggal_setuju))))}},{key:"renderElement",value:function(e,a){if(this.state.akun_id===e&&"Disetujui"!==a)return c.a.createElement("div",{align:"center"},c.a.createElement(y.a,{onClick:this.onDelete.bind(this,this.props.match.params.id),color:"danger"},c.a.createElement("i",{className:"fa fa-trash"},"Hapus Permintaan Barang")))}},{key:"renderElement2",value:function(e){if("Logistic"===this.state.divisi&&""===e)return c.a.createElement("div",{align:"center"},c.a.createElement(y.a,{onClick:this.onSetujuiPurchaseOrder.bind(this,this.props.match.params.id),color:"success"},c.a.createElement("i",{className:"fa fa-check"},"Setujui Permintaan Barang")),c.a.createElement(y.a,{onClick:this.onTolakPurchaseOrder.bind(this,this.props.match.params.id),color:"danger"},c.a.createElement("i",{className:"fa fa-times"},"Tolak Permintaan Barang")))}},{key:"renderElement3",value:function(e,a){if("Disetujui"===e||"Ditolak"===e)return c.a.createElement(v.a,{md:"4"},c.a.createElement(O.a,{row:!0},c.a.createElement(v.a,{md:"3"},c.a.createElement(E.a,{htmlFor:"name"},"Tanggal Diproses")),c.a.createElement(v.a,{md:"9"},c.a.createElement(k.a,{type:"text",name:"kode",id:"kode",value:a,disabled:!0}))))}},{key:"onSetujuiPurchaseOrder",value:function(e){this.props.updateStatusPurchaseOrder({variables:{id:e,status:"Disetujui",tanggal_setuju:(new Date).toLocaleDateString()},refetchQueries:[{query:f.G}]}),this.props.updateStatusListRequestOnOrder({variables:{order_id:e,status:"Delivery"},refetchQueries:[{query:f.G}]}),this.props.updateStatusListItemPurchaseOrder({variables:{purchaseOrder_id:e,status:"Delivery"},refetchQueries:[{query:f.G}]}),h.a.fire({position:"center",icon:"success",title:"Pembelian Barang Disetujui",showConfirmButton:!0})}},{key:"onTolakPurchaseOrder",value:function(e){this.props.updateStatusPurchaseOrder({variables:{id:e,status:"Ditolak",tanggal_setuju:(new Date).toLocaleDateString()},refetchQueries:[{query:f.G}]}),this.props.updateStatusListRequestOnOrder({variables:{order_id:e,status:"Active"},refetchQueries:[{query:f.G}]}),h.a.fire({position:"center",icon:"success",title:"Pembelian Barang Ditolak",showConfirmButton:!0})}},{key:"onDelete",value:function(e){var a=this;h.a.fire({title:"Apakah anda Yakin?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ya, Saya Yakin!"}).then((function(t){t.isConfirmed&&(a.props.hapusPurchaseOrderMutation({variables:{id:e},refetchQueries:[{query:f.G}]}),a.props.hapusManyListItemPurchaseOrder({variables:{id:e},refetchQueries:[{query:f.G}]}),a.props.history.push("/purchaseOrder/purchaseOrder"),h.a.fire("Dihapus!","Pembelian Barang Telah Dihapus","success"))}))}},{key:"render",value:function(){return c.a.createElement("div",{className:"animated fadeIn"},c.a.createElement(g.a,null,c.a.createElement(v.a,null,c.a.createElement(P.a,null,c.a.createElement(N.a,null,"Purchase Order",c.a.createElement(o.Link,{to:"/purchaseOrder/purchaseOrder",className:"float-right mb-0"},c.a.createElement(y.a,{color:"secondary"},"Kembali"))),c.a.createElement(p.a,null,this.displayPurchaseOrderDetail())))))}}]),t}(l.Component);a.default=d(Object(u.a)(f.F,{options:function(e){return{variables:{id:e.match.params.id}}}}),Object(u.a)(f.G,{name:"getPurchaseOrdersQuery"}),Object(u.a)(f.R,{name:"hapusPurchaseOrderMutation"}),Object(u.a)(f.L,{name:"hapusManyListItemPurchaseOrder"}),Object(u.a)(f.fb,{name:"updateStatusPurchaseOrder"}),Object(u.a)(f.bb,{name:"updateStatusListItemPurchaseOrder"}),Object(u.a)(f.db,{name:"updateStatusListRequestOnOrder"}),Object(u.a)(f.w,{name:"getListRequestsQuery"}))(R)},64:function(e,a,t){"use strict";var n=t(5),r=t(13),s=t(61),i=t(11),l=t(2),c=t.n(l),o=t(14),u=t.n(o),d=t(59),m=t.n(d),h=t(60),f={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:h.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(s.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.onClick=function(e){if(!this.props.disabled)return this.props.onClick?this.props.onClick(e):void 0;e.preventDefault()},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],s=e.block,i=e.className,l=e.close,o=e.cssModule,u=e.color,d=e.outline,f=e.size,p=e.tag,b=e.innerRef,g=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&"undefined"===typeof g.children&&(g.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(d?"-outline":"")+"-"+u,O=Object(h.m)(m()(i,{close:l},l||"btn",l||v,!!f&&"btn-"+f,!!s&&"btn-block",{active:a,disabled:this.props.disabled}),o);g.href&&"button"===p&&(p="a");var E=l?"Close":null;return c.a.createElement(p,Object(n.a)({type:"button"===p&&g.onClick?"button":void 0},g,{className:O,ref:b,onClick:this.onClick,"aria-label":t||E}))},a}(c.a.Component);p.propTypes=f,p.defaultProps={color:"secondary",tag:"button"},a.a=p},68:function(e,a,t){"use strict";var n=t(5),r=t(13),s=t(61),i=t(11),l=t(2),c=t.n(l),o=t(14),u=t.n(o),d=t(59),m=t.n(d),h=t(60),f={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:h.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.focus=t.focus.bind(Object(s.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,i=e.bsSize,l=e.valid,o=e.invalid,u=e.tag,d=e.addon,f=e.plaintext,p=e.innerRef,b=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),g=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),O=u||("select"===s||"textarea"===s?s:"input"),E="form-control";f?(E+="-plaintext",O=u||"input"):"file"===s?E+="-file":"range"===s?E+="-range":g&&(E=d?null:"form-check-input"),b.size&&v.test(b.size)&&(Object(h.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=b.size,delete b.size);var k=Object(h.m)(m()(a,o&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,E),t);return("input"===O||u&&"function"===typeof u)&&(b.type=s),b.children&&!f&&"select"!==s&&"string"===typeof O&&"select"!==O&&(Object(h.t)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),c.a.createElement(O,Object(n.a)({},b,{ref:p,className:k,"aria-invalid":o}))},a}(c.a.Component);p.propTypes=f,p.defaultProps={type:"text"},a.a=p},71:function(e,a,t){"use strict";var n=t(5),r=t(13),s=t(61),i=t(11),l=t(2),c=t.n(l),o=t(14),u=t.n(o),d=t(59),m=t.n(d),h=t(60),f={children:u.a.node,inline:u.a.bool,tag:h.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(s.a)(t)),t.submit=t.submit.bind(Object(s.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,i=e.tag,l=e.innerRef,o=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(h.m)(m()(a,!!s&&"form-inline"),t);return c.a.createElement(i,Object(n.a)({},o,{ref:l,className:u}))},a}(l.Component);p.propTypes=f,p.defaultProps={tag:"form"},a.a=p},72:function(e,a,t){"use strict";var n=t(5),r=t(13),s=t(2),i=t.n(s),l=t(14),c=t.n(l),o=t(59),u=t.n(o),d=t(60),m={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:d.q,className:c.a.string,cssModule:c.a.object},h=function(e){var a=e.className,t=e.cssModule,s=e.row,l=e.disabled,c=e.check,o=e.inline,m=e.tag,h=Object(r.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),f=Object(d.m)(u()(a,!!s&&"row",c?"form-check":"form-group",!(!c||!o)&&"form-check-inline",!(!c||!l)&&"disabled"),t);return"fieldset"===m&&(h.disabled=l),i.a.createElement(m,Object(n.a)({},h,{className:f}))};h.propTypes=m,h.defaultProps={tag:"div"},a.a=h},73:function(e,a,t){"use strict";var n=t(5),r=t(13),s=t(2),i=t.n(s),l=t(14),c=t.n(l),o=t(59),u=t.n(o),d=t(60),m=c.a.oneOfType([c.a.number,c.a.string]),h=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:m,order:m,offset:m})]),f={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.q,className:c.a.string,cssModule:c.a.object,xs:h,sm:h,md:h,lg:h,xl:h,widths:c.a.array},p={tag:"label",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},g=function(e){var a=e.className,t=e.cssModule,s=e.hidden,l=e.widths,c=e.tag,o=e.check,m=e.size,h=e.for,f=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];l.forEach((function(a,n){var r=e[a];if(delete f[a],r||""===r){var s,i=!n;if(Object(d.k)(r)){var l,c=i?"-":"-"+a+"-";s=b(i,a,r.size),p.push(Object(d.m)(u()(((l={})[s]=r.size||""===r.size,l["order"+c+r.order]=r.order||0===r.order,l["offset"+c+r.offset]=r.offset||0===r.offset,l))),t)}else s=b(i,a,r),p.push(s)}}));var g=Object(d.m)(u()(a,!!s&&"sr-only",!!o&&"form-check-label",!!m&&"col-form-label-"+m,p,!!p.length&&"col-form-label"),t);return i.a.createElement(c,Object(n.a)({htmlFor:h},f,{className:g}))};g.propTypes=f,g.defaultProps=p,a.a=g}}]);
//# sourceMappingURL=43.ee239fc5.chunk.js.map