import React from 'react';
import Charts from './BC'

const SortImg = (props) => {
    const arr = props.myobj;
    // console.log(arr);
    const objarr = [];
    let i = 0;
    arr.forEach((ele) => {
        const objarr2 = [];
        i = 0;
        ele.forEach((ele2) => {
            objarr2.push({ name: i,student: ele2 });
            i += 1;
        })

        objarr.push(objarr2);
    })
    return (
        <>
            <Charts myprp={objarr[0]}/>
        </>)
}

export default SortImg;