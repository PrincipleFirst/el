import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = (resolve) => {
  import('pages/home/home').then((module) => {
    resolve(module)
  })
}
const Components = (resolve) => {
  import('pages/components/components').then((module) => {
    resolve(module)
  })
}

const Container = (resolve) => {
  import('pages/container/container').then((module) => {
    resolve(module)
  })
}
const Typography = (resolve) => {
  import('pages/typography/typography').then((module) => {
    resolve(module)
  })
}
const Icon = (resolve) => {
  import('pages/icon/icon').then((module) => {
    resolve(module)
  })
}
const Button = (resolve) => {
  import('pages/button/button').then((module) => {
    resolve(module)
  })
}
const Radio = (resolve) => {
  import('pages/radio/radio').then((module) => {
    resolve(module)
  })
}
const Checkbox = (resolve) => {
  import('pages/checkbox/checkbox').then((module) => {
    resolve(module)
  })
}
const Input = (resolve) => {
  import('pages/input/input').then((module) => {
    resolve(module)
  })
}
const InputNumber = (resolve) => {
  import('pages/inputNumber/inputNumber').then((module) => {
    resolve(module)
  })
}
const Select = (resolve) => {
  import('pages/select/select').then((module) => {
    resolve(module)
  })
}
const Cascader = (resolve) => {
  import('pages/cascader/cascader').then((module) => {
    resolve(module)
  })
}
const Switcher = (resolve) => {
  import('pages/switch/switch').then((module) => {
    resolve(module)
  })
}
const Slider = (resolve) => {
  import('pages/slider/slider').then((module) => {
    resolve(module)
  })
}
const TimePicker = (resolve) => {
  import('pages/timePicker/timePicker').then((module) => {
    resolve(module)
  })
}
const DatePicker = (resolve) => {
  import('pages/datePicker/datePicker').then((module) => {
    resolve(module)
  })
}
const DateTimePicker = (resolve) => {
  import('pages/dateTimePicker/dateTimePicker').then((module) => {
    resolve(module)
  })
}
const Upload = (resolve) => {
  import('pages/upload/upload').then((module) => {
    resolve(module)
  })
}
const Rate = (resolve) => {
  import('pages/rate/rate').then((module) => {
    resolve(module)
  })
}
const ColorPicker = (resolve) => {
  import('pages/colorPicker/colorPicker').then((module) => {
    resolve(module)
  })
}
const Transfer = (resolve) => {
  import('pages/transfer/transfer').then((module) => {
    resolve(module)
  })
}
const Form = (resolve) => {
  import('pages/form/form').then((module) => {
    resolve(module)
  })
}
const Tag = (resolve) => {
  import('pages/tag/tag').then((module) => {
    resolve(module)
  })
}
const Tree = (resolve) => {
  import('pages/tree/tree').then((module) => {
    resolve(module)
  })
}
const Layout = (resolve) => {
  import('pages/layout/layout').then((module) => {
    resolve(module)
  })
}
const Table = (resolve) => {
  import('pages/table/table').then((module) => {
    resolve(module)
  })
}
const Progress = (resolve) => {
  import('pages/progress/progress').then((module) => {
    resolve(module)
  })
}
const Pagination = (resolve) => {
  import('pages/pagination/pagination').then((module) => {
    resolve(module)
  })
}
const Badge = (resolve) => {
  import('pages/badge/badge').then((module) => {
    resolve(module)
  })
}
const Alert = (resolve) => {
  import('pages/alert/alert').then((module) => {
    resolve(module)
  })
}
const Loading = (resolve) => {
  import('pages/loading/loading').then((module) => {
    resolve(module)
  })
}
const Message = (resolve) => {
  import('pages/message/message').then((module) => {
    resolve(module)
  })
}
const MessageBox = (resolve) => {
  import('pages/messageBox/messageBox').then((module) => {
    resolve(module)
  })
}
const Notification = (resolve) => {
  import('pages/notification/notification').then((module) => {
    resolve(module)
  })
}
const NavMenu = (resolve) => {
  import('pages/navMenu/navMenu').then((module) => {
    resolve(module)
  })
}
const Tabs = (resolve) => {
  import('pages/tabs/tabs').then((module) => {
    resolve(module)
  })
}
const Breadcrumb = (resolve) => {
  import('pages/breadcrumb/breadcrumb').then((module) => {
    resolve(module)
  })
}
const Dropdown = (resolve) => {
  import('pages/dropdown/dropdown').then((module) => {
    resolve(module)
  })
}
const Steps = (resolve) => {
  import('pages/steps/steps').then((module) => {
    resolve(module)
  })
}
const Dialog = (resolve) => {
  import('pages/dialog/dialog').then((module) => {
    resolve(module)
  })
}
const Tooltip = (resolve) => {
  import('pages/tooltip/tooltip').then((module) => {
    resolve(module)
  })
}
const Popover = (resolve) => {
  import('pages/popover/popover').then((module) => {
    resolve(module)
  })
}
const Card = (resolve) => {
  import('pages/card/card').then((module) => {
    resolve(module)
  })
}
const Carousel = (resolve) => {
  import('pages/carousel/carousel').then((module) => {
    resolve(module)
  })
}
const Collapse = (resolve) => {
  import('pages/collapse/collapse').then((module) => {
    resolve(module)
  })
}

