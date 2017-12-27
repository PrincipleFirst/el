<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Cascader 级联选择器</h2>
      <p>当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</p>
      <h3>基础用法</h3>
      <p>有两种触发子菜单的方式</p>
      <div class="demo-block">
        <div class="source trim">
          <div class="block">
            <span class="demonstration">默认 click 触发子菜单</span>
            <el-cascader
              :options="options"
              v-model="selectedOptions"
              @change="handleChange">
            </el-cascader>
          </div>
          <div class="block">
            <span class="demonstration">hover 触发子菜单</span>
            <el-cascader
              expand-trigger="hover"
              :options="options"
              v-model="selectedOptions2"
              @change="handleChange">
            </el-cascader>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>只需为 Cascader
            的<code>options</code>属性指定选项数组即可渲染出一个级联选择器。通过<code>expand-trigger</code>可以定义展开子级菜单的触发方式。本例还展示了<code>change</code>事件，它的参数为
            Cascader 的绑定值：一个由各级菜单的值所组成的数组。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"demonstration"</span>&gt;</span>默认 click 触发子菜单<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-cascader</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"selectedOptions"</span>
    <span class="hljs-attr">@change</span>=<span class="hljs-string">"handleChange"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-cascader</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
  class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"demonstration"</span>&gt;</span>hover 触发子菜单<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-cascader</span>
    <span class="hljs-attr">expand-trigger</span>=<span class="hljs-string">"hover"</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>
    <span class="hljs-attr">v-model</span>=<span class="hljs-string">"selectedOptions2"</span>
    <span class="hljs-attr">@change</span>=<span class="hljs-string">"handleChange"</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-cascader</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">options</span>: [{
          <span class="hljs-attr">value</span>: <span class="hljs-string">'zhinan'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'指南'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'shejiyuanze'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'设计原则'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'yizhi'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'一致'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'fankui'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'反馈'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'xiaolv'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'效率'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'kekong'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'可控'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'daohang'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'导航'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'cexiangdaohang'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'侧向导航'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dingbudaohang'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'顶部导航'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'zujian'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'组件'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'basic'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Basic'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'layout'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Layout 布局'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'color'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Color 色彩'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'typography'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Typography 字体'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'icon'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Icon 图标'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'button'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Button 按钮'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Form'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'radio'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Radio 单选框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'checkbox'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Checkbox 多选框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'input'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Input 输入框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'input-number'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'InputNumber 计数器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'select'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Select 选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'cascader'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Cascader 级联选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'switch'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Switch 开关'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'slider'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Slider 滑块'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'time-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'TimePicker 时间选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'date-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'DatePicker 日期选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'datetime-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'DateTimePicker 日期时间选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'upload'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Upload 上传'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'rate'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Rate 评分'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Form 表单'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'data'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Data'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'table'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Table 表格'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tag'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tag 标签'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'progress'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Progress 进度条'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tree'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tree 树形控件'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'pagination'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Pagination 分页'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'badge'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Badge 标记'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'notice'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Notice'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'alert'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Alert 警告'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'loading'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Loading 加载'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'message'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Message 消息提示'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'message-box'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'MessageBox 弹框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'notification'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Notification 通知'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'navigation'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Navigation'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'menu'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'NavMenu 导航菜单'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tabs'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tabs 标签页'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'breadcrumb'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Breadcrumb 面包屑'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dropdown'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Dropdown 下拉菜单'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'steps'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Steps 步骤条'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'others'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Others'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dialog'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Dialog 对话框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tooltip'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tooltip 文字提示'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'popover'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Popover 弹出框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'card'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Card 卡片'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'carousel'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Carousel 走马灯'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'collapse'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Collapse 折叠面板'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'ziyuan'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'资源'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'axure'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Axure Components'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'sketch'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Sketch Templates'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'jiaohu'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'组件交互文档'</span>
          }]
        }],
        <span class="hljs-attr">selectedOptions</span>: [],
        <span class="hljs-attr">selectedOptions2</span>: []
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleChange(value) {
        <span class="hljs-built_in">console</span>.log(value);
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[0].expand" :index="0" @switcher="switcherState"></collapseBar>
      </div>
      <h3>禁用选项</h3>
      <div class="demo-block">
        <div class="source">
          <el-cascader
            :options="optionsWithDisabled"
          ></el-cascader>
        </div>
        <div class="meta">
          <div class="description"><p>本例中，<code>options</code>指定的数组中的第一个元素含有<code>disabled: true</code>键值对，因此是禁用的。在默认情况下，Cascader
            会检查数据中每一项的<code>disabled</code>字段是否为<code>true</code>，如果你的数据中表示禁用含义的字段名不为<code>disabled</code>，可以通过<code>props</code>属性来指定（详见下方
            API 表格）。当然，<code>value</code>、<code>label</code>和<code>children</code>这三个字段名也可以通过同样的方式指定。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-cascader</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">"optionsWithDisabled"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-cascader</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">optionsWithDisabled</span>: [{
          <span class="hljs-attr">value</span>: <span class="hljs-string">'zhinan'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'指南'</span>,
          <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'shejiyuanze'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'设计原则'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'yizhi'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'一致'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'fankui'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'反馈'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'xiaolv'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'效率'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'kekong'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'可控'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'daohang'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'导航'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'cexiangdaohang'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'侧向导航'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dingbudaohang'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'顶部导航'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'zujian'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'组件'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'basic'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Basic'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'layout'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Layout 布局'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'color'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Color 色彩'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'typography'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Typography 字体'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'icon'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Icon 图标'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'button'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Button 按钮'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Form'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'radio'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Radio 单选框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'checkbox'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Checkbox 多选框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'input'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Input 输入框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'input-number'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'InputNumber 计数器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'select'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Select 选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'cascader'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Cascader 级联选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'switch'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Switch 开关'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'slider'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Slider 滑块'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'time-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'TimePicker 时间选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'date-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'DatePicker 日期选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'datetime-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'DateTimePicker 日期时间选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'upload'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Upload 上传'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'rate'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Rate 评分'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Form 表单'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'data'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Data'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'table'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Table 表格'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tag'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tag 标签'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'progress'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Progress 进度条'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tree'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tree 树形控件'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'pagination'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Pagination 分页'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'badge'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Badge 标记'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'notice'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Notice'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'alert'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Alert 警告'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'loading'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Loading 加载'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'message'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Message 消息提示'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'message-box'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'MessageBox 弹框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'notification'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Notification 通知'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'navigation'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Navigation'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'menu'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'NavMenu 导航菜单'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tabs'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tabs 标签页'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'breadcrumb'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Breadcrumb 面包屑'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dropdown'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Dropdown 下拉菜单'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'steps'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Steps 步骤条'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'others'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Others'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dialog'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Dialog 对话框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tooltip'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tooltip 文字提示'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'popover'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Popover 弹出框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'card'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Card 卡片'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'carousel'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Carousel 走马灯'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'collapse'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Collapse 折叠面板'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'ziyuan'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'资源'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'axure'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Axure Components'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'sketch'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Sketch Templates'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'jiaohu'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'组件交互文档'</span>
          }]
        }]
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[1].expand" :index="1" @switcher="switcherState"></collapseBar>
      </div>
      <h3>仅显示最后一级</h3>
      <p>可以仅在输入框中显示选中项最后一级的标签，而不是选中项所在的完整路径。</p>
      <div class="demo-block">
        <div class="source">
          <el-cascader
            :options="options"
            :show-all-levels="false"
          ></el-cascader>
        </div>
        <div class="meta">
          <div class="description"><p>属性<code>show-all-levels</code>定义了是否显示完整的路径，将其赋值为<code>false</code>则仅显示最后一级</p>
          </div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-cascader</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>
  <span class="hljs-attr">:show-all-levels</span>=<span class="hljs-string">"false"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-cascader</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">options</span>: [{
          <span class="hljs-attr">value</span>: <span class="hljs-string">'zhinan'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'指南'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'shejiyuanze'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'设计原则'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'yizhi'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'一致'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'fankui'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'反馈'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'xiaolv'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'效率'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'kekong'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'可控'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'daohang'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'导航'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'cexiangdaohang'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'侧向导航'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dingbudaohang'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'顶部导航'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'zujian'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'组件'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'basic'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Basic'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'layout'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Layout 布局'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'color'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Color 色彩'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'typography'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Typography 字体'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'icon'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Icon 图标'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'button'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Button 按钮'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Form'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'radio'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Radio 单选框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'checkbox'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Checkbox 多选框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'input'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Input 输入框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'input-number'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'InputNumber 计数器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'select'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Select 选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'cascader'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Cascader 级联选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'switch'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Switch 开关'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'slider'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Slider 滑块'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'time-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'TimePicker 时间选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'date-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'DatePicker 日期选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'datetime-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'DateTimePicker 日期时间选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'upload'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Upload 上传'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'rate'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Rate 评分'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Form 表单'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'data'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Data'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'table'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Table 表格'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tag'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tag 标签'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'progress'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Progress 进度条'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tree'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tree 树形控件'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'pagination'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Pagination 分页'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'badge'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Badge 标记'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'notice'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Notice'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'alert'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Alert 警告'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'loading'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Loading 加载'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'message'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Message 消息提示'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'message-box'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'MessageBox 弹框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'notification'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Notification 通知'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'navigation'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Navigation'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'menu'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'NavMenu 导航菜单'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tabs'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tabs 标签页'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'breadcrumb'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Breadcrumb 面包屑'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dropdown'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Dropdown 下拉菜单'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'steps'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Steps 步骤条'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'others'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Others'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dialog'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Dialog 对话框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tooltip'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tooltip 文字提示'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'popover'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Popover 弹出框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'card'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Card 卡片'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'carousel'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Carousel 走马灯'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'collapse'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Collapse 折叠面板'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'ziyuan'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'资源'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'axure'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Axure Components'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'sketch'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Sketch Templates'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'jiaohu'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'组件交互文档'</span>
          }]
        }]
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[2].expand" :index="2" @switcher="switcherState"></collapseBar>
      </div>
      <h3>默认值</h3>
      <div class="demo-block">
        <div class="source">
          <el-cascader
            :options="options"
            v-model="selectedOptions3"
          ></el-cascader>
        </div>
        <div class="meta">
          <div class="description"><p>默认值通过数组的方式指定。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-cascader</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"selectedOptions3"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-cascader</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">options</span>: [{
          <span class="hljs-attr">value</span>: <span class="hljs-string">'zhinan'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'指南'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'shejiyuanze'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'设计原则'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'yizhi'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'一致'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'fankui'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'反馈'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'xiaolv'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'效率'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'kekong'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'可控'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'daohang'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'导航'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'cexiangdaohang'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'侧向导航'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dingbudaohang'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'顶部导航'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'zujian'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'组件'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'basic'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Basic'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'layout'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Layout 布局'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'color'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Color 色彩'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'typography'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Typography 字体'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'icon'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Icon 图标'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'button'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Button 按钮'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Form'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'radio'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Radio 单选框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'checkbox'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Checkbox 多选框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'input'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Input 输入框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'input-number'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'InputNumber 计数器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'select'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Select 选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'cascader'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Cascader 级联选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'switch'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Switch 开关'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'slider'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Slider 滑块'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'time-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'TimePicker 时间选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'date-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'DatePicker 日期选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'datetime-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'DateTimePicker 日期时间选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'upload'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Upload 上传'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'rate'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Rate 评分'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Form 表单'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'data'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Data'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'table'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Table 表格'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tag'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tag 标签'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'progress'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Progress 进度条'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tree'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tree 树形控件'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'pagination'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Pagination 分页'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'badge'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Badge 标记'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'notice'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Notice'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'alert'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Alert 警告'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'loading'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Loading 加载'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'message'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Message 消息提示'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'message-box'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'MessageBox 弹框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'notification'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Notification 通知'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'navigation'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Navigation'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'menu'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'NavMenu 导航菜单'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tabs'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tabs 标签页'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'breadcrumb'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Breadcrumb 面包屑'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dropdown'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Dropdown 下拉菜单'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'steps'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Steps 步骤条'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'others'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Others'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dialog'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Dialog 对话框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tooltip'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tooltip 文字提示'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'popover'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Popover 弹出框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'card'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Card 卡片'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'carousel'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Carousel 走马灯'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'collapse'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Collapse 折叠面板'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'ziyuan'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'资源'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'axure'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Axure Components'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'sketch'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Sketch Templates'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'jiaohu'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'组件交互文档'</span>
          }]
        }],
        <span class="hljs-attr">selectedOptions3</span>: [<span class="hljs-string">'zujian'</span>, <span
              class="hljs-string">'data'</span>, <span class="hljs-string">'tag'</span>]
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[3].expand" :index="3" @switcher="switcherState"></collapseBar>
      </div>
      <h3>选择即改变</h3>
      <p>点击或移入选项即表示选中该项，可用于选择任意一级菜单的选项。</p>
      <div class="demo-block">
        <div class="source">
          <el-cascader
            :options="options"
            change-on-select
          ></el-cascader>
        </div>
        <div class="meta">
          <div class="description"><p>若需要允许用户选择任意一级选项，则可将<code>change-on-select</code>赋值为<code>true</code></p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-cascader</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>
  <span class="hljs-attr">change-on-select</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-cascader</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">options</span>: [{
          <span class="hljs-attr">value</span>: <span class="hljs-string">'zhinan'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'指南'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'shejiyuanze'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'设计原则'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'yizhi'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'一致'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'fankui'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'反馈'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'xiaolv'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'效率'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'kekong'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'可控'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'daohang'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'导航'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'cexiangdaohang'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'侧向导航'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dingbudaohang'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'顶部导航'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'zujian'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'组件'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'basic'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Basic'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'layout'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Layout 布局'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'color'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Color 色彩'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'typography'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Typography 字体'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'icon'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Icon 图标'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'button'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Button 按钮'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Form'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'radio'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Radio 单选框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'checkbox'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Checkbox 多选框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'input'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Input 输入框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'input-number'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'InputNumber 计数器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'select'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Select 选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'cascader'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Cascader 级联选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'switch'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Switch 开关'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'slider'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Slider 滑块'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'time-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'TimePicker 时间选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'date-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'DatePicker 日期选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'datetime-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'DateTimePicker 日期时间选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'upload'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Upload 上传'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'rate'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Rate 评分'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Form 表单'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'data'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Data'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'table'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Table 表格'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tag'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tag 标签'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'progress'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Progress 进度条'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tree'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tree 树形控件'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'pagination'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Pagination 分页'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'badge'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Badge 标记'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'notice'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Notice'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'alert'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Alert 警告'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'loading'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Loading 加载'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'message'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Message 消息提示'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'message-box'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'MessageBox 弹框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'notification'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Notification 通知'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'navigation'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Navigation'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'menu'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'NavMenu 导航菜单'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tabs'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tabs 标签页'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'breadcrumb'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Breadcrumb 面包屑'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dropdown'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Dropdown 下拉菜单'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'steps'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Steps 步骤条'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'others'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Others'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dialog'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Dialog 对话框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tooltip'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tooltip 文字提示'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'popover'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Popover 弹出框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'card'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Card 卡片'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'carousel'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Carousel 走马灯'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'collapse'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Collapse 折叠面板'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'ziyuan'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'资源'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'axure'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Axure Components'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'sketch'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Sketch Templates'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'jiaohu'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'组件交互文档'</span>
          }]
        }]
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[4].expand" :index="4" @switcher="switcherState"></collapseBar>
      </div>
      <h3>动态加载次级选项</h3>
      <p>当选中某一级时，动态加载该级下的选项。</p>
      <div class="demo-block">
        <div class="source">
          <el-cascader
            :options="options2"
            @active-item-change="handleItemChange"
            :props="props"
          ></el-cascader>
        </div>
        <div class="meta">
          <div class="description"><p>本例的选项数据源在初始化时不包含城市数据。利用<code>active-item-change</code>事件，可以在用户点击某个省份时拉取该省份下的城市数据。此外，本例还展示了<code>props</code>属性的用法。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-cascader</span>
  <span class="hljs-attr">:options</span>=<span class="hljs-string">"options2"</span>
  <span class="hljs-attr">@active-item-change</span>=<span class="hljs-string">"handleItemChange"</span>
  <span class="hljs-attr">:props</span>=<span class="hljs-string">"props"</span>
