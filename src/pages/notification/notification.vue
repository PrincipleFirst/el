<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Notification 通知</h2>
      <p>悬浮出现在页面角落，显示全局的通知提醒消息。</p>
      <div class="tip"><p>从场景上说，MessageBox 的作用是美化系统自带的 <code>alert</code>、<code>confirm</code> 和 <code>prompt</code>，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用
        Dialog。</p></div>
      <h3>基本用法</h3>
      <p>适用性广泛的通知栏</p>
      <div class="demo-block">
        <div class="source">
          <el-button
            plain
            @click="open">
            可自动关闭
          </el-button>
          <el-button
            plain
            @click="open2">
            不会自动关闭
          </el-button>
        </div>
        <div class="meta">
          <div class="description"><p>Notification 组件提供通知功能，注册了<code>$notify</code>方法，接收一个<code>options</code>字面量参数，在最简单的情况下，你可以设置<code>title</code>字段和<code>message</code>字段，用于设置通知的标题和正文。默认情况下，经过一段时间后
            Notification 组件会自动关闭，但是通过设置<code>duration</code>，可以控制关闭的时间间隔，特别的是，如果设置为<code>0</code>，则不会自动关闭。注意：<code>duration</code>接收一个<code>Number</code>，单位为毫秒，默认为<code>4500</code>。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">plain</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"open"</span>&gt;</span>
    可自动关闭
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">plain</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"open2"</span>&gt;</span>
    不会自动关闭
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      open() {
        <span class="hljs-keyword">const</span> h = <span class="hljs-keyword">this</span>.$createElement;

        <span class="hljs-keyword">this</span>.$notify({
          <span class="hljs-attr">title</span>: <span class="hljs-string">'标题名称'</span>,
          <span class="hljs-attr">message</span>: h(<span class="hljs-string">'i'</span>, { <span class="hljs-attr">style</span>: <span
              class="hljs-string">'color: teal'</span>}, <span class="hljs-string">'这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案'</span>)
        });
      },

      open2() {
        <span class="hljs-keyword">this</span>.$notify({
          <span class="hljs-attr">title</span>: <span class="hljs-string">'提示'</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'这是一条不会自动关闭的消息'</span>,
          <span class="hljs-attr">duration</span>: <span class="hljs-number">0</span>
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
      <h3>带有倾向性</h3>
      <p>带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息</p>
      <div class="demo-block">
        <div class="source">
          <el-button
            plain
            @click="open3">
            成功
          </el-button>
          <el-button
            plain
            @click="open4">
            警告
          </el-button>
          <el-button
            plain
            @click="open5">
            消息
          </el-button>
          <el-button
            plain
            @click="open6">
            错误
          </el-button>
        </div>
        <div class="meta">
          <div class="description"><p>Notification 组件具有四种通知类型：<code>success</code>, <code>warning</code>,
            <code>info</code>, <code>error</code>。通过<code>type</code>字段来设置，除此以外的值将被忽略。同时，我们也为 Notification 的各种 type
            注册了方法，可以在不传入<code>type</code>字段的情况下像<code>open5</code>和<code>open6</code>那样直接调用。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">plain</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"open3"</span>&gt;</span>
    成功
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">plain</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"open4"</span>&gt;</span>
    警告
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">plain</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"open5"</span>&gt;</span>
    消息
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">plain</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"open6"</span>&gt;</span>
    错误
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      open3() {
        <span class="hljs-keyword">this</span>.$notify({
          <span class="hljs-attr">title</span>: <span class="hljs-string">'成功'</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'这是一条成功的提示消息'</span>,
          <span class="hljs-attr">type</span>: <span class="hljs-string">'success'</span>
        });
      },

      open4() {
        <span class="hljs-keyword">this</span>.$notify({
          <span class="hljs-attr">title</span>: <span class="hljs-string">'警告'</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'这是一条警告的提示消息'</span>,
          <span class="hljs-attr">type</span>: <span class="hljs-string">'warning'</span>
        });
      },

      open5() {
        <span class="hljs-keyword">this</span>.$notify.info({
          <span class="hljs-attr">title</span>: <span class="hljs-string">'消息'</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'这是一条消息的提示消息'</span>
        });
      },

      open6() {
        <span class="hljs-keyword">this</span>.$notify.error({
          <span class="hljs-attr">title</span>: <span class="hljs-string">'错误'</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'这是一条错误的提示消息'</span>
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
      <h3>自定义弹出位置</h3>
      <p>可以让 Notification 从屏幕四角中的任意一角弹出</p>
      <div class="demo-block">
        <div class="source">
          <el-button
            plain
            @click="open7">
            右上角
          </el-button>
          <el-button
            plain
            @click="open8">
            右下角
          </el-button>
          <el-button
            plain
            @click="open9">
            左下角
          </el-button>
          <el-button
            plain
            @click="open10">
            左上角
          </el-button>
        </div>
        <div class="meta">
          <div class="description"><p>使用<code>position</code>属性定义 Notification
            的弹出位置，支持四个选项：<code>top-right</code>、<code>top-left</code>、<code>bottom-right</code>、<code>bottom-left</code>，默认为<code>top-right</code>。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">plain</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"open7"</span>&gt;</span>
    右上角
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">plain</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"open8"</span>&gt;</span>
    右下角
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">plain</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"open9"</span>&gt;</span>
    左下角
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">plain</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"open10"</span>&gt;</span>
    左上角
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      open7() {
        <span class="hljs-keyword">this</span>.$notify({
          <span class="hljs-attr">title</span>: <span class="hljs-string">'自定义位置'</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'右上角弹出的消息'</span>
        });
      },

      open8() {
        <span class="hljs-keyword">this</span>.$notify({
          <span class="hljs-attr">title</span>: <span class="hljs-string">'自定义位置'</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'右下角弹出的消息'</span>,
          <span class="hljs-attr">position</span>: <span class="hljs-string">'bottom-right'</span>
        });
      },

      open9() {
        <span class="hljs-keyword">this</span>.$notify({
          <span class="hljs-attr">title</span>: <span class="hljs-string">'自定义位置'</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'左下角弹出的消息'</span>,
          <span class="hljs-attr">position</span>: <span class="hljs-string">'bottom-left'</span>
        });
      },

      open10() {
        <span class="hljs-keyword">this</span>.$notify({
          <span class="hljs-attr">title</span>: <span class="hljs-string">'自定义位置'</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'左上角弹出的消息'</span>,
          <span class="hljs-attr">position</span>: <span class="hljs-string">'top-left'</span>
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
      <h3>带有偏移</h3>
      <p>让 Notification 偏移一些位置</p>
      <div class="demo-block">
        <div class="source">
          <el-button
            plain
            @click="open11">
            偏移的消息
          </el-button>
        </div>
        <div class="meta">
          <div class="description"><p>Notification 提供设置偏移量的功能，通过设置 <code>offset</code>
            字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">plain</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"open11"</span>&gt;</span>
    偏移的消息
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      open11() {
        <span class="hljs-keyword">this</span>.$notify({
          <span class="hljs-attr">title</span>: <span class="hljs-string">'偏移'</span>,
          <span class="hljs-attr">message</span>: <span class="hljs-string">'这是一条带有偏移的提示消息'</span>,
          <span class="hljs-attr">offset</span>: <span class="hljs-number">100</span>
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
          <el-button
            plain
            @click="open12">
            使用 HTML 片段
          </el-button>
        </div>
        <div class="meta">
          <div class="description"><p>将<code>dangerouslyUseHTMLString</code>属性设置为 true，<code>message</code> 就会被当作 HTML
            片段处理。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">plain</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"open12"</span>&gt;</span>
    使用 HTML 片段
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      open12() {
        <span class="hljs-keyword">this</span>.$notify({
          <span class="hljs-attr">title</span>: <span class="hljs-string">'HTML 片段'</span>,
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
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>说明文字</td><td>string/Vue.VNode</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>是否将 message 属性作为 HTML 片段处理</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>主题样式，如果不在可选值内将被忽略</td><td>string</td><td>success/warning/info/error</td><td>—</td></tr><tr><td>iconClass</td><td>自定义图标的类名。若设置了 <code>type</code>，则 <code>iconClass</code> 会被覆盖</td><td>string</td><td>—</td><td>—</td></tr><tr><td>customClass</td><td>自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>duration</td><td>显示时间, 毫秒。设为 0 则不会自动关闭</td><td>number</td><td>—</td><td>4500</td></tr><tr><td>position</td><td>自定义弹出位置</td><td>string</td><td>top-right/top-left/bottom-right/bottom-left</td><td>top-right</td></tr><tr><td>showClose</td><td>是否显示关闭按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>onClose</td><td>关闭时的回调函数</td><td>function</td><td>—</td><td>—</td></tr><tr><td>onClick</td><td>点击 Notification 时的回调函数</td><td>function</td><td>—</td><td>—</td></tr><tr><td>offset</td><td>偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量</td><td>number</td><td>—</td><td>0</td></tr></tbody></table>
      <h3>方法</h3>
      <p>调用 <code>Notification</code> 或 <code>this.$notify</code> 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。</p>
      <table class="table"><thead><tr><th>方法名</th><th>说明</th></tr></thead><tbody><tr><td>close</td><td>关闭当前的 Notification</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {

    methods: {
      open () {
        const h = this.$createElement

        this.$notify({
          title: '标题名称',
          message: h('i', {style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        })
      },
      open2 () {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        })
      },
      open3 () {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        })
      },
      open4 () {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        })
      },
      open5 () {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        })
      },
      open6 () {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        })
      },
      open7 () {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        })
      },
      open8 () {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        })
      },
      open9 () {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        })
      },
      open10 () {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        })
      },
      open11 () {
        this.$notify({
          title: '偏移',
          message: '这是一条带有偏移的提示消息',
          offset: 100
        })
      },
      open12 () {
        this.$notify({
          title: 'HTML 片段',
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
