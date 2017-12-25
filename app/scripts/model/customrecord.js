angular.module('myApp').factory('CustomRecord', ['$http', function($http) {
    function CustomRecord(CustomRecord) {
        if (CustomRecord) {
            this.setData(CustomRecord);
        }
    }

    CustomRecord.prototype = {
        setData: function(CustomRecord) {
            angular.extend(this, CustomRecord);
        },
        delete: function() {
            alert('code for deleting the object');
        },
        update: function() {
            alert('code for updating the object');
        },
        getImageUrl: function(width, height) {
            return 'our/image/service/' + this.projectid + '/width/height';
        },
        isAvailable: function() {
            alert(this.id);
        }
    };

    return CustomRecord;
}]);