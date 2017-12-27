/* eslint-disable */
var left = document.getElementById('left'), fixDiv = document.getElementById('fixDiv'),
  beforeScrollTop = left.scrollTop, cacheNode
var setting = {
  view: {
    dblClickExpand: false,
    showLine: false,
    showIcon: false
  },
  data: {
    simpleData: {
      enable: true
    }
  },
  callback: {
    onClick: treeOnClick,
    onExpand: onExpand,
    onCollapse: onCollapse
  }
}

function onExpand (event, treeId, treeNode) {
  if ($('#' + treeNode.tId + '_a').hasClass('fixTree')) {
    $('#' + treeNode.tId + '_switch').addClass('fixTree')
  } else
    fixDiv.classList.remove('fixDiv')
}

function onCollapse (event, treeId, treeNode) {
  if ($('#' + treeNode.tId + '_a').hasClass('fixTree')) {
    $('#' + treeNode.tId + '_switch').addClass('fixTree')
  } else
    fixDiv.classList.remove('fixDiv')
}

function treeOnClick (event, treeId, treeNode) {
  if (cacheNode) {
    $('#' + cacheNode.tId + '_a').removeClass('fixTree')
    $('#' + cacheNode.tId + '_switch').removeClass('fixTree')
    $('#itemBtn-' + treeNode.tId).removeClass('fixTree')
  }
  const fixHeight = $('#' + treeNode.tId).offset().top
  fixDiv.classList.add('fixDiv')
  fixDiv.style.top = `${fixHeight}px`
  $('#' + treeNode.tId + '_a').addClass('fixTree')
  $('#' + treeNode.tId + '_switch').addClass('fixTree')
  $('#itemBtn-' + treeNode.tId).addClass('fixTree')
  cacheNode = treeNode
}

var zNodes =[
  { id:1, pId:0, name:"父节点1"},
  { id:11, pId:1, name:"父节点11"},
  { id:111, pId:11, name:"叶子节点111"},
  { id:112, pId:11, name:"叶子节点112"},
  { id:113, pId:11, name:"叶子节点113"},
  { id:114, pId:11, name:"叶子节点114"},
  { id:12, pId:1, name:"父节点12"},
  { id:121, pId:12, name:"叶子节点121"},
  { id:122, pId:12, name:"叶子节点122"},
  { id:123, pId:12, name:"叶子节点123"},
  { id:124, pId:12, name:"叶子节点124"},
  { id:13, pId:1, name:"父节点13 - 没有子节点", isParent:true},
  { id:2, pId:0, name:"父节点2"},
  { id:21, pId:2, name:"父节点21 - 展开", open:true},
  { id:211, pId:21, name:"叶子节点211"},
  { id:212, pId:21, name:"叶子节点212"},
  { id:213, pId:21, name:"叶子节点213"},
  { id:214, pId:21, name:"叶子节点214"},
  { id:22, pId:2, name:"父节点22 - 折叠"},
  { id:221, pId:22, name:"叶子节点221"},
  { id:222, pId:22, name:"叶子节点222"},
  { id:223, pId:22, name:"叶子节点223"},
  { id:224, pId:22, name:"叶子节点224"},
  { id:23, pId:2, name:"父节点23 - 折叠"},
  { id:231, pId:23, name:"叶子节点231"},
  { id:232, pId:23, name:"叶子节点232"},
  { id:233, pId:23, name:"叶子节点233"},
  { id:234, pId:23, name:"叶子节点234"},
  { id:3, pId:0, name:"父节点3 - 没有子节点", isParent:true}
];

$.fn.zTree.init($('#treeDemo'), setting, zNodes)

left.onscroll = function () {
  var afterScrollTop = left.scrollTop,
    delta = afterScrollTop - beforeScrollTop
  if (delta === 0) return false
  if (delta > 0) {
    fixDiv.style.top = fixDiv.offsetTop - delta + 'px'
  } else {
    if (fixDiv.offsetTop - delta < 0) {
      return
    }
    fixDiv.style.top = fixDiv.offsetTop - delta + 'px'
  }
  beforeScrollTop = afterScrollTop
}
