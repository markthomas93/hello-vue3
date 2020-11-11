import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
const app = createApp(App)


import 'wired-button';
import 'wired-input';
import 'wired-link';
import {
  Input, Upload, Table, TableColumn, Tabs, TabPane, Image, Message, pagination, DatePicker, Select,
  Option
} from 'element-plus';
//
app.use(Input)
app.use(Tabs)
app.use(TabPane)
app.use(Upload)
app.use(Table)
app.use(TableColumn)
app.use(Image)
app.use(pagination)
app.use(DatePicker)
app.use(Select)
app.use(Option)
// app.use(ElementPlus)

app.config.globalProperties.$message = (text, type) => {
  Message({
    'showClose': true, // 是否显示关闭按钮
    'message': text, // 消息内容
    'type': type || 'success', // 消息类型
    'duration': 1000 // 显示时间
  })
}

app.mount('#app')
