<template>
  <div class="page-component__content">
    <section class="content">
      <h2>Tabs 标签页</h2>
      <p>分隔内容上有关联但属于不同类别的数据集合。</p>
      <h3>基础用法</h3>
      <p>基础的、简洁的标签页。</p>
      <div class="demo-block">
        <div class="source">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
        <div class="meta">
          <div class="description"><p>Tabs 组件提供了选项卡功能，默认选中第一个标签页，你也可以通过 <code>value</code> 属性来指定当前选中的标签页。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-tabs</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"activeName"</span> <span class="hljs-attr">@tab-click</span>=<span class="hljs-string">"handleClick"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"用户管理"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"first"</span>&gt;</span>用户管理<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-tab-pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"配置管理"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"second"</span>&gt;</span>配置管理<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-tab-pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"角色管理"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"third"</span>&gt;</span>角色管理<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-tab-pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"定时任务补偿"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"fourth"</span>&gt;</span>定时任务补偿<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-tab-pane</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-tabs</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">activeName</span>: <span class="hljs-string">'second'</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleClick(tab, event) {
        <span class="hljs-built_in">console</span>.log(tab, event);
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>选项卡样式</h3>
      <p>选项卡样式的标签页。</p>
      <div class="demo-block">
        <div class="source">
          <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
            <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
        <div class="meta">
          <div class="description"><p>只需要设置 <code>type</code> 属性为 <code>card</code> 就可以使选项卡改变为标签风格。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-tabs</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"activeName2"</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"card"</span> <span
    class="hljs-attr">@tab-click</span>=<span class="hljs-string">"handleClick"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"用户管理"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"first"</span>&gt;</span>用户管理<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-tab-pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"配置管理"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"second"</span>&gt;</span>配置管理<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-tab-pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"角色管理"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"third"</span>&gt;</span>角色管理<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-tab-pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"定时任务补偿"</span> <span class="hljs-attr">name</span>=<span class="hljs-string">"fourth"</span>&gt;</span>定时任务补偿<span
              class="hljs-tag">&lt;/<span class="hljs-name">el-tab-pane</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-tabs</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">activeName2</span>: <span class="hljs-string">'first'</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleClick(tab, event) {
        <span class="hljs-built_in">console</span>.log(tab, event);
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>卡片化</h3>
      <p>卡片化的标签页。</p>
      <div class="demo-block">
        <div class="source">
          <el-tabs type="border-card">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
        <div class="meta">
          <div class="description"><p>将<code>type</code>设置为<code>border-card</code>。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-tabs</span> <span class="hljs-attr">type</span>=<span
            class="hljs-string">"border-card"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"用户管理"</span>&gt;</span>用户管理<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-tab-pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"配置管理"</span>&gt;</span>配置管理<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-tab-pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"角色管理"</span>&gt;</span>角色管理<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-tab-pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"定时任务补偿"</span>&gt;</span>定时任务补偿<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-tab-pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tabs</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>位置</h3>
      <p>可以通过 <code>tab-position</code> 设置标签的位置</p>
      <div class="demo-block">
        <div class="source">
          <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
            <el-radio-button label="top">top</el-radio-button>
            <el-radio-button label="right">right</el-radio-button>
            <el-radio-button label="bottom">bottom</el-radio-button>
            <el-radio-button label="left">left</el-radio-button>
          </el-radio-group>

          <el-tabs :tab-position="tabPosition" style="height: 200px;">
            <el-tab-pane label="用户管理">用户管理</el-tab-pane>
            <el-tab-pane label="配置管理">配置管理</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
        <div class="meta">
          <div class="description"><p>标签一共有四个方向的设置 <code>tabPosition="left|right|top|bottom"</code></p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">template</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-group</span> <span class="hljs-attr">v-model</span>=<span
    class="hljs-string">"tabPosition"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"margin-bottom: 30px;"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"top"</span>&gt;</span>top<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-radio-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"right"</span>&gt;</span>right<span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"bottom"</span>&gt;</span>bottom<span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-button</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-radio-button</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"left"</span>&gt;</span>left<span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-button</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-radio-group</span>&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">el-tabs</span> <span class="hljs-attr">:tab-position</span>=<span
    class="hljs-string">"tabPosition"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"height: 200px;"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"用户管理"</span>&gt;</span>用户管理<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-tab-pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"配置管理"</span>&gt;</span>配置管理<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-tab-pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"角色管理"</span>&gt;</span>角色管理<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-tab-pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
      class="hljs-string">"定时任务补偿"</span>&gt;</span>定时任务补偿<span class="hljs-tag">&lt;/<span class="hljs-name">el-tab-pane</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-tabs</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">template</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">tabPosition</span>: <span class="hljs-string">'top'</span>
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>自定义标签页</h3>
      <p>可以通过具名 <code>slot</code> 来实现自定义标签页的内容</p>
      <div class="demo-block">
        <div class="source">
          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
              我的行程
            </el-tab-pane>
            <el-tab-pane label="消息中心">消息中心</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
          </el-tabs>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-tabs</span> <span class="hljs-attr">type</span>=<span
            class="hljs-string">"border-card"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">slot</span>=<span
      class="hljs-string">"label"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span
              class="hljs-attr">class</span>=<span class="hljs-string">"el-icon-date"</span>&gt;</span><span
              class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> 我的行程<span class="hljs-tag">&lt;/<span
              class="hljs-name">span</span>&gt;</span>
    我的行程
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-tab-pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"消息中心"</span>&gt;</span>消息中心<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-tab-pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"角色管理"</span>&gt;</span>角色管理<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-tab-pane</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span> <span class="hljs-attr">label</span>=<span
    class="hljs-string">"定时任务补偿"</span>&gt;</span>定时任务补偿<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-tab-pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tabs</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>动态增减标签页</h3>
      <p>增减标签页按钮只能在选项卡样式的标签页下使用</p>
      <div class="demo-block">
        <div class="source">
          <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
            <el-tab-pane
              :key="item.name"
              v-for="(item, index) in editableTabs"
              :label="item.title"
              :name="item.name"
            >
              {{item.content}}
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="meta">
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-tabs</span> <span class="hljs-attr">v-model</span>=<span
            class="hljs-string">"editableTabsValue"</span> <span class="hljs-attr">type</span>=<span
            class="hljs-string">"card"</span> <span class="hljs-attr">editable</span> <span
            class="hljs-attr">@edit</span>=<span class="hljs-string">"handleTabsEdit"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span>
    <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.name"</span>
    <span class="hljs-attr">v-for</span>=<span class="hljs-string">"(item, index) in editableTabs"</span>
    <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.title"</span>
    <span class="hljs-attr">:name</span>=<span class="hljs-string">"item.name"</span>
  &gt;</span>
    {{item.content}}
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-tab-pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tabs</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">editableTabsValue</span>: <span class="hljs-string">'2'</span>,
        <span class="hljs-attr">editableTabs</span>: [{
          <span class="hljs-attr">title</span>: <span class="hljs-string">'Tab 1'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'1'</span>,
          <span class="hljs-attr">content</span>: <span class="hljs-string">'Tab 1 content'</span>
        }, {
          <span class="hljs-attr">title</span>: <span class="hljs-string">'Tab 2'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'2'</span>,
          <span class="hljs-attr">content</span>: <span class="hljs-string">'Tab 2 content'</span>
        }],
        <span class="hljs-attr">tabIndex</span>: <span class="hljs-number">2</span>
      }
    },
    <span class="hljs-attr">methods</span>: {
      handleTabsEdit(targetName, action) {
        <span class="hljs-keyword">if</span> (action === <span class="hljs-string">'add'</span>) {
          <span class="hljs-keyword">let</span> newTabName = ++<span class="hljs-keyword">this</span>.tabIndex + <span
              class="hljs-string">''</span>;
          <span class="hljs-keyword">this</span>.editableTabs.push({
            <span class="hljs-attr">title</span>: <span class="hljs-string">'New Tab'</span>,
            <span class="hljs-attr">name</span>: newTabName,
            <span class="hljs-attr">content</span>: <span class="hljs-string">'New Tab content'</span>
          });
          <span class="hljs-keyword">this</span>.editableTabsValue = newTabName;
        }
        <span class="hljs-keyword">if</span> (action === <span class="hljs-string">'remove'</span>) {
          <span class="hljs-keyword">let</span> tabs = <span class="hljs-keyword">this</span>.editableTabs;
          <span class="hljs-keyword">let</span> activeName = <span class="hljs-keyword">this</span>.editableTabsValue;
          <span class="hljs-keyword">if</span> (activeName === targetName) {
            tabs.forEach(<span class="hljs-function">(<span class="hljs-params">tab, index</span>) =&gt;</span> {
              <span class="hljs-keyword">if</span> (tab.name === targetName) {
                <span class="hljs-keyword">let</span> nextTab = tabs[index + <span class="hljs-number">1</span>] || tabs[index - <span
              class="hljs-number">1</span>];
                <span class="hljs-keyword">if</span> (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }

          <span class="hljs-keyword">this</span>.editableTabsValue = activeName;
          <span class="hljs-keyword">this</span>.editableTabs = tabs.filter(<span class="hljs-function"><span
              class="hljs-params">tab</span> =&gt;</span> tab.name !== targetName);
        }
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>自定义增加标签页触发器</h3>
      <div class="demo-block">
        <div class="source">
          <div style="margin-bottom: 20px;">
            <el-button
              size="small"
              @click="addTab(editableTabsValue2)"
            >
              add tab
            </el-button>
          </div>
          <el-tabs v-model="editableTabsValue2" type="card" closable @tab-remove="removeTab">
            <el-tab-pane
              v-for="(item, index) in editableTabs2"
              :key="item.name"
              :label="item.title"
              :name="item.name"
            >
              {{item.content}}
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">style</span>=<span
            class="hljs-string">"margin-bottom: 20px;"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span>
    <span class="hljs-attr">size</span>=<span class="hljs-string">"small"</span>
    <span class="hljs-attr">@click</span>=<span class="hljs-string">"addTab(editableTabsValue2)"</span>
  &gt;</span>
    add tab
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">el-tabs</span> <span class="hljs-attr">v-model</span>=<span
  class="hljs-string">"editableTabsValue2"</span> <span class="hljs-attr">type</span>=<span
  class="hljs-string">"card"</span> <span class="hljs-attr">closable</span> <span
  class="hljs-attr">@tab-remove</span>=<span class="hljs-string">"removeTab"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-tab-pane</span>
    <span class="hljs-attr">v-for</span>=<span class="hljs-string">"(item, index) in editableTabs2"</span>
    <span class="hljs-attr">:key</span>=<span class="hljs-string">"item.name"</span>
    <span class="hljs-attr">:label</span>=<span class="hljs-string">"item.title"</span>
    <span class="hljs-attr">:name</span>=<span class="hljs-string">"item.name"</span>
  &gt;</span>
    {{item.content}}
  <span class="hljs-tag">&lt;/<span class="hljs-name">el-tab-pane</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tabs</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">editableTabsValue2</span>: <span class="hljs-string">'2'</span>,
        <span class="hljs-attr">editableTabs2</span>: [{
          <span class="hljs-attr">title</span>: <span class="hljs-string">'Tab 1'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'1'</span>,
          <span class="hljs-attr">content</span>: <span class="hljs-string">'Tab 1 content'</span>
        }, {
          <span class="hljs-attr">title</span>: <span class="hljs-string">'Tab 2'</span>,
          <span class="hljs-attr">name</span>: <span class="hljs-string">'2'</span>,
          <span class="hljs-attr">content</span>: <span class="hljs-string">'Tab 2 content'</span>
        }],
        <span class="hljs-attr">tabIndex</span>: <span class="hljs-number">2</span>
      }
    },
    <span class="hljs-attr">methods</span>: {
      addTab(targetName) {
        <span class="hljs-keyword">let</span> newTabName = ++<span class="hljs-keyword">this</span>.tabIndex + <span
              class="hljs-string">''</span>;
        <span class="hljs-keyword">this</span>.editableTabs2.push({
          <span class="hljs-attr">title</span>: <span class="hljs-string">'New Tab'</span>,
          <span class="hljs-attr">name</span>: newTabName,
          <span class="hljs-attr">content</span>: <span class="hljs-string">'New Tab content'</span>
        });
        <span class="hljs-keyword">this</span>.editableTabsValue2 = newTabName;
      },
      removeTab(targetName) {
        <span class="hljs-keyword">let</span> tabs = <span class="hljs-keyword">this</span>.editableTabs2;
        <span class="hljs-keyword">let</span> activeName = <span class="hljs-keyword">this</span>.editableTabsValue2;
        <span class="hljs-keyword">if</span> (activeName === targetName) {
          tabs.forEach(<span class="hljs-function">(<span class="hljs-params">tab, index</span>) =&gt;</span> {
            <span class="hljs-keyword">if</span> (tab.name === targetName) {
              <span class="hljs-keyword">let</span> nextTab = tabs[index + <span class="hljs-number">1</span>] || tabs[index - <span
              class="hljs-number">1</span>];
              <span class="hljs-keyword">if</span> (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        <span class="hljs-keyword">this</span>.editableTabsValue2 = activeName;
        <span class="hljs-keyword">this</span>.editableTabs2 = tabs.filter(<span class="hljs-function"><span
              class="hljs-params">tab</span> =&gt;</span> tab.name !== targetName);
      }
    }
  }
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar></collapseBar>
      </div>
      <h3>Tabs Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>风格类型</td><td>string</td><td>card/border-card</td><td>—</td></tr><tr><td>closable</td><td>标签是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>addable</td><td>标签是否可增加</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>editable</td><td>标签是否同时可增加和关闭</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>value</td><td>绑定值，选中选项卡的 name</td><td>string</td><td>—</td><td>第一个选项卡的 name</td></tr><tr><td>tab-position</td><td>选项卡所在位置</td><td>string</td><td>top/right/bottom/left</td><td>top</td></tr></tbody></table>
      <h3>Tabs Events</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>tab-click</td><td>tab 被选中时触发</td><td>被选中的标签 tab 实例</td></tr><tr><td>tab-remove</td><td>点击 tab 移除按钮后触发</td><td>被删除的标签的 name</td></tr><tr><td>tab-add</td><td>点击 tabs 的新增按钮后触发</td><td>—</td></tr><tr><td>edit</td><td>点击 tabs 的新增按钮或 tab 被关闭后触发</td><td>(targetName, action)</td></tr></tbody></table>
      <h3>Tab-pane Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>选项卡标题</td><td>string</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>是否禁用</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>name</td><td>与选项卡 activeName 对应的标识符，表示选项卡别名</td><td>string</td><td>—</td><td>该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'</td></tr><tr><td>closable</td><td>标签是否可关闭</td><td>boolean</td><td>—</td><td>false</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'

  export default {
    data () {
      return {
        activeName: 'second',
        activeName2: 'first',
        tabPosition: 'top',
        editableTabsValue: '2',
        editableTabs: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        tabIndex: 2,
        editableTabsValue2: '2',
        editableTabs2: [{
          title: 'Tab 1',
          name: '1',
          content: 'Tab 1 content'
        }, {
          title: 'Tab 2',
          name: '2',
          content: 'Tab 2 content'
        }],
        item: ''
      }
    },
    methods: {
      handleClick (tab, event) {
        console.log(tab, event)
      },
      handleTabsEdit (targetName, action) {
        if (action === 'add') {
          let newTabName = ++this.tabIndex + ''
          this.editableTabs.push({
            title: 'New Tab',
            name: newTabName,
            content: 'New Tab content'
          })
          this.editableTabsValue = newTabName
        }
        if (action === 'remove') {
          let tabs = this.editableTabs
          let activeName = this.editableTabsValue
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1]
                if (nextTab) {
                  activeName = nextTab.name
                }
              }
            })
          }

          this.editableTabsValue = activeName
          this.editableTabs = tabs.filter(tab => tab.name !== targetName)
        }
      },
      addTab (targetName) {
        let newTabName = ++this.tabIndex + ''
        this.editableTabs2.push({
          title: 'New Tab',
          name: newTabName,
          content: 'New Tab content'
        })
        this.editableTabsValue2 = newTabName
      },
      removeTab (targetName) {
        let tabs = this.editableTabs2
        let activeName = this.editableTabsValue2
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }

        this.editableTabsValue2 = activeName
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .demo-box.demo-menu .el-menu-demo {
    padding-left: 55px;
  }

  .demo-box.demo-menu .line {
    height: 1px;
    background-color: #e0e6ed;
    margin: 35px -24px;
  }

  .demo-box.demo-menu .tac {
    text-align: center;
  }

  .demo-box.demo-menu h5 {
    font-size: 14px;
    color: #8492a6;
    margin-top: 10px;
  }

  .demo-box.demo-menu .tac .el-menu-vertical-demo {
    display: inline-block;
    text-align: left;
  }

  .demo-box.demo-menu .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 240px;
    min-height: 400px;
  }

  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
