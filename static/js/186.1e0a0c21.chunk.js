"use strict";(self.webpackChunkfind_movie=self.webpackChunkfind_movie||[]).push([[186],{186:function(e,r,t){t.r(r);var n=t(885),c=t(2791),a=t(470),u=t(1207),s=t(184);r.default=function(){var e=(0,c.useState)(null),r=(0,n.Z)(e,2),t=r[0],o=r[1],i=(0,a.UO)().movieId;return(0,c.useEffect)((function(){u.ZP.fetchMovieReviewsById(i).then((function(e){return o(e.results)}))}),[i]),(0,s.jsx)("div",{children:t&&t.length?(0,s.jsx)("ul",{children:t.map((function(e){var r=e.id,t=e.name,n=e.content;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("p",{children:["Author: ",t||"Anonymus"]}),(0,s.jsx)("p",{children:n})]},r)}))}):(0,s.jsx)("p",{children:"We don`t have any reviews for this movie."})})}},1207:function(e,r,t){var n=t(5861),c=t(4687),a=t.n(c),u=t(4569),s=t.n(u),o="48c8290358fa5316a044ddee2fc9cc6f";s().defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,n.Z)(a().mark((function e(){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/trending/movie/day?api_key=".concat(o));case 3:return r=e.sent,e.abrupt("return",r.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/search/movie?api_key=".concat(o,"&query=").concat(r));case 3:return t=e.sent,e.abrupt("return",t.data.results);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(r,"?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(r,"/credits?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(a().mark((function e(r){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s().get("/movie/".concat(r,"/reviews?api_key=").concat(o));case 3:return t=e.sent,e.abrupt("return",t.data);case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),l={fetchTrendingMovies:i,fetchMoviesByQuery:p,fetchMovieById:v,fetchMovieCreditsById:f,fetchMovieReviewsById:h};r.ZP=l}}]);
//# sourceMappingURL=186.1e0a0c21.chunk.js.map