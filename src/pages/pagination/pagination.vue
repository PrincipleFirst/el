<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Pagination 分页</h2>
      <p>当数据量过多时，使用分页分解数据。</p>
      <h3>基础用法</h3>
      <div class="demo-block">
        <div class="source first">
          <div class="block">
            <span class="demonstration">页数较少时的效果</span>
            <el-pagination
              layout="prev, pager, next"
              :total="50">
            </el-pagination>
          </div>
          <div class="block">
            <span class="demonstration">大于 7 页时的效果</span>
            <el-pagination
              layout="prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>
            设置<code>layout</code>，表示需要显示的内容，用逗号分隔，布局元素会依次显示。<code>prev</code>表示上一页，<code>next</code>为下一页，<code>pager</code>表示页码列表，除此以外还提供了<code>jumper</code>和<code>total</code>，<code>size</code>和特殊的布局符号<code>-&gt;</code>，<code>-&gt;</code>后的元素会靠右显示，<code>jumper</code>表示跳页元素，<code>total</code>表示显示页码总数，<code>size</code>用于设置每页显示的页码数量。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"demonstration"</span>&gt;</span>页数较少时的效果<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-pagination</span>
    <span class="hljs-attr">layout</span>=<span class="hljs-string">"prev, pager, next"</span>
    <span class="hljs-attr">:total</span>=<span class="hljs-string">"50"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-pagination</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
  class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"demonstration"</span>&gt;</span>大于 7 页时的效果<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-pagination</span>
    <span class="hljs-attr">layout</span>=<span class="hljs-string">"prev, pager, next"</span>
    <span class="hljs-attr">:total</span>=<span class="hljs-string">"1000"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-pagination</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>带有背景色的分页</h3>
      <div class="demo-block">
        <div class="source">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="1000">
          </el-pagination>
        </div>
        <div class="meta">
          <div class="description"><p>设置<code>background</code>属性可以为分页按钮添加背景色。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-pagination</span>
  <span class="hljs-attr">background</span>
  <span class="hljs-attr">layout</span>=<span class="hljs-string">"prev, pager, next"</span>
  <span class="hljs-attr">:total</span>=<span class="hljs-string">"1000"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-pagination</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>附加功能</h3>
      <p>根据场景需要，可以添加其他功能模块。</p>
      <div class="demo-block">
        <div class="source last">
          <div class="block">
            <span class="demonstration">显示总数</span>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage1"
              :page-size="100"
              layout="total, prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
          <div class="block">
            <span class="demonstration">调整每页显示条数</span>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage2"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="sizes, prev, pager, next"
              :total="1000">
            </el-pagination>
          </div>
          <div class="block">
            <span class="demonstration">直接前往</span>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page.sync="currentPage3"
              :page-size="100"
              layout="prev, pager, next, jumper"
              :total="1000">
            </el-pagination>
          </div>
          <div class="block">
            <span class="demonstration">完整功能</span>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400">
            </el-pagination>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>此例是一个完整的用例，使用了<code>size-change</code>和<code>current-change</code>事件来处理页码大小和当前页变动时候触发的事件。<code>page-sizes</code>接受一个整型数组，数组元素为展示的选择每页显示个数的选项，<code>[100,
            200, 300, 400]</code>表示四个选项，每页显示 100 个，200 个，300 个或者 400 个。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>显示总数<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-pagination</span>
      <span class="hljs-attr">@size-change</span>=<span class="hljs-string">"handleSizeChange"</span>
      <span class="hljs-attr">@current-change</span>=<span class="hljs-string">"handleCurrentChange"</span>
      <span class="hljs-attr">:current-page.sync</span>=<span class="hljs-string">"currentPage1"</span>
      <span class="hljs-attr">:page-size</span>=<span class="hljs-string">"100"</span>
      <span class="hljs-attr">layout</span>=<span class="hljs-string">"total, prev, pager, next"</span>
      <span class="hljs-attr">:total</span>=<span class="hljs-string">"1000"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-pagination</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>调整每页显示条数<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-pagination</span>
      <span class="hljs-attr">@size-change</span>=<span class="hljs-string">"handleSizeChange"</span>
      <span class="hljs-attr">@current-change</span>=<span class="hljs-string">"handleCurrentChange"</span>
      <span class="hljs-attr">:current-page.sync</span>=<span class="hljs-string">"currentPage2"</span>
      <span class="hljs-attr">:page-sizes</span>=<span class="hljs-string">"[100, 200, 300, 400]"</span>
      <span class="hljs-attr">:page-size</span>=<span class="hljs-string">"100"</span>
      <span class="hljs-attr">layout</span>=<span class="hljs-string">"sizes, prev, pager, next"</span>
      <span class="hljs-attr">:total</span>=<span class="hljs-string">"1000"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-pagination</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>直接前往<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-pagination</span>
      <span class="hljs-attr">@size-change</span>=<span class="hljs-string">"handleSizeChange"</span>
      <span class="hljs-attr">@current-change</span>=<span class="hljs-string">"handleCurrentChange"</span>
      <span class="hljs-attr">:current-page.sync</span>=<span class="hljs-string">"currentPage3"</span>
      <span class="hljs-attr">:page-size</span>=<span class="hljs-string">"100"</span>
      <span class="hljs-attr">layout</span>=<span class="hljs-string">"prev, pager, next, jumper"</span>
      <span class="hljs-attr">:total</span>=<span class="hljs-string">"1000"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-pagination</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>完整功能<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-pagination</span>
      <span class="hljs-attr">@size-change</span>=<span class="hljs-string">"handleSizeChange"</span>
      <span class="hljs-attr">@current-change</span>=<span class="hljs-string">"handleCurrentChange"</span>
      <span class="hljs-attr">:current-page</span>=<span class="hljs-string">"currentPage4"</span>
      <span class="hljs-attr">:page-sizes</span>=<span class="hljs-string">"[100, 200, 300, 400]"</span>
      <span class="hljs-attr">:page-size</span>=<span class="hljs-string">"100"</span>
      <span class="hljs-attr">layout</span>=<span class="hljs-string">"total, sizes, prev, pager, next, jumper"</span>
      <span class="hljs-attr">:total</span>=<span class="hljs-string">"400"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-pagination</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      handleSizeChange(val) {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`每页 <span
              class="hljs-subst">${val}</span> 条`</span>);
      },
      handleCurrentChange(val) {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">`当前页: <span
              class="hljs-subst">${val}</span>`</span>);
      }
    },
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">currentPage1</span>: <span class="hljs-number">5</span>,
        <span class="hljs-attr">currentPage2</span>: <span class="hljs-number">5</span>,
        <span class="hljs-attr">currentPage3</span>: <span class="hljs-number">5</span>,
        <span class="hljs-attr">currentPage4</span>: <span class="hljs-number">4</span>
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>Attributes</h3>
      <table class="table">
        <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>可选值</th>
          <th>默认值</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>small</td>
          <td>是否使用小型分页样式</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>background</td>
          <td>是否为分页按钮添加背景色</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>page-size</td>
          <td>每页显示条目个数</td>
          <td>Number</td>
          <td>—</td>
          <td>10</td>
        </tr>
        <tr>
          <td>total</td>
          <td>总条目数</td>
          <td>Number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>page-count</td>
          <td>总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性</td>
          <td>Number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>current-page</td>
          <td>当前页数，支持 .sync 修饰符</td>
          <td>Number</td>
          <td>—</td>
          <td>1</td>
        </tr>
        <tr>
          <td>layout</td>
          <td>组件布局，子组件名用逗号分隔</td>
          <td>String</td>
          <td><code>sizes</code>, <code>prev</code>, <code>pager</code>, <code>next</code>, <code>jumper</code>, <code>-&gt;</code>,
            <code>total</code>, <code>slot</code></td>
          <td>'prev, pager, next, jumper, -&gt;, total'</td>
        </tr>
        <tr>
          <td>page-sizes</td>
          <td>每页显示个数选择器的选项设置</td>
          <td>Number[]</td>
          <td>—</td>
          <td>[10, 20, 30, 40, 50, 100]</td>
        </tr>
        <tr>
          <td>popper-class</td>
          <td>每页显示个数选择器的下拉框类名</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>prev-text</td>
          <td>替代图标显示的上一页文字</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>next-text</td>
          <td>替代图标显示的下一页文字</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        </tbody>
      </table>
      <h3>Events</h3>
      <table class="table">
        <thead>
        <tr>
          <th>事件名称</th>
          <th>说明</th>
          <th>回调参数</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>size-change</td>
          <td>pageSize 改变时会触发</td>
          <td>每页条数<code>size</code></td>
        </tr>
        <tr>
          <td>current-change</td>
          <td>currentPage 改变时会触发</td>
          <td>当前页<code>currentPage</code></td>
        </tr>
        </tbody>
      </table>
      <h3>Slot</h3>
      <table class="table">
        <thead>
        <tr>
          <th>name</th>
          <th>说明</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>—</td>
          <td>自定义内容，需要在 <code>layout</code> 中列出 <code>slot</code></td>
        </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {

    data () {
      return {
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4
      }
    },
    methods: {
      handleSizeChange (val) {
        console.log(`每页 ${val} 条`)
      },
      handleCurrentChange (val) {
        console.log(`当前页: ${val}`)
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"
  .source.first
    padding 0
    font-size 0

  .source.last
    padding 0

  .first
    .block
      padding 30px 0
      text-align center
      border-right 1px solid #eff2f6
      display inline-block
      width 50%
      box-sizing border-box
    .demonstration
      display block
      color #8492a6
      font-size 14px
      margin-bottom 20px

  .last
    .block
      padding 30px 24px
      border-bottom 1px solid #eff2f6
    .demonstration
      font-size 14px
      color #8492a6
      line-height 44px
    .demonstration + .el-pagination
      float right
      width 70%
      margin 5px 20px 0 0

</style>
