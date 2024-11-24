let anm = function () {
  console.log("this is basic anonymas function !");
};

let json = {
  name: "Aman",
  age: 20,
  course: "Master in Full-Stack Development",
};

anm();
function getOnlyValue(json) {
  let response = function () {
    let sorted = [json["name"], json["age"], json["course"]];
    return sorted;
  };
  return response();
}

console.log(getOnlyValue(json));
