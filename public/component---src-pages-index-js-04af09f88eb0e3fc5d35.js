(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{RXBc:function(t,e,i){"use strict";i.r(e);var n=i("q1tI"),s=i.n(n),o=i("Kvkj");var r=function(t){var e,i;function n(e){var i;return(i=t.call(this,e)||this).state={isArticleVisible:!1,timeout:!1,isVisible:!1,article:"",loading:"is-loading"},i}i=t,(e=n).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i;var r=n.prototype;return r.componentDidMount=function(){var t=this;this.timeoutReference=setTimeout((function(){t.setState({loading:""})}),100),document.addEventListener("mousedown",(function(e){t.handleOutsideClick(e)}))},r.componentWillUnmount=function(){this.timeoutReference&&clearTimeout(this.timeoutReference),document.removeEventListener("mousedown",this.handleOutsideClick)},r.setWrapperRef=function(t){this.wrapperRef=t},r.onOpenArticle=function(t){var e=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:t}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({isVisible:!e.state.isVisible})}),350)},r.onCloseArticle=function(){var t=this;this.setState({isVisible:!this.state.isVisible}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({isArticleVisible:!t.state.isArticleVisible,article:""})}),350)},r.handleOutsideClick=function(t){this.wrapperRef&&!this.wrapperRef.contains(t.target)&&this.state.isArticleVisible&&this.onCloseArticle()},r.render=function(){var t=this,e=this.props.location,i=this.state,n=i.loading,r=i.isArticleVisible,a=i.timeout,c=i.isVisible,l=i.article;return s.a.createElement(o.c,{location:e},s.a.createElement("article",{className:"body "+n+" "+(r?"is-article-visible":"")},s.a.createElement("section",{id:"wrapper"},s.a.createElement(o.b,{onOpenArticle:function(e){return t.onOpenArticle(e)},timeout:a}),s.a.createElement(o.d,{isArticleVisible:r,timeout:a,isVisible:c,article:l,onCloseArticle:function(){return t.onCloseArticle()},setWrapperRef:function(e){return t.setWrapperRef(e)}}),s.a.createElement(o.a,{timeout:a})),s.a.createElement("section",{id:"bg"})))},n}(s.a.Component);e.default=r}}]);
//# sourceMappingURL=component---src-pages-index-js-04af09f88eb0e3fc5d35.js.map