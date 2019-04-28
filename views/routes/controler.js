
(function(angular){
	angular.module('listMovie',['ngRoute','json']).config(['$routeProvider',function ($routeProvider) {
		// console.log($json)
		$routeProvider
				//route的服务
			  .when('/:cur/:pagenum?',{
					templateUrl:'views/routes/movieList.html',
					
					controller:['$scope','$route','jsond',function($scope,$route,jsond){
						console.log($route.current.params.pagenum)
						$scope.path = $route.current.params
						$scope.movieDate = ''
						$scope.peage = []
						$scope.total=0
						$scope.count=4
						$scope.start=(($scope.path.pagenum || 1)-1)*$scope.count
						$scope.pre = function () {
							if ((($scope.path.pagenum || 1)) > 1) {
								$route.updateParams({ pagenum:(($scope.path.pagenum || 1))- 1});
							}
						}
						$scope.next = function () {
							if ((($scope.path.pagenum || 1)) < $scope.peage.length) {
								$route.updateParams({ pagenum:(($scope.path.pagenum || 1)) -0+1});
							}
						}
						console.log($scope.start)
						jsond.json('http://api.douban.com/v2/movie/'+$scope.path.cur,{start:$scope.start,count:$scope.count},function	(data)	{
//							console.log(data)
								/* {
									data.subjects
									海报：images.small
									名字：title
									类型:genres
									上映时间：year
									导演：directors[]
									主演：casts[].name
									评分：rating.average
									总数：data.total
								}
								 */
							$scope.total = data.total
					        $scope.movieDate = data.subjects //==[obj={}]
							for(var i = 0;i < (Math.ceil($scope.total/$scope.count));i++){
							  $scope.peage.push(i+1)
							}
//					          [0].title
					          console.log($scope.movieDate[0].images)
					          $scope.$apply()
							})
					}]
					})
	}])
}(angular))