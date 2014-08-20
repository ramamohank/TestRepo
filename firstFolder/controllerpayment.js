.controller('transactionCtrl',function($scope,$state,$http, $log, paymentService, transactionService, $routeParams, sessionFactory)
{
	var session = sessionFactory.load();
  var accountId = 'm114041502882140000'; //FIXME default test merchant id
  if (session) {
    var sessionData = session.getData();
    accountId = sessionData.user.accountId;
    $log.info('session accountId:' + accountId);
  }
  else {
    $log.info('ERROR: using default test merchant id ' + accountId);
  }

  $scope.payments = [];

  $scope.transactionList = '';
  $scope.myData ={ transcations: [
        {
            "userId": "test@test.com",
            "amount": 123,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq10311c22bbdf74cb3afdf487c5483ca76",
            "fees": 1.23,
            "createDate": 1406064428000
        },
        {
            "userId": "test@test.com",
            "amount": 888,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq191ecc2879f084c80a842e2386f1e10af",
            "fees": 1.23,
            "createDate": 1406062365000,
            "state": "SUCCESS"
        },
        {
            "userId": "test@test.com",
            "amount": 888,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq12b35cf1f2a934de3b2dd1690e019b8de",
            "fees": 1.23,
            "createDate": 1406036008000,
            "state": "SUCCESS"
        },
        {
            "userId": "test@test.com",
            "amount": 888,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq1fb0d6d5285f04f53b4f01dccd2c5300a",
            "fees": 1.23,
            "createDate": 1406035896000,
            "state": "SUCCESS"
        },
        {
            "userId": "test@test.com",
            "amount": 888,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq1c95ca1ddb73e4ef2a1b77ad93d1be942",
            "fees": 1.23,
            "createDate": 1406013783000,
            "state": "SUCCESS"
        },
        {
            "userId": "test@test.com",
            "amount": 888,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq1f32a2d3efaf24acaaf79cd148601cda2",
            "fees": 1.23,
            "createDate": 1406010351000,
            "state": "SUCCESS"
        },
        {
            "userId": "test@test.com",
            "amount": 888,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq179c281b1d11044bf8eefdd46207b8f2f",
            "fees": 1.23,
            "createDate": 1406010261000,
            "state": "SUCCESS"
        },
        {
            "userId": "test@test.com",
            "amount": 888,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq108651ba1a00d4a4e92bae45aa4233848",
            "fees": 1.23,
            "createDate": 1406010006000,
            "state": "SUCCESS"
        },
        {
            "userId": "test@test.com",
            "amount": 888,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq160aaa46a792a42fa8f5305b443c783b8",
            "fees": 1.23,
            "createDate": 1406009873000
        },
        {
            "userId": "test@test.com",
            "amount": 1000,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq1d6e2512c98f240c3a8226a47b3135e0d",
            "fees": 1.23,
            "createDate": 1405603537000
        },
        {
            "userId": "test@test.com",
            "amount": 888,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq17baf62def96b49ada347b39b3a8b635c",
            "fees": 1.23,
            "createDate": 1405552854000
        },
        {
            "userId": "test@test.com",
            "amount": 888,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq17e1ca64c376c4513b513a694ca495b8c",
            "fees": 1.23,
            "createDate": 1405552035000
        },
        {
            "userId": "test@test.com",
            "amount": 888,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq1d5b324e34896400096011ffc12fe596e",
            "fees": 1.23,
            "createDate": 1405513300000
        },
        {
            "userId": "test@test.com",
            "amount": 44,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq18c7c1e7ccdb4405d8243762987adb512",
            "fees": 1.23,
            "createDate": 1405506120000
        },
        {
            "userId": "test@test.com",
            "amount": 3333,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq13c0a19c9c6f34b90843a7394c0ca5147",
            "fees": 1.23,
            "createDate": 1405504741000
        },
        {
            "userId": "test@test.com",
            "amount": 200,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq18496597dfb1d49bd94da6b1a235e8c51",
            "fees": 1.23,
            "createDate": 1405499262000
        },
        {
            "userId": "test@test.com",
            "amount": 3334,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq105ee63ca70524034bb8f110fa1d6e2ca",
            "fees": 1.23,
            "createDate": 1405421208000
        },
        {
            "userId": "test@test.com",
            "amount": 777,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq11c56157c20a042169ba5fb907546afd8",
            "fees": 1.23,
            "createDate": 1405420696000
        },
        {
            "userId": "test@test.com",
            "amount": 200,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq133aa7176beb74d2aa136e979ab0d1fe5",
            "fees": 1.23,
            "createDate": 1405420415000
        },
        {
            "userId": "test@test.com",
            "amount": 200,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq1d7900ecab6d34b34bd11fc81927be552",
            "fees": 1.23,
            "createDate": 1405419584000
        },
        {
            "userId": "test@test.com",
            "amount": 1000,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq1e1a5041aec6a49f5b36ceb977b33cd49",
            "fees": 1.23,
            "createDate": 1405352663000
        },
        {
            "userId": "test@test.com",
            "amount": 1000,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq1640b1d87115d4b25b7b4068d2b9fd7f1",
            "fees": 1.23,
            "createDate": 1405352473000
        },
        {
            "userId": "test@test.com",
            "amount": 200,
            "currency": "USD",
            "type": "AUTH",
            "status": "ACT",
            "txnId": "prq14920f9b229d34482aa217337df8a3293",
            "fees": 1.23,
            "createDate": 1405336799000
        }
    ],
    "count": 23
};

  $scope.filterOptions = {
    filterText: "",
    useExternalFilter: false
  };

  $scope.totalServerItems = 0;

  $scope.rowTemplate = '<div ng-click="onClickRow(row)" ng-repeat="col in renderedColumns" ng-class="col.colIndex()" class="ngCell {{col.cellClass}}"><div class="ngVerticalBar" ng-style="{height: rowHeight}" ng-class="{ ngVerticalBarVisible: !$last }">&nbsp;</div><div ng-cell></div></div>';

  $scope.pagingOptions = {
    pageSizes: [10, 20, 50],
    pageSize: 10,
    currentPage: 1
  };
  $scope.setPagingData = function(data, page, pageSize){
    $log.info('pagingData:' + data[0].accountId);
    var pagedData = data.slice((page - 1) * pageSize, page * pageSize);
    $scope.myData = pagedData;

$scope.totalServerItems = data.length;
    if (!$scope.$$phase) {
      $scope.$apply();
    }
  };
  $scope.getPagedDataAsync = function (pageSize, page, searchText) {
    setTimeout(function () {
      var data;
      if (searchText) {
        var ft = searchText.toLowerCase();
        transactionService.getTransactions().then(function (transactionList) {
          data = transactionList.transactions.filter(function(item) {
            return JSON.stringify(item).toLowerCase().indexOf(ft) != -1;
          });
          $scope.setPagingData(data,page,pageSize);
        });
      } else {
        transactionService.getTransactions().then(function (transactionList) {
          $scope.setPagingData(transactionList.transactions,page,pageSize);
        });
      }
    }, 100);

  };
  $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage);

  $scope.$watch('pagingOptions', function (newVal, oldVal) {
    if (newVal !== oldVal && newVal.currentPage !== oldVal.currentPage) {
      $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
    }
  }, true);
  $scope.$watch('filterOptions', function (newVal, oldVal) {
    if (newVal !== oldVal) {
      $scope.getPagedDataAsync($scope.pagingOptions.pageSize, $scope.pagingOptions.currentPage, $scope.filterOptions.filterText);
    }
  }, true);
  $scope.gridOptions = {
    data: 'myData',
    jqueryUIDraggable: true,
    jqueryUITheme: true,
    showFilter: true,
    showFooter: true,
    showGroupPanel: false,
    showColumnMenu: false,
    enableRowSelection: false,
    enableColumnResize: true,
    enablePaging: true,
    totalServerItems: 'totalServerItems',
    pagingOptions: $scope.pagingOptions,
    filterOptions: $scope.filterOptions,
    rowTemplate: $scope.rowTemplate,
    columnDefs: [
      {field:'amount', displayName:'Amount'},
      {field:'createDate', displayName:'Create Date'},
      {field:'txnId', displayName:'Transaction ID'}
        
    ]
  }
})
