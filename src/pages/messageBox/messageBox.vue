<template>
  <div class="page-component__content">
    <section class="content">
      <h2>MessageBox 弹框</h2>
      <p>模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容。</p>
      <div class="tip"><p>从场景上说，MessageBox 的作用是美化系统自带的 <code>alert</code>、<code>confirm</code> 和 <code>prompt</code>，因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用
        Dialog。</p></div>
      <h3>消息提示</h3>
      <p>当用户进行操作时会被触发，该对话框中断用户操作，直到用户确认知晓后才可关闭。</p>
      <div class="demo-block">
        <div class="source">
          <el-button type="text" @click="open">点击打开 Message Box</el-button>
        </div>
        <div class="meta">
          <div class="description"><p>调用<code>$alert</code>方法即可打开消息提示，它模拟了系统的 <code>alert</code>，无法通过按下 ESC
            或点击框外关闭。此例中接收了两个参数，<code>message</code>和<code>title</code>。值得一提的是，窗口被关闭后，它默认会返回一个<code>Promise</code>对象便于进行后续操作的处理。若不确定浏览器是否支持<code>Promise</code>，可自行引入第三方
            polyfill 或像本例一样使用回调进行后续处理。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
    class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open"</span>&gt;</span>点击打开 Message Box<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      open() {
        <span class="hljs-keyword">this</span>.$alert(<span class="hljs-string">'这是一段内容'</span>, <span
              class="hljs-string">'标题名称'</span>, {
          <span class="hljs-attr">confirmButtonText</span>: <span class="hljs-string">'确定'</span>,
          <span class="hljs-attr">callback</span>: <span class="hljs-function"><span class="hljs-params">action</span> =&gt;</span> {
            <span class="hljs-keyword">this</span>.$message({
              <span class="hljs-attr">type</span>: <span class="hljs-string">'info'</span>,
              <span class="hljs-attr">message</span>: <span class="hljs-string">`action: <span class="hljs-subst">${ action }</span>`</span>
            });
          }
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
      <h3>确认消息</h3>
      <p>提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框。</p>
      <div class="demo-block">
        <div class="source">
          <el-button type="text" @click="open2">点击打开 Message Box</el-button>
        </div>
        <div class="meta">
          <div class="description"><p>调用<code>$confirm</code>方法即可打开消息提示，它模拟了系统的 <code>confirm</code>。Message Box
            组件也拥有极高的定制性，我们可以传入<code>options</code>作为第三个参数，它是一个字面量对象。<code>type</code>字段表明消息类型，可以为<code>success</code>，<code>error</code>，<code>info</code>和<code>warning</code>，无效的设置将会被忽略。注意，第二个参数<code>title</code>必须定义为<code>String</code>类型，如果是<code>Object</code>，会被理解为<code>options</code>。在这里我们用了
            Promise 来处理后续响应。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
    class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open2"</span>&gt;</span>点击打开 Message Box<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      open2() {
        <span class="hljs-keyword">this</span>.$confirm(<span class="hljs-string">'此操作将永久删除该文件, 是否继续?'</span>, <span
              class="hljs-string">'提示'</span>, {
          <span class="hljs-attr">confirmButtonText</span>: <span class="hljs-string">'确定'</span>,
          <span class="hljs-attr">cancelButtonText</span>: <span class="hljs-string">'取消'</span>,
          <span class="hljs-attr">type</span>: <span class="hljs-string">'warning'</span>
        }).then(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
          <span class="hljs-keyword">this</span>.$message({
            <span class="hljs-attr">type</span>: <span class="hljs-string">'success'</span>,
            <span class="hljs-attr">message</span>: <span class="hljs-string">'删除成功!'</span>
          });
        }).catch(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
          <span class="hljs-keyword">this</span>.$message({
            <span class="hljs-attr">type</span>: <span class="hljs-string">'info'</span>,
            <span class="hljs-attr">message</span>: <span class="hljs-string">'已取消删除'</span>
          });
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
      <h3>提交内容</h3>
      <p>当用户进行操作时会被触发，中断用户操作，提示用户进行输入的对话框。</p>
      <div class="demo-block">
        <div class="source">
          <el-button type="text" @click="open3">点击打开 Message Box</el-button>
        </div>
        <div class="meta">
          <div class="description"><p>调用<code>$prompt</code>方法即可打开消息提示，它模拟了系统的
            <code>prompt</code>。可以用<code>inputPattern</code>字段自己规定匹配模式，或者用<code>inputValidator</code>规定校验函数，可以返回<code>Boolean</code>或<code>String</code>，返回<code>false</code>或字符串时均表示校验未通过，同时返回的字符串相当于定义了<code>inputErrorMessage</code>字段。此外，可以用<code>inputPlaceholder</code>字段来定义输入框的占位符。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
    class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open3"</span>&gt;</span>点击打开 Message Box<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      open3() {
        <span class="hljs-keyword">this</span>.$prompt(<span class="hljs-string">'请输入邮箱'</span>, <span
              class="hljs-string">'提示'</span>, {
          <span class="hljs-attr">confirmButtonText</span>: <span class="hljs-string">'确定'</span>,
          <span class="hljs-attr">cancelButtonText</span>: <span class="hljs-string">'取消'</span>,
          <span class="hljs-attr">inputPattern</span>: <span class="hljs-regexp">/[\w!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[\w!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/</span>,
          <span class="hljs-attr">inputErrorMessage</span>: <span class="hljs-string">'邮箱格式不正确'</span>
        }).then(<span class="hljs-function">(<span class="hljs-params">{ value }</span>) =&gt;</span> {
          <span class="hljs-keyword">this</span>.$message({
            <span class="hljs-attr">type</span>: <span class="hljs-string">'success'</span>,
            <span class="hljs-attr">message</span>: <span class="hljs-string">'你的邮箱是: '</span> + value
          });
        }).catch(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
          <span class="hljs-keyword">this</span>.$message({
            <span class="hljs-attr">type</span>: <span class="hljs-string">'info'</span>,
            <span class="hljs-attr">message</span>: <span class="hljs-string">'取消输入'</span>
          });
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
          <el-button type="text" @click="open5">点击打开 Message Box</el-button>
        </div>
        <div class="meta">
          <div class="description"><p>将<code>dangerouslyUseHTMLString</code>属性设置为 true，<code>message</code> 就会被当作 HTML
            片段处理。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
    class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open5"</span>&gt;</span>点击打开 Message Box<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      open5() {
        <span class="hljs-keyword">this</span>.$alert(<span class="hljs-string">'&lt;strong&gt;这是 &lt;i&gt;HTML&lt;/i&gt; 片段&lt;/strong&gt;'</span>, <span
              class="hljs-string">'HTML 片段'</span>, {
          <span class="hljs-attr">dangerouslyUseHTMLString</span>: <span class="hljs-literal">true</span>
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
      <h3>居中布局</h3>
      <p>内容支持居中布局</p>
      <div class="demo-block">
        <div class="source">
          <el-button type="text" @click="open6">点击打开 Message Box</el-button>
        </div>
        <div class="meta"><div class="description"><p>将 <code>center</code> 设置为 <code>true</code> 即可开启居中布局</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"open6"</span>&gt;</span>点击打开 Message Box<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      open6() {
        <span class="hljs-keyword">this</span>.$confirm(<span class="hljs-string">'此操作将永久删除该文件, 是否继续?'</span>, <span class="hljs-string">'提示'</span>, {
          <span class="hljs-attr">confirmButtonText</span>: <span class="hljs-string">'确定'</span>,
          <span class="hljs-attr">cancelButtonText</span>: <span class="hljs-string">'取消'</span>,
          <span class="hljs-attr">type</span>: <span class="hljs-string">'warning'</span>,
          <span class="hljs-attr">center</span>: <span class="hljs-literal">true</span>
        }).then(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
          <span class="hljs-keyword">this</span>.$message({
            <span class="hljs-attr">type</span>: <span class="hljs-string">'success'</span>,
            <span class="hljs-attr">message</span>: <span class="hljs-string">'删除成功!'</span>
          });
        }).catch(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
          <span class="hljs-keyword">this</span>.$message({
            <span class="hljs-attr">type</span>: <span class="hljs-string">'info'</span>,
            <span class="hljs-attr">message</span>: <span class="hljs-string">'已取消删除'</span>
          });
        });
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div></div>
        <collapseBar></collapseBar>
      </div>
      <h3>Options</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>MessageBox 标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>message</td><td>MessageBox 消息正文内容</td><td>string / VNode</td><td>—</td><td>—</td></tr><tr><td>dangerouslyUseHTMLString</td><td>是否将 message 属性作为 HTML 片段处理</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>消息类型，用于显示图标</td><td>string</td><td>success / info / warning / error</td><td>—</td></tr><tr><td>customClass</td><td>MessageBox 的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>callback</td><td>若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调</td><td>function(action, instance)，action 的值为'confirm'或'cancel', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法</td><td>—</td><td>—</td></tr><tr><td>showClose</td><td>MessageBox 是否显示右上角关闭按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>beforeClose</td><td>MessageBox 关闭前的回调，会暂停实例的关闭</td><td>function(action, instance, done)，action 的值为'confirm'或'cancel'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例</td><td>—</td><td>—</td></tr><tr><td>lockScroll</td><td>是否在 MessageBox 出现时将 body 滚动锁定</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showCancelButton</td><td>是否显示取消按钮</td><td>boolean</td><td>—</td><td>false（以 confirm 和 prompt 方式调用时为 true）</td></tr><tr><td>showConfirmButton</td><td>是否显示确定按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>cancelButtonText</td><td>取消按钮的文本内容</td><td>string</td><td>—</td><td>取消</td></tr><tr><td>confirmButtonText</td><td>确定按钮的文本内容</td><td>string</td><td>—</td><td>确定</td></tr><tr><td>cancelButtonClass</td><td>取消按钮的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>confirmButtonClass</td><td>确定按钮的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>closeOnClickModal</td><td>是否可通过点击遮罩关闭 MessageBox</td><td>boolean</td><td>—</td><td>true（以 alert 方式调用时为 false）</td></tr><tr><td>closeOnPressEscape</td><td>是否可通过按下 ESC 键关闭 MessageBox</td><td>boolean</td><td>—</td><td>true（以 alert 方式调用时为 false）</td></tr><tr><td>closeOnHashChange</td><td>是否在 hashchange 时关闭 MessageBox</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>showInput</td><td>是否显示输入框</td><td>boolean</td><td>—</td><td>false（以 prompt 方式调用时为 true）</td></tr><tr><td>inputPlaceholder</td><td>输入框的占位符</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputType</td><td>输入框的类型</td><td>string</td><td>—</td><td>text</td></tr><tr><td>inputValue</td><td>输入框的初始文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>inputPattern</td><td>输入框的校验表达式</td><td>regexp</td><td>—</td><td>—</td></tr><tr><td>inputValidator</td><td>输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage</td><td>function</td><td>—</td><td>—</td></tr><tr><td>inputErrorMessage</td><td>校验未通过时的提示文本</td><td>string</td><td>—</td><td>输入的数据不合法!</td></tr><tr><td>center</td><td>是否居中布局</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>roundButton</td><td>是否使用圆角按钮</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>
      <h3>方法</h3>
      <p>调用 <code>Message</code> 或 <code>this.$message</code> 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。
      </p>
      <table class="table">
        <thead>
        <tr>
          <th>方法名</th>
          <th>说明</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>close</td>
          <td>关闭当前的 Message</td>
        </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {

    methods: {
      open () {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${action}`
            })
          }
        })
      },
      open2 () {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      open3 () {
        this.$prompt('请输入邮箱', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '邮箱格式不正确'
        }).then(({value}) => {
          this.$message({
            type: 'success',
            message: '你的邮箱是: ' + value
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          })
        })
      },
      open5 () {
        this.$alert('<strong>这是 <i>HTML</i> 片段</strong>', 'HTML 片段', {
          dangerouslyUseHTMLString: true
        })
      },
      open6() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
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
