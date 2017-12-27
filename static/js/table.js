/* eslint-disable */
let columns = [
  {align: 'center', valign: 'middle', checkbox: 'true'},
  {
    field: '目标ID',
    title: '目标ID',
    sortable: true,
    valign: 'middle',
    align: 'center',
    filterControl: 'input',
    filterControlPlaceholder: ''
  },
  {
    field: '目标NAME',
    title: '目标NAME',
    sortable: true,
    valign: 'middle',
    align: 'center',
    filterControl: 'input',
    filterControlPlaceholder: ''
  },
  {
    field: '参照ID',
    title: '参照ID',
    sortable: true,
    valign: 'middle',
    align: 'center',
    filterControl: 'input',
    filterControlPlaceholder: ''
  },
  {
    field: '参照NAME',
    title: '参照NAME',
    sortable: true,
    valign: 'middle',
    align: 'center',
    filterControl: 'input',
    filterControlPlaceholder: ''
  }]

const data = [
  {
    "目标ID": "119908340095516678",
    "参照NAME": "龙政直流极1线路",
    "目标NAME": "龙政直流极1线路",
    "参照ID": "120699010000000001"
  },
  {
    "目标ID": "119908340095516670",
    "参照NAME": "湘江直流极1线路",
    "目标NAME": "湘江直流极1线路",
    "参照ID": "120699010000000002"
  },
  {
    "目标ID": "119908340095516672",
    "参照NAME": "赣水直流极1线路",
    "目标NAME": "赣水直流极1线路",
    "参照ID": "120699010000000003"
  },
  {
    "目标ID": "119908340095516671",
    "参照NAME": "汉水直流极1线路",
    "目标NAME": "汉水直流极1线路",
    "参照ID": "120699010000000004"
  },
  {
    "目标ID": "119908340095516673",
    "参照NAME": "嵩山直流极1线路",
    "目标NAME": "嵩山直流极1线路",
    "参照ID": "120699010000000005"
  },
  {
    "目标ID": "119908340095516674",
    "参照NAME": "衡山直流极1线路",
    "目标NAME": "衡山直流极1线路",
    "参照ID": "120699010000000006"
  },
  {
    "目标ID": "119908340095516680",
    "参照NAME": "江城直流极1线路",
    "目标NAME": "江城直流极1线路",
    "参照ID": "120699010000000007"
  }
]
$('#lexiconTable').bootstrapTable({
  columns: columns,
  data:data,
  pageSize: 5
})
