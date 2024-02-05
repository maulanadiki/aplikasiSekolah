export const MainMenu =[
    {
        id : 0,
        name: "Home",
        path: "/Dashboard",
        icon:"fas fa-fw fa-tachometer-alt"
    },
    {
        id:1,
        name: "Operational",
        icon:"fas fa-sitemap",
        subMenu :[
            {
                id:2,
                name: "Request Items",
                path: "/Operational/Request_items",
            },
            {
                id:3,
                name: "Recieved Items",
                path: "/Operational/Recieved_items",
            },
            {
                id:4,
                name: "Stock Items",
                path: "/Operational/Stock_items",
            }
        ],
    },
    {
        id : 5,
        name: "Payment",
        icon:"fas fa-dollar-sign",
        subMenu:[
            {
                id:6,
                name:"Monthly Payment",
                path:"/Payment/Monthly_payment",
            },
            {
                id:7,
                name:"Request Payment",
                path:"/Payment/Request_payment",
            }
        ]
    },
    {
        id:8,
        name:"Class Room",
        icon:"fas fa-fw fa-tachometer-alt",
        path:"/Class_room",
    },
    {
        id:9,
        name:"Students",
        icon:"fas fa-user-graduate",
        subMenu:[
            {
                id:10,
                name:"Task To Do",
                path:"/Students/Task_to_do",
            },
            {
                id:11,
                name:"Attendance",
                path:"/Students/Attendance",
            },
            {
                id:12,
                name:"Grade Point",
                path:"/Students/Grade_point",
            },            {
                id:13,
                name:"Schedule Learned",
                path:"/Students/Schedule_learned",
            },
            {
                id:14,
                name:"Problem Teachers",
                path:"/Students/Problem_teachers",
            }
        ],
    },
    {
        id:15,
        name:"Teachers",
        icon:"fas fa-address-book",
        subMenu:[
            {
                id:16,
                name:"Given Task",
                path:"/Teachers/Given_task",
            },
            {
                id:17,
                name:"Attendance",
                path:"/Teachers/Attendance",
            },
            {
                id:18,
                name:"Schedule Learned",
                path:"Teachers/Schedule_learned",
            },
            {
                id:19,
                name:"Grade Point",
                path:"Teachers/Grade_point",
            },
            {
                id:20,
                name:"Problem Students",
                path:"Teachers/Problem_students",
            },
        ],
    },
    {
        id:21,
        name:"Master Data",
        icon:"fas fa-fw fa-folder",
        subMenu:[
            {
                id:22,
                name:"Master Students",
                path:"Master_data/Master_students",
            },
            {
                id:23,
                name:"Master Teachers",
                path:"Master_data/Master_teachers",
            },
            {
                id:24,
                name:"Master Items",
                path:"Master_data/Master_items",
            },
            {
                id:25,
                name:"Master Payments",
                path:"Master_data/Master_payments",
            }
        ]
    },
    {
        id:26,
        name:"Reporting",
        icon:"fas fa-fw fa-folder",
        subMenu:[
            {
                id:27,
                name:"Operational Report",
                path:"Report/Operational_report",
            },
            {
                id:28,
                name:"Students Report",
                path:"Report/Students_report",
            },
            {
                id:29,
                name:"Techers Report",
                path:"Report/Teachers_report",
            },
            {
                id:30,
                name:"case Problem Report",
                path:"Report/case_problem_report",
            }
        ]
    }
]