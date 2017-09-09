'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('addPollCtrl', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    var socket = io();

    //$scope.numberOfChoices = 2;
    $scope.pollName = '';
    $scope.choicesHTML;
    $scope.showUsername = true;

    $scope.renderChoices = function () {
      var numChoices = Number($scope.numberOfChoices);

      var choices = [];

      for (var i = 1; i <= numChoices; i++) {
        choices.push('<input class="form-control choices" type="text" placeholder="Enter"/>');
      }

      $scope.choicesHTML = $sce.trustAsHtml(choices.join(''));
    };

    $scope.addPoll = function () {
      var allChoices = Array.prototype.slice.call($('.choices')),
          values = [];

      for (var i = 0, len = allChoices.length; i < len; i++) {
        values.push(allChoices[i].value);
      }

      var data = {
        pollName: $scope.pollName,
        choices: values,
        showUsername: $scope.showUsername
      };

      $http({
        method: 'POST',
        url: '/api/public/addPoll',
        data: data
      }).then(function (response) {
        console.log(response.data);
        if (response.data.success) {
          socket.emit('pollAdded', {
            pollID: response.data.pollID
          });
        } else {
          console.log(response.data);
        }
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=addPollCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('addPollCtrl', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    var socket = io();

    //$scope.numberOfChoices = 2;
    $scope.pollName = '';
    $scope.choicesHTML;
    $scope.showUsername = true;

    $scope.renderChoices = function () {
      var numChoices = Number($scope.numberOfChoices);

      var choices = [];

      for (var i = 1; i <= numChoices; i++) {
        choices.push('<input class="form-control choices" type="text" placeholder="Enter"/>');
      }

      $scope.choicesHTML = $sce.trustAsHtml(choices.join(''));
    };

    $scope.addPoll = function () {
      var allChoices = Array.prototype.slice.call($('.choices')),
          values = [];

      for (var i = 0, len = allChoices.length; i < len; i++) {
        values.push(allChoices[i].value);
      }

      var data = {
        pollName: $scope.pollName,
        choices: values,
        showUsername: $scope.showUsername
      };

      $http({
        method: 'POST',
        url: '/api/public/addPoll',
        data: data
      }).then(function (response) {
        console.log(response.data);
        if (response.data.success) {
          socket.emit('pollAdded', {
            pollID: response.data.pollID
          });
        } else {
          console.log(response.data);
        }
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=addPollCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('addPollCtrl', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    var socket = io();

    //$scope.numberOfChoices = 2;
    $scope.pollName = '';
    $scope.choicesHTML;
    $scope.showUsername = true;

    $scope.renderChoices = function () {
      var numChoices = Number($scope.numberOfChoices);

      var choices = [];

      for (var i = 1; i <= numChoices; i++) {
        choices.push('<input class="form-control choices" type="text" placeholder="Enter"/>');
      }

      $scope.choicesHTML = $sce.trustAsHtml(choices.join(''));
    };

    $scope.addPoll = function () {
      var allChoices = Array.prototype.slice.call($('.choices')),
          values = [];

      for (var i = 0, len = allChoices.length; i < len; i++) {
        values.push(allChoices[i].value);
      }

      var data = {
        pollName: $scope.pollName,
        choices: values,
        showUsername: $scope.showUsername
      };

      $http({
        method: 'POST',
        url: '/api/public/addPoll',
        data: data
      }).then(function (response) {
        console.log(response.data);
        if (response.data.success) {
          socket.emit('pollAdded', {
            pollID: response.data.pollID
          });
        } else {
          console.log(response.data);
        }
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=addPollCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('addPollCtrl', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    var socket = io();

    //$scope.numberOfChoices = 2;
    $scope.pollName = '';
    $scope.choicesHTML;
    $scope.showUsername = true;

    $scope.renderChoices = function () {
      var numChoices = Number($scope.numberOfChoices);

      var choices = [];

      for (var i = 1; i <= numChoices; i++) {
        choices.push('<input class="form-control choices" type="text" placeholder="Enter"/>');
      }

      $scope.choicesHTML = $sce.trustAsHtml(choices.join(''));
    };

    $scope.addPoll = function () {
      var allChoices = Array.prototype.slice.call($('.choices')),
          values = [];

      for (var i = 0, len = allChoices.length; i < len; i++) {
        values.push(allChoices[i].value);
      }

      var data = {
        pollName: $scope.pollName,
        choices: values,
        showUsername: $scope.showUsername
      };

      $http({
        method: 'POST',
        url: '/api/public/addPoll',
        data: data
      }).then(function (response) {
        console.log(response.data);
        if (response.data.success) {
          socket.emit('pollAdded', {
            pollID: response.data.pollID
          });
        } else {
          console.log(response.data);
        }
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=addPollCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('addPollCtrl', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    var socket = io();

    //$scope.numberOfChoices = 2;
    $scope.pollName = '';
    $scope.choicesHTML;
    $scope.showUsername = true;

    $scope.renderChoices = function () {
      var numChoices = Number($scope.numberOfChoices);

      var choices = [];

      for (var i = 1; i <= numChoices; i++) {
        choices.push('<input class="form-control choices" type="text" placeholder="Enter"/>');
      }

      $scope.choicesHTML = $sce.trustAsHtml(choices.join(''));
    };

    $scope.addPoll = function () {
      var allChoices = Array.prototype.slice.call($('.choices')),
          values = [];

      for (var i = 0, len = allChoices.length; i < len; i++) {
        values.push(allChoices[i].value);
      }

      var data = {
        pollName: $scope.pollName,
        choices: values,
        showUsername: $scope.showUsername
      };

      $http({
        method: 'POST',
        url: '/api/public/addPoll',
        data: data
      }).then(function (response) {
        console.log(response.data);
        if (response.data.success) {
          socket.emit('pollAdded', {
            pollID: response.data.pollID
          });
        } else {
          console.log(response.data);
        }
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=addPollCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('addPollCtrl', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    var socket = io();

    //$scope.numberOfChoices = 2;
    $scope.pollName = '';
    $scope.choicesHTML;
    $scope.showUsername = true;

    $scope.renderChoices = function () {
      var numChoices = Number($scope.numberOfChoices);

      var choices = [];

      for (var i = 1; i <= numChoices; i++) {
        choices.push('<input class="form-control choices" type="text" placeholder="Enter"/>');
      }

      $scope.choicesHTML = $sce.trustAsHtml(choices.join(''));
    };

    $scope.addPoll = function () {
      var allChoices = Array.prototype.slice.call($('.choices')),
          values = [];

      for (var i = 0, len = allChoices.length; i < len; i++) {
        values.push(allChoices[i].value);
      }

      var data = {
        pollName: $scope.pollName,
        choices: values,
        showUsername: $scope.showUsername
      };

      $http({
        method: 'POST',
        url: '/api/public/addPoll',
        data: data
      }).then(function (response) {
        console.log(response.data);
        if (response.data.success) {
          socket.emit('pollAdded', {
            pollID: response.data.pollID
          });
        } else {
          console.log(response.data);
        }
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=addPollCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('addPollCtrl', ['$scope', '$http', '$sce', function ($scope, $http, $sce) {
    var socket = io();

    //$scope.numberOfChoices = 2;
    $scope.pollName = '';
    $scope.choicesHTML;
    $scope.showUsername = true;

    $scope.renderChoices = function () {
      var numChoices = Number($scope.numberOfChoices);

      var choices = [];

      for (var i = 1; i <= numChoices; i++) {
        choices.push('<input class="form-control choices" type="text" placeholder="Enter"/>');
      }

      $scope.choicesHTML = $sce.trustAsHtml(choices.join(''));
    };

    $scope.addPoll = function () {
      var allChoices = Array.prototype.slice.call($('.choices')),
          values = [];

      for (var i = 0, len = allChoices.length; i < len; i++) {
        values.push(allChoices[i].value);
      }

      var data = {
        pollName: $scope.pollName,
        choices: values,
        showUsername: $scope.showUsername
      };

      $http({
        method: 'POST',
        url: '/api/public/addPoll',
        data: data
      }).then(function (response) {
        console.log(response.data);
        if (response.data.success) {
          socket.emit('pollAdded', {
            pollID: response.data.pollID
          });
        } else {
          console.log(response.data);
        }
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=addPollCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.passwords = {
      current: '',
      newPassword: '',
      confirmNew: ''
    };

    $scope.user = null;

    $scope.newUsername = '';
    $scope.delAccountPassword = '';

    $http.get('/api/public/getUserInfo').then(function (response) {
      $scope.user = response.data;
    }).catch(function (error) {
      console.log(error);
    });

    $scope.confirmUsernameChange = function () {
      $scope.changeUsername();
    };

    $scope.changeUsername = function () {
      $http({
        method: 'POST',
        url: '/api/public/changeUsername',
        data: {
          newUsername: $scope.newUsername
        }
      }).then(function (response) {

        if (response.data.success) {
          $scope.user.username = $scope.newUsername;
          $scope.newUsername = '';
        } else {
          console.log(response.data);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDeleteAccount = function () {
      $scope.deleteAccount();
    };

    $scope.deleteAccount = function () {
      $http({
        method: 'POST',
        url: '/api/public/deleteAccount',
        data: {
          password: $scope.delAccountPassword
        }
      }).then(function (response) {
        if (response.data.success) {
          window.location.href = '/';
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    $scope.confirmPasswordChange = function () {
      $scope.changePassword();
    };

    $scope.changePassword = function () {
      $http({
        method: 'POST',
        url: '/api/public/changePassword',
        data: $scope.passwords
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=indexCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myPollsCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.polls = null;

    $http.get('/api/public/getPolls').then(function (response) {
      for (var i = 0, len = response.data.length; i < len; i++) {
        response.data[i].showOptions = false;
      }

      $scope.polls = response.data;
    }).catch(function (error) {});

    var findPollIndexById = function findPollIndexById(pollID) {
      for (var i = 0, len = $scope.polls.length; i < len; i++) {
        if ($scope.polls[i].id_poll === pollID) {
          return i;
        }
      }

      return -1;
    };

    $scope.confirmDeletePoll = function (pollID) {
      $scope.deletePoll(pollID);
    };

    $scope.deletePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/deletePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls.splice(index, 1);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDisablePoll = function (pollID) {
      $scope.disablePoll(pollID);
    };

    $scope.disablePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/disablePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls[index].is_active = false;
        }
      }).catch(function (response) {
        console.log(response);
      });
    };
  }]);
})();
//# sourceMappingURL=myPollsCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myVotesCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.myVotes = null;

    $http.get('/api/public/getVotingInfo').then(function (response) {
      $scope.myVotes = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }]);
})();
//# sourceMappingURL=myVotesCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.passwords = {
      current: '',
      newPassword: '',
      confirmNew: ''
    };

    $scope.user = null;

    $scope.newUsername = '';
    $scope.delAccountPassword = '';

    $http.get('/api/public/getUserInfo').then(function (response) {
      $scope.user = response.data;
    }).catch(function (error) {
      console.log(error);
    });

    $scope.confirmUsernameChange = function () {
      $scope.changeUsername();
    };

    $scope.changeUsername = function () {
      $http({
        method: 'POST',
        url: '/api/public/changeUsername',
        data: {
          newUsername: $scope.newUsername
        }
      }).then(function (response) {

        if (response.data.success) {
          $scope.user.username = $scope.newUsername;
          $scope.newUsername = '';
        } else {
          console.log(response.data);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDeleteAccount = function () {
      $scope.deleteAccount();
    };

    $scope.deleteAccount = function () {
      $http({
        method: 'POST',
        url: '/api/public/deleteAccount',
        data: {
          password: $scope.delAccountPassword
        }
      }).then(function (response) {
        if (response.data.success) {
          window.location.href = '/';
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    $scope.confirmPasswordChange = function () {
      $scope.changePassword();
    };

    $scope.changePassword = function () {
      $http({
        method: 'POST',
        url: '/api/public/changePassword',
        data: $scope.passwords
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=indexCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myPollsCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.polls = null;

    $http.get('/api/public/getPolls').then(function (response) {
      for (var i = 0, len = response.data.length; i < len; i++) {
        response.data[i].showOptions = false;
      }

      $scope.polls = response.data;
    }).catch(function (error) {});

    var findPollIndexById = function findPollIndexById(pollID) {
      for (var i = 0, len = $scope.polls.length; i < len; i++) {
        if ($scope.polls[i].id_poll === pollID) {
          return i;
        }
      }

      return -1;
    };

    $scope.confirmDeletePoll = function (pollID) {
      $scope.deletePoll(pollID);
    };

    $scope.deletePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/deletePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls.splice(index, 1);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDisablePoll = function (pollID) {
      $scope.disablePoll(pollID);
    };

    $scope.disablePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/disablePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls[index].is_active = false;
        }
      }).catch(function (response) {
        console.log(response);
      });
    };
  }]);
})();
//# sourceMappingURL=myPollsCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myVotesCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.myVotes = null;

    $http.get('/api/public/getVotingInfo').then(function (response) {
      $scope.myVotes = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }]);
})();
//# sourceMappingURL=myVotesCtrl.js.map

"use strict";angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]);
'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.passwords = {
      current: '',
      newPassword: '',
      confirmNew: ''
    };

    $scope.user = null;

    $scope.newUsername = '';
    $scope.delAccountPassword = '';

    $http.get('/api/public/getUserInfo').then(function (response) {
      $scope.user = response.data;
    }).catch(function (error) {
      console.log(error);
    });

    $scope.confirmUsernameChange = function () {
      $scope.changeUsername();
    };

    $scope.changeUsername = function () {
      $http({
        method: 'POST',
        url: '/api/public/changeUsername',
        data: {
          newUsername: $scope.newUsername
        }
      }).then(function (response) {

        if (response.data.success) {
          $scope.user.username = $scope.newUsername;
          $scope.newUsername = '';
        } else {
          console.log(response.data);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDeleteAccount = function () {
      $scope.deleteAccount();
    };

    $scope.deleteAccount = function () {
      $http({
        method: 'POST',
        url: '/api/public/deleteAccount',
        data: {
          password: $scope.delAccountPassword
        }
      }).then(function (response) {
        if (response.data.success) {
          window.location.href = '/';
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    $scope.confirmPasswordChange = function () {
      $scope.changePassword();
    };

    $scope.changePassword = function () {
      $http({
        method: 'POST',
        url: '/api/public/changePassword',
        data: $scope.passwords
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=indexCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myPollsCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.polls = null;

    $http.get('/api/public/getPolls').then(function (response) {
      for (var i = 0, len = response.data.length; i < len; i++) {
        response.data[i].showOptions = false;
      }

      $scope.polls = response.data;
    }).catch(function (error) {});

    var findPollIndexById = function findPollIndexById(pollID) {
      for (var i = 0, len = $scope.polls.length; i < len; i++) {
        if ($scope.polls[i].id_poll === pollID) {
          return i;
        }
      }

      return -1;
    };

    $scope.confirmDeletePoll = function (pollID) {
      $scope.deletePoll(pollID);
    };

    $scope.deletePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/deletePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls.splice(index, 1);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDisablePoll = function (pollID) {
      $scope.disablePoll(pollID);
    };

    $scope.disablePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/disablePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls[index].is_active = false;
        }
      }).catch(function (response) {
        console.log(response);
      });
    };
  }]);
})();
//# sourceMappingURL=myPollsCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myVotesCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.myVotes = null;

    $http.get('/api/public/getVotingInfo').then(function (response) {
      $scope.myVotes = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }]);
})();
//# sourceMappingURL=myVotesCtrl.js.map

"use strict";angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]);
'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.passwords = {
      current: '',
      newPassword: '',
      confirmNew: ''
    };

    $scope.user = null;

    $scope.newUsername = '';
    $scope.delAccountPassword = '';

    $http.get('/api/public/getUserInfo').then(function (response) {
      $scope.user = response.data;
    }).catch(function (error) {
      console.log(error);
    });

    $scope.confirmUsernameChange = function () {
      $scope.changeUsername();
    };

    $scope.changeUsername = function () {
      $http({
        method: 'POST',
        url: '/api/public/changeUsername',
        data: {
          newUsername: $scope.newUsername
        }
      }).then(function (response) {

        if (response.data.success) {
          $scope.user.username = $scope.newUsername;
          $scope.newUsername = '';
        } else {
          console.log(response.data);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDeleteAccount = function () {
      $scope.deleteAccount();
    };

    $scope.deleteAccount = function () {
      $http({
        method: 'POST',
        url: '/api/public/deleteAccount',
        data: {
          password: $scope.delAccountPassword
        }
      }).then(function (response) {
        if (response.data.success) {
          window.location.href = '/';
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    $scope.confirmPasswordChange = function () {
      $scope.changePassword();
    };

    $scope.changePassword = function () {
      $http({
        method: 'POST',
        url: '/api/public/changePassword',
        data: $scope.passwords
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=indexCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myPollsCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.polls = null;

    $http.get('/api/public/getPolls').then(function (response) {
      for (var i = 0, len = response.data.length; i < len; i++) {
        response.data[i].showOptions = false;
      }

      $scope.polls = response.data;
    }).catch(function (error) {});

    var findPollIndexById = function findPollIndexById(pollID) {
      for (var i = 0, len = $scope.polls.length; i < len; i++) {
        if ($scope.polls[i].id_poll === pollID) {
          return i;
        }
      }

      return -1;
    };

    $scope.confirmDeletePoll = function (pollID) {
      $scope.deletePoll(pollID);
    };

    $scope.deletePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/deletePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls.splice(index, 1);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDisablePoll = function (pollID) {
      $scope.disablePoll(pollID);
    };

    $scope.disablePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/disablePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls[index].is_active = false;
        }
      }).catch(function (response) {
        console.log(response);
      });
    };
  }]);
})();
//# sourceMappingURL=myPollsCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myVotesCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.myVotes = null;

    $http.get('/api/public/getVotingInfo').then(function (response) {
      $scope.myVotes = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }]);
})();
//# sourceMappingURL=myVotesCtrl.js.map

"use strict";angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]);
'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.passwords = {
      current: '',
      newPassword: '',
      confirmNew: ''
    };

    $scope.user = null;

    $scope.newUsername = '';
    $scope.delAccountPassword = '';

    $http.get('/api/public/getUserInfo').then(function (response) {
      $scope.user = response.data;
    }).catch(function (error) {
      console.log(error);
    });

    $scope.confirmUsernameChange = function () {
      $scope.changeUsername();
    };

    $scope.changeUsername = function () {
      $http({
        method: 'POST',
        url: '/api/public/changeUsername',
        data: {
          newUsername: $scope.newUsername
        }
      }).then(function (response) {

        if (response.data.success) {
          $scope.user.username = $scope.newUsername;
          $scope.newUsername = '';
        } else {
          console.log(response.data);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDeleteAccount = function () {
      $scope.deleteAccount();
    };

    $scope.deleteAccount = function () {
      $http({
        method: 'POST',
        url: '/api/public/deleteAccount',
        data: {
          password: $scope.delAccountPassword
        }
      }).then(function (response) {
        if (response.data.success) {
          window.location.href = '/';
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    $scope.confirmPasswordChange = function () {
      $scope.changePassword();
    };

    $scope.changePassword = function () {
      $http({
        method: 'POST',
        url: '/api/public/changePassword',
        data: $scope.passwords
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=indexCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myPollsCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.polls = null;

    $http.get('/api/public/getPolls').then(function (response) {
      for (var i = 0, len = response.data.length; i < len; i++) {
        response.data[i].showOptions = false;
      }

      $scope.polls = response.data;
    }).catch(function (error) {});

    var findPollIndexById = function findPollIndexById(pollID) {
      for (var i = 0, len = $scope.polls.length; i < len; i++) {
        if ($scope.polls[i].id_poll === pollID) {
          return i;
        }
      }

      return -1;
    };

    $scope.confirmDeletePoll = function (pollID) {
      $scope.deletePoll(pollID);
    };

    $scope.deletePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/deletePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls.splice(index, 1);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDisablePoll = function (pollID) {
      $scope.disablePoll(pollID);
    };

    $scope.disablePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/disablePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls[index].is_active = false;
        }
      }).catch(function (response) {
        console.log(response);
      });
    };
  }]);
})();
//# sourceMappingURL=myPollsCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myVotesCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.myVotes = null;

    $http.get('/api/public/getVotingInfo').then(function (response) {
      $scope.myVotes = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }]);
})();
//# sourceMappingURL=myVotesCtrl.js.map

"use strict";angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]);
'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.passwords = {
      current: '',
      newPassword: '',
      confirmNew: ''
    };

    $scope.user = null;

    $scope.newUsername = '';
    $scope.delAccountPassword = '';

    $http.get('/api/public/getUserInfo').then(function (response) {
      $scope.user = response.data;
    }).catch(function (error) {
      console.log(error);
    });

    $scope.confirmUsernameChange = function () {
      $scope.changeUsername();
    };

    $scope.changeUsername = function () {
      $http({
        method: 'POST',
        url: '/api/public/changeUsername',
        data: {
          newUsername: $scope.newUsername
        }
      }).then(function (response) {

        if (response.data.success) {
          $scope.user.username = $scope.newUsername;
          $scope.newUsername = '';
        } else {
          console.log(response.data);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDeleteAccount = function () {
      $scope.deleteAccount();
    };

    $scope.deleteAccount = function () {
      $http({
        method: 'POST',
        url: '/api/public/deleteAccount',
        data: {
          password: $scope.delAccountPassword
        }
      }).then(function (response) {
        if (response.data.success) {
          window.location.href = '/';
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    $scope.confirmPasswordChange = function () {
      $scope.changePassword();
    };

    $scope.changePassword = function () {
      $http({
        method: 'POST',
        url: '/api/public/changePassword',
        data: $scope.passwords
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=indexCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myPollsCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.polls = null;

    $http.get('/api/public/getPolls').then(function (response) {
      for (var i = 0, len = response.data.length; i < len; i++) {
        response.data[i].showOptions = false;
      }

      $scope.polls = response.data;
    }).catch(function (error) {});

    var findPollIndexById = function findPollIndexById(pollID) {
      for (var i = 0, len = $scope.polls.length; i < len; i++) {
        if ($scope.polls[i].id_poll === pollID) {
          return i;
        }
      }

      return -1;
    };

    $scope.confirmDeletePoll = function (pollID) {
      $scope.deletePoll(pollID);
    };

    $scope.deletePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/deletePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls.splice(index, 1);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDisablePoll = function (pollID) {
      $scope.disablePoll(pollID);
    };

    $scope.disablePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/disablePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls[index].is_active = false;
        }
      }).catch(function (response) {
        console.log(response);
      });
    };
  }]);
})();
//# sourceMappingURL=myPollsCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myVotesCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.myVotes = null;

    $http.get('/api/public/getVotingInfo').then(function (response) {
      $scope.myVotes = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }]);
})();
//# sourceMappingURL=myVotesCtrl.js.map

"use strict";angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("addPollCtrl",["$scope","$http","$sce",function(o,e,l){var n=io();o.pollName="",o.choicesHTML,o.showUsername=!0,o.renderChoices=function(){for(var e=Number(o.numberOfChoices),n=[],t=1;t<=e;t++)n.push('<input class="form-control choices" type="text" placeholder="Enter"/>');o.choicesHTML=l.trustAsHtml(n.join(""))},o.addPoll=function(){for(var l=Array.prototype.slice.call($(".choices")),t=[],c=0,a=l.length;c<a;c++)t.push(l[c].value);var s={pollName:o.pollName,choices:t,showUsername:o.showUsername};e({method:"POST",url:"/api/public/addPoll",data:s}).then(function(o){console.log(o.data),o.data.success?n.emit("pollAdded",{pollID:o.data.pollID}):console.log(o.data)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]),angular.module("realTimePolls").controller("indexCtrl",["$scope","$http",function(o,e){o.passwords={current:"",newPassword:"",confirmNew:""},o.user=null,o.newUsername="",o.delAccountPassword="",e.get("/api/public/getUserInfo").then(function(e){o.user=e.data}).catch(function(o){console.log(o)}),o.confirmUsernameChange=function(){o.changeUsername()},o.changeUsername=function(){e({method:"POST",url:"/api/public/changeUsername",data:{newUsername:o.newUsername}}).then(function(e){e.data.success?(o.user.username=o.newUsername,o.newUsername=""):console.log(e.data)}).catch(function(o){console.log(o)})},o.confirmDeleteAccount=function(){o.deleteAccount()},o.deleteAccount=function(){e({method:"POST",url:"/api/public/deleteAccount",data:{password:o.delAccountPassword}}).then(function(o){o.data.success&&(window.location.href="/")}).catch(function(o){console.log(o)})},o.confirmPasswordChange=function(){o.changePassword()},o.changePassword=function(){e({method:"POST",url:"/api/public/changePassword",data:o.passwords}).then(function(o){console.log(o)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myPollsCtrl",["$scope","$http",function(o,e){o.polls=null,e.get("/api/public/getPolls").then(function(e){for(var l=0,n=e.data.length;l<n;l++)e.data[l].showOptions=!1;o.polls=e.data}).catch(function(o){});var l=function(e){for(var l=0,n=o.polls.length;l<n;l++)if(o.polls[l].id_poll===e)return l;return-1};o.confirmDeletePoll=function(e){o.deletePoll(e)},o.deletePoll=function(n){e({method:"POST",url:"/api/public/deletePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&o.polls.splice(t,1)}).catch(function(o){console.log(o)})},o.confirmDisablePoll=function(e){o.disablePoll(e)},o.disablePoll=function(n){e({method:"POST",url:"/api/public/disablePoll",data:{pollID:n}}).then(function(e){var t=l(n);-1!==t&&(o.polls[t].is_active=!1)}).catch(function(o){console.log(o)})}}]),angular.module("realTimePolls").controller("myVotesCtrl",["$scope","$http",function(o,e){o.myVotes=null,e.get("/api/public/getVotingInfo").then(function(e){o.myVotes=e.data}).catch(function(o){console.log(o)})}]);
'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.passwords = {
      current: '',
      newPassword: '',
      confirmNew: ''
    };

    $scope.user = null;

    $scope.newUsername = '';
    $scope.delAccountPassword = '';

    $http.get('/api/public/getUserInfo').then(function (response) {
      $scope.user = response.data;
    }).catch(function (error) {
      console.log(error);
    });

    $scope.confirmUsernameChange = function () {
      $scope.changeUsername();
    };

    $scope.changeUsername = function () {
      $http({
        method: 'POST',
        url: '/api/public/changeUsername',
        data: {
          newUsername: $scope.newUsername
        }
      }).then(function (response) {

        if (response.data.success) {
          $scope.user.username = $scope.newUsername;
          $scope.newUsername = '';
        } else {
          console.log(response.data);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDeleteAccount = function () {
      $scope.deleteAccount();
    };

    $scope.deleteAccount = function () {
      $http({
        method: 'POST',
        url: '/api/public/deleteAccount',
        data: {
          password: $scope.delAccountPassword
        }
      }).then(function (response) {
        if (response.data.success) {
          window.location.href = '/';
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    $scope.confirmPasswordChange = function () {
      $scope.changePassword();
    };

    $scope.changePassword = function () {
      $http({
        method: 'POST',
        url: '/api/public/changePassword',
        data: $scope.passwords
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=indexCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myPollsCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.polls = null;

    $http.get('/api/public/getPolls').then(function (response) {
      for (var i = 0, len = response.data.length; i < len; i++) {
        response.data[i].showOptions = false;
      }

      $scope.polls = response.data;
    }).catch(function (error) {});

    var findPollIndexById = function findPollIndexById(pollID) {
      for (var i = 0, len = $scope.polls.length; i < len; i++) {
        if ($scope.polls[i].id_poll === pollID) {
          return i;
        }
      }

      return -1;
    };

    $scope.confirmDeletePoll = function (pollID) {
      $scope.deletePoll(pollID);
    };

    $scope.deletePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/deletePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls.splice(index, 1);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDisablePoll = function (pollID) {
      $scope.disablePoll(pollID);
    };

    $scope.disablePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/disablePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls[index].is_active = false;
        }
      }).catch(function (response) {
        console.log(response);
      });
    };
  }]);
})();
//# sourceMappingURL=myPollsCtrl.js.map

'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myVotesCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.myVotes = null;

    $http.get('/api/public/getVotingInfo').then(function (response) {
      $scope.myVotes = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }]);
})();
//# sourceMappingURL=myVotesCtrl.js.map
