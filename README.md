# Angular Ordinal Number Filter


    {{numericalValue | ordinal}}

Converts e.g 1 -> 1st, 2 -> 2nd, 3 -> 3rd, 4 -> 4th.

## Installation

Via [npm](https://www.npmjs.com/package/angular-ordinal) (Recommended)

````terminal
npm install --save angular-ordinal
````

This filter can also be installed through [Bower](http://www.bower.io):
```terminal
bower install angularjs-ordinal-filter --save
```

Load the script:
```html
<script src="<path-to>/ordinal-browser.js"></script>
```

Include the module as a dependency in your app:
```js
angular.module('MyApp', ['ordinal']);
```



## Usage

In your template:
```html
{{numericalValue | ordinal}}
```

In your JS:
```js
angular.module('MyApp').controller('$scope', '$filter', function($scope, $filter) {
    var ordinal = $filter('ordinal');

    $scope.dayOfMonth = ordinal(1); // => 1st
});
```

## License

Licensed under the MIT License.