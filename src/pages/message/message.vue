<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Message 消息提示</h2>
      <p>常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。</p>
      <h3>基础用法</h3>
      <p>从顶部出现，3 秒后自动消失。</p>
      <div class="demo-block">
        <div class="source">
          <el-button :plain="true" @click="open">打开消息提示</el-button>
          <el-button :plain="true" @click="openVn">VNode</el-button>
        </div>
        <div class="meta">
          <div class="description"><p>Message 在配置上与 Notification 非常类似，所以部分 options 在此不做详尽解释，文末有 options 列表，可以结合
            Notification 的文档理解它们。注册了一个<code>$message</code>方法用于调用，Message 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span
    class="hljs-string">"true"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open"</span>&gt;</span>打开消息提示<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span
    class="hljs-string">"true"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"openVn"</span>&gt;</span>VNode<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      open() {
        <span class="hljs-keyword">this</span>.$message(<span class="hljs-string">'这是一条消息提示'</span>);
      },

      openVn() {
        <span class="hljs-keyword">const</span> h = <span class="hljs-keyword">this</span>.$createElement;
        <span class="hljs-keyword">this</span>.$message({
          <span class="hljs-attr">message</span>: h(<span class="hljs-string">'p'</span>, <span class="hljs-literal">null</span>, [
            h(<span class="hljs-string">'span'</span>, <span class="hljs-literal">null</span>, <span
              class="hljs-string">'内容可以是 '</span>),
            h(<span class="hljs-string">'i'</span>, { <span class="hljs-attr">style</span>: <span class="hljs-string">'color: teal'</span> }, <span
              class="hljs-string">'VNode'</span>)
          ])
        });
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>不同状态</h3>
      <p>用来显示「成功、警告、消息、错误」类的操作反馈。</p>
      <div class="demo-block">
        <div class="source">
          <el-button :plain="true" @click="open2">成功</el-button>
          <el-button :plain="true" @click="open3">警告</el-button>
          <el-button :plain="true" @click="open">消息</el-button>
          <el-button :plain="true" @click="open4">错误</el-button>
        </div>
        <div class="meta">
          <div class="description"><p>当需要自定义更多属性时，Message
            也可以接收一个对象为参数。比如，设置<code>type</code>字段可以定义不同的状态，默认为<code>info</code>。此时正文内容以<code>message</code>的值传入。同时，我们也为
            Message 的各种 type 注册了方法，可以在不传入<code>type</code>字段的情况下像<code>open4</code>那样直接调用。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span
    class="hljs-string">"true"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open2"</span>&gt;</span>成功<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span
    class="hljs-string">"true"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open3"</span>&gt;</span>警告<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span
    class="hljs-string">"true"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open"</span>&gt;</span>消息<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span
    class="hljs-string">"true"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open4"</span>&gt;</span>错误<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      open() {
        <span class="hljs-keyword">this</span>.$message(<span class="hljs-string">'这是一条消息提示'</span>);
      },

      open2() {
        <span class="hljs-keyword">this</span>.$message({
          <span class="hljs-attr">message</span>: <span class="hljs-string">'恭喜你，这是一条成功消息'</span>,
          <span class="hljs-attr">type</span>: <span class="hljs-string">'success'</span>
        });
      },

      open3() {
        <span class="hljs-keyword">this</span>.$message({
          <span class="hljs-attr">message</span>: <span class="hljs-string">'警告哦，这是一条警告消息'</span>,
          <span class="hljs-attr">type</span>: <span class="hljs-string">'warning'</span>
        });
      },

      open4() {
        <span class="hljs-keyword">this</span>.$message.error(<span class="hljs-string">'错了哦，这是一条错误消息'</span>);
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>可关闭</h3>
      <p>可以添加关闭按钮。</p>
      <div class="demo-block">
        <div class="source">
          <el-button :plain="true" @click="open5">消息</el-button>
          <el-button :plain="true" @click="open6">成功</el-button>
          <el-button :plain="true" @click="open7">警告</el-button>
          <el-button :plain="true" @click="open8">错误</el-button>
        </div>
        <div class="meta">
          <div class="description"><p>默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用<code>showClose</code>字段。此外，和
            Notification 一样，Message 拥有可控的<code>duration</code>，设置<code>0</code>为不会被自动关闭，默认为 3000 毫秒。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span
    class="hljs-string">"true"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open5"</span>&gt;</span>消息<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span
    class="hljs-string">"true"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open6"</span>&gt;</span>成功<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span
    class="hljs-string">"true"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open7"</span>&gt;</span>警告<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span
    class="hljs-string">"true"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open8"</span>&gt;</span>错误<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      open5() {
        <span class="hljs-keyword">this</span>.$message({
          <span class="hljs-attr">showClose</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'这是一条消息提示'</span>
        });
      },

      open6() {
        <span class="hljs-keyword">this</span>.$message({
          <span class="hljs-attr">showClose</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'恭喜你，这是一条成功消息'</span>,
          <span class="hljs-attr">type</span>: <span class="hljs-string">'success'</span>
        });
      },

      open7() {
        <span class="hljs-keyword">this</span>.$message({
          <span class="hljs-attr">showClose</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'警告哦，这是一条警告消息'</span>,
          <span class="hljs-attr">type</span>: <span class="hljs-string">'warning'</span>
        });
      },

      open8() {
        <span class="hljs-keyword">this</span>.$message({
          <span class="hljs-attr">showClose</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'错了哦，这是一条错误消息'</span>,
          <span class="hljs-attr">type</span>: <span class="hljs-string">'error'</span>
        });
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>文字居中</h3>
      <p>使用 center 属性让文字水平居中。</p>
      <div class="demo-block">
        <div class="source">
          <el-button :plain="true" @click="openCenter">文字居中</el-button>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span
    class="hljs-string">"true"</span> <span class="hljs-attr">@click</span>=<span
    class="hljs-string">"openCenter"</span>&gt;</span>文字居中<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      openCenter() {
        <span class="hljs-keyword">this</span>.$message({
          <span class="hljs-attr">message</span>: <span class="hljs-string">'居中的文字'</span>,
          <span class="hljs-attr">center</span>: <span class="hljs-literal">true</span>
        });
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>使用 HTML 片段</h3>
      <p>message 属性支持传入 HTML 片段</p>
      <div class="demo-block">
        <div class="source">
          <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>
        </div>
        <div class="meta">
          <div class="description"><p>将<code>dangerouslyUseHTMLString</code>属性设置为 true，<code>message</code> 就会被当作 HTML
            片段处理。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">:plain</span>=<span
    class="hljs-string">"true"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"openHTML"</span>&gt;</span>使用 HTML 片段<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      openHTML() {
        <span class="hljs-keyword">this</span>.$message({
          <span class="hljs-attr">dangerouslyUseHTMLString</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'&lt;strong&gt;这是 &lt;i&gt;HTML&lt;/i&gt; 片段&lt;/strong&gt;'</span>
        });
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <div class="warning"><p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a
        href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code>
        打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p></div>
      <h3>Options</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>message</td><td>消息文字</td><td>string / VNode</td><td>—</td><td>—</td></tr><tr><td>type</td><td>主题</td><td>string</td><td>success/warning/info/error</td><td>info</td></tr><tr><td>iconClass</td><td>自定义图标的类名，会覆盖 <code>type</code></td><td>string</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>是否将 message 属性作为 HTML 片段处理</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>customClass</td><td>自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>显示时间, 毫秒。设为 0 则不会自动关闭</td><td>number</td><td>—</td><td>3000</td></tr><tr><td>showClose</td><td>是否显示关闭按钮</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>center</td><td>文字是否居中</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>onClose</td><td>关闭时的回调函数, 参数为被关闭的 message 实例</td><td>function</td><td>—</td><td>—</td></tr></tbody></table>
      <h3>方法</h3>
      <p>调用 <code>Message</code> 或 <code>this.$message</code> 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。</p>
      <table class="table"><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>close</td><td>关闭当前的 Message</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {
    methods: {
      openVn () {
        const h = this.$createElement
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', {style: 'color: teal'}, 'VNode')
          ])
        })
      },
      open () {
        this.$message('这是一条消息提示')
      },
      open2 () {
        this.$message({
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        })
      },
      open3 () {
        this.$message({
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        })
      },
      open4 () {
        this.$message.error('错了哦，这是一条错误消息')
      },
      open5 () {
        this.$message({
          showClose: true,
          message: '这是一条消息提示'
        })
      },
      open6 () {
        this.$message({
          showClose: true,
          message: '恭喜你，这是一条成功消息',
          type: 'success'
        })
      },
      open7 () {
        this.$message({
          showClose: true,
          message: '警告哦，这是一条警告消息',
          type: 'warning'
        })
      },
      open8 () {
        this.$message({
          showClose: true,
          message: '错了哦，这是一条错误消息',
          type: 'error'
        })
      },
      openCenter () {
        this.$message({
          message: '居中的文字',
          center: true
        })
      },
      openHTML() {
        this.$message({
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        })
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

</style>
