(function(){!function(e,n){return e.search=function(e,s){var a;return null==s&&(s=!1),a=[],n.getJSON("/json/"+e+".json",function(e){var n,s,r,l;for(l=[],n=0,r=e.length;r>n;n++)s=e[n],l.push(a.push(s));return l}).then(function(){return n("#search").keyup(function(e){var r,l,t,u,c,p,h,i,o;if(n("#search-result").empty(),o=n(e.target).val().toLowerCase(),!(o.length<=0)){for(h=new RegExp(o,"i"),t="<div class='result'>\n    <span class='result-name'>\n        <a href='%url'><span class='result-link'>%name</span> <span class='result-desc'>%desc</span></a>\n    </span>\n</div>",i=[],u=0,p=a.length;p>u;u++)c=a[u],c.name.search(h)>-1||c.desc.search(h)>-1||null!=c.tags&&c.tags.search(h)>-1||null!=c.lang&&c.lang.search(h)>-1||null!=c.type&&c.type.search(h)>-1?(l=c.name,s&&(l+=" ("+c.type+")"),r=t.replace("%url",c.url).replace("%desc",c.desc).replace("%name",l),i.push(n("#search-result").append(n(r)))):i.push(void 0);return i}})})}}(window,jQuery)}).call(this);