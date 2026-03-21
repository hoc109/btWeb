const a=[5,7,6,7,-5,10];
const check=(x)=>{
    return (x>=3);
}
const rs=a.every(check);
console.log(rs);//false
const rs1=a.some(check);
console.log(rs1);//true
const x=a.every((x)=>x>=3);
console.log(x);//true
const h=a.filter((c)=>c%5==0);
console.log(h);//[5,-5,10]
const b=[
    {
        ten:'Ha',
        diem:6
    },
    {
        ten:'Hanh',
        diem:8
    },
    {
        ten:'Thu',
        diem:4
    },
    {
        ten:'han han',
        diem:6
    }
]
// const ds=b.filter((s)=>s.diem>=5);
// console.log(ds);
// const bb={ten:'Ha',diem:6};
// const start=b.findIndex((s)=>s.ten=='Ha' && s.diem==6);
// const end=b.findLastIndex((s)=>s.diem>=6);
// console.log(start);//0
// console.log(end);//3
// const dssv=['Ha Anh','Thu Hao','Lam Son'];
// console.log(dssv.join());
// console.log(dssv.join('/'));

const ds=b.filter((s)=>s.ten.toLowerCase().startsWith('h'));
console.log(ds);


