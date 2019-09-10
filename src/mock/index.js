/**
 * Created by apple on 2019/9/7.
 */

//引入mockjs
import Mock from 'mockjs'

var data = [
    {
        "navTitle":'全部',
        "content":[
            {
                "id":1,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":2,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":3,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":4,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":5,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            }
        ]
    },
    {
        "navTitle":'儿童故事',
        "content":[
            {
                "id":6,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":7,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":8,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":9,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":10,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            }
        ]
    },
    {
        "navTitle":'启蒙课堂' ,
        "content":[
            {
                "id":11,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":12,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":13,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":14,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":15,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            }
        ]
    },
    {
        "navTitle":'其他',
        "content":[
            {
                "id":16,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":17,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":18,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":19,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":20,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            }
        ]
    },
    {
        "navTitle":'国学经典',
        "content":[
            {
                "id":21,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":22,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":23,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":24,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            },
            {
                "id":25,
                "title":'@ctitle',
                "pic":'@image(100x100)',
                "desc":'@cparagraph(1)',
                "views|1000-99999":0
            }
        ]
    }
];

//定义接口1
Mock.mock('/books','get',{
    "status":200,
    "list|5":[
        {
            "navTitle|+1":[ '全部','儿童故事','启蒙课堂' ,'其他','国学经典'],
            "content|5":[
                {
                    "id|+1":1,
                    "title":'@ctitle',
                    "pic":'@image(100x100)',
                    "desc":'@cparagraph(1)',
                    "views|1000-99999":0
                }
            ]
        }
    ]
});

//定义接口2
Mock.mock('/books2','get',{
    "status":200,
    "list":data
});
