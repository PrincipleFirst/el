<template>
  <div class="page-component__content">
    <section class="content">
      <h2>DatePicker 日期选择器</h2>
      <p>用于选择或输入日期</p>
      <h3>选择日</h3>
      <p>以「日」为基本单位，基础的日期选择控件</p>
      <div class="demo-block">
        <div class="source">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
              v-model="value2"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions1">
            </el-date-picker>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>
            基本单位由<code>type</code>属性指定。快捷选项需配置<code>picker-options</code>对象中的<code>shortcuts</code>，禁用日期通过 <code>disabledDate</code>
            设置，传入函数</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>默认<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value1"</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择日期"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>带快捷选项<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value2"</span>
      <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择日期"</span>
      <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"pickerOptions1"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">pickerOptions1</span>: {
          disabledDate(time) {
            <span class="hljs-keyword">return</span> time.getTime() &gt; <span class="hljs-built_in">Date</span>.now();
          },
          <span class="hljs-attr">shortcuts</span>: [{
            <span class="hljs-attr">text</span>: <span class="hljs-string">'今天'</span>,
            onClick(picker) {
              picker.$emit(<span class="hljs-string">'pick'</span>, <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>());
            }
          }, {
            <span class="hljs-attr">text</span>: <span class="hljs-string">'昨天'</span>,
            onClick(picker) {
              <span class="hljs-keyword">const</span> date = <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>();
              date.setTime(date.getTime() - <span class="hljs-number">3600</span> * <span
              class="hljs-number">1000</span> * <span class="hljs-number">24</span>);
              picker.$emit(<span class="hljs-string">'pick'</span>, date);
            }
          }, {
            <span class="hljs-attr">text</span>: <span class="hljs-string">'一周前'</span>,
            onClick(picker) {
              <span class="hljs-keyword">const</span> date = <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>();
              date.setTime(date.getTime() - <span class="hljs-number">3600</span> * <span
              class="hljs-number">1000</span> * <span class="hljs-number">24</span> * <span class="hljs-number">7</span>);
              picker.$emit(<span class="hljs-string">'pick'</span>, date);
            }
          }]
        },
        <span class="hljs-attr">value1</span>: <span class="hljs-string">''</span>,
        <span class="hljs-attr">value2</span>: <span class="hljs-string">''</span>,
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>其他日期单位</h3>
      <p>通过扩展基础的日期选择，可以选择周、月、年</p>
      <div class="demo-block">
        <div class="source">
          <div class="block">
            <span class="demonstration">周</span>
            <el-date-picker
              v-model="value3"
              type="week"
              format="yyyy 第 WW 周"
              placeholder="选择周">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">月</span>
            <el-date-picker
              v-model="value4"
              type="month"
              placeholder="选择月">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">年</span>
            <el-date-picker
              v-model="value5"
              align="right"
              type="year"
              placeholder="选择年">
            </el-date-picker>
          </div>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"demonstration"</span>&gt;</span>周<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value3"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"week"</span>
    <span class="hljs-attr">format</span>=<span class="hljs-string">"yyyy 第 WW 周"</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择周"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
  class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"demonstration"</span>&gt;</span>月<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value4"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"month"</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择月"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
  class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"demonstration"</span>&gt;</span>年<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value5"</span>
    <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">"year"</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择年"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value3</span>: <span class="hljs-string">''</span>,
        <span class="hljs-attr">value4</span>: <span class="hljs-string">''</span>,
        <span class="hljs-attr">value5</span>: <span class="hljs-string">''</span>
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>选择日期范围</h3>
      <p>可在一个选择器中便捷地选择一个时间范围</p>
      <div class="demo-block">
        <div class="source">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="value6"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
              v-model="value7"
              type="daterange"
              align="right"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :picker-options="pickerOptions2">
            </el-date-picker>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>在选择日期范围时，默认情况下左右面板会联动。如果希望两个面板各自独立切换当前月份，可以使用<code>unlink-panels</code>属性解除联动。</p>
          </div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>默认<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value6"</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">"daterange"</span>
      <span class="hljs-attr">range-separator</span>=<span class="hljs-string">"至"</span>
      <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始日期"</span>
      <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束日期"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>带快捷选项<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value7"</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">"daterange"</span>
      <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>
      <span class="hljs-attr">unlink-panels</span>
      <span class="hljs-attr">range-separator</span>=<span class="hljs-string">"至"</span>
      <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始日期"</span>
      <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束日期"</span>
      <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"pickerOptions2"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">pickerOptions2</span>: {
          <span class="hljs-attr">shortcuts</span>: [{
            <span class="hljs-attr">text</span>: <span class="hljs-string">'最近一周'</span>,
            onClick(picker) {
              <span class="hljs-keyword">const</span> end = <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>();
              <span class="hljs-keyword">const</span> start = <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>();
              start.setTime(start.getTime() - <span class="hljs-number">3600</span> * <span
              class="hljs-number">1000</span> * <span class="hljs-number">24</span> * <span class="hljs-number">7</span>);
              picker.$emit(<span class="hljs-string">'pick'</span>, [start, end]);
            }
          }, {
            <span class="hljs-attr">text</span>: <span class="hljs-string">'最近一个月'</span>,
            onClick(picker) {
              <span class="hljs-keyword">const</span> end = <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>();
              <span class="hljs-keyword">const</span> start = <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>();
              start.setTime(start.getTime() - <span class="hljs-number">3600</span> * <span
              class="hljs-number">1000</span> * <span class="hljs-number">24</span> * <span
              class="hljs-number">30</span>);
              picker.$emit(<span class="hljs-string">'pick'</span>, [start, end]);
            }
          }, {
            <span class="hljs-attr">text</span>: <span class="hljs-string">'最近三个月'</span>,
            onClick(picker) {
              <span class="hljs-keyword">const</span> end = <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>();
              <span class="hljs-keyword">const</span> start = <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>();
              start.setTime(start.getTime() - <span class="hljs-number">3600</span> * <span
              class="hljs-number">1000</span> * <span class="hljs-number">24</span> * <span
              class="hljs-number">90</span>);
              picker.$emit(<span class="hljs-string">'pick'</span>, [start, end]);
            }
          }]
        },
        <span class="hljs-attr">value6</span>: <span class="hljs-string">''</span>,
        <span class="hljs-attr">value7</span>: <span class="hljs-string">''</span>
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>默认显示日期</h3>
      <p>未选择日期时，默认显示今天的日历。使用default-value可以指定其他日期，该值需要能够被new Date()解析。 类型为daterange时，指定左侧日历的日期。</p>
      <div class="demo-block">
        <div class="source">
          <div class="block">
            <span class="demonstration">date</span>
            <el-date-picker
              v-model="value8"
              type="date"
              placeholder="选择日期"
              default-value="2010-10-01">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">daterange</span>
            <el-date-picker
              v-model="value9"
              type="daterange"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              default-value="2010-10-01">
            </el-date-picker>
          </div>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>date<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value8"</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">"date"</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择日期"</span>
      <span class="hljs-attr">default-value</span>=<span class="hljs-string">"2010-10-01"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>daterange<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value9"</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">"daterange"</span>
      <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始日期"</span>
      <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束日期"</span>
      <span class="hljs-attr">default-value</span>=<span class="hljs-string">"2010-10-01"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value8</span>: <span class="hljs-string">''</span>,
        <span class="hljs-attr">value9</span>: <span class="hljs-string">''</span>
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>readonly</td><td>完全只读</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>文本框可输入</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>是否显示清除按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>输入框尺寸</td><td>string</td><td>large, small, mini</td><td>—</td></tr><tr><td>placeholder</td><td>非范围选择时的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>范围选择时开始日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>范围选择时结束日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>type</td><td>显示类型</td><td>string</td><td>year/month/date/week/ datetime/datetimerange/daterange</td><td>date</td></tr><tr><td>format</td><td>显示在输入框中的格式</td><td>string</td><td>年 <code>yyyy</code>，月 <code>MM</code>，日 <code>dd</code>，小时 <code>HH</code>，分 <code>mm</code>，秒 <code>ss</code>，AM/PM <code>A</code></td><td>yyyy-MM-dd</td></tr><tr><td>align</td><td>对齐方式</td><td>string</td><td>left, center, right</td><td>left</td></tr><tr><td>popper-class</td><td>DatePicker 下拉框的类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>picker-options</td><td>当前时间日期选择器特有的选项参考下表</td><td>object</td><td>—</td><td>{}</td></tr><tr><td>range-separator</td><td>选择范围时的分隔符</td><td>string</td><td>—</td><td>'-'</td></tr><tr><td>default-value</td><td>可选，选择器打开时默认显示的时间</td><td>Date</td><td>可被<code>new Date()</code>解析</td><td>—</td></tr><tr><td>value-format</td><td>可选，绑定值的格式。不指定则绑定值为 Date 对象</td><td>string</td><td>年 <code>yyyy</code>，月 <code>MM</code>，日 <code>dd</code>，小时 <code>HH</code>，分 <code>mm</code>，秒 <code>ss</code>，AM/PM <code>A</code></td><td>—</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>unlink-panels</td><td>在范围选择器里取消两个日期面板之间的联动</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>
      <h3>Picker Options</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>shortcuts</td><td>设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表</td><td>Object[]</td><td>—</td><td>—</td></tr><tr><td>disabledDate</td><td>设置禁用状态，参数为当前日期，要求返回 Boolean</td><td>Function</td><td>—</td><td>—</td></tr><tr><td>firstDayOfWeek</td><td>周起始日</td><td>Number</td><td>1 到 7</td><td>7</td></tr><tr><td>onPick</td><td>选中日期后会执行的回调，只有当 <code>daterange</code> 或 <code>datetimerange</code> 才生效</td><td>Function({ maxDate, minDate })</td><td>—</td><td>—</td></tr></tbody></table>
      <h3>Shortcuts</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>标题文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>onClick</td><td>选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())</td><td>function</td><td>—</td><td>—</td></tr></tbody></table>
      <h3>Events</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>用户确认选定的值时触发</td><td>组件绑定值。格式与绑定值一致，可受 <code>value-format</code> 控制</td></tr><tr><td>blur</td><td>当 input 失去焦点时触发</td><td>组件实例</td></tr><tr><td>focus</td><td>当 input 获得焦点时触发</td><td>组件实例</td></tr></tbody></table>
      <h3>Methods</h3>
      <table class="table"><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>—</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {
    data () {
      return {
        pickerOptions1: {
          disabledDate (time) {
            return time.getTime() > Date.now()
          },
          shortcuts: [{
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          }, {
            text: '昨天',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24)
              picker.$emit('pick', date)
            }
          }, {
            text: '一周前',
            onClick (picker) {
              const date = new Date()
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', date)
            }
          }]
        },
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
              picker.$emit('pick', [start, end])
            }
          }]
        },
        value6: '',
        value7: '',
        value8: '',
        value9: ''
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .source {
    padding 0 !important
    display flex
  }

  .block {
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    -ms-flex: 1;
    flex: 1;
  }

  .block:last-child {
    border-right: none;
  }

  .demonstration {
    display: block;
    color: #8492a6;
    font-size: 14px;
    margin-bottom: 20px;
  }

</style>
