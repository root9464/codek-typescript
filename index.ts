const fs = require('fs');
const tableCoding: string[] = [
  'binary', 'utf8', 'ascii',
]

let bytesObj:any = {}

const toBytes = (text: string): number[] => {

  const buffer:Buffer = Buffer.from(text, 'binary');
  
  const result = Array(buffer.length);
  for (let i = 0; i < buffer.length; ++i) {
      result[i] = buffer[i];
  }
  return result;
};


// результат работы 

const bytes: number[] = toBytes('hello world');
bytes.forEach((value: number, e:number) => {
  bytesObj[e] = value;
})
console.log(bytesObj);
fs.writeFileSync('./data.json', JSON.stringify(bytesObj, null, 2) , 'utf-8');
