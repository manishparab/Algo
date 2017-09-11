function wordBreak(s, wordDict) {
  var f = []
  f.push(true);


  for(var i=1; i <= s.length; i++){
    for(var j=0; j < i; j++){
        if(f[j] && wordDict.includes(s.substring(j, i))){
            f[i] = true;
            break;
        }
    }
}

return f[s.length];
}

wordBreak("leetcode", ["le", "etc" ,"ode"]);

