<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Form 表单</h2>
      <p>由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据</p>
      <h3>典型表单</h3>
      <p>包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。</p>
      <div class="demo-block">
        <div class="source">
          <template>
            <el-form ref="form" :model="form" label-width="80px">
              <el-form-item label="活动名称">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-select v-model="form.region" placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.date1"
                                 id="formDate1" name="formDate1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2"
                                  name="formDate2" id="formDate2" style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="即时配送">
                <el-switch v-model="form.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="活动性质">
                <el-checkbox-group v-model="form.type">
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源">
                <el-radio-group v-model="form.resource">
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input type="textarea" v-model="form.desc"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </template>
        </div>
        <div class="meta">
          <div class="description"><p>在 Form 组件中，每一个表单域由一个 Form-Item 组件构成，表单域中可以放置各种类型的表单控件，包括
            Input、Select、Checkbox、Radio、Switch、DatePicker、TimePicker</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"form"</span> <span
            class="hljs-attr">:model</span>=<span class="hljs-string">"form"</span> <span
            class="hljs-attr">label-width</span>=<span class="hljs-string">"80px"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动名称"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"form.name"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动区域"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"form.region"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择活动区域"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"区域一"</span> <span class="hljs-attr">value</span>=<span
        class="hljs-string">"shanghai"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-option</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"区域二"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"beijing"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动时间"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span
      class="hljs-string">"11"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span> <span class="hljs-attr">type</span>=<span
        class="hljs-string">"date"</span> <span class="hljs-attr">placeholder</span>=<span
        class="hljs-string">"选择日期"</span> <span class="hljs-attr">v-model</span>=<span
        class="hljs-string">"form.date1"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%;"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"line"</span> <span class="hljs-attr">:span</span>=<span
      class="hljs-string">"2"</span>&gt;</span>-<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span
      class="hljs-string">"11"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-time-picker</span> <span class="hljs-attr">type</span>=<span
        class="hljs-string">"fixed-time"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择时间"</span> <span
        class="hljs-attr">v-model</span>=<span class="hljs-string">"form.date2"</span> <span
        class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%;"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-time-picker</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"即时配送"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-switch</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"form.delivery"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-switch</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动性质"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"form.type"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"美食/餐厅线上活动"</span> <span class="hljs-attr">name</span>=<span
        class="hljs-string">"type"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"地推活动"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"type"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"线下主题活动"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"type"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"单纯品牌曝光"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"type"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"特殊资源"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"form.resource"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"线上品牌商赞助"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"线下场地免费"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动形式"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"textarea"</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"form.desc"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span
      class="hljs-string">"onSubmit"</span>&gt;</span>立即创建<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>&gt;</span>取消<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-form</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">form</span>: {
          <span class="hljs-attr">name</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">region</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">date1</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">date2</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">delivery</span>: <span class="hljs-literal">false</span>,
          <span class="hljs-attr">type</span>: [],
          <span class="hljs-attr">resource</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">desc</span>: <span class="hljs-string">''</span>
        }
      }
    },
    <span class="hljs-attr">methods</span>: {
      onSubmit() {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'submit!'</span>);
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <div class="tip"><p>W3C 标准中有如下<a href="https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2">规定</a>：</p>
        <blockquote><p><i>When there is only one single-line text input field in a form, the user agent should accept
          Enter in that field as a request to submit the form.</i></p></blockquote>
        <p>即：当一个 form 元素中只有一个输入框时，在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为，可以在 <code>&lt;el-form&gt;</code> 标签上添加 <code>@submit.native.prevent</code>。
        </p></div>
      <h3>行内表单</h3>
      <p>当垂直方向空间受限且表单较简单时，可以在一行内放置表单。</p>
      <div class="demo-block">
        <div class="source">
          <el-form :inline="true" :model="formInline" class="demo-form-inline" style="width: 100%;">
            <el-form-item label="审批人">
              <el-input v-model="formInline.user" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">查询</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="meta">
          <div class="description"><p>设置 <code>inline</code> 属性可以让表单域变为行内的表单域</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-form</span> <span class="hljs-attr">:inline</span>=<span
            class="hljs-string">"true"</span> <span class="hljs-attr">:model</span>=<span class="hljs-string">"formInline"</span> <span
            class="hljs-attr">class</span>=<span class="hljs-string">"demo-form-inline"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"审批人"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"formInline.user"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"审批人"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动区域"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"formInline.region"</span> <span class="hljs-attr">placeholder</span>=<span
      class="hljs-string">"活动区域"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"区域一"</span> <span class="hljs-attr">value</span>=<span
        class="hljs-string">"shanghai"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-option</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"区域二"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"beijing"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span
      class="hljs-string">"onSubmit"</span>&gt;</span>查询<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-form</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">formInline</span>: {
          <span class="hljs-attr">user</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">region</span>: <span class="hljs-string">''</span>
        }
      }
    },
    <span class="hljs-attr">methods</span>: {
      onSubmit() {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'submit!'</span>);
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>对齐方式</h3>
      <p>根据具体目标和制约因素，选择最佳的标签对齐方式。</p>
      <div class="demo-block">
        <div class="source">
          <el-radio-group v-model="labelPosition" size="small">
            <el-radio-button label="left">左对齐</el-radio-button>
            <el-radio-button label="right">右对齐</el-radio-button>
            <el-radio-button label="top">顶部对齐</el-radio-button>
          </el-radio-group>
          <div style="margin: 20px;"></div>
          <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
            <el-form-item label="名称">
              <el-input v-model="formLabelAlign.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-input v-model="formLabelAlign.region"></el-input>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input v-model="formLabelAlign.type"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="meta">
          <div class="description"><p>通过设置 <code>label-position</code> 属性可以改变表单域标签的位置，可选值为
            <code>top</code>、<code>left</code>，当设为 <code>top</code> 时标签会置于表单域的顶部</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-radio-group</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"labelPosition"</span> <span
            class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"left"</span>&gt;</span>左对齐<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"right"</span>&gt;</span>右对齐<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"top"</span>&gt;</span>顶部对齐<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
  class="hljs-string">"margin: 20px;"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-form</span> <span class="hljs-attr">:label-position</span>=<span
  class="hljs-string">"labelPosition"</span> <span class="hljs-attr">label-width</span>=<span
  class="hljs-string">"80px"</span> <span class="hljs-attr">:model</span>=<span
  class="hljs-string">"formLabelAlign"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"名称"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"formLabelAlign.name"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动区域"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"formLabelAlign.region"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动形式"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"formLabelAlign.type"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-form</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">labelPosition</span>: <span class="hljs-string">'right'</span>,
        <span class="hljs-attr">formLabelAlign</span>: {
          <span class="hljs-attr">name</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">region</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">type</span>: <span class="hljs-string">''</span>
        }
      };
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>表单验证</h3>
      <p>在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。</p>
      <div class="demo-block">
        <div class="source">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="活动名称" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间" required>
              <el-col :span="11">
                <el-form-item prop="date1">
                  <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1"
                                 name="ruleFormDate1" id="ruleFormDate1" style="width: 100%;"></el-date-picker>
                </el-form-item>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-form-item prop="date2">
                  <el-time-picker type="fixed-time" placeholder="选择时间" v-model="ruleForm.date2"
                            name="ruleFormDate" id="ruleFormDate" style="width: 100%;"></el-time-picker>
                </el-form-item>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送" prop="delivery">
              <el-switch v-model="ruleForm.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质" prop="type">
              <el-checkbox-group v-model="ruleForm.type">
                <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                <el-checkbox label="地推活动" name="type"></el-checkbox>
                <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源" prop="resource">
              <el-radio-group v-model="ruleForm.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式" prop="desc">
              <el-input type="textarea" v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="meta">
          <div class="description"><p>Form 组件提供了表单验证的功能，只需要通过 <code>rules</code> 属性传入约定的验证规则，并 Form-Item 的
            <code>prop</code> 属性设置为需校验的字段名即可。校验规则参见 <a href="https://github.com/yiminghe/async-validator">async-validator</a>
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-form</span> <span class="hljs-attr">:model</span>=<span
            class="hljs-string">"ruleForm"</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">"rules"</span> <span
            class="hljs-attr">ref</span>=<span class="hljs-string">"ruleForm"</span> <span
            class="hljs-attr">label-width</span>=<span class="hljs-string">"100px"</span> <span
            class="hljs-attr">class</span>=<span class="hljs-string">"demo-ruleForm"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动名称"</span> <span class="hljs-attr">prop</span>=<span
    class="hljs-string">"name"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"ruleForm.name"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动区域"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"region"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"ruleForm.region"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择活动区域"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"区域一"</span> <span class="hljs-attr">value</span>=<span
        class="hljs-string">"shanghai"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-option</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"区域二"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"beijing"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动时间"</span> <span class="hljs-attr">required</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span
      class="hljs-string">"11"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">prop</span>=<span
        class="hljs-string">"date1"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span> <span
          class="hljs-attr">type</span>=<span class="hljs-string">"date"</span> <span
          class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择日期"</span> <span
          class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.date1"</span> <span class="hljs-attr">style</span>=<span
          class="hljs-string">"width: 100%;"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-date-picker</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"line"</span> <span class="hljs-attr">:span</span>=<span
      class="hljs-string">"2"</span>&gt;</span>-<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span
      class="hljs-string">"11"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">prop</span>=<span
        class="hljs-string">"date2"</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">el-time-picker</span> <span
          class="hljs-attr">type</span>=<span class="hljs-string">"fixed-time"</span> <span class="hljs-attr">placeholder</span>=<span
          class="hljs-string">"选择时间"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.date2"</span> <span
          class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%;"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-time-picker</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"即时配送"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"delivery"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-switch</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"ruleForm.delivery"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-switch</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动性质"</span> <span class="hljs-attr">prop</span>=<span
    class="hljs-string">"type"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.type"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"美食/餐厅线上活动"</span> <span class="hljs-attr">name</span>=<span
        class="hljs-string">"type"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"地推活动"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"type"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"线下主题活动"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"type"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"单纯品牌曝光"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"type"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"特殊资源"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"resource"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.resource"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"线上品牌商赞助"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"线下场地免费"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动形式"</span> <span class="hljs-attr">prop</span>=<span
    class="hljs-string">"desc"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"textarea"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm.desc"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"submitForm('ruleForm')"</span>&gt;</span>立即创建<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
      class="hljs-string">"resetForm('ruleForm')"</span>&gt;</span>重置<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-form</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">ruleForm</span>: {
          <span class="hljs-attr">name</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">region</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">date1</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">date2</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">delivery</span>: <span class="hljs-literal">false</span>,
          <span class="hljs-attr">type</span>: [],
          <span class="hljs-attr">resource</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">desc</span>: <span class="hljs-string">''</span>
        },
        <span class="hljs-attr">rules</span>: {
          <span class="hljs-attr">name</span>: [
            { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span
              class="hljs-string">'请输入活动名称'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">'blur'</span> },
            { <span class="hljs-attr">min</span>: <span class="hljs-number">3</span>, <span class="hljs-attr">max</span>: <span
              class="hljs-number">5</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">'长度在 3 到 5 个字符'</span>, <span
              class="hljs-attr">trigger</span>: <span class="hljs-string">'blur'</span> }
          ],
          <span class="hljs-attr">region</span>: [
            { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span
              class="hljs-string">'请选择活动区域'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">'change'</span> }
          ],
          <span class="hljs-attr">date1</span>: [
            { <span class="hljs-attr">type</span>: <span class="hljs-string">'date'</span>, <span class="hljs-attr">required</span>: <span
              class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">'请选择日期'</span>, <span
              class="hljs-attr">trigger</span>: <span class="hljs-string">'change'</span> }
          ],
          <span class="hljs-attr">date2</span>: [
            { <span class="hljs-attr">type</span>: <span class="hljs-string">'date'</span>, <span class="hljs-attr">required</span>: <span
              class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">'请选择时间'</span>, <span
              class="hljs-attr">trigger</span>: <span class="hljs-string">'change'</span> }
          ],
          <span class="hljs-attr">type</span>: [
            { <span class="hljs-attr">type</span>: <span class="hljs-string">'array'</span>, <span class="hljs-attr">required</span>: <span
              class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span class="hljs-string">'请至少选择一个活动性质'</span>, <span
              class="hljs-attr">trigger</span>: <span class="hljs-string">'change'</span> }
          ],
          <span class="hljs-attr">resource</span>: [
            { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span
              class="hljs-string">'请选择活动资源'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">'change'</span> }
          ],
          <span class="hljs-attr">desc</span>: [
            { <span class="hljs-attr">required</span>: <span class="hljs-literal">true</span>, <span class="hljs-attr">message</span>: <span
              class="hljs-string">'请填写活动形式'</span>, <span class="hljs-attr">trigger</span>: <span class="hljs-string">'blur'</span> }
          ]
        }
      };
    },
    <span class="hljs-attr">methods</span>: {
      submitForm(formName) {
        <span class="hljs-keyword">this</span>.$refs[formName].validate(<span class="hljs-function">(<span
              class="hljs-params">valid</span>) =&gt;</span> {
          <span class="hljs-keyword">if</span> (valid) {
            alert(<span class="hljs-string">'submit!'</span>);
          } <span class="hljs-keyword">else</span> {
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'error submit!!'</span>);
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
          }
        });
      },
      resetForm(formName) {
        <span class="hljs-keyword">this</span>.$refs[formName].resetFields();
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>自定义校验规则</h3>
      <p>这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。</p>
      <div class="demo-block">
        <div class="source">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px"
                   class="demo-ruleForm">
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
              <el-input v-model.number="ruleForm2.age"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="meta">
          <div class="description"><p>本例还使用<code>status-icon</code>属性为输入框添加了表示校验结果的反馈图标。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-form</span> <span class="hljs-attr">:model</span>=<span
            class="hljs-string">"ruleForm2"</span> <span class="hljs-attr">status-icon</span> <span class="hljs-attr">:rules</span>=<span
            class="hljs-string">"rules2"</span> <span class="hljs-attr">ref</span>=<span
            class="hljs-string">"ruleForm2"</span> <span class="hljs-attr">label-width</span>=<span class="hljs-string">"100px"</span> <span
            class="hljs-attr">class</span>=<span class="hljs-string">"demo-ruleForm"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"密码"</span> <span class="hljs-attr">prop</span>=<span
    class="hljs-string">"pass"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"password"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm2.pass"</span> <span
      class="hljs-attr">auto-complete</span>=<span class="hljs-string">"off"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"确认密码"</span> <span class="hljs-attr">prop</span>=<span class="hljs-string">"checkPass"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"password"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"ruleForm2.checkPass"</span> <span
      class="hljs-attr">auto-complete</span>=<span class="hljs-string">"off"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"年龄"</span> <span class="hljs-attr">prop</span>=<span
    class="hljs-string">"age"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span
      class="hljs-attr">v-model.number</span>=<span class="hljs-string">"ruleForm2.age"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"submitForm('ruleForm2')"</span>&gt;</span>提交<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
      class="hljs-string">"resetForm('ruleForm2')"</span>&gt;</span>重置<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-form</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">var</span> checkAge = <span class="hljs-function">(<span class="hljs-params">rule, value, callback</span>) =&gt;</span> {
        <span class="hljs-keyword">if</span> (!value) {
          <span class="hljs-keyword">return</span> callback(<span class="hljs-keyword">new</span> <span
              class="hljs-built_in">Error</span>(<span class="hljs-string">'年龄不能为空'</span>));
        }
        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
          <span class="hljs-keyword">if</span> (!<span class="hljs-built_in">Number</span>.isInteger(value)) {
            callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span
              class="hljs-string">'请输入数字值'</span>));
          } <span class="hljs-keyword">else</span> {
            <span class="hljs-keyword">if</span> (value &lt; <span class="hljs-number">18</span>) {
              callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span
              class="hljs-string">'必须年满18岁'</span>));
            } <span class="hljs-keyword">else</span> {
              callback();
            }
          }
        }, <span class="hljs-number">1000</span>);
      };
      <span class="hljs-keyword">var</span> validatePass = <span class="hljs-function">(<span class="hljs-params">rule, value, callback</span>) =&gt;</span> {
        <span class="hljs-keyword">if</span> (value === <span class="hljs-string">''</span>) {
          callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span
              class="hljs-string">'请输入密码'</span>));
        } <span class="hljs-keyword">else</span> {
          <span class="hljs-keyword">if</span> (<span class="hljs-keyword">this</span>.ruleForm2.checkPass !== <span
              class="hljs-string">''</span>) {
            <span class="hljs-keyword">this</span>.$refs.ruleForm2.validateField(<span
              class="hljs-string">'checkPass'</span>);
          }
          callback();
        }
      };
      <span class="hljs-keyword">var</span> validatePass2 = <span class="hljs-function">(<span class="hljs-params">rule, value, callback</span>) =&gt;</span> {
        <span class="hljs-keyword">if</span> (value === <span class="hljs-string">''</span>) {
          callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span
              class="hljs-string">'请再次输入密码'</span>));
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (value !== <span
              class="hljs-keyword">this</span>.ruleForm2.pass) {
          callback(<span class="hljs-keyword">new</span> <span class="hljs-built_in">Error</span>(<span
              class="hljs-string">'两次输入密码不一致!'</span>));
        } <span class="hljs-keyword">else</span> {
          callback();
        }
      };
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">ruleForm2</span>: {
          <span class="hljs-attr">pass</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">checkPass</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">age</span>: <span class="hljs-string">''</span>
        },
        <span class="hljs-attr">rules2</span>: {
          <span class="hljs-attr">pass</span>: [
            { <span class="hljs-attr">validator</span>: validatePass, <span class="hljs-attr">trigger</span>: <span
              class="hljs-string">'blur'</span> }
          ],
          <span class="hljs-attr">checkPass</span>: [
            { <span class="hljs-attr">validator</span>: validatePass2, <span class="hljs-attr">trigger</span>: <span
              class="hljs-string">'blur'</span> }
          ],
          <span class="hljs-attr">age</span>: [
            { <span class="hljs-attr">validator</span>: checkAge, <span class="hljs-attr">trigger</span>: <span
              class="hljs-string">'blur'</span> }
          ]
        }
      };
    },
    <span class="hljs-attr">methods</span>: {
      submitForm(formName) {
        <span class="hljs-keyword">this</span>.$refs[formName].validate(<span class="hljs-function">(<span
              class="hljs-params">valid</span>) =&gt;</span> {
          <span class="hljs-keyword">if</span> (valid) {
            alert(<span class="hljs-string">'submit!'</span>);
          } <span class="hljs-keyword">else</span> {
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'error submit!!'</span>);
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
          }
        });
      },
      resetForm(formName) {
        <span class="hljs-keyword">this</span>.$refs[formName].resetFields();
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>动态增减表单项</h3>
      <div class="demo-block">
        <div class="source">
          <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
            <el-form-item
              prop="email"
              label="邮箱"
              :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]"
            >
              <el-input v-model="dynamicValidateForm.email"></el-input>
            </el-form-item>
            <el-form-item
              v-for="(domain, index) in dynamicValidateForm.domains"
              :label="'域名' + index"
              :key="domain.key"
              :prop="'domains.' + index + '.value'"
              :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"
            >
              <el-input v-model="domain.value"></el-input>
              <el-button @click.prevent="removeDomain(domain)">删除</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
              <el-button @click="addDomain">新增域名</el-button>
              <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="meta">
          <div class="description"><p>除了在 Form 组件上一次性传递所有的验证规则外还可以在单个的表单域上传递属性的验证规则</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-form</span> <span class="hljs-attr">:model</span>=<span class="hljs-string">"dynamicValidateForm"</span> <span
            class="hljs-attr">ref</span>=<span class="hljs-string">"dynamicValidateForm"</span> <span class="hljs-attr">label-width</span>=<span
            class="hljs-string">"100px"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demo-dynamic"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span>
    <span class="hljs-attr">prop</span>=<span class="hljs-string">"email"</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">"邮箱"</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">"[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
    ]"</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"dynamicValidateForm.email"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span>
    <span class="hljs-attr">v-for</span>=<span
      class="hljs-string">"(domain, index) in dynamicValidateForm.domains"</span>
    <span class="hljs-attr">:label</span>=<span class="hljs-string">"'域名' + index"</span>
    <span class="hljs-attr">:key</span>=<span class="hljs-string">"domain.key"</span>
    <span class="hljs-attr">:prop</span>=<span class="hljs-string">"'domains.' + index + '.value'"</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">"{
      required: true, message: '域名不能为空', trigger: 'blur'
    }"</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"domain.value"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-input</span>&gt;</span><span class="hljs-tag">&lt;<span
              class="hljs-name">el-button</span> <span class="hljs-attr">@click.prevent</span>=<span
              class="hljs-string">"removeDomain(domain)"</span>&gt;</span>删除<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"submitForm('dynamicValidateForm')"</span>&gt;</span>提交<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
      class="hljs-string">"addDomain"</span>&gt;</span>新增域名<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
      class="hljs-string">"resetForm('dynamicValidateForm')"</span>&gt;</span>重置<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-form</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">dynamicValidateForm</span>: {
          <span class="hljs-attr">domains</span>: [{
            <span class="hljs-attr">value</span>: <span class="hljs-string">''</span>
          }],
          <span class="hljs-attr">email</span>: <span class="hljs-string">''</span>
        }
      };
    },
    <span class="hljs-attr">methods</span>: {
      submitForm(formName) {
        <span class="hljs-keyword">this</span>.$refs[formName].validate(<span class="hljs-function">(<span
              class="hljs-params">valid</span>) =&gt;</span> {
          <span class="hljs-keyword">if</span> (valid) {
            alert(<span class="hljs-string">'submit!'</span>);
          } <span class="hljs-keyword">else</span> {
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'error submit!!'</span>);
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
          }
        });
      },
      resetForm(formName) {
        <span class="hljs-keyword">this</span>.$refs[formName].resetFields();
      },
      removeDomain(item) {
        <span class="hljs-keyword">var</span> index = <span class="hljs-keyword">this</span>.dynamicValidateForm.domains.indexOf(item)
        <span class="hljs-keyword">if</span> (index !== <span class="hljs-number">-1</span>) {
          <span class="hljs-keyword">this</span>.dynamicValidateForm.domains.splice(index, <span
              class="hljs-number">1</span>)
        }
      },
      addDomain() {
        <span class="hljs-keyword">this</span>.dynamicValidateForm.domains.push({
          <span class="hljs-attr">value</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">key</span>: <span class="hljs-built_in">Date</span>.now()
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
      <h3>数字类型验证</h3>
      <div class="demo-block">
        <div class="source">
          <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
            <el-form-item
              label="年龄"
              prop="age"
              :rules="[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"
            >
              <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
              <el-button @click="resetForm('numberValidateForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="meta">
          <div class="description"><p>数字类型的验证需要在 <code>v-model</code> 处加上 <code>.number</code> 的修饰符，这是 <code>Vue</code>
            自身提供的用于将绑定值转化为 <code>number</code> 类型的修饰符。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-form</span> <span class="hljs-attr">:model</span>=<span class="hljs-string">"numberValidateForm"</span> <span
            class="hljs-attr">ref</span>=<span class="hljs-string">"numberValidateForm"</span> <span class="hljs-attr">label-width</span>=<span
            class="hljs-string">"100px"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"demo-ruleForm"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span>
    <span class="hljs-attr">label</span>=<span class="hljs-string">"年龄"</span>
    <span class="hljs-attr">prop</span>=<span class="hljs-string">"age"</span>
    <span class="hljs-attr">:rules</span>=<span class="hljs-string">"[
      { required: true, message: '年龄不能为空'},
      { type: 'number', message: '年龄必须为数字值'}
    ]"</span>
  &gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"age"</span> <span class="hljs-attr">v-model.number</span>=<span class="hljs-string">"numberValidateForm.age"</span> <span
      class="hljs-attr">auto-complete</span>=<span class="hljs-string">"off"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span class="hljs-string">"submitForm('numberValidateForm')"</span>&gt;</span>提交<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
      class="hljs-string">"resetForm('numberValidateForm')"</span>&gt;</span>重置<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-form</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">numberValidateForm</span>: {
          <span class="hljs-attr">age</span>: <span class="hljs-string">''</span>
        }
      };
    },
    <span class="hljs-attr">methods</span>: {
      submitForm(formName) {
        <span class="hljs-keyword">this</span>.$refs[formName].validate(<span class="hljs-function">(<span
              class="hljs-params">valid</span>) =&gt;</span> {
          <span class="hljs-keyword">if</span> (valid) {
            alert(<span class="hljs-string">'submit!'</span>);
          } <span class="hljs-keyword">else</span> {
            <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'error submit!!'</span>);
            <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
          }
        });
      },
      resetForm(formName) {
        <span class="hljs-keyword">this</span>.$refs[formName].resetFields();
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <div class="tip"><p>嵌套在 <code>el-form-item</code> 中的 <code>el-form-item</code> 标签宽度默认为零，不会继承 <code>el-form</code>
        的 <code>label-width</code>。如果需要可以为其单独设置 <code>label-width</code> 属性。</p></div>
      <h3>表单内组件尺寸控制</h3>
      <p>通过设置 Form 上的 size 属性可以使该表单内所有可调节大小的组件继承该尺寸。Form-Item 也具有该属性。</p>
      <div class="demo-block">
        <div class="source">
          <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
            <el-form-item label="活动名称">
              <el-input v-model="sizeForm.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="sizeForm.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="sizeForm.date1"
                               id="sizeFormDate1" name="sizeFormDate1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker type="fixed-time" placeholder="选择时间" v-model="sizeForm.date2"
                        name="sizeDate" id="sizeDate" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="sizeForm.type">
                <el-checkbox-button label="美食/餐厅线上活动" name="type"></el-checkbox-button>
                <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
                <el-checkbox-button label="线下主题活动" name="type"></el-checkbox-button>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="sizeForm.resource" size="medium">
                <el-radio border label="线上品牌商赞助"></el-radio>
                <el-radio border label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item size="large">
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="meta">
          <div class="description"><p>如果希望某个表单项或某个表单组件的尺寸不同于 Form
            上的<code>size</code>属性，直接为这个表单项或表单组件设置自己的<code>size</code>即可。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-form</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">"form"</span> <span
            class="hljs-attr">:model</span>=<span class="hljs-string">"sizeForm"</span> <span class="hljs-attr">label-width</span>=<span
            class="hljs-string">"80px"</span> <span class="hljs-attr">size</span>=<span
            class="hljs-string">"mini"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动名称"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-input</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"sizeForm.name"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-input</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动区域"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-select</span> <span class="hljs-attr">v-model</span>=<span
      class="hljs-string">"sizeForm.region"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"请选择活动区域"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"区域一"</span> <span class="hljs-attr">value</span>=<span
        class="hljs-string">"shanghai"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-option</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-option</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"区域二"</span> <span class="hljs-attr">value</span>=<span class="hljs-string">"beijing"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-option</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-select</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动时间"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span
      class="hljs-string">"11"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-date-picker</span> <span class="hljs-attr">type</span>=<span
        class="hljs-string">"date"</span> <span class="hljs-attr">placeholder</span>=<span
        class="hljs-string">"选择日期"</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">"sizeForm.date1"</span> <span
        class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%;"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-date-picker</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">class</span>=<span
      class="hljs-string">"line"</span> <span class="hljs-attr">:span</span>=<span
      class="hljs-string">"2"</span>&gt;</span>-<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-col</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-col</span> <span class="hljs-attr">:span</span>=<span
      class="hljs-string">"11"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-time-picker</span> <span class="hljs-attr">type</span>=<span
        class="hljs-string">"fixed-time"</span> <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"选择时间"</span> <span
        class="hljs-attr">v-model</span>=<span class="hljs-string">"sizeForm.date2"</span> <span
        class="hljs-attr">style</span>=<span class="hljs-string">"width: 100%;"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-time-picker</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-col</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"活动性质"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"sizeForm.type"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-button</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"美食/餐厅线上活动"</span> <span class="hljs-attr">name</span>=<span
        class="hljs-string">"type"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-button</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"地推活动"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"type"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-button</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-checkbox-button</span> <span class="hljs-attr">label</span>=<span
        class="hljs-string">"线下主题活动"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"type"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-button</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-checkbox-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"特殊资源"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-group</span> <span
      class="hljs-attr">v-model</span>=<span class="hljs-string">"sizeForm.resource"</span> <span
      class="hljs-attr">size</span>=<span class="hljs-string">"medium"</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">border</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"线上品牌商赞助"</span>&gt;</span><span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">el-radio</span> <span class="hljs-attr">border</span> <span
        class="hljs-attr">label</span>=<span class="hljs-string">"线下场地免费"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">el-radio</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-form-item</span> <span class="hljs-attr">size</span>=<span
    class="hljs-string">"large"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">type</span>=<span
      class="hljs-string">"primary"</span> <span class="hljs-attr">@click</span>=<span
      class="hljs-string">"onSubmit"</span>&gt;</span>立即创建<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>&gt;</span>取消<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-form-item</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-form</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">sizeForm</span>: {
          <span class="hljs-attr">name</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">region</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">date1</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">date2</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">delivery</span>: <span class="hljs-literal">false</span>,
          <span class="hljs-attr">type</span>: [],
          <span class="hljs-attr">resource</span>: <span class="hljs-string">''</span>,
          <span class="hljs-attr">desc</span>: <span class="hljs-string">''</span>
        }
      };
    },
    <span class="hljs-attr">methods</span>: {
      onSubmit() {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">'submit!'</span>);
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>Form Attributes</h3>
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
          <td>model</td>
          <td>表单数据对象</td>
          <td>object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>rules</td>
          <td>表单验证规则</td>
          <td>object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>inline</td>
          <td>行内表单模式</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>label-position</td>
          <td>表单域标签的位置</td>
          <td>string</td>
          <td>right/left/top</td>
          <td>right</td>
        </tr>
        <tr>
          <td>label-width</td>
          <td>表单域标签的宽度，作为 Form 直接子元素的 form-item 会继承该值</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>label-suffix</td>
          <td>表单域标签的后缀</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>show-message</td>
          <td>是否显示校验错误信息</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>inline-message</td>
          <td>是否以行内形式展示校验信息</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>status-icon</td>
          <td>是否在输入框中显示校验结果反馈图标</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>用于控制该表单内组件的尺寸</td>
          <td>string</td>
          <td>medium / small / mini</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
      <h3>Form Methods</h3>
      <table class="table">
        <thead>
        <tr>
          <th>方法名</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>validate</td>
          <td>对整个表单进行校验的方法。若不传入回调函数，则会返回一个 promise</td>
          <td>Function(callback: Function(boolean))</td>
        </tr>
        <tr>
          <td>validateField</td>
          <td>对部分表单字段进行校验的方法</td>
          <td>Function(prop: string, callback: Function(errorMessage: string))</td>
        </tr>
        <tr>
          <td>resetFields</td>
          <td>对整个表单进行重置，将所有字段值重置为初始值并移除校验结果</td>
          <td>-</td>
        </tr>
        <tr>
          <td>clearValidate</td>
          <td>移除整个表单的校验结果</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
      <h3>Form-Item Attributes</h3>
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
          <td>prop</td>
          <td>表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的</td>
          <td>string</td>
          <td>传入 Form 组件的 <code>model</code> 中的字段</td>
          <td>—</td>
        </tr>
        <tr>
          <td>label</td>
          <td>标签文本</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>label-width</td>
          <td>表单域标签的的宽度，例如 '50px'</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>required</td>
          <td>是否必填，如不设置，则会根据校验规则自动生成</td>
          <td>bolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>rules</td>
          <td>表单验证规则</td>
          <td>object</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>error</td>
          <td>表单域验证错误信息, 设置该值会使表单验证状态变为<code>error</code>，并显示该错误信息</td>
          <td>string</td>
          <td>—</td>
          <td>—</td>
        </tr>
        <tr>
          <td>show-message</td>
          <td>是否显示校验错误信息</td>
          <td>boolean</td>
          <td>—</td>
          <td>true</td>
        </tr>
        <tr>
          <td>inline-message</td>
          <td>以行内形式展示校验信息</td>
          <td>boolean</td>
          <td>—</td>
          <td>false</td>
        </tr>
        <tr>
          <td>size</td>
          <td>用于控制该表单域下组件的尺寸</td>
          <td>string</td>
          <td>medium / small / mini</td>
          <td>-</td>
        </tr>
        </tbody>
      </table>
      <h3>Form-Item Slot</h3>
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
          <td>Form Item 的内容</td>
        </tr>
        <tr>
          <td>label</td>
          <td>标签文本的内容</td>
        </tr>
        </tbody>
      </table>
      <h3>Form-Item Methods</h3>
      <table class="table">
        <thead>
        <tr>
          <th>方法名</th>
          <th>说明</th>
          <th>参数</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>resetField</td>
          <td>对该表单项进行重置，将其值重置为初始值并移除校验结果</td>
          <td>-</td>
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
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'))
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'))
          } else {
            if (value < 18) {
              callback(new Error('必须年满18岁'))
            } else {
              callback()
            }
          }
        }, 1000)
      }
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass')
          }
          callback()
        }
      }
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
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
        formInline: {
          user: '',
          region: ''
        },
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入活动名称', trigger: 'blur'},
            {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
          ],
          region: [
            {required: true, message: '请选择活动区域', trigger: 'change'}
          ],
          date1: [
            {type: 'date', required: true, message: '请选择日期', trigger: 'change'}
          ],
          date2: [
            {type: 'date', required: true, message: '请选择时间', trigger: 'change'}
          ],
          type: [
            {type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change'}
          ],
          resource: [
            {required: true, message: '请选择活动资源', trigger: 'change'}
          ],
          desc: [
            {required: true, message: '请填写活动形式', trigger: 'blur'}
          ]
        },
        ruleForm2: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          checkPass: [
            {validator: validatePass2, trigger: 'blur'}
          ],
          age: [
            {validator: checkAge, trigger: 'blur'}
          ]
        },
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        },
        numberValidateForm: {
          age: ''
        },
        sizeForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      removeDomain (item) {
        const index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain () {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        })
      },
      onSubmit () {
        console.log('submit!')
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"
  .el-form
    width 460px

  .demo-dynamic .el-input
    margin-right 10px
    width 270px
    vertical-align top
</style>
