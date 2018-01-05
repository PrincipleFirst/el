<template>
  <div class="page-component__content">
    <section class="content">
      <h2>DateTimePicker 日期时间选择器</h2>
      <p>在同一个选择器里选择日期和时间</p>
      <div class="tip"><p>DateTimePicker 由 DatePicker 和 TimePicker 派生，<code>Picker Options</code> 或者其他选项可以参照 DatePicker
        和 TimePicker。</p></div>
      <h3>日期和时间点</h3>
      <div class="demo-block">
        <div class="source">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="value1"
              type="datetime"
              placeholder="选择日期时间">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
              v-model="value2"
              type="datetime"
              placeholder="选择日期时间"
              align="right"
              :picker-options="pickerOptions1">
            </el-date-picker>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>通过设置<code>type</code>属性为<code>datetime</code>，即可在同一个选择器里同时进行日期和时间的选择。快捷选项的使用方法与
            Date Picker 相同。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>默认<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value1"</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">"datetime"</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择日期时间"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>带快捷选项<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value2"</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">"datetime"</span>
      <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择日期时间"</span>
      <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>
      <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"pickerOptions1"</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">pickerOptions1</span>: {
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
        <span class="hljs-attr">value2</span>: <span class="hljs-string">''</span>
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>日期和时间范围</h3>
      <p>通过扩展基础的日期选择，可以选择周、月、年</p>
      <div class="demo-block">
        <div class="source">
          <div class="block">
            <span class="demonstration">默认</span>
            <el-date-picker
              v-model="value3"
              type="datetimerange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </div>
          <div class="block">
            <span class="demonstration">带快捷选项</span>
            <el-date-picker
              v-model="value4"
              type="datetimerange"
              :picker-options="pickerOptions2"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              align="right">
            </el-date-picker>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>设置<code>type</code>为<code>datetimerange</code>即可选择日期和时间范围</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"block"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"demonstration"</span>&gt;</span>默认<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span>
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value3"</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">"datetimerange"</span>
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
      <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value4"</span>
      <span class="hljs-attr">type</span>=<span class="hljs-string">"datetimerange"</span>
      <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"pickerOptions2"</span>
      <span class="hljs-attr">range-separator</span>=<span class="hljs-string">"至"</span>
      <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始日期"</span>
      <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束日期"</span>
      <span class="hljs-attr">align</span>=<span class="hljs-string">"right"</span>&gt;</span>
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
        <span class="hljs-attr">value3</span>: [<span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>(<span class="hljs-number">2000</span>, <span
              class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span
              class="hljs-number">10</span>, <span class="hljs-number">10</span>), <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>(<span class="hljs-number">2000</span>, <span
              class="hljs-number">10</span>, <span class="hljs-number">11</span>, <span
              class="hljs-number">10</span>, <span class="hljs-number">10</span>)],
        <span class="hljs-attr">value4</span>: <span class="hljs-string">''</span>
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
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>readonly</td><td>完全只读</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>文本框可输入</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>是否显示清除按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>输入框尺寸</td><td>string</td><td>large, small, mini</td><td>—</td></tr><tr><td>placeholder</td><td>非范围选择时的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>范围选择时开始日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>范围选择时结束日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>time-arrow-control</td><td>是否使用箭头进行时间选择</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>type</td><td>显示类型</td><td>string</td><td>year/month/date/week/ datetime/datetimerange/daterange</td><td>date</td></tr><tr><td>format</td><td>显示在输入框中的格式</td><td>string</td><td>年 <code>yyyy</code>，月 <code>MM</code>，日 <code>dd</code>，小时 <code>HH</code>，分 <code>mm</code>，秒 <code>ss</code>，AM/PM <code>A</code></td><td>yyyy-MM-dd</td></tr><tr><td>align</td><td>对齐方式</td><td>string</td><td>left, center, right</td><td>left</td></tr><tr><td>popper-class</td><td>DateTimePicker 下拉框的类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>picker-options</td><td>当前时间日期选择器特有的选项参考下表</td><td>object</td><td>—</td><td>{}</td></tr><tr><td>range-separator</td><td>选择范围时的分隔符</td><td>string</td><td>-</td><td>'-'</td></tr><tr><td>default-value</td><td>可选，选择器打开时默认显示的时间</td><td>Date</td><td>可被<code>new Date()</code>解析</td><td>—</td></tr><tr><td>value-format</td><td>可选，绑定值的格式。不指定则绑定值为 Date 对象</td><td>string</td><td>年 <code>yyyy</code>，月 <code>MM</code>，日 <code>dd</code>，小时 <code>HH</code>，分 <code>mm</code>，秒 <code>ss</code>，AM/PM <code>A</code></td><td>—</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr><tr><td>unlink-panels</td><td>在范围选择器里取消两个日期面板之间的联动</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>
      <h3>Picker Options</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>shortcuts</td><td>设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表</td><td>Object[]</td><td>—</td><td>—</td></tr><tr><td>disabledDate</td><td>设置禁用状态，参数为当前日期，要求返回 Boolean</td><td>Function</td><td>—</td><td>—</td></tr><tr><td>firstDayOfWeek</td><td>周起始日</td><td>Number</td><td>1 到 7</td><td>7</td></tr></tbody></table>
      <h3>Shortcuts</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>text</td><td>标题文本</td><td>string</td><td>—</td><td>—</td></tr><tr><td>onClick</td><td>选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())</td><td>function</td><td>—</td><td>—</td></tr></tbody></table>
      <h3>Events</h3>
      <table class="table"><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>change</td><td>用户确认选定的值时触发</td><td>组件绑定值。格式与绑定值一致，可受 <code>value-format</code> 控制</td></tr><tr><td>blur</td><td>当 input 失去焦点时触发</td><td>组件实例</td></tr><tr><td>focus</td><td>当 input 获得焦点时触发</td><td>组件实例</td></tr></tbody></table>
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
        value3: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value4: ''
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
