
var app = angular.module ('flapperNews', []);

app.factory ('posts', function (){
  var o = {
    posts : [
      { title: 'post 1', upvotes: 5, link: 'https://www.google.com' },
      { title: 'post 2', upvotes: 8, link: 'https://www.twitter.com' },
      { title: 'post 3', upvotes: 3, link: 'https://www.facebook.com' },
      { title: 'post 4', upvotes: 2, link: 'https://www.pordede.com' }
    ]
  };

  return o;
});

app.controller ('MainCtrl', ['$scope', 'posts', function ($scope, posts){
  console.log (posts.posts)
  $scope.posts = posts.posts;

  $scope.addPost = function () {
    if (!$scope.title || $scope.title === '') { return ; }
    $scope.posts.push ({
      title: $scope.title, upvotes : 0, link: $scope.link
    });

    $scope.title = '';
    $scope.link = '';
  };

  $scope.incrementUpvotes = function (post){
    post.upvotes += 1;
  };
}]);
