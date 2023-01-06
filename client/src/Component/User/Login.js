import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginDiv from "../../Style/UserCSS";


function Login() {
    const [Email, setEmail] = useState("");
    const [PW, setPW] = useState("");
    const [ErrorMsg, setErrorMsg] = useState("");

    let navigate = useNavigate();


    return (
        <LoginDiv>
            <form>
                <label>이메일</label>
                <input
                    type="email"
                    value={Email}
                    required
                    onChange={(e) => setEmail(e.currentTarget.value)}
                />
                <label>비밀번호</label>
                <input
                    type="password"
                    value={PW}
                    required
                    onChange={(e) => setPW(e.currentTarget.value)}
                />
                {ErrorMsg != "" && <p>{ErrorMsg}</p>}
                <button>로그인</button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        navigate("/register");
                    }}
                >
                    회원가입
                </button>
            </form>
        </LoginDiv>
    )
}

export default Login