<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Progress 进度条</h2>
      <p>用于展示操作进度，告知用户当前状态和预期。</p>
      <h3>线形进度条 — 百分比外显</h3>
      <div class="demo-block">
        <div class="source">
          <el-progress :percentage="0"></el-progress>
          <el-progress :percentage="70"></el-progress>
          <el-progress :percentage="100" status="success"></el-progress>
          <el-progress :percentage="50" status="exception"></el-progress>
        </div>
        <div class="meta"><div class="description"><p>Progress 组件设置<code>percentage</code>属性即可，表示进度条对应的百分比，<strong>必填</strong>，必须在 0-100。</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"0"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"70"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"100"</span> <span class="hljs-attr">status</span>=<span class="hljs-string">"success"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-progress</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"50"</span> <span class="hljs-attr">status</span>=<span class="hljs-string">"exception"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-progress</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>线形进度条 — 百分比内显</h3>
      <p>百分比不占用额外控件，适用于文件上传等场景。</p>
      <div class="demo-block">
        <div class="source">
          <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
          <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
        </div>
        <div class="meta"><div class="description"><p>Progress 组件可通过 <code>stroke-width</code> 属性更改进度条的高度，并可通过 <code>text-inside</code> 属性来将进度条描述置于进度条内部。</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-progress</span> <span class="hljs-attr">:text-inside</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:stroke-width</span>=<span class="hljs-string">"18"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"0"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-progress</span> <span class="hljs-attr">:text-inside</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:stroke-width</span>=<span class="hljs-string">"18"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"70"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-progress</span> <span class="hljs-attr">:text-inside</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:stroke-width</span>=<span class="hljs-string">"18"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"100"</span> <span class="hljs-attr">status</span>=<span class="hljs-string">"success"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-progress</span> <span class="hljs-attr">:text-inside</span>=<span class="hljs-string">"true"</span> <span class="hljs-attr">:stroke-width</span>=<span class="hljs-string">"18"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"50"</span> <span class="hljs-attr">status</span>=<span class="hljs-string">"exception"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-progress</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>环形进度条</h3>
      <div class="demo-block">
        <div class="source">
          <el-progress type="circle" :percentage="0"></el-progress>
          <el-progress type="circle" :percentage="25"></el-progress>
          <el-progress type="circle" :percentage="100" status="success"></el-progress>
          <el-progress type="circle" :percentage="50" status="exception"></el-progress>
        </div>
        <div class="meta"><div class="description"><p>Progress 组件可通过 <code>type</code> 属性来指定使用环形进度条，在环形进度条中，还可以通过 <code>width</code> 属性来设置其大小。</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"circle"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"0"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"circle"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"25"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"circle"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"100"</span> <span class="hljs-attr">status</span>=<span class="hljs-string">"success"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-progress</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-progress</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"circle"</span> <span class="hljs-attr">:percentage</span>=<span class="hljs-string">"50"</span> <span class="hljs-attr">status</span>=<span class="hljs-string">"exception"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-progress</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><strong>percentage</strong></td><td><strong>百分比（必填）</strong></td><td>number</td><td>0-100</td><td>0</td></tr><tr><td>type</td><td>进度条类型</td><td>string</td><td>line/circle</td><td>line</td></tr><tr><td>stroke-width</td><td>进度条的宽度，单位 px</td><td>number</td><td>—</td><td>6</td></tr><tr><td>text-inside</td><td>进度条显示文字内置在进度条内（只在 type=line 时可用）</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>status</td><td>进度条当前状态</td><td>string</td><td>success/exception</td><td>—</td></tr><tr><td>width</td><td>环形进度条画布宽度（只在 type=circle 时可用）</td><td>number</td><td></td><td>126</td></tr><tr><td>show-text</td><td>是否显示进度条文字内容</td><td>boolean</td><td>—</td><td>true</td></tr></tbody></table>
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

  .el-progress--line {
    margin-bottom: 15px;
    width: 350px;
  }

  .el-progress--circle {
    margin-right: 15px;
  }
</style>
