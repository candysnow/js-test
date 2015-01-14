/* jshint globalstrict: true */
/* global Scope: false */
'use strict';

describe("Testing the controller 'HelloworldCtrl'", function() {
	
	beforeEach(module("helloworldApp"));
	
	var helloworldCtrl, scope, httpBackend;

	beforeEach(inject(function($controller, $rootScope, $httpBackend) {
		scope = $rootScope;
		httpBackend = $httpBackend;

		helloworldCtrl = function() {
			return $controller("HelloworldCtrl", {
				$scope: scope,
			});
		};
	}));

	afterEach(function() {
		httpBackend.verifyNoOutstandingExpectation();
		httpBackend.verifyNoOutstandingRequest();
	});

	it("should say hello", function() {
		helloworldCtrl();
		httpBackend.expectGET('api/hello').respond(200, {
			content: 'Hello world'
		});
		scope.hello();
		httpBackend.flush();
		expect(scope.content).toBe("Hello world!");
	});	
});
