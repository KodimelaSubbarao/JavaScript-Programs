function * nums()
    {
        yield "raj";
        yield 101;
        yield "java";
        yield "js";
    }
    var n=nums();
    console.log(n.next());
    console.log(n.next());
    console.log(n.next());
    console.log(n.next());


// Output

//     { value: 'raj', done: false }
// { value: 101, done: false }
// { value: 'java', done: false }
// { value: 'js', done: false }