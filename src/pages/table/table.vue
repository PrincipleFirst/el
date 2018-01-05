<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Table 表格</h2>
      <p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>
      <h3>基础用法</h3>
      <p>基础的表格展示用法。</p>
      <div class="demo-block">
        <div class="source">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
        <div class="meta">
          <div class="description"><p>
            当<code>el-table</code>元素中注入<code>data</code>对象数组后，在<code>el-table-column</code>中用<code>prop</code>属性来对应对象中的键名即可填入数据，用<code>label</code>属性来定义表格的列名。可以使用<code>width</code>属性来定义列宽。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html">  <span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table</span>
      <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData"</span>
      <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">"date"</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">"日期"</span>
        <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">"姓名"</span>
        <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
        <span class="hljs-attr">prop</span>=<span class="hljs-string">"address"</span>
        <span class="hljs-attr">label</span>=<span class="hljs-string">"地址"</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
    <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
      data() {
        <span class="hljs-keyword">return</span> {
          <span class="hljs-attr">tableData</span>: [{
            <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-02'</span>,
            <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
            <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
          }, {
            <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-04'</span>,
            <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
            <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1517 弄'</span>
          }, {
            <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-01'</span>,
            <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
            <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1519 弄'</span>
          }, {
            <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-03'</span>,
            <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
            <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1516 弄'</span>
          }]
        }
      }
    }
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>带斑马纹表格</h3>
      <p>使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
      <div class="demo-block">
        <div class="source">
          <el-table
            :data="tableData"
            stripe
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
        <div class="meta">
          <div class="description"><p><code>stripe</code>属性可以创建带斑马纹的表格。它接受一个<code>Boolean</code>，默认为<code>false</code>，设置为<code>true</code>即为启用。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-table</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData"</span>
    <span class="hljs-attr">stripe</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"date"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"日期"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"姓名"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"address"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"地址"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">tableData</span>: [{
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-02'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-04'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1517 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-01'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1519 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-03'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1516 弄'</span>
        }]
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>固定表头</h3>
      <p>纵向内容过多时，可选择固定表头。</p>
      <div class="demo-block">
        <div class="source">
          <el-table
            :data="tableData2"
            height="250"
            border
            style="width: 100%">
            <el-table-column
              prop="date"
              label="日期"
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址">
            </el-table-column>
          </el-table>
        </div>
        <div class="meta">
          <div class="description"><p>只要在<code>el-table</code>元素中定义了<code>height</code>属性，即可实现固定表头的表格，而不需要额外的代码。</p>
          </div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-table</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData3"</span>
    <span class="hljs-attr">height</span>=<span class="hljs-string">"250"</span>
    <span class="hljs-attr">border</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"date"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"日期"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"姓名"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"address"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"地址"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">tableData3</span>: [{
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-03'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
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
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-08'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-06'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-07'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }]
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>固定列</h3>
      <p>横向内容过多时，可选择固定列。</p>
      <div class="demo-block">
        <div class="source">
          <el-table
            :data="tableData3"
            border
            style="width: 100%">
            <el-table-column
              fixed
              prop="date"
              label="日期"
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="province"
              label="省份"
              width="120">
            </el-table-column>
            <el-table-column
              prop="city"
              label="市区"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="300">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="邮编"
              width="120">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="meta">
          <div class="description"><p>固定列需要使用<code>fixed</code>属性，它接受 Boolean 值或者<code>left</code><code>right</code>，表示左边固定还是右边固定。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-table</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData"</span>
    <span class="hljs-attr">border</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">fixed</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"date"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"日期"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"150"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"姓名"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"120"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"province"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"省份"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"120"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"city"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"市区"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"120"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"address"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"地址"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"300"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"zip"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"邮编"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"120"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">fixed</span>=<span class="hljs-string">"right"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"操作"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"100"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot-scope</span>=<span
        class="hljs-string">"scope"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
          class="hljs-string">"handleClick(scope.row)"</span> <span class="hljs-attr">type</span>=<span
          class="hljs-string">"text"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>查看<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
          class="hljs-string">"text"</span> <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>编辑<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      handleClick(row) {
        <span class="hljs-built_in">console</span>.log(row);
      }
    },

    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">tableData</span>: [{
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-03'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">province</span>: <span class="hljs-string">'上海'</span>,
          <span class="hljs-attr">city</span>: <span class="hljs-string">'普陀区'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>,
          <span class="hljs-attr">zip</span>: <span class="hljs-number">200333</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-02'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">province</span>: <span class="hljs-string">'上海'</span>,
          <span class="hljs-attr">city</span>: <span class="hljs-string">'普陀区'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>,
          <span class="hljs-attr">zip</span>: <span class="hljs-number">200333</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-04'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">province</span>: <span class="hljs-string">'上海'</span>,
          <span class="hljs-attr">city</span>: <span class="hljs-string">'普陀区'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>,
          <span class="hljs-attr">zip</span>: <span class="hljs-number">200333</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-01'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">province</span>: <span class="hljs-string">'上海'</span>,
          <span class="hljs-attr">city</span>: <span class="hljs-string">'普陀区'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>,
          <span class="hljs-attr">zip</span>: <span class="hljs-number">200333</span>
        }]
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>流体高度</h3>
      <p>当数据量动态变化时，可以为 Table 设置一个最大高度。</p>
      <div class="demo-block">
        <div class="source">
          <el-table
            :data="tableData4"
            style="width: 100%"
            max-height="250">
            <el-table-column
              fixed
              prop="date"
              label="日期"
              width="150">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="province"
              label="省份"
              width="120">
            </el-table-column>
            <el-table-column
              prop="city"
              label="市区"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              width="300">
            </el-table-column>
            <el-table-column
              prop="zip"
              label="邮编"
              width="120">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, tableData4)"
                  type="text"
                  size="small">
                  移除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="meta">
          <div class="description"><p>通过设置<code>max-height</code>属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-table</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData4"</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%"</span>
    <span class="hljs-attr">max-height</span>=<span class="hljs-string">"250"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">fixed</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"date"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"日期"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"150"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"姓名"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"120"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"province"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"省份"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"120"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"city"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"市区"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"120"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"address"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"地址"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"300"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"zip"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"邮编"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"120"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">fixed</span>=<span class="hljs-string">"right"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"操作"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"120"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot-scope</span>=<span
        class="hljs-string">"scope"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
          <span class="hljs-attr">@click.native.prevent</span>=<span class="hljs-string">"deleteRow(scope.$index, tableData4)"</span>
          <span class="hljs-attr">type</span>=<span class="hljs-string">"text"</span>
          <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>
          移除
        <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      deleteRow(index, rows) {
        rows.splice(index, <span class="hljs-number">1</span>);
      }
    },
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">tableData4</span>: [{
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-03'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">province</span>: <span class="hljs-string">'上海'</span>,
          <span class="hljs-attr">city</span>: <span class="hljs-string">'普陀区'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>,
          <span class="hljs-attr">zip</span>: <span class="hljs-number">200333</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-02'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">province</span>: <span class="hljs-string">'上海'</span>,
          <span class="hljs-attr">city</span>: <span class="hljs-string">'普陀区'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>,
          <span class="hljs-attr">zip</span>: <span class="hljs-number">200333</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-04'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">province</span>: <span class="hljs-string">'上海'</span>,
          <span class="hljs-attr">city</span>: <span class="hljs-string">'普陀区'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>,
          <span class="hljs-attr">zip</span>: <span class="hljs-number">200333</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-01'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">province</span>: <span class="hljs-string">'上海'</span>,
          <span class="hljs-attr">city</span>: <span class="hljs-string">'普陀区'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>,
          <span class="hljs-attr">zip</span>: <span class="hljs-number">200333</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-08'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">province</span>: <span class="hljs-string">'上海'</span>,
          <span class="hljs-attr">city</span>: <span class="hljs-string">'普陀区'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>,
          <span class="hljs-attr">zip</span>: <span class="hljs-number">200333</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-06'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">province</span>: <span class="hljs-string">'上海'</span>,
          <span class="hljs-attr">city</span>: <span class="hljs-string">'普陀区'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>,
          <span class="hljs-attr">zip</span>: <span class="hljs-number">200333</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-07'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">province</span>: <span class="hljs-string">'上海'</span>,
          <span class="hljs-attr">city</span>: <span class="hljs-string">'普陀区'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>,
          <span class="hljs-attr">zip</span>: <span class="hljs-number">200333</span>
        }]
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>多选</h3>
      <p>选择多行数据时使用 Checkbox。</p>
      <div class="demo-block">
        <div class="source">
          <el-table
            ref="multipleTable"
            :data="tableData5"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="55">
            </el-table-column>
            <el-table-column
              label="日期"
              width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              show-overflow-tooltip>
            </el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="toggleSelection([tableData5[1], tableData5[2]])">切换第二、第三行的选中状态</el-button>
            <el-button @click="toggleSelection()">取消选择</el-button>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>实现多选非常简单:
            手动添加一个<code>el-table-column</code>，设<code>type</code>属性为<code>selection</code>即可；默认情况下若内容过多会折行显示，若需要单行显示可以使用<code>show-overflow-tooltip</code>属性，它接受一个<code>Boolean</code>，为<code>true</code>时多余的内容会在
            hover 时以 tooltip 的形式显示出来。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-table</span>
    <span class="hljs-attr">ref</span>=<span class="hljs-string">"multipleTable"</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData3"</span>
    <span class="hljs-attr">tooltip-effect</span>=<span class="hljs-string">"dark"</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%"</span>
    <span class="hljs-attr">@selection-change</span>=<span class="hljs-string">"handleSelectionChange"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">"selection"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"55"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"日期"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"120"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot-scope</span>=<span
        class="hljs-string">"scope"</span>&gt;</span><span>{{</span> scope.row.date }}<span class="hljs-tag">&lt;/<span
              class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"姓名"</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"120"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"address"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"地址"</span>
      <span class="hljs-attr">show-overflow-tooltip</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-table</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
    class="hljs-string">"margin-top: 20px"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
      class="hljs-string">"toggleSelection([tableData3[1], tableData3[2]])"</span>&gt;</span>切换第二、第三行的选中状态<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
      class="hljs-string">"toggleSelection()"</span>&gt;</span>取消选择<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">tableData3</span>: [{
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-03'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
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
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-08'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-06'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-07'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }],
        <span class="hljs-attr">multipleSelection</span>: []
      }
    },

    <span class="hljs-attr">methods</span>: {
      toggleSelection(rows) {
        <span class="hljs-keyword">if</span> (rows) {
          rows.forEach(<span class="hljs-function"><span class="hljs-params">row</span> =&gt;</span> {
            <span class="hljs-keyword">this</span>.$refs.multipleTable.toggleRowSelection(row);
          });
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-keyword">this</span>.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        <span class="hljs-keyword">this</span>.multipleSelection = val;
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>排序</h3>
      <p>对表格进行排序，可快速查找或对比数据。</p>
      <div class="demo-block">
        <div class="source">
          <el-table
            :data="tableData6"
            style="width: 100%"
            :default-sort="{prop: 'date', order: 'descending'}"
          >
            <el-table-column
              prop="date"
              label="日期"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              sortable
              width="180">
            </el-table-column>
            <el-table-column
              prop="address"
              label="地址"
              :formatter="formatter">
            </el-table-column>
          </el-table>
        </div>
        <div class="meta">
          <div class="description"><p>
            在列中设置<code>sortable</code>属性即可实现以该列为基准的排序，接受一个<code>Boolean</code>，默认为<code>false</code>。可以通过 Table 的<code>default-sort</code>属性设置默认的排序列和排序顺序。可以使用<code>sort-method</code>或者<code>sort-by</code>使用自定义的排序规则。如果需要后端排序，需将<code>sortable</code>设置为<code>custom</code>，同时在
            Table
            上监听<code>sort-change</code>事件，在事件回调中可以获取当前排序的字段名和排序顺序，从而向接口请求排序后的表格数据。在本例中，我们还使用了<code>formatter</code>属性，它用于格式化指定列的值，接受一个<code>Function</code>，会传入两个参数：<code>row</code>和<code>column</code>，可以根据自己的需求进行处理。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-table</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData"</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%"</span>
    <span class="hljs-attr">:default-sort</span> = <span
      class="hljs-string">"{prop: 'date', order: 'descending'}"</span>
    &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"date"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"日期"</span>
      <span class="hljs-attr">sortable</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"姓名"</span>
      <span class="hljs-attr">sortable</span>
      <span class="hljs-attr">width</span>=<span class="hljs-string">"180"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"address"</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"地址"</span>
      <span class="hljs-attr">:formatter</span>=<span class="hljs-string">"formatter"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">tableData</span>: [{
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-02'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1518 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-04'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1517 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-01'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1519 弄'</span>
        }, {
          <span class="hljs-attr">date</span>: <span class="hljs-string">'2016-05-03'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'王小虎'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区金沙江路 1516 弄'</span>
        }]
      }
    },
    <span class="hljs-attr">methods</span>: {
      formatter(row, column) {
        <span class="hljs-keyword">return</span> row.address;
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>展开行</h3>
      <p>当行内容过多并且不想显示横向滚动条时，可以使用 Table 展开行功能。</p>
      <div class="demo-block">
        <div class="source">
          <el-table
            :data="tableData7"
            style="width: 100%">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="商品名称">
                    <span>{{ props.row.name }}</span>
                  </el-form-item>
                  <el-form-item label="所属店铺">
                    <span>{{ props.row.shop }}</span>
                  </el-form-item>
                  <el-form-item label="商品 ID">
                    <span>{{ props.row.id }}</span>
                  </el-form-item>
                  <el-form-item label="店铺 ID">
                    <span>{{ props.row.shopId }}</span>
                  </el-form-item>
                  <el-form-item label="商品分类">
                    <span>{{ props.row.category }}</span>
                  </el-form-item>
                  <el-form-item label="店铺地址">
                    <span>{{ props.row.address }}</span>
                  </el-form-item>
                  <el-form-item label="商品描述">
                    <span>{{ props.row.desc }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column
              label="商品 ID"
              prop="id">
            </el-table-column>
            <el-table-column
              label="商品名称"
              prop="name">
            </el-table-column>
            <el-table-column
              label="描述"
              prop="desc">
            </el-table-column>
          </el-table>
        </div>
        <div class="meta">
          <div class="description"><p>通过设置 type="expand" 和 <code>Scoped slot</code>
            可以开启展开行功能，<code>el-table-column</code> 的模板会被渲染成为展开行的内容，展开行可访问的属性与使用自定义列模板时的 <code>Scoped slot</code> 相同。</p>
          </div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-table</span>
    <span class="hljs-attr">:data</span>=<span class="hljs-string">"tableData5"</span>
    <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"expand"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">template</span> <span class="hljs-attr">slot-scope</span>=<span
        class="hljs-string">"props"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-form</span> <span class="hljs-attr">label-position</span>=<span
          class="hljs-string">"left"</span> <span class="hljs-attr">inline</span> <span
          class="hljs-attr">class</span>=<span class="hljs-string">"demo-table-expand"</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span
            class="hljs-attr">label</span>=<span class="hljs-string">"商品名称"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span
              class="hljs-name">span</span>&gt;</span><span>{{</span> props.row.name }}<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span
            class="hljs-attr">label</span>=<span class="hljs-string">"所属店铺"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span
              class="hljs-name">span</span>&gt;</span><span>{{</span> props.row.shop }}<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span
            class="hljs-attr">label</span>=<span class="hljs-string">"商品 ID"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span
              class="hljs-name">span</span>&gt;</span><span>{{</span> props.row.id }}<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span
            class="hljs-attr">label</span>=<span class="hljs-string">"店铺 ID"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span>{{</span> props.row.shopId }}<span
              class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span
            class="hljs-attr">label</span>=<span class="hljs-string">"商品分类"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span>{{</span> props.row.category }}<span
              class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span
            class="hljs-attr">label</span>=<span class="hljs-string">"店铺地址"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span>{{</span> props.row.address }}<span
              class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
          <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span
            class="hljs-attr">label</span>=<span class="hljs-string">"商品描述"</span>&gt;</span>
            <span class="hljs-tag">&lt;<span
              class="hljs-name">span</span>&gt;</span><span>{{</span> props.row.desc }}<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">el-form</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"商品 ID"</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"id"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"商品名称"</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"name"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-table-column</span>
      <span class="hljs-attr">label</span>=<span class="hljs-string">"描述"</span>
      <span class="hljs-attr">prop</span>=<span class="hljs-string">"desc"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-table-column</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css">
  <span class="hljs-selector-class">.demo-table-expand</span> {
    <span class="hljs-attribute">font-size</span>: <span class="hljs-number">0</span>;
  }
  <span class="hljs-selector-class">.demo-table-expand</span> <span class="hljs-selector-tag">label</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">90px</span>;
    <span class="hljs-attribute">color</span>: <span class="hljs-number">#99a9bf</span>;
  }
  <span class="hljs-selector-class">.demo-table-expand</span> <span class="hljs-selector-class">.el-form-item</span> {
    <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">margin-bottom</span>: <span class="hljs-number">0</span>;
    <span class="hljs-attribute">width</span>: <span class="hljs-number">50%</span>;
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">tableData5</span>: [{
          <span class="hljs-attr">id</span>: <span class="hljs-string">'12987122'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'好滋好味鸡蛋仔'</span>,
          <span class="hljs-attr">category</span>: <span class="hljs-string">'江浙小吃、小吃零食'</span>,
          <span class="hljs-attr">desc</span>: <span class="hljs-string">'荷兰优质淡奶，奶香浓而不腻'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区真北路'</span>,
          <span class="hljs-attr">shop</span>: <span class="hljs-string">'王小虎夫妻店'</span>,
          <span class="hljs-attr">shopId</span>: <span class="hljs-string">'10333'</span>
        }, {
          <span class="hljs-attr">id</span>: <span class="hljs-string">'12987123'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'好滋好味鸡蛋仔'</span>,
          <span class="hljs-attr">category</span>: <span class="hljs-string">'江浙小吃、小吃零食'</span>,
          <span class="hljs-attr">desc</span>: <span class="hljs-string">'荷兰优质淡奶，奶香浓而不腻'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区真北路'</span>,
          <span class="hljs-attr">shop</span>: <span class="hljs-string">'王小虎夫妻店'</span>,
          <span class="hljs-attr">shopId</span>: <span class="hljs-string">'10333'</span>
        }, {
          <span class="hljs-attr">id</span>: <span class="hljs-string">'12987125'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'好滋好味鸡蛋仔'</span>,
          <span class="hljs-attr">category</span>: <span class="hljs-string">'江浙小吃、小吃零食'</span>,
          <span class="hljs-attr">desc</span>: <span class="hljs-string">'荷兰优质淡奶，奶香浓而不腻'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区真北路'</span>,
          <span class="hljs-attr">shop</span>: <span class="hljs-string">'王小虎夫妻店'</span>,
          <span class="hljs-attr">shopId</span>: <span class="hljs-string">'10333'</span>
        }, {
          <span class="hljs-attr">id</span>: <span class="hljs-string">'12987126'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'好滋好味鸡蛋仔'</span>,
          <span class="hljs-attr">category</span>: <span class="hljs-string">'江浙小吃、小吃零食'</span>,
          <span class="hljs-attr">desc</span>: <span class="hljs-string">'荷兰优质淡奶，奶香浓而不腻'</span>,
          <span class="hljs-attr">address</span>: <span class="hljs-string">'上海市普陀区真北路'</span>,
          <span class="hljs-attr">shop</span>: <span class="hljs-string">'王小虎夫妻店'</span>,
          <span class="hljs-attr">shopId</span>: <span class="hljs-string">'10333'</span>
        }]
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>国网定制版</h3>
      <p>基于Bootstrap Table，这里对样式和过滤功能做了一定的修改使用时直接引入此版本，API请参照 <a href="http://bootstrap-table.wenzhixin.net.cn/zh-cn/">Bootstrap
        Table官网</a></p>
      <div class="demo-block">
        <div class="source">
          <iframe name="iTable" src="static/views/table.html" class="comIframe" style="height: 324px"
                  marginheight="0" marginwidth="0" frameborder="0" scrolling="no">
          </iframe>
        </div>
        <div class="meta">
          <div class="highlight"><pre>
            <code class="hljs">
<table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tbody><tr><td class="blob-code blob-code-inner js-file-line">&lt;!DOCTYPE html&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">html</span> <span
        class="pl-e">lang</span>=<span class="pl-s"><span class="pl-pds">"</span>en<span
        class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">head</span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">meta</span> <span
        class="pl-e">charset</span>=<span class="pl-s"><span class="pl-pds">"</span>UTF-8<span
        class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">    &lt;<span
        class="pl-ent">title</span>&gt;Table&lt;/<span
        class="pl-ent">title</span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">link</span> <span
        class="pl-e">rel</span>=<span class="pl-s"><span class="pl-pds">"</span>stylesheet<span
        class="pl-pds">"</span></span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>../plugins/bootstrap-3.3.7/css/bootstrap.css<span
        class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">link</span> <span
        class="pl-e">rel</span>=<span class="pl-s"><span class="pl-pds">"</span>stylesheet<span
        class="pl-pds">"</span></span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>../plugins/bootstrap-table/bootstrap-table.css<span
        class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">head</span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">body</span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">div</span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">    &lt;<span class="pl-ent">table</span> <span
        class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>lexiconTable<span
        class="pl-pds">"</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">           <span
        class="pl-e">data-filter-control</span>=<span class="pl-s"><span class="pl-pds">"</span>true<span
        class="pl-pds">"</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">           <span class="pl-e">class</span>=<span
        class="pl-s"><span class="pl-pds">"</span>table table-hover table-responsive table-striped<span
        class="pl-pds">"</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">           <span
        class="pl-e">data-pagination</span>=<span class="pl-s"><span class="pl-pds">"</span>true<span
        class="pl-pds">"</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">           <span class="pl-e">data-page-list</span>=<span
        class="pl-s"><span class="pl-pds">"</span>[5, 10, 20, ALL]<span class="pl-pds">"</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">           <span
        class="pl-e">data-click-to-select</span>=<span class="pl-s"><span class="pl-pds">"</span>true<span
        class="pl-pds">"</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">           <span
        class="pl-e">data-show-footer</span>=<span class="pl-s"><span class="pl-pds">"</span>false<span
        class="pl-pds">"</span></span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">    &lt;/<span class="pl-ent">table</span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">div</span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">script</span> <span
        class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>../plugins/zTree_v3/js/jquery-1.9.1.min.js<span
        class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">script</span> <span
        class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>../plugins/bootstrap-3.3.7/js/bootstrap.js<span
        class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">script</span> <span
        class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>../plugins/bootstrap-table/bootstrap-table.js<span
        class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">script</span> <span
        class="pl-e">src</span>=<span class="pl-s"><span
        class="pl-pds">"</span>../plugins/bootstrap-table/filter.js<span class="pl-pds">"</span></span>&gt;&lt;/<span
        class="pl-ent">script</span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">&lt;<span class="pl-ent">script</span> <span
        class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>../plugins/bootstrap-table/bootstrap-table-zh-CN.js<span
        class="pl-pds">"</span></span>&gt;&lt;/<span class="pl-ent">script</span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">body</span>&gt;</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">&lt;/<span class="pl-ent">html</span>&gt;</td>
      </tr>
</tbody></table>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
<table class="highlight tab-size js-file-line-container">
      <tbody><tr><td class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span> eslint-disable <span
        class="pl-c">*/</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line"><span class="pl-k">let</span> columns <span
        class="pl-k">=</span> [</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{align<span class="pl-k">:</span> <span
        class="pl-s"><span
        class="pl-pds">'</span>center<span class="pl-pds">'</span></span>, valign<span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">'</span>middle<span class="pl-pds">'</span></span>, checkbox<span
        class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>true<span class="pl-pds">'</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		field<span class="pl-k">:</span> <span
        class="pl-s"><span
        class="pl-pds">'</span>目标ID<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		title<span class="pl-k">:</span> <span
        class="pl-s"><span
        class="pl-pds">'</span>目标ID<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		sortable<span class="pl-k">:</span> <span
        class="pl-c1">true</span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		valign<span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">'</span>middle<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		align<span class="pl-k">:</span> <span
        class="pl-s"><span
        class="pl-pds">'</span>center<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		filterControl<span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">'</span>input<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		filterControlPlaceholder<span
        class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		field<span class="pl-k">:</span> <span
        class="pl-s"><span
        class="pl-pds">'</span>目标NAME<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		title<span class="pl-k">:</span> <span
        class="pl-s"><span
        class="pl-pds">'</span>目标NAME<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		sortable<span class="pl-k">:</span> <span
        class="pl-c1">true</span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		valign<span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">'</span>middle<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		align<span class="pl-k">:</span> <span
        class="pl-s"><span
        class="pl-pds">'</span>center<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		filterControl<span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">'</span>input<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		filterControlPlaceholder<span
        class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		field<span class="pl-k">:</span> <span
        class="pl-s"><span
        class="pl-pds">'</span>参照ID<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		title<span class="pl-k">:</span> <span
        class="pl-s"><span
        class="pl-pds">'</span>参照ID<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		sortable<span class="pl-k">:</span> <span
        class="pl-c1">true</span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		valign<span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">'</span>middle<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		align<span class="pl-k">:</span> <span
        class="pl-s"><span
        class="pl-pds">'</span>center<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		filterControl<span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">'</span>input<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		filterControlPlaceholder<span
        class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		field<span class="pl-k">:</span> <span
        class="pl-s"><span
        class="pl-pds">'</span>参照NAME<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		title<span class="pl-k">:</span> <span
        class="pl-s"><span
        class="pl-pds">'</span>参照NAME<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		sortable<span class="pl-k">:</span> <span
        class="pl-c1">true</span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		valign<span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">'</span>middle<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		align<span class="pl-k">:</span> <span
        class="pl-s"><span
        class="pl-pds">'</span>center<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		filterControl<span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">'</span>input<span class="pl-pds">'</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		filterControlPlaceholder<span
        class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">'</span><span class="pl-pds">'</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	}]</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span
        class="pl-c1">data</span> <span class="pl-k">=</span> [</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>目标ID<span
        class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>119908340095516678<span
        class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>参照NAME<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">"</span>龙政直流极1线路<span class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>目标NAME<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">"</span>龙政直流极1线路<span class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>参照ID<span
        class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>120699010000000001<span
        class="pl-pds">"</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>目标ID<span
        class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>119908340095516670<span
        class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>参照NAME<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">"</span>湘江直流极1线路<span class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>目标NAME<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">"</span>湘江直流极1线路<span class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>参照ID<span
        class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>120699010000000002<span
        class="pl-pds">"</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>目标ID<span
        class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>119908340095516672<span
        class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>参照NAME<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">"</span>赣水直流极1线路<span class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>目标NAME<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">"</span>赣水直流极1线路<span class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>参照ID<span
        class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>120699010000000003<span
        class="pl-pds">"</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>目标ID<span
        class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>119908340095516671<span
        class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>参照NAME<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">"</span>汉水直流极1线路<span class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>目标NAME<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">"</span>汉水直流极1线路<span class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>参照ID<span
        class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>120699010000000004<span
        class="pl-pds">"</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>目标ID<span
        class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>119908340095516673<span
        class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>参照NAME<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">"</span>嵩山直流极1线路<span class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>目标NAME<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">"</span>嵩山直流极1线路<span class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>参照ID<span
        class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>120699010000000005<span
        class="pl-pds">"</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>目标ID<span
        class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>119908340095516674<span
        class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>参照NAME<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">"</span>衡山直流极1线路<span class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>目标NAME<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">"</span>衡山直流极1线路<span class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>参照ID<span
        class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>120699010000000006<span
        class="pl-pds">"</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>目标ID<span
        class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>119908340095516680<span
        class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>参照NAME<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">"</span>江城直流极1线路<span class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>目标NAME<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span
        class="pl-s"><span class="pl-pds">"</span>江城直流极1线路<span class="pl-pds">"</span></span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-s"><span
        class="pl-pds">"</span>参照ID<span
        class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>120699010000000007<span
        class="pl-pds">"</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">]</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line"><span class="pl-en">$</span>(<span class="pl-s"><span
        class="pl-pds">'</span>#lexiconTable<span class="pl-pds">'</span></span>).<span
        class="pl-en">bootstrapTable</span>({</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	columns<span class="pl-k">:</span> columns,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	data<span class="pl-k">:</span>data,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	pageSize<span class="pl-k">:</span> <span
        class="pl-c1">5</span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">})</td>
      </tr>
</tbody></table>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>Table Attributes</h3>
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
          <td>data</td>
          <td>显示的数据</td>
          <td>array</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>height</td>
          <td>Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则 Table 的高度受控于外部样式。</td>
          <td>string/number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>max-height</td>
          <td>Table 的最大高度</td>
          <td>string/number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>stripe</td>
          <td>是否为斑马纹 table</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>border</td>
          <td>是否带有纵向边框</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>Table 的尺寸</td>
          <td>string</td>
          <td>medium / small / mini</td>
          <td>—</td>
        </tr>
        <tr>
          <td>fit</td>
          <td>列的宽度是否自撑开</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>show-header</td>
          <td>是否显示表头</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>highlight-current-row</td>
          <td>是否要高亮当前行</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>current-row-key</td>
          <td>当前行的 key，只写属性</td>
          <td>String,Number</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>row-class-name</td>
          <td>行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。</td>
          <td>Function({row, rowIndex})/String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>row-style</td>
          <td>行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。</td>
          <td>Function({row, rowIndex})/Object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>cell-class-name</td>
          <td>单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。</td>
          <td>Function({row, column, rowIndex, columnIndex})/String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>cell-style</td>
          <td>单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。</td>
          <td>Function({row, column, rowIndex, columnIndex})/Object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>header-row-class-name</td>
          <td>表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。</td>
          <td>Function({row, rowIndex})/String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>header-row-style</td>
          <td>表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。</td>
          <td>Function({row, rowIndex})/Object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>header-cell-class-name</td>
          <td>表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。</td>
          <td>Function({row, column, rowIndex, columnIndex})/String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>header-cell-style</td>
          <td>表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。</td>
          <td>Function({row, rowIndex, rowIndex, columnIndex})/Object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>row-key</td>
          <td>行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能的情况下，该属性是必填的。类型为 String 时，支持多层访问：<code>user.info.id</code>，但不支持
            <code>user.info[0].id</code>，此种情况请使用 <code>Function</code>。
          </td>
          <td>Function(row)/String</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>empty-text</td>
          <td>空数据时显示的文本内容，也可以通过 <code>slot="empty"</code> 设置</td>
          <td>String</td>
          <td>—</td>
          <td>暂无数据</td>
        </tr>
        <tr>
          <td>default-expand-all</td>
          <td>是否默认展开所有行，当 Table 中存在 type="expand" 的 Column 的时候有效</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>expand-row-keys</td>
          <td>可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。</td>
          <td>Array</td>
          <td>—</td>
          <td></td>
        </tr>
        <tr>
          <td>default-sort</td>
          <td>默认的排序列的prop和顺序。它的<code>prop</code>属性指定默认的排序的列，<code>order</code>指定默认排序的顺序</td>
          <td>Object</td>
          <td><code>order</code>: ascending, descending</td>
          <td>如果只指定了<code>prop</code>, 没有指定<code>order</code>, 则默认顺序是ascending</td>
        </tr>
        <tr>
          <td>tooltip-effect</td>
          <td>tooltip <code>effect</code> 属性</td>
          <td>String</td>
          <td>dark/light</td>
          <td></td>
        </tr>
        <tr>
          <td>show-summary</td>
          <td>是否在表尾显示合计行</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>sum-text</td>
          <td>合计行第一列的文本</td>
          <td>String</td>
          <td>—</td>
          <td>合计</td>
        </tr>
        <tr>
          <td>summary-method</td>
          <td>自定义的合计计算方法</td>
          <td>Function({ columns, data })</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>span-method</td>
          <td>合并行或列的计算方法</td>
          <td>Function({ row, column, rowIndex, columnIndex })</td>
          <td>—</td>
          <td>—</td>
        </tr>
        </tbody>
      </table>
      <h3>Table Events</h3>
      <table class="table">
        <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>select</td>
          <td>当用户手动勾选数据行的 Checkbox 时触发的事件</td>
          <td>selection, row</td>
        </tr>
        <tr>
          <td>select-all</td>
          <td>当用户手动勾选全选 Checkbox 时触发的事件</td>
          <td>selection</td>
        </tr>
        <tr>
          <td>selection-change</td>
          <td>当选择项发生变化时会触发该事件</td>
          <td>selection</td>
        </tr>
        <tr>
          <td>cell-mouse-enter</td>
          <td>当单元格 hover 进入时会触发该事件</td>
          <td>row, column, cell, event</td>
        </tr>
        <tr>
          <td>cell-mouse-leave</td>
          <td>当单元格 hover 退出时会触发该事件</td>
          <td>row, column, cell, event</td>
        </tr>
        <tr>
          <td>cell-click</td>
          <td>当某个单元格被点击时会触发该事件</td>
          <td>row, column, cell, event</td>
        </tr>
        <tr>
          <td>cell-dblclick</td>
          <td>当某个单元格被双击击时会触发该事件</td>
          <td>row, column, cell, event</td>
        </tr>
        <tr>
          <td>row-click</td>
          <td>当某一行被点击时会触发该事件</td>
          <td>row, event, column</td>
        </tr>
        <tr>
          <td>row-contextmenu</td>
          <td>当某一行被鼠标右键点击时会触发该事件</td>
          <td>row, event</td>
        </tr>
        <tr>
          <td>row-dblclick</td>
          <td>当某一行被双击时会触发该事件</td>
          <td>row, event</td>
        </tr>
        <tr>
          <td>header-click</td>
          <td>当某一列的表头被点击时会触发该事件</td>
          <td>column, event</td>
        </tr>
        <tr>
          <td>sort-change</td>
          <td>当表格的排序条件发生变化的时候会触发该事件</td>
          <td>{ column, prop, order }</td>
        </tr>
        <tr>
          <td>filter-change</td>
          <td>当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。</td>
          <td>filters</td>
        </tr>
        <tr>
          <td>current-change</td>
          <td>当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性</td>
          <td>currentRow, oldCurrentRow</td>
        </tr>
        <tr>
          <td>header-dragend</td>
          <td>当拖动表头改变了列的宽度的时候会触发该事件</td>
          <td>newWidth, oldWidth, column, event</td>
        </tr>
        <tr>
          <td>expand-change</td>
          <td>当用户对某一行展开或者关闭的时候会触发该事件</td>
          <td>row, expandedRows</td>
        </tr>
        </tbody>
      </table>
      <h3>Table Methods</h3>
      <table class="table">
        <thead>
        <tr>
          <th>事件名</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>select</td>
          <td>当用户手动勾选数据行的 Checkbox 时触发的事件</td>
          <td>selection, row</td>
        </tr>
        <tr>
          <td>select-all</td>
          <td>当用户手动勾选全选 Checkbox 时触发的事件</td>
          <td>selection</td>
        </tr>
        <tr>
          <td>selection-change</td>
          <td>当选择项发生变化时会触发该事件</td>
          <td>selection</td>
        </tr>
        <tr>
          <td>cell-mouse-enter</td>
          <td>当单元格 hover 进入时会触发该事件</td>
          <td>row, column, cell, event</td>
        </tr>
        <tr>
          <td>cell-mouse-leave</td>
          <td>当单元格 hover 退出时会触发该事件</td>
          <td>row, column, cell, event</td>
        </tr>
        <tr>
          <td>cell-click</td>
          <td>当某个单元格被点击时会触发该事件</td>
          <td>row, column, cell, event</td>
        </tr>
        <tr>
          <td>cell-dblclick</td>
          <td>当某个单元格被双击击时会触发该事件</td>
          <td>row, column, cell, event</td>
        </tr>
        <tr>
          <td>row-click</td>
          <td>当某一行被点击时会触发该事件</td>
          <td>row, event, column</td>
        </tr>
        <tr>
          <td>row-contextmenu</td>
          <td>当某一行被鼠标右键点击时会触发该事件</td>
          <td>row, event</td>
        </tr>
        <tr>
          <td>row-dblclick</td>
          <td>当某一行被双击时会触发该事件</td>
          <td>row, event</td>
        </tr>
        <tr>
          <td>header-click</td>
          <td>当某一列的表头被点击时会触发该事件</td>
          <td>column, event</td>
        </tr>
        <tr>
          <td>sort-change</td>
          <td>当表格的排序条件发生变化的时候会触发该事件</td>
          <td>{ column, prop, order }</td>
        </tr>
        <tr>
          <td>filter-change</td>
          <td>当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。</td>
          <td>filters</td>
        </tr>
        <tr>
          <td>current-change</td>
          <td>当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性</td>
          <td>currentRow, oldCurrentRow</td>
        </tr>
        <tr>
          <td>header-dragend</td>
          <td>当拖动表头改变了列的宽度的时候会触发该事件</td>
          <td>newWidth, oldWidth, column, event</td>
        </tr>
        <tr>
          <td>expand-change</td>
          <td>当用户对某一行展开或者关闭的时候会触发该事件</td>
          <td>row, expandedRows</td>
        </tr>
        </tbody>
      </table>
      <h3>Table Slot</h3>
      <table class="table">
        <thead>
        <tr>
          <th>name</th>
          <th>说明</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>append</td>
          <td>插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。</td>
        </tr>
        </tbody>
      </table>
      <h3>Table-column Attributes</h3>
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
          <td>type</td>
          <td>对应列的类型。如果设置了 <code>selection</code> 则显示多选框；如果设置了 <code>index</code> 则显示该行的索引（从 1 开始计算）；如果设置了
            <code>expand</code> 则显示为一个可展开的按钮
          </td>
          <td>string</td>
          <td>selection/index/expand</td>
          <td>—</td>
        </tr>
        <tr>
          <td>index</td>
          <td>如果设置了 <code>type=index</code>，可以通过传递 <code>index</code> 属性来自定义索引</td>
          <td>string, Function(index)</td>
          <td>-</td>
          <td>-</td>
        </tr>
        <tr>
          <td>column-key</td>
          <td>column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>label</td>
          <td>显示的标题</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>prop</td>
          <td>对应列内容的字段名，也可以使用 property 属性</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>width</td>
          <td>对应列的宽度</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>min-width</td>
          <td>对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>fixed</td>
          <td>列是否固定在左侧或者右侧，true 表示固定在左侧</td>
          <td>string, boolean</td>
          <td>true, left, right</td>
          <td>—</td>
        </tr>
        <tr>
          <td>render-header</td>
          <td>列标题 Label 区域渲染使用的 Function</td>
          <td>Function(h, { column, $index })</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>sortable</td>
          <td>对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件</td>
          <td>boolean, string</td>
          <td>true, false, 'custom'</td>
          <td>false</td>
        </tr>
        <tr>
          <td>sort-method</td>
          <td>对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致</td>
          <td>Function(a, b)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>sort-by</td>
          <td>指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2
            个排序，以此类推。
          </td>
          <td>String/Array/Function(row, index)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>resizable</td>
          <td>对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>formatter</td>
          <td>用来格式化内容</td>
          <td>Function(row, column, cellValue)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>show-overflow-tooltip</td>
          <td>当内容过长被隐藏时显示 tooltip</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>align</td>
          <td>对齐方式</td>
          <td>String</td>
          <td>left/center/right</td>
          <td>left</td>
        </tr>
        <tr>
          <td>header-align</td>
          <td>表头对齐方式，若不设置该项，则使用表格的对齐方式</td>
          <td>String</td>
          <td>left/center/right</td>
          <td>—</td>
        </tr>
        <tr>
          <td>class-name</td>
          <td>列的 className</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>label-class-name</td>
          <td>当前列标题的自定义类名</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>selectable</td>
          <td>仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选</td>
          <td>Function(row, index)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>reserve-selection</td>
          <td>仅对 type=selection 的列有效，类型为 Boolean，为 true 则代表会保留之前数据的选项，需要配合 Table 的 clearSelection 方法使用。</td>
          <td>Boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>filters</td>
          <td>数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。</td>
          <td>Array[{ text, value }]</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>filter-placement</td>
          <td>过滤弹出框的定位</td>
          <td>String</td>
          <td>与 Tooltip 的 <code>placement</code> 属性相同</td>
          <td>—</td>
        </tr>
        <tr>
          <td>filter-multiple</td>
          <td>数据过滤的选项是否多选</td>
          <td>Boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>filter-method</td>
          <td>数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。</td>
          <td>Function(value, row)</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>filtered-value</td>
          <td>选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。</td>
          <td>Array</td>
          <td>—</td>
          <td>—</td>
        </tr>
        </tbody>
      </table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  const item = {
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }
  const item2 = {
    date: '2016-05-03',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  }
  export default {
    data () {
      return {
        tableData: Array(4).fill(item),
        tableData2: Array(10).fill(item),
        tableData3: Array(4).fill(item2),
        tableData4: Array(10).fill(item2),
        tableData5: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
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
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        tableData6: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        multipleSelection: [],
        tableData7: [{
          id: '12987122',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987123',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987125',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }, {
          id: '12987126',
          name: '好滋好味鸡蛋仔',
          category: '江浙小吃、小吃零食',
          desc: '荷兰优质淡奶，奶香浓而不腻',
          address: '上海市普陀区真北路',
          shop: '王小虎夫妻店',
          shopId: '10333'
        }]
      }
    },

    methods: {

      deleteRow (index, rows) {
        rows.splice(index, 1)
      },
      toggleSelection (rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row)
          })
        } else {
          this.$refs.multipleTable.clearSelection()
        }
      },
      handleSelectionChange (val) {
        this.multipleSelection = val
      },
      formatter (row, column) {
        return row.address
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"
  .demo-table-expand {
    font-size: 0;
  }

  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }

  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
