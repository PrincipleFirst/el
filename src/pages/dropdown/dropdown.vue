<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Dropdown 下拉菜单</h2>
      <p>将动作或菜单折叠到下拉菜单中。</p>
      <h3>基础用法</h3>
      <p>移动到下拉菜单上，展开更多操作。</p>
      <div class="demo-block">
        <div class="source">
          <el-dropdown>
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="meta">
          <div class="description"><p>在<code>el-breadcrumb</code>中使用<code>el-breadcrumb-item</code>标签表示从首页开始的每一级。Element
            提供了一个<code>separator</code>属性，在<code>el-breadcrumb</code>标签中设置它来决定分隔符，它只能是字符串，默认为斜杠<code>/</code>。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-breadcrumb</span> <span class="hljs-attr">separator</span>=<span class="hljs-string">"/"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-breadcrumb-item</span> <span class="hljs-attr">:to</span>=<span
    class="hljs-string">"{ path: '/' }"</span>&gt;</span>首页<span class="hljs-tag">&lt;/<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>活动管理<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-breadcrumb-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>活动列表<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-breadcrumb-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>活动详情<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-breadcrumb-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-breadcrumb</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>触发对象</h3>
      <p>可使用按钮触发下拉菜单。</p>
      <div class="demo-block">
        <div class="source">
          <el-dropdown>
            <el-button type="primary">
              更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <el-dropdown split-button type="primary" @click="handleClick">
            更多菜单
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="meta">
          <div class="description"><p>
            设置<code>split-button</code>属性来让触发下拉元素呈现为按钮组，左边是功能按钮，右边是触发下拉菜单的按钮，设置为<code>true</code>即可。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-dropdown</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
    class="hljs-string">"primary"</span>&gt;</span>
    更多菜单<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span
              class="hljs-string">"el-icon-arrow-down el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">i</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span
    class="hljs-string">"dropdown"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown</span> <span class="hljs-attr">split-button</span> <span
  class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span
  class="hljs-string">"handleClick"</span>&gt;</span>
  更多菜单
  <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span
    class="hljs-string">"dropdown"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.el-dropdown</span> {
    <span class="hljs-attribute">vertical-align</span>: top;
  }
  <span class="hljs-selector-class">.el-dropdown</span> + <span class="hljs-selector-class">.el-dropdown</span> {
    <span class="hljs-attribute">margin-left</span>: <span class="hljs-number">15px</span>;
  }
  <span class="hljs-selector-class">.el-icon-arrow-down</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      handleClick() {
        alert(<span class="hljs-string">'button click'</span>);
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>触发方式</h3>
      <p>可以配置 click 激活或者 hover 激活。</p>
      <div class="demo-block demo-dropdown">
        <div class="source">
          <el-row class="block-col-2">
            <el-col :span="12">
              <span class="demonstration">hover 激活</span>
              <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
            <el-col :span="12">
              <span class="demonstration">click 激活</span>
              <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                  <el-dropdown-item>双皮奶</el-dropdown-item>
                  <el-dropdown-item>蚵仔煎</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </el-col>
          </el-row>
        </div>
        <div class="meta">
          <div class="description"><p>在<code>trigger</code>属性设置为<code>click</code>即可。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-row</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"block-col-2"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span
    class="hljs-string">"12"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>hover 激活<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
        class="hljs-string">"el-dropdown-link"</span>&gt;</span>
        下拉菜单<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span
              class="hljs-string">"el-icon-arrow-down el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">i</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-menu</span> <span
        class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span
    class="hljs-string">"12"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>click 激活<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown</span> <span class="hljs-attr">trigger</span>=<span
      class="hljs-string">"click"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
        class="hljs-string">"el-dropdown-link"</span>&gt;</span>
        下拉菜单<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span
              class="hljs-string">"el-icon-arrow-down el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">i</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-menu</span> <span
        class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-menu</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>指令事件</h3>
      <p>点击菜单项后会触发事件，用户可以通过相应的菜单项 key 进行不同的操作</p>
      <div class="demo-block">
        <div class="source">
          <el-dropdown @command="handleCommand">
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="a">黄金糕</el-dropdown-item>
              <el-dropdown-item command="b">狮子头</el-dropdown-item>
              <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
              <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-dropdown</span> <span
            class="hljs-attr">@command</span>=<span class="hljs-string">"handleCommand"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"el-dropdown-link"</span>&gt;</span>
    下拉菜单<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span
              class="hljs-string">"el-icon-arrow-down el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">i</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span
    class="hljs-string">"dropdown"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span> <span
      class="hljs-attr">command</span>=<span class="hljs-string">"a"</span>&gt;</span>黄金糕<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span> <span
      class="hljs-attr">command</span>=<span class="hljs-string">"b"</span>&gt;</span>狮子头<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span> <span
      class="hljs-attr">command</span>=<span class="hljs-string">"c"</span>&gt;</span>螺蛳粉<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span> <span
      class="hljs-attr">command</span>=<span class="hljs-string">"d"</span> <span class="hljs-attr">disabled</span>&gt;</span>双皮奶<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span> <span
      class="hljs-attr">command</span>=<span class="hljs-string">"e"</span> <span
      class="hljs-attr">divided</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-dropdown-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.el-dropdown-link</span> {
    <span class="hljs-attribute">cursor</span>: pointer;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#409EFF</span>;
  }
  <span class="hljs-selector-class">.el-icon-arrow-down</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      handleCommand(command) {
        <span class="hljs-keyword">this</span>.$message(<span class="hljs-string">'click on item '</span> + command);
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>菜单隐藏方式</h3>
      <p>可以hide-on-click属性来配置。</p>
      <div class="demo-block">
        <div class="source">
          <el-dropdown :hide-on-click="false">
  <span class="el-dropdown-link">
    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
  </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item disabled>双皮奶</el-dropdown-item>
              <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="meta"><div class="description"><p>下拉菜单默认在点击菜单项后会被隐藏，将<code>hide-on-click</code>属性默认为<code>false</code>可以关闭此功能。</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown</span> <span class="hljs-attr">:hide-on-click</span>=<span class="hljs-string">"false"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-dropdown-link"</span>&gt;</span>
    下拉菜单<span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-arrow-down el-icon--right"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span> <span class="hljs-attr">disabled</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span> <span class="hljs-attr">divided</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.el-dropdown-link</span> {
    <span class="hljs-attribute">cursor</span>: pointer;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#409EFF</span>;
  }
  <span class="hljs-selector-class">.el-icon-arrow-down</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">12px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>不同尺寸</h3>
      <p>Dropdown 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的尺寸。</p>
      <div class="demo-block">
        <div class="source">
          <el-dropdown split-button type="primary">
            默认尺寸
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown size="medium" split-button type="primary">
            中等尺寸
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown size="small" split-button type="primary">
            小型尺寸
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>

          <el-dropdown size="mini" split-button type="primary">
            超小尺寸
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="meta"><div class="description"><p>额外的尺寸：<code>medium</code>、<code>small</code>、<code>mini</code>，通过设置<code>size</code>属性来配置它们。</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown</span> <span class="hljs-attr">split-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>
  默认尺寸
  <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span> <span class="hljs-attr">split-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>
  中等尺寸
  <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span> <span class="hljs-attr">split-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>
  小型尺寸
  <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"mini"</span> <span class="hljs-attr">split-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"primary"</span>&gt;</span>
  超小尺寸
  <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-menu</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>黄金糕<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>狮子头<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>螺蛳粉<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>双皮奶<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dropdown-item</span>&gt;</span>蚵仔煎<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown-menu</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-dropdown</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>Dropdown Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>菜单按钮类型，同 Button 组件(只在<code>split-button</code>为 true 的情况下有效)</td><td>string</td><td>—</td><td>—</td></tr><tr><td>size</td><td>菜单尺寸，在<code>split-button</code>为 true 的情况下也对触发按钮生效</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>split-button</td><td>下拉触发元素呈现为按钮组</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>placement</td><td>菜单弹出位置</td><td>string</td><td>top/top-start/top-end/bottom/bottom-start/bottom-end</td><td>bottom-end</td></tr><tr><td>trigger</td><td>触发下拉的行为</td><td>string</td><td>hover, click</td><td>hover</td></tr><tr><td>hide-on-click</td><td>是否在点击菜单项后隐藏菜单</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-timeout</td><td>展开下拉菜单的延时</td><td>number</td><td>—</td><td>250</td></tr><tr><td>hide-timeout</td><td>收起下拉菜单的延时</td><td>number</td><td>—</td><td>150</td></tr></tbody></table>
      <h3>Dropdown Events</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>click</td><td><code>split-button</code> 为 true 时，点击左侧按钮的回调</td><td>—</td></tr><tr><td>command</td><td>点击菜单项触发的事件回调</td><td>dropdown-item 的指令</td></tr><tr><td>visible-change</td><td>下拉框出现/隐藏时触发</td><td>出现则为 true，隐藏则为 false</td></tr></tbody></table>
      <h3>Dropdown Menu Item Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>command</td><td>指令</td><td>string/number/object</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>divided</td><td>显示分割线</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {
    methods: {
      handleClick () {
        alert('button click')
      },
      handleCommand (command) {
        this.$message('click on item ' + command)
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .demo-dropdown .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }

  .el-dropdown {
    vertical-align: top;
  }

  .el-dropdown + .el-dropdown {
    margin-left: 15px;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .block-col-2 {
    margin: -24px;
  }

  .el-row {
    position: relative;
    box-sizing: border-box;
  }

  .block-col-2 .el-col {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
  }
</style>
