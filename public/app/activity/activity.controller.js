export class ActivityController {

    constructor($http) {
        'ngInject';

        this.$http = $http;
        this.getActivities();
    }

    getActivities() {
        var vm = this;
        // this.$http.get('http://localhost:5000/api/activity').then(function(result){
        //     vm.items = result.data;
        // });
        vm.items = [
            {
              "_id": "59b09cc726c4b53d00668bf0",
              "name": "Surfing",
              "description": "WEnim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt.. ",
              "imagepath": "images/portfolio1.jpg",
              "price": 200
            },
            {
              "_id": "59b0b28b26c4b53d00669487",
              "name": "Rocky Peak",
              "description": "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt.. ",
              "imagepath": "images/portfolio2.jpg",
              "price": 100.23
            },
            {
              "_id": "59b0ce2b26c4b53d00669549",
              "name": "BBQ Party",
              "description": "Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt.. ",
              "imagepath": "images/portfolio3.jpg",
              "price": 300.56
            }
          ];
    }

}
