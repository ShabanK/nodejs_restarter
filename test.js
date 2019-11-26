this.val = 2;

const obj = {
  name: "shaban",
  val: 4,
  reg: function() {
    console.log(this.val);
  },
  lex: () => {
    console.log(this.val);
  }
};

console.log(obj);
obj.reg();
obj.lex();
