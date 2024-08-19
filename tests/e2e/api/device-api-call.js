const pactum = require('pactum');
require('dotenv').config();
let spec = pactum.spec();

class Call_Api {
    
    async device_list(){
        const devices = await spec.get(process.env.BACK_URL)
        .expectStatus(200)
        response = devices.body
        return response
    }

    async edit_device(system_name, type, capacity){
        const devices = await this.device_list();
        device_id = devices.body['id'][0]
        const edit = await spec.put(process.env.BACK_URL + device_id)
        .withHeaders({'Content-Type': 'application/json'})
        .withBody({"system_name": system_name, "type": type, "hdd_capacity": capacity})
        .expectStatus(200)
    }

    async delete_last_device(){
        const del = await this.device_list();
        device_id = devices.body['id'][-1]
        await spec.delete(process.env.BACK_URL + device_id)
        .expectStatus(200)
    }

} module.exports = Call_Api;