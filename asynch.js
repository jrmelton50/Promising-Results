async function func(num1, num2) {
    try {
        let a = await slowMath.add(num1, num2);
        console.log(a);
        let b = await slowMath.multiply(a, 2);
        console.log(b);
        let c = await slowMath.divide(b, 4);
        console.log(c);
        let d = await slowMath.subtract(c, 3);
        console.log(d);
        let e = await slowMath.add(d, 98);
        console.log(e);
        let f = await slowMath.remainder(e, 2);
        console.log(f);
        let g = await slowMath.multiply(f, 50);
        console.log(g);
        let h = await slowMath.remainder(g, 40);
        console.log(h);
        let i = await slowMath.add(h, 32);
        console.log(i);
    }
    catch (err) {
        console.log(err);
    }
}
func(6, 2);