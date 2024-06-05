const express=require('express');
const app=express() // express 실행

app.listen(3000, ()=>{ // 서버 생성, 포트번호:3000
    console.log('서버 시작');

    app.get('/',(req,res)=>{
        console.log('루트에 대한 요청');
        res.send('루트페이지에 대한 요청');
    })

    //회원가입
    app.get('/register',(req,res)=>{
        console.log('가입 페이지에 대한 요청');
        res.sendFile(__dirname+'/pages/register.html');
    })

    //로그인
    app.get('/signin',(req,res)=>{
        console.log(' 로그인 페이지에 대한 요청');
        res.sendFile(__dirname+'/pages/signin.html');
    })

    //메인 페이지
    app.get('/',(req,res)=>{
        console.log('메인페이지에 대한 요청');
        res.sendFile(__dirname+'/pages/main.html');
    })

    //사용자 페이지
    app.get('/userinfo',(req,res)=>{
        console.log('사용자 페이지에 대한 요청');
        res.sendFile(__dirname+'/pages/userinfo.html');
    })
}) 