<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Switch 开关</h2>
      <p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
      <h3>基础用法</h3>
      <div class="demo-block">
        <div class="source">
          <el-switch
            v-model="value2"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </div>
        <div class="meta">
          <div class="description"><p>绑定<code>v-model</code>到一个<code>Boolean</code>类型的变量。可以使用<code>active-color</code>属性与<code>inactive-color</code>属性来设置开关的背景色。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-switch</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value2"</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">"#13ce66"</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">"#ff4949"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-switch</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value1</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">value2</span>: <span class="hljs-literal">true</span>
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>文字描述</h3>
      <div class="demo-block">
        <div class="source">
          <el-switch
            v-model="value3"
            active-text="按月付费"
            inactive-text="按年付费">
          </el-switch>
          <el-switch
            style="display: block"
            v-model="value4"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-text="按月付费"
            inactive-text="按年付费">
          </el-switch>
        </div>
        <div class="meta">
          <div class="description"><p>使用<code>active-text</code>属性与<code>inactive-text</code>属性来设置开关的文字描述。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-switch</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value3"</span>
  <span class="hljs-attr">active-text</span>=<span class="hljs-string">"按月付费"</span>
  <span class="hljs-attr">inactive-text</span>=<span class="hljs-string">"按年付费"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-switch</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-switch</span>
  <span class="hljs-attr">style</span>=<span class="hljs-string">"display: block"</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value4"</span>
  <span class="hljs-attr">active-color</span>=<span class="hljs-string">"#13ce66"</span>
  <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">"#ff4949"</span>
  <span class="hljs-attr">active-text</span>=<span class="hljs-string">"按月付费"</span>
  <span class="hljs-attr">inactive-text</span>=<span class="hljs-string">"按年付费"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-switch</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value3</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">value4</span>: <span class="hljs-literal">true</span>
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>扩展的 value 类型</h3>
      <p>可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。</p>
      <div class="demo-block">
        <div class="source">
          <el-tooltip :content="'Switch value: ' + value5" placement="top">
            <el-switch
              v-model="value5"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="100"
              inactive-value="0">
            </el-switch>
          </el-tooltip>
        </div>
        <div class="meta">
          <div class="description"><p>设置<code>active-value</code>和<code>inactive-value</code>属性，接受<code>Boolean</code>,
            <code>String</code>或<code>Number</code>类型的值。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-tooltip</span> <span class="hljs-attr">:content</span>=<span class="hljs-string">"'Switch value: ' + value5"</span> <span
            class="hljs-attr">placement</span>=<span class="hljs-string">"top"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-switch</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value5"</span>
    <span class="hljs-attr">active-color</span>=<span class="hljs-string">"#13ce66"</span>
    <span class="hljs-attr">inactive-color</span>=<span class="hljs-string">"#ff4949"</span>
    <span class="hljs-attr">active-value</span>=<span class="hljs-string">"100"</span>
    <span class="hljs-attr">inactive-value</span>=<span class="hljs-string">"0"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-switch</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tooltip</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value5</span>: <span class="hljs-string">'100'</span>
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>禁用状态</h3>
      <div class="demo-block">
        <div class="source">
          <el-switch
            v-model="value6"
            disabled>
          </el-switch>
          <el-switch
            v-model="value7"
            disabled>
          </el-switch>
        </div>
        <div class="meta"><div class="description"><p>设置<code>disabled</code>属性，接受一个<code>Boolean</code>，设置<code>true</code>即可禁用。</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-switch</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value6"</span>
  <span class="hljs-attr">disabled</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-switch</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-switch</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value7"</span>
  <span class="hljs-attr">disabled</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-switch</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value6</span>: <span class="hljs-literal">true</span>,
        <span class="hljs-attr">value7</span>: <span class="hljs-literal">false</span>
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>width</td><td>switch 的宽度（像素）</td><td>number</td><td>—</td><td>40</td></tr><tr><td>active-icon-class</td><td>switch 打开时所显示图标的类名，设置此项会忽略 <code>active-text</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>inactive-icon-class</td><td>switch 关闭时所显示图标的类名，设置此项会忽略 <code>inactive-text</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>active-text</td><td>switch 打开时的文字描述</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inactive-text</td><td>switch 关闭时的文字描述</td><td>string</td><td>—</td><td>—</td></tr><tr><td>active-value</td><td>switch 打开时的值</td><td>boolean / string / number</td><td>—</td><td>true</td></tr><tr><td>inactive-value</td><td>switch 关闭时的值</td><td>boolean / string / number</td><td>—</td><td>false</td></tr><tr><td>active-color</td><td>switch 打开时的背景色</td><td>string</td><td>—</td><td>#409EFF</td></tr><tr><td>inactive-color</td><td>switch 关闭时的背景色</td><td>string</td><td>—</td><td>#C0CCDA</td></tr><tr><td>name</td><td>switch 对应的 name 属性</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>
      <h3>Events</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>switch 状态发生变化时的回调函数</td><td>新状态的值</td></tr></tbody></table>
      <h3>Methods</h3>
      <table class="table"><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 Switch 获取焦点</td><td>-</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {
    data () {
      return {
        value1: true,
        value2: true,
        value3: true,
        value4: true,
        value5: '100',
        value6: true,
        value7: false
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .el-switch {
    margin: 20px 20px 20px 0;
  }
</style>
