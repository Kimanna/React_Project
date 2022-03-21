import * as React from 'react';

function Main (props) {
    console.log("🚀 ~ file: Main.js ~ line 4 ~ Main ~ props", props)


    return (
        <>
            <h1>gkdwefn</h1>
        </>

    )

}

//스터디 비밀번호
export function studyPasswordValidation(string) {
    //console.log('check studyPasswordValidation, ' + string);

    //8~16자의 영문 대소문자, 숫자, 공백, 특수문자만 가능
    //let regex = /^[a-zA-Z0-9`~!@#$%^&*()-_=+|]{8,16}$/;
    let regex = /^[a-zA-Z0-9\s`~!@#$%^&()_+[\]{};':",./<>?|*\-\\.]{8,16}$/;

    //console.log(regex.test(string));
    return regex.test(string);
}

export default Main;