<template>
  <div class="page-component__content">
    <section class="content">
      <h2>NavMenu 导航菜单</h2>
      <p>为网站提供导航功能的菜单。 </p>
      <h3>顶栏</h3>
      <p>适用广泛的基础用法。</p>
      <div class="demo-block demo-box demo-menu">
        <div class="source">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a>订单管理</a></el-menu-item>
          </el-menu>
          <div class="line"></div>
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a>订单管理</a></el-menu-item>
          </el-menu>
        </div>
        <div class="meta">
          <div class="description"><p>导航菜单默认为垂直模式，通过<code>mode</code>属性可以使导航菜单变更为水平模式。另外，在菜单中通过<code>submenu</code>组件可以生成二级菜单。Menu
            还提供了<code>background-color</code>、<code>text-color</code>和<code>active-text-color</code>，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-menu</span> <span class="hljs-attr">:default-active</span>=<span class="hljs-string">"activeIndex"</span> <span
            class="hljs-attr">class</span>=<span class="hljs-string">"el-menu-demo"</span> <span
            class="hljs-attr">mode</span>=<span class="hljs-string">"horizontal"</span> <span
            class="hljs-attr">@select</span>=<span class="hljs-string">"handleSelect"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span
    class="hljs-string">"1"</span>&gt;</span>处理中心<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-submenu</span> <span class="hljs-attr">index</span>=<span
    class="hljs-string">"2"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span
      class="hljs-string">"title"</span>&gt;</span>我的工作台<span class="hljs-tag">&lt;/<span
              class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span
      class="hljs-string">"2-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span
      class="hljs-string">"2-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span
      class="hljs-string">"2-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-menu-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-submenu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span
    class="hljs-string">"3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>订单管理<span
              class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
  class="hljs-string">"line"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-menu</span>
  <span class="hljs-attr">:default-active</span>=<span class="hljs-string">"activeIndex2"</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">"el-menu-demo"</span>
  <span class="hljs-attr">mode</span>=<span class="hljs-string">"horizontal"</span>
  <span class="hljs-attr">@select</span>=<span class="hljs-string">"handleSelect"</span>
  <span class="hljs-attr">background-color</span>=<span class="hljs-string">"#545c64"</span>
  <span class="hljs-attr">text-color</span>=<span class="hljs-string">"#fff"</span>
  <span class="hljs-attr">active-text-color</span>=<span class="hljs-string">"#ffd04b"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span
    class="hljs-string">"1"</span>&gt;</span>处理中心<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-submenu</span> <span class="hljs-attr">index</span>=<span
    class="hljs-string">"2"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span
      class="hljs-string">"title"</span>&gt;</span>我的工作台<span class="hljs-tag">&lt;/<span
              class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span
      class="hljs-string">"2-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span
      class="hljs-string">"2-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span
      class="hljs-string">"2-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-menu-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-submenu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span
    class="hljs-string">"3"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span>&gt;</span>订单管理<span
              class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">activeIndex</span>: <span class="hljs-string">'1'</span>,
        <span class="hljs-attr">activeIndex2</span>: <span class="hljs-string">'1'</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleSelect(key, keyPath) {
        <span class="hljs-built_in">console</span>.log(key, keyPath);
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>侧栏</h3>
      <p>垂直菜单，可内嵌子菜单。</p>
      <div class="demo-block demo-box demo-menu">
        <div class="source">
          <el-row class="tac">
            <el-col :span="12">
              <h5>默认颜色</h5>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
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
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
              </el-menu>
            </el-col>
            <el-col :span="12">
              <h5>自定义颜色</h5>
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>导航一</span>
                  </template>
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
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航三</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
        <div class="meta"><div class="description"><p>通过<code>el-menu-item-group</code>组件可以实现菜单进行分组，分组名可以通过<code>title</code>属性直接设定，也可以通过具名 slot 来设定。</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-row</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"tac"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>默认颜色<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-menu</span>
      <span class="hljs-attr">default-active</span>=<span class="hljs-string">"2"</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">"el-menu-vertical-demo"</span>
      <span class="hljs-attr">@open</span>=<span class="hljs-string">"handleOpen"</span>
      <span class="hljs-attr">@close</span>=<span class="hljs-string">"handleClose"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-location"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>导航一<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item-group</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>分组一<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"分组2"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">el-submenu</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-submenu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-menu"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航二<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-setting"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航三<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span class="hljs-string">"12"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">h5</span>&gt;</span>自定义颜色<span class="hljs-tag">&lt;/<span class="hljs-name">h5</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-menu</span>
      <span class="hljs-attr">default-active</span>=<span class="hljs-string">"2"</span>
      <span class="hljs-attr">class</span>=<span class="hljs-string">"el-menu-vertical-demo"</span>
      <span class="hljs-attr">@open</span>=<span class="hljs-string">"handleOpen"</span>
      <span class="hljs-attr">@close</span>=<span class="hljs-string">"handleClose"</span>
      <span class="hljs-attr">background-color</span>=<span class="hljs-string">"#545c64"</span>
      <span class="hljs-attr">text-color</span>=<span class="hljs-string">"#fff"</span>
      <span class="hljs-attr">active-text-color</span>=<span class="hljs-string">"#ffd04b"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-location"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>导航一<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item-group</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>分组一<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"分组2"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item-group</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">el-submenu</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-submenu</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-menu"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航二<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-setting"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航三<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-row</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      handleOpen(key, keyPath) {
        <span class="hljs-built_in">console</span>.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        <span class="hljs-built_in">console</span>.log(key, keyPath);
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>折叠</h3>
      <div class="demo-block">
        <div class="source">
          <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
          <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
          </el-menu>
        </div>
        <div class="meta"><!----><div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"isCollapse"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-bottom: 20px;"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"false"</span>&gt;</span>展开<span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span class="hljs-attr">:label</span>=<span class="hljs-string">"true"</span>&gt;</span>收起<span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-menu</span> <span class="hljs-attr">default-active</span>=<span class="hljs-string">"1-4-1"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-menu-vertical-demo"</span> <span class="hljs-attr">@open</span>=<span class="hljs-string">"handleOpen"</span> <span class="hljs-attr">@close</span>=<span class="hljs-string">"handleClose"</span> <span class="hljs-attr">:collapse</span>=<span class="hljs-string">"isCollapse"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-location"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航一<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item-group</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>分组一<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-2"</span>&gt;</span>选项2<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item-group</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"分组2"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-3"</span>&gt;</span>选项3<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item-group</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-submenu</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>选项4<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"1-4-1"</span>&gt;</span>选项1<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-submenu</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-submenu</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"2"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-menu"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航二<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-menu-item</span> <span class="hljs-attr">index</span>=<span class="hljs-string">"3"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-setting"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">"title"</span>&gt;</span>导航三<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-menu-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-menu</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.el-menu-vertical-demo</span><span class="hljs-selector-pseudo">:not(.el-menu--collapse)</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">200px</span>;
    <span class="hljs-attribute">min-height</span>: <span class="hljs-number">400px</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">isCollapse</span>: <span class="hljs-literal">true</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleOpen(key, keyPath) {
        <span class="hljs-built_in">console</span>.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        <span class="hljs-built_in">console</span>.log(key, keyPath);
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>Menu Attribute</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>mode</td><td>模式</td><td>string</td><td>horizontal / vertical</td><td>vertical</td></tr><tr><td>collapse</td><td>是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>background-color</td><td>菜单的背景色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#ffffff</td></tr><tr><td>text-color</td><td>菜单的文字颜色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#303133</td></tr><tr><td>active-text-color</td><td>当前激活菜单的文字颜色（仅支持 hex 格式）</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>default-active</td><td>当前激活菜单的 index</td><td>string</td><td>—</td><td>—</td></tr><tr><td>default-openeds</td><td>当前打开的sub-menu的 key 数组</td><td>Array</td><td>—</td><td>—</td></tr><tr><td>unique-opened</td><td>是否只保持一个子菜单的展开</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>menu-trigger</td><td>子菜单打开的触发方式(只在 mode 为 horizontal 时有效)</td><td>string</td><td>—</td><td>hover</td></tr><tr><td>router</td><td>是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>
      <h3>Menu Methods</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>open</td><td>展开指定的 sub-menu</td><td>index: 需要打开的 sub-menu 的 index</td></tr><tr><td>close</td><td>收起指定的 sub-menu</td><td>index: 需要收起的 sub-menu 的 index</td></tr></tbody></table>
      <h3>Menu Events</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>select</td><td>菜单激活回调</td><td>index: 选中菜单项的 indexPath: 选中菜单项的 index path</td></tr><tr><td>open</td><td>sub-menu 展开的回调</td><td>index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path</td></tr><tr><td>close</td><td>sub-menu 收起的回调</td><td>index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path</td></tr></tbody></table>
      <h3>SubMenu Attribute</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>唯一标志</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>
      <h3>Menu-Item Attribute</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>index</td><td>唯一标志</td><td>string</td><td>—</td><td>—</td></tr><tr><td>route</td><td>Vue Router 路径对象</td><td>Object</td><td>—</td><td>—</td></tr></tbody></table>
      <h3>Menu-Group Attribute</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>分组标题</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {

    data () {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        isCollapse: true
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath)
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath)
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .demo-box.demo-menu .el-menu-demo {
    padding-left: 55px;
  }

  .demo-box.demo-menu .line {
    height: 1px;
    background-color: #e0e6ed;
    margin: 35px -24px;
  }

  .demo-box.demo-menu .tac {
    text-align: center;
  }

  .demo-box.demo-menu h5 {
    font-size: 14px;
    color: #8492a6;
    margin-top: 10px;
  }

  .demo-box.demo-menu .tac .el-menu-vertical-demo {
    display: inline-block;
    text-align: left;
  }

  .demo-box.demo-menu .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
