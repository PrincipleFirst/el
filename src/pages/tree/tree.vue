<template>
  <div class="page-component__content">
    <section class="content">
      <h2 id="tree-shu-xing-kong-jian">Tree 树形控件</h2>
      <p>用清晰的层级结构展示信息，可展开或折叠。</p>
      <h3>基础用法</h3>
      <p>基础的树形结构展示。</p>
      <div class="demo-block">
        <div class="source">
          <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
        <div class="meta"><!---->
          <div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span
            class="hljs-tag">&lt;<span class="hljs-name">el-tree</span> <span class="hljs-attr">:data</span>=<span
            class="hljs-string">"data"</span> <span class="hljs-attr">:props</span>=<span class="hljs-string">"defaultProps"</span> <span
            class="hljs-attr">@node-click</span>=<span class="hljs-string">"handleNodeClick"</span>&gt;</span><span
            class="hljs-tag">&lt;/<span class="hljs-name">el-tree</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">data</span>: [{
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 1'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 1-1'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-1'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 2'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-1'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 2-1-1'</span>
            }]
          }, {
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-2'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 2-2-1'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 3'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-1'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-1-1'</span>
            }]
          }, {
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-2'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-2-1'</span>
            }]
          }]
        }],
        <span class="hljs-attr">defaultProps</span>: {
          <span class="hljs-attr">children</span>: <span class="hljs-string">'children'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'label'</span>
        }
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleNodeClick(data) {
        <span class="hljs-built_in">console</span>.log(data);
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[0].expand" :index="0" @switcher="switcherState"></collapseBar>
      </div>
      <h3>可选择</h3>
      <p>适用于需要选择层级时使用。</p>
      <div class="demo-block">
        <div class="source">
          <el-tree
            :props="props"
            :load="loadNode"
            lazy
            show-checkbox
            @check-change="handleCheckChange">
          </el-tree>
        </div>
        <div class="meta">
          <div class="description"><p>本例还展示了动态加载节点数据的方法。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-tree</span>
  <span class="hljs-attr">:props</span>=<span class="hljs-string">"props"</span>
  <span class="hljs-attr">:load</span>=<span class="hljs-string">"loadNode"</span>
  <span class="hljs-attr">lazy</span>
  <span class="hljs-attr">show-checkbox</span>
  <span class="hljs-attr">@check-change</span>=<span class="hljs-string">"handleCheckChange"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tree</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">props</span>: {
          <span class="hljs-attr">label</span>: <span class="hljs-string">'name'</span>,
          <span class="hljs-attr">children</span>: <span class="hljs-string">'zones'</span>
        },
        <span class="hljs-attr">count</span>: <span class="hljs-number">1</span>
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleCheckChange(data, checked, indeterminate) {
        <span class="hljs-built_in">console</span>.log(data, checked, indeterminate);
      },
      handleNodeClick(data) {
        <span class="hljs-built_in">console</span>.log(data);
      },
      loadNode(node, resolve) {
        <span class="hljs-keyword">if</span> (node.level === <span class="hljs-number">0</span>) {
          <span class="hljs-keyword">return</span> resolve([{ <span class="hljs-attr">name</span>: <span
              class="hljs-string">'region1'</span> }, { <span class="hljs-attr">name</span>: <span class="hljs-string">'region2'</span> }]);
        }
        <span class="hljs-keyword">if</span> (node.level &gt; <span class="hljs-number">3</span>) <span
              class="hljs-keyword">return</span> resolve([]);

        <span class="hljs-keyword">var</span> hasChild;
        <span class="hljs-keyword">if</span> (node.data.name === <span class="hljs-string">'region1'</span>) {
          hasChild = <span class="hljs-literal">true</span>;
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (node.data.name === <span
              class="hljs-string">'region2'</span>) {
          hasChild = <span class="hljs-literal">false</span>;
        } <span class="hljs-keyword">else</span> {
          hasChild = <span class="hljs-built_in">Math</span>.random() &gt; <span class="hljs-number">0.5</span>;
        }

        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
          <span class="hljs-keyword">var</span> data;
          <span class="hljs-keyword">if</span> (hasChild) {
            data = [{
              <span class="hljs-attr">name</span>: <span class="hljs-string">'zone'</span> + <span class="hljs-keyword">this</span>.count++
            }, {
              <span class="hljs-attr">name</span>: <span class="hljs-string">'zone'</span> + <span class="hljs-keyword">this</span>.count++
            }];
          } <span class="hljs-keyword">else</span> {
            data = [];
          }

          resolve(data);
        }, <span class="hljs-number">500</span>);
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[1].expand" :index="1" @switcher="switcherState"></collapseBar>
      </div>
      <h3>懒加载自定义叶子节点</h3>
      <div class="demo-block">
        <div class="source">
          <el-tree
            :props="props1"
            :load="loadNode1"
            lazy
            show-checkbox>
          </el-tree>
        </div>
        <div class="meta">
          <div class="description"><p>由于在点击节点时才进行该层数据的获取，默认情况下 Tree
            无法预知某个节点是否为叶子节点，所以会为每个节点添加一个下拉按钮，如果节点没有下层数据，则点击后下拉按钮会消失。同时，你也可以提前告知 Tree 某个节点是否为叶子节点，从而避免在叶子节点前渲染下拉按钮。</p>
          </div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-tree</span>
  <span class="hljs-attr">:props</span>=<span class="hljs-string">"props1"</span>
  <span class="hljs-attr">:load</span>=<span class="hljs-string">"loadNode1"</span>
  <span class="hljs-attr">lazy</span>
  <span class="hljs-attr">show-checkbox</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tree</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">props1</span>: {
          <span class="hljs-attr">label</span>: <span class="hljs-string">'name'</span>,
          <span class="hljs-attr">children</span>: <span class="hljs-string">'zones'</span>,
          <span class="hljs-attr">isLeaf</span>: <span class="hljs-string">'leaf'</span>
        },
      };
    },
    <span class="hljs-attr">methods</span>: {
      loadNode1(node, resolve) {
        <span class="hljs-keyword">if</span> (node.level === <span class="hljs-number">0</span>) {
          <span class="hljs-keyword">return</span> resolve([{ <span class="hljs-attr">name</span>: <span
              class="hljs-string">'region'</span> }]);
        }
        <span class="hljs-keyword">if</span> (node.level &gt; <span class="hljs-number">1</span>) <span
              class="hljs-keyword">return</span> resolve([]);

        setTimeout(<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> {
          <span class="hljs-keyword">const</span> data = [{
            <span class="hljs-attr">name</span>: <span class="hljs-string">'leaf'</span>,
            <span class="hljs-attr">leaf</span>: <span class="hljs-literal">true</span>
          }, {
            <span class="hljs-attr">name</span>: <span class="hljs-string">'zone'</span>
          }];

          resolve(data);
        }, <span class="hljs-number">500</span>);
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[2].expand" :index="2" @switcher="switcherState"></collapseBar>
      </div>
      <h3>默认展开和默认选中</h3>
      <p>可将 Tree 的某些节点设置为默认展开或默认选中</p>
      <div class="demo-block">
        <div class="source">
          <el-tree
            :data="data2"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]"
            :props="defaultProps">
          </el-tree>
        </div>
        <div class="meta">
          <div class="description"><p>分别通过<code>default-expanded-keys</code>和<code>default-checked-keys</code>设置默认展开和默认选中的节点。需要注意的是，此时必须设置<code>node-key</code>，其值为节点数据中的一个字段名，该字段在整棵树中是唯一的。
          </p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-tree</span>
  <span class="hljs-attr">:data</span>=<span class="hljs-string">"data2"</span>
  <span class="hljs-attr">show-checkbox</span>
  <span class="hljs-attr">node-key</span>=<span class="hljs-string">"id"</span>
  <span class="hljs-attr">:default-expanded-keys</span>=<span class="hljs-string">"[2, 3]"</span>
  <span class="hljs-attr">:default-checked-keys</span>=<span class="hljs-string">"[5]"</span>
  <span class="hljs-attr">:props</span>=<span class="hljs-string">"defaultProps"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tree</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">data2</span>: [{
          <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 1'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 1-1'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-1'</span>
            }, {
              <span class="hljs-attr">id</span>: <span class="hljs-number">10</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-2'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 2'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-1'</span>
          }, {
            <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-2'</span>
          }]
        }, {
          <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 3'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-1'</span>
          }, {
            <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-2'</span>
          }]
        }],
        <span class="hljs-attr">defaultProps</span>: {
          <span class="hljs-attr">children</span>: <span class="hljs-string">'children'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'label'</span>
        }
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[3].expand" :index="3" @switcher="switcherState"></collapseBar>
      </div>
      <h3>禁用状态</h3>
      <p>可将 Tree 的某些节点设置为禁用状态</p>
      <div class="demo-block">
        <div class="source">
          <el-tree
            :data="data3"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]">
          </el-tree>
        </div>
        <div class="meta">
          <div class="description"><p>通过<code>disabled</code>设置禁用状态。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-tree</span>
  <span class="hljs-attr">:data</span>=<span class="hljs-string">"data3"</span>
  <span class="hljs-attr">show-checkbox</span>
  <span class="hljs-attr">node-key</span>=<span class="hljs-string">"id"</span>
  <span class="hljs-attr">:default-expanded-keys</span>=<span class="hljs-string">"[2, 3]"</span>
  <span class="hljs-attr">:default-checked-keys</span>=<span class="hljs-string">"[5]"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tree</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">data3</span>: [{
          <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 2'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-1'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-1-1'</span>
            }, {
              <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-1-2'</span>,
              <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>
            }]
          }, {
            <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-2'</span>,
            <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-2-1'</span>
            }, {
              <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-2-2'</span>,
              <span class="hljs-attr">disabled</span>: <span class="hljs-literal">true</span>
            }]
          }]
        }],
        <span class="hljs-attr">defaultProps</span>: {
          <span class="hljs-attr">children</span>: <span class="hljs-string">'children'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'label'</span>
        }
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[4].expand" :index="4" @switcher="switcherState"></collapseBar>
      </div>
      <h3>树节点的选择</h3>
      <div class="demo-block demo-tree">
        <div class="source">
          <el-tree
            :data="data2"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps">
          </el-tree>

          <div class="buttons">
            <el-button @click="getCheckedNodes">通过 node 获取</el-button>
            <el-button @click="getCheckedKeys">通过 key 获取</el-button>
            <el-button @click="setCheckedNodes">通过 node 设置</el-button>
            <el-button @click="setCheckedKeys">通过 key 设置</el-button>
            <el-button @click="resetChecked">清空</el-button>
          </div>
        </div>
        <div class="meta">
          <div class="description"><p>本例展示如何获取和设置选中节点。获取和设置各有两种方式：通过 node 或通过 key。如果需要通过 key
            来获取或设置，则必须设置<code>node-key</code>。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-tree</span>
  <span class="hljs-attr">:data</span>=<span class="hljs-string">"data2"</span>
  <span class="hljs-attr">show-checkbox</span>
  <span class="hljs-attr">default-expand-all</span>
  <span class="hljs-attr">node-key</span>=<span class="hljs-string">"id"</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">"tree"</span>
  <span class="hljs-attr">highlight-current</span>
  <span class="hljs-attr">:props</span>=<span class="hljs-string">"defaultProps"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tree</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
  class="hljs-string">"buttons"</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
    class="hljs-string">"getCheckedNodes"</span>&gt;</span>通过 node 获取<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
    class="hljs-string">"getCheckedKeys"</span>&gt;</span>通过 key 获取<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
    class="hljs-string">"setCheckedNodes"</span>&gt;</span>通过 node 设置<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
    class="hljs-string">"setCheckedKeys"</span>&gt;</span>通过 key 设置<span class="hljs-tag">&lt;/<span class="hljs-name">el-button</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">el-button</span> <span class="hljs-attr">@click</span>=<span
    class="hljs-string">"resetChecked"</span>&gt;</span>清空<span class="hljs-tag">&lt;/<span
              class="hljs-name">el-button</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">methods</span>: {
      getCheckedNodes() {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        <span class="hljs-keyword">this</span>.$refs.tree.setCheckedNodes([{
          <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-1'</span>
        }, {
          <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-1'</span>
        }]);
      },
      setCheckedKeys() {
        <span class="hljs-keyword">this</span>.$refs.tree.setCheckedKeys([<span class="hljs-number">3</span>]);
      },
      resetChecked() {
        <span class="hljs-keyword">this</span>.$refs.tree.setCheckedKeys([]);
      }
    },

    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">data2</span>: [{
          <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 1'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 1-1'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-1'</span>
            }, {
              <span class="hljs-attr">id</span>: <span class="hljs-number">10</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-2'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 2'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-1'</span>
          }, {
            <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-2'</span>
          }]
        }, {
          <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 3'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-1'</span>
          }, {
            <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-2'</span>
          }]
        }],
        <span class="hljs-attr">defaultProps</span>: {
          <span class="hljs-attr">children</span>: <span class="hljs-string">'children'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'label'</span>
        }
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[5].expand" :index="5" @switcher="switcherState"></collapseBar>
      </div>
      <h3>自定义节点内容</h3>
      <p>节点的内容支持自定义，可以在节点区添加按钮或图标等内容</p>
      <div class="demo-block">
        <div class="source">
          <el-tree
            :data="data4"
            :props="defaultProps"
            show-checkbox
            node-key="id"
            default-expand-all
            :expand-on-click-node="false"
            :render-content="renderContent">
          </el-tree>
        </div>
        <div class="meta">
          <div class="description"><p>使用<code>render-content</code>指定渲染函数，该函数返回需要的节点区内容即可。渲染函数的用法请参考 Vue 文档。注意：由于 本例中使用了 JSX 中语法。在实际的项目中，只要正确地配置了相关依赖，就可以正常运行。</p></div>
          <div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span
            class="hljs-name">el-tree</span>
  <span class="hljs-attr">:data</span>=<span class="hljs-string">"data4"</span>
  <span class="hljs-attr">:props</span>=<span class="hljs-string">"defaultProps"</span>
  <span class="hljs-attr">show-checkbox</span>
  <span class="hljs-attr">node-key</span>=<span class="hljs-string">"id"</span>
  <span class="hljs-attr">default-expand-all</span>
  <span class="hljs-attr">:expand-on-click-node</span>=<span class="hljs-string">"false"</span>
  <span class="hljs-attr">:render-content</span>=<span class="hljs-string">"renderContent"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tree</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="actionscript">
  let id = <span class="hljs-number">1000</span>;

  export <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        data4: [{
          id: <span class="hljs-number">1</span>,
          label: <span class="hljs-string">'一级 1'</span>,
          children: [{
            id: <span class="hljs-number">4</span>,
            label: <span class="hljs-string">'二级 1-1'</span>,
            children: [{
              id: <span class="hljs-number">9</span>,
              label: <span class="hljs-string">'三级 1-1-1'</span>
            }, {
              id: <span class="hljs-number">10</span>,
              label: <span class="hljs-string">'三级 1-1-2'</span>
            }]
          }]
        }, {
          id: <span class="hljs-number">2</span>,
          label: <span class="hljs-string">'一级 2'</span>,
          children: [{
            id: <span class="hljs-number">5</span>,
            label: <span class="hljs-string">'二级 2-1'</span>
          }, {
            id: <span class="hljs-number">6</span>,
            label: <span class="hljs-string">'二级 2-2'</span>
          }]
        }, {
          id: <span class="hljs-number">3</span>,
          label: <span class="hljs-string">'一级 3'</span>,
          children: [{
            id: <span class="hljs-number">7</span>,
            label: <span class="hljs-string">'二级 3-1'</span>
          }, {
            id: <span class="hljs-number">8</span>,
            label: <span class="hljs-string">'二级 3-2'</span>
          }]
        }],
        defaultProps: {
          children: <span class="hljs-string">'children'</span>,
          label: <span class="hljs-string">'label'</span>
        }
      }
    },

    methods: {
      append(data) {
        <span class="hljs-keyword">const</span> newChild = { id: id++, label: <span
              class="hljs-string">'testtest'</span>, children: [] };
        <span class="hljs-keyword">if</span> (!data.children) {
          <span class="hljs-keyword">this</span>.$<span class="hljs-keyword">set</span>(data, <span class="hljs-string">'children'</span>, []);
        }
        data.children.push(newChild);
      },

      remove(node, data) {
        <span class="hljs-keyword">const</span> parent = node.parent;
        <span class="hljs-keyword">const</span> children = parent.data.children || parent.data;
        <span class="hljs-keyword">const</span> index = children.findIndex(d =&gt; d.id === data.id);
        children.splice(index, <span class="hljs-number">1</span>);
      },

      renderContent(h, { node, data, store }) {
        <span class="hljs-keyword">return</span> (
          &lt;span style=<span class="hljs-string">"flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;"</span>&gt;
            &lt;span&gt;
              &lt;span&gt;{node.label}&lt;/span&gt;
            &lt;/span&gt;
            &lt;span&gt;
              &lt;el-button style=<span class="hljs-string">"font-size: 12px;"</span> type=<span class="hljs-string">"text"</span> on-click={ () =&gt; <span
              class="hljs-keyword">this</span>.append(data) }&gt;Append&lt;/el-button&gt;
              &lt;el-button style=<span class="hljs-string">"font-size: 12px;"</span> type=<span class="hljs-string">"text"</span> on-click={ () =&gt; <span
              class="hljs-keyword">this</span>.remove(node, data) }&gt;Delete&lt;/el-button&gt;
            &lt;/span&gt;
          &lt;/span&gt;);
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[6].expand" :index="6" @switcher="switcherState"></collapseBar>
      </div>
      <h3>节点过滤</h3>
      <p>通过关键字过滤树节点</p>
      <div class="demo-block">
        <div class="source">
          <el-input
            placeholder="输入关键字进行过滤"
            v-model="filterText">
          </el-input>

          <el-tree
            class="filter-tree"
            :data="data2"
            :props="defaultProps"
            default-expand-all
            :filter-node-method="filterNode"
            ref="tree2">
          </el-tree>
        </div>
        <div class="meta"><div class="description"><p>在需要对节点进行过滤时，调用 Tree 实例的<code>filter</code>方法，参数为关键字。需要注意的是，此时需要设置<code>filter-node-method</code>，值为过滤函数。</p></div><div class="highlight"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-input</span>
  <span class="hljs-attr">placeholder</span>=<span class="hljs-string">"输入关键字进行过滤"</span>
  <span class="hljs-attr">v-model</span>=<span class="hljs-string">"filterText"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-input</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">el-tree</span>
  <span class="hljs-attr">class</span>=<span class="hljs-string">"filter-tree"</span>
  <span class="hljs-attr">:data</span>=<span class="hljs-string">"data2"</span>
  <span class="hljs-attr">:props</span>=<span class="hljs-string">"defaultProps"</span>
  <span class="hljs-attr">default-expand-all</span>
  <span class="hljs-attr">:filter-node-method</span>=<span class="hljs-string">"filterNode"</span>
  <span class="hljs-attr">ref</span>=<span class="hljs-string">"tree2"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tree</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    <span class="hljs-attr">watch</span>: {
      filterText(val) {
        <span class="hljs-keyword">this</span>.$refs.tree2.filter(val);
      }
    },

    <span class="hljs-attr">methods</span>: {
      filterNode(value, data) {
        <span class="hljs-keyword">if</span> (!value) <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
        <span class="hljs-keyword">return</span> data.label.indexOf(value) !== <span class="hljs-number">-1</span>;
      }
    },

    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">filterText</span>: <span class="hljs-string">''</span>,
        <span class="hljs-attr">data2</span>: [{
          <span class="hljs-attr">id</span>: <span class="hljs-number">1</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 1'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">id</span>: <span class="hljs-number">4</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 1-1'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">id</span>: <span class="hljs-number">9</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-1'</span>
            }, {
              <span class="hljs-attr">id</span>: <span class="hljs-number">10</span>,
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-2'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">id</span>: <span class="hljs-number">2</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 2'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">id</span>: <span class="hljs-number">5</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-1'</span>
          }, {
            <span class="hljs-attr">id</span>: <span class="hljs-number">6</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-2'</span>
          }]
        }, {
          <span class="hljs-attr">id</span>: <span class="hljs-number">3</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 3'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">id</span>: <span class="hljs-number">7</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-1'</span>
          }, {
            <span class="hljs-attr">id</span>: <span class="hljs-number">8</span>,
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-2'</span>
          }]
        }],
        <span class="hljs-attr">defaultProps</span>: {
          <span class="hljs-attr">children</span>: <span class="hljs-string">'children'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'label'</span>
        }
      };
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div></div>
        <collapseBar :isExpand="switchers[7].expand" :index="7" @switcher="switcherState"></collapseBar>
      </div>
      <h3>手风琴模式</h3>
      <p>对于同一级的节点，每次只能展开一个</p>
      <div class="demo-block">
        <div class="source">
          <el-tree
            :data="data"
            :props="defaultProps"
            accordion
            @node-click="handleNodeClick">
          </el-tree>
        </div>
        <div class="meta"><!----><div class="highlight" style="width: 100%;"><pre><code class="hljs language-html"><span class="hljs-tag">&lt;<span class="hljs-name">el-tree</span>
  <span class="hljs-attr">:data</span>=<span class="hljs-string">"data"</span>
  <span class="hljs-attr">:props</span>=<span class="hljs-string">"defaultProps"</span>
  <span class="hljs-attr">accordion</span>
  <span class="hljs-attr">@node-click</span>=<span class="hljs-string">"handleNodeClick"</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">el-tree</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
  <span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {
    data() {
      <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">data</span>: [{
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 1'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 1-1'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 1-1-1'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 2'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-1'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 2-1-1'</span>
            }]
          }, {
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 2-2'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 2-2-1'</span>
            }]
          }]
        }, {
          <span class="hljs-attr">label</span>: <span class="hljs-string">'一级 3'</span>,
          <span class="hljs-attr">children</span>: [{
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-1'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-1-1'</span>
            }]
          }, {
            <span class="hljs-attr">label</span>: <span class="hljs-string">'二级 3-2'</span>,
            <span class="hljs-attr">children</span>: [{
              <span class="hljs-attr">label</span>: <span class="hljs-string">'三级 3-2-1'</span>
            }]
          }]
        }],
        <span class="hljs-attr">defaultProps</span>: {
          <span class="hljs-attr">children</span>: <span class="hljs-string">'children'</span>,
          <span class="hljs-attr">label</span>: <span class="hljs-string">'label'</span>
        }
      };
    },
    <span class="hljs-attr">methods</span>: {
      handleNodeClick(data) {
        <span class="hljs-built_in">console</span>.log(data);
      }
    }
  };
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre></div></div>
        <collapseBar :isExpand="switchers[8].expand" :index="8" @switcher="switcherState"></collapseBar>
      </div>
      <h3>国网定制版</h3>
      <p>根据国网需求在ztree基础上对源码及UI进行了修改，使用时请直接引用此版本，相关API详见<a href="http://www.treejs.cn/v3/main.php#_zTreeInfo">zTree官网</a></p>
      <div class="demo-block">
        <div class="source">
          <iframe name="elTree" src="static/views/ztree.html" class="comIframe"
                  marginheight="0" marginwidth="0" frameborder="0" scrolling="no">
          </iframe>
        </div>
        <div class="meta">
          <div class="highlight"><pre><code class="hljs">
