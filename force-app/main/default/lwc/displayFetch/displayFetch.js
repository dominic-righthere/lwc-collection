import { LightningElement, track } from 'lwc';

export default class DisplayFetch extends LightningElement {
    @track data;

    async fetchData() {
        let endPoint = "https://api.github.com/users";
        const response = await fetch(endPoint);
        const repos = await response.json();
        this.data = repos;
        // console.log(repos);
    }

    postData = async () => {
        const location = window.location.hostname;
        let endPoint = "https://!!!!!!.service-now.com/api/now/table/incident";
        let username = '!!!!';
        let password = '!!!!';
        const settings = {
            method: 'POST',
            body: JSON.stringify(
                {
                    "short_description": "summary of the issue",
                    "description": "detailed description of the issue"
                }
            ),
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(username + ":" + password)
            }
        };
        try {
            const fetchResponse = await fetch(endPoint, settings);
            const data = await fetchResponse.json();
            return data;
        } catch (e) {
            return e;
        }

    }


}