import * as React from 'react';

function Main (props) {
    console.log("π ~ file: Main.js ~ line 4 ~ Main ~ props", props)


    return (
        <>
            <h1>gkdwefn</h1>
        </>

    )

}

//μ€ν°λ λΉλ°λ²νΈ
export function studyPasswordValidation(string) {
    //console.log('check studyPasswordValidation, ' + string);

    //8~16μμ μλ¬Έ λμλ¬Έμ, μ«μ, κ³΅λ°±, νΉμλ¬Έμλ§ κ°λ₯
    //let regex = /^[a-zA-Z0-9`~!@#$%^&*()-_=+|]{8,16}$/;
    let regex = /^[a-zA-Z0-9\s`~!@#$%^&()_+[\]{};':",./<>?|*\-\\.]{8,16}$/;

    //console.log(regex.test(string));
    return regex.test(string);
}

export default Main;