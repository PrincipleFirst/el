<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Popover 弹出框</h2>
      <p>Popover 的属性与 Tooltip 很类似，它们都是基于Vue-popper开发的，因此对于重复属性，请参考 Tooltip 的文档，在此文档中不做详尽解释。</p>
      <h3>基础用法</h3>
      <p>在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。</p>
      <div class="demo-block">
        <div class="source">
          <el-popover
            ref="popover1"
            placement="top-start"
            title="标题"
            width="200"
            trigger="hover"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          </el-popover>

          <el-popover
            ref="popover2"
            placement="bottom"
            title="标题"
            width="200"
            trigger="click"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
          </el-popover>

          <el-button v-popover:popover1>hover 激活</el-button>
          <el-button v-popover:popover2>click 激活</el-button>
          <el-popover
            placement="right"
            title="标题"
            width="200"
            trigger="focus"
            content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
            <el-button slot="reference">focus 激活</el-button>
          </el-popover>
        </div>
        <div class="meta">
          <div class="description"><p>
            设置索引<code>ref</code>，在按钮中，我们注册了自定义指令<code>v-popover</code>，指向索引ID。<code>trigger</code>属性用于设置何时触发 Popover
            ，提供三种触发方式：<code>hover</code>, <code>click</code> 和 <code>focus</code>。第二种用法通过 <code>slot</code> 指定
            reference。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-popover</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">"popover1"</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">"top-start"</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">"标题"</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">"200"</span>
  <span class="hljs-attr">trigger</span>=<span class="hljs-string">"hover"</span>
  <span class="hljs-attr">content</span>=<span class="hljs-string">"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-popover</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-popover</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">"popover2"</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">"bottom"</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">"标题"</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">"200"</span>
  <span class="hljs-attr">trigger</span>=<span class="hljs-string">"click"</span>
  <span class="hljs-attr">content</span>=<span class="hljs-string">"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-popover</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">v-popover:popover1</span>&gt;</span>hover 激活<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">v-popover:popover2</span>&gt;</span>click 激活<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-popover</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">"right"</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">"标题"</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">"200"</span>
  <span class="hljs-attr">trigger</span>=<span class="hljs-string">"focus"</span>
  <span class="hljs-attr">content</span>=<span class="hljs-string">"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">slot</span>=<span
    class="hljs-string">"reference"</span>&gt;</span>focus 激活<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-popover</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>嵌套信息</h3>
      <p>可以在 Popover 中嵌套多种类型信息，以下为嵌套表格的例子。</p>
      <div class="demo-block">
        <div class="source">
          <el-popover
            ref="popover4"
            placement="right"
            width="400"
            trigger="click">
            <el-table :data="gridData">
              <el-table-column width="150" property="date" label="日期"></el-table-column>
              <el-table-column width="100" property="name" label="姓名"></el-table-column>
              <el-table-column width="300" property="address" label="地址"></el-table-column>
            </el-table>
          </el-popover>

          <el-button v-popover:popover4>click 激活</el-button>
        </div>
        <div class="meta">
          <div class="description"><p>利用分发取代<code>content</code>属性</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-popover</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">"popover4"</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">"right"</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">"400"</span>
  <span class="hljs-attr">trigger</span>=<span class="hljs-string">"click"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-table</span> <span class="hljs-attr">:data</span>=<span
    class="hljs-string">"gridData"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span> <span class="hljs-attr">width</span>=<span
      class="hljs-string">"150"</span> <span class="hljs-attr">property</span>=<span
      class="hljs-string">"date"</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"日期"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span> <span class="hljs-attr">width</span>=<span
      class="hljs-string">"100"</span> <span class="hljs-attr">property</span>=<span
      class="hljs-string">"name"</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"姓名"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span> <span class="hljs-attr">width</span>=<span
      class="hljs-string">"300"</span> <span class="hljs-attr">property</span>=<span
      class="hljs-string">"address"</span> <span class="hljs-attr">label</span>=<span class="hljs-string">"地址"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-popover</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">v-popover:popover4</span>&gt;</span>click 激活<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">gridData</span>: [{
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-02'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-04'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-01'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-03'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }]
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>嵌套操作</h3>
      <p>当然，你还可以嵌套操作，这相比 Dialog 更为轻量：</p>
      <div class="demo-block">
        <div class="source">
          <el-popover
            ref="popover5"
            placement="top"
            width="160"
            v-model="visible2">
            <p>这是一段内容这是一段内容确定删除吗？</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="visible2 = false">取消</el-button>
              <el-button type="primary" size="mini" @click="visible2 = false">确定</el-button>
            </div>
          </el-popover>

          <el-button v-popover:popover5>删除</el-button>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-popover</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">"popover5"</span>
  <span class="hljs-attr">placement</span>=<span class="hljs-string">"top"</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">"160"</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"visible2"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span>&gt;</span>这是一段内容这是一段内容确定删除吗？<span
              class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"text-align: right; margin: 0"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">size</span>=<span
      class="hljs-string">"mini"</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"visible2 = false"</span>&gt;</span>取消<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"primary"</span> <span class="hljs-attr">size</span>=<span
      class="hljs-string">"mini"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"visible2 = false"</span>&gt;</span>确定<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-popover</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">v-popover:popover5</span>&gt;</span>删除<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">visible2</span>: <span class="hljs-literal">false</span>,
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
          <td>trigger</td>
          <td>触发方式</td>
          <td>String</td>
          <td>click/focus/hover/manual</td>
          <td>click</td>
        </tr>
        <tr>
          <td>title</td>
          <td>标题</td>
          <td>String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>content</td>
          <td>显示的内容，也可以通过 <code>slot</code> 传入 DOM</td>
          <td>String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>width</td>
          <td>宽度</td>
          <td>String, Number</td>
          <td>—</td>
          <td>最小宽度 150px</td>
        </tr>
        <tr>
          <td>placement</td>
          <td>出现位置</td>
          <td>String</td>
          <td>
            top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end
          </td>
          <td>bottom</td>
        </tr>
        <tr>
          <td>disabled</td>
          <td>Popover 是否可用</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>value(v-model)</td>
          <td>状态是否可见</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>offset</td>
          <td>出现位置的偏移量</td>
          <td>Number</td>
          <td>—</td>
          <td>0</td>
        </tr>
        <tr>
          <td>transition</td>
          <td>定义渐变动画</td>
          <td>String</td>
          <td>—</td>
          <td>fade-in-linear</td>
        </tr>
        <tr>
          <td>visible-arrow</td>
          <td>是否显示 Tooltip 箭头，更多参数可见<a href="https://github.com/element-component/vue-popper">Vue-popper</a></td>
          <td>Boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>popper-options</td>
          <td><a href="https://popper.js.org/documentation.html">popper.js</a> 的参数</td>
          <td>Object</td>
          <td>参考 <a href="https://popper.js.org/documentation.html">popper.js</a> 文档</td>
          <td><code>{ boundariesElement: 'body', gpuAcceleration: false }</code></td>
        </tr>
        <tr>
          <td>popper-class</td>
          <td>为 popper 添加类名</td>
          <td>String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>open-delay</td>
          <td>触发方式为 hover 时的显示延迟，单位为毫秒</td>
          <td>Number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        </tbody>
      </table>
      <h3>Slot</h3>
      <table class="table">
        <thead>
        <tr>
          <th>参数</th>
          <th>说明</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>—</td>
          <td>Popover 内嵌 HTML 文本</td>
        </tr>
        <tr>
          <td>reference</td>
          <td>触发 Popover 显示的 HTML 元素</td>
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
          <td>show</td>
          <td>显示时触发</td>
          <td>—</td>
        </tr>
        <tr>
          <td>hide</td>
          <td>隐藏时触发</td>
          <td>—</td>
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
        gridData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        visible2: false
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .el-tooltip__popper,
    .right .el-tooltip__popper {
      padding: 8px 10px;
    }
  }

</style>
