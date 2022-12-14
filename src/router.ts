import { createWebHashHistory, createRouter } from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/Form/Switch/SwitchDemo.vue";
import ButtonDemo from "./components/Basic/Button/ButtonDemo.vue";
import DialogDemo from "./components/Feedback/Dialog/DialogDemo.vue";
import TabsDemo from "./components/Navigation/Tabs/TabsDemo.vue";
import IconDemo from "./components/Basic/Icon/IconDemo.vue";
import LayoutDemo from "./components/Basic/Layout/LayoutDemo.vue"
import DatepickerDemo from "./components/Form/Datepicker/DatepickerDemo.vue";
import TooltipDemo from "./components/Feedback/Tooltip/TooltipDemo.vue";

import { h } from 'vue';
import Markdown from './components/Markdown.vue';
import intro from './markdown/intro.md'
import getStarted from './markdown/get-started.md'
import install from './markdown/install.md'
const history = createWebHashHistory();
const md = string => h(Markdown, { content: string, key: string })
export const router = createRouter({
  history: history,
  routes: [
    { path: "/", component: Home },
    {
      path: "/doc",
      component: Doc,
      children: [
        { path: "", redirect: '/doc/intro' },
        { path: "intro", component: md(intro) },
        { path: "get-started", component: md(getStarted) },
        { path: "install", component: md(install) },
        { path: "switch", component: SwitchDemo },
        { path: "button", component: ButtonDemo },
        { path: "dialog", component: DialogDemo },
        { path: "tabs", component: TabsDemo },
        { path: "icon", component: IconDemo },
        { path: "layout", component: LayoutDemo },
        { path: "datepicker", component: DatepickerDemo },
        { path: "tooltip", component: TooltipDemo },
      ],
    },
  ],
});
router.afterEach(() => {
});
