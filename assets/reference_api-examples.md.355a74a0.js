import{u as p,o,c as i,k as e,t as s,l as t,U as c,a}from"./chunks/framework.b3384232.js";const d=c(`<h1 id="runtime-api-examples" tabindex="-1">Runtime API Examples <a class="header-anchor" href="#runtime-api-examples" aria-label="Permalink to &quot;Runtime API Examples&quot;">​</a></h1><p>This page demonstrates usage of some of the runtime APIs provided by VitePress.</p><p>The main <code>useData()</code> API can be used to access site, theme, and page data for the current page. It works in both <code>.md</code> and <code>.vue</code> files:</p><div class="language-md"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">&lt;script setup&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">## </span><span style="color:#FFCB6B;">Results</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">Theme Data</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">Page Data</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">### </span><span style="color:#FFCB6B;">Page Frontmatter</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span></code></pre></div><h2 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-label="Permalink to &quot;Results&quot;">​</a></h2><h3 id="theme-data" tabindex="-1">Theme Data <a class="header-anchor" href="#theme-data" aria-label="Permalink to &quot;Theme Data&quot;">​</a></h3>`,6),m=e("h3",{id:"page-data",tabindex:"-1"},[a("Page Data "),e("a",{class:"header-anchor",href:"#page-data","aria-label":'Permalink to "Page Data"'},"​")],-1),h=e("h3",{id:"page-frontmatter",tabindex:"-1"},[a("Page Frontmatter "),e("a",{class:"header-anchor",href:"#page-frontmatter","aria-label":'Permalink to "Page Frontmatter"'},"​")],-1),u=e("h2",{id:"more",tabindex:"-1"},[a("More "),e("a",{class:"header-anchor",href:"#more","aria-label":'Permalink to "More"'},"​")],-1),_=e("p",null,[a("Check out the documentation for the "),e("a",{href:"https://vitepress.dev/reference/runtime-api#usedata",target:"_blank",rel:"noreferrer"},"full list of runtime APIs"),a(".")],-1),b=JSON.parse('{"title":"Runtime API Examples","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"reference/api-examples.md","filePath":"reference/api-examples.md"}'),g={name:"reference/api-examples.md"},y=Object.assign(g,{setup(f){const{site:D,theme:n,page:l,frontmatter:r}=p();return(A,C)=>(o(),i("div",null,[d,e("pre",null,s(t(n)),1),m,e("pre",null,s(t(l)),1),h,e("pre",null,s(t(r)),1),u,_]))}});export{b as __pageData,y as default};