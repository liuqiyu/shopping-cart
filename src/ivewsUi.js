import Vue from 'vue';

import { Button, Table, Icon, Spin, Carousel, BackTop, Modal, FormItem, CarouselItem, Input, Form, Message, LoadingBar, Tabs, TabPane } from 'iview';

Vue.component('Button', Button);
Vue.component('Table', Table);
Vue.component('Icon', Icon);
Vue.component('Spin', Spin);
Vue.component('Carousel', Carousel);
Vue.component('CarouselItem', CarouselItem);
Vue.component('BackTop', BackTop);
Vue.component('Modal', Modal);
Vue.component('i-input', Input);
Vue.component('FormItem', FormItem);
Vue.component('Form', Form);
Vue.component('Tabs', Tabs);
Vue.component('TabPane', TabPane);

// Vue.prototype.$Modal = Modal
Vue.prototype.$Message = Message;
Vue.prototype.$Loading = LoadingBar;
