webpackJsonp([1],{"7zck":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("7+uW"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-toolbar",{attrs:{color:"green",fixed:"",top:""}},[a("v-toolbar-side-icon",{attrs:{large:"",to:"/"}},[a("v-icon",{attrs:{color:"yellow"}},[t._v("keyboard_backspace")])],1),t._v(" "),a("v-toolbar-title"),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{attrs:{flat:""}},[t._v("Search")]),t._v(" "),a("v-btn",{attrs:{flat:""}},[t._v("Book")])],1)],1),t._v(" "),a("main",[a("router-view")],1),t._v(" "),a("v-bottom-nav",{attrs:{active:t.bottomNav,value:!0,fixed:"",bottom:"",color:"green"},on:{"update:active":function(e){t.bottomNav=e}}},[a("v-btn",{attrs:{color:"yellow",flat:"",value:"search",to:"/"}},[a("span",[t._v("Search")]),t._v(" "),a("v-icon",[t._v("search")])],1),t._v(" "),a("v-btn",{attrs:{color:"yellow",flat:"",value:"booking",to:"/booking"}},[a("span",[t._v("Booking")]),t._v(" "),a("v-icon",[t._v("book")])],1)],1)],1)},staticRenderFns:[]},r=a("VU/8")({data:function(){return{bottomNav:"recent"}},name:"App"},i,!1,null,null,null).exports,l=a("/ocq"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("div",{staticStyle:{height:"100px"}}),t._v(" "),a("v-layout",{attrs:{column:""}},[a("v-flex",[a("h1",{staticStyle:{"font-size":"40px"}},[t._v("Welcome")])]),t._v(" "),a("v-flex",{attrs:{xs9:""}},[a("p",[t._v("Here's some business you might be interested in working with. Take your time, and enjoy!")])])],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"","pa-2":""}},[a("v-card",{attrs:{height:"200px",color:"teal"}},[a("v-card-media",[a("v-img",{attrs:{src:"https://moncheribridals.com/wp-content/uploads/2018/06/njuy.jpg","max-height":"150px"}})],1),t._v(" "),a("v-card-action",[a("v-btn",{attrs:{flat:"",dark:"",to:"/event-organizer"}},[t._v("Event Organizer")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs6:"","pa-2":""}},[a("v-card",{attrs:{height:"200px",color:"orange"}},[a("v-card-media",[a("v-img",{attrs:{src:"https://images.unsplash.com/photo-1488724485310-bd445f3faff6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77b8b9f3ba22c745dce62101b47a3ae5&w=1000&q=80",height:"150px"}})],1),t._v(" "),a("v-card-action",[a("v-btn",{attrs:{flat:"",dark:"",to:"/photographer"}},[t._v("Photographer")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs6:"","pa-2":""}},[a("v-card",{attrs:{height:"200px",color:"red"}},[a("v-card-media",[a("v-img",{attrs:{src:"https://i.pinimg.com/originals/79/0d/51/790d51fe865311cd54c5915047c5303e.jpg",height:"150px"}})],1),t._v(" "),a("v-card-action",[a("v-btn",{attrs:{flat:"",dark:"",to:"/decoration"}},[t._v("Decoration")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs6:"","pa-2":""}},[a("v-card",{attrs:{height:"200px",color:"blue"}},[a("v-card-media",[a("v-img",{attrs:{src:"http://bestdallascatering.com/wp-content/uploads/2016/04/dallas-best-catering-services.jpg",height:"150px"}})],1),t._v(" "),a("v-card-action",[a("v-btn",{attrs:{flat:"",dark:"",to:"/catering"}},[t._v("Catering")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs6:"","pa-2":""}},[a("v-card",{attrs:{height:"200px",color:"purple"}},[a("v-card-media",[a("v-img",{attrs:{src:"https://files.kstatecollegian.com/2018/02/Augu.jpg",height:"150px"}})],1),t._v(" "),a("v-card-action",[a("v-btn",{attrs:{flat:"",dark:"",to:"/make-up"}},[t._v("Make Up")])],1)],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"","pa-2":""}},[a("v-card",{attrs:{height:"200px",color:"green"}},[a("v-card-media",[a("v-img",{attrs:{src:"https://media.weddingz.in/images/ee92e46914f275e4aa50f50766c2e645/moongate-events-venue-maranayakanahalli-bangalore-2.jpg",height:"150px"}})],1),t._v(" "),a("v-card-action",[a("v-btn",{attrs:{flat:"",dark:"",to:"/venue"}},[t._v("Venue")])],1)],1)],1)],1),t._v(" "),a("div",{staticStyle:{height:"100px"}})],1)},staticRenderFns:[]},v=a("VU/8")(null,s,!1,null,null,null).exports,n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticStyle:{height:"75px"}}),t._v(" "),a("h1",[t._v("Booking")]),t._v(" "),a("v-container",[a("v-layout",{attrs:{column:""}},t._l(t.bookings,function(e){return a("v-flex",t._b({key:e.id,attrs:{xs12:"","pa-2":""}},"v-flex",((o={})["grid-ist-sm4"]=!0,o),!1),[a("v-card",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs7:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",[t._v(t._s(e.name))]),t._v(" "),a("h6",[t._v(t._s(e.job))]),t._v(" "),a("p",[t._v(t._s(e.date))])])]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-action",[a("div",{staticStyle:{margin:"10px"}},[a("h3",{staticStyle:{color:"green"}},[t._v("\n                                        "+t._s("Rp."+e.price)+"\n                                    ")])])])],1),t._v(" "),a("v-flex",{attrs:{xs5:""}},[a("v-card-media",[a("div",{staticStyle:{margin:"10px"}},[a("v-img",{attrs:{src:e.imageUrl}})],1)])],1)],1)],1)],1);var o}))],1),t._v(" "),a("v-divider"),t._v(" "),a("div",{staticStyle:{height:"10px"}}),t._v(" "),a("v-card",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs7:""}},[a("div",{staticStyle:{margin:"15px"}},[a("h3",[t._v("Total Price")]),t._v(" "),a("h1",{staticStyle:{color:"teal"}},[t._v(t._s("Rp."+t.totalPrice))])])]),t._v(" "),a("v-flex",{attrs:{xs5:""}},[a("div",{staticStyle:{margin:"20px"}},[a("v-btn",{attrs:{flat:""}},[t._v("\n                        Purchase\n                    ")])],1)])],1)],1),t._v(" "),a("div",{staticStyle:{height:"100px"}})],1)},staticRenderFns:[]},c=a("VU/8")({data:function(){return{select_1:null,select_2:null,jobs:["Event Organizer","Photography","Designer","Table Decorator"],fees:["< Rp.100.000","Rp.100.000-Rp.500.000","Rp.500.000-Rp.1.000.000","Rp.1.000.000-Rp.10.000.000","> Rp.10.000.000"],items:[]}},computed:{bookings:function(){return this.$store.getters.getBookings},totalPrice:function(){return this.$store.getters.getTotalPrice}}},n,!1,null,null,null).exports,d={data:function(){return{items:[{id:1,name:"BLAST",job:"Event Organizer",price:8e6,imageUrl:"https://static1.squarespace.com/static/5aaac5549f8770de2a157a19/t/5aafef058a922d11ac1b9981/1537782745914/",color:"teal",link:"/event-organizer/blast"},{id:2,name:"TWIN STAR",job:"Event Organizer",price:1e7,imageUrl:"https://pbs.twimg.com/media/DC101vLUAAEQYI2.jpg",color:"black",link:"/event-organizer/twin-star"}],picker:(new Date).toISOString().substr(0,10),dialog:!1,dialog2:!1,selected:null,price:0,job:null,imageUrl:null,link:null}},methods:{onSubmitBooking:function(){console.log(this.picker);var t={name:this.selected,price:this.price,job:this.job,imageUrl:this.imageUrl,date:this.picker};this.$store.dispatch("addBooking",t)},setNewName:function(t,e,a,o,i){this.selected=t,this.price=e,this.job=a,this.imageUrl=o,this.link=i,console.log(this.selected+", "+this.price)},getChild:function(){return link}},computed:{getName:function(){return this.$store.getters.getLatestBooking}}},_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticStyle:{height:"100px"}}),t._v(" "),a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",[t._v("Event Organizers")])]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("p",[t._v("Find event organizers to partner up for your event")])])],1),t._v(" "),a("v-layout",{attrs:{column:""}},t._l(t.items,function(e){return a("v-flex",t._b({key:e.id,attrs:{xs12:"","pa-2":""}},"v-flex",((o={})["grid-ist-sm4"]=!0,o),!1),[a("v-bottom-sheet",{attrs:{"full-width":""}},[a("v-card",{staticClass:"white--text",attrs:{slot:"activator",color:e.color},slot:"activator"},[a("v-layout",[a("v-flex",{attrs:{xs5:""}},[a("v-img",{attrs:{src:e.imageUrl,height:"125px",contain:""}})],1),t._v(" "),a("v-flex",{attrs:{xs7:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(e.name))]),t._v(" "),a("div",[t._v(t._s(e.job))]),t._v(" "),a("p",{staticStyle:{"font-size":"10px"}},[t._v(t._s(e.price))])])])],1)],1),t._v(" "),a("v-divider",{attrs:{light:""}}),t._v(" "),a("v-card-actions",{staticClass:"pa-3"},[t._v("\n                        Rating\n                        "),a("v-spacer"),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")])],1)],1),t._v(" "),a("v-card",{attrs:{tile:""}},[a("v-list",{attrs:{"three-line":""}},[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.name))]),t._v(" "),a("v-list-tile-sub-title",[a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")])],1),t._v(" "),a("v-list-tile-sub-title",[t._v(t._s(e.job))])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-list-tile-action",[a("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",flat:""},on:{click:function(a){t.setNewName(e.name,e.price,e.job,e.imageUrl,e.link)}},slot:"activator"},[t._v("Book")]),t._v(" "),a("v-card",[a("v-card-title",[a("h2",[t._v("Pick a Date")])]),t._v(" "),a("v-card-text",[a("v-container",[a("v-layout",[a("v-flex",[a("v-date-picker",{model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)],1)],1)],1),t._v(" "),a("v-card-action",[a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-spacer")],1),t._v(" "),a("v-flex",[a("v-btn",{attrs:{slot:"activator",flat:"",color:"green"},on:{click:[function(e){t.dialog=!1,t.dialog2=!0},function(e){t.onSubmitBooking()}]},slot:"activator"},[t._v("\n                                                    Submit\n                                                ")])],1)],1)],1)],1)],1)],1),t._v(" "),a("v-dialog",{model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[a("v-card",[a("v-card-title",[a("h3",[t._v("Thank You!")])]),t._v(" "),a("v-card-text",[t._v("\n                                        Your reservation at "+t._s(t.getName)+" has been booked. Please proceed to the payment once you are done.\n                                    ")]),t._v(" "),a("v-card-action",[a("v-btn",{on:{click:function(e){t.dialog2=!1}}},[t._v("Continue")])],1)],1)],1)],1)],1)],1)],1)],1)],1);var o}))],1)},staticRenderFns:[]},u=a("VU/8")(d,_,!1,null,null,null).exports,g={data:function(){return{items:[{id:1,name:"Okura",job:"Photographer",price:8e5,imageUrl:"https://scontent-sin2-1.cdninstagram.com/vp/66a73dabc5821347ea0648a606f79ea0/5C91AE59/t51.2885-19/s320x320/30078909_515808482147479_3332395366107578368_n.jpg",color:"grey"},{id:2,name:"Fine Projects",job:"Event Organizer",price:3e6,imageUrl:"https://fineprojects.co/Gallery/logo.png",color:"white"}],picker:(new Date).toISOString().substr(0,10),dialog:!1,dialog2:!1,selected:null,price:0,job:null,imageUrl:null}},methods:{onSubmitBooking:function(){console.log(this.picker);var t={name:this.selected,price:this.price,job:this.job,imageUrl:this.imageUrl,date:this.picker};this.$store.dispatch("addBooking",t)},setNewName:function(t,e,a,o){this.selected=t,this.price=e,this.job=a,this.imageUrl=o,console.log(this.selected+", "+this.price)}},computed:{getName:function(){return this.$store.getters.getLatestBooking}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticStyle:{height:"100px"}}),t._v(" "),a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",[t._v("Photographers")])]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("p",[t._v("Find photographers to partner up for your event")])])],1),t._v(" "),a("v-layout",{attrs:{column:""}},t._l(t.items,function(e){return a("v-flex",t._b({key:e.id,attrs:{xs12:"","pa-2":""}},"v-flex",((o={})["grid-ist-sm4"]=!0,o),!1),[a("v-bottom-sheet",{attrs:{"full-width":""}},[a("v-card",{attrs:{slot:"activator",color:e.color},slot:"activator"},[a("v-layout",[a("v-flex",{attrs:{xs5:""}},[a("v-img",{attrs:{src:e.imageUrl,height:"125px",contain:""}})],1),t._v(" "),a("v-flex",{attrs:{xs7:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(e.name))]),t._v(" "),a("div",[t._v(t._s(e.job))]),t._v(" "),a("p",{staticStyle:{"font-size":"10px"}},[t._v(t._s(e.price))])])])],1)],1),t._v(" "),a("v-divider",{attrs:{light:""}}),t._v(" "),a("v-card-actions",{staticClass:"pa-3"},[t._v("\n                            Rating\n                            "),a("v-spacer"),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")])],1)],1),t._v(" "),a("v-card",{attrs:{tile:""}},[a("v-list",{attrs:{"three-line":""}},[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.name))]),t._v(" "),a("v-list-tile-sub-title",[a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")])],1),t._v(" "),a("v-list-tile-sub-title",[t._v(t._s(e.job))])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-list-tile-action",[a("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",flat:""},on:{click:function(a){t.setNewName(e.name,e.price,e.job,e.imageUrl)}},slot:"activator"},[t._v("Book")]),t._v(" "),a("v-card",[a("v-card-title",[a("h2",[t._v("Pick a Date")])]),t._v(" "),a("v-card-text",[a("v-container",[a("v-layout",[a("v-flex",[a("v-date-picker",{model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)],1)],1)],1),t._v(" "),a("v-card-action",[a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-spacer")],1),t._v(" "),a("v-flex",[a("v-btn",{attrs:{slot:"activator",flat:"",color:"green"},on:{click:[function(e){t.dialog=!1,t.dialog2=!0},function(e){t.onSubmitBooking()}]},slot:"activator"},[t._v("\n                                                        Submit\n                                                    ")])],1)],1)],1)],1)],1)],1),t._v(" "),a("v-dialog",{model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[a("v-card",[a("v-card-title",[a("h3",[t._v("Thank You!")])]),t._v(" "),a("v-card-text",[t._v("\n                                            Your reservation at "+t._s(t.getName)+" has been booked. Please proceed to the payment once you are done.\n                                        ")]),t._v(" "),a("v-card-action",[a("v-btn",{on:{click:function(e){t.dialog2=!1}}},[t._v("Continue")])],1)],1)],1)],1)],1)],1)],1)],1)],1);var o}))],1)},staticRenderFns:[]},m=a("VU/8")(g,p,!1,null,null,null).exports,h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",[e("div",{staticStyle:{height:"100px"}}),this._v(" "),e("v-layout",{attrs:{column:""}},[e("v-flex",{attrs:{xs12:""}},[e("h1",[this._v("Designer")])]),this._v(" "),e("v-flex",{attrs:{xs12:""}},[e("p",[this._v("Find designers to partner up for your event")])])],1)],1)},staticRenderFns:[]},b=a("VU/8")(null,h,!1,null,null,null).exports,f={data:function(){return{items:[{id:1,name:"Gorry Gourmet",job:"Catering",price:3e6,imageUrl:"https://gorrygourmet.com/assets/images/logo.png",color:"orange"},{id:2,name:"BerryKitchen",job:"Catering",price:25e5,imageUrl:"https://www.berrykitchen.com/new/2/assets/uploads/logo.png",color:"yellow"}],picker:(new Date).toISOString().substr(0,10),dialog:!1,dialog2:!1,selected:null,price:0,job:null,imageUrl:null}},methods:{onSubmitBooking:function(){console.log(this.picker);var t={name:this.selected,price:this.price,job:this.job,imageUrl:this.imageUrl,date:this.picker};this.$store.dispatch("addBooking",t)},setNewName:function(t,e,a,o){this.selected=t,this.price=e,this.job=a,this.imageUrl=o,console.log(this.selected+", "+this.price)}},computed:{getName:function(){return this.$store.getters.getLatestBooking}}},x={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticStyle:{height:"100px"}}),t._v(" "),a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",[t._v("Catering")])]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("p",[t._v("Find caterings to partner up for your event")])])],1),t._v(" "),a("v-layout",{attrs:{column:""}},t._l(t.items,function(e){return a("v-flex",t._b({key:e.id,attrs:{xs12:"","pa-2":""}},"v-flex",((o={})["grid-ist-sm4"]=!0,o),!1),[a("v-bottom-sheet",{attrs:{"full-width":""}},[a("v-card",{attrs:{slot:"activator",color:e.color},slot:"activator"},[a("v-layout",[a("v-flex",{attrs:{xs5:""}},[a("v-img",{attrs:{src:e.imageUrl,height:"125px",contain:""}})],1),t._v(" "),a("v-flex",{attrs:{xs7:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(e.name))]),t._v(" "),a("div",[t._v(t._s(e.job))]),t._v(" "),a("p",{staticStyle:{"font-size":"10px"}},[t._v(t._s(e.price))])])])],1)],1),t._v(" "),a("v-divider",{attrs:{light:""}}),t._v(" "),a("v-card-actions",{staticClass:"pa-3"},[t._v("\n                        Rating\n                        "),a("v-spacer"),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")])],1)],1),t._v(" "),a("v-card",{attrs:{tile:""}},[a("v-list",{attrs:{"three-line":""}},[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.name))]),t._v(" "),a("v-list-tile-sub-title",[a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")])],1),t._v(" "),a("v-list-tile-sub-title",[t._v(t._s(e.job))])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-list-tile-action",[a("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",flat:""},on:{click:function(a){t.setNewName(e.name,e.price,e.job,e.imageUrl)}},slot:"activator"},[t._v("Book")]),t._v(" "),a("v-card",[a("v-card-title",[a("h2",[t._v("Pick a Date")])]),t._v(" "),a("v-card-text",[a("v-container",[a("v-layout",[a("v-flex",[a("v-date-picker",{model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)],1)],1)],1),t._v(" "),a("v-card-action",[a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-spacer")],1),t._v(" "),a("v-flex",[a("v-btn",{attrs:{slot:"activator",flat:"",color:"green"},on:{click:[function(e){t.dialog=!1,t.dialog2=!0},function(e){t.onSubmitBooking()}]},slot:"activator"},[t._v("\n                                                    Submit\n                                                ")])],1)],1)],1)],1)],1)],1),t._v(" "),a("v-dialog",{model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[a("v-card",[a("v-card-title",[a("h3",[t._v("Thank You!")])]),t._v(" "),a("v-card-text",[t._v("\n                                        Your reservation at "+t._s(t.getName)+" has been booked. Please proceed to the payment once you are done.\n                                    ")]),t._v(" "),a("v-card-action",[a("v-btn",{on:{click:function(e){t.dialog2=!1}}},[t._v("Continue")])],1)],1)],1)],1)],1)],1)],1)],1)],1);var o}))],1)},staticRenderFns:[]},k=a("VU/8")(f,x,!1,null,null,null).exports,y={data:function(){return{items:[{id:1,name:"BEAUSHI",job:"Make Up Artist",price:2e5,imageUrl:"https://scontent-sin6-1.cdninstagram.com/vp/5856f6b67443521a0c73f43656084f4a/5C7C299F/t51.2885-19/s320x320/16464386_285873171830846_5757954850620964864_a.jpg",color:"white"},{id:2,name:"Firli",job:"Make Up Artist",price:75e4,imageUrl:"https://scontent-sin6-1.cdninstagram.com/vp/2067e72affaf6ca287a8ca3f2e8ace53/5C7F9E18/t51.2885-19/s320x320/43914426_180855089488000_3150720349725786112_n.jpg",color:"white"}],picker:(new Date).toISOString().substr(0,10),dialog:!1,dialog2:!1,selected:null,price:0,job:null,imageUrl:null}},methods:{onSubmitBooking:function(){console.log(this.picker);var t={name:this.selected,price:this.price,job:this.job,imageUrl:this.imageUrl,date:this.picker};this.$store.dispatch("addBooking",t)},setNewName:function(t,e,a,o){this.selected=t,this.price=e,this.job=a,this.imageUrl=o,console.log(this.selected+", "+this.price)}},computed:{getName:function(){return this.$store.getters.getLatestBooking}}},w={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticStyle:{height:"100px"}}),t._v(" "),a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",[t._v("Make Up")])]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("p",[t._v("Find make up artists to partner up for your event")])])],1),t._v(" "),a("v-layout",{attrs:{column:""}},t._l(t.items,function(e){return a("v-flex",t._b({key:e.id,attrs:{xs12:"","pa-2":""}},"v-flex",((o={})["grid-ist-sm4"]=!0,o),!1),[a("v-bottom-sheet",{attrs:{"full-width":""}},[a("v-card",{attrs:{slot:"activator",color:e.color},slot:"activator"},[a("v-layout",[a("v-flex",{attrs:{xs5:""}},[a("v-img",{attrs:{src:e.imageUrl,height:"125px",contain:""}})],1),t._v(" "),a("v-flex",{attrs:{xs7:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(e.name))]),t._v(" "),a("div",[t._v(t._s(e.job))]),t._v(" "),a("p",{staticStyle:{"font-size":"10px"}},[t._v(t._s(e.price))])])])],1)],1),t._v(" "),a("v-divider",{attrs:{light:""}}),t._v(" "),a("v-card-actions",{staticClass:"pa-3"},[t._v("\n                        Rating\n                        "),a("v-spacer"),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")])],1)],1),t._v(" "),a("v-card",{attrs:{tile:""}},[a("v-list",{attrs:{"three-line":""}},[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.name))]),t._v(" "),a("v-list-tile-sub-title",[a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")])],1),t._v(" "),a("v-list-tile-sub-title",[t._v(t._s(e.job))])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-list-tile-action",[a("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",flat:""},on:{click:function(a){t.setNewName(e.name,e.price,e.job,e.imageUrl)}},slot:"activator"},[t._v("Book")]),t._v(" "),a("v-card",[a("v-card-title",[a("h2",[t._v("Pick a Date")])]),t._v(" "),a("v-card-text",[a("v-container",[a("v-layout",[a("v-flex",[a("v-date-picker",{model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)],1)],1)],1),t._v(" "),a("v-card-action",[a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-spacer")],1),t._v(" "),a("v-flex",[a("v-btn",{attrs:{slot:"activator",flat:"",color:"green"},on:{click:[function(e){t.dialog=!1,t.dialog2=!0},function(e){t.onSubmitBooking()}]},slot:"activator"},[t._v("\n                                                    Submit\n                                                ")])],1)],1)],1)],1)],1)],1),t._v(" "),a("v-dialog",{model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[a("v-card",[a("v-card-title",[a("h3",[t._v("Thank You!")])]),t._v(" "),a("v-card-text",[t._v("\n                                        Your reservation at "+t._s(t.getName)+" has been booked. Please proceed to the payment once you are done.\n                                    ")]),t._v(" "),a("v-card-action",[a("v-btn",{on:{click:function(e){t.dialog2=!1}}},[t._v("Continue")])],1)],1)],1)],1)],1)],1)],1)],1)],1);var o}))],1)},staticRenderFns:[]},B=a("VU/8")(y,w,!1,null,null,null).exports,j={data:function(){return{items:[{id:1,name:"B'Steak Grill & Pancake",job:"Venue",price:95e5,imageUrl:"https://scontent-sin6-1.cdninstagram.com/vp/78e7cfad83921b878e2a547388d4cdb1/5C81E126/t51.2885-19/s320x320/21041608_1434636509934930_3577484904599912448_a.jpg",color:"red"},{id:2,name:"The Agathon",job:"Venue",price:13e6,imageUrl:"https://s.kaskus.id/images/2012/09/21/2267365_20120921094638.jpg",color:"black"}],picker:(new Date).toISOString().substr(0,10),dialog:!1,dialog2:!1,selected:null,price:0,job:null,imageUrl:null}},methods:{onSubmitBooking:function(){console.log(this.picker);var t={name:this.selected,price:this.price,job:this.job,imageUrl:this.imageUrl,date:this.picker};this.$store.dispatch("addBooking",t)},setNewName:function(t,e,a,o){this.selected=t,this.price=e,this.job=a,this.imageUrl=o,console.log(this.selected+", "+this.price)}},computed:{getName:function(){return this.$store.getters.getLatestBooking}}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticStyle:{height:"100px"}}),t._v(" "),a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",[t._v("Venue")])]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("p",[t._v("Find venues to partner up for your event")])])],1),t._v(" "),a("v-layout",{attrs:{column:""}},t._l(t.items,function(e){return a("v-flex",t._b({key:e.id,attrs:{xs12:"","pa-2":""}},"v-flex",((o={})["grid-ist-sm4"]=!0,o),!1),[a("v-bottom-sheet",{attrs:{"full-width":""}},[a("v-card",{staticClass:"white--text",attrs:{slot:"activator",color:e.color},slot:"activator"},[a("v-layout",[a("v-flex",{attrs:{xs5:""}},[a("v-img",{attrs:{src:e.imageUrl,height:"125px",contain:""}})],1),t._v(" "),a("v-flex",{attrs:{xs7:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(e.name))]),t._v(" "),a("div",[t._v(t._s(e.job))]),t._v(" "),a("p",{staticStyle:{"font-size":"10px"}},[t._v(t._s(e.price))])])])],1)],1),t._v(" "),a("v-divider",{attrs:{light:""}}),t._v(" "),a("v-card-actions",{staticClass:"pa-3"},[t._v("\n                        Rating\n                        "),a("v-spacer"),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")])],1)],1),t._v(" "),a("v-card",{attrs:{tile:""}},[a("v-list",{attrs:{"three-line":""}},[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.name))]),t._v(" "),a("v-list-tile-sub-title",[a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")])],1),t._v(" "),a("v-list-tile-sub-title",[t._v(t._s(e.job))])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-list-tile-action",[a("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",flat:""},on:{click:function(a){t.setNewName(e.name,e.price,e.job,e.imageUrl)}},slot:"activator"},[t._v("Book")]),t._v(" "),a("v-card",[a("v-card-title",[a("h2",[t._v("Pick a Date")])]),t._v(" "),a("v-card-text",[a("v-container",[a("v-layout",[a("v-flex",[a("v-date-picker",{model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)],1)],1)],1),t._v(" "),a("v-card-action",[a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-spacer")],1),t._v(" "),a("v-flex",[a("v-btn",{attrs:{slot:"activator",flat:"",color:"green"},on:{click:[function(e){t.dialog=!1,t.dialog2=!0},function(e){t.onSubmitBooking()}]},slot:"activator"},[t._v("\n                                                    Submit\n                                                ")])],1)],1)],1)],1)],1)],1),t._v(" "),a("v-dialog",{model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[a("v-card",[a("v-card-title",[a("h3",[t._v("Thank You!")])]),t._v(" "),a("v-card-text",[t._v("\n                                        Your reservation at "+t._s(t.getName)+" has been booked. Please proceed to the payment once you are done.\n                                    ")]),t._v(" "),a("v-card-action",[a("v-btn",{on:{click:function(e){t.dialog2=!1}}},[t._v("Continue")])],1)],1)],1)],1)],1)],1)],1)],1)],1);var o}))],1)},staticRenderFns:[]},S=a("VU/8")(j,U,!1,null,null,null).exports,N={data:function(){return{items:[{id:1,name:"Poporin",job:"Decorator",price:9e5,imageUrl:"https://scontent-sin6-1.cdninstagram.com/vp/bdf72989e653085cb4d9310fc2f0b2a2/5C7656B9/t51.2885-19/s320x320/14026758_496197837253994_21133362_a.jpg",color:"white",classes:"black--text"},{id:2,name:"Monze Florist",job:"Decorator",price:75e4,imageUrl:"https://scontent-sin6-1.cdninstagram.com/vp/e4c044a4fd065c39b245eca5618133da/5C81553C/t51.2885-19/s320x320/21985058_2037285689827549_5236900791343644672_n.jpg",color:"rgb(173, 178, 162)",classes:"white--text"}],picker:(new Date).toISOString().substr(0,10),dialog:!1,dialog2:!1,selected:null,price:0,job:null,imageUrl:null}},methods:{onSubmitBooking:function(){console.log(this.picker);var t={name:this.selected,price:this.price,job:this.job,imageUrl:this.imageUrl,date:this.picker};this.$store.dispatch("addBooking",t)},setNewName:function(t,e,a,o){this.selected=t,this.price=e,this.job=a,this.imageUrl=o,console.log(this.selected+", "+this.price)}},computed:{getName:function(){return this.$store.getters.getLatestBooking}}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",{staticStyle:{height:"100px"}}),t._v(" "),a("v-layout",{attrs:{column:""}},[a("v-flex",{attrs:{xs12:""}},[a("h1",[t._v("Decoration")])]),t._v(" "),a("v-flex",{attrs:{xs12:""}},[a("p",[t._v("Find decorators to partner up for your event")])])],1),t._v(" "),a("v-layout",{attrs:{column:""}},t._l(t.items,function(e){return a("v-flex",t._b({key:e.id,attrs:{xs12:"","pa-2":""}},"v-flex",((o={})["grid-ist-sm4"]=!0,o),!1),[a("v-bottom-sheet",{attrs:{"full-width":""}},[a("v-card",{attrs:{slot:"activator",color:e.color},slot:"activator"},[a("v-layout",[a("v-flex",{attrs:{xs5:""}},[a("v-img",{attrs:{src:e.imageUrl,height:"125px",contain:""}})],1),t._v(" "),a("v-flex",{attrs:{xs7:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("div",{staticClass:"headline"},[t._v(t._s(e.name))]),t._v(" "),a("div",[t._v(t._s(e.job))]),t._v(" "),a("p",{staticStyle:{"font-size":"10px"}},[t._v(t._s(e.price))])])])],1)],1),t._v(" "),a("v-divider",{attrs:{light:""}}),t._v(" "),a("v-card-actions",{staticClass:"pa-3"},[t._v("\n                        Rating\n                        "),a("v-spacer"),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")])],1)],1),t._v(" "),a("v-card",{attrs:{tile:""}},[a("v-list",{attrs:{"three-line":""}},[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.name))]),t._v(" "),a("v-list-tile-sub-title",[a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")]),t._v(" "),a("v-icon",{attrs:{color:"yellow"}},[t._v("star")])],1),t._v(" "),a("v-list-tile-sub-title",[t._v(t._s(e.job))])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-list-tile-action",[a("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-btn",{attrs:{slot:"activator",flat:""},on:{click:function(a){t.setNewName(e.name,e.price,e.job,e.imageUrl)}},slot:"activator"},[t._v("Book")]),t._v(" "),a("v-card",[a("v-card-title",[a("h2",[t._v("Pick a Date")])]),t._v(" "),a("v-card-text",[a("v-container",[a("v-layout",[a("v-flex",[a("v-date-picker",{model:{value:t.picker,callback:function(e){t.picker=e},expression:"picker"}})],1)],1)],1)],1),t._v(" "),a("v-card-action",[a("v-container",[a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-spacer")],1),t._v(" "),a("v-flex",[a("v-btn",{attrs:{slot:"activator",flat:"",color:"green"},on:{click:[function(e){t.dialog=!1,t.dialog2=!0},function(e){t.onSubmitBooking()}]},slot:"activator"},[t._v("\n                                                    Submit\n                                                ")])],1)],1)],1)],1)],1)],1),t._v(" "),a("v-dialog",{model:{value:t.dialog2,callback:function(e){t.dialog2=e},expression:"dialog2"}},[a("v-card",[a("v-card-title",[a("h3",[t._v("Thank You!")])]),t._v(" "),a("v-card-text",[t._v("\n                                        Your reservation at "+t._s(t.getName)+" has been booked. Please proceed to the payment once you are done.\n                                    ")]),t._v(" "),a("v-card-action",[a("v-btn",{on:{click:function(e){t.dialog2=!1}}},[t._v("Continue")])],1)],1)],1)],1)],1)],1)],1)],1)],1);var o}))],1)},staticRenderFns:[]},F=a("VU/8")(N,C,!1,null,null,null).exports,z={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-card",[a("v-card-title",[t._v("Blast")]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",{staticStyle:{height:"300px"}},[a("v-radio-group",{attrs:{column:""},model:{value:t.dialogm1,callback:function(e){t.dialogm1=e},expression:"dialogm1"}},[a("v-radio",{attrs:{label:"Bahamas, The",value:"bahamas"}}),t._v(" "),a("v-radio",{attrs:{label:"Bahrain",value:"bahrain"}}),t._v(" "),a("v-radio",{attrs:{label:"Bangladesh",value:"bangladesh"}}),t._v(" "),a("v-radio",{attrs:{label:"Barbados",value:"barbados"}}),t._v(" "),a("v-radio",{attrs:{label:"Belarus",value:"belarus"}}),t._v(" "),a("v-radio",{attrs:{label:"Belgium",value:"belgium"}}),t._v(" "),a("v-radio",{attrs:{label:"Belize",value:"belize"}}),t._v(" "),a("v-radio",{attrs:{label:"Benin",value:"benin"}}),t._v(" "),a("v-radio",{attrs:{label:"Bhutan",value:"bhutan"}}),t._v(" "),a("v-radio",{attrs:{label:"Bolivia",value:"bolivia"}}),t._v(" "),a("v-radio",{attrs:{label:"Bosnia and Herzegovina",value:"bosnia"}}),t._v(" "),a("v-radio",{attrs:{label:"Botswana",value:"botswana"}}),t._v(" "),a("v-radio",{attrs:{label:"Brazil",value:"brazil"}}),t._v(" "),a("v-radio",{attrs:{label:"Brunei",value:"brunei"}}),t._v(" "),a("v-radio",{attrs:{label:"Bulgaria",value:"bulgaria"}}),t._v(" "),a("v-radio",{attrs:{label:"Burkina Faso",value:"burkina"}}),t._v(" "),a("v-radio",{attrs:{label:"Burma",value:"burma"}}),t._v(" "),a("v-radio",{attrs:{label:"Burundi",value:"burundi"}})],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1)},staticRenderFns:[]},R=a("VU/8")(null,z,!1,null,null,null).exports,P={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:"","justify-center":""}},[a("v-card",[a("v-card-title",[t._v("Twin Star")]),t._v(" "),a("v-divider"),t._v(" "),a("v-card-text",{staticStyle:{height:"300px"}},[a("v-radio-group",{attrs:{column:""},model:{value:t.dialogm1,callback:function(e){t.dialogm1=e},expression:"dialogm1"}},[a("v-radio",{attrs:{label:"Bahamas, The",value:"bahamas"}}),t._v(" "),a("v-radio",{attrs:{label:"Bahrain",value:"bahrain"}}),t._v(" "),a("v-radio",{attrs:{label:"Bangladesh",value:"bangladesh"}}),t._v(" "),a("v-radio",{attrs:{label:"Barbados",value:"barbados"}}),t._v(" "),a("v-radio",{attrs:{label:"Belarus",value:"belarus"}}),t._v(" "),a("v-radio",{attrs:{label:"Belgium",value:"belgium"}}),t._v(" "),a("v-radio",{attrs:{label:"Belize",value:"belize"}}),t._v(" "),a("v-radio",{attrs:{label:"Benin",value:"benin"}}),t._v(" "),a("v-radio",{attrs:{label:"Bhutan",value:"bhutan"}}),t._v(" "),a("v-radio",{attrs:{label:"Bolivia",value:"bolivia"}}),t._v(" "),a("v-radio",{attrs:{label:"Bosnia and Herzegovina",value:"bosnia"}}),t._v(" "),a("v-radio",{attrs:{label:"Botswana",value:"botswana"}}),t._v(" "),a("v-radio",{attrs:{label:"Brazil",value:"brazil"}}),t._v(" "),a("v-radio",{attrs:{label:"Brunei",value:"brunei"}}),t._v(" "),a("v-radio",{attrs:{label:"Bulgaria",value:"bulgaria"}}),t._v(" "),a("v-radio",{attrs:{label:"Burkina Faso",value:"burkina"}}),t._v(" "),a("v-radio",{attrs:{label:"Burma",value:"burma"}}),t._v(" "),a("v-radio",{attrs:{label:"Burundi",value:"burundi"}})],1)],1),t._v(" "),a("v-divider"),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Close")]),t._v(" "),a("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.dialog=!1}}},[t._v("Save")])],1)],1)],1)},staticRenderFns:[]},E=a("VU/8")(null,P,!1,null,null,null).exports;o.default.use(l.a);var $=new l.a({routes:[{path:"/",name:"Home",component:v},{path:"/booking",name:"Booking",component:c},{path:"/event-organizer",name:"EventOrganizer",component:u,children:[{path:"blast",component:R},{path:"twin-star",component:E}]},{path:"/photographer",name:"Photographer",component:m},{path:"/designer",name:"Designer",component:b},{path:"/catering",name:"Catering",component:k},{path:"/make-up",name:"MakeUp",component:B},{path:"/venue",name:"Venue",component:S},{path:"/decoration",name:"Decoration",component:F}]}),D=a("3EgV"),T=a.n(D),V=a("NYxO");o.default.use(V.a);var O=new V.a.Store({state:{counter:0,booked:[],total_price:0,latest_name:""},mutations:{updateBooking:function(t,e){console.log("updateBooking() on progress..."),console.log(t.counter),t.booked.push({id:t.counter,name:e.name,price:e.price,job:e.job,imageUrl:e.imageUrl,date:e.date}),t.total_price+=e.price,t.counter+=1,t.latest_name=e.name,console.log("Successfully push a new booking!"),console.log("payload: "+e),console.log("state: "+t.booked)}},actions:{addBooking:function(t,e){var a=t.commit;console.log("addBooking() is called"),a("updateBooking",e)}},getters:{getBookings:function(t){return t.booked},getTotalPrice:function(t){return t.total_price},getLatestBooking:function(t){return t.latest_name}}});a("7zck");o.default.use(T.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}),o.default.config.productionTip=!1,new o.default({el:"#app",router:$,store:O,components:{App:r},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.7a475cb76cf244108a8c.js.map