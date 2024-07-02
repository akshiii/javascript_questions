//Converting a nested object "user" to look more like
/*
finalObj = { 
    user_address_office_area_landmark : "Hitech",
    user_address_office_city : "Hyderabad",
    user_address_personal_area : "Majra",
    user_address_personal_city : "Dehradun",
    user_name : "Akshita"
}    
*/
let user = {
  name: "Akshita",
  address: {
    personal: {
      city: "Dehradun",
      area: "Majra",
    },
    office: {
      city: "Hyderabad",
      area: {
        landmark: "Hitech",
      },
    },
  },
};

let finalObj = {};
let magic = (obj, parent) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      magic(obj[key], parent + "_" + key);
    } else finalObj[parent + "_" + key] = obj[key];
  }
};

magic(user, "user");

console.log(finalObj);
