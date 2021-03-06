<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Alert 警告</h2>
      <p>用于页面中展示重要的提示信息。</p>
      <h3>基础用法</h3>
      <p>页面中的非浮层元素，不会自动消失。</p>
      <div class="demo-block demo-alert">
        <div class="source">
          <el-alert
            title="成功提示的文案"
            type="success">
          </el-alert>
          <el-alert
            title="消息提示的文案"
            type="info">
          </el-alert>
          <el-alert
            title="警告提示的文案"
            type="warning">
          </el-alert>
          <el-alert
            title="错误提示的文案"
            type="error">
          </el-alert>
        </div>
        <div class="meta">
          <div class="description"><p>Alert 组件提供四种主题，由<code>type</code>属性指定，默认值为<code>info</code>。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"成功提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"消息提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"警告提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"错误提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"error"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>自定义关闭按钮</h3>
      <p>自定义关闭按钮为文字或其他符号。</p>
      <div class="demo-block demo-alert">
        <div class="source">
          <el-alert
            title="不可关闭的 alert"
            type="success"
            :closable="false">
          </el-alert>
          <el-alert
            title="自定义 close-text"
            type="info"
            close-text="知道了">
          </el-alert>
          <el-alert
            title="设置了回调的 alert"
            type="warning"
            @close="hello">
          </el-alert>
        </div>
        <div class="meta">
          <div class="description"><p>在 Alert 组件中，你可以设置是否可关闭，关闭按钮的文本以及关闭时的回调函数。<code>closable</code>属性决定是否可关闭，接受<code>boolean</code>，默认为<code>true</code>。你可以设置<code>close-text</code>属性来代替右侧的关闭图标，注意：<code>close-text</code>必须为文本。设置<code>close</code>事件来设置关闭时的回调。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"不可关闭的 alert"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>
    <span class="hljs-attr">:closable</span>=<span class="hljs-string">"false"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"自定义 close-text"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>
    <span class="hljs-attr">close-text</span>=<span class="hljs-string">"知道了"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"设置了回调的 alert"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>
    <span class="hljs-attr">@close</span>=<span class="hljs-string">"hello"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      hello() {
        alert(<span class="hljs-string">'Hello World!'</span>);
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>带有 icon</h3>
      <p>表示某种状态时提升可读性。</p>
      <div class="demo-block demo-alert">
        <div class="source">
          <el-alert
            title="成功提示的文案"
            type="success"
            show-icon>
          </el-alert>
          <el-alert
            title="消息提示的文案"
            type="info"
            show-icon>
          </el-alert>
          <el-alert
            title="警告提示的文案"
            type="warning"
            show-icon>
          </el-alert>
          <el-alert
            title="错误提示的文案"
            type="error"
            show-icon>
          </el-alert>
        </div>
        <div class="meta">
          <div class="description"><p>通过设置<code>show-icon</code>属性来显示 Alert 的 icon，这能更有效地向用户展示你的显示意图。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"成功提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>
    <span class="hljs-attr">show-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"消息提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>
    <span class="hljs-attr">show-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"警告提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>
    <span class="hljs-attr">show-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"错误提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"error"</span>
    <span class="hljs-attr">show-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>文字居中</h3>
      <p>使用 center 属性让文字水平居中。</p>
      <div class="demo-block demo-alert">
        <div class="source">
          <el-alert
            title="成功提示的文案"
            type="success"
            center
            show-icon>
          </el-alert>
          <el-alert
            title="消息提示的文案"
            type="info"
            center
            show-icon>
          </el-alert>
          <el-alert
            title="警告提示的文案"
            type="warning"
            center
            show-icon>
          </el-alert>
          <el-alert
            title="错误提示的文案"
            type="error"
            center
            show-icon>
          </el-alert>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"成功提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>
    <span class="hljs-attr">center</span>
    <span class="hljs-attr">show-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"消息提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>
    <span class="hljs-attr">center</span>
    <span class="hljs-attr">show-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"警告提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>
    <span class="hljs-attr">center</span>
    <span class="hljs-attr">show-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"错误提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"error"</span>
    <span class="hljs-attr">center</span>
    <span class="hljs-attr">show-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>带有辅助性文字介绍</h3>
      <p>包含标题和内容，解释更详细的警告。</p>
      <div class="demo-block demo-alert">
        <div class="source">
          <el-alert
            title="带辅助性文字介绍"
            type="success"
            description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……">
          </el-alert>
        </div>
        <div class="meta">
          <div class="description"><p>除了必填的<code>title</code>属性外，你可以设置<code>description</code>属性来帮助你更好地介绍，我们称之为辅助性文字。辅助性文字只能存放单行文本，会自动换行显示。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"带辅助性文字介绍"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">"这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>带有 icon 和辅助性文字介绍</h3>
      <p>表示某种状态时提升可读性。</p>
      <div class="demo-block demo-alert">
        <div class="source">
          <el-alert
            title="成功提示的文案"
            type="success"
            description="文字说明文字说明文字说明文字说明文字说明文字说明"
            show-icon>
          </el-alert>
          <el-alert
            title="消息提示的文案"
            type="info"
            description="文字说明文字说明文字说明文字说明文字说明文字说明"
            show-icon>
          </el-alert>
          <el-alert
            title="警告提示的文案"
            type="warning"
            description="文字说明文字说明文字说明文字说明文字说明文字说明"
            show-icon>
          </el-alert>
          <el-alert
            title="错误提示的文案"
            type="error"
            description="文字说明文字说明文字说明文字说明文字说明文字说明"
            show-icon>
          </el-alert>
        </div>
        <div class="meta">
          <div class="description"><p>最后，这是一个同时具有 icon 和辅助性文字的样例。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"成功提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"success"</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">"文字说明文字说明文字说明文字说明文字说明文字说明"</span>
    <span class="hljs-attr">show-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"消息提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"info"</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">"文字说明文字说明文字说明文字说明文字说明文字说明"</span>
    <span class="hljs-attr">show-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"警告提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"warning"</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">"文字说明文字说明文字说明文字说明文字说明文字说明"</span>
    <span class="hljs-attr">show-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-alert</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">"错误提示的文案"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"error"</span>
    <span class="hljs-attr">description</span>=<span class="hljs-string">"文字说明文字说明文字说明文字说明文字说明文字说明"</span>
    <span class="hljs-attr">show-icon</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-alert</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td><strong>title</strong></td><td>标题，<strong>必选参数</strong></td><td>string</td><td>—</td><td>—</td></tr><tr><td>type</td><td>主题</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>description</td><td>辅助性文字。也可通过默认 slot 传入</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closable</td><td>是否可关闭</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>center</td><td>文字是否居中</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-text</td><td>关闭按钮自定义文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>show-icon</td><td>是否显示图标</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>
      <h3>Events</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>关闭alert时触发的事件</td><td>—</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {
    methods: {
      hello () {
        alert('Hello World!')
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .demo-alert .el-alert:first-child {
    margin: 0;
  }

  .el-alert {
    margin: 20px 0 0;
  }
</style>
