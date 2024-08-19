const Call_Api = require('../api/device-api-call');
import Page_Actions from '../pages/device-page';

require('dotenv').config();

const request = new Call_Api();
const ui_actions = new Page_Actions();

fixture `Devices Tests`
.page(process.env.FRONT_URL);

test('Test 1, validating device list elements ', async t => {
    const devices_from_api = await request.device_list();
    const device_number = await ui_actions.count_devices();
    const number_edit = await ui_actions.count_edit_buttons();
    const number_del = await ui_actions.count_del_buttons();
    const device_number_api = devices_from_api.length;
    const element_list = await ui_actions.device_elements();
    const api_element_list = devices_from_api.map(device => ({
        name: device.system_name,
        type: device.type,
        capacity: device.hdd_capacity
    }));
    await t.expect(device_number_api).eql(number_edit, 'The number of edit button in the UI must represent the number of devices returned by the API');
    await t.expect(device_number_api).eql(number_del, 'The number of del button in the UI must represent the number of devices returned by the API');
    await t.expect(device_number_api).eql(device_number, 'The number of devices in the UI must represent the number returned by the API');
    await t.expect(api_element_list).eql(element_list, 'Devices in the UI must match the devices returned by the API');
});

test('Test 2, validating device submission process', async t => {
    ui_actions.device_submit('Master Device', 'WINDOWS_WORKSTATION', '5');
    const expected_device = { name: 'Master Device', type: 'WINDOWS_WORKSTATION', capacity: '5'};
    const device_list = await ui_actions.device_elements();
    await t.expect(device_list).contains(expected_device)
})

test('Test 3, validating edited data', async t =>{
    await request.edit_device('New Device', 'MAC', '1')
    const expected_device = {name: 'New Device', type: 'MAC', capacity: '1'};
    const device_list = await ui_actions.device_elements();
    await t.expect(device_list).contains(expected_device)
})

test('Test 4, delete last device', async t => {
    const device_list_before = await ui_actions.device_elements();
    await request.delete_last_device();
    const device_list_after = await ui_actions.device_elements();
    await t.expect(device_list_before).notEql(device_list_after)
})