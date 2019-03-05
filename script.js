const org1_depts = [
    {
        name: 'accounting',
        children: [
            { name: 'accounting payable', children: [] },
            { name: 'accounting receivable', children: [] },
        ],
    },
    {
        name: 'finance',
        children: [],
    },
]

const org2_depts = [
    {
        name: 'accounting',
        children: [
            {name: 'accounting payable', children: []},
            {
                name: 'accounting receivable',
                children: [{ name: 'cash', children: []}, { name: 'check', children: [] }],
            },
        ],
    },
    {
        name: 'finance',
        children: [{name: 'investment', children: []}],
    },
]


function PrintDepts(depts, location) {
    for (var i = 0 in depts) {
        console.log('outer: ' + depts[i].name); //keeping track
        var deptName = document.createTextNode(depts[i].name);
        var createLi = document.createElement('li');

        createLi.appendChild(deptName);
        
        location.appendChild(createLi);

        if (depts[i].children.length > 0) {  

            console.log('if:  ' + depts[i].name); //keeping track

            var createUl = document.createElement('ul');

            location.appendChild(createUl);       

            PrintDepts(depts[i].children, createUl);
        }
    }
}


PrintDepts(org1_depts,document.getElementById("1stOrg"));
PrintDepts(org2_depts,document.getElementById("2ndOrg"));