namespace test {
    class fruit {
        stem: string;
    }
    class foo {
        aaa: string;
    }

    //#region Extract fields with their original names from an object
    let testObject = {
        a: 1,
        b: 2,
        c: 3
    }
    const { a } = testObject;

    //#endregion

    let testfn = (d: boolean)=>{
        return d;   
    }

    let b = testfn(true);
    let c = b;
    console.log(b);
    console.log(c);
    c = testfn(false);
    console.log(b);
    console.log(c);
}

