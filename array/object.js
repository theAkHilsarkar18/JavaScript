const student = {
    name: "Param",
    std: 12,
    marks: [90, 87, 89, 86, 90],
    result: function () {
        console.log("Name : " + this.name);
        console.log("Name : " + this.std);
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        const result = total / this.marks.length;
        console.log(result);
    }
};

student.result();