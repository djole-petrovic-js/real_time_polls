( function() {

  'use strict';

  var
    $pUsername         = $('#pUsername'),
    $pEmail            = $('#pEmail');

  var
    $username        = $('#username'),
    $password        = $('#password'),
    $confirmPassword = $('#confirmPassword'),
    $errors          = $('#errors'),
    $email           = $('#email');

  $errors.hide();

  var printLiElements = function(content) {
    return '<li class="list-group-item">' + content + '</li>';
  }

  var renderErrors = function(errors) {
    var htmlOutput = [];

    for ( var i = 0, len = errors.length ; i < len ; i++ ) {
      htmlOutput.push(printLiElements(errors[i]));
    }

    $errors.html(htmlOutput.join('')).show();
  }

  $('#btnCheckEmail').on('click',function(){
    var email = $email.val();

    if ( !email ) {
      return $pEmail.text('Please enter email...').show();
    }

    $pEmail.text('Loading...');

    $.ajax({
      type:'POST',
      url:'/api/public/checkEmail',
      dataType:'json',
      data:{
        email:email
      }
    }).done(function(response){
      if ( response.success ) {
        $pEmail.text(response.message);
      }

    }).catch(function(err){
      var error = JSON.parse(err);

      $pEmail.text(error.message);
    })
  });

  $('#btnCheckUsername').on('click',function() {
    var username = $username.val();

    if ( !username ) {
      return $pUsername.text('Please enter username...').show();
    }

    $pUsername.text('loading...');

    $.ajax({
      type:'POST',
      url:'/api/public/checkUsername',
      data:{
        username:username
      },  
      dataType:'json'
    }).done(function(response){
      $pUsername.text(response.message);
    }).catch(function(err){
      var error = JSON.parse(err.responseText);
      
    });
  });

  $('#form').on('submit',function(event) {
    var errors = [];

    var data = {
      username:$username.val(),
      password:$password.val(),
      confirmPassword:$confirmPassword.val(),
      email:$email.val()
    }

    var form = new Form(data);

    form
      .field('username')
      .validate('required','Username is required...')
      .validate('minlength',5,'Username must have a least 5 characters...')
      .validate('maxlength',20,'Username is too long...')
      .validate('regex',/[a-zA-Z0-9_\-]{5,20}/g,'Username is not properly formated...');

    form
      .field('password')
      .validate('required','Password is required')
      .validate('equalsAnotherField','confirmPassword','Passwords doesn\'t match...')
      .validate('minlength',8,'Password must have a least 8 characters...')
      .validate('maxlength',20,'Password is too long...')
      .validate('regex',/[a-zA-Z0-9_\-]{5,20}/g,'Password is not properly formated');

    form
      .field('email')
      .validate('required','Email is required')
      .validate('email','Not an email...');

    if ( !form.isValid() ) {
      event.preventDefault();

      renderErrors(form.getOnlyFirstErrorForEachField());
    }
  });

}());