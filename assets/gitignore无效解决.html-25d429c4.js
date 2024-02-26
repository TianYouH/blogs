import{_ as e,p as i,q as a,a1 as n}from"./framework-8fa3e4ce.js";const t={},r=n(`<h1 id="gitignore无效解决" tabindex="-1"><a class="header-anchor" href="#gitignore无效解决" aria-hidden="true">#</a> gitignore无效解决</h1><p>解决方法是先把本地缓存删除，然后再提交。</p><div class="language-bsah line-numbers-mode" data-ext="bsah"><pre class="language-bsah"><code>git rm -r --cached .
git add .
git commit -m &quot;update .gitignore&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),s=[r];function d(c,o){return i(),a("div",null,s)}const _=e(t,[["render",d],["__file","gitignore无效解决.html.vue"]]);export{_ as default};