const routes = [
  {
    path: '/',
    redirect: '/component'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/component',
    component: Components,
    children: [
      {
        path: 'layout',
        component: Layout
      }, {
        path: 'container',
        component: Container
      }, {
        path: 'typography',
        component: Typography
      }, {
        path: 'icon',
        component: Icon
      }, {
        path: 'button',
        component: Button
      }, {
        path: 'radio',
        component: Radio
      }, {
        path: 'checkbox',
        component: Checkbox
      }, {
        path: 'input',
        component: Input
      }, {
        path: 'input-number',
        component: InputNumber
      }, {
        path: 'select',
        component: Select
      }, {
        path: 'cascader',
        component: Cascader
      }, {
        path: 'switch',
        component: Switcher
      }, {
        path: 'slider',
        component: Slider
      }, {
        path: 'time-picker',
        component: TimePicker
      }, {
        path: 'date-picker',
        component: DatePicker
      }, {
        path: 'datetime-picker',
        component: DateTimePicker
      }, {
        path: 'upload',
        component: Upload
      }, {
        path: 'rate',
        component: Rate
      }, {
        path: 'color-picker',
        component: ColorPicker
      }, {
        path: 'transfer',
        component: Transfer
      }, {
        path: 'form',
        component: Form
      }, {
        path: 'tree',
        component: Tree
      }, {
        path: 'table',
        component: Table
      }, {
        path: 'tag',
        component: Tag
      }, {
        path: 'progress',
        component: Progress
      }, {
        path: 'pagination',
        component: Pagination
      }, {
        path: 'badge',
        component: Badge
      }, {
        path: 'alert',
        component: Alert
      }, {
        path: 'loading',
        component: Loading
      }, {
        path: 'message',
        component: Message
      }, {
        path: 'message-box',
        component: MessageBox
      }, {
        path: 'notification',
        component: Notification
      }, {
        path: 'menu',
        component: NavMenu
      }, {
        path: 'tabs',
        component: Tabs
      }, {
        path: 'breadcrumb',
        component: Breadcrumb
      }, {
        path: 'dropdown',
        component: Dropdown
      }, {
        path: 'steps',
        component: Steps
      }, {
        path: 'dialog',
        component: Dialog
      }, {
        path: 'tooltip',
        component: Tooltip
      }, {
        path: 'popover',
        component: Popover
      }, {
        path: 'card',
        component: Card
      }, {
        path: 'carousel',
        component: Carousel
      }, {
        path: 'collapse',
        component: Collapse
      }
    ]
  }
]

const router = new Router({
  routes
})

export default router
