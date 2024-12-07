const students = [
    {
        name: "Param",
        std: 12,
        marks: [56, 87, 41, 86, 90],
    },
    {
        name: "Army",
        std: 10,
        marks: [85, 87, 89, 47, 63],
    },
    {
        name: "Ahel",
        std: 8,
        marks: [41, 87, 89, 63, 90],
    },
    {
        name: "Radha",
        std: 6,
        marks: [36, 96, 89, 52, 90],
    },
    {
        name: "Shyam",
        std: 4,
        marks: [69, 74, 89, 85, 90],
    },
];

const erp = {
    data: students,
    result: function () {
        this.data.forEach(
            (student) => {
                console.log(student.name);
                console.log(student.std);
                const percentage = student.marks.reduce((total, mark) => total + mark, 0) / student.marks.length;
                console.log(percentage);
                console.log();
            }
        );
    }
};

erp.result();