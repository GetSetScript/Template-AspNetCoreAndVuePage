import Vue from 'vue'; // 'vue' is an alias
import Index from '../Components/Index'; // not a .js file, so you must resolve this to .vue in webpacks resolve extensions
import "../../Global/Styles/global"; // not a .js file, so you must resolve this to .css in webpacks resolve extensions

new Vue({
    el: '#index',
    render: h => h(Index)
});

//if you dont add the below, the module will not be accepted for hot reload
if (module["hot"]) {
    module["hot"].accept();
}