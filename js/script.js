function vowelsAndConsonants(s) {
    let v = []
    let c = []
    for(let i = 0; i<s.length; i++){
        if(s[i]==='a' || s[i]==='e' || s[i]==='i' || s[i]==="o" || s[i]==='u'){
            console.log(s[i])
       }
        else{
            c.push(s[i])
        }
    }

    for(let i=0; i<c.length; i++){
        console.log(c[i])
    }
}


function fun() {
    s = "hello world jkavascript"
    
    vowelsAndConsonants(s);
}

fun()

