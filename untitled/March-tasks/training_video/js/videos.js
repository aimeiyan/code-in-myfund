/**
 * Created with IntelliJ IDEA.
 * User: Nancy
 * Date: 3/26/14
 * Time: 10:38 PM
 * To change this template use File | Settings | File Templates.
 */


var all_videos = [
    {
        id: 1,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ['��ļ����'],
        abstract: '1��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/3/21',
        pageview: '334',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'

    },
    {
        id: 2,
        time: '5:12',
        title: '��������Ʒ�����2��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ['��ļ����'],
        abstract: '2��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/3/22',
        pageview: '324',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },

    {
        id: 3,
        time: '5:12',
        title: '��������Ʒ�����3��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ['��ļ����'],
        abstract: '3��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/3/23',
        pageview: '86',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },

    {
        id: 4,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ['��ļ����'],
        abstract: '4��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/3/24',
        pageview: '34',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf',
        favorite: true
    },

    {
        id: 5,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ['��ļ����'],
        abstract: '5��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/3/25',
        pageview: '23',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf',
        favorite: true
    },
    {
        id: 6,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '6��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/3/26',
        pageview: '22',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf',
        favorite: true
    },

    {
        id: 7,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["Ӫ��ǰ��"],
        abstract: '7��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/3/27',
        pageview: '765',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },

    {
        id: 8,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '8��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/3/28',
        pageview: '23',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },

    {
        id: 9,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '9��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/3/29',
        pageview: '86',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 10,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '10��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/3/30',
        pageview: '230',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },

    {
        id: 11,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '11��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/3/31',
        pageview: '152',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 12,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["���ɷ���"],
        abstract: '12��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/12',
        pageview: '85',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 13,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["Ӫ��ǰ��"],
        abstract: '13��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/13',
        pageview: '543',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 14,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["���ɷ���"],
        abstract: '14��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/14',
        pageview: '234',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 15,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '15��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/15',
        pageview: '908',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 16,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["���ɷ���"],
        abstract: '16��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/16',
        pageview: '333',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 17,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["Ӫ��ǰ��"],
        abstract: '17��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/17',
        pageview: '9076',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 18,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '18��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/18',
        pageview: '66',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 19,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["���ɷ���"],
        abstract: '19��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/19',
        pageview: '321',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 20,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '20��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/20',
        pageview: '667',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 21,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["Ӫ��ǰ��"],
        abstract: '21��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/21',
        pageview: '221',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 22,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["Ӫ��ǰ��"],
        abstract: '22��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/22',
        pageview: '90',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 23,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '23��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/23',
        pageview: '53',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 24,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '24��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/24',
        pageview: '9',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 25,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '25��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/25',
        pageview: '5',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 26,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '26��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/26',
        pageview: '2',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 27,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '27��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/27',
        pageview: '23',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 28,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '28��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/28',
        pageview: '24',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 29,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '28��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/28',
        pageview: '24',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 30,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '28��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/28',
        pageview: '24',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 31,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '28��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/28',
        pageview: '24',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 32,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '28��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/28',
        pageview: '24',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 33,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '28��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/28',
        pageview: '24',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 34,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '28��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/28',
        pageview: '24',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 35,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '28��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/28',
        pageview: '24',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 36,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '28��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/28',
        pageview: '24',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 37,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '28��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/28',
        pageview: '24',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    },
    {
        id: 38,
        time: '5:12',
        title: '��������Ʒ�����һ��',
        source: '��Դ��չ���о�����',
        img: "images/pic.jpg",
        "small-img": "images/small-pic.jpg",
        "min-img": "images/min-pic.jpg",
        tag: ["����"],
        abstract: '28��ν��ƹ滮����ָ��Ը�����������չ�Ĳ�ͬʱ�ڣ����������롢֧��״���ı仯���ƶ����˲������ľ��巽����ʵ�����������׶ε�Ŀ�������',
        date: '2014/4/28',
        pageview: '24',
        youku: 'http://player.youku.com/player.php/sid/XNTkxNzAwMTI4/v.swf'
    }
];

var PER_PAGE = 9;


function get_video_by_id(id) {
    var video;
    for (var i = 0; i < all_videos.length; i++) {
        if (all_videos[i].id === id) {
            video = all_videos[i];
            break;
        }
    }

    if (video) {
        var related = get_videos_by_tag(video.tag[0], 1).videos;

        return {
            video: video,
            related: related.slice(0, 3),
            recommend: get_favorite_videos(),
            tag: video.tag,
            abstract: video.abstract,
            date: video.date,
            pageview: video.pageview
        }
    }
}

function get_videos_by_tag(tag, page) {
    page = page || 1;
    var results = [];

    if (tag !== 'ȫ����Ƶ') {
        for (var i = 0; i < all_videos.length; i++) {
            var video = all_videos[i];
            for (var j = 0; j < video.tag.length; j++) {
                if (video.tag[j] === tag) {
                    results.push(video);
                    break;
                }
            }
        }
    } else {
        results = all_videos;
    }


    var offset = (page - 1) * PER_PAGE;
    var finalResult = [];

    for (var i = 0; i < results.length; i++) {
        if (i < offset) {
        } else {
            finalResult.push(results[i]);
            if (finalResult.length >= PER_PAGE) {
                break;
            }
        }
    }

    var pages = [];
    for (i = 0; i < Math.ceil(results.length / PER_PAGE); i++) {
        pages.push({
            page: i + 1,
            is_current: i + 1 == page
        })
    }

    return {
        total: results.length,
        pages: pages.length > 1 ? pages : [],
        pageCount: Math.ceil(results.length / PER_PAGE),
        videos: finalResult,
        tag: tag
    };
}


function get_search_videos(q) {
    var results = [];
    for (var i = 0; i < all_videos.length; i++) {
        var video = all_videos[i];
        if (video.title.indexOf(q) >= 0) {
            results.push(all_videos[i]);
        }
    }
    return results;
}

function get_favorite_videos() {
    var favor = [];
    for (var i = 0; i < all_videos.length; i++) {
        var video = all_videos[i];
        if (video.favorite === true) {
//            console.log(video)
            favor.push(video)
        }
    }
    return favor
}
