<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Container 布局容器</h2>
      <p>用于布局的容器组件，方便快速搭建页面的基本结构：</p>
      <p><code>&lt;el-container&gt;</code>：外层容器。当子元素中包含 <code>&lt;el-header&gt;</code> 或 <code>&lt;el-footer&gt;</code> 时，全部子元素会垂直上下排列，否则会水平左右排列。</p>
      <p><code>&lt;el-container&gt;</code>：外层容器。当子元素中包含 <code>&lt;el-header&gt;</code> 或 <code>&lt;el-footer&gt;</code> 时，全部子元素会垂直上下排列，否则会水平左右排列。</p>
      <p><code>&lt;el-header&gt;</code>：顶栏容器。</p>
      <p><code>&lt;el-aside&gt;</code>：侧边栏容器。</p>
      <p><code>&lt;el-main&gt;</code>：主要区域容器。</p>
      <p><code>&lt;el-footer&gt;</code>：底栏容器。</p>
      <div class="tip"><p>以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。此外，<code>&lt;el-container&gt;</code> 的子元素只能是后四者，后四者的父元素也只能是
        <code>&lt;el-container&gt;</code>。</p></div>
      <h3>常见页面布局</h3>
      <div class="demo-block">
        <div class="source">
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
          </el-container>
          <br>
          <br>
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
          <br>
          <br>
          <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-main>Main</el-main>
          </el-container>
          <br>
          <br>
          <el-container>
            <el-header>Header</el-header>
            <el-container>
              <el-aside width="200px">Aside</el-aside>
              <el-main>Main</el-main>
            </el-container>
          </el-container>
          <br>
          <br>
          <el-container>
            <el-header>Header</el-header>
            <el-container>
              <el-aside width="200px">Aside</el-aside>
              <el-container>
                <el-main>Main</el-main>
                <el-footer>Footer</el-footer>
              </el-container>
            </el-container>
          </el-container>
          <br>
          <br>
          <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
              <el-header>Header</el-header>
              <el-main>Main</el-main>
            </el-container>
          </el-container>
          <br>
          <br>
          <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
              <el-header>Header</el-header>
              <el-main>Main</el-main>
              <el-footer>Footer</el-footer>
            </el-container>
          </el-container>
        </div>
        <div class="meta">
          <div class="highlight"><pre>
            <code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-header</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-main</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-header</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-main</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-footer</span>&gt;</span>Footer<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-footer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span
    class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-aside</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-main</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-header</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span
      class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-aside</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-main</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-header</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span
      class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-aside</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-main</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-footer</span>&gt;</span>Footer<span
                class="hljs-tag">&lt;/<span class="hljs-name">el-footer</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span
    class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-aside</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span
                class="hljs-tag">&lt;/<span class="hljs-name">el-header</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-main</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span
    class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-aside</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span
                class="hljs-tag">&lt;/<span class="hljs-name">el-header</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-main</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-footer</span>&gt;</span>Footer<span
                class="hljs-tag">&lt;/<span class="hljs-name">el-footer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.el-header</span>, <span class="hljs-selector-class">.el-footer</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#B3C0D1</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">60px</span>;
  }

  <span class="hljs-selector-class">.el-aside</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#D3DCE6</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">200px</span>;
  }

  <span class="hljs-selector-class">.el-main</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#E9EEF3</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">160px</span>;
  }

  <span class="hljs-selector-tag">body</span> &gt; <span class="hljs-selector-class">.el-container</span> {
    <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">40px</span>;
  }

  <span class="hljs-selector-class">.el-container</span><span class="hljs-selector-pseudo">:nth-child(5)</span> <span
                class="hljs-selector-class">.el-aside</span>,
  <span class="hljs-selector-class">.el-container</span><span class="hljs-selector-pseudo">:nth-child(6)</span> <span
                class="hljs-selector-class">.el-aside</span> {
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">260px</span>;
  }

  <span class="hljs-selector-class">.el-container</span><span class="hljs-selector-pseudo">:nth-child(7)</span> <span
                class="hljs-selector-class">.el-aside</span> {
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">320px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[0].expand" :index="0" @switcher="switcherState"></collapseBar>
      </div>
      <h3 id="shi-li">实例</h3>
      <div class="demo-block">
        <div class="source">
          <el-container style="height: 500px; border: 1px solid #eee">
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
              <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                  <template slot="title"><i class="el-icon-message"></i>导航一</template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项4-1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-submenu index="2">
                  <template slot="title"><i class="el-icon-menu"></i>导航二</template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="2-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="2-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="2-4-1">选项4-1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title"><i class="el-icon-setting"></i>导航三</template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="3-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="3-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="3-4-1">选项4-1</el-menu-item>
                  </el-submenu>
                </el-submenu>
              </el-menu>
            </el-aside>

            <el-container>
              <el-header style="text-align: right; font-size: 12px">
                <el-dropdown>
                  <i class="el-icon-setting" style="margin-right: 15px"></i>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span>王小虎</span>
              </el-header>

              <el-main style="line-height: normal;text-align: left">
                <el-table :data="tableData">
                  <el-table-column prop="date" label="日期" width="140">
                  </el-table-column>
                  <el-table-column prop="name" label="姓名" width="120">
                  </el-table-column>
                  <el-table-column prop="address" label="地址">
                  </el-table-column>
                </el-table>
              </el-main>
            </el-container>
          </el-container>
        </div>
        <div class="meta">
          <div class="highlight"><pre>
            <code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-header</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-main</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-header</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-main</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-footer</span>&gt;</span>Footer<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-footer</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span
    class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-aside</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-main</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-header</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span
      class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-aside</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-main</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-header</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span
      class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-aside</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-main</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-footer</span>&gt;</span>Footer<span
                class="hljs-tag">&lt;/<span class="hljs-name">el-footer</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span
    class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-aside</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span
                class="hljs-tag">&lt;/<span class="hljs-name">el-header</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-main</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-aside</span> <span class="hljs-attr">width</span>=<span
    class="hljs-string">"200px"</span>&gt;</span>Aside<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-aside</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-container</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-header</span>&gt;</span>Header<span
                class="hljs-tag">&lt;/<span class="hljs-name">el-header</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-main</span>&gt;</span>Main<span class="hljs-tag">&lt;/<span
                class="hljs-name">el-main</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-footer</span>&gt;</span>Footer<span
                class="hljs-tag">&lt;/<span class="hljs-name">el-footer</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-container</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.el-header</span>, <span class="hljs-selector-class">.el-footer</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#B3C0D1</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">60px</span>;
  }

  <span class="hljs-selector-class">.el-aside</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#D3DCE6</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">200px</span>;
  }

  <span class="hljs-selector-class">.el-main</span> {
    <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#E9EEF3</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;
    <span class="hljs-attribute">text-align</span>: center;
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">160px</span>;
  }

  <span class="hljs-selector-tag">body</span> &gt; <span class="hljs-selector-class">.el-container</span> {
    <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">40px</span>;
  }

  <span class="hljs-selector-class">.el-container</span><span class="hljs-selector-pseudo">:nth-child(5)</span> <span
                class="hljs-selector-class">.el-aside</span>,
  <span class="hljs-selector-class">.el-container</span><span class="hljs-selector-pseudo">:nth-child(6)</span> <span
                class="hljs-selector-class">.el-aside</span> {
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">260px</span>;
  }

  <span class="hljs-selector-class">.el-container</span><span class="hljs-selector-pseudo">:nth-child(7)</span> <span
                class="hljs-selector-class">.el-aside</span> {
    <span class="hljs-attribute">line-height</span>: <span class="hljs-number">320px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[1].expand" :index="1" @switcher="switcherState"></collapseBar>
      </div>
      <h3>Container Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>direction</td><td>子元素的排列方向</td><td>string</td><td>horizontal / vertical</td><td>子元素中有 <code>el-header</code> 或 <code>el-footer</code> 时为 vertical，否则为 horizontal</td></tr></tbody></table>
      <h3>Header Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>顶栏高度</td><td>string</td><td>—</td><td>60px</td></tr></tbody></table>
      <h3>Aside Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>width</td><td>侧边栏宽度</td><td>string</td><td>—</td><td>300px</td></tr></tbody></table>
      <h3>Footer Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>height</td><td>底栏高度</td><td>string</td><td>—</td><td>60px</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  const item = {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }

  export default {
    data () {
      return {
        switchers: [{
          expand: false
        }, {
          expand: false
        }],
        tableData: Array(20).fill(item)
      }
    },
    mounted () {
      this.meta = document.querySelectorAll('.meta')
    },
    methods: {
      switcherState (index) {
        if (this.switchers[index].expand === true) {
          this.meta[index].style.height = '0'
          this.switchers[index].expand = false
        } else {
          this.meta[index].style.height = 'auto'
          this.switchers[index].expand = true
        }
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>
