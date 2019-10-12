
define(['b'], function (data) {
    console.log(data, 'data');
    return data;
});


require(["./a.js"], function (a) {
    console.log(a, 212121);
});

// console.log($('#name').eq(0));
// [ [{value:"title",type:"TAG",matches:["title"]}],
//   [{value:"div",type:["TAG",matches:["div"]},
//    {value:">", type: ">"},
//    {value:":nth-child(even)",type:"CHILD",matches:["nth",
//     "child","even",2,0,undefined,undefined,undefined]}
//   ]
// ]
// Expr.relative = {
//     ">": { dir: "parentNode", first: true },
//     " ": { dir: "parentNode" },
//     "+": { dir: "previousSibling", first: true },
//     "~": { dir: "previousSibling" }
// };