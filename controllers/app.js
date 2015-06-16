
var app = angular.module ('flapperNews', []);

app.factory ('posts', function (){
  var o = {
    posts : [
      { title: 'post 1', upvotes: 5, link: 'https://www.google.com', comments: [{ author: 'Joe', body: 'Cool boy', upvotes: 0 }] },
      { title: 'post 2', upvotes: 8, link: 'https://www.twitter.com' },
      { title: 'post 3', upvotes: 3, link: 'https://www.facebook.com' },
      { title: 'post 4', upvotes: 2, link: 'https://www.pordede.com' }
    ]
  };

  return o;
});

app.controller ('MainCtrl', ['$scope', 'posts', function ($scope, posts){
  $scope.posts = posts.posts;

  $scope.addPost = function () {
    if (!$scope.title || $scope.title === '') { return ; }
    $scope.posts.push ({
      title     : $scope.title,
      upvotes   : 0,
      link      : $scope.link,
      comments  : [{
        author  : 'FisionBoy',
        body    : 'Cool comment',
        upvotes : 0
      }]
    });

    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function (post){
    post.upvotes += 1;
  };
}]);

app.controller ('PostsCtrl', ['$scope', '$stateParams', 'posts', function ($scope, $stateParams, posts){
  $scope.post = posts.posts[$stateParams.id];
}]);
