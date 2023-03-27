//Exercise Number and String
let data1 = true
let data2 = "1.25"
console.log(data1, typeof data1)
console.log(data2, typeof data2)

let data3 = data1.toString() + data2    //change data1 to string
console.log(data3, typeof data3)

//Array
let data = ["one", 2, true]
console.log(data[2], typeof data[2])

//Object
let user = {
    name: "ry",
    faculty: "FKEKK",
    phone: "123",
    email: "abc@gmail.com"
}
console.log(user.faculty)

//Combination of Array and Object
let user1 = {
    name: "ry",
    faculty: "FKEKK",
    phone: [
        "123",
        "456"
    ],
    email: "abc@gmail.com"
}
console.log(user1.phone) //to get all phone number
console.log(user1.phone[0]) //to get the first phone number

//Array + Array
let user2 = {
    name: "ry",
    faculty: "FKEKK",
    phone: {
        office: "123",
        mobile: "456"
},
    email: "abc@gmail.com"
}
console.log(user2.phone.mobile) //to get mobile phone number
console.log(user2.phone.office) //to get the office phone number