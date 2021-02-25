'use strict';
const request = require('sync-request');
const encoding = require('encoding');
const cheerio = require('cheerio');

//
let appendBaiduTop = (ret) => {
    let res = request('GET', 'http://top.baidu.com/buzz?b=1&fr=topindex');
    let body = res.getBody();
    body = encoding.convert(body, "utf-8", 'gbk').toString('utf-8');
    const $ = cheerio.load(body)
    let items = $('.mainBody').find('.list-table').find('tr');
    items.each((index, element) => {
        let tds = $(element).find('td');
        if (tds.length < 4) {
            return;
        }
        let a = $($(tds[1]).find('a')[0]);
        let title = a.text();
        let url = a.attr('href');
        let hot = $(tds[3]).find('span').text()

        append(ret, title, url, hot);

    })

}

let handler = (body)=>{
    return {
        "isBase64Encoded": false,
        "statusCode": 200,
        "headers": {"Content-Type":"application/json;charset=UTF-8"},
        "body": JSON.stringify(body)
    }
}

let append =(source,title,url,hot)=>{
    let item = {
        'title':title,
        'url':url
    }
    if (hot){
        item['hot'] = hot;
    }
    source.push(item);
}

exports.main_handler = async (event, context) => {
    console.log("Hello World")
    console.log(event)

    let ret = [];
    appendBaiduTop(ret);
    return handler({
        'ret': ret
    });

};