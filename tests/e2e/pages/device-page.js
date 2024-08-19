import { Selector } from 'testcafe';
const edit_button = '[class="device-edit"]'
const delete_button = '[class="device-remove"]'
const name_tittle = '[class="device-name"]'
const type_name = '[class="device-type"]'
const capacity_tittle = '[class="device-capacity"]'
const main_box = '[class="device-main-box"]'
const subit = '[class="submitButton"]'
const device_field = '[id="system_name"]'
const device_type_dropbox = '[id="type"]'
const device_capacity_field = '[id="hdd_capacity"]'

class Page_Actions {

   async count_devices() {
       const device_box = Selector(main_box);
       return device_box.count;
    }

    async count_edit_buttons(){
        this.count_devices
        const edit = Selector(edit_button);
        return edit.count;
    }

    async count_del_buttons(){
        this.count_devices
        const del = Selector(delete_button);
        return del.count;
    }

    async device_elements() {
        const ui_devices_list = [];
        const device_elements = Selector(main_box);
        const device_count = await device_elements.count;
        for (let i = 0; i < device_count; i++) {
            const device = device_elements.nth(i);
            const name = await device.find(name_tittle).innerText;
            const type = await device.find(type_name).innerText;
            const capacity = await device.find(capacity_tittle).innerText;

            ui_devices_list.push({ name, type, capacity});
        }
       return ui_devices_list;
    }

    async device_submit(t, name, type, capacity) {
        const name_input = Selector(device_field);
        const capacity_input = Selector(device_capacity_field);
        const type_dropdown = Selector(device_type_dropbox);
        const submit_button = Selector(subit);

        await t.click(submit_button)
        .typeText(name_input, name)
        .click(type_dropdown)
        .selectOption(type_dropdown, type)
        .typeText(capacity_input, capacity)
        .click(submit_button);
    }

} export default Page_Actions;

