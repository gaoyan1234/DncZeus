(function (e) {
    function t(t) {
        for (var a, r, c = t[0], s = t[1], u = t[2], l = 0, d = []; l < c.length; l++)
            r = c[l], o[r] && d.push(o[r][0]), o[r] = 0;
        for (a in s)
            Object.prototype.hasOwnProperty.call(s, a) && (e[a] = s[a]);
        m && m(t);
        while (d.length)
            d.shift()();
        return i.push.apply(i, u || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < i.length; t++) {
            for (var n = i[t], a = !0, r = 1; r < n.length; r++) {
                var c = n[r];
                0 !== o[c] && (a = !1)
            }
            a && (i.splice(t--, 1), e = s(s.s = n[0]))
        }
        return e
    }
    var a = {},
    r = {
        app: 0
    },
    o = {
        app: 0
    },
    i = [];
    function c(e) {
        return s.p + "js/" + ({}
            [e] || e) + "." + {
            "0770": "dc259f93",
            "24b6": "72eb5d9c",
            "35e2": "3480393c",
            "5cfb": "e564ca4b",
            "9d24": "ade2fb72",
            "chunk-0d29": "eabec003",
            "chunk-7509": "94135ecf",
            "87b8": "3246e7e1",
            "chunk-0eb0": "3f0194ec",
            "chunk-13ac": "4ee73fc1",
            "chunk-15fb": "82ca9db5",
            "chunk-1717": "500cf828",
            "chunk-18cb": "8c1b8a45",
            "chunk-24ba": "16965232",
            "chunk-2b8a": "1391f7f0",
            "chunk-2f9a": "aaeed7b8",
            "chunk-3704": "fb19b825",
            "chunk-3e69": "73e0f4b1",
            "chunk-4a80": "94de41db",
            "chunk-57f0": "0ad0c736",
            "chunk-60ce": "53a3d25f",
            "chunk-622e": "9f789855",
            "chunk-65fd": "bc8b088d",
            "chunk-6f78": "c64a753d",
            "chunk-9f4a": "0540c9c7",
            "chunk-ae5a": "3795da8e",
            "chunk-affa": "36b484d8",
            "chunk-cef6": "bfba73a2",
            "chunk-f1ca": "28a5e3fa"
        }
        [e] + ".js"
    }
    function s(t) {
        if (a[t])
            return a[t].exports;
        var n = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, s),
        n.l = !0,
        n.exports
    }
    s.e = function (e) {
        var t = [],
        n = {
            "chunk-7509": 1,
            "chunk-0eb0": 1,
            "chunk-13ac": 1,
            "chunk-15fb": 1,
            "chunk-1717": 1,
            "chunk-18cb": 1,
            "chunk-24ba": 1,
            "chunk-2b8a": 1,
            "chunk-2f9a": 1,
            "chunk-3704": 1,
            "chunk-3e69": 1,
            "chunk-4a80": 1,
            "chunk-57f0": 1,
            "chunk-60ce": 1,
            "chunk-622e": 1,
            "chunk-65fd": 1,
            "chunk-6f78": 1,
            "chunk-9f4a": 1,
            "chunk-ae5a": 1,
            "chunk-affa": 1,
            "chunk-cef6": 1,
            "chunk-f1ca": 1
        };
        r[e] ? t.push(r[e]) : 0 !== r[e] && n[e] && t.push(r[e] = new Promise(function (t, n) {
                for (var a = "css/" + ({}
                            [e] || e) + "." + {
                        "0770": "31d6cfe0",
                        "24b6": "31d6cfe0",
                        "35e2": "31d6cfe0",
                        "5cfb": "31d6cfe0",
                        "9d24": "31d6cfe0",
                        "chunk-0d29": "31d6cfe0",
                        "chunk-7509": "75e2102a",
                        "87b8": "31d6cfe0",
                        "chunk-0eb0": "1b23e29a",
                        "chunk-13ac": "e79efef0",
                        "chunk-15fb": "52c99920",
                        "chunk-1717": "c41aea9e",
                        "chunk-18cb": "c94cb9c5",
                        "chunk-24ba": "e79efef0",
                        "chunk-2b8a": "e79efef0",
                        "chunk-2f9a": "98ffcbb2",
                        "chunk-3704": "41914cc2",
                        "chunk-3e69": "1b23e29a",
                        "chunk-4a80": "7eae57f5",
                        "chunk-57f0": "e79efef0",
                        "chunk-60ce": "27f84818",
                        "chunk-622e": "491f8311",
                        "chunk-65fd": "827b67e9",
                        "chunk-6f78": "4e9c9e1c",
                        "chunk-9f4a": "1b23e29a",
                        "chunk-ae5a": "1b23e29a",
                        "chunk-affa": "1b23e29a",
                        "chunk-cef6": "1b23e29a",
                        "chunk-f1ca": "605b5351"
                    }
                    [e] + ".css", r = s.p + a, o = document.getElementsByTagName("link"), i = 0; i < o.length; i++) {
                    var c = o[i],
                    u = c.getAttribute("data-href") || c.getAttribute("href");
                    if ("stylesheet" === c.rel && (u === a || u === r))
                        return t()
                }
                var l = document.getElementsByTagName("style");
                for (i = 0; i < l.length; i++) {
                    c = l[i],
                    u = c.getAttribute("data-href");
                    if (u === a || u === r)
                        return t()
                }
                var d = document.createElement("link");
                d.rel = "stylesheet",
                d.type = "text/css",
                d.onload = t,
                d.onerror = function (t) {
                    var a = t && t.target && t.target.src || r,
                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + a + ")");
                    o.request = a,
                    n(o)
                },
                d.href = r;
                var m = document.getElementsByTagName("head")[0];
                m.appendChild(d)
            }).then(function () {
                r[e] = 0
            }));
        var a = o[e];
        if (0 !== a)
            if (a)
                t.push(a[2]);
            else {
                var i = new Promise(function (t, n) {
                    a = o[e] = [t, n]
                });
                t.push(a[2] = i);
                var u,
                l = document.getElementsByTagName("head")[0],
                d = document.createElement("script");
                d.charset = "utf-8",
                d.timeout = 120,
                s.nc && d.setAttribute("nonce", s.nc),
                d.src = c(e),
                u = function (t) {
                    d.onerror = d.onload = null,
                    clearTimeout(m);
                    var n = o[e];
                    if (0 !== n) {
                        if (n) {
                            var a = t && ("load" === t.type ? "missing" : t.type),
                            r = t && t.target && t.target.src,
                            i = new Error("Loading chunk " + e + " failed.\n(" + a + ": " + r + ")");
                            i.type = a,
                            i.request = r,
                            n[1](i)
                        }
                        o[e] = void 0
                    }
                };
                var m = setTimeout(function () {
                    u({
                        type: "timeout",
                        target: d
                    })
                }, 12e4);
                d.onerror = d.onload = u,
                l.appendChild(d)
            }
        return Promise.all(t)
    },
    s.m = e,
    s.c = a,
    s.d = function (e, t, n) {
        s.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    },
    s.r = function (e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    },
    s.t = function (e, t) {
        if (1 & t && (e = s(e)), 8 & t)
            return e;
        if (4 & t && "object" === typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (s.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var a in e)
                s.d(n, a, function (t) {
                    return e[t]
                }
                    .bind(null, a));
        return n
    },
    s.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e["default"]
        }
         : function () {
            return e
        };
        return s.d(t, "a", t),
        t
    },
    s.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    },
    s.p = "/",
    s.oe = function (e) {
        throw console.error(e),
        e
    };
    var u = window["webpackJsonp"] = window["webpackJsonp"] || [],
    l = u.push.bind(u);
    u.push = t,
    u = u.slice();
    for (var d = 0; d < u.length; d++)
        t(u[d]);
    var m = l;
    i.push([0, "chunk-vendors"]),
    n()
})({
    0: function (e, t, n) {
        e.exports = n("56d7")
    },
    "0c4a": function (e, t, n) {
        "use strict";
        var a = n("55bd"),
        r = n.n(a);
        r.a
    },
    "0f29": function (e, t, n) {
        var a = {
            "./": "13aa",
            "./error-store": "b7c7",
            "./error-store/": "b7c7",
            "./error-store/index": "b7c7",
            "./error-store/index.js": "b7c7",
            "./index": "13aa",
            "./index.js": "13aa"
        };
        function r(e) {
            var t = o(e);
            return n(t)
        }
        function o(e) {
            var t = a[e];
            if (!(t + 1)) {
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND",
                n
            }
            return t
        }
        r.keys = function () {
            return Object.keys(a)
        },
        r.resolve = o,
        e.exports = r,
        r.id = "0f29"
    },
    "13aa": function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n("6bde"),
        r = (n("7f7f"), n("f121")),
        o = r["a"].plugin;
        t["default"] = function (e) {
            for (var t in o) {
                var r = o[t];
                e.use(n("0f29")("./".concat(t)).default, "object" === Object(a["a"])(r) ? r : void 0)
            }
        }
    },
    "17be": function (e, t) {
        e.exports = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCQUYwNDc2QjNGQThFODExOTNENzg0MzQ1QkYwMUM5RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NTZFRDg2NEE4NDExMUU4QjU5MDlBN0U0MzhCMTc4NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NTZFRDg2M0E4NDExMUU4QjU5MDlBN0U0MzhCMTc4NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJBRjA0NzZCM0ZBOEU4MTE5M0Q3ODQzNDVCRjAxQzlGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJBRjA0NzZCM0ZBOEU4MTE5M0Q3ODQzNDVCRjAxQzlGIi8+IDwvcmRmOkRlc2NyaXB0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"
    },
    "1a88": function (e, t, n) {},
    2785: function (e, t, n) {},
    "33ec": function (e, t, n) {},
    "37a8": function (e, t, n) {
        "use strict";
        var a = n("c13c"),
        r = n.n(a);
        r.a
    },
    "3d00": function (e, t, n) {},
    "3daa": function (e, t, n) {},
    4360: function (e, t, n) {
        "use strict";
        var a = n("2b0e"),
        r = n("2f62"),
        o = (n("55dd"), n("20d6"), n("bc3a")),
        i = n.n(o),
        c = n("f121"),
        s = n("66df"),
        u = c["a"].authUrl.pro,
        l = function (e) {
            var t = e.userName,
            n = e.password;
            return i.a.get(u + "?username=" + t + "&password=" + n)
        },
        d = function (e) {
            return s["a"].request({
                url: "account/profile",
                method: "get",
                withPrefix: !1,
                prefix: "api/v1/"
            })
        },
        m = function () {
            return s["a"].request({
                url: "message/count",
                hideError: !1,
                method: "get"
            })
        },
        f = function () {
            return s["a"].request({
                url: "message/init",
                method: "get"
            })
        },
        h = function (e) {
            return s["a"].request({
                url: "message/content/" + e,
                method: "get"
            })
        },
        p = function (e) {
            return s["a"].request({
                url: "message/has_read/" + e,
                method: "get"
            })
        },
        g = function (e) {
            return s["a"].request({
                url: "message/remove_readed/" + e,
                method: "get"
            })
        },
        v = function (e) {
            return s["a"].request({
                url: "message/restore/" + e,
                method: "get"
            })
        },
        b = n("c276"),
        w = (n("90de"), n("c6bd"), {
            state: {
                userName: "",
                userGuid: "",
                user_type: -1,
                avatorImgPath: "",
                token: Object(b["i"])(),
                access: "",
                hasGetInfo: !1,
                unreadCount: 0,
                messageUnreadList: [],
                messageReadedList: [],
                messageTrashList: [],
                messageContentStore: {},
                permissions: {},
                profile: {}
            },
            mutations: {
                setAvator: function (e, t) {
                    e.avatorImgPath = t
                },
                setUserGuid: function (e, t) {
                    e.userGuid = t
                },
                setUserType: function (e, t) {
                    e.user_type = t
                },
                setUserName: function (e, t) {
                    e.userName = t
                },
                setAccess: function (e, t) {
                    e.access = t
                },
                setPages: function (e, t) {},
                setPermissions: function (e, t) {
                    e.permissions = t
                },
                setToken: function (e, t) {
                    e.token = t,
                    Object(b["r"])(t)
                },
                setHasGetInfo: function (e, t) {
                    e.hasGetInfo = t
                },
                setMessageCount: function (e, t) {
                    e.unreadCount = t
                },
                setMessageUnreadList: function (e, t) {
                    e.messageUnreadList = t
                },
                setMessageReadedList: function (e, t) {
                    e.messageReadedList = t
                },
                setMessageTrashList: function (e, t) {
                    e.messageTrashList = t
                },
                updateMessageContentStore: function (e, t) {
                    var n = t.msg_id,
                    a = t.content;
                    e.messageContentStore[n] = a
                },
                moveMsg: function (e, t) {
                    var n = t.from,
                    a = t.to,
                    r = t.msg_id,
                    o = e[n].findIndex(function (e) {
                        return e.msg_id === r
                    }),
                    i = e[n].splice(o, 1)[0];
                    i.loading = !1,
                    e[a].unshift(i)
                }
            },
            getters: {
                messageUnreadCount: function (e) {
                    return e.messageUnreadList.length
                },
                messageReadedCount: function (e) {
                    return e.messageReadedList.length
                },
                messageTrashCount: function (e) {
                    return e.messageTrashList.length
                }
            },
            actions: {
                handleLogin: function (e, t) {
                    var n = e.commit,
                    a = t.userName,
                    r = t.password;
                    return a = a.trim(),
                    new Promise(function (e, t) {
                        l({
                            userName: a,
                            password: r
                        }).then(function (t) {
                            var a = t.data;
                            200 === a.code && a && a.data && n("setToken", a.data),
                            e(t)
                        }).catch(function (e) {
                            t(e)
                        })
                    })
                },
                handleLogOut: function (e) {
                    e.state;
                    var t = e.commit;
                    return new Promise(function (e, n) {
                        t("setToken", ""),
                        t("setAccess", []),
                        t("setPermissions", {}),
                        Object(b["p"])([]),
                        e()
                    })
                },
                getUserInfo: function (e) {
                    var t = e.state,
                    n = e.commit;
                    return new Promise(function (e, a) {
                        try {
                            d(t.token).then(function (t) {
                                var a = t.data.data;
                                n("setAvator", a.avator),
                                n("setUserName", a.user_name),
                                n("setUserGuid", a.user_guid),
                                n("setAccess", a.access),
                                n("setPermissions", a.permissions),
                                n("setUserType", a.user_type),
                                n("setHasGetInfo", !0),
                                e(a)
                            }).catch(function (e) {
                                a(e)
                            })
                        } catch (e) {
                            a(e)
                        }
                    })
                },
                getUnreadMessageCount: function (e) {
                    e.state;
                    var t = e.commit;
                    m().then(function (e) {
                        var n = e.data;
                        t("setMessageCount", n)
                    })
                },
                getMessageList: function (e) {
                    e.state;
                    var t = e.commit;
                    return new Promise(function (e, n) {
                        f().then(function (n) {
                            var a = n.data.data,
                            r = a.unread,
                            o = a.readed,
                            i = a.trash;
                            t("setMessageUnreadList", r.sort(function (e, t) {
                                    return new Date(t.create_time) - new Date(e.create_time)
                                })),
                            t("setMessageReadedList", o.map(function (e) {
                                    return e.loading = !1,
                                    e
                                }).sort(function (e, t) {
                                    return new Date(t.create_time) - new Date(e.create_time)
                                })),
                            t("setMessageTrashList", i.map(function (e) {
                                    return e.loading = !1,
                                    e
                                }).sort(function (e, t) {
                                    return new Date(t.create_time) - new Date(e.create_time)
                                })),
                            e()
                        }).catch(function (e) {
                            n(e)
                        })
                    })
                },
                getContentByMsgId: function (e, t) {
                    var n = e.state,
                    a = e.commit,
                    r = t.msg_id;
                    return new Promise(function (e, t) {
                        var o = n.messageContentStore[r];
                        o ? e(o) : h(r).then(function (t) {
                            var n = t.data.data;
                            a("updateMessageContentStore", {
                                msg_id: r,
                                content: n
                            }),
                            e(n)
                        })
                    })
                },
                hasRead: function (e, t) {
                    var n = e.state,
                    a = e.commit,
                    r = t.msg_id;
                    return new Promise(function (e, t) {
                        p(r).then(function () {
                            a("moveMsg", {
                                from: "messageUnreadList",
                                to: "messageReadedList",
                                msg_id: r
                            }),
                            a("setMessageCount", n.unreadCount - 1),
                            e()
                        }).catch(function (e) {
                            t(e)
                        })
                    })
                },
                removeReaded: function (e, t) {
                    var n = e.commit,
                    a = t.msg_id;
                    return new Promise(function (e, t) {
                        g(a).then(function () {
                            n("moveMsg", {
                                from: "messageReadedList",
                                to: "messageTrashList",
                                msg_id: a
                            }),
                            e()
                        }).catch(function (e) {
                            t(e)
                        })
                    })
                },
                restoreTrash: function (e, t) {
                    var n = e.commit,
                    a = t.msg_id;
                    return new Promise(function (e, t) {
                        v(a).then(function () {
                            n("moveMsg", {
                                from: "messageTrashList",
                                to: "messageReadedList",
                                msg_id: a
                            }),
                            e()
                        }).catch(function (e) {
                            t(e)
                        })
                    })
                }
            }
        }),
        _ = n("c93e"),
        k = (n("6762"), n("2fdb"), n("7f7f"), n("8afe")),
        y = n("4ab1"),
        C = n("7e1e"),
        L = n("a18c"),
        x = c["a"].homeName,
        N = function (e, t) {
            var n = Object(b["f"])(e.tagNavList, t);
            e.tagNavList = e.tagNavList.filter(function (e) {
                return !Object(b["m"])(e, t)
            }),
            Object(b["p"])(e.tagNavList),
            L["a"].push(n)
        },
        O = {
            state: {
                breadCrumbList: [],
                tagNavList: [],
                homeRoute: {},
                local: Object(b["k"])("local"),
                errorList: [],
                hasReadErrorPage: !1,
                menuList: []
            },
            getters: {
                errorCount: function (e) {
                    return e.errorList.length
                },
                menuList: function (e) {
                    return e.menuList
                }
            },
            mutations: {
                setBreadCrumb: function (e, t) {
                    e.breadCrumbList = Object(b["b"])(t, e.homeRoute)
                },
                setHomeRoute: function (e, t) {
                    e.homeRoute = Object(b["c"])(t, x)
                },
                setTagNavList: function (e, t) {
                    var n = [];
                    n = t ? Object(k["a"])(t) : Object(b["h"])() || [],
                    n[0] && n[0].name !== x && n.shift();
                    var a = n.findIndex(function (e) {
                        return e.name === x
                    });
                    if (a > 0) {
                        var r = n.splice(a, 1)[0];
                        n.unshift(r)
                    }
                    e.tagNavList = n,
                    Object(b["p"])(Object(k["a"])(n))
                },
                closeTag: function (e, t) {
                    var n = e.tagNavList.filter(function (e) {
                        return Object(b["m"])(e, t)
                    });
                    t = n[0] ? n[0] : null,
                    t && (t.meta && t.meta.beforeCloseName && t.meta.beforeCloseName in y["a"] ? new Promise(y["a"][t.meta.beforeCloseName]).then(function (n) {
                            n && N(e, t)
                        }) : N(e, t))
                },
                addTag: function (e, t) {
                    var n = t.route,
                    a = t.type,
                    r = void 0 === a ? "unshift" : a,
                    o = Object(b["g"])(n);
                    Object(b["n"])(e.tagNavList, o) || ("push" === r ? e.tagNavList.push(o) : o.name === x ? e.tagNavList.unshift(o) : e.tagNavList.splice(1, 0, o), Object(b["p"])(Object(k["a"])(e.tagNavList)))
                },
                setLocal: function (e, t) {
                    Object(b["l"])("local", t),
                    e.local = t
                },
                addError: function (e, t) {
                    e.errorList.push(t)
                },
                setHasReadErrorLoggerStatus: function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    e.hasReadErrorPage = t
                },
                setMenuList: function (e, t) {
                    e.menuList = Object(b["d"])(t)
                },
                refreshMenuList: function (e, t) {
                    Object(L["b"])(),
                    L["a"].addRoutes(t.concat([{
                                    path: "*",
                                    redirect: "/404"
                                }
                            ]), {
                        replace: !0
                    }),
                    e.menuList = t
                }
            },
            actions: {
                addErrorLog: function (e, t) {
                    var n = e.commit,
                    a = e.rootState;
                    window.location.href.includes("error_logger_page") || n("setHasReadErrorLoggerStatus", !1);
                    var r = a.user,
                    o = r.token,
                    i = r.userGuid,
                    c = r.userName,
                    s = Object(_["a"])({}, t, {
                        time: Date.parse(new Date),
                        token: o,
                        userGuid: i,
                        userName: c
                    });
                    Object(C["b"])(t).then(function () {
                        n("addError", s)
                    })
                },
                refreshMenuList: function (e, t) {
                    e.state;
                    var n = e.commit;
                    return new Promise(function (e, a) {
                        try {
                            n("setMenuList", t),
                            n("refreshMenuList", t),
                            e()
                        } catch (e) {
                            a(e)
                        }
                    })
                },
                closeTag: function (e, t) {
                    e.state;
                    var n = e.commit;
                    n("closeTag", {
                        name: t
                    })
                }
            }
        };
        a["default"].use(r["a"]);
        t["a"] = new r["a"].Store({
            state: {},
            mutations: {},
            actions: {},
            modules: {
                user: w,
                app: O
            }
        })
    },
    "460b": function (e, t, n) {},
    "4a30": function (e, t, n) {
        var a = {
            "./view/argu-page/params": ["2b64", 9, "chunk-60ce"],
            "./view/argu-page/params.vue": ["2b64", 9, "chunk-60ce"],
            "./view/argu-page/query": ["8f04", 9, "chunk-15fb"],
            "./view/argu-page/query.vue": ["8f04", 9, "chunk-15fb"],
            "./view/demo/demo-page": ["9d24", 9, "9d24"],
            "./view/demo/demo-page.vue": ["9d24", 9, "9d24"],
            "./view/error-page/401": ["f94f", 9, "chunk-cef6"],
            "./view/error-page/401.vue": ["f94f", 9, "chunk-cef6"],
            "./view/error-page/404": ["35f5", 9, "chunk-affa"],
            "./view/error-page/404.vue": ["35f5", 9, "chunk-affa"],
            "./view/error-page/500": ["88b2", 9, "chunk-0eb0"],
            "./view/error-page/500.vue": ["88b2", 9, "chunk-0eb0"],
            "./view/error-page/back-btn-group": ["c1a1", 9, "chunk-ae5a"],
            "./view/error-page/back-btn-group.vue": ["c1a1", 9, "chunk-ae5a"],
            "./view/error-page/error-content": ["9454", 9, "chunk-3e69"],
            "./view/error-page/error-content.vue": ["9454", 9, "chunk-3e69"],
            "./view/error-page/error.less": ["0eb4", 7, "chunk-9f4a"],
            "./view/error-store/error-store": ["0886", 9, "chunk-4a80"],
            "./view/error-store/error-store.vue": ["0886", 9, "chunk-4a80"],
            "./view/join-page": ["55a8", 9, "chunk-6f78"],
            "./view/join-page.vue": ["55a8", 9, "chunk-6f78"],
            "./view/login/login": ["e49c", 9, "chunk-f1ca"],
            "./view/login/login.less": ["9763", 7, "chunk-1717"],
            "./view/login/login.vue": ["e49c", 9, "chunk-f1ca"],
            "./view/multimenu/level-2-1": ["24b6", 9, "24b6"],
            "./view/multimenu/level-2-1.vue": ["24b6", 9, "24b6"],
            "./view/multimenu/level-2-2": ["0770", 9, "0770"],
            "./view/multimenu/level-2-2-1": ["5cfb", 9, "5cfb"],
            "./view/multimenu/level-2-2-1.vue": ["5cfb", 9, "5cfb"],
            "./view/multimenu/level-2-2-2": ["35e2", 9, "35e2"],
            "./view/multimenu/level-2-2-2.vue": ["35e2", 9, "35e2"],
            "./view/multimenu/level-2-2.vue": ["0770", 9, "0770"],
            "./view/rbac/icon": ["3ba3", 9, "chunk-13ac"],
            "./view/rbac/icon.vue": ["3ba3", 9, "chunk-13ac"],
            "./view/rbac/menu": ["c4e8", 9, "chunk-24ba"],
            "./view/rbac/menu.vue": ["c4e8", 9, "chunk-24ba"],
            "./view/rbac/permission": ["ffc3", 9, "chunk-2b8a"],
            "./view/rbac/permission.vue": ["ffc3", 9, "chunk-2b8a"],
            "./view/rbac/role": ["3678", 9, "chunk-57f0"],
            "./view/rbac/role-permission": ["df67", 9, "chunk-65fd"],
            "./view/rbac/role-permission.vue": ["df67", 9, "chunk-65fd"],
            "./view/rbac/role.vue": ["3678", 9, "chunk-57f0"],
            "./view/rbac/user": ["b1e8", 9, "chunk-3704"],
            "./view/rbac/user.vue": ["b1e8", 9, "chunk-3704"],
            "./view/single-page/error-logger": ["60b3", 9, "chunk-2f9a"],
            "./view/single-page/error-logger.vue": ["60b3", 9, "chunk-2f9a"],
            "./view/single-page/home": ["87b8", 9, "chunk-0d29", "chunk-7509", "87b8"],
            "./view/single-page/home/": ["87b8", 9, "chunk-0d29", "chunk-7509", "87b8"],
            "./view/single-page/home/example": ["649f", 9, "chunk-0d29"],
            "./view/single-page/home/example.vue": ["649f", 9, "chunk-0d29"],
            "./view/single-page/home/home": ["45e7", 9, "chunk-0d29", "chunk-7509"],
            "./view/single-page/home/home.vue": ["45e7", 9, "chunk-0d29", "chunk-7509"],
            "./view/single-page/home/index": ["87b8", 9, "chunk-0d29", "chunk-7509", "87b8"],
            "./view/single-page/home/index.js": ["87b8", 9, "chunk-0d29", "chunk-7509", "87b8"],
            "./view/single-page/message": ["3759", 9, "chunk-18cb"],
            "./view/single-page/message/": ["3759", 9, "chunk-18cb"],
            "./view/single-page/message/index": ["3759", 9, "chunk-18cb"],
            "./view/single-page/message/index.vue": ["3759", 9, "chunk-18cb"],
            "./view/tools-methods/tools-methods": ["dc64", 9, "chunk-622e"],
            "./view/tools-methods/tools-methods.vue": ["dc64", 9, "chunk-622e"]
        };
        function r(e) {
            var t = a[e];
            return t ? Promise.all(t.slice(2).map(n.e)).then(function () {
                var e = t[0];
                return n.t(e, t[1])
            }) : Promise.resolve().then(function () {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            })
        }
        r.keys = function () {
            return Object.keys(a)
        },
        r.id = "4a30",
        e.exports = r
    },
    "4ab1": function (e, t, n) {
        "use strict";
        var a = n("e069"),
        r = {
            before_close_normal: function (e) {
                a["Modal"].confirm({
                    title: "确定要关闭这一页吗",
                    onOk: function () {
                        console.log("close tab..."),
                        e(!0),
                        console.log("tab closed.")
                    },
                    onCancel: function () {
                        e(!1)
                    }
                })
            }
        };
        t["a"] = r
    },
    "55bd": function (e, t, n) {},
    "56d7": function (e, t, n) {
        "use strict";
        n.r(t);
        n("cadf"),
        n("551c"),
        n("097d");
        var a = n("2b0e"),
        r = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("router-view")], 1)
        },
        o = [],
        i = {
            name: "App"
        },
        c = i,
        s = (n("7c55"), n("2877")),
        u = Object(s["a"])(c, r, o, !1, null, null, null);
        u.options.__file = "App.vue";
        var l = u.exports,
        d = n("a18c"),
        m = n("4360"),
        f = n("e069"),
        h = n.n(f),
        p = (n("f751"), n("a925")),
        g = (n("c276"), {
            home: "首页",
            components: "组件",
            count_to_page: "数字渐变",
            tables_page: "多功能表格",
            split_pane_page: "分割窗口",
            markdown_page: "Markdown编辑器",
            editor_page: "富文本编辑器",
            icons_page: "自定义图标",
            img_cropper_page: "图片编辑器",
            update: "上传数据",
            join_page: "QQ群",
            doc: "文档",
            update_table_page: "上传CSV文件",
            update_paste_page: "粘贴表格数据",
            multilevel: "多级菜单",
            directive_page: "指令",
            level_1: "Level-1",
            level_2: "Level-2",
            level_2_1: "Level-2-1",
            level_2_3: "Level-2-3",
            level_2_2: "Level-2-2",
            level_2_2_1: "Level-2-2-1",
            level_2_2_2: "Level-2-2-2",
            excel: "Excel",
            "upload-excel": "上传excel",
            "export-excel": "导出excel",
            tools_methods_page: "工具函数",
            drag_list_page: "拖拽列表",
            i18n_page: "多语言",
            modalTitle: "模态框题目",
            content: "这是模态框内容",
            buttonText: "显示模态框",
            "i18n-tip": "注：仅此页做了多语言，其他页面没有在多语言包中添加语言内容",
            error_store_page: "错误收集",
            error_logger_page: "错误日志",
            query: "带参路由",
            params: "动态路由",
            cropper_page: "图片裁剪",
            message_page: "消息中心",
            tree_table_page: "树状表格",
            rbac: "用户及授权",
            rbac_user_page: "用户管理",
            rbac_role_page: "角色管理",
            rbac_permission_page: "权限管理",
            rbac_menu_page: "菜单管理",
            rbac_icon_page: "图标管理",
            rbac_role_permission_page: "角色权限分配",
            login: "登录"
        }),
        v = {
            home: "首頁",
            components: "组件",
            count_to_page: "数字渐变",
            tables_page: "多功能表格",
            split_pane_page: "分割窗口",
            markdown_page: "Markdown編輯器",
            editor_page: "富文本編輯器",
            icons_page: "自定義圖標",
            img_cropper_page: "圖片編輯器",
            update: "上傳數據",
            join_page: "QQ群",
            doc: "文檔",
            update_table_page: "上傳CSV文件",
            update_paste_page: "粘貼表格數據",
            multilevel: "多级菜单",
            directive_page: "指令",
            level_1: "Level-1",
            level_2: "Level-2",
            level_2_1: "Level-2-1",
            level_2_3: "Level-2-3",
            level_2_2: "Level-2-2",
            level_2_2_1: "Level-2-2-1",
            level_2_2_2: "Level-2-2-2",
            excel: "Excel",
            "upload-excel": "上傳excel",
            "export-excel": "導出excel",
            tools_methods_page: "工具函數",
            drag_list_page: "拖拽列表",
            i18n_page: "多語言",
            modalTitle: "模態框題目",
            content: "這是模態框內容",
            buttonText: "顯示模態框",
            "i18n-tip": "注：僅此頁做了多語言，其他頁面沒有在多語言包中添加語言內容",
            error_store_page: "錯誤收集",
            error_logger_page: "錯誤日誌",
            query: "帶參路由",
            params: "動態路由",
            cropper_page: "圖片裁剪",
            message_page: "消息中心",
            tree_table_page: "樹狀表格"
        },
        b = {
            home: "Home",
            components: "Components",
            count_to_page: "Count-to",
            tables_page: "Table",
            split_pane_page: "Split-pane",
            markdown_page: "Markdown-editor",
            editor_page: "Rich-Text-Editor",
            icons_page: "Custom-icon",
            img_cropper_page: "Image-editor",
            update: "Update",
            doc: "Document",
            join_page: "QQ Group",
            update_table_page: "Update .CSV",
            update_paste_page: "Paste Table Data",
            multilevel: "multilevel",
            directive_page: "Directive",
            level_1: "Level-1",
            level_2: "Level-2",
            level_2_1: "Level-2-1",
            level_2_3: "Level-2-3",
            level_2_2: "Level-2-2",
            level_2_2_1: "Level-2-2-1",
            level_2_2_2: "Level-2-2-2",
            excel: "Excel",
            "upload-excel": "Upload Excel",
            "export-excel": "Export Excel",
            tools_methods_page: "Tools Methods",
            drag_list_page: "Drag-list",
            i18n_page: "Internationalization",
            modalTitle: "Modal Title",
            content: "This is the modal box content.",
            buttonText: "Show Modal",
            "i18n-tip": "Note: Only this page is multi-language, other pages do not add language content to the multi-language package.",
            error_store_page: "Error Collection",
            error_logger_page: "Error Logger",
            query: "Query",
            params: "Params",
            cropper_page: "Cropper",
            message_page: "Message Center",
            tree_table_page: "Tree Table",
            rbac: "User & Role",
            rbac_user_page: "User Management",
            rbac_role_page: "Role Management",
            rbac_permission_page: "Permission Management",
            rbac_menu_page: "Menu Management",
            rbac_icon_page: "Icon Management",
            rbac_role_permission_page: "Role & Permission",
            login: "Login"
        },
        w = n("cea3"),
        _ = n("641c"),
        k = n("97b7");
        a["default"].use(p["a"]);
        navigator.language;
        var y = "zh-CN";
        a["default"].config.lang = y,
        a["default"].locale = function () {};
        var C = {
            "zh-CN": Object.assign(w["a"], g),
            "zh-TW": Object.assign(k["a"], v),
            "en-US": Object.assign(_["a"], b)
        },
        L = new p["a"]({
            locale: y,
            messages: C
        }),
        x = L,
        N = n("f121"),
        O = (n("28a5"), n("90de")),
        M = {
            inserted: function (e, t, n) {
                var a = document.querySelector(t.value.trigger);
                a.style.cursor = "move";
                var r = document.querySelector(t.value.body),
                o = 0,
                i = 0,
                c = 0,
                s = 0,
                u = !1,
                l = function (e) {
                    var t = /\(.*\)/.exec(r.style.transform);
                    if (t) {
                        t = t[0].slice(1, t[0].length - 1);
                        var n = t.split("px, ");
                        c = parseFloat(n[0]),
                        s = parseFloat(n[1].split("px")[0])
                    }
                    o = e.pageX,
                    i = e.pageY,
                    u = !0
                },
                d = function (e) {
                    var t = e.pageX - o + c,
                    n = e.pageY - i + s;
                    u && (r.style.transform = "translate(".concat(t, "px, ").concat(n, "px)"))
                },
                m = function (e) {
                    u = !1
                };
                Object(O["f"])(a, "mousedown", l),
                Object(O["f"])(document, "mousemove", d),
                Object(O["f"])(document, "mouseup", m)
            },
            update: function (e, t, n) {
                if (t.value.recover) {
                    var a = document.querySelector(t.value.body);
                    a.style.transform = ""
                }
            }
        },
        j = n("b311"),
        A = n.n(j),
        E = {
            bind: function (e, t) {
                var n = new A.a(e, {
                    text: function () {
                        return t.value.value
                    }
                });
                e.__success_callback__ = t.value.success,
                e.__error_callback__ = t.value.error,
                n.on("success", function (t) {
                    var n = e.__success_callback__;
                    n && n(t)
                }),
                n.on("error", function (t) {
                    var n = e.__error_callback__;
                    n && n(t)
                }),
                e.__clipboard__ = n
            },
            update: function (e, t) {
                e.__clipboard__.text = function () {
                    return t.value.value
                },
                e.__success_callback__ = t.value.success,
                e.__error_callback__ = t.value.error
            },
            unbind: function (e, t) {
                delete e.__success_callback__,
                delete e.__error_callback__,
                e.__clipboard__.destroy(),
                delete e.__clipboard__
            }
        },
        T = {
            draggable: M,
            clipboard: E
        },
        I = T,
        z = function (e) {
            e.directive("draggable", I.draggable),
            e.directive("clipboard", I.clipboard)
        },
        B = z,
        S = n("13aa"),
        U = (n("dcad"), n("ca62"), n("33ec"), n("ee1a")),
        D = n.n(U);
        n("9658"),
        n("6762"),
        n("2fdb");
        function R(e, t) {
            var n = document.createComment(" ");
            Object.defineProperty(n, "setAttribute", {
                value: function () {}
            }),
            t.text = " ",
            t.elm = n,
            t.isComment = !0,
            t.context = void 0,
            t.tag = void 0,
            t.data.directives = void 0,
            t.componentInstance && (t.componentInstance.$el = n),
            e.parentNode && e.parentNode.replaceChild(n, e)
        }
        var P = {
            install: function (e, t) {
                e.directive("can", {
                    bind: function (e, t, n) {
                        var a = n.context.$route.meta.checkPermission;
                        if (a) {
                            var r = n.context.$route.meta.permissions;
                            void 0 === r && (e.disabled = !0, R(e, n)),
                            r && r.length && !r.includes(t.value) && (e.disabled = !0, R(e, n))
                        }
                    }
                })
            }
        },
        G = P;
        a["default"].use(G),
        a["default"].use(h.a, {
            i18n: function (e, t) {
                return x.t(e, t)
            }
        }),
        a["default"].use(D.a),
        Object(S["default"])(a["default"]),
        a["default"].config.productionTip = !1,
        a["default"].prototype.$config = N["a"],
        B(a["default"]),
        new a["default"]({
            el: "#app",
            router: d["a"],
            i18n: x,
            store: m["a"],
            created: function () {},
            mounted: function () {
                setTimeout(function () {}, 1500)
            },
            render: function (e) {
                return e(l)
            }
        })
    },
    "5ac2": function (e, t, n) {
        "use strict";
        var a = n("3d00"),
        r = n.n(a);
        r.a
    },
    6372: function (e, t, n) {},
    "66df": function (e, t, n) {
        "use strict";
        n("f751"),
        n("ac6a"),
        n("456d");
        var a = n("c665"),
        r = n("aa9a"),
        o = (n("6762"), n("2fdb"), n("bc3a")),
        i = n.n(o),
        c = n("4360"),
        s = n("c276"),
        u = n("e069"),
        l = n.n(u),
        d = function (e) {
            var t = e.statusText,
            n = e.status,
            a = e.request.responseURL,
            r = {
                type: "ajax",
                code: n,
                mes: t,
                url: a
            };
            a.includes("save_error_logger") || c["a"].dispatch("addErrorLog", r)
        },
        m = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : baseURL,
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n;
                Object(a["a"])(this, e),
                this.baseUrl = t,
                this.defaultPrefix = n,
                this.queue = {}
            }
            return Object(r["a"])(e, [{
                        key: "getInsideConfig",
                        value: function () {
                            var e = {
                                baseURL: this.baseUrl,
                                headers: {
                                    Authorization: "Bearer " + Object(s["i"])()
                                }
                            };
                            return e
                        }
                    }, {
                        key: "destroy",
                        value: function (e) {
                            delete this.queue[e],
                            Object.keys(this.queue).length
                        }
                    }, {
                        key: "showError",
                        value: function (e, t) {
                            var n = "接口服务错误,请稍候再试.",
                            a = -1;
                            switch (e.response && e.response.status && (a = e.response.status), a) {
                            case 401:
                                n = "接口服务错误,原因:未授权的访问(没有权限或者登录已超时)";
                                break;
                            case 500:
                                n = "接口服务错误,原因:[" + e.response.statusText + "]";
                                break;
                            case -1:
                                n = "网络出错,请检查你的网络或者服务是否可用<br />请求地址:[" + e.config.url + "]";
                                break
                            }
                            u["Modal"].error({
                                title: "错误提示",
                                content: n,
                                duration: 15,
                                closable: !1
                            }),
                            l.a.LoadingBar.finish()
                        }
                    }, {
                        key: "interceptors",
                        value: function (e, t) {
                            var n = this;
                            e.interceptors.request.use(function (e) {
                                return Object.keys(n.queue).length || l.a.LoadingBar.start(),
                                n.queue[t] = !0,
                                e
                            }, function (e) {
                                return Promise.reject(e)
                            }),
                            e.interceptors.response.use(function (e) {
                                l.a.LoadingBar.finish(),
                                n.destroy(t);
                                var a = e.data,
                                r = e.status;
                                return {
                                    data: a,
                                    status: r
                                }
                            }, function (e) {
                                n.destroy(t);
                                var a = e.response;
                                if (!a) {
                                    var r = JSON.parse(JSON.stringify(e)),
                                    o = r.request,
                                    i = o.statusText,
                                    c = o.status,
                                    s = r.config;
                                    a = {
                                        statusText: i,
                                        status: c,
                                        request: {
                                            responseURL: s.url
                                        }
                                    }
                                }
                                return d(a),
                                null != e.config.hideError && 0 != e.config.hideError || n.showError(e),
                                l.a.LoadingBar.finish(),
                                Promise.reject(e)
                            })
                        }
                    }, {
                        key: "request",
                        value: function (e) {
                            var t = i.a.create(),
                            n = !0;
                            void 0 !== e.withPrefix && 0 == e.withPrefix && (n = !1);
                            var a = e.url;
                            return void 0 !== e.prefix && e.prefix.length > 0 ? a = e.prefix + e.url : n && (a = this.defaultPrefix + e.url),
                            e.url = a,
                            e = Object.assign(this.getInsideConfig(), e),
                            this.interceptors(t, e.url),
                            t(e)
                        }
                    }
                ]),
            e
        }
        (),
        f = m,
        h = n("f121"),
        p = h["a"].baseUrl.pro,
        g = h["a"].baseUrl.defaultPrefix,
        v = new f(p, g);
        t["a"] = v
    },
    "7a3c": function (e, t, n) {},
    "7c55": function (e, t, n) {
        "use strict";
        var a = n("d3dd"),
        r = n.n(a);
        r.a
    },
    "7e1e": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        }),
        n.d(t, "b", function () {
            return o
        });
        var a = n("66df"),
        r = function () {
            return a["a"].request({
                url: "error_url",
                method: "post"
            })
        },
        o = function (e) {
            return a["a"].request({
                url: "save_error_logger",
                hideError: !0,
                data: e,
                method: "post"
            })
        }
    },
    "90de": function (e, t, n) {
        "use strict";
        n.d(t, "a", function () {
            return r
        }),
        n.d(t, "b", function () {
            return o
        }),
        n.d(t, "c", function () {
            return i
        }),
        n.d(t, "f", function () {
            return c
        }),
        n.d(t, "e", function () {
            return s
        }),
        n.d(t, "d", function () {
            return u
        });
        n("456d"),
        n("c5f6");
        var a = n("8afe"),
        r = (n("ac6a"), n("4f7f"), n("1c4c"), function (e, t) {
            if (e.length && t) {
                var n = -1,
                a = e.length;
                while (++n < a) {
                    var r = e[n];
                    t(r, n, e)
                }
            }
        }),
        o = function (e, t) {
            return Array.from(new Set(Object(a["a"])(e).concat(Object(a["a"])(t))))
        },
        i = function (e, t) {
            return e.some(function (e) {
                return t.indexOf(e) > -1
            })
        };
        var c = function () {
            return document.addEventListener ? function (e, t, n) {
                e && t && n && e.addEventListener(t, n, !1)
            }
             : function (e, t, n) {
                e && t && n && e.attachEvent("on" + t, n)
            }
        }
        (),
        s = function () {
            return document.removeEventListener ? function (e, t, n) {
                e && t && e.removeEventListener(t, n, !1)
            }
             : function (e, t, n) {
                e && t && e.detachEvent("on" + t, n)
            }
        }
        (),
        u = function (e, t) {
            var n = Object.keys(e),
            a = Object.keys(t);
            return n.length === a.length && (0 === n.length && 0 === a.length || !n.some(function (n) {
                    return e[n] != t[n]
                }))
        }
    },
    9658: function (e, t, n) {
        "use strict";
        n("7f7f");
        var a = n("c276"),
        r = n("f1bd"),
        o = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("keep-alive", {
                attrs: {
                    exclude: e.notCacheName
                }
            }, [n("router-view", {
                        ref: "child"
                    })], 1)
        },
        i = [],
        c = {
            name: "ParentView",
            data: function () {
                return {
                    cacheChaildName: ""
                }
            },
            computed: {
                notCacheName: function () {
                    return this.$route.meta && this.$route.meta.notCache ? this.$route.name : ""
                }
            }
        },
        s = c,
        u = n("2877"),
        l = Object(u["a"])(s, o, i, !1, null, null, null);
        l.options.__file = "parent-view.vue";
        var d = l.exports,
        m = d,
        f = n("66df"),
        h = n("f121"),
        p = n("90de");
        n.d(t, "b", function () {
            return g
        }),
        n.d(t, "a", function () {
            return v
        });
        h["a"].baseUrl.pro;
        var g = function (e) {
            var t = [];
            return f["a"].request({
                url: "account/menu",
                method: "get"
            }).then(function (n) {
                var a = n.data;
                t = v(a),
                e.$store.commit("refreshMenuList", t)
            }),
            t
        },
        v = function e(t) {
            var o = [];
            return Object(p["a"])(t, function (t) {
                var i = {
                    path: t.path,
                    name: t.name,
                    icon: t.meta && t.meta.icon || ""
                };
                if (i.meta = t.meta, "0" === t.parentId)
                    i.component = r["a"];
                else {
                    var c = t.component;
                    t.children.length > 0 ? i.component = m : i.component = function () {
                        return n("4a30")("./view" + c)
                    }
                }
                Object(a["j"])(t) && (i.children = e(t.children)),
                o.push(i)
            }),
            o
        }
    },
    a18c: function (e, t, n) {
        "use strict";
        n.d(t, "b", function () {
            return _
        });
        n("7f7f");
        var a = n("8afe"),
        r = (n("cadf"), n("551c"), n("097d"), n("2b0e")),
        o = n("8c4f"),
        i = n("ddb9"),
        c = n("4360"),
        s = n("e069"),
        u = n.n(s),
        l = n("c276"),
        d = (n("90de"), n("c6bd"), n("66df")),
        m = n("f121"),
        f = n("9658"),
        h = m["a"].homeName;
        m["a"].baseUrl.pro;
        r["default"].use(o["a"]);
        var p = new o["a"]({
            routes: Object(a["a"])(i["a"]),
            mode: "hash"
        }),
        g = "login",
        v = function () {
            var e = [];
            return d["a"].request({
                url: "account/menu",
                method: "get"
            }).then(function (t) {
                var n = t.data;
                e = Object(f["a"])(n),
                c["a"].dispatch("refreshMenuList", e)
            }),
            e
        },
        b = function (e, t, n, a) {
            e.meta.checkPermission = t,
            n = n || [],
            n && n[e.name] && (e.meta.permissions = n[e.name]),
            a()
        };
        p.beforeEach(function (e, t, n) {
            (!e.matched || e.matched.length <= 0) && c["a"].state.user.hasGetInfo && (c["a"].dispatch("closeTag", e.name), n({
                    path: "/404",
                    replace: !0
                })),
            u.a.LoadingBar.start();
            var a = Object(l["i"])();
            if (a || e.name === g)
                if (a || e.name !== g)
                    if (a && e.name === g)
                        n({
                            name: h
                        });
                    else {
                        var r = !0;
                        c["a"].state.user.hasGetInfo ? (r = 0 != c["a"].state.user.user_type, n(), b(e, r, c["a"].state.user.permissions, n)) : c["a"].dispatch("getUserInfo").then(function (t) {
                            r = 0 != t.user_type,
                            v(),
                            b(e, r, t.permissions, n)
                        }).catch(function () {
                            Object(l["r"])(""),
                            n({
                                name: "login"
                            })
                        })
                    }
                else
                    n();
            else
                n({
                    name: g
                })
        }),
        p.afterEach(function (e) {
            Object(l["q"])(e, p.app),
            u.a.LoadingBar.finish(),
            window.scrollTo(0, 0)
        }),
        t["a"] = p;
        var w = function () {
            return new o["a"]({
                mode: "hash",
                routes: Object(a["a"])(i["a"])
            })
        };
        function _() {
            var e = w();
            p.matcher = e.matcher
        }
    },
    a81e: function (e, t, n) {},
    b554: function (e, t, n) {
        "use strict";
        var a = n("e2ff"),
        r = n.n(a);
        r.a
    },
    b7c7: function (e, t, n) {
        "use strict";
        n.r(t);
        var a = n("4360");
        t["default"] = {
            install: function (e, t) {
                t.developmentOff,
                e.config.errorHandler = function (t, n, r) {
                    var o = {
                        type: "script",
                        code: 0,
                        mes: t.message,
                        url: window.location.href
                    };
                    e.nextTick(function () {
                        a["a"].dispatch("addErrorLog", o)
                    })
                }
            }
        }
    },
    b858: function (e, t, n) {
        "use strict";
        var a = n("a81e"),
        r = n.n(a);
        r.a
    },
    c038: function (e, t, n) {
        "use strict";
        var a = n("6372"),
        r = n.n(a);
        r.a
    },
    c13c: function (e, t, n) {},
    c276: function (e, t, n) {
        "use strict";
        n.d(t, "r", function () {
            return l
        }),
        n.d(t, "i", function () {
            return d
        }),
        n.d(t, "j", function () {
            return m
        }),
        n.d(t, "d", function () {
            return f
        }),
        n.d(t, "b", function () {
            return h
        }),
        n.d(t, "g", function () {
            return p
        }),
        n.d(t, "s", function () {
            return g
        }),
        n.d(t, "p", function () {
            return v
        }),
        n.d(t, "h", function () {
            return b
        }),
        n.d(t, "c", function () {
            return w
        }),
        n.d(t, "e", function () {
            return _
        }),
        n.d(t, "f", function () {
            return k
        }),
        n.d(t, "a", function () {
            return C
        }),
        n.d(t, "m", function () {
            return L
        }),
        n.d(t, "n", function () {
            return x
        }),
        n.d(t, "l", function () {
            return N
        }),
        n.d(t, "k", function () {
            return O
        }),
        n.d(t, "o", function () {
            return M
        }),
        n.d(t, "q", function () {
            return j
        });
        n("ac6a"),
        n("28a5"),
        n("20d6"),
        n("a481"),
        n("6762"),
        n("2fdb");
        var a = n("8afe"),
        r = n("c93e"),
        o = (n("7f7f"), n("a78e"), n("f121")),
        i = n("90de"),
        c = o["a"].title,
        s = (o["a"].cookieExpires, o["a"].useI18n),
        u = "token",
        l = function (e) {
            localStorage.setItem(u, e)
        },
        d = function () {
            var e = localStorage.getItem(u);
            return e || ""
        },
        m = function (e) {
            return e.children && 0 !== e.children.length
        },
        f = function e(t) {
            var n = [];
            return Object(i["a"])(t, function (t) {
                if (!t.meta || t.meta && !t.meta.hideInMenu) {
                    var a = {
                        icon: t.meta && t.meta.icon || "",
                        name: t.name,
                        meta: t.meta
                    };
                    (m(t) || t.meta && t.meta.showAlways) && (a.children = e(t.children)),
                    t.meta && t.meta.href && (a.href = t.meta.href),
                    n.push(a)
                }
            }),
            n
        },
        h = function (e, t) {
            var n = Object(r["a"])({}, t, {
                icon: t.meta.icon
            }),
            o = e.matched;
            if (o.some(function (e) {
                    return e.name === t.name
                }))
                return [n];
            var i = o.filter(function (e) {
                return void 0 === e.meta || !e.meta.hideInBread
            }).map(function (t) {
                var n = Object(r["a"])({}, t.meta);
                n.title && "function" === typeof n.title && (n.__titleIsFunction__ = !0, n.title = n.title(e));
                var a = {
                    icon: t.meta && t.meta.icon || "",
                    name: t.name,
                    meta: n
                };
                return a
            });
            return i = i.filter(function (e) {
                return !e.meta.hideInMenu
            }),
            [Object(r["a"])({}, n, {
                    to: t.path
                })].concat(Object(a["a"])(i))
        },
        p = function (e) {
            var t = Object(r["a"])({}, e),
            n = Object(r["a"])({}, e.meta),
            a = "";
            return n.title && ("function" === typeof n.title ? (n.__titleIsFunction__ = !0, a = n.title(t)) : a = n.title),
            n.title = a,
            t.meta = n,
            t
        },
        g = function (e, t) {
            var n = e.meta,
            a = n.title,
            r = n.__titleIsFunction__;
            if (a)
                return a = s ? a.includes("{{") && a.includes("}}") && s ? a.replace(/({{[\s\S]+?}})/, function (e, n) {
                    return n.replace(/{{([\s\S]*)}}/, function (e, n) {
                        return t.$t(n.trim())
                    })
                }) : r ? e.meta.title : t.$t(e.name) : e.meta && e.meta.title || e.name, a
        },
        v = function (e) {
            localStorage.tagNaveList = JSON.stringify(e)
        },
        b = function () {
            var e = localStorage.tagNaveList;
            return e ? JSON.parse(e) : []
        },
        w = function e(t) {
            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "home",
            a = -1,
            r = t.length,
            o = {};
            while (++a < r) {
                var i = t[a];
                if (i.children && i.children.length) {
                    var c = e(i.children, n);
                    if (c.name)
                        return c
                } else
                    i.name === n && (o = i)
            }
            return o
        },
        _ = function (e, t) {
            var n = t.name,
            r = t.path,
            o = t.meta,
            i = Object(a["a"])(e);
            return i.findIndex(function (e) {
                return e.name === n
            }) >= 0 ? i : (i.push({
                    name: n,
                    path: r,
                    meta: o
                }), i)
        },
        k = function (e, t) {
            var n = {};
            if (2 === e.length)
                n = w(e);
            else {
                var a = e.findIndex(function (e) {
                    return L(e, t)
                });
                n = a === e.length - 1 ? e[e.length - 2] : e[a + 1]
            }
            return n
        },
        y = function (e, t) {
            var n = -1;
            while (++n < e)
                t(n)
        },
        C = function e(t, n) {
            var a = t.parentNode;
            if (a) {
                var r = a.classList;
                return r && n.every(function (e) {
                    return r.contains(e)
                }) ? a : e(a, n)
            }
        },
        L = function (e, t) {
            var n = e.params || {},
            a = t.params || {},
            r = e.query || {},
            o = t.query || {};
            return e.name === t.name && Object(i["d"])(n, a) && Object(i["d"])(r, o)
        },
        x = function (e, t) {
            var n = e.length,
            a = !1;
            return y(n, function (n) {
                L(e[n], t) && (a = !0)
            }),
            a
        },
        N = function (e, t) {
            localStorage.setItem(e, t)
        },
        O = function (e) {
            return localStorage.getItem(e) || ""
        },
        M = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
            n = arguments.length > 2 ? arguments[2] : void 0,
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 500,
            r = arguments.length > 4 ? arguments[4] : void 0;
            window.requestAnimationFrame || (window.requestAnimationFrame = window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                return window.setTimeout(e, 1e3 / 60)
            });
            var o = Math.abs(t - n),
            i = Math.ceil(o / a * 50),
            c = function t(n, a, o) {
                if (n !== a) {
                    var i = n + o > a ? a : n + o;
                    n > a && (i = n - o < a ? a : n - o),
                    e === window ? window.scrollTo(i, i) : e.scrollTop = i,
                    window.requestAnimationFrame(function () {
                        return t(i, a, o)
                    })
                } else
                    r && r()
            };
            c(t, n, i)
        },
        j = function (e, t) {
            var n = p(e),
            a = g(n, t),
            r = a ? "".concat(c, " - ").concat(a) : c;
            window.document.title = r
        }
    },
    c6bd: function (e, t, n) {
        "use strict"
    },
    c8c0: function (e, t) {
        e.exports = "data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpCQUYwNDc2QjNGQThFODExOTNENzg0MzQ1QkYwMUM5RiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2NTZFRDg2NEE4NDExMUU4QjU5MDlBN0U0MzhCMTc4NCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NTZFRDg2M0E4NDExMUU4QjU5MDlBN0U0MzhCMTc4NCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJBRjA0NzZCM0ZBOEU4MTE5M0Q3ODQzNDVCRjAxQzlGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJBRjA0NzZCM0ZBOEU4MTE5M0Q3ODQzNDVCRjAxQzlGIi8+IDwvcmRmOkRlc2NyaXB0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"
    },
    ca62: function (e, t, n) {},
    cb21: function (e, t, n) {
        "use strict";
        var a = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n(e.iconType, {
                tag: "component",
                attrs: {
                    type: e.iconName,
                    color: e.iconColor,
                    size: e.iconSize
                }
            })
        },
        r = [],
        o = (n("c5f6"), function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("i", {
                class: "iconfont icon-" + e.type,
                style: e.styles
            })
        }),
        i = [],
        c = {
            name: "Icons",
            props: {
                type: {
                    type: String,
                    required: !0
                },
                color: {
                    type: String,
                default:
                    "#5c6b77"
                },
                size: {
                    type: Number,
                default:
                    16
                }
            },
            computed: {
                styles: function () {
                    return {
                        fontSize: "".concat(this.size, "px"),
                        color: this.color
                    }
                }
            }
        },
        s = c,
        u = (n("5ac2"), n("2877")),
        l = Object(u["a"])(s, o, i, !1, null, null, null);
        l.options.__file = "icons.vue";
        var d = l.exports,
        m = d,
        f = {
            name: "CommonIcon",
            components: {
                Icons: m
            },
            props: {
                type: {
                    type: String,
                    required: !0,
                default:
                    function () {
                        return "Icon"
                    }
                },
                color: String,
                size: Number
            },
            computed: {
                iconType: function () {
                    return this.type && 0 === this.type.indexOf("_") ? "Icons" : "Icon"
                },
                iconName: function () {
                    return "Icons" === this.iconType ? this.getCustomIconName(this.type) : this.type
                },
                iconSize: function () {
                    return this.size || ("Icons" === this.iconType ? 12 : void 0)
                },
                iconColor: function () {
                    return this.color || ""
                }
            },
            methods: {
                getCustomIconName: function (e) {
                    return e.slice(1)
                }
            }
        },
        h = f,
        p = (n("0c4a"), Object(u["a"])(h, a, r, !1, null, null, null));
        p.options.__file = "common-icon.vue";
        var g = p.exports;
        t["a"] = g
    },
    d3dd: function (e, t, n) {},
    ddb9: function (e, t, n) {
        "use strict";
        var a = n("f1bd"),
        r = [{
                path: "/login",
                name: "login",
                meta: {
                    title: "Login - 登录",
                    hideInMenu: !0
                },
                component: function () {
                    return n.e("chunk-f1ca").then(n.bind(null, "e49c"))
                }
            }, {
                path: "/",
                name: "_home",
                redirect: "/home",
                component: a["a"],
                meta: {
                    hideInMenu: !0,
                    notCache: !0
                },
                children: [{
                        path: "/home",
                        name: "home",
                        meta: {
                            hideInMenu: !0,
                            title: "首页",
                            notCache: !0,
                            icon: "md-home"
                        },
                        component: function () {
                            return Promise.all([n.e("chunk-0d29"), n.e("chunk-7509"), n.e("87b8")]).then(n.bind(null, "87b8"))
                        }
                    }
                ]
            }, {
                path: "/message",
                name: "message",
                component: a["a"],
                meta: {
                    hideInBread: !0,
                    hideInMenu: !0
                },
                children: [{
                        path: "message_page",
                        name: "message_page",
                        meta: {
                            icon: "md-notifications",
                            title: "消息中心"
                        },
                        component: function () {
                            return n.e("chunk-18cb").then(n.bind(null, "3759"))
                        }
                    }
                ]
            }, {
                path: "/error_store",
                name: "error_store",
                meta: {
                    hideInBread: !0
                },
                component: a["a"],
                children: [{
                        path: "error_store_page",
                        name: "error_store_page",
                        meta: {
                            icon: "ios-bug",
                            title: "错误收集"
                        },
                        component: function () {
                            return n.e("chunk-4a80").then(n.bind(null, "0886"))
                        }
                    }
                ]
            }, {
                path: "/error_logger",
                name: "error_logger",
                meta: {
                    hideInBread: !0,
                    hideInMenu: !0
                },
                component: a["a"],
                children: [{
                        path: "error_logger_page",
                        name: "error_logger_page",
                        meta: {
                            icon: "ios-bug",
                            title: "错误收集"
                        },
                        component: function () {
                            return n.e("chunk-2f9a").then(n.bind(null, "60b3"))
                        }
                    }
                ]
            }, {
                path: "/argu",
                name: "argu",
                meta: {
                    hideInMenu: !0
                },
                component: a["a"],
                children: [{
                        path: "params/:id",
                        name: "params",
                        meta: {
                            icon: "md-flower",
                            title: function (e) {
                                return "动态参数-".concat(e.params.id)
                            },
                            notCache: !0,
                            beforeCloseName: "before_close_normal"
                        },
                        component: function () {
                            return n.e("chunk-60ce").then(n.bind(null, "2b64"))
                        }
                    }, {
                        path: "query",
                        name: "query",
                        meta: {
                            icon: "md-flower",
                            title: function (e) {
                                return "查询参数-".concat(e.query.id)
                            },
                            notCache: !0
                        },
                        component: function () {
                            return n.e("chunk-15fb").then(n.bind(null, "8f04"))
                        }
                    }
                ]
            }, {
                path: "/401",
                name: "error_401",
                meta: {
                    hideInMenu: !0
                },
                component: function () {
                    return n.e("chunk-cef6").then(n.bind(null, "f94f"))
                }
            }, {
                path: "/500",
                name: "error_500",
                meta: {
                    hideInMenu: !0
                },
                component: function () {
                    return n.e("chunk-0eb0").then(n.bind(null, "88b2"))
                }
            }, {
                path: "/404",
                name: "error_404",
                meta: {
                    hideInMenu: !0
                },
                component: function () {
                    return n.e("chunk-affa").then(n.bind(null, "35f5"))
                }
            }
        ],
        o = [];
        t["a"] = r.concat(o)
    },
    e282: function (e, t, n) {
        "use strict";
        var a = n("460b"),
        r = n.n(a);
        r.a
    },
    e2ff: function (e, t, n) {},
    f121: function (e, t, n) {
        "use strict";
        n("cadf"),
        n("551c"),
        n("097d");
        t["a"] = {
            title: "DncZeus通用后台权限管理框架",
            cookieExpires: 7,
            useI18n: !1,
            baseUrl: {
                dev: "https://dncdemo.azurewebsites.net/",
                pro: "https://dncdemo.azurewebsites.net/",
                defaultPrefix: "api/v1/"
            },
            authUrl: {
                dev: "https://dncdemo.azurewebsites.net/api/oauth/auth",
                pro: "https://dncdemo.azurewebsites.net/api/oauth/auth"
            },
            homeName: "home",
            plugin: {
                "error-store": {
                    showInHeader: !0,
                    developmentOff: !0
                }
            }
        }
    },
    f1bd: function (e, t, n) {
        "use strict";
        var a = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("Layout", {
                staticClass: "main",
                staticStyle: {
                    height: "100%"
                }
            }, [n("Sider", {
                        staticClass: "left-sider",
                        style: {
                            overflow: "hidden"
                        },
                        attrs: {
                            "hide-trigger": "",
                            collapsible: "",
                            width: 256,
                            "collapsed-width": 64
                        },
                        model: {
                            value: e.collapsed,
                            callback: function (t) {
                                e.collapsed = t
                            },
                            expression: "collapsed"
                        }
                    }, [n("side-menu", {
                                ref: "sideMenu",
                                attrs: {
                                    accordion: "",
                                    "active-name": e.$route.name,
                                    collapsed: e.collapsed,
                                    "menu-list": e.menuList
                                },
                                on: {
                                    "on-select": e.turnToPage
                                }
                            }, [n("div", {
                                        staticClass: "logo-con"
                                    }, [n("span", {
                                                directives: [{
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value: !e.collapsed,
                                                        expression: "!collapsed"
                                                    }
                                                ],
                                                staticStyle: {
                                                    color: "#fff",
                                                    "font-size": "26px",
                                                    "font-weight": "700",
                                                    "text-align": "center",
                                                    display: "block",
                                                    "letter-spacing": "2px",
                                                    "padding-top": "8px"
                                                }
                                            }, [e._v("DncZeus")]), n("span", {
                                                directives: [{
                                                        name: "show",
                                                        rawName: "v-show",
                                                        value: e.collapsed,
                                                        expression: "collapsed"
                                                    }
                                                ],
                                                staticStyle: {
                                                    color: "#fff",
                                                    "font-size": "30px",
                                                    "font-weight": "700",
                                                    "text-align": "center",
                                                    display: "block",
                                                    "padding-top": "5px"
                                                }
                                            }, [e._v("DZ")])])])], 1), n("Layout", [n("Header", {
                                staticClass: "header-con"
                            }, [n("header-bar", {
                                        attrs: {
                                            collapsed: e.collapsed
                                        },
                                        on: {
                                            "on-coll-change": e.handleCollapsedChange
                                        }
                                    }, [n("user", {
                                                attrs: {
                                                    "message-unread-count": e.unreadCount,
                                                    "user-avator": e.userAvator
                                                }
                                            }), e.$config.useI18n ? n("language", {
                                                staticStyle: {
                                                    "margin-right": "10px"
                                                },
                                                attrs: {
                                                    lang: e.local
                                                },
                                                on: {
                                                    "on-lang-change": e.setLocal
                                                }
                                            }) : e._e(), e.$config.plugin["error-store"] && e.$config.plugin["error-store"].showInHeader ? n("error-store", {
                                                attrs: {
                                                    "has-read": e.hasReadErrorPage,
                                                    count: e.errorCount
                                                }
                                            }) : e._e(), n("fullscreen", {
                                                staticStyle: {
                                                    "margin-right": "10px"
                                                },
                                                model: {
                                                    value: e.isFullscreen,
                                                    callback: function (t) {
                                                        e.isFullscreen = t
                                                    },
                                                    expression: "isFullscreen"
                                                }
                                            })], 1)], 1), n("Content", {
                                staticClass: "main-content-con"
                            }, [n("Layout", {
                                        staticClass: "main-layout-con"
                                    }, [n("div", {
                                                staticClass: "tag-nav-wrapper"
                                            }, [n("tags-nav", {
                                                        attrs: {
                                                            value: e.$route,
                                                            list: e.tagNavList
                                                        },
                                                        on: {
                                                            input: e.handleClick,
                                                            "on-close": e.handleCloseTag
                                                        }
                                                    })], 1), n("Content", {
                                                staticClass: "content-wrapper"
                                            }, [n("keep-alive", {
                                                        attrs: {
                                                            include: e.cacheList
                                                        }
                                                    }, [n("router-view")], 1), n("ABackTop", {
                                                        attrs: {
                                                            height: 100,
                                                            bottom: 80,
                                                            right: 50,
                                                            container: ".content-wrapper"
                                                        }
                                                    })], 1)], 1)], 1)], 1)], 1)
        },
        r = [],
        o = (n("7514"), n("28a5"), n("7f7f"), n("8afe")),
        i = n("c93e"),
        c = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                staticClass: "side-menu-wrapper"
            }, [e._t("default"), n("Menu", {
                        directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.collapsed,
                                expression: "!collapsed"
                            }
                        ],
                        ref: "menu",
                        attrs: {
                            "active-name": e.activeName,
                            "open-names": e.openedNames,
                            accordion: e.accordion,
                            theme: e.theme,
                            width: "auto"
                        },
                        on: {
                            "on-select": e.handleSelect
                        }
                    }, [e._l(e.menuList, function (t) {
                                return [t.children && 1 === t.children.length ? [e.showChildren(t) ? n("side-menu-item", {
                                            key: "menu-" + t.name,
                                            attrs: {
                                                "parent-item": t
                                            }
                                        }) : n("menu-item", {
                                            key: "menu-" + t.children[0].name,
                                            attrs: {
                                                name: e.getNameOrHref(t, !0)
                                            }
                                        }, [n("common-icon", {
                                                    attrs: {
                                                        type: t.children[0].icon || ""
                                                    }
                                                }), n("span", [e._v(e._s(e.showTitle(t.children[0])))])], 1)] : [e.showChildren(t) ? n("side-menu-item", {
                                            key: "menu-" + t.name,
                                            attrs: {
                                                "parent-item": t
                                            }
                                        }) : n("menu-item", {
                                            key: "menu-" + t.name,
                                            attrs: {
                                                name: e.getNameOrHref(t)
                                            }
                                        }, [n("common-icon", {
                                                    attrs: {
                                                        type: t.icon || ""
                                                    }
                                                }), n("span", [e._v(e._s(e.showTitle(t)))])], 1)]]
                            })], 2), n("div", {
                        directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.collapsed,
                                expression: "collapsed"
                            }
                        ],
                        staticClass: "menu-collapsed",
                        attrs: {
                            list: e.menuList
                        }
                    }, [e._l(e.menuList, function (t) {
                                return [t.children && t.children.length > 1 ? n("collapsed-menu", {
                                        key: "drop-menu-" + t.name,
                                        attrs: {
                                            "hide-title": "",
                                            "root-icon-size": e.rootIconSize,
                                            "icon-size": e.iconSize,
                                            theme: e.theme,
                                            "parent-item": t
                                        },
                                        on: {
                                            "on-click": e.handleSelect
                                        }
                                    }) : n("Tooltip", {
                                        key: "drop-menu-" + t.name,
                                        attrs: {
                                            transfer: "",
                                            content: e.showTitle(t.children && t.children[0] ? t.children[0] : t),
                                            placement: "right"
                                        }
                                    }, [n("a", {
                                                staticClass: "drop-menu-a",
                                                style: {
                                                    textAlign: "center"
                                                },
                                                on: {
                                                    click: function (n) {
                                                        e.handleSelect(e.getNameOrHref(t, !0))
                                                    }
                                                }
                                            }, [n("common-icon", {
                                                        attrs: {
                                                            size: e.rootIconSize,
                                                            color: e.textColor,
                                                            type: t.icon || t.children && t.children[0].icon
                                                        }
                                                    })], 1)])]
                            })], 2)], 2)
        },
        s = [],
        u = (n("c5f6"), n("cadf"), n("551c"), n("097d"), function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("Submenu", {
                attrs: {
                    name: "" + e.parentName
                }
            }, [n("template", {
                        slot: "title"
                    }, [n("common-icon", {
                                attrs: {
                                    type: e.parentItem.icon || ""
                                }
                            }), n("span", [e._v(e._s(e.showTitle(e.parentItem)))])], 1), e._l(e.children, function (t) {
                        return [t.children && 1 === t.children.length ? [e.showChildren(t) ? n("side-menu-item", {
                                    key: "menu-" + t.name,
                                    attrs: {
                                        "parent-item": t
                                    }
                                }) : n("menu-item", {
                                    key: "menu-" + t.children[0].name,
                                    attrs: {
                                        name: e.getNameOrHref(t, !0)
                                    }
                                }, [n("common-icon", {
                                            attrs: {
                                                type: t.children[0].icon || ""
                                            }
                                        }), n("span", [e._v(e._s(e.showTitle(t.children[0])))])], 1)] : [e.showChildren(t) ? n("side-menu-item", {
                                    key: "menu-" + t.name,
                                    attrs: {
                                        "parent-item": t
                                    }
                                }) : n("menu-item", {
                                    key: "menu-" + t.name,
                                    attrs: {
                                        name: e.getNameOrHref(t)
                                    }
                                }, [n("common-icon", {
                                            attrs: {
                                                type: t.icon || ""
                                            }
                                        }), n("span", [e._v(e._s(e.showTitle(t)))])], 1)]]
                    })], 2)
        }),
        l = [],
        d = n("cb21"),
        m = n("c276"),
        f = {
            components: {
                CommonIcon: d["a"]
            },
            methods: {
                showTitle: function (e) {
                    return Object(m["s"])(e, this)
                },
                showChildren: function (e) {
                    return e.children && (e.children.length > 1 || e.meta && e.meta.showAlways)
                },
                getNameOrHref: function (e, t) {
                    return e.href ? "isTurnByHref_".concat(e.href) : t ? e.children[0].name : e.name
                }
            }
        },
        h = {
            props: {
                parentItem: {
                    type: Object,
                default:
                    function () {}
                },
                theme: String,
                iconSize: Number
            },
            computed: {
                parentName: function () {
                    return this.parentItem.name
                },
                children: function () {
                    return this.parentItem.children
                },
                textColor: function () {
                    return "dark" === this.theme ? "#fff" : "#495060"
                }
            }
        },
        p = {
            name: "SideMenuItem",
            mixins: [f, h]
        },
        g = p,
        v = n("2877"),
        b = Object(v["a"])(g, u, l, !1, null, null, null);
        b.options.__file = "side-menu-item.vue";
        var w = b.exports,
        _ = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("Dropdown", {
                ref: "dropdown",
                class: e.hideTitle ? "" : "collased-menu-dropdown",
                attrs: {
                    transfer: e.hideTitle,
                    placement: e.placement
                },
                on: {
                    "on-click": e.handleClick
                }
            }, [n("a", {
                        staticClass: "drop-menu-a",
                        style: {
                            textAlign: e.hideTitle ? "" : "left"
                        },
                        attrs: {
                            type: "text"
                        },
                        on: {
                            mouseover: function (t) {
                                e.handleMousemove(t, e.children)
                            }
                        }
                    }, [n("common-icon", {
                                attrs: {
                                    size: e.rootIconSize,
                                    color: e.textColor,
                                    type: e.parentItem.icon
                                }
                            }), e.hideTitle ? e._e() : n("span", {
                                staticClass: "menu-title"
                            }, [e._v(e._s(e.showTitle(e.parentItem)))]), e.hideTitle ? e._e() : n("Icon", {
                                staticStyle: {
                                    float: "right"
                                },
                                attrs: {
                                    type: "ios-arrow-forward",
                                    size: 16
                                }
                            })], 1), n("DropdownMenu", {
                        ref: "dropdown",
                        attrs: {
                            slot: "list"
                        },
                        slot: "list"
                    }, [e._l(e.children, function (t) {
                                return [e.showChildren(t) ? n("collapsed-menu", {
                                        key: "drop-" + t.name,
                                        attrs: {
                                            "icon-size": e.iconSize,
                                            "parent-item": t
                                        }
                                    }) : n("DropdownItem", {
                                        key: "drop-" + t.name,
                                        attrs: {
                                            name: t.name
                                        }
                                    }, [n("common-icon", {
                                                attrs: {
                                                    size: e.iconSize,
                                                    type: t.icon
                                                }
                                            }), n("span", {
                                                staticClass: "menu-title"
                                            }, [e._v(e._s(e.showTitle(t)))])], 1)]
                            })], 2)], 1)
        },
        k = [],
        y = {
            name: "CollapsedMenu",
            mixins: [f, h],
            props: {
                hideTitle: {
                    type: Boolean,
                default:
                    !1
                },
                rootIconSize: {
                    type: Number,
                default:
                    16
                }
            },
            data: function () {
                return {
                    placement: "right-end"
                }
            },
            methods: {
                handleClick: function (e) {
                    this.$emit("on-click", e)
                },
                handleMousemove: function (e, t) {
                    var n = e.pageY,
                    a = 38 * t.length,
                    r = n + a < window.innerHeight;
                    this.placement = r ? "right-start" : "right-end"
                }
            },
            mounted: function () {
                var e = Object(m["a"])(this.$refs.dropdown.$el, ["ivu-select-dropdown", "ivu-dropdown-transfer"]);
                e && (e.style.overflow = "visible")
            }
        },
        C = y,
        L = Object(v["a"])(C, _, k, !1, null, null, null);
        L.options.__file = "collapsed-menu.vue";
        var x = L.exports,
        N = n("90de"),
        O = {
            name: "SideMenu",
            mixins: [f],
            components: {
                SideMenuItem: w,
                CollapsedMenu: x
            },
            props: {
                menuList: {
                    type: Array,
                default:
                    function () {
                        return []
                    }
                },
                collapsed: {
                    type: Boolean
                },
                theme: {
                    type: String,
                default:
                    "dark"
                },
                rootIconSize: {
                    type: Number,
                default:
                    20
                },
                iconSize: {
                    type: Number,
                default:
                    16
                },
                accordion: Boolean,
                activeName: {
                    type: String,
                default:
                    ""
                },
                openNames: {
                    type: Array,
                default:
                    function () {
                        return []
                    }
                }
            },
            data: function () {
                return {
                    openedNames: []
                }
            },
            methods: {
                handleSelect: function (e) {
                    this.$emit("on-select", e)
                },
                getOpenedNamesByActiveName: function (e) {
                    return this.$route.matched.map(function (e) {
                        return e.name
                    }).filter(function (t) {
                        return t !== e
                    })
                },
                updateOpenName: function (e) {
                    e === this.$config.homeName ? this.openedNames = [] : this.openedNames = this.getOpenedNamesByActiveName(e)
                }
            },
            computed: {
                textColor: function () {
                    return "dark" === this.theme ? "#fff" : "#495060"
                }
            },
            watch: {
                activeName: function (e) {
                    this.accordion ? this.openedNames = this.getOpenedNamesByActiveName(e) : this.openedNames = Object(N["b"])(this.openedNames, this.getOpenedNamesByActiveName(e))
                },
                openNames: function (e) {
                    this.openedNames = e
                },
                openedNames: function () {
                    var e = this;
                    this.$nextTick(function () {
                        e.$refs.menu.updateOpened()
                    })
                }
            },
            mounted: function () {
                this.openedNames = Object(N["b"])(this.openedNames, this.getOpenedNamesByActiveName(name))
            }
        },
        M = O,
        j = (n("b554"), Object(v["a"])(M, c, s, !1, null, null, null));
        j.options.__file = "side-menu.vue";
        var A = j.exports,
        E = A,
        T = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                staticClass: "header-bar"
            }, [n("sider-trigger", {
                        attrs: {
                            collapsed: e.collapsed,
                            icon: "md-menu"
                        },
                        on: {
                            "on-change": e.handleCollpasedChange
                        }
                    }), n("custom-bread-crumb", {
                        staticStyle: {
                            "margin-left": "30px"
                        },
                        attrs: {
                            "show-icon": "",
                            list: e.breadCrumbList
                        }
                    }), n("div", {
                        staticClass: "custom-content-con"
                    }, [e._t("default")], 2)], 1)
        },
        I = [],
        z = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("a", {
                class: ["sider-trigger-a", e.collapsed ? "collapsed" : ""],
                attrs: {
                    type: "text"
                },
                on: {
                    click: e.handleChange
                }
            }, [n("Icon", {
                        attrs: {
                            type: e.icon,
                            size: e.size
                        }
                    })], 1)
        },
        B = [],
        S = {
            name: "siderTrigger",
            props: {
                collapsed: Boolean,
                icon: {
                    type: String,
                default:
                    "navicon-round"
                },
                size: {
                    type: Number,
                default:
                    26
                }
            },
            methods: {
                handleChange: function () {
                    this.$emit("on-change", !this.collapsed),
                    setTimeout(function () {
                        var e = window.document.createEvent("UIEvents");
                        e.initUIEvent("resize", !0, !1, window, 0),
                        window.dispatchEvent(e)
                    }, 200)
                }
            }
        },
        U = S,
        D = (n("b858"), Object(v["a"])(U, z, B, !1, null, null, null));
        D.options.__file = "sider-trigger.vue";
        var R = D.exports,
        P = R,
        G = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                staticClass: "custom-bread-crumb"
            }, [n("Breadcrumb", {
                        style: {
                            fontSize: e.fontSize + "px"
                        }
                    }, e._l(e.list, function (t) {
                            return n("BreadcrumbItem", {
                                key: "bread-crumb-" + t.name,
                                attrs: {
                                    to: t.to
                                }
                            }, [n("common-icon", {
                                        staticStyle: {
                                            "margin-right": "4px"
                                        },
                                        attrs: {
                                            type: t.icon || ""
                                        }
                                    }), e._v("\n      " + e._s(e.showTitle(t)) + "\n    ")], 1)
                        }))], 1)
        },
        Z = [],
        Y = (n("2785"), {
            name: "customBreadCrumb",
            components: {
                CommonIcon: d["a"]
            },
            props: {
                list: {
                    type: Array,
                default:
                    function () {
                        return []
                    }
                },
                fontSize: {
                    type: Number,
                default:
                    14
                },
                showIcon: {
                    type: Boolean,
                default:
                    !1
                }
            },
            methods: {
                showTitle: function (e) {
                    return Object(m["s"])(e, this)
                },
                isCustomIcon: function (e) {
                    return 0 === e.indexOf("_")
                },
                getCustomIconName: function (e) {
                    return e.slice(1)
                }
            }
        }),
        J = Y,
        F = Object(v["a"])(J, G, Z, !1, null, null, null);
        F.options.__file = "custom-bread-crumb.vue";
        var W = F.exports,
        q = W,
        V = (n("1a88"), {
            name: "HeaderBar",
            components: {
                siderTrigger: P,
                customBreadCrumb: q
            },
            props: {
                collapsed: Boolean
            },
            computed: {
                breadCrumbList: function () {
                    return this.$store.state.app.breadCrumbList
                }
            },
            methods: {
                handleCollpasedChange: function (e) {
                    this.$emit("on-coll-change", e)
                }
            }
        }),
        H = V,
        Q = Object(v["a"])(H, T, I, !1, null, null, null);
        Q.options.__file = "header-bar.vue";
        var X = Q.exports,
        K = X,
        $ = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                staticClass: "tags-nav"
            }, [n("div", {
                        staticClass: "close-con"
                    }, [n("Dropdown", {
                                staticStyle: {
                                    "margin-top": "7px"
                                },
                                attrs: {
                                    transfer: ""
                                },
                                on: {
                                    "on-click": e.handleTagsOption
                                }
                            }, [n("Button", {
                                        attrs: {
                                            size: "small",
                                            type: "text"
                                        }
                                    }, [n("Icon", {
                                                attrs: {
                                                    size: 18,
                                                    type: "ios-close-circle-outline"
                                                }
                                            })], 1), n("DropdownMenu", {
                                        attrs: {
                                            slot: "list"
                                        },
                                        slot: "list"
                                    }, [n("DropdownItem", {
                                                attrs: {
                                                    name: "close-all"
                                                }
                                            }, [e._v("关闭所有")]), n("DropdownItem", {
                                                attrs: {
                                                    name: "close-others"
                                                }
                                            }, [e._v("关闭其他")])], 1)], 1)], 1), n("ul", {
                        directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.visible,
                                expression: "visible"
                            }
                        ],
                        staticClass: "contextmenu",
                        style: {
                            left: e.contextMenuLeft + "px",
                            top: e.contextMenuTop + "px"
                        }
                    }, e._l(e.menuList, function (t, a) {
                            return n("li", {
                                key: a,
                                on: {
                                    click: function (t) {
                                        e.handleTagsOption(a)
                                    }
                                }
                            }, [e._v(e._s(t))])
                        })), n("div", {
                        staticClass: "btn-con left-btn"
                    }, [n("Button", {
                                attrs: {
                                    type: "text"
                                },
                                on: {
                                    click: function (t) {
                                        e.handleScroll(240)
                                    }
                                }
                            }, [n("Icon", {
                                        attrs: {
                                            size: 18,
                                            type: "ios-arrow-back"
                                        }
                                    })], 1)], 1), n("div", {
                        staticClass: "btn-con right-btn"
                    }, [n("Button", {
                                attrs: {
                                    type: "text"
                                },
                                on: {
                                    click: function (t) {
                                        e.handleScroll(-240)
                                    }
                                }
                            }, [n("Icon", {
                                        attrs: {
                                            size: 18,
                                            type: "ios-arrow-forward"
                                        }
                                    })], 1)], 1), n("div", {
                        ref: "scrollOuter",
                        staticClass: "scroll-outer",
                        on: {
                            DOMMouseScroll: e.handlescroll,
                            mousewheel: e.handlescroll
                        }
                    }, [n("div", {
                                ref: "scrollBody",
                                staticClass: "scroll-body",
                                style: {
                                    left: e.tagBodyLeft + "px"
                                }
                            }, [n("transition-group", {
                                        attrs: {
                                            name: "taglist-moving-animation"
                                        }
                                    }, e._l(e.list, function (t, a) {
                                            return n("Tag", {
                                                key: "tag-nav-" + a,
                                                ref: "tagsPageOpened",
                                                refInFor: !0,
                                                attrs: {
                                                    type: "dot",
                                                    name: t.name,
                                                    "data-route-item": t,
                                                    closable: t.name !== e.$config.homeName,
                                                    color: e.isCurrentTag(t) ? "primary" : "default"
                                                },
                                                on: {
                                                    "on-close": function (n) {
                                                        e.handleClose(t)
                                                    }
                                                },
                                                nativeOn: {
                                                    click: function (n) {
                                                        e.handleClick(t)
                                                    },
                                                    contextmenu: function (n) {
                                                        n.preventDefault(),
                                                        e.contextMenu(t, n)
                                                    }
                                                }
                                            }, [e._v(e._s(e.showTitleInside(t)))])
                                        }))], 1)])])
        },
        ee = [],
        te = (n("ac6a"), n("6762"), n("2fdb"), n("4ab1")),
        ne = {
            name: "TagsNav",
            props: {
                value: Object,
                list: {
                    type: Array,
                default:
                    function () {
                        return []
                    }
                }
            },
            data: function () {
                return {
                    tagBodyLeft: 0,
                    rightOffset: 40,
                    outerPadding: 4,
                    contextMenuLeft: 0,
                    contextMenuTop: 0,
                    visible: !1,
                    menuList: {
                        others: "关闭其他",
                        all: "关闭所有"
                    }
                }
            },
            computed: {
                currentRouteObj: function () {
                    var e = this.value,
                    t = e.name,
                    n = e.params,
                    a = e.query;
                    return {
                        name: t,
                        params: n,
                        query: a
                    }
                }
            },
            methods: {
                handlescroll: function (e) {
                    var t = e.type,
                    n = 0;
                    "DOMMouseScroll" !== t && "mousewheel" !== t || (n = e.wheelDelta ? e.wheelDelta : 40 *  - (e.detail || 0)),
                    this.handleScroll(n)
                },
                handleScroll: function (e) {
                    var t = this.$refs.scrollOuter.offsetWidth,
                    n = this.$refs.scrollBody.offsetWidth;
                    e > 0 ? this.tagBodyLeft = Math.min(0, this.tagBodyLeft + e) : t < n ? this.tagBodyLeft <  - (n - t) ? this.tagBodyLeft = this.tagBodyLeft : this.tagBodyLeft = Math.max(this.tagBodyLeft + e, t - n) : this.tagBodyLeft = 0
                },
                handleTagsOption: function (e) {
                    var t = this;
                    if (e.includes("all")) {
                        var n = this.list.filter(function (e) {
                            return e.name === t.$config.homeName
                        });
                        this.$emit("on-close", n, "all")
                    } else if (e.includes("others")) {
                        var a = this.list.filter(function (e) {
                            return Object(m["m"])(t.currentRouteObj, e) || e.name === t.$config.homeName
                        });
                        this.$emit("on-close", a, "others", this.currentRouteObj),
                        setTimeout(function () {
                            t.getTagElementByName(t.currentRouteObj.name)
                        }, 100)
                    }
                },
                handleClose: function (e) {
                    var t = this;
                    e.meta && e.meta.beforeCloseName && e.meta.beforeCloseName in te["a"] ? new Promise(te["a"][e.meta.beforeCloseName]).then(function (n) {
                        n && t.close(e)
                    }) : this.close(e)
                },
                close: function (e) {
                    var t = this.list.filter(function (t) {
                        return !Object(m["m"])(e, t)
                    });
                    this.$emit("on-close", t, void 0, e)
                },
                handleClick: function (e) {
                    this.$emit("input", e)
                },
                showTitleInside: function (e) {
                    return Object(m["s"])(e, this)
                },
                isCurrentTag: function (e) {
                    return Object(m["m"])(this.currentRouteObj, e)
                },
                moveToView: function (e) {
                    var t = this.$refs.scrollOuter.offsetWidth,
                    n = this.$refs.scrollBody.offsetWidth;
                    n < t ? this.tagBodyLeft = 0 : e.offsetLeft < -this.tagBodyLeft ? this.tagBodyLeft = -e.offsetLeft + this.outerPadding : e.offsetLeft > -this.tagBodyLeft && e.offsetLeft + e.offsetWidth < -this.tagBodyLeft + t ? this.tagBodyLeft = Math.min(0, t - e.offsetWidth - e.offsetLeft - this.outerPadding) : this.tagBodyLeft =  - (e.offsetLeft - (t - this.outerPadding - e.offsetWidth))
                },
                getTagElementByName: function (e) {
                    var t = this;
                    this.$nextTick(function () {
                        t.refsTag = t.$refs.tagsPageOpened,
                        t.refsTag.forEach(function (n, a) {
                            if (Object(m["m"])(e, n.$attrs["data-route-item"])) {
                                var r = t.refsTag[a].$el;
                                t.moveToView(r)
                            }
                        })
                    })
                },
                contextMenu: function (e, t) {
                    if (e.name !== this.$config.homeName) {
                        this.visible = !0;
                        var n = this.$el.getBoundingClientRect().left;
                        this.contextMenuLeft = t.clientX - n + 10,
                        this.contextMenuTop = t.clientY - 64
                    }
                },
                closeMenu: function () {
                    this.visible = !1
                }
            },
            watch: {
                $route: function (e) {
                    this.getTagElementByName(e)
                },
                visible: function (e) {
                    e ? document.body.addEventListener("click", this.closeMenu) : document.body.removeEventListener("click", this.closeMenu)
                }
            },
            mounted: function () {
                var e = this;
                setTimeout(function () {
                    e.getTagElementByName(e.$route)
                }, 200)
            }
        },
        ae = ne,
        re = (n("37a8"), Object(v["a"])(ae, $, ee, !1, null, null, null));
        re.options.__file = "tags-nav.vue";
        var oe = re.exports,
        ie = oe,
        ce = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                staticClass: "user-avator-dropdown"
            }, [n("Dropdown", {
                        on: {
                            "on-click": e.handleClick
                        }
                    }, [n("Badge", {
                                attrs: {
                                    dot: !!e.messageUnreadCount
                                }
                            }, [n("Avatar", {
                                        attrs: {
                                            src: e.userAvator
                                        }
                                    }), n("span", [e._v(" " + e._s(this.$store.state.user.userName) + " ")])], 1), n("Icon", {
                                attrs: {
                                    size: 18,
                                    type: "md-arrow-dropdown"
                                }
                            }), n("DropdownMenu", {
                                attrs: {
                                    slot: "list"
                                },
                                slot: "list"
                            }, [n("DropdownItem", {
                                        attrs: {
                                            name: "message"
                                        }
                                    }, [e._v("\n        消息中心"), n("Badge", {
                                                staticStyle: {
                                                    "margin-left": "10px"
                                                },
                                                attrs: {
                                                    count: e.messageUnreadCount
                                                }
                                            })], 1), n("DropdownItem", {
                                        attrs: {
                                            name: "logout"
                                        }
                                    }, [e._v("退出登录")])], 1)], 1)], 1)
        },
        se = [],
        ue = (n("3daa"), n("2f62")),
        le = {
            name: "User",
            props: {
                userAvator: {
                    type: String,
                default:
                    ""
                },
                messageUnreadCount: {
                    type: Number,
                default:
                    0
                }
            },
            methods: Object(i["a"])({}, Object(ue["b"])(["handleLogOut"]), {
                logout: function () {
                    var e = this;
                    this.$Modal.confirm({
                        title: "退出确认",
                        content: "确定要退出系统吗?",
                        okText: "确定退出",
                        cancelText: "再想想",
                        loading: !0,
                        onOk: function () {
                            setTimeout(function () {
                                e.handleLogOut().then(function () {
                                    e.$Modal.remove(),
                                    e.$router.push({
                                        name: "login"
                                    })
                                })
                            }, 1500)
                        }
                    })
                },
                message: function () {
                    this.$router.push({
                        name: "message_page"
                    })
                },
                handleClick: function (e) {
                    switch (e) {
                    case "logout":
                        this.logout();
                        break;
                    case "message":
                        this.message();
                        break
                    }
                }
            })
        },
        de = le,
        me = Object(v["a"])(de, ce, se, !1, null, null, null);
        me.options.__file = "user.vue";
        var fe = me.exports,
        he = fe,
        pe = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                class: e.classes,
                style: e.styles,
                on: {
                    click: e.back
                }
            }, [e._t("default", [n("div", {
                                class: e.innerClasses
                            }, [n("i", {
                                        staticClass: "ivu-icon ivu-icon-ios-arrow-up"
                                    })])])], 2)
        },
        ge = [],
        ve = n("a322"),
        be = "ivu-back-top",
        we = {
            name: "ABackTop",
            props: {
                height: {
                    type: Number,
                default:
                    400
                },
                bottom: {
                    type: Number,
                default:
                    30
                },
                right: {
                    type: Number,
                default:
                    30
                },
                duration: {
                    type: Number,
                default:
                    1e3
                },
                container: {
                    type: null,
                default:
                    window
                }
            },
            data: function () {
                return {
                    backTop: !1
                }
            },
            mounted: function () {
                Object(N["f"])(this.containerEle, "scroll", this.handleScroll),
                Object(N["f"])(this.containerEle, "resize", this.handleScroll)
            },
            beforeDestroy: function () {
                Object(N["e"])(this.containerEle, "scroll", this.handleScroll),
                Object(N["e"])(this.containerEle, "resize", this.handleScroll)
            },
            computed: {
                classes: function () {
                    return ["".concat(be), Object(ve["a"])({}, "".concat(be, "-show"), this.backTop)]
                },
                styles: function () {
                    return {
                        bottom: "".concat(this.bottom, "px"),
                        right: "".concat(this.right, "px")
                    }
                },
                innerClasses: function () {
                    return "".concat(be, "-inner")
                },
                containerEle: function () {
                    return this.container === window ? window : document.querySelector(this.container)
                }
            },
            methods: {
                handleScroll: function () {
                    this.backTop = this.containerEle.scrollTop >= this.height
                },
                back: function () {
                    var e = "string" === typeof this.container ? this.containerEle : document.documentElement || document.body,
                    t = e.scrollTop;
                    Object(m["o"])(this.containerEle, t, 0, this.duration),
                    this.$emit("on-click")
                }
            }
        },
        _e = we,
        ke = Object(v["a"])(_e, pe, ge, !1, null, null, null);
        ke.options.__file = "index.vue";
        var ye = ke.exports,
        Ce = ye,
        Le = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return e.showFullScreenBtn ? n("div", {
                staticClass: "full-screen-btn-con"
            }, [n("Tooltip", {
                        attrs: {
                            content: e.value ? "退出全屏" : "全屏",
                            placement: "bottom"
                        }
                    }, [n("Icon", {
                                attrs: {
                                    type: e.value ? "md-contract" : "md-expand",
                                    size: 23
                                },
                                nativeOn: {
                                    click: function (t) {
                                        return e.handleChange(t)
                                    }
                                }
                            })], 1)], 1) : e._e()
        },
        xe = [],
        Ne = {
            name: "Fullscreen",
            computed: {
                showFullScreenBtn: function () {
                    return window.navigator.userAgent.indexOf("MSIE") < 0
                }
            },
            props: {
                value: {
                    type: Boolean,
                default:
                    !1
                }
            },
            methods: {
                handleFullscreen: function () {
                    var e = document.body;
                    this.value ? document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen() : e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullScreen ? e.webkitRequestFullScreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                },
                handleChange: function () {
                    this.handleFullscreen()
                }
            },
            mounted: function () {
                var e = this,
                t = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
                t = !!t,
                document.addEventListener("fullscreenchange", function () {
                    e.$emit("input", !e.value),
                    e.$emit("on-change", !e.value)
                }),
                document.addEventListener("mozfullscreenchange", function () {
                    e.$emit("input", !e.value),
                    e.$emit("on-change", !e.value)
                }),
                document.addEventListener("webkitfullscreenchange", function () {
                    e.$emit("input", !e.value),
                    e.$emit("on-change", !e.value)
                }),
                document.addEventListener("msfullscreenchange", function () {
                    e.$emit("input", !e.value),
                    e.$emit("on-change", !e.value)
                }),
                this.$emit("input", t)
            }
        },
        Oe = Ne,
        Me = (n("e282"), Object(v["a"])(Oe, Le, xe, !1, null, null, null));
        Me.options.__file = "fullscreen.vue";
        var je = Me.exports,
        Ae = je,
        Ee = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", [n("Dropdown", {
                        attrs: {
                            trigger: "click"
                        },
                        on: {
                            "on-click": e.selectLang
                        }
                    }, [n("a", {
                                attrs: {
                                    href: "javascript:void(0)"
                                }
                            }, [e._v("\n      " + e._s(e.title) + "\n      "), n("Icon", {
                                        attrs: {
                                            size: 18,
                                            type: "md-arrow-dropdown"
                                        }
                                    })], 1), n("DropdownMenu", {
                                attrs: {
                                    slot: "list"
                                },
                                slot: "list"
                            }, e._l(e.localList, function (t, a) {
                                    return n("DropdownItem", {
                                        key: "lang-" + a,
                                        attrs: {
                                            name: a
                                        }
                                    }, [e._v(e._s(t))])
                                }))], 1)], 1)
        },
        Te = [],
        Ie = {
            name: "Language",
            props: {
                lang: String
            },
            data: function () {
                return {
                    langList: {
                        "zh-CN": "语言",
                        "zh-TW": "語言",
                        "en-US": "Lang"
                    },
                    localList: {
                        "zh-CN": "中文简体",
                        "zh-TW": "中文繁体",
                        "en-US": "English"
                    }
                }
            },
            watch: {
                lang: function (e) {
                    this.$i18n.locale = e
                }
            },
            computed: {
                title: function () {
                    return this.langList[this.lang]
                }
            },
            methods: {
                selectLang: function (e) {
                    this.$emit("on-lang-change", e)
                }
            }
        },
        ze = Ie,
        Be = Object(v["a"])(ze, Ee, Te, !1, null, null, null);
        Be.options.__file = "language.vue";
        var Se = Be.exports,
        Ue = Se,
        De = function () {
            var e = this,
            t = e.$createElement,
            n = e._self._c || t;
            return n("div", {
                staticClass: "error-store"
            }, [n("Badge", {
                        attrs: {
                            dot: "",
                            count: e.countComputed
                        }
                    }, [n("Button", {
                                attrs: {
                                    type: "text"
                                },
                                on: {
                                    click: e.openErrorLoggerPage
                                }
                            }, [n("Icon", {
                                        attrs: {
                                            size: 20,
                                            type: "ios-bug"
                                        }
                                    })], 1)], 1)], 1)
        },
        Re = [],
        Pe = {
            name: "ErrorStore",
            props: {
                count: {
                    type: Number,
                default:
                    0
                },
                hasRead: {
                    type: Boolean,
                default:
                    !1
                }
            },
            computed: {
                countComputed: function () {
                    return this.hasRead ? 0 : this.count
                }
            },
            methods: {
                openErrorLoggerPage: function () {
                    this.$router.push({
                        name: "error_logger_page"
                    })
                }
            }
        },
        Ge = Pe,
        Ze = (n("c038"), Object(v["a"])(Ge, De, Re, !1, null, null, null));
        Ze.options.__file = "error-store.vue";
        var Ye = Ze.exports,
        Je = Ye,
        Fe = n("ddb9"),
        We = n("c8c0"),
        qe = n.n(We),
        Ve = n("17be"),
        He = n.n(Ve),
        Qe = (n("7a3c"), {
            name: "Main",
            components: {
                SideMenu: E,
                HeaderBar: K,
                Language: Ue,
                TagsNav: ie,
                Fullscreen: Ae,
                ErrorStore: Je,
                User: he,
                ABackTop: Ce
            },
            data: function () {
                return {
                    collapsed: !0,
                    minLogo: qe.a,
                    maxLogo: He.a,
                    isFullscreen: !1
                }
            },
            computed: Object(i["a"])({}, Object(ue["c"])(["errorCount"]), {
                tagNavList: function () {
                    return this.$store.state.app.tagNavList
                },
                tagRouter: function () {
                    return this.$store.state.app.tagRouter
                },
                userAvator: function () {
                    return this.$store.state.user.avatorImgPath
                },
                cacheList: function () {
                    return ["ParentView"].concat(Object(o["a"])(this.tagNavList.length ? this.tagNavList.filter(function (e) {
                                return !(e.meta && e.meta.notCache)
                            }).map(function (e) {
                                return e.name
                            }) : []))
                },
                menuList: function () {
                    var e = this.$store.getters.menuList;
                    return e
                },
                local: function () {
                    return this.$store.state.app.local
                },
                hasReadErrorPage: function () {
                    return this.$store.state.app.hasReadErrorPage
                },
                unreadCount: function () {
                    return this.$store.state.user.unreadCount
                }
            }),
            methods: Object(i["a"])({}, Object(ue["d"])(["setBreadCrumb", "setTagNavList", "addTag", "setLocal", "setHomeRoute"]), Object(ue["b"])(["handleLogin", "getUnreadMessageCount"]), {
                turnToPage: function (e) {
                    var t = {},
                    n = t.name,
                    a = t.params,
                    r = t.query;
                    "string" === typeof e ? n = e : (n = e.name, a = e.params, r = e.query),
                    n.indexOf("isTurnByHref_") > -1 ? window.open(n.split("_")[1]) : this.$router.push({
                        name: n,
                        params: a,
                        query: r
                    })
                },
                handleCollapsedChange: function (e) {
                    this.collapsed = e
                },
                handleCloseTag: function (e, t, n) {
                    if ("all" === t)
                        this.turnToPage(this.$config.homeName);
                    else if (Object(m["m"])(this.$route, n) && "others" !== t) {
                        var a = Object(m["f"])(this.tagNavList, n);
                        this.$router.push(a)
                    }
                    this.setTagNavList(e)
                },
                handleClick: function (e) {
                    this.turnToPage(e)
                }
            }),
            watch: {
                $route: function (e) {
                    var t = e.name,
                    n = e.query,
                    a = e.params,
                    r = e.meta;
                    this.addTag({
                        route: {
                            name: t,
                            query: n,
                            params: a,
                            meta: r
                        },
                        type: "push"
                    }),
                    this.setBreadCrumb(e),
                    this.setTagNavList(Object(m["e"])(this.tagNavList, e)),
                    this.$refs.sideMenu.updateOpenName(e.name)
                }
            },
            mounted: function () {
                var e = this;
                this.setTagNavList(),
                this.setHomeRoute(Fe["a"]),
                this.addTag({
                    route: this.$store.state.app.homeRoute
                }),
                this.setBreadCrumb(this.$route),
                this.setLocal(this.$i18n.locale),
                this.tagNavList.find(function (t) {
                    return t.name === e.$route.name
                }) || this.$router.push({
                    name: this.$config.homeName
                }),
                this.getUnreadMessageCount()
            }
        }),
        Xe = Qe,
        Ke = Object(v["a"])(Xe, a, r, !1, null, null, null);
        Ke.options.__file = "main.vue";
        var $e = Ke.exports;
        t["a"] = $e
    }
});
