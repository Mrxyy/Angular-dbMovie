// 豆瓣APi 详细介绍
// https://www.jianshu.com/p/d9701a81be8e
// 创建的模块和依赖的模块[]
var app = angular.module('app',['ngRoute','listMovie'])
			// app控制的控制器 $scope作用域服务
			app.controller('main',['$scope',function ($scope) {
				$scope.movieName = '豆瓣电影'
			}])
			// ngRouter提供的服务$routerprovider
			app.config(['$routeProvider',function ($routeProvider) {
				 $routeProvider
				  /* 
				 :代表一个组
				 ？匹配【1，0】几个组
				 * 1->n 个组
					*/
// 					.when('/color/:color/largecode/:largecode?/edit',{template:'coneing'})
// 				  .when('/top',{template:'top'})
				   // redirectTo 重定向
					.otherwise({redirectTo:'/in_theaters'})
					// console.log(app)
			}])
// console.log(angular.element(window))