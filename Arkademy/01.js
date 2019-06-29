
function biodataKu(biodata){
    let biodataObj = {
        "name" : "Muhammad Wizan Pratama",
        "age" : "21",
        "address" : "Komplek Pelni Depok",
        "hobbies" : ["Basketball","Gaming","Music","MAKAN"],
        "is_married" : false,
        "list_school" : [ {"highschool":'MAN 14 JAKARTA', "year_in":'2012', "year_out":'2015', "major":'IPS'}]
        "skills" : [ 
                    {
                        "HTML5":'beginner',
                        "CSS":'beginner',
                        "Javascript":'beginner',
                        "XML":'advanced',
                        "kotlin":'advanced',
                        "GIT":'advanced'
                    } 
                ]
        "interest_in_coding" : true
    }

    return biodataObj
}

console.log(biodataKu('wizan'));