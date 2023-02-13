let tc=prompt("Enter total classes held")
tc=Number.parseInt(tc)
let atc=prompt("Enter classes attend by student")
atc=Number.parseInt(atc)
let percentage

if(atc<=tc)
{
  percentage=(atc/tc)*100
  console.log("\n Percentage of class attended is",percentage)
  if(percentage<75 && percentage>=0)
  {
    console.log("\n Student is not allowed to sit in exam")
  }
  else{
    console.log("\n Student is allowed to sit in exam")
  }
}
else{
  console.log("\n Attended classes cannot be more than total classes held!")
}