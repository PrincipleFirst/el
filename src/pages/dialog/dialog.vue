<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Dialog 对话框</h2>
      <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>
      <h3>基础用法</h3>
      <p>Dialog 弹出一个对话框，适合需要定制性更大的场景。</p>
      <div class="demo-block">
        <div class="source">
          <el-button type="text" @click="dialogVisible = true">点击打开 Dialog</el-button>

          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose">
            <span>这是一段信息</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
          </el-dialog>
        </div>
        <div class="meta">
          <div class="description"><p>需要设置<code>visible</code>属性，它接收<code>Boolean</code>，当为<code>true</code>时显示
            Dialog。Dialog
            分为两个部分：<code>body</code>和<code>footer</code>，<code>footer</code>需要具名为<code>footer</code>的<code>slot</code>。<code>title</code>属性用于定义标题，它是可选的，默认值为空。最后，本例还展示了<code>before-close</code>的用法。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
            class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"dialogVisible = true"</span>&gt;</span>点击打开 Dialog<span
            class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-dialog</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">"提示"</span>
  <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"dialogVisible"</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">"30%"</span>
  <span class="hljs-attr">:before-close</span>=<span class="hljs-string">"handleClose"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>这是一段信息<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span
    class="hljs-string">"footer"</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"dialog-footer"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
      class="hljs-string">"dialogVisible = false"</span>&gt;</span>取 消<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"dialogVisible = false"</span>&gt;</span>确 定<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-dialog</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">dialogVisible</span>: <span class="hljs-literal">false</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleClose(done) {
        <span class="hljs-keyword">this</span>.$confirm(<span class="hljs-string">'确认关闭？'</span>)
          .then(<span class="hljs-function"><span class="hljs-params">_</span> =&gt;</span> {
            done();
          })
          .catch(<span class="hljs-function"><span class="hljs-params">_</span> =&gt;</span> {});
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <div class="tip"><p><code>before-close</code> 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效。如果你在 <code>footer</code> 具名 slot
        里添加了用于关闭 Dialog 的按钮，那么可以在按钮的点击回调函数里加入 <code>before-close</code> 的相关逻辑。</p></div>
      <h3>自定义内容</h3>
      <p>Dialog 组件的内容可以是任意的，甚至可以是表格或表单，下面是应用了 Element Table 和 Form 组件的两个样例。</p>
      <div class="demo-block">
        <div class="source">
          <!-- Table -->
          <el-button type="text" @click="dialogTableVisible = true">打开嵌套表格的 Dialog</el-button>

          <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
            <el-table :data="gridData">
              <el-table-column property="date" label="日期" width="150"></el-table-column>
              <el-table-column property="name" label="姓名" width="200"></el-table-column>
              <el-table-column property="address" label="地址"></el-table-column>
            </el-table>
          </el-dialog>

          <!-- Form -->
          <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

          <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
              <el-form-item label="活动名称" :label-width="formLabelWidth">
                <el-input v-model="form.name" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="活动区域" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span class="hljs-comment">&lt;!-- Table --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
  class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"dialogTableVisible = true"</span>&gt;</span>打开嵌套表格的 Dialog<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-dialog</span> <span class="hljs-attr">title</span>=<span
  class="hljs-string">"收货地址"</span> <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"dialogTableVisible"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-table</span> <span class="hljs-attr">:data</span>=<span
    class="hljs-string">"gridData"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span> <span
      class="hljs-attr">property</span>=<span class="hljs-string">"date"</span> <span
      class="hljs-attr">label</span>=<span class="hljs-string">"日期"</span> <span class="hljs-attr">width</span>=<span
      class="hljs-string">"150"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span> <span
      class="hljs-attr">property</span>=<span class="hljs-string">"name"</span> <span
      class="hljs-attr">label</span>=<span class="hljs-string">"姓名"</span> <span class="hljs-attr">width</span>=<span
      class="hljs-string">"200"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span> <span
      class="hljs-attr">property</span>=<span class="hljs-string">"address"</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"地址"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-table-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-dialog</span>&gt;</span>

