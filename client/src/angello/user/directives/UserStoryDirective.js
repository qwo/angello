angular.module('Angello.User')
    .directive('userstory', function ($rootScope, StoriesService) {
        var linker = function (scope, element, attrs) {
            element
                .mouseover(function () {
                    element.css({ 'opacity': 0.9 });
                })
                .mouseout(function () {
                    element.css({ 'opacity': 1.0 })
                });
        };

        var controller = function () {
            this.deleteStory = function (id) {
                StoriesService.destroy(id).then(function (result) {
                    $rootScope.$broadcast('storyDeleted');
                }, function (reason) {
                    console.log('ERROR', reason);
                });
            };
        };

        return {
            restrict: 'A',
            controller: controller,
            controllerAs: 'storyDir',
            link: linker
        };
    });