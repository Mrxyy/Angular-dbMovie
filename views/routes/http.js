(function(angular){
	angular.module('json',[]).service('jsond',['$document','$window',function($document,$window){
		console.log($window,$document)
		this.json = function (url,data,callback) {
		// 1.处理data和生成一个函数名
		var b = '?'
		for(k in data){
			b+=(k+'='+data[k]+'&')
		}
		var fun = 'fun' + Date.now()
		var src = url+ b + 'callback='+fun
		$window[fun] = callback
		// console.log(src)
		// 2.生成script标签
		var script =  document.createElement('script')
		script.src = src
		$document[0].body.appendChild(script)
      }
	}])
})(angular)