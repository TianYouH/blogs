import{_ as o,M as s,p as r,q as d,R as e,t,N as n,a1 as i}from"./framework-8fa3e4ce.js";const h={},c=e("h1",{id:"gitflow",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#gitflow","aria-hidden":"true"},"#"),t(" GitFlow")],-1),p=e("p",null,"最早诞生、并得到广泛采用的一种工作流程，就是Git flow 。",-1),u=["src"],_=i('<h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h2><p>它最主要的特点有两个：</p><ol><li>首先，项目存在两个长期分支。</li></ol><ul><li>主分支 <code>master</code></li><li>开发分支 <code>develop</code></li></ul><p>前者用于存放对外发布的版本，任何时候在这个分支拿到的，都是稳定的分布版；后者用于日常开发，存放最新的开发版。</p><ol start="2"><li>其次，项目存在三种短期分支。</li></ol><ul><li>功能分支 <code>feature</code></li><li>补丁分支 <code>hotfix</code></li><li>预发分支 <code>release</code></li></ul><p>一旦完成开发，它们就会被合并进develop或master，然后被删除。</p><h2 id="分支" tabindex="-1"><a class="header-anchor" href="#分支" aria-hidden="true">#</a> 分支</h2><h3 id="主分支master" tabindex="-1"><a class="header-anchor" href="#主分支master" aria-hidden="true">#</a> 主分支Master</h3><p>首先，代码库应该有一个、且仅有一个主分支。所有提供给用户使用的正式版本，都在这个主分支上发布。</p>',11),g=["src"],f=e("p",null,"Git主分支的名字，默认叫做Master。它是自动建立的，版本库初始化以后，默认就是在主分支在进行开发。",-1),m=e("h3",{id:"开发分支develop",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#开发分支develop","aria-hidden":"true"},"#"),t(" 开发分支Develop")],-1),b=e("p",null,"主分支只用来分布重大版本，日常开发应该在另一条分支上完成。我们把开发用的分支，叫做Develop。",-1),v=["src"],x=i('<p>这个分支可以用来生成代码的最新隔夜版本（nightly）。如果想正式对外发布，就在Master分支上，对Develop分支进行&quot;合并&quot;（merge）。</p><h3 id="临时性分支" tabindex="-1"><a class="header-anchor" href="#临时性分支" aria-hidden="true">#</a> 临时性分支</h3><p>前面讲到版本库的两条主要分支：Master和Develop。前者用于正式发布，后者用于日常开发。其实，常设分支只需要这两条就够了，不需要其他了。</p><p>但是，除了常设分支以外，还有一些临时性分支，用于应对一些特定目的的版本开发。临时性分支主要有三种：</p><ul><li><p>功能（feature）分支</p></li><li><p>预发布（release）分支</p></li><li><p>修补bug（fixbug）分支</p></li></ul><p>这三种分支都属于临时性需要，使用完以后，应该删除，使得代码库的常设分支始终只有Master和Develop。</p><h4 id="功能分支feature" tabindex="-1"><a class="header-anchor" href="#功能分支feature" aria-hidden="true">#</a> 功能分支Feature</h4><p>它是为了开发某种特定功能，从Develop分支上面分出来的。开发完成后，要再并入Develop。</p>',8),w=["src"],D=i('<p>功能分支的名字，推荐采用feature/*的形式命名。</p><h4 id="预发布分支release" tabindex="-1"><a class="header-anchor" href="#预发布分支release" aria-hidden="true">#</a> 预发布分支Release</h4><p>预发布分支，它是指发布正式版本之前（即合并到Master分支之前），我们可能需要有一个预发布的版本进行测试。</p><p>预发布分支是从Develop分支上面分出来的，预发布结束以后，必须合并进Develop和Master分支。</p><p>它的命名，推荐采用release/*的形式。</p><h4 id="修补bug分支fixbug" tabindex="-1"><a class="header-anchor" href="#修补bug分支fixbug" aria-hidden="true">#</a> 修补bug分支Fixbug</h4><p>修补bug分支。软件正式发布以后，难免会出现bug。这时就需要创建一个分支，进行bug修补。</p><p>修补bug分支是从Master分支上面分出来的。修补结束以后，再合并进Master和Develop分支。</p>',8),M=["src"],B=e("p",null,"它的命名，推荐采用fixbug/*的形式。",-1),k=e("h2",{id:"评价",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#评价","aria-hidden":"true"},"#"),t(" 评价")],-1),F=e("p",null,"Git flow的优点是清晰可控，缺点是相对复杂，需要同时维护两个长期分支。",-1),G=e("p",null,"大多数工具都将master当作默认分支，可是开发是在develop分支进行的，这导致经常要切换分支，非常烦人。",-1),N=e("p",null,'更大问题在于，这个模式是基于"版本发布"的，目标是一段时间以后产出一个新版本。',-1),$=e("p",null,'但是，很多网站项目是"持续发布"，代码一有变动，就部署一次。这时，master分支和develop分支的差别不大，没必要维护两个长期分支。',-1),q=e("p",null,"参考资料：",-1),V={href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"};function E(a,I){const l=s("ExternalLinkIcon");return r(),d("div",null,[c,p,e("img",{src:a.$withBase("/image/dev/git/gitFlow.png"),alt:"示例"},null,8,u),_,e("img",{src:a.$withBase("/image/dev/git/master.png"),alt:"示例"},null,8,g),f,m,b,e("img",{src:a.$withBase("/image/dev/git/develop.png"),alt:"示例"},null,8,v),x,e("img",{src:a.$withBase("/image/dev/git/feature.png"),alt:"示例"},null,8,w),D,e("img",{src:a.$withBase("/image/dev/git/fixbug.png"),alt:"示例"},null,8,M),B,k,F,G,N,$,e("blockquote",null,[q,e("p",null,[e("a",V,[t("Git flow"),n(l)])])])])}const R=o(h,[["render",E],["__file","gitFlow.html.vue"]]);export{R as default};
