(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[26],{131:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(80),l=a(31);function r(){var e=Object(n.a)(["\n\tquery($username: String!, $password: String!){\n\t\takun(username: $username, password: $password) {\n\t\t\tusername\n\t\t\tpassword\n\t\t\tid\n\t\t\tkaryawan {\n\t\t\t\tnama\n\t\t\t\ttanggal_lahir\n\t\t\t\tjenis_kelamin\n\t\t\t\tagama\n\t\t\t\ttempat_lahir\n\t\t\t\talamat\n\t\t\t\tno_kontak\n\t\t\t\temail\n\t\t\t\tjabatan\n\t\t\t\tdivisi{\n\t\t\t\t\tnama\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\tid\n\t\t\t}\n\t\t}\n\t}\n"]);return r=function(){return e},e}function i(){var e=Object(n.a)(["\n{\n\tkaryawans {\n\t\tnama\n\t\ttanggal_lahir\n\t\tjenis_kelamin\n\t\tagama\n\t\ttempat_lahir\n\t\talamat\n\t\tno_kontak\n\t\temail\n\t\tjabatan\n\t\tgaji\n\t\tdivisi{\n\t\t\tnama\n\t\t\tid\n\t\t}\n\t\tid\n\t}\n}\n"]);return i=function(){return e},e}var o=Object(l.b)(i());Object(l.b)(r())},134:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return s})),a.d(t,"d",(function(){return d}));var n=a(80),l=a(31);function r(){var e=Object(n.a)(["\n\tmutation($id:ID!){\n\t\thapusProyek(id: $id){\n\t\t\tnama\n\t\t\talamat\n\t\t\tbudget\n\t\t\ttanggal_mulai\n\t\t\ttanggal_selesai\n\t\t\tid\n\t\t}\n\t}\n"]);return r=function(){return e},e}function i(){var e=Object(n.a)(["\nmutation($nama:String!, $alamat:String!, $budget:Int!, $tanggal_mulai:String!, $tanggal_selesai:String!, $client_id:String!){\n\taddProyek(nama: $nama, alamat: $alamat, budget:$budget, tanggal_mulai:$tanggal_mulai, tanggal_selesai:$tanggal_selesai, client_id:$client_id){\n\t\tnama\n\t\talamat\n\t\tbudget\n\t\ttanggal_mulai\n\t\ttanggal_selesai\n\t\tid\n\t}\n}\n"]);return i=function(){return e},e}function o(){var e=Object(n.a)(["\n\tquery($id: ID){\n\t\tproyek(id: $id) {\n\t\t\tnama\n\t\t\talamat\n\t\t\tbudget\n\t\t\ttanggal_mulai\n\t\t\ttanggal_selesai\n\t\t\tclient{\n\t\t\t\tnama\n\t\t\t\talamat\n\t\t\t\tno_kontak\n\t\t\t\temail\n\t\t\t\tid\n\t\t\t}\n\t\t\tid\n\t\t}\n\t}\n"]);return o=function(){return e},e}function m(){var e=Object(n.a)(["\n{\n\tproyeks {\n\t\tnama\n\t\talamat\n\t\tbudget\n\t\ttanggal_mulai\n\t\ttanggal_selesai\n\t\tclient{\n\t\t\tnama\n\t\t\talamat\n\t\t\tno_kontak\n\t\t\temail\n\t\t\tid\n\t\t}\n\t\tid\n\t}\n}\n"]);return m=function(){return e},e}var c=Object(l.b)(m()),u=Object(l.b)(o()),s=Object(l.b)(i()),d=Object(l.b)(r())},341:function(e,t,a){"use strict";a.r(t);var n=a(23),l=a(24),r=a(26),i=a(25),o=a(2),m=a.n(o),c=a(4),u=a(28),s=a(98),d=a(94),p={items:[{name:"Daftar Proyek",url:"/daftarproyek/daftarproyek",icon:"icon-speedometer"},{name:"Daftar Pekerja",url:"/daftarpekerja/daftarpekerja",icon:"icon-speedometer"},{name:"Daftar Client",url:"/daftarclient/daftarclient",icon:"icon-speedometer"}]},h=a(348),g=a(79),b=(a(86),a(131)),E=a(95),f=a(96),y=a(132),k=a(298),v=a(133),j=a(299),_=a(300),P=a(301),O=a(302),C=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"displayPekerja",value:function(){var e=this.props.getKaryawansQuery,t=0;return e.loading?m.a.createElement("div",null,"Loading Daftar Pekerja..."):e.karyawans.map((function(e){if("Pekerja"===e.jabatan||"Pekerja Ahli"===e.jabatan||"Asisten Pekerja"===e.jabatan)return t++,m.a.createElement("tr",{key:e.id},m.a.createElement("td",null,t),m.a.createElement("td",null,e.nama),m.a.createElement("td",null,e.jabatan),m.a.createElement("td",null,e.gaji))}))}},{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(E.a,null,m.a.createElement(f.a,null,m.a.createElement(y.a,null,m.a.createElement(k.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," Daftar Pekerja"),m.a.createElement(v.a,null,m.a.createElement(j.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},m.a.createElement("thead",{align:"center"},m.a.createElement("tr",null,m.a.createElement("th",null,"No"),m.a.createElement("th",null,"Nama Pekerja"),m.a.createElement("th",null,"Jabatan"),m.a.createElement("th",null,"Gaji Harian"))),m.a.createElement("tbody",{align:"center"},this.displayPekerja())),m.a.createElement("nav",null,m.a.createElement(_.a,null,m.a.createElement(P.a,null,m.a.createElement(O.a,{previous:!0,tag:"button"},"Prev")),m.a.createElement(P.a,{active:!0},m.a.createElement(O.a,{tag:"button"},"1")),m.a.createElement(P.a,null,m.a.createElement(O.a,{tag:"button"},"2")),m.a.createElement(P.a,null,m.a.createElement(O.a,{tag:"button"},"3")),m.a.createElement(P.a,null,m.a.createElement(O.a,{tag:"button"},"4")),m.a.createElement(P.a,null,m.a.createElement(O.a,{next:!0,tag:"button"},"Next")))))))))}}]),a}(o.Component),z=g(Object(h.a)(b.a,{name:"getKaryawansQuery"}))(C),S=a(134),x=a(80),N=a(31);function I(){var e=Object(x.a)(["\n\tmutation($id:ID!){\n\t\thapusClient(id: $id){\n\t\t\tnama\n\t\t\talamat\n\t\t\tno_kontak\n\t\t\temail\n\t\t\tid\n\t\t}\n\t}\n"]);return I=function(){return e},e}function $(){var e=Object(x.a)(["\n\tmutation($nama:String!, $alamat:String!, $no_kontak:String!, $email:String!){\n\t\taddClient(nama: $nama, alamat: $alamat, no_kontak:$no_kontak, email:$email){\n\t\t\tnama\n\t\t\talamat\n\t\t\tno_kontak\n\t\t\temail\n\t\t\tid\n\t\t}\n\t}\n"]);return $=function(){return e},e}function D(){var e=Object(x.a)(["\n{\n\tclients {\n\t\tnama\n\t\talamat\n\t\tno_kontak\n\t\temail\n\t\tid\n\t}\n}\n"]);return D=function(){return e},e}var w=Object(N.b)(D()),M=Object(N.b)($()),F=(Object(N.b)(I()),a(66)),B=a(351),T=a(303),q=a(304),A=a(139),Q=a(305),L=a(306),J=a(97),G=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={nama_proyek:"",alamat_proyek:"",budget:0,tanggal_mulai:"",tanggal_selesai:"",client_id:"",modalIsOpen:!1,success:!1},l}return Object(l.a)(a,[{key:"submitForm",value:function(e){e.preventDefault(),this.props.addProyek({variables:{nama:this.state.nama_proyek,alamat:this.state.alamat_proyek,budget:parseInt(this.state.budget),tanggal_mulai:this.state.tanggal_mulai,tanggal_selesai:this.state.tanggal_selesai,client_id:this.state.client_id},refetchQueries:[{query:S.c}]})}},{key:"toggleModal",value:function(){this.setState({modalIsOpen:!this.state.modalIsOpen})}},{key:"displayProyek",value:function(){var e=this.props.getProyeksQuery,t=0;return e.loading?m.a.createElement("div",null,"Loading Daftar Proyek..."):e.proyeks.map((function(e){return t++,m.a.createElement("tr",{key:e.id},m.a.createElement("td",null,t),m.a.createElement("td",null,e.nama),m.a.createElement("td",null,e.alamat),m.a.createElement("td",null,e.budget),m.a.createElement("td",null,e.tanggal_mulai),m.a.createElement("td",null,e.tanggal_selesai),m.a.createElement("td",null,e.client.nama),m.a.createElement("td",null,m.a.createElement(u.Link,{to:"/detailproyek/detailproyek/".concat(e.id)},m.a.createElement(F.a,{color:"success",size:"sm"},m.a.createElement("a",null," Lihat ")))))}))}},{key:"displayClient",value:function(){var e=this.props.getClientsQuery;return e.loading?void 0:e.clients.map((function(e){return m.a.createElement("option",{value:e.id},e.nama)}))}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(E.a,null,m.a.createElement(f.a,null,m.a.createElement(y.a,null,m.a.createElement(k.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," Daftar Proyek",m.a.createElement(F.a,{size:"sm",color:"primary",onClick:this.toggleModal.bind(this),className:"float-right mb-0"},m.a.createElement("i",{className:"fa fa-plus"})," Tambah Daftar Proyek")),m.a.createElement(v.a,null,m.a.createElement(j.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},m.a.createElement("thead",{align:"center"},m.a.createElement("tr",null,m.a.createElement("th",null,"No"),m.a.createElement("th",null,"Nama Proyek"),m.a.createElement("th",null,"Alamat Proyek"),m.a.createElement("th",null,"Budget"),m.a.createElement("th",null,"Tanggal Mulai"),m.a.createElement("th",null,"Tanggal Selesai"),m.a.createElement("th",null,"Client"),m.a.createElement("th",null,"Detail Proyek"))),m.a.createElement("tbody",{align:"center"},this.displayProyek())),m.a.createElement("nav",null,m.a.createElement(_.a,null,m.a.createElement(P.a,null,m.a.createElement(O.a,{previous:!0,tag:"button"},"Prev")),m.a.createElement(P.a,{active:!0},m.a.createElement(O.a,{tag:"button"},"1")),m.a.createElement(P.a,null,m.a.createElement(O.a,{tag:"button"},"2")),m.a.createElement(P.a,null,m.a.createElement(O.a,{tag:"button"},"3")),m.a.createElement(P.a,null,m.a.createElement(O.a,{tag:"button"},"4")),m.a.createElement(P.a,null,m.a.createElement(O.a,{next:!0,tag:"button"},"Next")))))))),m.a.createElement(B.a,{isOpen:this.state.modalIsOpen},m.a.createElement(T.a,null,"Form Tambah Proyek"),m.a.createElement(q.a,null,m.a.createElement(A.a,{onSubmit:function(t){e.submitForm(t)}},m.a.createElement(Q.a,null,m.a.createElement(L.a,{htmlFor:"name"},"Nama Proyek"),m.a.createElement(J.a,{type:"text",id:"name",placeholder:"Masukkan Nama Proyek",onChange:function(t){return e.setState({nama_proyek:t.target.value})},required:!0})),m.a.createElement(Q.a,null,m.a.createElement(L.a,{htmlFor:"name"},"Alamat Proyek"),m.a.createElement(J.a,{type:"text",id:"jenis",placeholder:"Masukkan Alamat Proyek",onChange:function(t){return e.setState({alamat_proyek:t.target.value})},required:!0})),m.a.createElement(Q.a,null,m.a.createElement(L.a,{htmlFor:"name"},"Budget"),m.a.createElement(J.a,{type:"number",id:"harga",placeholder:"Masukkan Budget",onChange:function(t){return e.setState({budget:t.target.value})},required:!0})),m.a.createElement(Q.a,null,m.a.createElement(L.a,{htmlFor:"name"},"Tanggal Mulai"),m.a.createElement(J.a,{type:"date",id:"harga",placeholder:"Masukkan Tanggal Mulai",onChange:function(t){return e.setState({tanggal_mulai:t.target.value})},required:!0})),m.a.createElement(Q.a,null,m.a.createElement(L.a,{htmlFor:"name"},"Tanggal Selesai"),m.a.createElement(J.a,{type:"date",id:"harga",placeholder:"Masukkan Tanggal Selesai",onChange:function(t){return e.setState({tanggal_selesai:t.target.value})},required:!0})),m.a.createElement(Q.a,null,m.a.createElement(L.a,{htmlFor:"name"},"Nama Client"),m.a.createElement(J.a,{type:"select",name:"nama_client",onChange:function(t){return e.setState({client_id:t.target.value})},required:!0},m.a.createElement("option",{value:""},"Pilih Client"),this.displayClient())),m.a.createElement(F.a,{type:"submit",color:"primary",onClick:this.toggleModal.bind(this)},"Submit"),m.a.createElement(F.a,{color:"danger",onClick:this.toggleModal.bind(this)},"Batal")))))}}]),a}(o.Component),H=g(Object(h.a)(S.c,{name:"getProyeksQuery"}),Object(h.a)(S.a,{name:"addProyek"}),Object(h.a)(w,{name:"getClientsQuery"}))(G),K=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(e){var l;return Object(n.a)(this,a),(l=t.call(this,e)).state={nama_client:"",alamat_client:"",no_kontak_client:"",email_client:"",modalIsOpen:!1,success:!1},l}return Object(l.a)(a,[{key:"submitForm",value:function(){this.props.addClient({variables:{nama:this.state.nama_client,alamat:this.state.alamat_client,no_kontak:this.state.no_kontak_client,email:this.state.email_client},refetchQueries:[{query:w}]})}},{key:"displayClient",value:function(){var e=this.props.getClientsQuery,t=0;return e.loading?m.a.createElement("div",null,"Loading Daftar Client..."):e.clients.map((function(e){return t++,m.a.createElement("tr",{key:e.id},m.a.createElement("td",null,t),m.a.createElement("td",null,e.nama),m.a.createElement("td",null,e.alamat),m.a.createElement("td",null,e.no_kontak),m.a.createElement("td",null,e.email),m.a.createElement("td",null,m.a.createElement(F.a,{color:"warning",size:"sm"},m.a.createElement("a",null," ubah "))),m.a.createElement("td",null,m.a.createElement(F.a,{color:"danger",size:"sm"},m.a.createElement("a",null," hapus "))))}))}},{key:"toggleModal",value:function(){this.setState({modalIsOpen:!this.state.modalIsOpen})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(E.a,null,m.a.createElement(f.a,null,m.a.createElement(y.a,null,m.a.createElement(k.a,null,m.a.createElement("i",{className:"fa fa-align-justify"})," Daftar Client",m.a.createElement(F.a,{size:"sm",color:"primary",onClick:this.toggleModal.bind(this),className:"float-right mb-0"},m.a.createElement("i",{className:"fa fa-plus"})," Tambah Client")),m.a.createElement(v.a,null,m.a.createElement(j.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},m.a.createElement("thead",{align:"center"},m.a.createElement("tr",null,m.a.createElement("th",null,"No"),m.a.createElement("th",null,"Nama Client"),m.a.createElement("th",null,"alamat"),m.a.createElement("th",null,"no_kontak"),m.a.createElement("th",null,"email"),m.a.createElement("th",null,"ubah"),m.a.createElement("th",null,"hapus"))),m.a.createElement("tbody",{align:"center"},this.displayClient())),m.a.createElement("nav",null,m.a.createElement(_.a,null,m.a.createElement(P.a,null,m.a.createElement(O.a,{previous:!0,tag:"button"},"Prev")),m.a.createElement(P.a,{active:!0},m.a.createElement(O.a,{tag:"button"},"1")),m.a.createElement(P.a,null,m.a.createElement(O.a,{tag:"button"},"2")),m.a.createElement(P.a,null,m.a.createElement(O.a,{tag:"button"},"3")),m.a.createElement(P.a,null,m.a.createElement(O.a,{tag:"button"},"4")),m.a.createElement(P.a,null,m.a.createElement(O.a,{next:!0,tag:"button"},"Next")))))))),m.a.createElement(B.a,{isOpen:this.state.modalIsOpen},m.a.createElement(T.a,null,"Form Tambah Client"),m.a.createElement(q.a,null,m.a.createElement(A.a,{onSubmit:function(t){e.submitForm(t)}},m.a.createElement(Q.a,null,m.a.createElement(L.a,{htmlFor:"name"},"Nama Client"),m.a.createElement(J.a,{type:"text",id:"name",placeholder:"Masukkan Nama Client",onChange:function(t){return e.setState({nama_client:t.target.value})},required:!0})),m.a.createElement(Q.a,null,m.a.createElement(L.a,{htmlFor:"name"},"Alamat Client"),m.a.createElement(J.a,{type:"text",id:"jenis",placeholder:"Masukkan Jenis Barang",onChange:function(t){return e.setState({alamat_client:t.target.value})},required:!0})),m.a.createElement(Q.a,null,m.a.createElement(L.a,{htmlFor:"name"},"No Kontak"),m.a.createElement(J.a,{type:"text",id:"jenis",placeholder:"Masukkan Jenis Barang",onChange:function(t){return e.setState({no_kontak_client:t.target.value})},required:!0})),m.a.createElement(Q.a,null,m.a.createElement(L.a,{htmlFor:"name"},"Email"),m.a.createElement(J.a,{type:"text",id:"jenis",placeholder:"Masukkan Jenis Barang",onChange:function(t){return e.setState({email_client:t.target.value})},required:!0})),m.a.createElement(F.a,{type:"submit",color:"primary",onClick:this.toggleModal.bind(this)},"Submit"),m.a.createElement(F.a,{color:"danger",onClick:this.toggleModal.bind(this)},"Batal")))))}}]),a}(o.Component),U=g(Object(h.a)(w,{name:"getClientsQuery"}),Object(h.a)(M,{name:"addClient"}))(K),R=m.a.lazy((function(){return a.e(43).then(a.bind(null,316))})),W=m.a.lazy((function(){return a.e(27).then(a.bind(null,317))})),V=m.a.lazy((function(){return a.e(44).then(a.bind(null,343))})),X=m.a.lazy((function(){return a.e(28).then(a.bind(null,318))})),Y=m.a.lazy((function(){return Promise.all([a.e(0),a.e(21)]).then(a.bind(null,319))})),Z=m.a.lazy((function(){return Promise.all([a.e(0),a.e(13)]).then(a.bind(null,344))})),ee=m.a.lazy((function(){return a.e(45).then(a.bind(null,352))})),te=m.a.lazy((function(){return a.e(19).then(a.bind(null,349))})),ae=m.a.lazy((function(){return Promise.all([a.e(0),a.e(20)]).then(a.bind(null,345))})),ne=m.a.lazy((function(){return Promise.all([a.e(0),a.e(23)]).then(a.bind(null,320))})),le=m.a.lazy((function(){return a.e(46).then(a.bind(null,321))})),re=m.a.lazy((function(){return Promise.all([a.e(0),a.e(32)]).then(a.bind(null,346))})),ie=m.a.lazy((function(){return a.e(33).then(a.bind(null,322))})),oe=m.a.lazy((function(){return a.e(47).then(a.bind(null,323))})),me=m.a.lazy((function(){return a.e(48).then(a.bind(null,324))})),ce=m.a.lazy((function(){return a.e(24).then(a.bind(null,325))})),ue=m.a.lazy((function(){return Promise.all([a.e(0),a.e(34)]).then(a.bind(null,350))})),se=m.a.lazy((function(){return a.e(49).then(a.bind(null,326))})),de=m.a.lazy((function(){return Promise.all([a.e(0),a.e(22)]).then(a.bind(null,327))})),pe=m.a.lazy((function(){return Promise.all([a.e(0),a.e(14)]).then(a.bind(null,353))})),he=m.a.lazy((function(){return a.e(50).then(a.bind(null,328))})),ge=m.a.lazy((function(){return Promise.all([a.e(2),a.e(35)]).then(a.bind(null,354))})),be=m.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(4),a.e(17)]).then(a.bind(null,329))})),Ee=m.a.lazy((function(){return a.e(51).then(a.bind(null,330))})),fe=m.a.lazy((function(){return a.e(52).then(a.bind(null,331))})),ye=m.a.lazy((function(){return a.e(36).then(a.bind(null,332))})),ke=m.a.lazy((function(){return a.e(53).then(a.bind(null,333))})),ve=m.a.lazy((function(){return a.e(38).then(a.bind(null,334))})),je=m.a.lazy((function(){return a.e(39).then(a.bind(null,335))})),_e=m.a.lazy((function(){return a.e(55).then(a.bind(null,355))})),Pe=m.a.lazy((function(){return Promise.all([a.e(4),a.e(58)]).then(a.bind(null,336))})),Oe=[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:be},{path:"/theme",exact:!0,name:"Theme",component:Pe},{path:"/theme/colors",name:"Colors",component:Pe},{path:"/theme/typography",name:"Typography",component:m.a.lazy((function(){return a.e(59).then(a.bind(null,337))}))},{path:"/base",exact:!0,name:"Base",component:W},{path:"/base/cards",name:"Cards",component:W},{path:"/base/forms",name:"Forms",component:Z},{path:"/base/switches",name:"Switches",component:oe},{path:"/base/tables",name:"Tables",component:me},{path:"/base/tabs",name:"Tabs",component:ce},{path:"/base/breadcrumbs",name:"Breadcrumbs",component:R},{path:"/base/carousels",name:"Carousel",component:V},{path:"/base/collapses",name:"Collapse",component:X},{path:"/base/dropdowns",name:"Dropdowns",component:Y},{path:"/base/jumbotrons",name:"Jumbotrons",component:ee},{path:"/base/list-groups",name:"List Groups",component:te},{path:"/base/navbars",name:"Navbars",component:ae},{path:"/base/navs",name:"Navs",component:ne},{path:"/base/paginations",name:"Paginations",component:le},{path:"/base/popovers",name:"Popovers",component:re},{path:"/base/progress-bar",name:"Progress Bar",component:ie},{path:"/base/tooltips",name:"Tooltips",component:ue},{path:"/buttons",exact:!0,name:"Buttons",component:he},{path:"/buttons/buttons",name:"Buttons",component:he},{path:"/buttons/button-dropdowns",name:"Button Dropdowns",component:de},{path:"/buttons/button-groups",name:"Button Groups",component:pe},{path:"/buttons/brand-buttons",name:"Brand Buttons",component:se},{path:"/icons",exact:!0,name:"Icons",component:Ee},{path:"/icons/coreui-icons",name:"CoreUI Icons",component:Ee},{path:"/icons/flags",name:"Flags",component:fe},{path:"/icons/font-awesome",name:"Font Awesome",component:ye},{path:"/icons/simple-line-icons",name:"Simple Line Icons",component:ke},{path:"/notifications",exact:!0,name:"Notifications",component:ve},{path:"/notifications/alerts",name:"Alerts",component:ve},{path:"/notifications/badges",name:"Badges",component:je},{path:"/notifications/modals",name:"Modals",component:_e},{path:"/widgets",name:"Widgets",component:m.a.lazy((function(){return Promise.all([a.e(2),a.e(18)]).then(a.bind(null,347))}))},{path:"/charts",name:"Charts",component:ge},{path:"/users",exact:!0,name:"Users",component:m.a.lazy((function(){return a.e(42).then(a.bind(null,338))}))},{path:"/users/:id",exact:!0,name:"User Details",component:m.a.lazy((function(){return a.e(41).then(a.bind(null,342))}))},{path:"/user/akun",exact:!0,name:"Akun",component:m.a.lazy((function(){return Promise.all([a.e(1),a.e(54)]).then(a.bind(null,339))}))},{path:"/profile/profile",exact:!0,name:"Profile",component:m.a.lazy((function(){return Promise.all([a.e(1),a.e(25)]).then(a.bind(null,356))}))},{path:"/daftarproyek/daftarproyek",exact:!0,name:"Daftar Proyek",component:H},{path:"/daftarpekerja/daftarpekerja",exact:!0,name:"Daftar Pekerja",component:z},{path:"/daftarclient/daftarclient",exact:!0,name:"Daftar Client",component:U},{path:"/detailproyek/detailproyek/:id",exact:!0,name:"Detail Proyek",component:m.a.lazy((function(){return a.e(29).then(a.bind(null,357))}))},{path:"/detailpekerjaan/detailpekerjaan/:id",exact:!0,name:"Detail Pekerjaan",component:m.a.lazy((function(){return a.e(37).then(a.bind(null,340))}))}],Ce=m.a.lazy((function(){return a.e(15).then(a.bind(null,312))})),ze=m.a.lazy((function(){return a.e(31).then(a.bind(null,313))})),Se=m.a.lazy((function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,314))})),xe=function(e){Object(r.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(n.a)(this,a);for(var l=arguments.length,r=new Array(l),i=0;i<l;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).loading=function(){return m.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},e}return Object(l.a)(a,[{key:"signOut",value:function(e){e.preventDefault(),localStorage.removeItem("username"),localStorage.removeItem("password"),localStorage.removeItem("nama"),localStorage.removeItem("jabatan"),localStorage.removeItem("alamat"),localStorage.removeItem("noHp"),localStorage.removeItem("avatar"),localStorage.removeItem("divisi"),localStorage.removeItem("loggedIn"),this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"app"},m.a.createElement(d.d,{fixed:!0},m.a.createElement(o.Suspense,{fallback:this.loading()},m.a.createElement(Se,{onLogout:function(t){return e.signOut(t)}}))),m.a.createElement("div",{className:"app-body"},m.a.createElement(d.f,{fixed:!0,display:"lg"},m.a.createElement(d.i,null),m.a.createElement(d.h,null),m.a.createElement(o.Suspense,null,m.a.createElement(d.k,Object.assign({navConfig:p},this.props,{router:u}))),m.a.createElement(d.g,null),m.a.createElement(d.j,null)),m.a.createElement("main",{className:"main"},m.a.createElement(d.b,{appRoutes:Oe,router:u}),m.a.createElement(s.a,{fluid:!0},m.a.createElement(o.Suspense,{fallback:this.loading()},m.a.createElement(c.g,null,Oe.map((function(e,t){return e.component?m.a.createElement(c.d,{key:t,path:e.path,exact:e.exact,name:e.name,render:function(t){return m.a.createElement(e.component,t)}}):null})),m.a.createElement(c.c,{from:"/",to:"/daftarproyek/daftarproyek"}))))),m.a.createElement(d.a,{fixed:!0},m.a.createElement(o.Suspense,{fallback:this.loading()},m.a.createElement(Ce,null)))),m.a.createElement(d.c,null,m.a.createElement(o.Suspense,{fallback:this.loading()},m.a.createElement(ze,null))))}}]),a}(o.Component);t.default=xe}}]);
//# sourceMappingURL=26.d1fc90c6.chunk.js.map