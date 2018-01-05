<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Breadcrumb 面包屑</h2>
      <p>显示当前页面的路径，快速返回之前的任意页面。</p>
      <h3>基础用法</h3>
      <p>适用广泛的基础用法。</p>
      <div class="demo-block">
        <div class="source">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="meta"><div class="description"><p>在<code>el-breadcrumb</code>中使用<code>el-breadcrumb-item</code>标签表示从首页开始的每一级。Element 提供了一个<code>separator</code>属性，在<code>el-breadcrumb</code>标签中设置它来决定分隔符，它只能是字符串，默认为斜杠<code>/</code>。</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-breadcrumb</span> <span class="hljs-attr">separator</span>=<span class="hljs-string">"/"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-breadcrumb-item</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ path: '/' }"</span>&gt;</span>首页<span class="hljs-tag">&lt;/<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>活动管理<span class="hljs-tag">&lt;/<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>活动列表<span class="hljs-tag">&lt;/<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>活动详情<span class="hljs-tag">&lt;/<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-breadcrumb</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>图标分隔符</h3>
      <p>选项卡样式的标签页。</p>
      <div class="demo-block">
        <div class="source">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="meta"><div class="description"><p>通过设置 <code>separator-class</code> 可使用相应的 <code>iconfont</code> 作为分隔符，注意这将使 <code>separator</code> 设置失效</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-breadcrumb</span> <span class="hljs-attr">separator-class</span>=<span class="hljs-string">"el-icon-arrow-right"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-breadcrumb-item</span> <span class="hljs-attr">:to</span>=<span class="hljs-string">"{ path: '/' }"</span>&gt;</span>首页<span class="hljs-tag">&lt;/<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>活动管理<span class="hljs-tag">&lt;/<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>活动列表<span class="hljs-tag">&lt;/<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>活动详情<span class="hljs-tag">&lt;/<span class="hljs-name">el-breadcrumb-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-breadcrumb</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>Breadcrumb Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>separator</td><td>分隔符</td><td>string</td><td>—</td><td>斜杠'/'</td></tr><tr><td>separator-class</td><td>图标分隔符 class</td><td>string</td><td>—</td><td>-</td></tr></tbody></table>
      <h3>Breadcrumb Item Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>to</td><td>路由跳转对象，同 <code>vue-router</code> 的 <code>to</code></td><td>string/object</td><td>—</td><td>—</td></tr><tr><td>replace</td><td>在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

</style>
