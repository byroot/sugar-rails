var Fb=[],Gb=[],Y=[],Hb=[],Ib={},Jb,Z;function Kb(a,b){var c=a.indexOf(b);c>-1&&a.splice(c,1)}
function Lb(a,b,c){E(b)&&Kb(Y,b);Kb(Y,c);a.unshift({ja:b,ra:c})}function Mb(a,b){return a==b||a=="all"||!a}function Nb(a){return Y.some(function(b){return(new s("\\b"+b+"$","i")).test(a)})}function Ob(a,b){a=E(a)?a.toString():"";return a.isBlank()||Nb(a)?a:Pb(a,b?Fb:Gb)}function Pb(a,b){I(b,function(c,d){if(a.match(d.ja)){a=a.replace(d.ja,d.ra);return m}});return a}function Qb(a){return a.replace(/^\W*[a-z]/,function(b){return b.toUpperCase()})}
Z={acronym:function(a){Ib[a.toLowerCase()]=a;a=p.keys(Ib).map(function(b){return Ib[b]});Z.acronymRegExp=s(a.join("|"),"g")},plural:function(a,b){Lb(Fb,a,b)},singular:function(a,b){Lb(Gb,a,b)},irregular:function(a,b){var c=a.first(),d=a.from(1),e=b.first(),g=b.from(1),f=e.toUpperCase(),i=e.toLowerCase(),h=c.toUpperCase(),l=c.toLowerCase();Kb(Y,a);Kb(Y,b);if(h==f){Z.plural(new s("({1}){2}$".assign(c,d),"i"),"$1"+g);Z.plural(new s("({1}){2}$".assign(e,g),"i"),"$1"+g);Z.singular(new s("({1}){2}$".assign(e,
g),"i"),"$1"+d)}else{Z.plural(new s("{1}{2}$".assign(h,d)),f+g);Z.plural(new s("{1}{2}$".assign(l,d)),i+g);Z.plural(new s("{1}{2}$".assign(f,g)),f+g);Z.plural(new s("{1}{2}$".assign(i,g)),i+g);Z.singular(new s("{1}{2}$".assign(f,g)),h+d);Z.singular(new s("{1}{2}$".assign(i,g)),l+d)}},uncountable:function(a){var b=r.isArray(a)?a:H(arguments);Y=Y.concat(b)},human:function(a,b){Hb.unshift({ja:a,ra:b})},clear:function(a){if(Mb(a,"singulars"))Gb=[];if(Mb(a,"plurals"))Fb=[];if(Mb(a,"uncountables"))Y=[];
if(Mb(a,"humans"))Hb=[];if(Mb(a,"acronyms"))Ib={}}};Jb=["and","or","nor","a","an","the","so","but","to","of","at","by","from","into","on","onto","off","out","in","over","with","for"];Z.plural(/$/,"s");Z.plural(/s$/gi,"s");Z.plural(/(ax|test)is$/gi,"$1es");Z.plural(/(octop|vir|fung|foc|radi|alumn)(i|us)$/gi,"$1i");Z.plural(/(census|alias|status)$/gi,"$1es");Z.plural(/(bu)s$/gi,"$1ses");Z.plural(/(buffal|tomat)o$/gi,"$1oes");Z.plural(/([ti])um$/gi,"$1a");Z.plural(/([ti])a$/gi,"$1a");
Z.plural(/sis$/gi,"ses");Z.plural(/f+e?$/gi,"ves");Z.plural(/(cuff|roof)$/gi,"$1s");Z.plural(/([ht]ive)$/gi,"$1s");Z.plural(/([^aeiouy]o)$/gi,"$1es");Z.plural(/([^aeiouy]|qu)y$/gi,"$1ies");Z.plural(/(x|ch|ss|sh)$/gi,"$1es");Z.plural(/(matr|vert|ind)(?:ix|ex)$/gi,"$1ices");Z.plural(/([ml])ouse$/gi,"$1ice");Z.plural(/([ml])ice$/gi,"$1ice");Z.plural(/^(ox)$/gi,"$1en");Z.plural(/^(oxen)$/gi,"$1");Z.plural(/(quiz)$/gi,"$1zes");Z.plural(/(phot|cant|hom|zer|pian|portic|pr|quart|kimon)o$/gi,"$1os");
Z.plural(/(craft)$/gi,"$1");Z.plural(/([ft])[eo]{2}(th?)$/gi,"$1ee$2");Z.singular(/s$/gi,"");Z.singular(/([pst][aiu]s)$/gi,"$1");Z.singular(/([aeiouy])ss$/gi,"$1ss");Z.singular(/(n)ews$/gi,"$1ews");Z.singular(/([ti])a$/gi,"$1um");Z.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/gi,"$1$2sis");Z.singular(/(^analy)ses$/gi,"$1sis");Z.singular(/(i)(f|ves)$/i,"$1fe");Z.singular(/([aeolr]f?)(f|ves)$/i,"$1f");Z.singular(/([ht]ive)s$/gi,"$1");Z.singular(/([^aeiouy]|qu)ies$/gi,"$1y");
Z.singular(/(s)eries$/gi,"$1eries");Z.singular(/(m)ovies$/gi,"$1ovie");Z.singular(/(x|ch|ss|sh)es$/gi,"$1");Z.singular(/([ml])(ous|ic)e$/gi,"$1ouse");Z.singular(/(bus)(es)?$/gi,"$1");Z.singular(/(o)es$/gi,"$1");Z.singular(/(shoe)s?$/gi,"$1");Z.singular(/(cris|ax|test)[ie]s$/gi,"$1is");Z.singular(/(octop|vir|fung|foc|radi|alumn)(i|us)$/gi,"$1us");Z.singular(/(census|alias|status)(es)?$/gi,"$1");Z.singular(/^(ox)(en)?/gi,"$1");Z.singular(/(vert|ind)(ex|ices)$/gi,"$1ex");
Z.singular(/(matr)(ix|ices)$/gi,"$1ix");Z.singular(/(quiz)(zes)?$/gi,"$1");Z.singular(/(database)s?$/gi,"$1");Z.singular(/ee(th?)$/gi,"oo$1");Z.irregular("person","people");Z.irregular("man","men");Z.irregular("child","children");Z.irregular("sex","sexes");Z.irregular("move","moves");Z.irregular("save","saves");Z.irregular("save","saves");Z.irregular("cow","kine");Z.irregular("goose","geese");Z.irregular("zombie","zombies");Z.uncountable("equipment,information,rice,money,species,series,fish,sheep,jeans".split(","));
G(u,j,m,{pluralize:function(){return Ob(this,j)},singularize:function(){return Ob(this,m)},humanize:function(){var a=Pb(this,Hb);a=a.replace(/_id$/g,"");a=a.replace(/(_)?([a-z\d]*)/gi,function(b,c,d){return(c?" ":"")+(Ib[d]||d.toLowerCase())});return Qb(a)},titleize:function(){var a=/[.:;!]$/,b,c,d;return this.spacify().humanize().words(function(e,g,f){b=a.test(e);d=g==0||g==f.length-1||b||c;c=b;return d||Jb.indexOf(e)===-1?Qb(e):e}).join(" ")},parameterize:function(a){var b=this;if(a===undefined)a=
"-";if(b.normalize)b=b.normalize();b=b.replace(/[^a-z0-9\-_]+/gi,a);if(a)b=b.replace(new s("^{sep}+|{sep}+$|({sep}){sep}+".assign({sep:R(a)}),"g"),"$1");return encodeURI(b.toLowerCase())}});u.Inflector=Z;u.Inflector.acronyms=Ib;
