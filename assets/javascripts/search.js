(function(){!function(e,t){t(document).keyup(function(e){if(27===e.keyCode)return t("#results").empty().css("display","none")}),t(document).click(function(){return t("#results").css("display","none")}),t(document).on("click",".result, #search input",function(e){return e.stopPropagation()}),t("#results").css("display","none"),function(){return this.search.setData=function(e){return this.__data=e},this.search.createSearch=function(e){return new Promise(function(t){return function(n){var r,s,i,a;for(t.__searchData={keywords:[],filters:{tag:[],lang:[],type:[]}},i=e.split(" "),r=0,s=i.length;r<s;r++)a=i[r],a=a.split(":"),a.length>1&&a[1].length>0?t.__searchData.filters[a[0]].push(a[1]):a[0].length>0&&t.__searchData.keywords.push(a[0]);return n()}}(this))},this.search.__findInObject=function(e,t,n){return new Promise(function(r,s){var i,a,u,l,c,o,h,f,p,d,g,_,y;if(e.keywords.length&&-1!==(a=t.name.indexOf(e.keywords.join(" "))))return n.index=a,r(n);if(e.filters.tag.length)for(p=e.filters.tag,i=0,o=p.length;i<o;i++)if(_=p[i],-1!==t.tags.indexOf(_))return r(n);if(e.filters.lang.length)for(d=e.filters.lang,u=0,h=d.length;u<h;u++)if(c=d[u],t.lang===c)return r(n);if(e.filters.type.length)for(g=e.filters.type,l=0,f=g.length;l<f;l++)if(y=g[l],t.type===y)return r(n);return s("Not found: "+JSON.stringify(e)+" in "+JSON.stringify(t))})},this.search.filter=function(){var e,t,n,r,s,i;for(this.__results=[],e=[],i=this.__data,n=0,s=i.length;n<s;n++)r=i[n],t={name:(r.name+" "+r.desc).toLowerCase(),tags:r.tags,lang:r.lang,type:r.type,index:9e3},e.push(this.__findInObject(this.__searchData,t,r).then(function(e){return function(t){return e.__results.push(t)}}(this),function(){return null}));return Promise.all(e).then(function(e){return function(){return e.render()}}(this))},this.search.render=function(){var e,n,r,s,i,a;if(e="",n="<div class='result'>\n  <span class='title'>\n    <a href='%url'><span class='link'>%name</span> <span class='description'>%desc</span></a>\n  </span>\n</div>",t("#results").empty(),t("#results").css("display","block"),this.__results.length){for(this.__results=this.__results.sort(function(e,t){return e.index-t.index}),a=this.__results,r=0,i=a.length;r<i;r++)s=a[r],e+=n.replace("%url",s.url).replace("%desc",s.desc).replace("%name",s.name);t("#results").html(e)}else e=n.replace("%url","#").replace("%desc","No results found").replace("%name","No results");return t("#results").html(e)}}.apply(e),function(){var n;n=search_config.type,search_config.show_type,t.getJSON("/json/"+n+".json",function(t){return e.search.setData(t)}).then(function(){return t("#search input").focus(function(n){var r;return r=t(n.target).val().toLowerCase(),0===r.length?t("#results").css("display","none"):r.length>=2?e.search.createSearch(r).then(function(){return e.search.filter()}):void 0}),t("#search input").focus(),t("#search input").keyup(function(n){var r;return r=t(n.target).val().toLowerCase(),0===r.length?t("#results").css("display","none"):r.length>=2?e.search.createSearch(r).then(function(){return e.search.filter()}):void 0})})}()}(window,jQuery)}).call(this);