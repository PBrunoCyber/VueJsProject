(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28848479"],{1354:function(e,i){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"user_id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"clientForUserId"},arguments:[{kind:"Argument",name:{kind:"Name",value:"user_id"},value:{kind:"Variable",name:{kind:"Name",value:"user_id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cidade"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"estado"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"telefone"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logradouro"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imagem"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:180}};a.loc.source={body:"query($user_id: Int!){\r\n clientForUserId(user_id:$user_id){\r\n    id\r\n    cidade\r\n    estado\r\n    telefone\r\n  \tlogradouro\r\n    imagem\r\n    user{\r\n      id\r\n      name\r\n    }\r\n  }\r\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,i){if("FragmentSpread"===e.kind)i.add(e.name.value);else if("VariableDefinition"===e.kind){var a=e.type;"NamedType"===a.kind&&i.add(a.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){n(e,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){n(e,i)}),e.definitions&&e.definitions.forEach(function(e){n(e,i)})}var t={};(function(){a.definitions.forEach(function(e){if(e.name){var i=new Set;n(e,i),t[e.name.value]=i}})})(),e.exports=a},"6c63":function(e,i){var a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"user_envia_id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"propostaEnvia"},arguments:[{kind:"Argument",name:{kind:"Name",value:"user_envia_id"},value:{kind:"Variable",name:{kind:"Name",value:"user_envia_id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"titulo"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"valor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"local"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"descricao"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"tipo"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"finalizar"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user_envia"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"cidade"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"estado"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imagem"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"telefone"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logradouro"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"user_recebe"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"email"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"imagem"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ramo"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"descricao"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"cidade"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"estado"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"telefone"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"logradouro"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"category"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"orcamento"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"data"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"horaInicio"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"horaFim"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"descricao"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"proposta"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}]}}]}}],loc:{start:0,end:719}};a.loc.source={body:"\r\nquery\r\n($user_envia_id: Int!)\r\n{\r\n  propostaEnvia(user_envia_id:$user_envia_id){\r\n    id \r\n    titulo\r\n    valor\r\n    local\r\n    descricao\r\n    tipo\r\n    status\r\n    finalizar\r\n    user_envia{\r\n      id\r\n      user{\r\n        id\r\n        name\r\n      }\r\n      cidade\r\n      estado\r\n      imagem\r\n      telefone\r\n      logradouro\r\n    }\r\n    user_recebe{\r\n      id\r\n      user{\r\n        id\r\n        name\r\n        email\r\n      }\r\n      imagem\r\n      ramo\r\n      descricao\r\n      cidade\r\n      estado\r\n      telefone\r\n      logradouro\r\n      category{\r\n        name\r\n      }\r\n    }\r\n    orcamento{\r\n      id\r\n      data\r\n      horaInicio\r\n      horaFim\r\n      descricao\r\n      proposta{\r\n        id\r\n      }\r\n    }\r\n  }\r\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};function n(e,i){if("FragmentSpread"===e.kind)i.add(e.name.value);else if("VariableDefinition"===e.kind){var a=e.type;"NamedType"===a.kind&&i.add(a.name.value)}e.selectionSet&&e.selectionSet.selections.forEach(function(e){n(e,i)}),e.variableDefinitions&&e.variableDefinitions.forEach(function(e){n(e,i)}),e.definitions&&e.definitions.forEach(function(e){n(e,i)})}var t={};(function(){a.definitions.forEach(function(e){if(e.name){var i=new Set;n(e,i),t[e.name.value]=i}})})(),e.exports=a},"7d68":function(e,i,a){},"87d0":function(e,i,a){"use strict";a.r(i);var n=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",[n("h3",{staticClass:"title is-3 level-item"},[e._v("Abaixo estão seus pedidos")]),n("br"),this.cli.clientForUserId[0]?n("div",[n("ApolloQuery",{attrs:{query:a("6c63"),variables:{user_envia_id:this.cli.clientForUserId[0].id}},scopedSlots:e._u([{key:"default",fn:function(i){var t=i.result,s=t.data,d=(t.loading,i.isLoading);return[d?n("div",[e._v("Loading...")]):n("div",e._l(s.propostaEnvia,function(i){return n("div",{key:i.id},[n("div",{staticClass:"column is-12-dektop is-full-mobile"},[n("div",{staticClass:"card"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-3-desktop is-full-mobile"},[n("div",{staticClass:"column"},[n("div",{staticClass:"level-item"},[n("img",{staticClass:"img",attrs:{width:"80%",height:"10%",src:"http://graphql.me/imagem/"+i.user_recebe.imagem,alt:"Placeholder image"}})]),n("div",{staticClass:"title is-5 level-item"},[n("div",{staticClass:"level-item"},[e._v(e._s(i.user_recebe.user.name))])]),n("div",[n("router-link",{attrs:{to:"/page/cliente/categories/profissional/"+i.user_recebe.id}},[n("button",{staticClass:"btn-7 column is-12-desktop is-full-mobile"},[e._v("Ver Perfil\n                          ")])])],1)])]),n("div",{staticClass:"column is-9-desktop is-full-mobile"},[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-6-desktop"},[n("div",{staticClass:"column"},[n("div",{staticClass:"title is-3"},[e._v(e._s(i.titulo))])])]),n("div",{staticClass:"column is-offset-2"},[n("div",{staticClass:"column"},[0===i.status?n("div",{staticClass:"espera"},[e._v("Esperando resposta")]):e._e(),1===i.status?n("div",{staticClass:"aceitou"},[e._v("Pedido aceito :)")]):e._e(),2===i.status?n("div",{staticClass:"recusou"},[e._v("Pedido Recusado :(")]):e._e(),3===i.status?n("div",{staticClass:"finalizou"},[e._v("Pedido Finalizado!")]):e._e(),4===i.status?n("div",{staticClass:"finalizou"},[e._v("Usuário Avaliado!")]):e._e()])])]),n("div",{staticClass:"column is-9-desktop"},[n("div",{staticClass:"title is-5"},[n("b",[e._v("Local do serviço:")]),e._v("\n                        "+e._s(i.local)+"\n                      ")])]),n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-6-desktop"},[n("div",{staticClass:"column"},[n("div",{staticClass:"title is-5"},[n("b",[e._v("Valor:")]),e._v("\n                            "+e._s(i.valor)+"\n                          ")])])]),n("div",{staticClass:"column"},[n("div",{staticClass:"column"},[n("div",{staticClass:"title is-5"},[n("b",[e._v("Tipo do serviço:")]),e._v("\n                            "+e._s(i.tipo)+"\n                          ")])])])]),n("div",{staticClass:"column is-9-desktop"},[n("div",{staticClass:"title is-5",staticStyle:{"text-align":"justify"}},[n("b",[e._v("Descrição do serviço:")]),e._v("\n                        "+e._s(i.descricao)+"\n                      ")])])])]),n("div",{staticClass:"column is-12-desktop is-full-mobile"},[0===i.status?n("div",{staticClass:"column"},[0===i.status?n("div",{staticClass:"title is-4 obsEspera",staticStyle:{"text-align":"justify"}},[e._v("OBS: Espere um pouco até o "+e._s(i.user_recebe.user.name)+" poder analisar sua proposta!")]):e._e()]):e._e(),i.orcamento[0]&&1===i.status?n("div",[n("div",{staticClass:"columns"},[n("div",{staticClass:"column is-8-desktop"},[n("div",{staticClass:"title is-4 obsAceita",staticStyle:{"text-align":"center"}},[e._v("O (a) "+e._s(i.user_recebe.user.name)+" aceitou sua proposta entre em contato com ele através do número: "+e._s(i.user_recebe.telefone))])]),n("div",{staticClass:"column"},[n("router-link",{attrs:{to:"/page/cliente/pedidos/orcamento/"+i.orcamento[0].id}},[n("button",{staticClass:"btn-15 column is-12-desktop is-full-mobile"},[e._v("Ver disponibilidade")])])],1)])]):e._e(),i.orcamento[0]||1!==i.status?e._e():n("div",[n("div",{staticClass:"column"},[n("div",{staticClass:"title is-4 obsEspera",staticStyle:{"text-align":"center"}},[e._v("OBS: O pedido foi aceito, mas ele não enviou ainda sua disponibilidade! Contate ele pelo telefone "+e._s(i.user_recebe.telefone)+" ou pelo email "+e._s(i.user_recebe.user.email))])])]),2===i.status?n("div",{staticClass:"column"},[n("div",{staticClass:"title is-4 obsRecusa",staticStyle:{"text-align":"center"}},[e._v("O(A) "+e._s(i.user_recebe.user.name)+" infelizmente recusou seu pedido :(")])]):e._e(),3===i.status?n("div",{staticClass:"column is-12-desktop is-full-mobile"},[n("div",{staticClass:"title is-4 obsFinaliza",staticStyle:{"text-align":"center"}},[e._v("Esse pedido foi finalizado com sucesso!")]),n("img",{staticClass:"column is-2-desktop is-12-mobile is-offset-5",attrs:{src:a("f54f"),alt:"cover image"}}),n("router-link",{attrs:{to:"/page/cliente/pedidos/avaliacao/"+i.id}},[n("button",{staticClass:"btn-15 column is-12-desktop is-full-mobile"},[e._v("Avaliar profissional")])]),n("div",{staticClass:"column"},[n("router-link",{attrs:{to:"/page/cliente/pedidos/orcamento/"+i.orcamento[0].id}},[n("button",{staticClass:"btn-15 column is-12-desktop is-full-mobile"},[e._v("Ver disponibilidade")])])],1)],1):e._e(),4===i.status?n("div",{staticClass:"column is-12-desktop is-full-mobile"},[n("img",{staticClass:"column is-2-desktop is-12-mobile is-offset-5",attrs:{src:a("f54f"),alt:"cover image"}}),n("div",{staticClass:"title is-4 obsFinaliza",staticStyle:{"text-align":"center"}},[e._v("Usuário foi avaliado para esse serviço veja o perfil dele!")])]):e._e()]),n("br")])])])}),0)]}}],null,!1,403516372)})],1):n("div",[n("div",{staticClass:"title is-4 level-item"},[e._v("Voçê não se cadastrou ainda!")])])])},t=[],s=a("aede"),d=a("9530"),l=a.n(d),r=a("1354"),o=a.n(r);function c(){var e=Object(s["a"])(["\n      query {\n        me {\n          id\n          name\n          email\n          status\n        }\n      }\n    "]);return c=function(){return e},e}var u={data:function(){return{me:null,cli:[]}},apollo:{me:l()(c()),cli:{query:o.a,variables:function(){return{user_id:this.me.id}},update:function(e){return this.cli=e,this.cli}}}},m=u,v=(a("b7bc"),a("2877")),k=Object(v["a"])(m,n,t,!1,null,null,null);i["default"]=k.exports},b7bc:function(e,i,a){"use strict";var n=a("7d68"),t=a.n(n);t.a},f54f:function(e,i){e.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=chunk-28848479.d506a57a.js.map