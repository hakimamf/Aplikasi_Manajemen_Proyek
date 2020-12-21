(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[80],{344:function(e,a,t){"use strict";t.r(a);var n=t(23),l=t(24),r=t(26),c=t(25),i=t(2),u=t.n(i),m=t(27),o=t(377),s=t(67),E=t(75),g=t.n(E),h=t(69),p=t(64),d=t(107),b=t(108),v=t(140),f=t(303),B=t(141),k=t(304),y=t(305),j=t(306),D=t(307),C=t(83),M=t(81),S=t(82),O=t(71),N=t(72),_=t(73),T=t(68),F=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={nama_barang:"",jenis_barang:"",satuan:"",harga:"",modalIsOpen:!1,success:!1},l}return Object(l.a)(t,[{key:"toggleModal",value:function(){this.setState({modalIsOpen:!this.state.modalIsOpen})}},{key:"submitForm",value:function(e){e.preventDefault(),this.toggleModal(),this.props.addBarangMutation({variables:{nama_barang:this.state.nama_barang,jenis_barang:this.state.jenis_barang,satuan:this.state.satuan,harga:parseInt(this.state.harga)},refetchQueries:[{query:h.t}]}),g.a.fire({position:"center",icon:"success",title:"Data Barang Berhasil Disimpan",showConfirmButton:!0})}},{key:"onDelete",value:function(e){var a=this;g.a.fire({title:"Apakah anda Yakin?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ya, Saya Yakin!"}).then((function(t){t.isConfirmed&&(a.props.hapusBarangMutation({variables:{id:e},refetchQueries:[{query:h.t}]}),g.a.fire("Dihapus!","Data Barang Telah Dihapus","success"))}))}},{key:"displayBarang",value:function(){var e=this,a=this.props.getBarangsQuery,t=0;return a.loading?u.a.createElement("div",null,"Loading Daftar Barang..."):a.barangs.map((function(a){return t++,u.a.createElement("tr",{key:a.id},u.a.createElement("td",null,t),u.a.createElement("td",null,a.nama_barang),u.a.createElement("td",null,a.jenis_barang),u.a.createElement("td",null,a.satuan),u.a.createElement("td",null,a.harga),u.a.createElement("td",null,u.a.createElement(m.Link,{to:"/barang/editBarang/".concat(a.id)},u.a.createElement(p.a,{color:"success",size:"sm"},u.a.createElement("i",{className:"fa fa-pencil"})))),u.a.createElement("td",null,u.a.createElement(p.a,{onClick:e.onDelete.bind(e,a.id),color:"danger",size:"sm"},u.a.createElement("i",{className:"fa fa-trash"}))))}))}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(d.a,null,u.a.createElement(b.a,null,u.a.createElement(v.a,null,u.a.createElement(f.a,null,u.a.createElement("i",{className:"fa fa-align-justify"})," Data Barang",u.a.createElement(p.a,{size:"sm",color:"primary",className:"float-right mb-0",onClick:this.toggleModal.bind(this)},u.a.createElement("i",{className:"fa fa-plus"})," Tambah Data Barang")),u.a.createElement(B.a,null,u.a.createElement(k.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},u.a.createElement("thead",{align:"center"},u.a.createElement("tr",null,u.a.createElement("th",null,"No"),u.a.createElement("th",null,"Nama Barang"),u.a.createElement("th",null,"Jenis Barang"),u.a.createElement("th",null,"Satuan"),u.a.createElement("th",null,"Harga (Rp)"),u.a.createElement("th",null,"Edit"),u.a.createElement("th",null,"Hapus"))),u.a.createElement("tbody",{align:"center"},this.displayBarang())),u.a.createElement("nav",null,u.a.createElement(y.a,null,u.a.createElement(j.a,null,u.a.createElement(D.a,{previous:!0,tag:"button"},"Prev")),u.a.createElement(j.a,{active:!0},u.a.createElement(D.a,{tag:"button"},"1")),u.a.createElement(j.a,null,u.a.createElement(D.a,{tag:"button"},"2")),u.a.createElement(j.a,null,u.a.createElement(D.a,{tag:"button"},"3")),u.a.createElement(j.a,null,u.a.createElement(D.a,{tag:"button"},"4")),u.a.createElement(j.a,null,u.a.createElement(D.a,{next:!0,tag:"button"},"Next")))))))),u.a.createElement(C.a,{isOpen:this.state.modalIsOpen},u.a.createElement(M.a,null,"Form Tambah Data Barang"),u.a.createElement(S.a,null,u.a.createElement(O.a,{onSubmit:function(a){e.submitForm(a)}},u.a.createElement(N.a,null,u.a.createElement(_.a,{htmlFor:"name"},"Nama Barang"),u.a.createElement(T.a,{type:"text",id:"name",placeholder:"Masukkan Nama Barang",onChange:function(a){return e.setState({nama_barang:a.target.value})},required:!0})),u.a.createElement(N.a,null,u.a.createElement(_.a,{htmlFor:"name"},"Jenis Barang"),u.a.createElement(T.a,{type:"text",id:"jenis",placeholder:"Masukkan Jenis Barang",onChange:function(a){return e.setState({jenis_barang:a.target.value})},required:!0})),u.a.createElement(N.a,null,u.a.createElement(_.a,{htmlFor:"name"},"Satuan"),u.a.createElement(T.a,{type:"select",name:"satuan",id:"satuan",onChange:function(a){return e.setState({satuan:a.target.value})}},u.a.createElement("option",null,"Satuan"),u.a.createElement("option",{value:"Kg"},"Kg"),u.a.createElement("option",{value:"Buah"},"Buah"),u.a.createElement("option",{value:"Meter"},"Meter"),u.a.createElement("option",{value:"Lembar"},"Lembar"),u.a.createElement("option",{value:"Liter"},"Liter"),u.a.createElement("option",{value:"Sak"},"Sak"),u.a.createElement("option",{value:"m"},"m"),u.a.createElement("option",{value:"m2"},"m2"),u.a.createElement("option",{value:"m3"},"m3"),u.a.createElement("option",{value:"Roll"},"Roll"),u.a.createElement("option",{value:"Kardus"},"Kardus"),u.a.createElement("option",{value:"Batang"},"Batang"),u.a.createElement("option",{value:"Truk"},"Truk"),u.a.createElement("option",{value:"Drum"},"Drum"),u.a.createElement("option",{value:"Takaran"},"Takaran"),u.a.createElement("option",{value:"Takaran"},"Unit"))),u.a.createElement(N.a,null,u.a.createElement(_.a,{htmlFor:"name"},"Harga Barang"),u.a.createElement(T.a,{type:"number",id:"harga",placeholder:"Masukkan Harga Barang",onChange:function(a){return e.setState({harga:a.target.value})},required:!0})),u.a.createElement(p.a,{type:"submit",color:"primary"},"Submit"),u.a.createElement(p.a,{color:"danger",onClick:this.toggleModal.bind(this)},"Batal")))))}}]),t}(i.Component);a.default=s(Object(o.a)(h.t,{name:"getBarangsQuery"}),Object(o.a)(h.b,{name:"addBarangMutation"}),Object(o.a)(h.K,{name:"hapusBarangMutation"}))(F)}}]);
//# sourceMappingURL=80.a1bd07ca.chunk.js.map