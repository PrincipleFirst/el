<template>
  <div class="page-component__content">
    <section class="content">
      <h2>TimePicker 时间选择器</h2>
      <p>用于选择或输入日期</p>
      <h3>固定时间点</h3>
      <p>提供几个固定的时间点供用户选择</p>
      <div class="demo-block">
        <div class="source">
          <el-time-select
            v-model="value1"
            :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
            placeholder="选择时间">
          </el-time-select>
        </div>
        <div class="meta">
          <div class="description"><p>使用 el-time-select 标签，分别通过<code>star</code>、<code>end</code>和<code>step</code>指定可选的起始时间、结束时间和步长
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-time-select</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value1"</span>
  <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择时间"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-time-select</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value1</span>: <span class="hljs-string">''</span>
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[0].expand" :index="0" @switcher="switcherState"></collapseBar>
      </div>
      <h3>任意时间点</h3>
      <p>可以选择任意时间</p>
      <div class="demo-block">
        <div class="source">
          <el-time-picker
            v-model="value2"
            :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
            placeholder="任意时间点">
          </el-time-picker>
          <el-time-picker
            arrow-control
            v-model="value3"
            :picker-options="{selectableRange: '18:30:00 - 20:30:00'}"
            placeholder="任意时间点">
          </el-time-picker>
        </div>
        <div class="meta">
          <div class="description"><p>使用 el-time-picker 标签，通过<code>selectableRange</code>限制可选时间范围。提供了两种交互方式：默认情况下通过鼠标滚轮进行选择，打开<code>arrow-control</code>属性则通过界面上的箭头进行选择。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-time-picker</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value2"</span>
    <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"{
      selectableRange: '18:30:00 - 20:30:00'
    }"</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"任意时间点"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-time-picker</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-time-picker</span>
    <span class="hljs-attr">arrow-control</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value3"</span>
    <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"{
      selectableRange: '18:30:00 - 20:30:00'
    }"</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"任意时间点"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-time-picker</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value2</span>: <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>(<span class="hljs-number">2017</span>, <span
              class="hljs-number">12</span>, <span class="hljs-number">12</span>, <span
              class="hljs-number">13</span>, <span class="hljs-number">30</span>),
        <span class="hljs-attr">value3</span>: <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>(<span class="hljs-number">2017</span>, <span
              class="hljs-number">12</span>, <span class="hljs-number">14</span>, <span
              class="hljs-number">18</span>, <span class="hljs-number">40</span>)
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[1].expand" :index="1" @switcher="switcherState"></collapseBar>
      </div>
      <h3>固定时间范围</h3>
      <p>若先选择开始时间，则结束时间内备选项的状态会随之改变</p>
      <div class="demo-block">
        <div class="source">
          <el-time-select
            placeholder="起始时间"
            v-model="startTime"
            :picker-options="{start: '08:30',step: '00:15',end: '18:30'}">
          </el-time-select>
          <el-time-select
            placeholder="结束时间"
            v-model="endTime"
            :picker-options="{start: '08:30',step: '00:15',end: '18:30',minTime: startTime}">
          </el-time-select>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-time-select</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"起始时间"</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"startTime"</span>
    <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"{
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-time-select</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-time-select</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"结束时间"</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"endTime"</span>
    <span class="hljs-attr">:picker-options</span>=<span class="hljs-string">"{
      start: '08:30',
      step: '00:15',
      end: '18:30',
      minTime: startTime
    }"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-time-select</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">startTime</span>: <span class="hljs-string">''</span>,
        <span class="hljs-attr">endTime</span>: <span class="hljs-string">''</span>
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[2].expand" :index="2" @switcher="switcherState"></collapseBar>
      </div>
      <h3>任意时间范围</h3>
      <p>可选择任意的时间范围</p>
      <div class="demo-block">
        <div class="source">
          <el-time-picker
            is-range
            v-model="value4"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
          </el-time-picker>
          <el-time-picker
            is-range
            arrow-control
            v-model="value5"
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
          </el-time-picker>
        </div>
        <div class="meta">
          <div class="description"><p>添加<code>is-range</code>属性即可选择时间范围，同样支持<code>arrow-control</code>属性。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-time-picker</span>
    <span class="hljs-attr">is-range</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value4"</span>
    <span class="hljs-attr">range-separator</span>=<span class="hljs-string">"至"</span>
    <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始时间"</span>
    <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束时间"</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择时间范围"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-time-picker</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-time-picker</span>
    <span class="hljs-attr">is-range</span>
    <span class="hljs-attr">arrow-control</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"value5"</span>
    <span class="hljs-attr">range-separator</span>=<span class="hljs-string">"至"</span>
    <span class="hljs-attr">start-placeholder</span>=<span class="hljs-string">"开始时间"</span>
    <span class="hljs-attr">end-placeholder</span>=<span class="hljs-string">"结束时间"</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择时间范围"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-time-picker</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">value4</span>: [<span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>(<span class="hljs-number">2016</span>, <span
              class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span
              class="hljs-number">8</span>, <span class="hljs-number">40</span>), <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>(<span class="hljs-number">2016</span>, <span
              class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span
              class="hljs-number">9</span>, <span class="hljs-number">40</span>)],
        <span class="hljs-attr">value5</span>: [<span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>(<span class="hljs-number">2016</span>, <span
              class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span
              class="hljs-number">8</span>, <span class="hljs-number">40</span>), <span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Date</span>(<span class="hljs-number">2016</span>, <span
              class="hljs-number">9</span>, <span class="hljs-number">10</span>, <span
              class="hljs-number">9</span>, <span class="hljs-number">40</span>)]
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[3].expand" :index="3" @switcher="switcherState"></collapseBar>
      </div>
      <h3>Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>readonly</td><td>完全只读</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>disabled</td><td>禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>文本框可输入</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>clearable</td><td>是否显示清除按钮</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>输入框尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>placeholder</td><td>非范围选择时的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>start-placeholder</td><td>范围选择时开始日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>end-placeholder</td><td>范围选择时开始日期的占位内容</td><td>string</td><td>—</td><td>—</td></tr><tr><td>is-range</td><td>是否为时间范围选择，仅对<code>&lt;el-time-picker&gt;</code>有效</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>arrow-control</td><td>是否使用箭头进行时间选择，仅对<code>&lt;el-time-picker&gt;</code>有效</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value</td><td>绑定值</td><td>date(TimePicker) / string(TimeSelect)</td><td>—</td><td>—</td></tr><tr><td>align</td><td>对齐方式</td><td>string</td><td>left / center / right</td><td>left</td></tr><tr><td>popper-class</td><td>TimePicker 下拉框的类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>picker-options</td><td>当前时间日期选择器特有的选项参考下表</td><td>object</td><td>—</td><td>{}</td></tr><tr><td>range-separator</td><td>选择范围时的分隔符</td><td>string</td><td>-</td><td>'-'</td></tr><tr><td>value-format</td><td>可选，仅TimePicker时可用，绑定值的格式，同DatePicker</td><td>string</td><td>小时 <code>HH</code>，分 <code>mm</code>，秒 <code>ss</code>，AM/PM <code>A</code></td><td>—</td></tr><tr><td>default-value</td><td>可选，选择器打开时默认显示的时间</td><td>Date(TimePicker) / string(TimeSelect)</td><td>可被<code>new Date()</code>解析(TimePicker) / 可选值(TimeSelect)</td><td>—</td></tr><tr><td>name</td><td>原生属性</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>
      <h3>Time Select Options</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>start</td><td>开始时间</td><td>string</td><td>—</td><td>09:00</td></tr><tr><td>end</td><td>结束时间</td><td>string</td><td>—</td><td>18:00</td></tr><tr><td>step</td><td>间隔时间</td><td>string</td><td>—</td><td>00:30</td></tr><tr><td>minTime</td><td>最小时间，小于该时间的时间段将被禁用</td><td>string</td><td>—</td><td>00:00</td></tr><tr><td>maxTime</td><td>最大时间，大于该时间的时间段将被禁用</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>
      <h3>Time Picker Options</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>selectableRange</td><td>可选时间段，例如<code>'18:30:00 - 20:30:00'</code>或者传入数组<code>['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']</code></td><td>string / array</td><td>—</td><td>—</td></tr><tr><td>format</td><td>时间格式化(TimePicker)</td><td>string</td><td>小时：<code>HH</code>，分：<code>mm</code>，秒：<code>ss</code>，AM/PM <code>A</code></td><td>'HH:mm:ss'</td></tr></tbody></table>
      <h3>Events</h3>
      <table class="table"><thead><tr><th>事件名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>change</td><td>用户确认选定的值时触发</td><td>组件绑定值</td></tr><tr><td>blur</td><td>当 input 失去焦点时触发</td><td>组件实例</td></tr><tr><td>focus</td><td>当 input 获得焦点时触发</td><td>组件实例</td></tr></tbody></table>
      <h3>Methods</h3>
      <table class="table"><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>focus</td><td>使 input 获取焦点</td><td>-</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {
    data () {
      return {
        value1: '',
        value2: new Date(2017, 12, 12, 13, 30),
        value3: new Date(2017, 12, 14, 18, 40),
        startTime: '',
        endTime: '',
        value4: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
        switchers: [{
          expand: false
        }, {
          expand: false
        }, {
          expand: false
        }, {
          expand: false
        }]
      }
    },
    mounted () {
      this.meta = document.querySelectorAll('.meta')
    },
    methods: {
      switcherState (index) {
        if (this.switchers[index].expand === true) {
          this.meta[index].style.height = '0'
          this.switchers[index].expand = false
        } else {
          this.meta[index].style.height = 'auto'
          this.switchers[index].expand = true
        }
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .block {
    padding: 30px 24px;
    overflow: hidden;
    border-bottom: 1px solid #eff2f6;
  }

  .demonstration {
    font-size: 14px;
    color: #8492a6;
    line-height: 44px;
  }

  .demonstration + .el-slider {
    float: right;
    width: 70%;
    margin-right: 20px;
  }
</style>
