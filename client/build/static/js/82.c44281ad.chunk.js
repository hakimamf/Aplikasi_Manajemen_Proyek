(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[82],{366:function(e,a,t){"use strict";t.r(a);var n=t(23),l=t(24),r=t(26),i=t(25),m=t(2),u=t.n(m),s=t(377),c=t(67),o=t(75),h=t.n(o),d=t(69),p=t(64),E=t(107),g=t(108),b=t(140),v=t(303),k=t(141),f=t(304),y=t(305),j=t(306),I=t(307),P=t(83),O=t(81),_=t(82),C=t(71),D=t(72),N=t(73),T=t(68),w=function(e){Object(r.a)(t,e);var a=Object(i.a)(t);function t(e){var l;return Object(n.a)(this,t),(l=a.call(this,e)).state={nama:"",barang_id:"",akun_id:"",jumlah:0,modalIsOpen:!1,harga:0,sewa:0},l}return Object(l.a)(t,[{key:"displayPemeliharaan",value:function(){var e=this,a=this.props.getPemeliharaansQuery,t=0;return a.loading?void 0:a.pemeliharaans.map((function(a){return t++,u.a.createElement("tr",{key:a.id},u.a.createElement("td",null,t),u.a.createElement("td",null,a.inventaris.barang.nama_barang),u.a.createElement("td",null,a.jumlah),u.a.createElement("td",null,a.tanggal),u.a.createElement("td",null,a.akun.karyawan.nama),u.a.createElement("td",null,a.status),u.a.createElement("td",null,u.a.createElement(p.a,{onClick:e.onDelete.bind(e,a.id),color:"danger",size:"sm"},u.a.createElement("i",{className:"fa fa-trash"}))))}))}},{key:"onDelete",value:function(e){var a=this;h.a.fire({title:"Apakah anda Yakin?",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Ya, Saya Yakin!"}).then((function(t){t.isConfirmed&&(a.props.hapusPemeliharaan({variables:{id:e},refetchQueries:[{query:d.x}]}),h.a.fire("Dihapus!","Pemeliharaan Telah Dihapus","success"))}))}},{key:"displayInventaris",value:function(){var e=this.props.getAllInventarisQuery;return e.loading?u.a.createElement("h4",null,"Loading Inventaris..."):e.allInventaris.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.barang.nama_barang)}))}},{key:"displayTeknisi",value:function(){var e=this.props.getAkunsQuery;return e.loading?u.a.createElement("div",null,"Loading Akun..."):e.akuns.map((function(e){if("Teknisi"===e.karyawan.jabatan)return u.a.createElement("option",{key:e.id,value:e.id},e.karyawan.nama)}))}},{key:"toggleModal",value:function(){this.setState({modalIsOpen:!this.state.modalIsOpen})}},{key:"submitForm",value:function(e){e.preventDefault(),this.toggleModal(),this.props.addPemeliharaan({variables:{jumlah:parseInt(this.state.jumlah),tanggal:(new Date).toLocaleDateString(),status:"Diperbaiki",akun_id:this.state.akun_id,inventaris_id:this.state.barang_id},refetchQueries:[{query:d.x}]}),this.props.updateJumlahDiperbaikiInventaris({variables:{barang_id:this.state.barang_id,jumlah_diperbaiki:parseInt(this.state.jumlah)},refetchQueries:[{query:d.r}]}),h.a.fire({position:"center",icon:"success",title:"Pemeliharaan Baru Berhasil Disimpan",showConfirmButton:!0})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(E.a,null,u.a.createElement(g.a,null,u.a.createElement(b.a,null,u.a.createElement(v.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),"Pemeliharaan Inventaris",u.a.createElement(p.a,{size:"sm",color:"primary",className:"float-right mb-0",onClick:this.toggleModal.bind(this)},u.a.createElement("i",{className:"fa fa-plus"})," Tambah Pemeliharaan")),u.a.createElement(k.a,null,u.a.createElement(f.a,{hover:!0,bordered:!0,striped:!0,responsive:!0,size:"sm"},u.a.createElement("thead",{align:"center"},u.a.createElement("tr",null,u.a.createElement("th",null,"No"),u.a.createElement("th",null,"Nama Inventaris"),u.a.createElement("th",null,"Jumlah"),u.a.createElement("th",null,"Tanggal"),u.a.createElement("th",null,"Teknisi"),u.a.createElement("th",null,"Status"),u.a.createElement("th",null,"Hapus"))),u.a.createElement("tbody",{align:"center"},this.displayPemeliharaan())),u.a.createElement("nav",null,u.a.createElement(y.a,null,u.a.createElement(j.a,null,u.a.createElement(I.a,{previous:!0,tag:"button"},"Prev")),u.a.createElement(j.a,{active:!0},u.a.createElement(I.a,{tag:"button"},"1")),u.a.createElement(j.a,null,u.a.createElement(I.a,{tag:"button"},"2")),u.a.createElement(j.a,null,u.a.createElement(I.a,{tag:"button"},"3")),u.a.createElement(j.a,null,u.a.createElement(I.a,{tag:"button"},"4")),u.a.createElement(j.a,null,u.a.createElement(I.a,{next:!0,tag:"button"},"Next")))))))),u.a.createElement(P.a,{isOpen:this.state.modalIsOpen},u.a.createElement(O.a,null,"From Tambah Pemeliharaan"),u.a.createElement(_.a,null,u.a.createElement(C.a,{onSubmit:function(a){e.submitForm(a)}},u.a.createElement(D.a,null,u.a.createElement(N.a,{htmlFor:"name"},"Nama Inventaris"),u.a.createElement(T.a,{type:"select",name:"nama",onChange:function(a){return e.setState({barang_id:a.target.value})},id:"nama",required:!0},u.a.createElement("option",{value:""},"Pilih Inventaris"),this.displayInventaris())),u.a.createElement(D.a,null,u.a.createElement(N.a,{htmlFor:"name"},"Jumlah"),u.a.createElement(T.a,{type:"number",id:"jumlah",placeholder:"Masukkan Jumlah Peralatan",onChange:function(a){return e.setState({jumlah:a.target.value})},required:!0})),u.a.createElement(D.a,null,u.a.createElement(N.a,{htmlFor:"name"},"Nama Teknisi"),u.a.createElement(T.a,{type:"select",name:"nama",onChange:function(a){return e.setState({akun_id:a.target.value})},id:"nama",required:!0},u.a.createElement("option",{value:""},"Pilih Teknisi"),this.displayTeknisi())),u.a.createElement(p.a,{type:"submit",color:"primary"},"Submit"),u.a.createElement(p.a,{color:"danger",onClick:this.toggleModal.bind(this)},"Batal")))))}}]),t}(m.Component);a.default=c(Object(s.a)(d.x,{name:"getPemeliharaansQuery"}),Object(s.a)(d.q,{name:"getAkunsQuery"}),Object(s.a)(d.g,{name:"addPemeliharaan"}),Object(s.a)(d.N,{name:"hapusPemeliharaan"}),Object(s.a)(d.t,{name:"getBarangsQuery"}),Object(s.a)(d.W,{name:"updateJumlahDiperbaikiInventaris"}),Object(s.a)(d.r,{name:"getAllInventarisQuery"}))(w)}}]);
//# sourceMappingURL=82.c44281ad.chunk.js.map