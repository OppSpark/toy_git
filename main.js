const express=require('express');
const app=express() // express 실행

app.listen(3000, ()=>{ // 서버 생성, 포트번호:3000
    console.log('서버 시작');

    app.get('/',(req,res)=>{
        console.log('루트에 대한 요청');
        res.send('루트페이지에 대한 요청');
    })

    //회원가입

    //로그인
    
    //메인 페이지

    //사용자 페이지
}) 