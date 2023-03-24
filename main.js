
const useres = [
  {
    first_name: "Mike",
    location:"London"
  },
  {
    first_name: "Tim",
    location:"US"
  },
  {
    first_name: "John",
    location:"Australia"
  }
];




let usernames=useres.map (function (g){
	return (`${g.first_name} lives in ${g.location}`);
	
});

console.log(usernames);