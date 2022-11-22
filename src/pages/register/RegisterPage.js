import React from "react";

function RegisterPage() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo text-purple-300">Social Media</h3>
          <span className="loginDesc text-white">
            Sosyal Medyada arkadaşlarınızla ve çevrenizdeki dünyayla bağlantı
            kurun.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton bg-purple-800">Kayıt ol</button>
            <button className="loginRegisterButton bg-lime-600">
              Hesabınla Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