<span class="hljs-comment">&lt;!-- Form --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
  class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"dialogFormVisible = true"</span>&gt;</span>打开嵌套表单的 Dialog<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-dialog</span> <span class="hljs-attr">title</span>=<span
  class="hljs-string">"收货地址"</span> <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"dialogFormVisible"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form</span> <span class="hljs-attr">:model</span>=<span
    class="hljs-string">"form"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"活动名称"</span> <span class="hljs-attr">:label-width</span>=<span class="hljs-string">"formLabelWidth"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span
        class="hljs-string">"form.name"</span> <span class="hljs-attr">auto-complete</span>=<span class="hljs-string">"off"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"活动区域"</span> <span class="hljs-attr">:label-width</span>=<span class="hljs-string">"formLabelWidth"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span
        class="hljs-string">"form.region"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择活动区域"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span
          class="hljs-string">"区域一"</span> <span class="hljs-attr">value</span>=<span
          class="hljs-string">"shanghai"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-option</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span
          class="hljs-string">"区域二"</span> <span class="hljs-attr">value</span>=<span
          class="hljs-string">"beijing"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-option</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span
    class="hljs-string">"footer"</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"dialog-footer"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
      class="hljs-string">"dialogFormVisible = false"</span>&gt;</span>取 消<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"dialogFormVisible = false"</span>&gt;</span>确 定<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-dialog</span>&gt;</span>

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
        }],
        <span class="hljs-attr">dialogTableVisible</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">dialogFormVisible</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">form</span>: {
          <span class="hljs-attr">name</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">region</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">date1</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">date2</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">delivery</span>: <span class="hljs-literal">false</span>,
          <span class="hljs-attr">type</span>: [],
          <span class="hljs-attr">resource</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">desc</span>: <span class="hljs-string">''</span>
        },
        <span class="hljs-attr">formLabelWidth</span>: <span class="hljs-string">'120px'</span>
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>嵌套的 Dialog</h3>
      <p>如果需要在一个 Dialog 内部嵌套另一个 Dialog，需要使用 append-to-body 属性。</p>
      <div class="demo-block">
        <div class="source">
          <el-button type="text" @click="outerVisible = true">点击打开外层 Dialog</el-button>

          <el-dialog title="外层 Dialog" :visible.sync="outerVisible">
            <el-dialog
              width="30%"
              title="内层 Dialog"
              :visible.sync="innerVisible"
              append-to-body>
            </el-dialog>
            <div slot="footer" class="dialog-footer">
              <el-button @click="outerVisible = false">取 消</el-button>
              <el-button type="primary" @click="innerVisible = true">打开内层 Dialog</el-button>
            </div>
          </el-dialog>
        </div>
        <div class="meta">
          <div class="description"><p>正常情况下，我们不建议使用嵌套的 Dialog，如果需要在页面上同时显示多个 Dialog，可以将它们平级放置。对于确实需要嵌套 Dialog
            的场景，我们提供了<code>append-to-body</code>属性。将内层 Dialog 的该属性设置为 true，它就会插入至 body 元素上，从而保证内外层 Dialog 和遮罩层级关系的正确。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
    class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"outerVisible = true"</span>&gt;</span>点击打开外层 Dialog<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">el-dialog</span> <span class="hljs-attr">title</span>=<span
    class="hljs-string">"外层 Dialog"</span> <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"outerVisible"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-dialog</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"30%"</span>
      <span class="hljs-attr">title</span>=<span class="hljs-string">"内层 Dialog"</span>
      <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"innerVisible"</span>
      <span class="hljs-attr">append-to-body</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-dialog</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span
      class="hljs-string">"footer"</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"dialog-footer"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
        class="hljs-string">"outerVisible = false"</span>&gt;</span>取 消<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
        class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"innerVisible = true"</span>&gt;</span>打开内层 Dialog<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-dialog</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">outerVisible</span>: <span class="hljs-literal">false</span>,
        <span class="hljs-attr">innerVisible</span>: <span class="hljs-literal">false</span>
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>居中布局</h3>
      <p>标题和底部可水平居中</p>
      <div class="demo-block">
        <div class="source">
          <el-button type="text" @click="centerDialogVisible = true">点击打开 Dialog</el-button>

          <el-dialog
            title="提示"
            :visible.sync="centerDialogVisible"
            width="30%"
            center>
            <span>需要注意的是内容是默认不居中的</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
          </el-dialog>
        </div>
        <div class="meta">
          <div class="description"><p>将 <code>center</code> 设置为 <code>true</code> 即可使标题和底部居中。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
            class="hljs-string">"text"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"centerDialogVisible = true"</span>&gt;</span>点击打开 Dialog<span
            class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-dialog</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">"提示"</span>
  <span class="hljs-attr">:visible.sync</span>=<span class="hljs-string">"centerDialogVisible"</span>
  <span class="hljs-attr">width</span>=<span class="hljs-string">"30%"</span>
  <span class="hljs-attr">center</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>需要注意的是内容是默认不居中的<span
              class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span
    class="hljs-string">"footer"</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"dialog-footer"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
      class="hljs-string">"centerDialogVisible = false"</span>&gt;</span>取 消<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"centerDialogVisible = false"</span>&gt;</span>确 定<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-dialog</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">centerDialogVisible</span>: <span class="hljs-literal">false</span>
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <div class="tip"><p><code>center</code> 仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。</p>
      </div>
      <div class="tip"><p>如果 <code>visible</code> 属性绑定的变量位于 Vuex 的 store 内，那么 <code>.sync</code> 不会正常工作。此时需要去除 <code>.sync</code>
        修饰符，同时监听 Dialog 的 <code>open</code> 和 <code>close</code> 事件，在事件回调中执行 Vuex 中对应的 mutation 更新 <code>visible</code>
        属性绑定的变量的值。</p></div>
      <h3>Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>visible</td><td>是否显示 Dialog，支持 .sync 修饰符</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>title</td><td>Dialog 的标题，也可通过具名 slot （见下表）传入</td><td>string</td><td>—</td><td>—</td></tr><tr><td>width</td><td>Dialog 的宽度</td><td>string</td><td>—</td><td>50%</td></tr><tr><td>fullscreen</td><td>是否为全屏 Dialog</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>top</td><td>Dialog CSS 中的 margin-top 值</td><td>string</td><td>—</td><td>15vh</td></tr><tr><td>modal</td><td>是否需要遮罩层</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>modal-append-to-body</td><td>遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>append-to-body</td><td>Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lock-scroll</td><td>是否在 Dialog 出现时将 body 滚动锁定</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>custom-class</td><td>Dialog 的自定义类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>close-on-click-modal</td><td>是否可以通过点击 modal 关闭 Dialog</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>是否可以通过按下 ESC 关闭 Dialog</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>show-close</td><td>是否显示关闭按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>before-close</td><td>关闭前的回调，会暂停 Dialog 的关闭</td><td>function(done)，done 用于关闭 Dialog</td><td>—</td><td>—</td></tr><tr><td>center</td><td>是否对头部和底部采用居中布局</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>
      <h3>Slot</h3>
      <table class="table"><thead><tr><th>name</th><th>说明</th></tr></thead><tbody><tr><td>—</td><td>Dialog 的内容</td></tr><tr><td>title</td><td>Dialog 标题区的内容</td></tr><tr><td>footer</td><td>Dialog 按钮操作区的内容</td></tr></tbody></table>
      <h3>Events</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>close</td><td>Dialog 关闭的回调</td><td>—</td></tr><tr><td>open</td><td>Dialog 打开的回调</td><td>—</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {
    data () {
      return {
        dialogVisible: false,
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
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        outerVisible: false,
        innerVisible: false,
        centerDialogVisible: false
      }
    },
    methods: {
      handleClose (done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done()
          })
          .catch(_ => {})
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
