function getRule(ip, name) {
  var device = simpleStorage.get(ip);
  if (device === undefined) {
    return null;
  } else {
    for (var i = 0; i < device.rules.length; i++) {
      if (device.rules[i].name === name) {
        return device.rules[i];
      }
    }
  }
  return null;
}
function getRuleUri(ip, fullPath) {
  return 'https://' + ip + '/mgmt/tm/ltm/rule/' + fullPath.replace(/\//g, '~');
}
function getRuleName(ip, combined) {
  return combined.replace(ip, '');
}
var rules = { };
var iRuleHoneyText = '## This iRule was built with the honeyb.io iRule editor. Check it out!\n## https://honeyb.io/irule-editor or contact us at help@honeyb.io\n## Need help editing this iRule or optimizing it? Contact our F5 geniuses!\n\n';
var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
  matchBrackets: true,
  lineNumbers: true,
  indentUnit: 2,
  indentAuto: true,
  foldGutter: {
    rangeFinder: new CodeMirror.fold.combine(CodeMirror.fold.brace, CodeMirror.fold.comment)
  },
  gutters: ["CodeMirror-lint-markers", "CodeMirror-linenumbers", "CodeMirror-foldgutter"],
  theme : "bespin",
  extraKeys: {
    "Ctrl-Space": "autocomplete",
    Tab: function(cm) {
      var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
      cm.replaceSelection(spaces);
    }
  },
  mode: "irule",
  lint: true,
});
$(document).ready(function() {
  $("#first-view").hide();
  $('#1-bigip').hide();
  $('#2-bigip').hide();
  $('#3-bigip').hide();
  $('#4-bigip').hide();
  $('#5-bigip').hide();
  $('#6-bigip').hide();
  $('#7-bigip').hide();
  $('#8-bigip').hide();
  $('#9-bigip').hide();
  $('#10-bigip').hide();
  $("#help-panel").hide();
  if (document.cookie.match(/closeHelpPanel=true/)) {
    // null
  } else {
    $("#help-panel").slideDown();
  }
  if (simpleStorage.index().length === 0) {
    var myData = {
      settings: { },
      rules: []
    };
    simpleStorage.set('offline_data', myData);
  } else {
    var localData = simpleStorage.get('offline_data');
    for (var i = 0; i < localData.rules.length; i++) {
      $('#offline-rule-list').append('<li><a id="local-rule-' + i + '" href="#">' + localData.rules[i].name + '</a></li>')
    }
  }
  if (simpleStorage.index().length > 1) {
    for (var j = 1; j < simpleStorage.index().length; j++) {
      ip = simpleStorage.index()[j];
      var data = simpleStorage.get(ip);
      for (var i = 0; i < data.rules.length; i++) {
        if (data.rules[i].name.charAt(0) === '_') {
          // Don't show system rules
        } else {
          $('#' + j + '-bigip-rule-list').append('<li><a name="' + ip + '" id="' + ip + data.rules[i].name + '" href="#">' + data.rules[i].name + '</a></li>');
        }
      }
      $('#' + j + '-bigip').text(ip);
      $('#' + j + '-bigip').show();
    }
  }
  $("#side-menu").metisMenu();

  $(".CodeMirror").height(function () {
    return $("#codemirror-container").height();
  });
});
$(window).resize(function(){
  $(".CodeMirror").height(function () {
    return $("#codemirror-container").height();
  });
});
$('#close-help-panel').mouseover().css( 'cursor', 'pointer' );
$('#close-help-panel').click(function() {
  var d = new Date();
  d.setDate(d.getDate() + 30);
  document.cookie="closeHelpPanel=true; expires=" + d.toUTCString();
  $("#help-panel").slideUp();
});
$('#toggle-side').click(function(e) {
  e.preventDefault();
  $('#wrapper').toggleClass('toggled');
});
$('#clear').click(function() {
  editor.doc.setValue(iRuleHoneyText);
});
$('#random-rule').click(function() {
  var file = 'irules/' + (1 + Math.floor(Math.random() * 21)) + '.txt';

  $.get(file, function(data) {
    editor.doc.setValue(iRuleHoneyText + data);
  });
});
$('#upload-other').click(function() {
  $('#upload-response').hide();
  $('#upload-form-body').show();
});
$('#add-bigip').click(function () {
  $('#discover-response').hide();
  $('#discover-body').show();
});
$('#upload-form').on('submit', function(e){
  e.preventDefault();
  var ip, user, pass, myRule, ruleName, myData;
  if ($('#upload-device').val() === 'new') {
    ip = e.target.ipAddr.value;
    user = e.target.user.value;
    pass = e.target.pass.value;
  } else {
    ip = $('#upload-device').val();
    var device = simpleStorage.get(ip);
    user = device.user;
    pass = device.pass;
  }
  myRule = editor.doc.getValue();
  if ($('#rule-name').val() === 'new') {
    ruleName = $('#new-rule-text').val();
    var uri = 'https://' + ip + '/mgmt/tm/ltm/rule';
    myData = JSON.stringify({'apiAnonymous': myRule, 'name': ruleName});
    $.ajax({
      url: uri,
      method: 'POST',
      headers: {
        "Authorization": "Basic " + btoa(user + ":" + pass),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: myData,
    }).then(function(data) {
      //$('#f5-help-form').replaceWith(data);
      var response = '<div id="upload-response" style="padding: 20px;"><center><h3>Success!</h3></center></div>';
      $('#upload-form-body').hide();
      $('#upload-response').replaceWith(response);
    }, function(jqXHR) {
      var response = '<div id="upload-response" style="padding: 20px;"><center><h3>Error ' + jqXHR.status + ': ' + jqXHR.statusText + '</h3></center>';
      response += '<p>' + jqXHR.responseText + '</p></div>';
      $('#upload-form-body').hide();
      $('#upload-response').replaceWith(response);
    });
  } else {
    ruleName = $('#rule-name').val();
    myData = JSON.stringify({'apiAnonymous': myRule});
    var uri = getRuleUri(ip, '/Common/' + ruleName);
    $.ajax({
      url: uri,
      method: 'PUT',
      headers: {
        "Authorization": "Basic " + btoa(user + ":" + pass),
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      data: myData,
    }).then(function(data) {
      var response = '<div id="upload-response" style="padding: 20px;"><center><h3>Success!</h3></center></div>';
      $('#upload-form-body').hide();
      $('#upload-response').replaceWith(response);
    }, function(jqXHR) {
      var response = '<div id="upload-response" style="padding: 20px;"><center><h3>Error ' + jqXHR.status + ': ' + jqXHR.statusText + '</h3></center>';
      response += '<p>' + jqXHR.responseText + '</p></div>';
      $('#upload-form-body').hide();
      $('#upload-response').replaceWith(response);
    });
  }
});
$('#save-rule-offline').click(function () {
  ruleNum = $('#form-localrule-name').val();
  var ruleText = editor.doc.getValue();
  var offlineData = simpleStorage.get('offline_data');
  offlineData.rules[ruleNum].apiAnonymous = ruleText;
  simpleStorage.set('offline_data', offlineData);
});
$('#manage-data').click(function () {
  //var myStorage = simpleStorage.index();
  var deviceTable = '<table id="offline-device-table" class="table table-bordered table-condensed"><tr><th>Name</th><th>User</th><th>Pass</th><th>Delete</th></tr>';
  if (simpleStorage.index().length > 1) {
    for (var i = 1; i < simpleStorage.index().length; i++) {
      var thisDevice = simpleStorage.get(simpleStorage.index()[i])
      deviceTable += '<tr><td>' + simpleStorage.index()[i] + '</td><td>' +
      thisDevice.user + '</td><td>' + thisDevice.pass.replace(/./g, '*') + '</td><td>' +
      '<a href="#" id="1-storage-table">Remove</a></td></tr>';
    }
    deviceTable += '</table>';
    $('#offline-device-table').replaceWith(deviceTable);
  } else {
    $('#offline-device-table').replaceWith(deviceTable + '</table>');
  }
  var ruleTable = '<table id="offline-rule-table" class="table table-bordered table-condensed"><tr><th>Name</th><th>Delete</th></tr>';
  var ruleList = simpleStorage.get('offline_data');
  if (ruleList.rules === undefined) {
    $('#offline-rule-table').replaceWith(ruleTable + '</table>');
  } else {
    for (var i = 0; i < ruleList.rules.length; i++) {
      ruleTable += '<tr><td>' + ruleList.rules[i].name + '</td>' +
      '<td><a href="#" id="' + i + '-rule-table">Remove</a></td></tr>';
    }
    $('#offline-rule-table').replaceWith(ruleTable + '</table>');
  }
});
$('#offline-rule-list').on("click", "li", function (e) {
  if (e.target.id === undefined) {
    return;
  }
  var localRules = simpleStorage.get('offline_data');
  var myRule = localRules.rules[e.target.id.replace(/local-rule-/, '')];
  if (myRule !== undefined) {
    $('input[name="localRule"]').val(e.target.id.replace(/local-rule-/, ''));
    if (myRule.apiAnonymous.match(/honeyb/)) {
      editor.doc.setValue(myRule.apiAnonymous);
    } else {
      editor.doc.setValue(iRuleHoneyText + myRule.apiAnonymous);
    }
  }
  $('#form-rule-name').val(e.target.text).trigger("change");
});
$('[id$=bigip-rule-list]').on("click", "li", function (e) {
  if (e.target.id === undefined) {
    if (e.target.name === undefined) {
      return;
    }
  }
  var ip = e.target.name;
  var name = e.target.id.replace(ip, '');
  var myRule = getRule(ip, name);
  if (myRule === null || myRule.apiAnonymous === undefined) {
    editor.doc.setValue(iRuleHoneyText + '# Blank Rule\n');
  } else {
    if (myRule.apiAnonymous.match(/honeyb/)) {
      editor.doc.setValue(myRule.apiAnonymous);
      $('input[name="deviceIp"]').val(ip);
      $('input[name="ruleName"]').val(myRule.name);
      $('input[name="rulePath"]').val(myRule.fullPath);
    } else {
      editor.doc.setValue(iRuleHoneyText + myRule.apiAnonymous);
      $('input[name="deviceIp"]').val(ip);
      $('input[name="ruleName"]').val(myRule.name);
      $('input[name="rulePath"]').val(myRule.fullPath);
    }
  }
  $('#form-rule-name').val(e.target.text).trigger("change");
});
$('#device-table-div').on("click", "a", function(e) {
  simpleStorage.deleteKey(simpleStorage.index()[e.target.id.replace(/-storage-table/, '')]);
});
$('#rule-table-div').on("click", "a", function (e) {
  var index = e.target.id.replace(/-rule-table/, '');
  var data = simpleStorage.get('offline_data');
  data.rules.splice(index, 1);
  simpleStorage.set('offline_data', data);
});
$('#f5-help-form').on('submit', function(e) {
  e.preventDefault();
  $.post("contact.php", {
    firstName: e.target.firstName.value,
    lastName: e.target.lastName.value,
    company: e.target.company.value,
    emailAddress: e.target.emailAddress.value,
    contactMessage: e.target.contactMessage.value
   }).done(function(data) {
     $('#f5-help-form').replaceWith(data);
   });
});
$('#create-offline-form').on('submit', function(e) {
  e.preventDefault();
  var data = simpleStorage.get('offline_data');
  myRule = {
    name: e.target.name.value,
    apiAnonymous: ''
  };
  data.rules.push(myRule);
  simpleStorage.set('offline_data', data);
  $('#new-offline-modal').modal('toggle');
  $('#offline-rule-list').append('<li><a id="local-rule-' + (data.rules.length - 1) + '" href="#">' + e.target.name.value + '</a></li>')
});
$("#discover-form").on('submit', function(e){
  e.preventDefault();
  var myRules = [];
  var ip = e.target.ipAddr.value;
  $.ajax({
    url: "https://" + ip + "/mgmt/tm/ltm/rule",
    headers: {
      "Authorization": "Basic " + btoa(e.target.user.value + ":" + e.target.pass.value)
    },
  }).then(function(data) {
    var k;
    var refresh = false;
    if (simpleStorage.get(ip) === undefined) {
      k = simpleStorage.index().length;
    } else {
      for (var l = 0; l < simpleStorage.index().length; l++) {
        if (simpleStorage.index()[l] == ip) {
          k = l;
          $('#' + k + '-bigip-rule-list').empty();
        }
      }
    }
    if (data.items !== undefined) {
      for (var i = 0; i < data.items.length; i++) {
        if (data.items[i].name.charAt(0) === '_') {
          // Don't show system rules
        } else {
          $('#' + k + '-bigip-rule-list').append('<li><a name="' + ip +
          '" id="' + ip + data.items[i].name + '" href="#">' + data.items[i].name + '</a></li>');
          myRules.push(data.items[i]);
        }
      }
    }
    $('#' + k + '-bigip').text(e.target.ipAddr.value);
    $('#' + k + '-bigip').show();
    var myBigip = {
      user: e.target.user.value,
      pass: e.target.pass.value,
      rules: myRules
    };
    simpleStorage.set(e.target.ipAddr.value, myBigip);
    var response = '<div id="discover-response" style="padding: 20px;"><center><h3>Success!</h3></center></div>';
    $('#discover-body').hide();
    $('#discover-response').replaceWith(response);
    $('#discover-response').show();
  }, function(jqXHR) {
    var response = '<div id="discover-response" style="padding: 20px;"><center><h3>Error Connecting</h3></center>' +
    '<p>jQuery doesn\'t give back much information, this could be due to invalid username/password, ' +
    'bad hostname or ip, etc. You can check your developers tools console or network to see what the error was.</p></div>';
    $('#discover-body').hide();
    $('#discover-response').replaceWith(response);
    $('#discover-response').show();
  });
});
$('#upload-device').change(function(e) {
  if ($('#upload-device').val() === 'new') {
    $('#new-device').show();
  } else {
    $('#new-device').hide();
    var device = simpleStorage.get($('#upload-device').val());
    var optionsAsString = '<option value="new">New Rule</option>';
    for (var i = 0; i < device.rules.length; i++) {
      optionsAsString += "<option value='" + device.rules[i].name + "'>" + device.rules[i].name + "</option>";
    }
    $('#rule-name').find('option').remove().end().append($(optionsAsString));
  }
});
$('#rule-name').change(function(e) {
  if ($('#rule-name').val() === 'new') {
    $('#new-rule').show();
  } else {
    $('#new-rule').hide();
  }
});
$('#upload-other').click(function (e) {
  var optionsAsString = '<option value="new">New Device</option>';
  var deviceList = simpleStorage.index();
  if (deviceList !== undefined) {
    for(var i = 1; i < deviceList.length; i++) {
      optionsAsString += "<option value='" + deviceList[i] + "'>" + deviceList[i] + "</option>";
    }
    $('#upload-device').find('option').remove().end().append($(optionsAsString));
  }
});
$("#export-text").click(function() {
    this.href = "data:text/plain;charset=utf-8," + encodeURIComponent(editor.doc.getValue()), this.download = "irule.txt"
});
$("#form-rule-name").change(function () {
  $('#selected-rule').text($('#form-rule-name')[0].value);
});
