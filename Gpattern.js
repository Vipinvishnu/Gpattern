
function Gpattern(num) {
      let s = "";
      for (i = 1; i <= num; i++) {
          for (j = 1; j <= num; j++) {
              if (i == 1 || j==1 || i==5 || (i==3 & j>2) || (i==4 && j==5)) {
                  s=s+" *";
              }
              else{
                  s=s+"  ";
              }
             
          }
          s=s+"\n";
      }
      return s;
  
  }
  console.log(Gpattern(5));
  