&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-cascader</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">options2</span>: [{
          <span class="hljs-attr">label</span>: <span class="hljs-string">'江苏'</span>,
          <span class="hljs-attr">cities</span>: []
        }, {
          <span class="hljs-attr">label</span>: <span class="hljs-string">'浙江'</span>,
          <span class="hljs-attr">cities</span>: []
        }],
        <span class="hljs-attr">props</span>: {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'label'</span>,
          <span class="hljs-attr">children</span>: <span class="hljs-string">'cities'</span>
        }
      };
    },

    <span class="hljs-attr">methods</span>: {
      handleItemChange(val) {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'active item:'</span>, val);
        setTimeout(<span class="hljs-function"><span class="hljs-params">_</span> =&gt;</span> {
          <span class="hljs-keyword">if</span> (val.indexOf(<span class="hljs-string">'江苏'</span>) &gt; <span
              class="hljs-number">-1</span> &amp;&amp; !<span class="hljs-keyword">this</span>.options2[<span
              class="hljs-number">0</span>].cities.length) {
            <span class="hljs-keyword">this</span>.options2[<span class="hljs-number">0</span>].cities = [{
              <span class="hljs-attr">label</span>: <span class="hljs-string">'南京'</span>
            }];
          } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (val.indexOf(<span
              class="hljs-string">'浙江'</span>) &gt; <span class="hljs-number">-1</span> &amp;&amp; !<span
              class="hljs-keyword">this</span>.options2[<span class="hljs-number">1</span>].cities.length) {
            <span class="hljs-keyword">this</span>.options2[<span class="hljs-number">1</span>].cities = [{
              <span class="hljs-attr">label</span>: <span class="hljs-string">'杭州'</span>
            }];
          }
        }, <span class="hljs-number">300</span>);
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[5].expand" :index="5" @switcher="switcherState"></collapseBar>
      </div>
      <h3>可搜索</h3>
      <p>可以快捷地搜索选项并选择。</p>
      <div class="demo-block">
        <div class="source trim">
          <div class="block">
            <span class="demonstration">只可选择最后一级菜单的选项</span>
            <el-cascader
              placeholder="试试搜索：指南"
              :options="options"
              filterable
            ></el-cascader>
          </div>
          <div class="block">
            <span class="demonstration">可选择任意一级菜单的选项</span>
            <el-cascader
              placeholder="试试搜索：指南"
              :options="options"
              filterable
              change-on-select
            ></el-cascader>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>将<code>filterable</code>赋值为<code>true</code>即可打开搜索功能。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"demonstration"</span>&gt;</span>只可选择最后一级菜单的选项<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-cascader</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"试试搜索：指南"</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>
    <span class="hljs-attr">filterable</span>
  &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-cascader</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
  class="hljs-string">"block"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span
    class="hljs-string">"demonstration"</span>&gt;</span>可选择任意一级菜单的选项<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-cascader</span>
    <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"试试搜索：指南"</span>
    <span class="hljs-attr">:options</span>=<span class="hljs-string">"options"</span>
    <span class="hljs-attr">filterable</span>
    <span class="hljs-attr">change-on-select</span>
  &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-cascader</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">options</span>: [{
          <span class="hljs-attr">value</span>: <span class="hljs-string">'zhinan'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'指南'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'shejiyuanze'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'设计原则'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'yizhi'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'一致'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'fankui'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'反馈'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'xiaolv'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'效率'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'kekong'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'可控'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'daohang'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'导航'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'cexiangdaohang'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'侧向导航'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dingbudaohang'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'顶部导航'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'zujian'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'组件'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'basic'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Basic'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'layout'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Layout 布局'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'color'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Color 色彩'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'typography'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Typography 字体'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'icon'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Icon 图标'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'button'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Button 按钮'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Form'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'radio'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Radio 单选框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'checkbox'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Checkbox 多选框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'input'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Input 输入框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'input-number'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'InputNumber 计数器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'select'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Select 选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'cascader'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Cascader 级联选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'switch'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Switch 开关'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'slider'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Slider 滑块'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'time-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'TimePicker 时间选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'date-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'DatePicker 日期选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'datetime-picker'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'DateTimePicker 日期时间选择器'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'upload'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Upload 上传'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'rate'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Rate 评分'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'form'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Form 表单'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'data'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Data'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'table'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Table 表格'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tag'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tag 标签'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'progress'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Progress 进度条'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tree'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tree 树形控件'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'pagination'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Pagination 分页'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'badge'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Badge 标记'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'notice'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Notice'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'alert'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Alert 警告'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'loading'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Loading 加载'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'message'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Message 消息提示'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'message-box'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'MessageBox 弹框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'notification'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Notification 通知'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'navigation'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Navigation'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'menu'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'NavMenu 导航菜单'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tabs'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tabs 标签页'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'breadcrumb'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Breadcrumb 面包屑'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dropdown'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Dropdown 下拉菜单'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'steps'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Steps 步骤条'</span>
            }]
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'others'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Others'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">value</span>: <span class="hljs-string">'dialog'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Dialog 对话框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'tooltip'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Tooltip 文字提示'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'popover'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Popover 弹出框'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'card'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Card 卡片'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'carousel'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Carousel 走马灯'</span>
            }, {
              <span class="hljs-attr">value</span>: <span class="hljs-string">'collapse'</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'Collapse 折叠面板'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">value</span>: <span class="hljs-string">'ziyuan'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'资源'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">'axure'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Axure Components'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'sketch'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'Sketch Templates'</span>
          }, {
            <span class="hljs-attr">value</span>: <span class="hljs-string">'jiaohu'</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'组件交互文档'</span>
          }]
        }]
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[6].expand" :index="6" @switcher="switcherState"></collapseBar>
      </div>
      <h3>Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>options</td><td>可选项数据源，键名可通过 <code>props</code> 属性配置</td><td>array</td><td>—</td><td>—</td></tr><tr><td>props</td><td>配置选项，具体见下表</td><td>object</td><td>—</td><td>—</td></tr><tr><td>value</td><td>选中项绑定值</td><td>array</td><td>—</td><td>—</td></tr><tr><td>separator</td><td>选项分隔符</td><td>string</td><td>—</td><td>斜杠'/'</td></tr><tr><td>popper-class</td><td>自定义浮层类名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>placeholder</td><td>输入框占位文本</td><td>string</td><td>—</td><td>请选择</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>clearable</td><td>是否支持清空选项</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>expand-trigger</td><td>次级菜单的展开方式</td><td>string</td><td>click / hover</td><td>click</td></tr><tr><td>show-all-levels</td><td>输入框中是否显示选中值的完整路径</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>filterable</td><td>是否可搜索选项</td><td>boolean</td><td>—</td><td>—</td></tr><tr><td>debounce</td><td>搜索关键词输入的去抖延迟，毫秒</td><td>number</td><td>—</td><td>300</td></tr><tr><td>change-on-select</td><td>是否允许选择任意一级的选项</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>size</td><td>尺寸</td><td>string</td><td>medium / small / mini</td><td>—</td></tr><tr><td>before-filter</td><td>筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选</td><td>function(value)</td><td>—</td><td>—</td></tr></tbody></table>
      <h3>props</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>value</td><td>指定选项的值为选项对象的某个属性值</td><td>string</td><td>—</td><td>—</td></tr><tr><td>label</td><td>指定选项标签为选项对象的某个属性值</td><td>string</td><td>—</td><td>—</td></tr><tr><td>children</td><td>指定选项的子选项为选项对象的某个属性值</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>指定选项的禁用为选项对象的某个属性值</td><td>string</td><td>—</td><td>—</td></tr></tbody></table>
      <h3>Events</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>change</td><td>当绑定值变化时触发的事件</td><td>当前值</td></tr><tr><td>active-item-change</td><td>当父级选项变化时触发的事件，仅在 <code>change-on-select</code> 为 <code>false</code> 时可用</td><td>各父级选项组成的数组</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {
    data () {
      return {
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        selectedOptions: [],
        selectedOptions2: [],
        selectedOptions3: ['zujian', 'data', 'tag'],
        optionsWithDisabled: [{
          value: 'zhinan',
          label: '指南',
          disabled: true,
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
        }],
        options2: [{
          label: '江苏',
          cities: []
        }, {
          label: '浙江',
          cities: []
        }],
        props: {
          value: 'label',
          children: 'cities'
        },
        switchers: [{
          expand: false
        }, {
          expand: false
        }, {
          expand: false
        }, {
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
      },
      handleChange (value) {
        console.log(value)
      },
      handleItemChange (val) {
        console.log('active item:', val)
        setTimeout(_ => {
          if (val.indexOf('江苏') > -1 && !this.options2[0].cities.length) {
            this.options2[0].cities = [{
              label: '南京'
            }]
          } else if (val.indexOf('浙江') > -1 && !this.options2[1].cities.length) {
            this.options2[1].cities = [{
              label: '杭州'
            }]
          }
        }, 300)
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
    padding: 30px 0;
    text-align: center;
    border-right: 1px solid #eff2f6;
    display: inline-block;
    width: 50%;
    box-sizing: border-box;
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

  .trim
    padding 0 !important
    font-size 0
</style>
