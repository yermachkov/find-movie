"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[884],{7608:function(e,r,t){t.d(r,{x:function(){return a}});var n=t(3842),c=t(407),a=(0,n.Z)("div")(c.cp,c.Dh,c.$_,c.bK,c.GQ,c.eC)},2884:function(e,r,t){t.r(r);var n=t(885),c=t(2791),a=t(7608),s=t(470),i=t(6731),o=t(1207),u=t(184);r.default=function(){var e=(0,c.useState)(null),r=(0,n.Z)(e,2),t=r[0],p=r[1],l=(0,s.UO)().movieId,d=(0,s.TH)();if((0,c.useEffect)((function(){o.ZP.fetchMovieById(l).then((function(e){return p(e)}))}),[l]),t){var h=t.poster_path,v=t.title,f=t.release_date,x=t.vote_average,j=t.genres,m=t.overview,w=h?"https://image.tmdb.org/t/p/w500".concat(h):"https://via.placeholder.com/395x574?text=No+poster",y=f?f.slice(0,4):"No release date",g=(10*x).toFixed(0);return(0,u.jsx)("main",{children:(0,u.jsxs)("div",{children:[(0,u.jsx)(i.rU,{to:d.state.from,children:(0,u.jsx)("button",{children:"Go back"})}),(0,u.jsxs)(a.x,{display:"flex",gridGap:15,children:[(0,u.jsx)("img",{src:w,alt:"The poster of ".concat(v),width:300}),(0,u.jsxs)("div",{children:[(0,u.jsxs)("h2",{children:[v," (",y,")"]}),(0,u.jsxs)("p",{children:["User Score: ",g,"%"]}),(0,u.jsx)("h3",{children:"Overview"}),(0,u.jsx)("p",{children:m}),(0,u.jsx)("h4",{children:"Genres"}),(0,u.jsx)("p",{children:j.map((function(e){return e.name})).join(", ")})]})]}),(0,u.jsx)("h4",{children:"Additional information"}),(0,u.jsxs)("ul",{children:[(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:"cast",children:"Cast"})}),(0,u.jsx)("li",{children:(0,u.jsx)(i.rU,{to:"reviews",children:"Reviews"})})]}),(0,u.jsx)(c.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:(0,u.jsx)(s.j3,{})})]})})}}},1207:function(e,r,t){var n=t(5861),c=t(4687),a=t.n(c),s=t(4569),i=t.n(s),o="48c8290358fa5316a044ddee2fc9cc6f";i().defaults.baseURL="https://api.themoviedb.org/3/";var u=function(){var e=(0,n.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("/trending/movie/day?api_key=".concat(o));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("/search/movie?api_key=".concat(o,"&query=").concat(r));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("/movie/".concat(r,"?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("/movie/".concat(r,"/credits?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i().get("/movie/".concat(r,"/reviews?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v={fetchTrendingMovies:u,fetchMoviesByQuery:p,fetchMovieById:l,fetchMovieCreditsById:d,fetchMovieReviewsById:h};r.ZP=v}}]);
//# sourceMappingURL=884.0fd13c3e.chunk.js.map