<span class="hljs-tag">&lt;</span><span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"left"</span> <span class="hljs-attr">id</span>=<span
            class="hljs-string">"left"</span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;<span
            class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span
            class="hljs-string">"fixDiv"</span></span><span class="hljs-tag">&gt;</span><span class="hljs-tag">&lt;<span
            class="hljs-name">ul</span> <span class="hljs-attr">class</span>=<span
            class="hljs-string">"ztree"</span> <span class="hljs-attr">id</span>=<span
            class="hljs-string">"treeDemo"</span></span><span class="hljs-tag">&lt;/<span class="hljs-name">ul</span>&gt;</span><span
            class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span
            class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript">
            <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tbody><tr><td class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> left <span
        class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span
        class="pl-s"><span class="pl-pds">'</span>left<span class="pl-pds">'</span></span>), fixDiv <span
        class="pl-k">=</span> <span class="pl-c1">document</span>.<span class="pl-c1">getElementById</span>(<span
        class="pl-s"><span class="pl-pds">'</span>fixDiv<span class="pl-pds">'</span></span>),</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	beforeScrollTop <span class="pl-k">=</span> <span
        class="pl-smi">left</span>.<span class="pl-smi">scrollTop</span>, cacheNode</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> setting <span
        class="pl-k">=</span> {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	view<span class="pl-k">:</span> {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		dblClickExpand<span class="pl-k">:</span> <span
        class="pl-c1">false</span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		showLine<span class="pl-k">:</span> <span
        class="pl-c1">false</span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		showIcon<span class="pl-k">:</span> <span
        class="pl-c1">false</span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	data<span class="pl-k">:</span> {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		simpleData<span class="pl-k">:</span> {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">			enable<span class="pl-k">:</span> <span
        class="pl-c1">true</span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	callback<span class="pl-k">:</span> {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		onClick<span class="pl-k">:</span> treeOnClick,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		onExpand<span
        class="pl-k">:</span> onExpand,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		onCollapse<span class="pl-k">:</span> onCollapse</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span
        class="pl-en">onExpand</span> (<span class="pl-c1">event</span>, <span class="pl-smi">treeId</span>, <span
        class="pl-smi">treeNode</span>) {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span> (<span
        class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#<span
        class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">treeNode</span>.<span
        class="pl-smi">tId</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>_a<span
        class="pl-pds">'</span></span>).<span class="pl-en">hasClass</span>(<span class="pl-s"><span
        class="pl-pds">'</span>fixTree<span class="pl-pds">'</span></span>)) {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-en">$</span>(<span
        class="pl-s"><span class="pl-pds">'</span>#<span class="pl-pds">'</span></span> <span
        class="pl-k">+</span> <span class="pl-smi">treeNode</span>.<span class="pl-smi">tId</span> <span
        class="pl-k">+</span> <span
        class="pl-s"><span class="pl-pds">'</span>_switch<span class="pl-pds">'</span></span>).<span class="pl-en">addClass</span>(<span
        class="pl-s"><span class="pl-pds">'</span>fixTree<span class="pl-pds">'</span></span>)</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	} <span class="pl-k">else</span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">fixDiv</span>.<span
        class="pl-smi">classList</span>.<span class="pl-c1">remove</span>(<span class="pl-s"><span
        class="pl-pds">'</span>fixDiv<span class="pl-pds">'</span></span>)</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span
        class="pl-en">onCollapse</span> (<span class="pl-c1">event</span>, <span class="pl-smi">treeId</span>, <span
        class="pl-smi">treeNode</span>) {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span> (<span
        class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">'</span>#<span
        class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">treeNode</span>.<span
        class="pl-smi">tId</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>_a<span
        class="pl-pds">'</span></span>).<span class="pl-en">hasClass</span>(<span class="pl-s"><span
        class="pl-pds">'</span>fixTree<span class="pl-pds">'</span></span>)) {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-en">$</span>(<span
        class="pl-s"><span class="pl-pds">'</span>#<span class="pl-pds">'</span></span> <span
        class="pl-k">+</span> <span class="pl-smi">treeNode</span>.<span class="pl-smi">tId</span> <span
        class="pl-k">+</span> <span
        class="pl-s"><span class="pl-pds">'</span>_switch<span class="pl-pds">'</span></span>).<span class="pl-en">addClass</span>(<span
        class="pl-s"><span class="pl-pds">'</span>fixTree<span class="pl-pds">'</span></span>)</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	} <span class="pl-k">else</span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">fixDiv</span>.<span
        class="pl-smi">classList</span>.<span class="pl-c1">remove</span>(<span class="pl-s"><span
        class="pl-pds">'</span>fixDiv<span class="pl-pds">'</span></span>)</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line"><span class="pl-k">function</span> <span
        class="pl-en">treeOnClick</span> (<span class="pl-c1">event</span>, <span class="pl-smi">treeId</span>, <span
        class="pl-smi">treeNode</span>) {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span> (cacheNode) {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-en">$</span>(<span
        class="pl-s"><span class="pl-pds">'</span>#<span class="pl-pds">'</span></span> <span
        class="pl-k">+</span> <span class="pl-smi">cacheNode</span>.<span class="pl-smi">tId</span> <span
        class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>_a<span
        class="pl-pds">'</span></span>).<span
        class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">'</span>fixTree<span
        class="pl-pds">'</span></span>)</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-en">$</span>(<span
        class="pl-s"><span class="pl-pds">'</span>#<span class="pl-pds">'</span></span> <span
        class="pl-k">+</span> <span class="pl-smi">cacheNode</span>.<span class="pl-smi">tId</span> <span
        class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>_switch<span
        class="pl-pds">'</span></span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span
        class="pl-pds">'</span>fixTree<span class="pl-pds">'</span></span>)</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-en">$</span>(<span
        class="pl-s"><span class="pl-pds">'</span>#itemBtn-<span class="pl-pds">'</span></span> <span
        class="pl-k">+</span> <span class="pl-smi">treeNode</span>.<span class="pl-smi">tId</span>).<span
        class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">'</span>fixTree<span
        class="pl-pds">'</span></span>)</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	<span class="pl-k">const</span> <span
        class="pl-c1">fixHeight</span> <span class="pl-k">=</span> <span class="pl-en">$</span>(<span
        class="pl-s"><span class="pl-pds">'</span>#<span class="pl-pds">'</span></span> <span
        class="pl-k">+</span> <span class="pl-smi">treeNode</span>.<span class="pl-smi">tId</span>).<span
        class="pl-en">offset</span>().<span class="pl-c1">top</span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">fixDiv</span>.<span
        class="pl-smi">classList</span>.<span class="pl-c1">add</span>(<span class="pl-s"><span
        class="pl-pds">'</span>fixDiv<span class="pl-pds">'</span></span>)</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	<span class="pl-smi">fixDiv</span>.<span
        class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-s"><span
        class="pl-pds">`</span><span class="pl-s1"><span class="pl-pse">${</span>fixHeight<span
        class="pl-pse">}</span></span>px<span class="pl-pds">`</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	<span class="pl-en">$</span>(<span
        class="pl-s"><span class="pl-pds">'</span>#<span class="pl-pds">'</span></span> <span
        class="pl-k">+</span> <span class="pl-smi">treeNode</span>.<span class="pl-smi">tId</span> <span
        class="pl-k">+</span> <span
        class="pl-s"><span class="pl-pds">'</span>_a<span class="pl-pds">'</span></span>).<span
        class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>fixTree<span
        class="pl-pds">'</span></span>)</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	<span class="pl-en">$</span>(<span
        class="pl-s"><span class="pl-pds">'</span>#<span class="pl-pds">'</span></span> <span
        class="pl-k">+</span> <span class="pl-smi">treeNode</span>.<span class="pl-smi">tId</span> <span
        class="pl-k">+</span> <span
        class="pl-s"><span class="pl-pds">'</span>_switch<span class="pl-pds">'</span></span>).<span class="pl-en">addClass</span>(<span
        class="pl-s"><span class="pl-pds">'</span>fixTree<span class="pl-pds">'</span></span>)</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	<span class="pl-en">$</span>(<span
        class="pl-s"><span class="pl-pds">'</span>#itemBtn-<span class="pl-pds">'</span></span> <span
        class="pl-k">+</span> <span class="pl-smi">treeNode</span>.<span class="pl-smi">tId</span>).<span
        class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">'</span>fixTree<span
        class="pl-pds">'</span></span>)</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	cacheNode <span
        class="pl-k">=</span> treeNode</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line"><span class="pl-k">var</span> zNodes <span
        class="pl-k">=</span>[</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">1</span>, pId<span class="pl-k">:</span><span class="pl-c1">0</span>, name<span
        class="pl-k">:</span><span class="pl-s"><span class="pl-pds">"</span>父节点1<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">11</span>, pId<span class="pl-k">:</span><span class="pl-c1">1</span>, name<span
        class="pl-k">:</span><span class="pl-s"><span class="pl-pds">"</span>父节点11<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">111</span>, pId<span class="pl-k">:</span><span class="pl-c1">11</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点111<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">112</span>, pId<span class="pl-k">:</span><span class="pl-c1">11</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点112<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">113</span>, pId<span class="pl-k">:</span><span class="pl-c1">11</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点113<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">114</span>, pId<span class="pl-k">:</span><span class="pl-c1">11</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点114<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">12</span>, pId<span class="pl-k">:</span><span class="pl-c1">1</span>, name<span
        class="pl-k">:</span><span class="pl-s"><span class="pl-pds">"</span>父节点12<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">121</span>, pId<span class="pl-k">:</span><span class="pl-c1">12</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点121<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">122</span>, pId<span class="pl-k">:</span><span class="pl-c1">12</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点122<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">123</span>, pId<span class="pl-k">:</span><span class="pl-c1">12</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点123<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">124</span>, pId<span class="pl-k">:</span><span class="pl-c1">12</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点124<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">13</span>, pId<span class="pl-k">:</span><span class="pl-c1">1</span>, name<span
        class="pl-k">:</span><span class="pl-s"><span class="pl-pds">"</span>父节点13 - 没有子节点<span
        class="pl-pds">"</span></span>, isParent<span class="pl-k">:</span><span class="pl-c1">true</span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">2</span>, pId<span class="pl-k">:</span><span class="pl-c1">0</span>, name<span
        class="pl-k">:</span><span class="pl-s"><span class="pl-pds">"</span>父节点2<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">21</span>, pId<span class="pl-k">:</span><span class="pl-c1">2</span>, name<span
        class="pl-k">:</span><span class="pl-s"><span class="pl-pds">"</span>父节点21 - 展开<span
        class="pl-pds">"</span></span>, open<span class="pl-k">:</span><span class="pl-c1">true</span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">211</span>, pId<span class="pl-k">:</span><span class="pl-c1">21</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点211<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">212</span>, pId<span class="pl-k">:</span><span class="pl-c1">21</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点212<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">213</span>, pId<span class="pl-k">:</span><span class="pl-c1">21</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点213<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">214</span>, pId<span class="pl-k">:</span><span class="pl-c1">21</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点214<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">22</span>, pId<span class="pl-k">:</span><span class="pl-c1">2</span>, name<span
        class="pl-k">:</span><span class="pl-s"><span class="pl-pds">"</span>父节点22 - 折叠<span
        class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">221</span>, pId<span class="pl-k">:</span><span class="pl-c1">22</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点221<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">222</span>, pId<span class="pl-k">:</span><span class="pl-c1">22</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点222<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">223</span>, pId<span class="pl-k">:</span><span class="pl-c1">22</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点223<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">224</span>, pId<span class="pl-k">:</span><span class="pl-c1">22</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点224<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">23</span>, pId<span class="pl-k">:</span><span class="pl-c1">2</span>, name<span
        class="pl-k">:</span><span class="pl-s"><span class="pl-pds">"</span>父节点23 - 折叠<span
        class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">231</span>, pId<span class="pl-k">:</span><span class="pl-c1">23</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点231<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">232</span>, pId<span class="pl-k">:</span><span class="pl-c1">23</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点232<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">233</span>, pId<span class="pl-k">:</span><span class="pl-c1">23</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点233<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">234</span>, pId<span class="pl-k">:</span><span class="pl-c1">23</span>, name<span
        class="pl-k">:</span><span
        class="pl-s"><span class="pl-pds">"</span>叶子节点234<span class="pl-pds">"</span></span>},</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	{ id<span class="pl-k">:</span><span
        class="pl-c1">3</span>, pId<span class="pl-k">:</span><span class="pl-c1">0</span>, name<span
        class="pl-k">:</span><span class="pl-s"><span class="pl-pds">"</span>父节点3 - 没有子节点<span
        class="pl-pds">"</span></span>, isParent<span
        class="pl-k">:</span><span class="pl-c1">true</span>}</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">];</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line"><span class="pl-smi">$</span>.<span
        class="pl-smi">fn</span>.<span
        class="pl-smi">zTree</span>.<span class="pl-en">init</span>(<span class="pl-en">$</span>(<span
        class="pl-s"><span class="pl-pds">'</span>#treeDemo<span
        class="pl-pds">'</span></span>), setting, zNodes)</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line"><span class="pl-smi">left</span>.<span
        class="pl-en">onscroll</span> <span class="pl-k">=</span> <span class="pl-k">function</span> () {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	<span
        class="pl-k">var</span> afterScrollTop <span class="pl-k">=</span> <span class="pl-smi">left</span>.<span
        class="pl-smi">scrollTop</span>,</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		delta <span class="pl-k">=</span> afterScrollTop <span
        class="pl-k">-</span> beforeScrollTop</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span> (delta <span
        class="pl-k">===</span> <span class="pl-c1">0</span>) <span class="pl-k">return</span> <span
        class="pl-c1">false</span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	<span class="pl-k">if</span> (delta <span
        class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">fixDiv</span>.<span
        class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-smi">fixDiv</span>.<span
        class="pl-smi">offsetTop</span> <span class="pl-k">-</span> delta <span class="pl-k">+</span> <span
        class="pl-s"><span class="pl-pds">'</span>px<span class="pl-pds">'</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	} <span class="pl-k">else</span> {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-k">if</span> (<span
        class="pl-smi">fixDiv</span>.<span class="pl-smi">offsetTop</span> <span class="pl-k">-</span> delta <span
        class="pl-k">&lt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">			<span class="pl-k">return</span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		}</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">		<span class="pl-smi">fixDiv</span>.<span
        class="pl-c1">style</span>.<span class="pl-c1">top</span> <span class="pl-k">=</span> <span class="pl-smi">fixDiv</span>.<span
        class="pl-smi">offsetTop</span> <span class="pl-k">-</span> delta <span class="pl-k">+</span> <span
        class="pl-s"><span class="pl-pds">'</span>px<span class="pl-pds">'</span></span></td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	}</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">	beforeScrollTop <span class="pl-k">=</span> afterScrollTop</td>
      </tr>
      <tr><td class="blob-code blob-code-inner js-file-line">}</td>
      </tr>
</tbody></table>
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code></pre>
          </div>
        </div>
        <collapseBar :isExpand="switchers[9].expand" :index="9" @switcher="switcherState"></collapseBar>
      </div>
      <h3>Attributes</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>data</td><td>展示数据</td><td>array</td><td>—</td><td>—</td></tr><tr><td>empty-text</td><td>内容为空的时候展示的文本</td><td>String</td><td>—</td><td>—</td></tr><tr><td>node-key</td><td>每个树节点用来作为唯一标识的属性，整棵树应该是唯一的</td><td>String</td><td>—</td><td>—</td></tr><tr><td>props</td><td>配置选项，具体看下表</td><td>object</td><td>—</td><td>—</td></tr><tr><td>render-after-expand</td><td>是否在第一次展开某个树节点后才渲染其子节点</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>load</td><td>加载子树数据的方法</td><td>function(node, resolve)</td><td>—</td><td>—</td></tr><tr><td>render-content</td><td>树节点的内容区的渲染 Function</td><td>Function(h, { node, data, store }</td><td>—</td><td>—</td></tr><tr><td>highlight-current</td><td>是否高亮当前选中节点，默认值是 false。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-expand-all</td><td>是否默认展开所有节点</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>expand-on-click-node</td><td>是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>auto-expand-parent</td><td>展开子节点的时候是否自动展开父节点</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>default-expanded-keys</td><td>默认展开的节点的 key 的数组</td><td>array</td><td>—</td><td>—</td></tr><tr><td>show-checkbox</td><td>节点是否可被选择</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>check-strictly</td><td>在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>default-checked-keys</td><td>默认勾选的节点的 key 的数组</td><td>array</td><td>—</td><td>—</td></tr><tr><td>filter-node-method</td><td>对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏</td><td>Function(value, data, node)</td><td>—</td><td>—</td></tr><tr><td>accordion</td><td>是否每次只打开一个同级树节点展开</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>indent</td><td>相邻级节点间的水平缩进，单位为像素</td><td>number</td><td>—</td><td>16</td></tr></tbody></table>
      <h3>props</h3>
      <table class="table"><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>label</td><td>指定节点标签为节点对象的某个属性值</td><td>string, function(data, node)</td><td>—</td><td>—</td></tr><tr><td>children</td><td>指定子树为节点对象的某个属性值</td><td>string, function(data, node)</td><td>—</td><td>—</td></tr><tr><td>disabled</td><td>指定节点选择框是否禁用为节点对象的某个属性值</td><td>boolean, function(data, node)</td><td>—</td><td>—</td></tr><tr><td>isLeaf</td><td>指定节点是否为叶子节点</td><td>boolean, function(data, node)</td><td>—</td><td>—</td></tr></tbody></table>
      <h3>方法</h3>
      <p><code>Tree</code> 拥有如下方法，返回目前被选中的节点数组：</p>
      <table class="table"><thead><tr><th>方法名</th><th>说明</th><th>参数</th></tr></thead><tbody><tr><td>filter</td><td>对树节点进行筛选操作</td><td>接收一个任意类型的参数，该参数会在 filter-node-method 中作为第一个参数</td></tr><tr><td>updateKeyChildren</td><td>通过 keys 设置节点子元素，使用此方法必须设置 node-key 属性</td><td>(key, data) 接收两个参数，1. 节点 key 2. 节点数据的数组</td></tr><tr><td>getCheckedNodes</td><td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点所组成的数组</td><td>(leafOnly) 接收一个 boolean 类型的参数，若为 <code>true</code> 则仅返回被选中的叶子节点，默认值为 <code>false</code></td></tr><tr><td>setCheckedNodes</td><td>设置目前勾选的节点，使用此方法必须设置 node-key 属性</td><td>(nodes) 接收勾选节点数据的数组</td></tr><tr><td>getCheckedKeys</td><td>若节点可被选择（即 <code>show-checkbox</code> 为 <code>true</code>），则返回目前被选中的节点所组成的数组</td><td>(leafOnly) 接收一个 boolean 类型的参数，若为 <code>true</code> 则仅返回被选中的叶子节点的 keys，默认值为 <code>false</code></td></tr><tr><td>setCheckedKeys</td><td>通过 keys 设置目前勾选的节点，使用此方法必须设置 node-key 属性</td><td>(keys, leafOnly) 接收两个参数，1. 勾选节点的 key 的数组 2. boolean 类型的参数，若为 <code>true</code> 则仅设置叶子节点的选中状态，默认值为 <code>false</code></td></tr><tr><td>setChecked</td><td>通过 key / data 设置某个节点的勾选状态，使用此方法必须设置 node-key 属性</td><td>(key/data, checked, deep) 接收三个参数，1. 勾选节点的 key 或者 data 2. boolean 类型，节点是否选中  3. boolean 类型，是否设置子节点 ，默认为 false</td></tr><tr><td>getCurrentKey</td><td>获取当前被选中节点的 key，使用此方法必须设置 node-key 属性，若没有节点被选中则返回 null</td><td>—</td></tr><tr><td>getCurrentNode</td><td>获取当前被选中节点的 node，若没有节点被选中则返回 null</td><td>—</td></tr><tr><td>setCurrentKey</td><td>通过 key 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性</td><td>(key) 待被选节点的 key</td></tr><tr><td>setCurrentNode</td><td>通过 node 设置某个节点的当前选中状态，使用此方法必须设置 node-key 属性</td><td>(node) 待被选节点的 node</td></tr></tbody></table>
      <h3>Events</h3>
      <table class="table"><thead><tr><th>事件名称</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td>node-click</td><td>节点被点击时的回调</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td></tr><tr><td>check-change</td><td>节点选中状态发生变化时的回调</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点</td></tr><tr><td>current-change</td><td>当前选中节点变化时触发的事件</td><td>共两个参数，依次为：当前节点的数据，当前节点的 Node 对象</td></tr><tr><td>node-expand</td><td>节点被展开时触发的事件</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td></tr><tr><td>node-collapse</td><td>节点被关闭时触发的事件</td><td>共三个参数，依次为：传递给 <code>data</code> 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。</td></tr></tbody></table>
    </section>
  </div>
</template>

<script type="text/ecmascript-6">
  import collapseBar from 'components/collapseBar/collapseBar'
  import { collapseMixin } from 'common/js/mixin'

  let id = 1000
  export default {
    mixins: [collapseMixin],
    data () {
      return {
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        props: {
          label: 'name',
          children: 'zones'
        },
        count: 1,
        props1: {
          label: 'name',
          children: 'zones',
          isLeaf: 'leaf'
        },
        data2: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        data3: [{
          id: 1,
          label: '一级 2',
          children: [{
            id: 3,
            label: '二级 2-1',
            children: [{
              id: 4,
              label: '三级 3-1-1'
            }, {
              id: 5,
              label: '三级 3-1-2',
              disabled: true
            }]
          }, {
            id: 2,
            label: '二级 2-2',
            disabled: true,
            children: [{
              id: 6,
              label: '三级 3-2-1'
            }, {
              id: 7,
              label: '三级 3-2-2',
              disabled: true
            }]
          }]
        }],
        data4: [{
          id: 1,
          label: '一级 1',
          children: [{
            id: 4,
            label: '二级 1-1',
            children: [{
              id: 9,
              label: '三级 1-1-1'
            }, {
              id: 10,
              label: '三级 1-1-2'
            }]
          }]
        }, {
          id: 2,
          label: '一级 2',
          children: [{
            id: 5,
            label: '二级 2-1'
          }, {
            id: 6,
            label: '二级 2-2'
          }]
        }, {
          id: 3,
          label: '一级 3',
          children: [{
            id: 7,
            label: '二级 3-1'
          }, {
            id: 8,
            label: '二级 3-2'
          }]
        }],
        filterText: '',
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
        }, {
          expand: false
        }, {
          expand: false
        }, {
          expand: false
        }]
      }
    },
    methods: {
      handleCheckChange (data, checked, indeterminate) {
        console.log(data, checked, indeterminate)
      },
      handleNodeClick (data) {
        console.log(data)
      },
      loadNode (node, resolve) {
        if (node.level === 0) {
          return resolve([{name: 'region1'}, {name: 'region2'}])
        }
        if (node.level > 3) return resolve([])

        let hasChild
        if (node.data.name === 'region1') {
          hasChild = true
        } else if (node.data.name === 'region2') {
          hasChild = false
        } else {
          hasChild = Math.random() > 0.5
        }

        setTimeout(() => {
          let data
          if (hasChild) {
            data = [{
              name: 'zone' + this.count++
            }, {
              name: 'zone' + this.count++
            }]
          } else {
            data = []
          }

          resolve(data)
        }, 500)
      },
      loadNode1 (node, resolve) {
        if (node.level === 0) {
          return resolve([{name: 'region'}])
        }
        if (node.level > 1) return resolve([])

        setTimeout(() => {
          const data = [{
            name: 'leaf',
            leaf: true
          }, {
            name: 'zone'
          }]

          resolve(data)
        }, 500)
      },
      getCheckedNodes () {
        console.log(this.$refs.tree.getCheckedNodes())
      },
      getCheckedKeys () {
        console.log(this.$refs.tree.getCheckedKeys())
      },
      setCheckedNodes () {
        this.$refs.tree.setCheckedNodes([{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 9,
          label: '三级 1-1-1'
        }])
      },
      setCheckedKeys () {
        this.$refs.tree.setCheckedKeys([3])
      },
      resetChecked () {
        this.$refs.tree.setCheckedKeys([])
      },
      append (data) {
        const newChild = { id: id++, label: 'testtest', children: [] }
        if (!data.children) {
          this.$set(data, 'children', [])
        }
        data.children.push(newChild)
      },

      remove (node, data) {
        const parent = node.parent
        const children = parent.data.children || parent.data
        const index = children.findIndex(d => d.id === data.id)
        children.splice(index, 1)
      },

      renderContent (h, { node, data, store }) {
        return (
          <span style="flex: 1; display: flex; align-items: center; justify-content: space-between; font-size: 14px; padding-right: 8px;">
          <span>
          <span>{node.label}</span>
        </span>
        <span>
        <el-button style="font-size: 12px;" type="text" on-click={ () => this.append(data) }>Append</el-button>
        <el-button style="font-size: 12px;" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
        </span>
        </span>)
      },
      filterNode (value, data) {
        if (!value) return true
        return data.label.indexOf(value) !== -1
      }
    },
    watch: {
      filterText (val) {
        this.$refs.tree2.filter(val)
      }
    },
    components: {
      collapseBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/component"

  .demo-tree .buttons, .demo-tree .filter-tree {
    margin-top: 20px;
  }
</style>
