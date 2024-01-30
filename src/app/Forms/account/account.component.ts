import { Component, HostListener, Inject, NgZone, OnInit, Renderer2 } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { Response } from 'src/app/Bo/response.model';
import { User } from 'src/app/Bo/user.model';
import { Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { InfiNotification } from 'src/app/Bo/notification.model';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  isLoginPage: boolean = true;
  isForgetPassword: boolean = false;
  isOtp: boolean = false;
  otp: string = "2205";
  user: any = User;
  tempuser: any = User;
  showPassword: boolean = false;
  rgxExpForEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  rgxExpForPassword = /^(?=.*[a-z])(?=.*)(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  OTPinterval: number = 60;
  OTPResend: boolean = false;
  isSpinner = false;
  checkYourEmail: boolean = false;
  confirmationEmail: boolean = false;
  type: string = "";
  isconfirmpassword: boolean = false;
  newUser: any;
  routePath: string = "";
  otherDetails: boolean = false;
  isCreateAccount: boolean = false;
  IsReset: boolean = false;
  confirmpswd: string = "";
  // ------------------------


  constructor(public authService: AuthService, private activatedRoute: ActivatedRoute) {
    setTimeout(() => { this.authService.windowHeight = window.innerHeight; this.authService.windowWidth = window.innerWidth }, 100);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.authService.windowHeight = window.innerHeight; this.authService.windowWidth = window.innerWidth;
  }
  ngOnInit() {
    this.clearAll();
    // this.activatedRoute.queryParams.subscribe(params => {
    //   const emailId = params['email'];
    //   this.user.Email = emailId != null && emailId != "" ? emailId : "";
    // });
    let path = this.activatedRoute.snapshot.url;
    if (path.length == 2) {
      this.newUser = path.toString().split(',')[1];
    }


    if (path.length == 2) {
      this.routePath = path.toString();
      if (path.toString().split(',')[0] == "register") {
        this.type = path.toString().split(',')[0];
        this.otherDetails = true;
        this.isCreateAccount = false;
        this.isconfirmpassword = true;
        this.isLoginPage = false;
        //  this.IsReset = path.toString().split(',')[1].split('-')[0] == "Reset";
      }
      this.isconfirmpassword = true;
      console.log(this.routePath);
    }
  }
  clearAll() {
    this.isLoginPage = true;
    this.isForgetPassword = false;
    this.clearData();
  }
  clearData() {

    this.checkYourEmail = false;
    this.confirmationEmail = false;
    this.isOtp = false;
    // this.otp = "2205";
    this.user = new User();
    this.tempuser = new User();
    this.showPassword = false;
    this.OTPinterval = 60;
    this.OTPResend = false;
    this.isSpinner = false;
  }
  signin() {

    if (!this.isSpinner) {

      this.isSpinner = true;
      var formData = new FormData();
      this.user.Username = this.user.Username.trim();
      var _this = this;
      if ((_this.user.Username != undefined && _this.user.Username != null) && (_this.user.Password != undefined && _this.user.Password != null)) {
        formData.append("User", JSON.stringify(this.user))
        this.authService.signin(formData, function (result: Response) {
          if (result.Status == true) {
            _this.clearData();
            window.location.href = environment.mailerui + result.Item["User"].Id;
          }
          else {
            if (result.Status == false) {
              _this.isLoginPage = true;
              _this.isForgetPassword = false;
            }
            alert(result.Message);
          }
          _this.isSpinner = false;

        });
      }

    }

  }
  signup() {
    var _this = this;
    if (!this.isSpinner) {
      this.isSpinner = true;
      // if (this.tempuser.Username != this.user.Username) {
      //   alert("Incorrect username please resent OTP")
      //   return;
      // }
      var formData = new FormData();
      this.user.Username = this.user.Username.trim();
      formData.append("User", JSON.stringify(this.user))
      var sFormData = new FormData();
      this.authService.signup(formData, function (result: Response) {
        if (result.Status == true) {
          // _this.isLoginPage = true;
          _this.clearAll();
          sFormData.append("UserId", result.Item["User"].Id);
          sFormData.append("Type", "Free");
          _this.WelcomeNotification(result.Item["User"]);
          _this.authService.createSubscription(sFormData, function (result2: Response) {
          });
          window.location.href = environment.mailerui + result.Item["User"].Id;
        }
        else {
          alert(result.Message)
        }
        _this.clearData();
      });
    }

  }
  sendOtp() {
    this.OTPResend = false;
    var interval = setInterval(() => { this.OTPinterval > 0 ? this.OTPinterval-- : (this.OTPinterval = 60, this.OTPResend = true, clearInterval(interval)); }, 1000);
    this.isOtp = true
    var _this = this;
    var formData = new FormData();
    formData.append("User", JSON.stringify(this.user));
    this.authService.otp(formData, function (result: Response) {
      if (result.Status == true) {
        // _this.isOtp = true
        _this.tempuser = result.Item["User"];
        _this.otp = _this.tempuser.OTP;
      }
      else {
        // _this.isOtp = false
      }
    });


  }
  validate(section: string, action: string, field: string) {
    this.checkYourEmail = false;
    this.confirmationEmail = false;
    if (section == 'R') {
      if ((this.user.Username.trim() == "" || !this.rgxExpForEmail.test(this.user.Username)) && (field == 'U' || field == 'A')) { $("#txtUsername").focus(); $("#txtUsername").css('border-color', 'red'); $("#unerror").text(this.user.Username.trim() == "" ? "EmailId can't empty! " : "Invalid EmailId"); return false; }
      $("#txtUsername").css('border-color', ''); $("#unerror").text("");
      if ((this.user.Password.trim() == "" || !this.rgxExpForPassword.test(this.user.Password)) && (field == 'P' || field == 'A')) { $("#txtPassword").focus(); $("#txtPassword").css('border-color', 'red'); $("#pserror").text(this.user.Password.trim() == "" ? "Password can't empty!" : "Use 8 or more characters with a mix of letters, numbers & symbols"); return false; }
      $("#txtPassword").css('border-color', ''); $("#pserror").text("");
      if (($("#txtConfirmPassword").val().trim() == "" || $("#txtConfirmPassword").val().trim() != this.user.Password.trim()) && (field == 'CC' || field == 'A')) { $("#txtConfirmPassword").focus(); $("#txtConfirmPassword").css('border-color', 'red'); $("#cpserror").text("Password and confirm password is mismatch"); return false; }
      $("#txtConfirmPassword").css('border-color', ''); $("#cpserror").text("");
    }
    if (section == 'L') {
      if ((this.user.Username.trim() == "" || !this.rgxExpForEmail.test(this.user.Username)) && (field == 'U' || field == 'A')) { $("#txtLUsername").focus(); $("#txtLUsername").css('border-color', 'red'); $("#txtLUsernameerror").text(this.user.Username.trim() == "" ? "EmailId can't empty! " : "Invalid EmailId"); return false; }
      $("#txtLUsername").css('border-color', ''); $("#txtLUsernameerror").text("");
      if ((this.user.Password.trim() == "" || !this.rgxExpForPassword.test(this.user.Password)) && (field == 'P' || field == 'A')) { $("#txtLPassword").focus(); $("#txtLPassword").css('border-color', 'red'); $("#txtLPassworderror").text(this.user.Password.trim() == "" ? "Password can't empty!" : "Use 8 or more characters with a mix of letters, numbers & symbols"); return false; }
      $("#txtLPassword").css('border-color', ''); $("#txtLPassworderror").text("");
    }
    if (section == 'F') {
      if ((this.user.Username.trim() == "" || !this.rgxExpForEmail.test(this.user.Username)) && (field == 'U' || field == 'A')) { $("#fpusername").focus(); $("#fpusername").css('border-color', 'red'); $("#fpunerror").text(this.user.Username.trim() == "" ? "EmailId can't empty!" : "Invalid Email"); return false; }
      $("#fpusername").css('border-color', ''); $("#fpunerror").text("");
    }
    action == 'resend' ? (this.isOtp = false, $("#txtOtp").css('border-color', ''), $("#txtOtp").val(""), $("#otperror").text(""), this.sendOtp()) : '';
    if (this.isOtp && action != 'resend' && (field == 'O' || field == 'A')) {
      if ($("#txtOtp").val().trim() != this.otp) {
        $("#txtOtp").css('border-color', 'red');
        $("#otperror").text("OTP Invalid")
        this.isSpinner = false;
        return;
      } $("#txtOtp").css('border-color', ''); $("#otperror").text("")
    }
    action == 'click' ? this.ExistUser(section) : '';
    return true;
  }
  onSignIn(googleUser: any) {
    console.log(googleUser)
  }
  ExistUser(section: string) {
    var _this = this;
    var formData = new FormData();
    formData.append("User", this.user.Username.trim())
    this.authService.ExistUser(formData, function (result: Response) {
      section == 'R' ? result.Status ? ($("#txtUsername").focus(), $("#txtUsername").css('border-color', 'red'), $("#unerror").text(result.Message)) : _this.isOtp ? ($("#txtOtp").val().trim() == _this.otp ? _this.signup() : '') : _this.sendOtp() : $("#unerror").text("");
      section == 'L' ? result.Status ? ($("#txtLUsernameerror").text(), _this.signin()) : ($("#txtLUsername").focus(), $("#txtLUsername").css('border-color', 'red'), $("#txtLUsernameerror").text("Couldn’t find your account"), _this.isLoginPage = false, _this.checkYourEmail = false, _this.type = "New") : $("#txtLUsernameerror").text();
      section == 'F' ? result.Status ? ($("#fpunerror").text(""), _this.ForgotPassword()) : ($("#fpusername").focus(), $("#fpusername").css('border-color', 'red'), $("#fpunerror").text("User doesn't exist ")) : $("#fpunerror").text("");
    });
  }
  ForgotPassword() {
    if (!this.isSpinner) {
      this.isSpinner = true;
      var formData = new FormData();
      this.user.Username = this.user.Username.trim();
      var _this = this;
      formData.append("User", JSON.stringify(this.user))
      this.authService.ForgotPassword(formData, function (result: Response) {
        if (result.Status == true) {
          alert("Password sent to your EmailId");
          _this.clearAll()
        }
        else {
          alert(result.Message);
        }
        _this.isSpinner = false;
        _this.clearData();
      });
    }
  }
  WelcomeNotification(user: User) {
    var notify = new InfiNotification();
    notify.Heading = "Welcome To Infiemail";
    notify.Body = "Hi " + user.Username.split('@')[0] + ". Happy to Welcome You on Infiemail Family.Now you are in Free Plan Please Activate Your Account to Use All Infiemail Features.";
    notify.Type = "Welcome";
    notify.UserId = user.Id;
    var formData = new FormData();
    formData.append("Notification", JSON.stringify(notify));
    this.authService.CreateNotification(formData, (res: Response) => {
    })
  }


  RegisterNewUser(user: User) {
    if (user.Firstname != null && user.LastName != null && user.Username != null) {

      // if (this.type == "New") {
      // this.checkYourEmail = true;
      // this.confirmationEmail = false;

      this.authService.Register(user, (res: Response) => {
        if (res.Status == true) {
          this.checkYourEmail = false;
          this.confirmationEmail = false;
          this.isconfirmpassword = true;
          alert("Email sent Successfully");


        }
        else
          alert("User Already Exists!");
      })
      // }

    }
    else {
      alert("error");
      return;
    }
  }
  chkPassword(pswd: string) {
    let path = this.activatedRoute.snapshot.url;
    var details = path.toString().split(',')[1];

    this.authService.SetPassword(pswd, details, (res: Response) => {
      if (res.Status == true) {
        this.isconfirmpassword = true;
        alert("Password set Successfully");
        // window.location.href = environment.accountui;
        window.location.href = environment.mailerui + res.Item["User"].Id;
      }
    })
  }
}


// <script src="https://apis.google.com/js/platform.js" async defer></script>
// <meta name="google-signin-client_id" content="53614397727-e2egiouq8v5r4tuj8f9qps0n14e8nvp9.apps.googleusercontent.com">